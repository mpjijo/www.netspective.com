---
title: How to create custome AIDE database for specific file/folder integrity check
author: Roni Baby
type: post
date: 2013-03-11T14:15:12+00:00
excerpt: How to create custome AIDE database for specific file/folder integrity check
url: /blog/how-to-create-custome-aide-database-for-specific-filefolder-integrity-check/
categories:
  - Secure SOPs
  - Uncategorized

---
## How to create custome AIDE database for specific file/folder integrity check

Ref : <http://www.cs.tut.fi/~rammer/aide/manual.html#config>

note: rules are updated in /etc/aide/aide.conf

**Rules for home.* server**

    Home_Rules = p+i+u+g+S+md5 ## custome rule we defind
    
    /bin Home_Rules
    /boot Home_Rules
    !/dev/.*
    /etc/nginx Home_Rules
    !/etc/.*
    /home Home_Rules
    !/home/abdul_razak/.*
    !/home/deepak_a/.*
    !/home/geo_pc/.*
    !/home/nsysadmin/.*
    !/home/roni_baby/.*
    !/home/sarji_mohammedali/.*
    !/home/shahid_shah/.*
    !/lib/.*
    !/lib64/.*
    !/lost+found/.*
    !/media/.*
    !/mnt/.*
    !/nonexistent/.*
    !/opt/.*
    !/proc/.*
    /root
    !/run/.*
    !/sbin/.*
    !/selinux/.*
    !/srv/.*
    !/sys/.*
    !/tmp/.*
    !/usr/.*
    !/var/log/.*
    !/var/tmp/.*
    !/var/backups/.*
    !/var/lib/nginx/proxy/.*
    !/var/.*
    

AIDE check disabled in all other folders in / partition

**Rules for mysql.rdbms.* server**

    Home_Rules = p+i+u+g+S+md5
    
    /bin Home_Rules
    /boot Home_Rules
    !/dev/.*
    !/etc/.*
    /home Home_Rules
    !/home/abdul_razak/.*
    !/home/deepak_a/.*
    !/home/geo_pc/.*
    !/home/nsysadmin/.*
    !/home/roni_baby/.*
    !/home/sarji_mohammedali/.*
    !/home/shahid_shah/.*
    !/lib/.*
    !/lib64/.*
    !/lost+found/.*
    !/media/.*
    !/mnt/.*
    !/opt/.*
    !/percona-backup/.*
    !/proc/.*
    /root Home_Rules
    !/run/.*
    !/sbin/.*
    !/selinux/.*
    !/share/.*
    !/srv/.*
    !/sys/.*
    !/tmp/.*
    !/usr/.*
    !/var/.*
    

AIDE check disabled in all other folders in / partition

**Rules for php.apps.* server**

    Home_Rules = p+i+u+g+S+md5
    
    /bin Home_Rules
    /boot Home_Rules
    !/build/.*
    !/dev/.*
    !/etc/.*
    /home Home_Rules
    !/home/abdul_razak/.*
    !/home/deepak_a/.*
    !/home/geo_pc/.*
    !/home/nsysadmin/.*
    !/home/roni_baby/.*
    !/home/sarji_mohammedali/.*
    !/home/shahid_shah/.*
    !/lib/.*
    !/lib64/.*
    !/lost+found/.*
    !/media/.*
    !/mnt/.*
    !/opt/.*
    !/proc/.*
    /root Home_Rules
    !/run/.*
    !/sbin/.*
    !/selinux/.*
    !/share/.*
    !/srv/.*
    !/sys/.*
    !/tmp/.*
    /usr/share/nginx/www Home_Rules
    !/usr/share/nginx/www/stats.netspective.com/.git/.*
    !/usr/share/nginx/www/services.netspective.com/.git/.*
    !/usr/share/nginx/www/prescribewell-2012-sales-demo/.git/.*
    !/usr/share/nginx/www/netspective-party-services/.git/.*
    !/usr/share/nginx/www/netspective-hitsphere/.git/.*
    !/usr/share/nginx/www/netspective-form-service/.git/.*
    !/usr/share/nginx/www/netspective-communication-services/.git/.*
    !/usr/share/nginx/www/netspective-authorization-services/.git/.*
    !/usr/share/nginx/www/netspective-authentication-services/.git/.*
    !/usr/share/nginx/www/netspective-activity-services/.git/.*
    !/usr/share/nginx/www/medigy-drupal/.git/.*
    !/usr/share/nginx/www/cns.max.bfelob.netspective.com/s/.git/.*
    !/usr/share/nginx/www/bfelob-max-cns-service/.git/.*
    !/usr/share/nginx/www/bfelob-max-cns-app/.git/.*
    !/usr/.*
    !/var/.*
    

