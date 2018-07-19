---
title: Setting up Graylog Server
author: Shahid N. Shah
type: post
date: 2012-09-25T09:17:58+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-graylog-server/
categories:
  - IT Infrastructure SOPs

---
## Graylog2 Server

### Prerequisite

  * [Setting up Elastic Search][1]
  * [Setting up Java][2]. Minimum required version 6.

### Download and Install

Download [graylog2 server0.9.6][3]

Extract the graylog2 server tar file using the given below command and change to the installation directory

    sudo mkdir /opt/graylog2
    sudo tar -xvf ~/Downloads/graylog2-server-0.9.6.tar.gz -C /opt/graylog2
    cd /opt/graylog2/graylog2-server-0.9.6
    

Create a copy graylog2.conf using the example configuration file. The parameters to be updated are listed below

    sudo cp graylog2.conf.example graylog2.conf
    sudo vim graylog2.conf
    

Make sure following parameters were set with appropriate values.

    syslog_listen_port = 514 [default]
    syslog_protocol = udp [default]
    elasticsearch_url = http://<ipaddress>:9200/
    elasticsearch_index_name = graylog2
    mongodb_useauth = true
    mongodb_user = grayloguser
    mongodb_password = 123
    mongodb_host = localhost
    mongodb_database = graylog2
    mongodb_port = 27017
    

Make sure, syslog, elasticsearch and mongodb is running.

    sudo /etc/init.d/syslog-ng start
    sudo /etc/init.d/elasticsearch start
    sudo /etc/init.d/mongodb start
    

Create new database and user in mongodb

    cd /opt/mongodb-linux-x86_64-2.0.2/bin/
    ./mongo
    use graylog2
    db.addUser('grayloguser','123');
    

Start the graylog2-server using given below commands

    cd /opt/graylog2/graylog2-server-0.9.6
    sudo java -jar graylog2-server.jar -f ./graylog2.conf
    

**Note: The configurations in graylog2.conf should be match that of the values set in elasticsearch.yml.**

### Startup Script

Open /etc/init.d/graylog-server

    sudo vim /etc/init.d/graylog-server
    

Copy and paste the following lines in /etc/init.d/graylog-server

    #!/bin/sh
    #DESCRIPTION:GRAYLOG SERVER STARTUP SCRIPT
    CMD=$1
    NOHUP=`which nohup`
    JAVA_CMD=/usr/java/home/bin/java
    GRAYLOG2_SERVER_HOME=/opt/graylog2/graylog2-server-0.9.6
    start() {
        if [ -f /tmp/graylog2.pid ]
        then
            echo "Graylog2-Server already running in `cat /tmp/graylog2.pid`"
        else
            echo "Starting graylog2-server ..."
            $NOHUP $JAVA_CMD -jar $GRAYLOG2_SERVER_HOME/graylog2-server.jar -f $GRAYLOG2_SERVER_HOME/graylog2.conf &
            echo "Graylog2-server Started"
        fi
    }
    stop() {
        PID=`cat /tmp/graylog2.pid`
        echo "Stopping graylog2server $PID ..."
        kill -9 $PID
        echo "Graylog2-server Stopped $PID"
    }
    case "$CMD" in
        start)
            start
            ;;
        stop)
            stop
            ;;
        *)
        echo "Usage $0 {start|stop}"
        RETVAL=1
    esac
    exit 0
    

Provide Execute permission

    sudo chmod +x /etc/init.d/graylog-server
    

Start GraylogServer

    sudo /etc/init.d/graylog-server start
    

Use the following command to stop GraylogServer

    sudo /etc/init.d/graylog-server stop
    

[order zoloft online][4], [zithromax online][5]

 [1]: https://www.netspective.com/settiing-up-elastic-search/
 [2]: https://www.netspective.com/setting-up-java/
 [3]: https://github.com/Graylog2/graylog2-server/downloads
 [4]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [5]: http://prestige-pharmacy.com/buy-zithromax-online/