---
title: Steps done on Alim Server for High Load
author: Geo P C
type: post
date: 2013-03-07T13:28:33+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/07/steps-done-on-alim-server-for-high-load/
categories:
  - IT Infrastructure SOPs
  - Sensitive SOPs

---
Following are the steps we done on Alim Server:

  * Checked Alim DB and size comes around 1.3GB 
    -> du -hs alim\_07\_03_20.13.sql
  
    1.3G alim\_07\_03_20.13.sql

When we checked table that took too much space is ajaxtracking (319M) and boomerang_beacon (366M). We truncated these these table and also dropped unwanted tables from Alim Database. Now the size gets dropped to 458M.

    -> du -hs alim_07_03_20.13_new.sql
    458M    alim_07_03_20.13_new.sql
    

Command used to truncate a table:

    mysql> truncate table ajaxtracking,boomerang_beacon;
    

  * Stopped AIDE:

Temporarily stopped AIDE script.

  * php5-fpm configuration:

Changed pm.max_requests (The number of requests each child process should execute before respawning) from 200 to 0 (unlimited)

Then changed pm.max_children (This value sets the limit on the number of simultaneous requests that will be served)from 7 to 5.

With this setting we have tested accessing alim site with ab command. Now it seems stable in which load increases slightly only and its not overshooting.

  * Configured Monit: 
    In server when loadavg is more than 5 then monit will restart php5-fpm service. We will also get alert when this action occurs in monit.

Refer [KB][1] for configuring Monit.

 [1]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2013/03/07/monit-installation-and-configuration/ "Monit Installation and Configuration"