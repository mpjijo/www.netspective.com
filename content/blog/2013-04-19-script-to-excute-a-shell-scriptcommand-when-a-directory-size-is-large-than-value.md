---
title: Script to execute a shell script/command when a directory size is large than value.
author: Geo P C
type: post
date: 2013-04-19T05:12:28+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/19/script-to-excute-a-shell-scriptcommand-when-a-directory-size-is-large-than-value/
categories:
  - IT Infrastructure SOPs

---
Created a script for clearing Drupal cache to reduce MySQL database Size. When database size is large than 800MB it will execute the page cache_clear.php for clearing cache.

    #!/bin/bash
    
    du -hs /var/lib/mysql/alim | grep ^[8-9][0-9][0-9.]*M
    #u -hs /var/lib/mysql | grep ^[4-9][0-9.]*M
    
    if [ $? -eq 0 ]; then
    
    echo "The size exeeds....!!!! Clearing drupal cache....!!!"
    cd /usr/share/nginx/www/www.alim.org/
    /usr/bin/php cache_clear.php
    
    else
    
    echo "Normal"
    
    fi