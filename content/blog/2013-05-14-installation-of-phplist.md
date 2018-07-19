---
title: Installation of phplist
author: Roni Baby
type: post
date: 2013-05-14T12:21:46+00:00
url: /uncategorized/2013/05/14/installation-of-phplist/
categories:
  - Server SOPs
  - Uncategorized

---
## Installation of Phplist

    cd ~/setup
    wget http://nchc.dl.sourceforge.net/project/phplist/phplist/2.10.19/phplist-2.10.19.zip
    cd /usr/share/nginx/www/
    unzip ~/setup/phplist-2.10.19.zip
    mv phplist-2.10.19/public_html/lists .
    mv lists phplist
     

Create mysql database for this application

Edit config/ejabberd.cfg file for this database settings

Enable nginx configuration file with document root as this folder

browse http://ip/admin for installing it

Follow onscreen instruction for installing this

Default login credentials are

admin/phplist