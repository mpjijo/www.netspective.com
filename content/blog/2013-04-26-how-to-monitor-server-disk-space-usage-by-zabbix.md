---
title: How to monitor server Disk Space usage by Zabbix
author: Roni Baby
type: post
date: 2013-04-26T05:00:06+00:00
url: /knowledgebase/secure-sops/2013/04/26/how-to-monitor-server-disk-space-usage-by-zabbix/
categories:
  - Secure SOPs

---
## **How to monitor server Disk Space usage by Zabbix**

Created new **Item** under the **template** &#8220;Template OS Linux Active&#8221; with the following configuration

    Host: Template OS Linux Active
    Name : Disk Space
    Type : Zabbix agent (active)
    Key : vfs.fs.size[/,pfree]
    Type of Information : Numeric (flot)
    Units : %
    Application : Filesystems
    

Then created a **trigger** with this above **Item**

    Name : Template OS Linux Active: Disk Space
    Expression : {Template OS Linux Active:vfs.fs.size[/,pfree].last(0)}<20
    Severity : High
    
    Note: this expression will create an alert if free disk space is 80% used
    

So we can see current disk space usage of servers by monitoring &#8211;> Latest Data &#8211;> Filesystems