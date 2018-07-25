---
title: Setting up Graylog WebInterface
author: Shahid N. Shah
type: post
date: 2012-09-25T09:18:58+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-graylog-webinterface/
categories:
  - IT Infrastructure SOPs

---
## Prerequisite

  * [Setting Up Rails][1]
  * [Setting up Graylog Server][2]
  * [Setting up Apache Httpd Server][3]
  * [Setting up Passenger with Apache][4]

## Download and Install

Download [graylog2-web interface 0.9.6][5]

Extract the downloaded zip file using the following command and change to the installation directory

    sudo tar -xvf ~/Downloads/graylog2-web-interface-0.9.6.tar.gz -C /opt/graylog2
    cd /opt/graylog2/graylog2-web-interface-0.9.6/
    

Add PATH, JAVA&#92;\_HOME, GEM&#92;\_HOME environment variables to be included in env_keep as root user.


    sudo vim /etc/sudoers
    Defaults    env_keep = "COLORS DISPLAY HOSTNAME HISTSIZE INPUTRC KDEDIR \
                            LS_COLORS MAIL PS1 PS2 QTDIR USERNAME \
                            LANG LC_ADDRESS LC_CTYPE LC_COLLATE LC_IDENTIFICATION \
                            LC_MEASUREMENT LC_MESSAGES LC_MONETARY LC_NAME LC_NUMERIC \
                            LC_PAPER LC_TELEPHONE LC_TIME LC_ALL LANGUAGE LINGUAS \
                            _XKB_CHARSET XAUTHORITY PATH JAVA_HOME GEM_HOME"
    

Install necessary gems for graylog webinterface.

    sudo gem install bundler
    sudo bundle install
    

## Configure Graylog WebInterface

Update config/indexer.yml with following values

    sudo vim config/indexer.yml
    
    production
    url: http://<elasticsearch-ip>:<port>/
    index_name: graylog2
    

Update config/mongoid.yml with

    sudo vim config/mongoid.yml
    
    production:
    host: <mongodb:ipaddress>
    port: <mongodb:portno>
    username: <USERNAME>
    password: <PASSWORD>
    database: <DATABASE_NAME>
    

**Note:The configured database name,user name,password, ipaddress,port numbers of MongoDB in graylog2.conf,mongoid.yml should be as common.**

Makesure MongoDB, ElasticSearch and GraylogServer were running in the above mentioned configuration.

Start web-interface using the following command

    sudo script/rails server -e production -p 3000
    

## Configure Apache Httpd Proxy

Create a new site configuration file

In CentOS

    sudo vim /etc/httpd/sites-available/graylog-webinterface.conf
    

In Ubundu

    sudo vim /etc/apache2/sites-available/graylog-webinterface.conf
    

Copy and paste the following lines.

    <VirtualHost *:80>
        Alias /graylog /opt/graylog2/graylog2-web-interface-0.9.6/public/
        <Directory /opt/graylog2/graylog2-web-interface-0.9.6/public>
            Options Indexes MultiViews FollowSymLinks
            AllowOverride None
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>
    

Enable the site

In CentOS

    sudo ln /etc/httpd/sites-available/graylog-webinterface.conf /etc/httpd/sites-enable/graylog-webinterface.conf
    sudo /etc/init.d/httpd restart
    

In Ubuntu

    sudo ln /etc/apache2/sites-available/graylog-webinterface.conf /etc/apache2/sites-enable/graylog-webinterface.conf
    sudo /etc/init.d/apache2 restart
    

Access the Graylog Webinterface by using http://&#92;<graylog&#92;-ip&#92;-address&#92;-or&#92;-domain&#92;>/graylog

 [1]: https://www.netspective.com/setting-up-rails/
 [2]: https://www.netspective.com/setting-up-graylog-server/
 [3]: https://www.netspective.com/setting-up-apache-httpd-server/
 [4]: https://www.netspective.com/setting-up-passenger-with-apache/
 [5]: https://github.com/Graylog2/graylog2-web-interface/downloads
 