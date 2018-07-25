---
title: Setting up MySql Server
author: Shahid N. Shah
type: post
date: 2012-09-25T09:27:10+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-mysql-server/
categories:
  - IT Infrastructure SOPs

---
## MySql installation

Centos OS

    sudo yum install mysql-server
    

Ubuntu

    sudo apt-get install mysql-server
    

## Manage mysql Server

CentOS

Home configuration directory for MySql is /etc/mysql/.

Start/Stop/Restart mysqld using following command

    /etc/init.d/mysqld <start|stop|restart>
    

Ubuntu

Home configuration directory for mysql is /etc/mysql

Start/Stop/Restart Apache using following command

    /etc/init.d/mysql <start|stop|restart>
    

## Show current mysql database

    mysql -u root -p
    show databases;
    

## Create database

    mysql -u root -p
    create database <Database name>
    

## Delete database

    mysql -u root -p
    drop database <database name>