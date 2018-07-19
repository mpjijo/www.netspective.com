---
title: Drush Installation
author: Geo P C
type: post
date: 2013-04-08T08:49:53+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/08/drush-installation/
categories:
  - IT Infrastructure SOPs

---
Drush is a command line shell and Unix scripting interface for Drupal.

**Installation**

Download Drush

    sudo wget http://ftp.drupal.org/files/projects/drush-7.x-5.8.tar.gz
    

Extract

    sudo tar -zxvf drush-7.x-5.8.tar.gz /opt/
    

Make the &#8216;drush&#8217; command executable:

    sudo chmod u+x /opt/drush/drush
    

Create a symbolic link to the Drush executable:

    sudo ln -s /opt/drush/drush /usr/bin/drush
    

Test that Drush is found by your system:

    sudo which drush
    

Drush command to clear drupal cache:

    sudo drush cc all