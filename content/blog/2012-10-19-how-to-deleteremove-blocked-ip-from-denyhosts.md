---
title: How To Delete/Remove Blocked IP From DenyHosts
author: Shahid N. Shah
type: post
date: 2012-10-19T12:05:38+00:00
url: /knowledgebase/it-infrastructure-sops/2012/10/19/how-to-deleteremove-blocked-ip-from-denyhosts/
categories:
  - IT Infrastructure SOPs

---
  1. First you need to stop Denyhosts service, by following command. 
    [root@server ~]# /etc/init.d/denyhosts stop

  2. Next open file /etc/hosts.deny with below command. 
    [root@server ~]# vi /etc/hosts.deny

  3. Delete blocked IP address, then save and close above file.

  4. Now go to directory called /usr/share/denyhosts/data or /var/lib/denyhosts/ 
    [root@server ~]# cd /var/lib/denyhosts/

  5. Next you need to delete blocked IP from all below following files with help of vi editor. 
    [root@server ~]# vi hosts
  
    [root@server ~]# vi hosts-restricted
  
    [root@server ~]# vi hosts-root
  
    [root@server ~]# vi hosts-valid
  
    [root@server ~]# vi users-hosts

  6. Once you removed your blocked IP from all above files, then start Denyhosts service. 
    [root@server data]# /etc/init.d/denyhosts start