AIDE check disabled in all other folders in / partition

**Rules for slave.mysql.rdbms.* server**

    Home_Rules = p+i+u+g+S+md5
    
    /bin Home_Rules
    /boot Home_Rules
    !/dev/.*
    !/etc/.*
    /home Home_Rules
    !/home/abdul_razak/.*
    !/home/deepak_a/.*
    !/home/geo_pc/.*
    !/home/nsysadmin/.*
    !/home/roni_baby/.*
    !/home/sarji_mohammedali/.*
    !/home/shahid_shah/.*
    !/lib/.*
    !/lib64/.*
    !/lost+found/.*
    !/media/.*
    !/mnt/.*
    !/opt/.*
    !/percona-backup/.*
    !/proc/.*
    /root Home_Rules
    !/run/.*
    !/sbin/.*
    !/selinux/.*
    !/share/.*
    !/srv/.*
    !/sys/.*
    !/tmp/.*
    !/usr/.*
    !/var/.*
    

AIDE check disabled in all other folders in / partition

**Rules for prime.ds.* server**

    Home_Rules = p+i+u+g+S+md5
    
    /bin Home_Rules
    /boot Home_Rules
    !/dev/.*
    /etc/nginx Home_Rules
    !/etc/.*
    /home Home_Rules
    !/home/abdul_razak/.*
    !/home/deepak_a/.*
    !/home/geo_pc/.*
    !/home/nsysadmin/.*
    !/home/roni_baby/.*
    !/home/sarji_mohammedali/.*
    !/home/shahid_shah/.*
    !/lib/.*
    !/lib64/.*
    !/lost+found/.*
    !/media/.*
    !/mnt/.*
    !/nonexistent/.*
    !/opt/.*
    !/proc/.*
    /root
    !/run/.*
    !/sbin/.*
    !/selinux/.*
    !/srv/.*
    !/sys/.*
    !/tmp/.*
    !/usr/.*
    !/var/log/.*
    !/var/tmp/.*
    !/var/backups/.*
    !/var/lib/nginx/proxy/.*
    !/var/.*
    

AIDE check disabled in all other folders in / partition

**Rules for cups.* server**

    Home_Rules = p+i+u+g+S+md5
    
    /bin Home_Rules
    /boot Home_Rules
    !/dev/.*
    /etc/nginx Home_Rules
    !/etc/.*
    /home Home_Rules
    !/home/abdul_razak/.*
    !/home/deepak_a/.*
    !/home/geo_pc/.*
    !/home/nsysadmin/.*
    !/home/roni_baby/.*
    !/home/sarji_mohammedali/.*
    !/home/shahid_shah/.*
    !/lib/.*
    !/lib64/.*
    !/lost+found/.*
    !/media/.*
    !/mnt/.*
    !/nonexistent/.*
    !/opt/.*
    !/proc/.*
    /root
    !/run/.*
    !/sbin/.*
    !/selinux/.*
    !/srv/.*
    !/sys/.*
    !/tmp/.*
    !/usr/.*
    /var/www Home_Rules
    !/var/log/.*
    !/var/tmp/.*
    !/var/backups/.*
    !/var/lib/nginx/proxy/.*
    !/var/.*