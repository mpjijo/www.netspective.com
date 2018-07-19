---
title: Setup Percona mysql replication over SSL
author: Roni Baby
type: post
date: 2012-11-14T07:20:21+00:00
url: /uncategorized/2012/11/14/setup-percona-mysql-replication-over-ssl/
categories:
  - IT Infrastructure SOPs
  - Uncategorized

---
## Setting up Percona mysql master server

Install these two in Both Master and Slave servers

  1. Install [Percona mysql server][1]
  2. Install [Percona xtrabackup][2]

Make a full mysql data backup and prepare it for restore (Do it in Master)

    innobackupex --user=root --password=<password> /path/to/backupdir
    
    innobackupex --user=root --password=<password> --apply-log /path/to/backupdir/$TIMESTAMP/
    

Create mysql replication user over SSL

    GRANT REPLICATION SLAVE ON *.* TO 'slave_user'@'%' IDENTIFIED BY 'slave_password' REQUIRE SSL;
    

Copy this backup in to the Slave server

    rsync -avprP -e ssh /path/to/backupdir/$TIMESTAMP/ user@slave-server:/percona-backup/ 
    

Edit my.cnf file for preparing this server as a master. Add the followings in this file

    bind-address=<master server IP>
    server-id=1
    log_bin=/var/log/mysql/mysql-bin.log
    
    
    sudo mysql restart
    

Enable mysql port accessing from slave server

    sudo ufw allow proto tcp from <slave server IP> to any port 3306
    

#### Enable SSL support in Master mysql server

    sudo apt-get install ssl-cert
    

Now we must check if MySQL server support SSL connections.

    mysql -u root -p
    

&#8230;and run the following command on the MySQL shell:

    show variables like '%ssl%';
    

If the output is as follows (both have\_openssl and have\_ssl show DISABLED)&#8230;

    mysql> show variables like '%ssl%';
    +---------------+----------+
    | Variable_name | Value    |
    +---------------+----------+
    | have_openssl  | DISABLED |
    | have_ssl      | DISABLED |
    | ssl_ca        |          |
    | ssl_capath    |          |
    | ssl_cert      |          |
    | ssl_cipher    |          |
    | ssl_key       |          |
    +---------------+----------+
    7 rows in set (0.00 sec)
    
    mysql>
    

&#8230; it means that Percona MySQL was compiled with SSL support, but it&#8217;s currently not enabled. To enable it, leave the MySQL shell and create self signed certificates

    mkdir newcerts && cd newcerts
    

Create CA certificate

    openssl genrsa 2048 > ca-key.pem
    openssl req -new -x509 -nodes -days 3600 -key ca-key.pem -out ca-cert.pem
    

Create server certificate, remove passphrase, and sign it

    openssl req -newkey rsa:2048 -days 3600 -nodes -keyout server-key.pem -out server-req.pem
    openssl rsa -in server-key.pem -out server-key.pem
    openssl x509 -req -in server-req.pem -days 3600 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem
    

Create client certificate, remove passphrase, and sign it

    openssl req -newkey rsa:2048 -days 3600 -nodes -keyout client-key.pem -out client-req.pem
    openssl rsa -in client-key.pem -out client-key.pem
    openssl x509 -req -in client-req.pem -days 3600 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem
    

After generating the certificates, verify them with

    openssl verify -CAfile ca-cert.pem server-cert.pem client-cert.pem
    
    server-cert.pem: OK
    client-cert.pem: OK
    

Create a folder for keeping the certificates in master server

    mkdir /etc/mysql/certs
    cp ca-cert.pem server-cert.pem server-key.pem /etc/mysql/certs
    

Edit my.cnf file for enabling SSL support in Master, Add the following under [mysqld]

    ssl-ca=/etc/mysql/certs/cacert.pem
    ssl-cert=/etc/mysql/certs/server-cert.pem
    ssl-key=/etc/mysql/certs/server-key.pem
    
    /etc/init.d/mysql restart
    

copy client certificates into slave server /etc/mysql/cert

    scp ca-cert.pem client-cert.pem client-key.pem <slave SSH User>@$slave_IP:/etc/mysql/cert
    

## Setting up Percona mysql slave server

Create backup of current mysql data folder in Slave.

    /etc/init.d/mysql stop
    
    sudo mv /var/lib/mysql /var/lib/mysql_bak
    

copy my.cnf file from master to slave server (put it in /etc/mysql/) and edit the following for prepairing this server as slave

    bind-address= <IP address to slave server>
    server-id=2
    #log_bin=/var/log/mysql/mysql-bin.log
    

Need to change the password in /etc/mysql/debian.cnf in slave. Check with corresponding file in master server for getting password. Make sure this password is same in both servers.

and move the snapshot from the Master in its place

    mv /percona-backup/$TIMESTAMP/ /var/lib/mysql/
    

After moving data over, make sure MySQL has proper permissions to access them.

    chown -R mysql:mysql /var/lib/mysql
    /etc/init.d/mysql start
    

Go to mysql console and type the following with proper values. For getting the values of MASTER\_LOG\_FILE and MASTER\_LOG\_POS open up xtrabackup\_binlog\_info file

    cat /var/lib/mysql/xtrabackup_binlog_info
    
    CHANGE MASTER TO MASTER_HOST='<IP Address of master server>';
    CHANGE MASTER TO MASTER_USER='mysql Replication user';
    CHANGE MASTER TO MASTER_PASSWORD='User password';
    CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000001';
    CHANGE MASTER TO MASTER_LOG_POS=107;
    CHANGE MASTER TO MASTER_SSL=1;
    CHANGE MASTER TO MASTER_SSL_CA = '/etc/mysql/certs/ca-cert.pem';
    CHANGE MASTER TO MASTER_SSL_CERT = '/etc/mysql/certs/client-cert.pem';
    CHANGE MASTER TO MASTER_SSL_KEY = '/etc/mysql/certs/client-key.pem';
    START SLAVE;
    

Make sure everything went OK with the following command. Try this command from mysql console in slave, And make sure the status of Slave\_IO\_Running and Slave\_SQL\_Running is yes

    SHOW SLAVE STATUS \G
    

Ref: [http://www.percona.com/doc/percona-xtrabackup/howtos/setting\_up\_replication.html#replication-howto][3]

Ref: <http://dev.mysql.com/doc/refman/5.1/en/creating-ssl-certs.html>

Ref: <http://www.howtoforge.com/how-to-set-up-mysql-database-replication-with-ssl-encryption-on-ubuntu-9.10>

 [1]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-percona-mysql-server/
 [2]: https://www.netspective.com/uncategorized/2012/10/17/setting-up-percona-xtrabackup/
 [3]: http://www.percona.com/doc/percona-xtrabackup/howtos/setting_up_replication.html#replication-howto