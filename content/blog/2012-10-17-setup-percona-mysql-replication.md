---
title: Setup Percona mysql replication
author: Shahid N. Shah
type: post
date: 2012-10-17T10:00:59+00:00
url: /knowledgebase/sensitive-sops/2012/10/17/setup-percona-mysql-replication/
categories:
  - Sensitive SOPs

---
## Setting up Percona mysql master server

Install these two in Both Master and Slave servers

  1. Install [Percona mysql server][1]
  2. Install [Percona xtrabackup][2]

Make a full mysql data backup and prepare it for restore

    innobackupex --user=root --password=<password> /path/to/backupdir
    
    innobackupex --user=root --password=<password> --apply-log /path/to/backupdir/$TIMESTAMP/
    

Create a mysql user with replication privilages

    GRANT REPLICATION SLAVE ON *.*  TO 'mysql-user'@'$slaveip' IDENTIFIED BY '$pass';
    

Copy this backed up data in to the Slave server

    rsync -avprP -e ssh /path/to/backupdir/$TIMESTAMP/ user@slave-server:/percona-backup/ 
    

Edit my.cnf file for preparing this server as a master. Add the followings in this file

    bind-address=<master server IP>
    server-id=1
    log_bin=/var/log/mysql/mysql-bin.log
    
    
    sudo mysql restart
    

Enable mysql port accessing from slave server

    sudo ufw allow proto tcp from <slave server IP> to any port 3306
    

## Setting up Percona mysql slave server

copy my.cnf file from master to slave server (put it in /etc/mysql/) and edit the following for prepairing this server as slave

    bind-address= <IP address to slave server>
    server-id=2
    

Need to change the password in /etc/mysql/debian.cnf in slave. Check with corresponding file in master server for getting password. Make sure this password is same in both servers.

Create a backup of current mysql data folder. Before doing this stop the mysql service

    sudo mv /var/lib/mysql /var/lib/mysql_bak
    

and move the snapshot from the Master in its place

    mv /percona-backup/$TIMESTAMP/ /var/lib/mysql/
    

After moving data over, make sure MySQL has proper permissions to access them.

    chown -R mysql:mysql /var/lib/mysql
    

Go to mysql console and type the following with proper values. For getting the values of MASTER\_LOG\_FILE and MASTER\_LOG\_POS open up xtrabackup\_binlog\_info file

    cat /var/lib/mysql/xtrabackup_binlog_info
    
    CHANGE MASTER TO MASTER_HOST='<IP Address of master server>';
    CHANGE MASTER TO MASTER_USER='mysql Replication user';
    CHANGE MASTER TO MASTER_PASSWORD='User password';
    CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000001';
    CHANGE MASTER TO MASTER_LOG_POS=107;
    START SLAVE;
    

Make sure everything went OK with the following command. Try this command from mysql console at slave, And make sure the status of Slave\_IO\_Running and Slave\_SQL\_Running is yes

    SHOW SLAVE STATUS \G
    

Ref: [http://www.percona.com/doc/percona-xtrabackup/howtos/setting\_up\_replication.html#replication-howto][3]

 [1]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-percona-mysql-server/
 [2]: https://www.netspective.com/uncategorized/2012/10/17/setting-up-percona-xtrabackup/
 [3]: http://www.percona.com/doc/percona-xtrabackup/howtos/setting_up_replication.html#replication-howto