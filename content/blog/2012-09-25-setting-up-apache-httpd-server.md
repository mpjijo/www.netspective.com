---
title: Setting up Apache Httpd Server
author: Shahid N. Shah
type: post
date: 2012-09-25T08:53:44+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-httpd-server/
categories:
  - IT Infrastructure SOPs

---
### Apache installation

Centos OS

    sudo yum install httpd
    

Ubuntu

    sudo apt-get install apache2
    

### Manage Apache Server

CentOS

Home configuration directory for Httpd is /etc/httpd.

Start/Stop/Restart Apache using following command

    /etc/init.d/httpd <start|stop|restart>
    

Ubuntu

Home configuration directory for Httpd is /etc/apache2

Start/Stop/Restart Apache using following command

    /etc/init.d/apache2 <start|stop|restart>
    

### CentOS &#8211; Apache Virtual Host Friendly Setup

Maintain different configuration files for each sites running. Create directories for site configuration files and to enable the same.

    cd /etc/httpd/
    mkdir sites-available/
    mkdir sites-enabled/    
    

Configure Apache Httpd main configuration file (/etc/httpd/conf/httpd.conf) to load the site configuration files using the following directive.

    Include sites-enabled/*.conf
    

[periactin side effects][1], [purchase dapoxetine][2] 

[Click here][3] to find various available directives to configure the custom sites.

### Enabling and Disabling sites

Adding symbolic link of created sites configurations in the diretory ~/sites-enabled enable the sites

    cd sites-enabled/
    ln -s ../sites-available/sample.conf .
    

Disabling the sites to unlink the file in the directory ~/sites-enabled

    cd sites-enabled/
    unlink sample.conf
    

Note: Enabling and Disabling sites need to restart the apache

 [1]: https://pills24h.com/buy-periactin-cyproheptadine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/dapoxetine-modern-drug/
 [3]: http://httpd.apache.org/docs/current/mod/directives.html