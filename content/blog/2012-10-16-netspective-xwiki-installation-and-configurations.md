---
title: Netspective Xwiki Installation and Configurations
author: Shahid N. Shah
type: post
date: 2012-10-16T06:45:50+00:00
url: /knowledgebase/server-sops/2012/10/16/netspective-xwiki-installation-and-configurations/
categories:
  - Server SOPs

---
## Setting up Netspective XWiki Enterprise Manager

Steps for Ubuntu 10.04 server.

  * [[Setting up Ubuntu Servers][1]]
  * [[Install Apache][2]]
  * [[Install latest java][3]]
  * [[Install Apache-Tomcat][4]]
  * [[Install Mysql][5]]

### Create a mysql database and set the permissions for a new user &#8216;xwiki&#8217;

    mysql -u root -p -e "create database xwiki"
    mysql -u root -p -e "grant all privileges on xwiki.* to xwiki@127.0.0.1 identified by 'xwiki'"
    

### Download current Xwiki Enterprise Manager war file

http://manager.xwiki.org/xwiki/bin/view/Main/Download

    cd $HOME/setup
    wget http://download.forge.objectweb.org/xwiki/xwiki-manager-web-4.0.war
    cp xwiki-manager-web-4.0.war /opt/tomcat/webapps/w.war
    /opt/tomcat/bin/catalina.sh stop
    /opt/tomcat/bin/catalina.sh start
    

### Download latest version of the mysql connector

http://repo1.maven.org/maven2/mysql/mysql-connector-java/

    wget http://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.19/mysql-connector-java-5.1.19.jar
    

Copy it to the lib directory of xwiki

    sudo cp mysql-connector-java-5.1.19.jar /opt/tomcat/webapps/w/WEB-INF/lib/
    

### Edit the xwiki/WEB-INF/hibernate.cfg.xml file:

    sudo cp /opt/tomcat/webapps/w/WEB-INF/hibernate.cfg.xml /opt/tomcat/webapps/w/WEB-INF/hibernate.cfg.xml.bak
    sudo vi /opt/tomcat/webapps/w/WEB-INF/hibernate.cfg.xml
    

uncomment the following

    <property name="connection.url">jdbc:mysql://localhost/xwiki?useServerPrepStmts=false&amp;useUnicode=true&amp;characterEncoding=UTF-8</property>
    <property name="connection.username">xwiki</property>
    <property name="connection.password">xwiki</property>
    <property name="connection.driver_class">com.mysql.jdbc.Driver</property>
    <property name="dialect">org.hibernate.dialect.MySQL5InnoDBDialect</property>
    <property name="connection.provider_class">com.xpn.xwiki.store.DBCPConnectionProvider</property>
    <property name="connection.pool_size">2</property>
    <property name="statement_cache.size">2</property>
    <mapping resource="xwiki.hbm.xml"/>
    <mapping resource="feeds.hbm.xml"/>
    <mapping resource="activitystream.hbm.xml"/>
    

restart tomcat

    /opt/tomcat/bin/catalina.sh stop
    /opt/tomcat/bin/catalina.sh start
    

### Access the link http://server-ip:8080/w>

default administrator: username=Admin, password=admin

import the default .xar templates.

## Create aliases for default wiki

    1. go to http://<Server-ip>:8080/w/bin/view/WikiManager/WebHome
    2. click on settings corresponding to the default wiki
    3. put 'wiki.netspective.com' under 'create new aliase' box
    4. Then click 'create'
    

### Enable superadmin account in xwiki

Edit the xwiki.cfg file and enable the xwiki.superadminpassword property

    vi /opt/tomcat/webapps/w/WEB-INF/xwiki.cfg
    xwiki.superadminpassword=<password-here>
    

Restart tomcat

    /opt/tomcat/bin/catalina.sh stop
    /opt/tomcat/bin/catalina.sh start
    

### Create multiple wiki&#8217;s

Automatically created mysql database for each wiki we created.

    1. go to http://wiki.netspective.com:8080/w/bin/view/WikiManager/CreateNewWiki
    2. click on create new
    

### Configure Apache as frontend of this wiki

    sudo apt-get install libapache2-mod-proxy-html
    apt-get install libxml2-dev
    

Load the modules in apache2.conf file

    LoadModule  proxy_module         /usr/lib/apache2/modules/mod_proxy.so
    LoadModule  proxy_http_module    /usr/lib/apache2/modules/mod_proxy_http.so
    LoadModule  headers_module       /usr/lib/apache2/modules/mod_headers.so
    LoadFile    /usr/lib/libxml2.so
    

Create www.netspective.citrusdev.com.conf with the following content in /etc/apache2/sites-available

    <VirtualHost 50.57.140.174:80>
    ProxyPreserveHost On
    ProxyPass / http://50.57.140.174:8080/
    ProxyPassReverse / http://50.57.140.174:8080/
    ServerName wiki.netspective.com
    </VirtualHost>
    

Create shortcut of this file

    sudo ln -s /etc/apache2/sites-available/www.netspective.citrusdev.com.conf 001-wiki.netspective.com.conf
    sudo service apache2 restart
    

After configuring this we can access [buy celebrex without prescription][6], [purchase clomid][7] xwiki in port 80 like
  
http://wiki.netspective.com/w

## Notes by Shahid, need to include above

        ## to Fix java.lang.OutOfMemoryError: PermGen space
        export JAVA_OPTS="-server -XX:MaxPermSize=128M"
    
        cd /opt/xwiki 
        ## get latest version
        export XWIKI=xwiki-manager-web-4.0
        sudo unzip $XWIKI.war -d $XWIKI
        cd $XWIKI/WEB-INF
        sudo mv hibernate.cfg.xml hibernate.cfg.xml.orig
        sudo mv xwiki.cfg xwiki.cfg.orig
        sudo mv xwiki.properties xwiki.properties.orig
        sudo cp /opt/xwiki/etc/hibernate.cfg.xml .
        sudo cp /opt/xwiki/etc/xwiki.cfg .
        sudo cp /opt/xwiki/etc/xwiki.properties .
        sudo ln -s /opt/xwiki/xwiki-manager-web-4.0 /opt/tomcat/webapps/w

 [1]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/sop-for-setting-up-ubuntu-servers/
 [2]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-httpd-server/
 [3]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-java/
 [4]: www.netspective.citrusdev.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-tomcat/
 [5]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-mysql-server/
 [6]: https://pills24h.com/buy-celebrex-online-without-prescription/
 [7]: http://prestige-pharmacy.com/buy-clomid-online/