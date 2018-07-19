---
title: LimeSurvey installation
author: Roni Baby
type: post
date: 2013-04-15T10:46:17+00:00
url: /uncategorized/2013/04/15/limesurvey-installation/
categories:
  - Uncategorized

---
# **LimeSurvey Installation**

Minimum requirements:-

  * PHP version 5.1.6 or above
  * Installed atleast PHP PDO driver library
  * PHP mbstring library
  * PHP/PECL JSON library

Installation:-

    cd ~/setup
    
    sudo wget http://download.limesurvey.org/
    Latest_stable_release/limesurvey200plus-build130406.tar.gz
    
    cd /usr/share/nginx/www/
    
    tar -zxvf ~/setup/limesurvey200plus-build130406.tar.gz
    
    chown -R www-data:wwwdata limesurvey
    

**Mysql database creation**

    create database limesurvey;
    
    GRANT ALL PRIVILEGES ON limesurvey.* To 'lsurvey_usr'@'10.177.26.77' IDENTIFIED BY 'pass';
    

Create nginx configuration file for accessing this url and
  
Go to the link for instaling it

http://survey.apps.netspective.com

After completing the installation it will be accesible by http://survey.apps.netspective.com/admin

Ref: [http://docs.limesurvey.org/Installation&structure=English+Instructions+for+LimeSurvey#Make\_sure\_you\_can\_use\_LimeSurvey\_on\_your\_website][1]

 [1]: http://docs.limesurvey.org/Installation&structure=English+Instructions+for+LimeSurvey#Make_sure_you_can_use_LimeSurvey_on_your_website