---
title: NFS Installation and Configuration
author: Shahid N. Shah
type: post
date: 2012-10-16T08:56:57+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/nfs-installation-and-configuration/
categories:
  - Sensitive SOPs

---
**NFS Server Configuration:**

In order to set NFS server you need to install the following packages:

=> nfs-kernel-server &#8211; Linux NFS Server

=> nfs-common &#8211; NFS Common programs

=> portmap &#8211; The RPC portmapper

    sudo apt-get install nfs-kernel-server portmap nfs-common
    

Make a specify directory (file system) to share with rest of the nfs client computers.

    sudo mkdir /prime.fs
    

The file /etc/exports serves as the access control list for file systems which may be exported to NFS clients.

    sudo vi /etc/exports
    

To export /prime.fs directory to 10.177.7.163 network enter the following in /etc/exports file:

    /prime.fs    10.177.7.163(rw,no_subtree_check,sync,no_root_squash
    

Save and close the file. Just restart nfs-server:

    sudo /etc/init.d/nfs-kernel-server restart
    

If you have a firewall you need to make sure ports 111 and 2049 are open:

sudo ufw allow proto tcp from 10.177.7.163 to any port 111
  
sudo ufw allow proto tcp from 10.177.7.163 to [zoloft order online][1], [buy zithromax][2] any port 2049

**NFS Client Configuration:**

First, create a mountpoint on your client system:

    sudo mkdir /mnt/prime.fs
    

You need to install nfs-command package as follows:

    sudo apt-get install nfs-common
    

We can mount Shared Directory through using /etc/fstab so that it will be mounting at boot.

    sudo vi /etc/fstab
    

Add the following:

    prime.fs.netspective.com:/prime.fs /mnt/prime.fs     nfs   soft,intr,rsize=8192,wsize=8192
    

Now we can mount using the following command:

    sudo mount -a
    

Use df command to display information about mounted file system:

    df -h

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/