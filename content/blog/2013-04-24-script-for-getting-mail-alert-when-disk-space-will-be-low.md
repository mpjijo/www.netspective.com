---
title: Script for getting mail alert when disk space will be low
author: Roni Baby
type: post
date: 2013-04-24T15:16:30+00:00
url: /knowledgebase/sensitive-sops/2013/04/24/script-for-getting-mail-alert-when-disk-space-will-be-low/
categories:
  - Sensitive SOPs

---
## **Script for getting mail alert when disk space will be low**

The following script is enabled in all netspective servers. for enabling it do the following in every servers

    sudo cd /etc/cron.hourly
    sudo vi diskspace_alert.sh
    Added the following script code in this file
    sudo chmod 755 diskspace_alert.sh
    

Script

    #!/bin/bash
    # This bash script is to monitor disk space and It will email if disk space goes below
    
    FQDN="$(hostname -f)"
    DATE="$(date +"%Y-%m-%d %H:%M")"
    BEGINSTAMP="$(date +"%Y-%m-%d %H:%M:%S")"
    CURRENT_DISK_STATUS="$(df -h)"
    
    CURRENT=$(df / | grep / | awk '{ print $5}' | sed 's/%//g')
    THRESHOLD=85
    
    if [ "$CURRENT" -gt "$THRESHOLD" ] ; then
        mail -s 'Disk Space Alert' diskspace_alert@netspective.org << EOF
    Your root partition remaining free space is critically low in $FQDN. Currently $CURRENT% of disk space is used in this partition
    $BEGINSTAMP
    
    see the current status of disk usage
    
    $CURRENT_DISK_STATUS
    EOF
    fi