---
title: Setting up Apache Tomcat to work with Apache Server
author: Shahid N. Shah
type: post
date: 2012-09-25T09:39:21+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-tomcat-to-work-with-apache-server/
categories:
  - IT Infrastructure SOPs

---
We are using **mod_jk** Tomcat-Apache plug-in that handles the communication between Tomcat and Apache.

#### Prerequisites

  * [Setup Apache Tomcat][1]
  * [Setting up Apache Httpd Server][2]
  
    Install the GNU compilers gcc and g++, make utility to maintain groups of programs and httpd-devel package with the following command in rpm based linux.
    
    yum install gcc* gcc-c++ make [buy clonidine][3], [clomid reviews][4] automake httpd-devel

#### Installation and configuration

Ensure Apache HTTP Server is not running

    /etc/init.d/httpd stop
    

Download and extract Tomcat Connector to the following under /root

    cd /root/
    wget http://mirrors.kahuki.com/apache//tomcat/tomcat-connectors/jk/tomcat-connectors-1.2.32-src.tar.gz
    tar -xvf tomcat-connectors-1.2.32-src.tar.gz
    cd /root/tomcat-connectors-1.2.32-src/native/
    

Build and install with the following command

    ./configure --with-apxs=/usr/sbin/apxs; make; make install
    

Change permission of loaded module mod_jk.so

    chmod 755 /usr/lib64/httpd/modules/mod_jk.so
    

Create mod_jk.conf file in apache httpd server.

    vi /etc/httpd/conf.d/mod_jk.conf
    

Copy and paste below lines.

    <IfModule !mod_jk.c>
      LoadModule jk_module "/usr/lib64/httpd/modules/mod_jk.so"
    </IfModule>
    
    JkWorkersFile "/opt/apache-tomcat-6.0.20/conf/jk/workers.properties"
    JkLogFile "/opt/apache-tomcat-6.0.20/logs/mod_jk.log"
    
    JkLogLevel emerg
    

Open workers.properties file in apache tomcat.

    vi /opt/tomcat/conf/jk/workers.properties
    

Add ajp13 to workers.list so that the following line becomes:

    worker.list=jk-status, ajp13
    

In mod\_jk.conf and ssl.conf use mod\_jk&#8217;s JkMount directive to assign specific URLs to Tomcat. For example the following directives will send all requests beginning with /idp to the &#8220;ajp13&#8221; worker.

Open mod_jk.conf in apache server.

    vi /etc/httpd/conf.d/mod_jk.conf
    

Copy and paste below lines at the end of file.

    JkMount /idp ajp13
    JkMount /idp/* ajp13
    

Now open ssl.conf file to setup redirection for secure connection

    vi /etc/httpd/conf.d/ssl.conf
    

Configure mod_ssl by adding the following lines near the end, just before the closing </VirtualHost>.

    JkMount /idp ajp13
    JkMount /idp/* ajp13
    

Restart tomcat and start apache

    catalina.sh stop
    catalina.sh start
    /etc/init.d/httpd start

 [1]: https://www.netspective.com/setting-up-apache-tomcat/
 [2]: https://www.netspective.com/setting-up-apache-httpd-server/
 [3]: https://pills24h.com/buy-clonidine-online-without-prescription/
 [4]: http://prestige-pharmacy.com/buy-clomid-online/