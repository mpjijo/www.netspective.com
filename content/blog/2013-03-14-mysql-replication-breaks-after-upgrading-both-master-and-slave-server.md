---
title: mysql replication breaks after upgrading both master and slave server
author: Roni Baby
type: post
date: 2013-03-14T06:36:15+00:00
url: /uncategorized/2013/03/14/mysql-replication-breaks-after-upgrading-both-master-and-slave-server/
categories:
  - Sensitive SOPs
  - Uncategorized

---
## mysql replication breaks after upgrading both master and slave server

Replication breaks in both mysql slave instance with this error &#8221; Error &#8216;You cannot &#8216;ALTER&#8217; a log table if logging is enabled&#8217; on query. Default database: &#8216;mysql&#8217;. Query: &#8216;ALTER TABLE slow_log&#8221;

see the slave status of mysql instance1

see the slave status of instance1

    mysql> SHOW SLAVE STATUS \G
    *************************** 1. row ***************************
                   Slave_IO_State: Waiting for master to send event
                      Master_Host: 10.177.6.212
                      Master_User: slave_user
                      Master_Port: 3306
                    Connect_Retry: 60
                  Master_Log_File: mysql-bin.003521
              Read_Master_Log_Pos: 16361586
                   Relay_Log_File: mysql-relay.000268
                    Relay_Log_Pos: 548156
            Relay_Master_Log_File: mysql-bin.003519
                 Slave_IO_Running: Yes
                Slave_SQL_Running: No
                  Replicate_Do_DB:
              Replicate_Ignore_DB:
               Replicate_Do_Table:
           Replicate_Ignore_Table:
          Replicate_Wild_Do_Table:
      Replicate_Wild_Ignore_Table:
                       Last_Errno: 1580
                       Last_Error: Error 'You cannot 'ALTER' a log table if logging is enabled' on query. Default database: 'mysql'. Query: 'ALTER TABLE slow_log
       MODIFY start_time TIMESTAMP NOT NULL,
       MODIFY user_host MEDIUMTEXT NOT NULL,
       MODIFY query_time TIME NOT NULL,
       MODIFY lock_time TIME NOT NULL,
       MODIFY rows_sent INTEGER NOT NULL,
       MODIFY rows_examined INTEGER NOT NULL,
       MODIFY db VARCHAR(512) NOT NULL,
       MODIFY last_insert_id INTEGER NOT NULL,
       MODIFY insert_id INTEGER NOT NULL,
       MODIFY server_id INTEGER UNSIGNED NOT NULL,
       MODIFY sql_text MEDIUMTEXT NOT NULL'
                     Skip_Counter: 0
              Exec_Master_Log_Pos: 548010
                  Relay_Log_Space: 17105793
                  Until_Condition: None
                   Until_Log_File:
                    Until_Log_Pos: 0
               Master_SSL_Allowed: Yes
               Master_SSL_CA_File: /etc/mysql/ca-cert.pem
               Master_SSL_CA_Path:
                  Master_SSL_Cert: /etc/mysql/client-cert.pem
                Master_SSL_Cipher:
                   Master_SSL_Key: /etc/mysql/client-key.pem
            Seconds_Behind_Master: NULL
    Master_SSL_Verify_Server_Cert: No
                    Last_IO_Errno: 0
                    Last_IO_Error:
                   Last_SQL_Errno: 1580
                   Last_SQL_Error: Error 'You cannot 'ALTER' a log table if logging is enabled' on query. Default database: 'mysql'. Query: 'ALTER TABLE slow_log
       MODIFY start_time TIMESTAMP NOT NULL,
       MODIFY user_host MEDIUMTEXT NOT NULL,
       MODIFY query_time TIME NOT NULL,
       MODIFY lock_time TIME NOT NULL,
       MODIFY rows_sent INTEGER NOT NULL,
       MODIFY rows_examined INTEGER NOT NULL,
       MODIFY db VARCHAR(512) NOT NULL,
       MODIFY last_insert_id INTEGER NOT NULL,
       MODIFY insert_id INTEGER NOT NULL,
       MODIFY server_id INTEGER UNSIGNED NOT NULL,
       MODIFY sql_text MEDIUMTEXT NOT NULL'
      Replicate_Ignore_Server_Ids:
                 Master_Server_Id: 1
    1 row in set (0.00 sec)
    

This error is described in various MySQL bug reports

solved this error by disabling of slow\_query\_log and sql\_log\_bin in slave

    mysql> STOP SLAVE;
    Query OK, 0 rows affected (0.07 sec)
    
    mysql> SET GLOBAL slow_query_log = 'OFF'; SET GLOBAL sql_log_bin = 0;
    Query OK, 0 rows affected (0.00 sec)
    
    Query OK, 0 rows affected (0.00 sec)
    
    mysql> START SLAVE;
    Query OK, 0 rows affected (0.00 sec)
    
    mysql> SHOW SLAVE STATUS \G
    *************************** 1. row ***************************
                   Slave_IO_State: Waiting for master to send event
                      Master_Host: 10.177.6.212
                      Master_User: slave_user
                      Master_Port: 3306
                    Connect_Retry: 60
                  Master_Log_File: mysql-bin.003521
              Read_Master_Log_Pos: 16675775
                   Relay_Log_File: mysql-relay.000280
                    Relay_Log_Pos: 15462683
            Relay_Master_Log_File: mysql-bin.003521
                 Slave_IO_Running: Yes
                Slave_SQL_Running: Yes
                  Replicate_Do_DB:
              Replicate_Ignore_DB:
               Replicate_Do_Table:
           Replicate_Ignore_Table:
          Replicate_Wild_Do_Table:
      Replicate_Wild_Ignore_Table:
                       Last_Errno: 0
                       Last_Error:
                     Skip_Counter: 0
              Exec_Master_Log_Pos: 15462537
                  Relay_Log_Space: 16676517
                  Until_Condition: None
                   Until_Log_File:
                    Until_Log_Pos: 0
               Master_SSL_Allowed: Yes
               Master_SSL_CA_File: /etc/mysql/ca-cert.pem
               Master_SSL_CA_Path:
                  Master_SSL_Cert: /etc/mysql/client-cert.pem
                Master_SSL_Cipher:
                   Master_SSL_Key: /etc/mysql/client-key.pem
            Seconds_Behind_Master: 219
    Master_SSL_Verify_Server_Cert: No
                    Last_IO_Errno: 0
                    Last_IO_Error:
                   Last_SQL_Errno: 0
                   Last_SQL_Error:
      Replicate_Ignore_Server_Ids:
                 Master_Server_Id: 1
    1 row in set (0.00 sec)