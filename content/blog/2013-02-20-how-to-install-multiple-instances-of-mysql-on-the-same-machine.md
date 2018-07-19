---
title: How to install multiple Instances of MySQL on a same machine
author: Roni Baby
type: post
date: 2013-02-20T11:55:37+00:00
url: /knowledgebase/server-sops/2013/02/20/how-to-install-multiple-instances-of-mysql-on-the-same-machine/
categories:
  - Server SOPs

---
## Create separate data and log directories for new instance

    mkdir /var/lib/mysql2
    chown -R mysql:mysql /var/lib/mysql2/
    mkdir /var/log/mysql2
    chown -R mysql:mysql /var/log/mysql2
    

## Create a new mysql configuration file for new instance

    cp -R /etc/mysql/ /etc/mysql2
    cp /etc/mysql/my.cnf /etc/mysql2/my.cnf
    

(or change the path appropriately for your configuration file is in a different place).

## Next, we need to edit our new configuration file for creating new mysql instance

    cd /etc/mysql2/
    sed -i 's/3306/3307/g' my.cnf
    sed -i 's/mysqld.sock/mysqld2.sock/g' my.cnf
    sed -i 's/mysqld.pid/mysqld2.pid/g' my.cnf
    sed -i 's/var\/lib\/mysql/var\/lib\/mysql2/g' my.cnf
    sed -i 's/var\/log\/mysql/var\/log\/mysql2/g' my.cnf
    

## Initializing and starting new instance

    mysql_install_db --user=mysql --datadir=/var/lib/mysql2/
    
    mysqld_safe --defaults-file=/etc/mysql2/my.cnf &
    

## We can connect to our new instance using:

    mysql -S /var/run/mysqld/mysqld2.sock -u root -p
    

## We can stop this instance through the following

    mysqladmin -S /var/run/mysqld/mysqld2.sock shutdown -u root -p