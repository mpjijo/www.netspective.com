---
title: Setting up a Samba share for CIFS-based Development Environment
author: Shahid N. Shah
type: post
date: 2012-10-16T05:27:42+00:00
url: /knowledgebase/developer-sops/2012/10/16/setting-up-a-samba-share-for-cifs-based-development-environment/
categories:
  - Developer SOPs

---
## Installing and configuring a samba share for Windows development

Assume you have a linux user [cheap zoloft online][1], [generic lioresal][2] &#8216;prime&#8217; and you want to create a smb share called &#8216;prime&#8217; to point to the
  
home directory so that you can edit files in that directory from Windows.

Install samba:

    sudo apt-get install -y samba
    

Create an smb password for user &#8216;prime&#8217; (what you&#8217;ll use to mount the drive from Windows)

    sudo smbpasswd -a prime
    

Add a share called &#8216;prime&#8217; to the samba config:

    sudo cp -rv /etc/samba/smb.conf "/tmp/smb-backup-`date`.conf"
    sudo vim /etc/samba/smb.conf
    

Here&#8217;s the text you&#8217;ll add to the end of the smb.conf file:

    [prime]
    path = /home/prime
    available = yes
    valid users = prime
    read only = no
    browsable = yes
    public = yes
    writable = yes
    

Save the file and then test and restart smb:

    sudo testparm
    sudo restart smbd

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-lioresal-baclofen/