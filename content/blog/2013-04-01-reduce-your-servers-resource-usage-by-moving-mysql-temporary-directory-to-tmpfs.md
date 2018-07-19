---
title: Reduce your server’s resource usage by moving MySQL temporary directory to tmpfs
author: Geo P C
type: post
date: 2013-04-01T04:46:08+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/01/reduce-your-servers-resource-usage-by-moving-mysql-temporary-directory-to-tmpfs/
categories:
  - IT Infrastructure SOPs

---
For sites that have lots of slow queries, disk access is often the bottleneck. For these slow queries, MySQL writes temporary tables to disk, populates them with intermediate results, then query them again for the final result.

We all know that the disk is the slowest part in a computer, because it is limited by being mechanical, rather than electronic. One way of mitigating this is to tell MySQL to use memory rather than disk for temporary tables.

This is often done by creating either a RAM Disk, or the easier to use tmpfs. Both are a portion of the server&#8217;s RAM memory made to emulate a disk with slightly different details: RAM disk has a file system on it that can be ext3 or anything, while tmpfs is its own file system type.

Since memory access is much faster than a disk, this improves performance, and decreases load on the server by not causing pile up bottlenecks on disks.

We describe here methods to achieve this goal.

**Method 1: Using an existing tmpfs directory**

Rather than creating a new ram disk or tmpfs mount, we first search for one that is already on your server.

    df -h
    

Filesystem Size Used Avail Use% Mounted on
  
&#8230;
  
tmpfs 1.6G 260K 1.6G > 1% /run
  
&#8230;

This tells us that the the /run filesystem is of type temporary file system, and has 1.6 GB allocated for it.

    mount
    

&#8230;
  
tmpfs on /run type tmpfs (rw,noexec,nosuid,size=10%,mode=0755)
  
&#8230;

On Ubuntu 12.04 LTS, the directory /run/mysqld already exists and is allocated to a tmpfs with sufficient space for temporary files.

Save yourself some grief and do not try to create your custom directory under /run (e.g. mysqlslow), because it will not survive reboots, and MySQL will not start after a reboot.

So, all we need is telling MySQL to use this directory.

To do this, create a file called /etc/mysql/conf.d/local.cnf. By using this file, and not editing /etc/mysql/my.cnf, we don&#8217;t have Ubuntu updated overwrite your changes.

Add this to the file:

    [mysqld]
    tmpdir = /run/mysqld
    

Then restart MySQL

    service mysql restart
    

Then make sure that the new value is now in effect:

    # mysql
    mysql> SHOW VARIABLES LIKE 'tmpdir';
    +---------------+-------------+
    | Variable_name | Value       |
    +---------------+-------------+
    | tmpdir        | /run/mysqld |
    +---------------+-------------+
    

**Method 2: Creating a new tmpfs directory**

If you are not running Ubuntu 12.04 LTS, then you may not have a ready made RAM disk that you can use, and you have to create one.

Here are the steps to create a the tmpfs directory:
  
Create the tmp directory

    mkdir -p /var/mysqltmp
    

Set permissions

    chown mysql:mysql /var/mysqltmp
    

Determine mysql user id

    id mysql
    

Edit /etc/fstab

And add the following line, replacing your specific mysql user id and group id instead of the 105 and 114 below:

    tmpfs /var/mysqltmp tmpfs rw,gid=105,uid=114,size=256M,nr_inodes=10k,mode=0700 0 0
    

Mount the new tmpfs partition

    mount -a
    

Change your MySQL configuration

    vi /etc/mysql/conf.d/local.cnf 
    

Change, or add the following line:

    tmpdir = /var/mysqltmp
    

Restart MySQL

    /etc/init.d/mysql restart
    

Or, for Ubuntu 12.04:

    service mysql restart
    

[Reference][1]:

 [1]: http://2bits.com/articles/reduce-your-servers-resource-usage-moving-mysql-temporary-directory-ram-disk.html