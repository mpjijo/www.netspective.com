---
title: Adding multiple tmpdir in MySQL to avoid total usage of tmpfs
author: Geo P C
type: post
date: 2013-04-03T13:38:55+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/03/adding-multiple-tmpdir-in-mysql-to-avoid-total-usage-of-tmpfs/
categories:
  - IT Infrastructure SOPs

---
In Alim server we had an issue in which alim site was unable to access. We are getting Nginx gatewaytimeout error.

While troubleshooting it came to know that tmpfs was full.

    tmpfs           199M  199M  0  100% /run
    

We restarted MySQL and it recovers the space. While checking in detail we came to know that after running MySQL optimization script (Script that will do repair, analyze and optimization of alim database) tmpfs directory becomes full.

If the script completes it will recover the space automatically but in our case during repair of search_index table it uses full space and from this [link][1] we came to know that when tmpfs gets filled up, it will behave as any physical harddrive by giving an &#8220;not enough space&#8221; error.

So we checked options to use separate tmpdir for mysqlcheck but there is no option for that. So we checked option for multiple tmpdir and we get this [url][2]

Also from the [url][3] it shows &#8211;tmpdir option can be set to a list of several paths that are used in round-robin fashion.

So we created a directory called /var/mysqltmp

    sudo mkdir /var/mysqltmp
    sudo chown mysql:mysql /var/mysqltmp 
    

Now we included both directories in /etc/mysql/conf.d/local.cnf

    sudo vi /etc/mysql/conf.d/local.cnf
    
    [mysqld]
    
    tmpdir = /run/mysqld:/var/mysqltmp
    
    sudo /etc/init.d/mysql restart
    

Now it fixes the issue and everything is working fine.

 [1]: http://askubuntu.com/questions/173094/how-can-i-use-ram-storage-for-the-tmp-directory-and-how-to-set-a-maximum-amount
 [2]: http://www.coderchris.com/mysql/mysql-51-multiple-tmpdirs-and-incorrect-key-file-for-table-errors/2009/01/22
 [3]: http://dev.mysql.com/doc/refman/5.1/en/temporary-files.html