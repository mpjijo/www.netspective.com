---
title: mysql replication recovery
author: Roni Baby
type: post
date: 2013-04-26T08:23:19+00:00
url: /knowledgebase/server-sops/2013/04/26/mysql-replication-recovery/
categories:
  - Server SOPs

---
Mysql replication breaks with the following slave status

    mysql> SHOW SLAVE STATUS \G
    *************************** 1. row ***************************
                   Slave_IO_State: Waiting for the slave SQL thread to free enough relay log space
                      Master_Host: 10.177.6.212
                      Master_User: slave_user
                      Master_Port: 3306
                    Connect_Retry: 60
                  Master_Log_File: mysql-bin.004012
              Read_Master_Log_Pos: 52518784
                   Relay_Log_File: mysql-relay.000935
                    Relay_Log_Pos: 70490056
            Relay_Master_Log_File: mysql-bin.004010
                 Slave_IO_Running: Yes
                Slave_SQL_Running: No
                  Replicate_Do_DB:
              Replicate_Ignore_DB:
               Replicate_Do_Table:
           Replicate_Ignore_Table:
          Replicate_Wild_Do_Table:
      Replicate_Wild_Ignore_Table:
                       Last_Errno: 145
                       Last_Error: Error 'Table './activecollab_prime/acx_search_index_for_project_objects' is marked as crashed and should be repaired' on query. Default database: 'activecollab_prime'. Query: 'REPLACE INTO acx_search_index_for_project_objects (item_type, item_id, item_context, `project_id`, `project`, `milestone_id`, `milestone`, `visibility`, `name`, `body`, `category_id`, `category`) VALUES ('File', '18750', 'projects:projects/75/files/normal/18750', '75', 'Covidien BTP Gateway', '0', NULL, '1', 'Gateway-865-867.zip', 'Gateway 865-867 and attachments', '758', 'Sprint 9 - Jira Reports')'
                     Skip_Counter: 0
              Exec_Master_Log_Pos: 70489910
                  Relay_Log_Space: 262321756
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
                   Last_SQL_Errno: 145
                   Last_SQL_Error: Error 'Table './activecollab_prime/acx_search_index_for_project_objects' is marked as crashed and should be repaired' on query. Default database: 'activecollab_prime'. Query: 'REPLACE INTO acx_search_index_for_project_objects (item_type, item_id, item_context, `project_id`, `project`, `milestone_id`, `milestone`, `visibility`, `name`, `body`, `category_id`, `category`) VALUES ('File', '18750', 'projects:projects/75/files/normal/18750', '75', 'Covidien BTP Gateway', '0', NULL, '1', 'Gateway-865-867.zip', 'Gateway 865-867 and attachments', '758', 'Sprint 9 - Jira Reports')'
      Replicate_Ignore_Server_Ids:
                 Master_Server_Id: 1
    1 row in set (0.00 sec)
    

Did the following in slave server

    mysql> stop slave;
    Query OK, 0 rows affected (0.06 sec)
    
    mysql> start slave;
    Query OK, 0 rows affected (0.00 sec)
    
    sudo /etc/init.d/mysql restart
    

After executing the above commands the error changed into this

    mysql> SHOW SLAVE STATUS \G
    *************************** 1. row ***************************
                   Slave_IO_State:
                      Master_Host: 10.177.6.212
                      Master_User: slave_user
                      Master_Port: 3306
                    Connect_Retry: 60
                  Master_Log_File: mysql-bin.004012
              Read_Master_Log_Pos: 52518784
                   Relay_Log_File: mysql-relay.000935
                    Relay_Log_Pos: 70490086
            Relay_Master_Log_File: mysql-bin.004010
                 Slave_IO_Running: No
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
              Exec_Master_Log_Pos: 70489910
                  Relay_Log_Space: 262321756
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
                    Last_IO_Errno: 1236
                    Last_IO_Error: Got fatal error 1236 from master when reading data from binary log: 'Could not find first log file name in binary log index file'
                   Last_SQL_Errno: 0
                   Last_SQL_Error:
      Replicate_Ignore_Server_Ids:
                 Master_Server_Id: 1
    1 row in set (0.00 sec)
    

This is because of the log position mismatch in master and slave servers. Did the following for solving it

In slave server,

    mysql> stop slave;
        Query OK, 0 rows affected (0.06 sec)
    

In master server,

    mysql> flush logs;
    Query OK, 0 rows affected (1.03 sec)
    
    mysql> show master status;
    +------------------+----------+--------------+------------------+
    | File             | Position | Binlog_Do_DB | Binlog_Ignore_DB |
    +------------------+----------+--------------+------------------+
    | mysql-bin.004159 | 18628306 |              |                  |
    +------------------+----------+--------------+------------------+
    1 row in set (0.01 sec)
    

noted the above bin file name and position and executed the following in slave server

    mysql> CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.004159';
    Query OK, 0 rows affected (0.83 sec)
    
    mysql> CHANGE MASTER TO MASTER_LOG_POS=18628306;
    Query OK, 0 rows affected (0.03 sec)
    

Ref: <http://www.shishirtekade.com/2013/02/got-fatal-error-1236-from-master-when.html>

After this slave was not working with an error code 1062

for bypassing this added the following in slave&#8217;s my.cnf file

    slave-skip-errors = 1062
     

Then restart mysql server and its replication is working fine

ref: <http://www.techiecorner.com/2572/mysql-replication-stop-at-error-no-1062/>

Now replication is working fine without any issues.

    mysql> SHOW SLAVE STATUS \G
    *************************** 1. row ***************************
                   Slave_IO_State: Waiting for master to send event
                      Master_Host: 10.177.6.212
                      Master_User: slave_user
                      Master_Port: 3306
                    Connect_Retry: 60
                  Master_Log_File: mysql-bin.004160
              Read_Master_Log_Pos: 35515504
                   Relay_Log_File: mysql-relay.000010
                    Relay_Log_Pos: 35515650
            Relay_Master_Log_File: mysql-bin.004160
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
              Exec_Master_Log_Pos: 35515504
                  Relay_Log_Space: 35515845
                  Until_Condition: None
                   Until_Log_File:
                    Until_Log_Pos: 0
               Master_SSL_Allowed: Yes
               Master_SSL_CA_File: /etc/mysql/ca-cert.pem
               Master_SSL_CA_Path:
                  Master_SSL_Cert: /etc/mysql/client-cert.pem
                Master_SSL_Cipher:
                   Master_SSL_Key: /etc/mysql/client-key.pem
            Seconds_Behind_Master: 0
    Master_SSL_Verify_Server_Cert: No
                    Last_IO_Errno: 0
                    Last_IO_Error:
                   Last_SQL_Errno: 0
                   Last_SQL_Error:
      Replicate_Ignore_Server_Ids:
                 Master_Server_Id: 1
    1 row in set (0.00 sec)