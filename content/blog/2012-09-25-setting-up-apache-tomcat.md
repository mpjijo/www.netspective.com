---
title: Setting up Apache Tomcat
author: Shahid N. Shah
type: post
date: 2012-09-25T08:54:42+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-tomcat/
categories:
  - IT Infrastructure SOPs

---
### Apache Tomcat Installation and SSL Configuration

#### Prerequisites

Make sure [Java is available][1]

    java -version
    

#### Directory structure

Our standard approach for Tomcat is to install different versions into /opt. If you did an ls in /opt, the directory would look something like this:

    drwxr-xr-x  5 root     root     4096 2012-03-11 11:33 ./
    drwxr-xr-x 22 root     root     4096 2012-03-10 08:46 ../
    drwxr-xr-x  9 root     root     4096 2012-03-11 11:32 apache-tomcat-7.0.26/
    drwxr-xr-x  9 root     root     4096 2012-03-11 11:32 apache-tomcat-7.0.27/
    

#### Download and install Apache Tomcat

You can see/download latest versions of tomcat from the url: <http://tomcat.apache.org/whichversion.html>

Currently we are using Apache Tomcat version 7.0.27.

    mkdir -p $HOME/setup; cd $HOME/setup    
    curl http://apache.petsads.us/tomcat/tomcat-7/v7.0.27/bin/apache-tomcat-7.0.27.tar.gz > apache-tomcat-7.0.27.tar.gz
    sudo tar xvf apache-tomcat-7.0.27.tar.gz -C /opt
    sudo ln -s /opt/apache-tomcat-7.0.27 /opt/tomcat
    

#### Create tomcat service group and user

    sudo groupadd --system tomcat
    sudo useradd -g tomcat --system --home /home/tomcat --create-home --shell /bin/bash tomcat
    sudo usermod -G www-data tomcat
    

#### Prepare the instance (CATALINA_BASE)

    sudo -u tomcat mkdir /home/tomcat/instance
    sudo cp -R /opt/apache-tomcat-7.0.27/conf /home/tomcat/instance/
    sudo chown -R tomcat.tomcat /home/tomcat/instance/conf
    sudo -u tomcat mkdir /home/tomcat/instance/logs
    sudo -u tomcat mkdir /home/tomcat/instance/temp
    sudo -u tomcat mkdir /home/tomcat/instance/webapps
    

#### Configure SSL for tomcat

Use the command below to create the keystore and while creating use hostname for &#8220;first and last name&#8221; and &#8220;secret&#8221; as
  
password for testing or a real password that you store in the Password [how to order levitra online][2], [lioresal without prescription][3] locker for a production system.

    sudo -u tomcat /usr/java/jre/bin/keytool -genkey -alias tomcat -keyalg RSA -keystore /home/tomcat/instance/ssl_keystore
    

#### Edit instance server.xml file and include keystore information

    sudo vi /opt/tomcat/conf/server.xml
    

Uncomment/edite these lines:

    <Connector port="8443" protocol="HTTP/1.1" SSLEnabled="true"
               maxThreads="150" scheme="https" secure="true"
               clientAuth="false" sslProtocol="TLS" 
               keystoreFile="/home/tomcat/instance/ssl_keystore" keystorePass="secret" />
    

Note: be sure to use the same password in keystorePass=&#8221;secret&#8221; that you used when you generated the keystore.

#### Create instance service script

    sudo touch /etc/init.d/tomcat
    sudo chmod +x /etc/init.d/tomcat
    

Setup for auto start at boot:

    sudo update-rc.d tomcat defaults
    

Initialize the script:

    sudo vi /etc/init.d/tomcat
    

Add this content into the file:

    #!/bin/bash
    #
    # tomcat     This shell script takes care of starting and stopping Tomcat
    #
    # chkconfig: - 80 20
    #
    ### BEGIN INIT INFO
    # Provides: tomcat
    # Required-Start: $network $syslog
    # Required-Stop: $network $syslog
    # Default-Start:
    # Default-Stop:
    # Description: Release implementation for Servlet 2.5 and JSP 2.1
    # Short-Description: start and stop tomcat
    ### END INIT INFO
    
    ## Source function library.
    #. /etc/rc.d/init.d/functions
    export JAVA_HOME=/usr/java/jre
    export JAVA_OPTS="-Dfile.encoding=UTF-8 \
      -Dnet.sf.ehcache.skipUpdateCheck=true \
      -XX:+DoEscapeAnalysis \
      -XX:+UseConcMarkSweepGC \
      -XX:+CMSClassUnloadingEnabled \
      -XX:+UseParNewGC \
      -XX:MaxPermSize=128m \
      -Xms512m -Xmx1024m"
    export PATH=$JAVA_HOME/bin:$PATH
    export CATALINA_HOME=/opt/apache-tomcat-7.0.27
    export CATALINA_BASE=/home/tomcat/instance
    SHUTDOWN_WAIT=20
    
    tomcat_pid() {
      echo `ps aux | grep org.apache.catalina.startup.Bootstrap | grep -v grep | awk '{ print $2 }'`
    }
    
    start() {
      pid=$(tomcat_pid)
      if [ -n "$pid" ] 
      then
        echo "Tomcat is already running (pid: $pid)"
      else
        # Start tomcat
        echo "Starting tomcat"
        ulimit -n 100000
        umask 007
        /bin/su -p -s /bin/sh tomcat $CATALINA_HOME/bin/startup.sh
      fi
    
      return 0
    }
    
    stop() {
      pid=$(tomcat_pid)
      if [ -n "$pid" ]
      then
        echo "Stoping Tomcat"
        /bin/su -p -s /bin/sh tomcat $CATALINA_HOME/bin/shutdown.sh
    
        let kwait=$SHUTDOWN_WAIT
        count=0;
        until [ `ps -p $pid | grep -c $pid` = '0' ] || [ $count -gt $kwait ]
        do
          echo -n -e "\nwaiting for processes to exit";
          sleep 1
          let count=$count+1;
        done
    
        if [ $count -gt $kwait ]; then
          echo -n -e "\nkilling processes which didn't stop after $SHUTDOWN_WAIT seconds"
          kill -9 $pid
        fi
      else
        echo "Tomcat is not running"
      fi
    
      return 0
    }
    
    case $1 in
    start)
      start
    ;; 
    stop)   
      stop
    ;; 
    restart)
      stop
      start
    ;;
    status)
      pid=$(tomcat_pid)
      if [ -n "$pid" ]
      then
        echo "Tomcat is running with pid: $pid"
      else
        echo "Tomcat is not running"
      fi
    ;; 
    esac    
    exit 0
    

#### Start/Restart Tomcat:

    sudo service tomcat start
    sudo service tomcat status
    sudo service tomcat stop

 [1]: https://www.netspective.com/setting-up-java/
 [2]: https://pills24h.com/buy-levitra-online-without-prescription/
 [3]: http://prestige-pharmacy.com/buy-lioresal-baclofen/