---
title: slave.mysql.rdbms.netspective.com
author: Roni Baby
type: post
date: 2013-03-08T08:55:26+00:00
url: /knowledgebase/secure-sops/2013/03/08/slave-mysql-rdbms-netspective-com/
categories:
  - Secure SOPs

---
## slave.mysql.rdbms.netspective.com

Please refer evernote page for more detail

evernote:///view/27674380/s216/28259b6d-c9f5-43bc-a99e-324eb3dd875c/28259b6d-c9f5-43bc-a99e-324eb3dd875c/709d19a5-0c4b-4866-bd91-9f10a803e6a3

This is a replication slave server for the master mysql servers of mysql.rdbms.\* and monitor.\* . In this server there are two instance are running

**Instance-1** (Default instance)

This instance is used as the slave server of mysql.rdbms.* server.

    login details       = root/password
    configuration file  = /etc/mysql/my.cnf
    port                = 3306
    socket              = /var/run/mysqld/mysqld.sock
    log folder          = /var/log/mysql/mysql.log
    data folder         = /var/lib/mysql
    LUKS password       = password
    

This data folder location is a LUKS volume and mounted it as /var/lib/mysql. So we have to manually mount it according to server restart. Do the following steps to mount it

    sudo /root/mount-lvm-over-luks.pl --logical-volume mysql-data --volume-group vg0 --mount-point /var/lib/mysql /pv00.luks
    /etc/init.d/mysql restart
    

**Instance-2** (Additional instance)

This instance is used as slave server of monitor.netspective.com

    login details       = root/password
    configuration file  = /etc/mysql2/my.cnf
    port                = 3307
    socket              = /var/run/mysqld/mysqld2.sock
    log folder          = /var/log/mysql2/mysql.log
    data folder         = /var/lib/mysql2
    

How to login into this second instance

    mysql -S /var/run/mysqld/mysqld2.sock -u root -p