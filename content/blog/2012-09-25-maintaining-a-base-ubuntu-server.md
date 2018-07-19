---
title: Maintaining a Base Ubuntu Server
author: Shahid N. Shah
type: post
date: 2012-09-25T08:46:12+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/maintaining-a-base-ubuntu-server/
categories:
  - IT Infrastructure SOPs

---
### Weekly SOP for Maintaining Netspective Ubuntu Servers

Configuration Management check (see what&#8217;s not committed and why):

    cd /etc
    sudo git status
    

Updating software:

    sudo apt-get update
    sudo aptitude safe-upgrade
    

Check for intrusions:

    sudo psad -S
    

Analyze system with tiger (use tigexp to list explanations for FAIL codes):

    sudo -i
    tiger
    grep FAIL /var/log/tiger/`ls -t1 /var/log/tiger | head -1`
    exit
    

Scan ports with nmap:

    sudo nmap -v -sS localhost
     [zoloft tablets buy][1], [cheap zithromax][2] 

Check for rootkits:

    sudo chkrootkit
    

Look at logs:

    sudo logwatch | less

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/