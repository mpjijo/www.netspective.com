---
title: Script for optimizing MySQL
author: Geo P C
type: post
date: 2013-01-15T08:38:57+00:00
url: /knowledgebase/sensitive-sops/2013/01/15/script-for-optimizing-mysql/
categories:
  - Sensitive SOPs

---
> #!/bin/bash
> 
> SERVICE=&#8217;mysql&#8217;
> 
> echo &#8220;In Server MySQL weekly maintenance started at $(date +&#8221;%Y-%m-%d&#8221;) &#8221; | mailx -s &#8216;MySQL Weekly Maintenance started&#8217; geopc@citrusinformatics.com roni@citrusinformatics.com sarji@citrusinformatics.com
> 
> for DATABASE in activecollab\_prime cloud\_db hitsphere medigy\_edge\_devl medigy\_edge\_devl\_pw netspective\_narthex\_db ryohee\_mecars
  
> do
  
> echo &#8220;############### $DATABASE ###############&#8221;
  
> echo &#8221; &#8212;&#8212;&#8212;&#8212;&#8212; Analyzing $DATABASE: &#8212;&#8212;&#8212;&#8212;&#8212;&#8221;
  
> mysqlcheck -u root -ppassword -a $DATABASE
  
> \# print the exit code
  
> ANALYZE=$?
  
> [ $ANALYZE -eq 0 ] && echo &#8220;====>> Result: Analyzing $DATABASE Succeed&#8221;
  
> [ $ANALYZE -ne 0 ] && echo &#8220;====>> Analyzing $DATABASE Failed&#8221;
> 
> echo &#8221; &#8212;&#8212;&#8212;&#8212;&#8212; Repairing $DATABASE: &#8212;&#8212;&#8212;&#8212;&#8212;&#8221;
  
> mysqlcheck -u root -ppassword -r $DATABASE
  
> \# print the exit code
  
> REPAIR=$?
  
> [ $REPAIR -eq 0 ] && echo &#8220;====>> Repairing $DATABASE Succeed&#8221;
  
> [ $REPAIR -ne 0 ] && echo &#8220;====>>> Repairing $DATABASE Failed&#8221;
> 
> echo &#8220;&#8212;&#8212;&#8212;&#8212;&#8212; Optimizing $DATABASE: &#8212;&#8212;&#8212;&#8212;&#8212;&#8221;
  
> mysqlcheck -u root -ppassword -o $DATABASE
  
> \# print the exit code
  
> OPTIMIZE=$?
  
> [ $OPTIMIZE -eq 0 ] && echo &#8220;====>> Optimizing $DATABASE Succeed&#8221;
  
> [ $OPTIMIZE -ne 0 ] && echo &#8220;====>> Optimizing $DATABASE Failed&#8221;
> 
> echo &#8221; \***\***\***\***\***\***\***\***\***\***\***\***\***\*** &#8221;
  
> done
> 
> \# Restarting MySQL
  
> /etc/init.d/mysql restart
  
> RESTART=$?
  
> [ $RESTART -eq 0 ] && echo &#8220;====>> Restart Succeed&#8221;
  
> [ $RESTART -ne 0 ] && echo &#8220;====>> Restart Failed&#8221;
> 
> #Checking MySQL Service
  
> if ps ax | grep -v grep | grep $SERVICE > /dev/null
  
> then
     
> echo &#8220;$SERVICE service running, everything is fine&#8221;
  
> else
     
> echo &#8220;$SERVICE is not running&#8221;
          
> /etc/init.d/mysql start
  
> fi
> 
> \# Completed
  
> echo &#8220;Completed Sending Mail&#8221;
  
> echo &#8220;In Server MySQL weekly maintenance completed at $(date +&#8221;%Y-%m-%d&#8221;). Check log file for further details. &#8221; | mailx -s &#8216;MySQL Weekly Maintenance Completed&#8217; geopc@citrusinformatics.com roni@citrusinformatics.com sarji@citrusinformatics.com
  
> MAIL=$?
  
> [ $MAIL -eq 0 ] && echo &#8220;====>> Mail Sent&#8221;
  
> [ $MAIL -ne 0 ] && echo &#8220;====>> Mail Failed&#8221;