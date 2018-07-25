---
title: Build Fluent from Source
author: Shahid N. Shah
type: post
date: 2012-10-16T05:15:48+00:00
url: /knowledgebase/developer-sops/2012/10/16/build-fluent-from-source/
categories:
  - Developer SOPs

---
## Fluent Compilation and Configuration Steps

### Prerequisite

Make sure following products were installed and available.

  * \[Setting up GitHub Keys\](../System Operations &#92;(SysOps&#92;)/Setting up GitHub Keys.md)
  * \[Build Boost Library\](./Build Boost Library.md)
  * \[OpenSpliceDDS\] (../System Operations &#92;(SysOps&#92;)/Setting up OpenSpliceDDS.md)
  * \[log4cpp\](./Build Log4CPP from Source.md)
  * \[WebSocket++ &#8211; Legacy\](./Build Websocket++ Legacy from Source.md)
  * \[MongoDB C++ Driver\](./Build MongoDB C++ Driver from Source.md)
  * \[Graylog Webinterface\](../System Operations &#92;(SysOps&#92;)/Setting up Graylog WebInterface.md)
  * \[Setting Up Apache HttpServer\](../System Operations &#92;(SysOps&#92;)/Setting up Apache Httpd Server.md)

### Download and Install

Download the netspective-fluent from the Netspective github by cloning the repository

    cd ~/Downloads
    git clone git@github.com:netspective/fluent.git
    

Update the Makefile in support/build to replace @@topdir-netspective-fluent@@ with fluent parent directory

Run the following command to build fluent.

    cd support/build
    make
    

Run following command to clean the build files. You can again re-build using the above command after applying required changes.

    make clean
    

After successful completion of compilation, binary files will be created in bin directory under fluent home directory.

    cd <Fluent_Home>/bin
    

### Install PHP

In CentOS

    sudo yum install php
    

In Ubuntu

    sudo apt-get install mod-php-apache2
    

Now, open <netspective-fluent>/src/web/config.php and change the following configuration properties with appropriate values

    <Graylog-Server-IP>
    <Apache-Server-IP>
    <WebSocket-IP>:<WebSocket-Port>
    <Fluent-Domain>
    

### Configure Apache Httpd

Create a new site configuration file

In CentOS

    sudo vim /etc/httpd/sites-available/fluent.conf
    

In Ubundu

    sudo vim /etc/apache2/sites-available/fluent.conf
    

Copy and paste the following lines by replacing the <WebDirectory> with <Fluent_Home>/src/web.

    <VirtualHost *:80>
        DocumentRoot "<WebDirectory>"
        <Directory "<WebDirectory>">
            DirectoryIndex index.html index.htm index.php
            Options Indexes FollowSymLinks
            AllowOverride None
            Order allow,deny
            Allow from all
            Options +ExecCGI
            AddHandler cgi-script cgi pl
        </Directory>
    </VirtualHost>
    

Enable the site

In CentOS

    sudo cp /etc/httpd/sites-available/fluent.conf /etc/httpd/sites-enable/fluent.conf
    sudo /etc/init.d/httpd restart
    

In Ubuntu

    sudo cp /etc/apache2/sites-available/fluent.conf /etc/apache2/sites-enable/fluent.conf
    sudo /etc/init.d/apache2 restart
    

### Update Graylog Web Interface

Change to the web interface from the installation folder by using the command

    cd /opt/graylog2/graylog2-web-interface-0.9.6/
    

Add the following line in app/views/layouts/application.html.erb at line number 60. Change <ip-or-hostname-apachehttp-server> with Apache HTTP server IP/dsudo omain.

    <li> <a href="http://<ip-or-hostname-apachehttp-server>/index.php">DEVICES</a></li>
    

### Troubleshooting

error: .INT32\_MIN. or .INT32\_MAX. was not declared in this scope

    Replace INT32_MIN with 0 and INT32_MAX with 2147483647
