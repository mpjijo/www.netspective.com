---
title: Configure MySQL to use as Per-Table Tablespaces
author: Geo P C
type: post
date: 2013-02-21T08:48:06+00:00
url: /knowledgebase/it-infrastructure-sops/2013/02/21/configure-mysql-to-use-as-per-table-tablespaces/
categories:
  - IT Infrastructure SOPs

---
As we know InnoDB writes all the table information into one tablespace file ibdata1.
  
Obviously this lead to a disk space issue, since the ibdata1 file grew to 90G+ and it was not possible to defragment tablespace using the Alter method (Infact is is hardly possible to do in a production environment, since it leads to a huge downtime.)

You can store each InnoDB table and its indexes in its own file. This feature is called multiple tablespaces because in effect each table has its own tablespace.

#### To enable multiple tablespaces, you need to do the following:

  * In my.cnf we need to add the following lines:

`innodb_file_per_table   =1<br />
innodb_status_file      =1<br />
innodb_flush_method     =O_DIRECT<br />
innodb_support_xa       =0`

  * Take backup (mysqldump ) of all existing databases.
  * Now drop all databases except the mysql database
  * Stop mysql
  * Delete ibdata1 and ib_log files
  * Start mysql
  * Create and restore databases.