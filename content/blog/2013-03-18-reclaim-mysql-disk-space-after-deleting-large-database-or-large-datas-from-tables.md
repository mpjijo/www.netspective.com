---
title: Reclaim mysql disk space after deleting large database or large datas from tables
author: Roni Baby
type: post
date: 2013-03-18T13:17:39+00:00
url: /uncategorized/2013/03/18/reclaim-mysql-disk-space-after-deleting-large-database-or-large-datas-from-tables/
categories:
  - Uncategorized

---
## Reclaim mysql disk space after deleting large database or large datas from tables

After deleting large amount of raws from mysql table, we have to do the following steps to reclaim the free space

  1. Analise, Repair and Optimize the databases 
        Analise mysql database using "mysqlcheck -u root -p<passwd> -a <DB_name>"
        Repair mysql database using "mysqlcheck -u root -p<passwd> -r <DB_name>"
        Optimize mysql database using "mysqlcheck -u root -p<passwd> -o <DB_name>"
        

  2. Backup the database

  3. Dropped that particular database

  4. Restore that database from the latest backup