---
title: Steps for moving Zabbix database
author: Roni Baby
type: post
date: 2012-11-07T15:11:57+00:00
url: /knowledgebase/server-sops/2012/11/07/steps-for-moving-zabbix-database/
categories:
  - Server SOPs

---
# Steps for moving Zabbix database

Backup current database

Restore this database into desired server

Stop Zaabix-server

    /etc/init.d/zabbix-server stop
    

Edit zabbix server configuration file for the following parameters for new database settings

    vi /usr/local/etc/zabbix_server.conf
    
    DBHost=
    DBName=
    DBUser=
    DBPassword=
    
    
    /etc/init.d/zabbix-server start
    

Configure **zabbix frontend** to use new database settings. doing this login zabbix frontend, then got to Administartion -> Installation