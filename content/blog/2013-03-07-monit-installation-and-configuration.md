---
title: Monit Installation and Configuration
author: Geo P C
type: post
date: 2013-03-07T13:24:49+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/07/monit-installation-and-configuration/
categories:
  - IT Infrastructure SOPs

---
Installation and Configuration

Install Monit

    sudo apt-get install monit
    

Configuration file:

    sudo nano /etc/monit/monitrc
    

Restarting Services:

    sudo /etc/init.d/monit restart
    

We need to add the following line for different configurations and they are as follows:

If you want to log to a standalone log file:

    set logfile /var/log/monit.log
    

You can set alert recipients:

    set alert geopc@citrusinformatics.com
    

Check a process and when it down we need to restart it:

For Nginx:

    check process nginx
    with pidfile /var/run/nginx.pid #Pid file for nginx in my case it located in /opt/nginx/logs/
    group www-data
    start program = "/etc/init.d/nginx start"
    stop program = "/etc/init.d/nginx stop"
    if failed host 127.0.0.1 port 80 then restart #set your server IP that runs nginx
    if 5 restarts with 5 cycles then timeout
    

For MySQL:

    check process mysqld with pidfile /var/run/mysqld/mysqld.pid
    group mysql
    start program = "/etc/init.d/mysql start"
    stop program = "/etc/init.d/mysql stop"
    if failed host 127.0.0.1 port 3306 then restart
    if 5 restarts within 5 cycles then timeout
    

Check server load and when it is higher than 5 we need to execute a particular command:

    check system localhost
    if loadavg (1min) > 5 then exec "/etc/init.d/php5-fpm restart"