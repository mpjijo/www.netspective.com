---
title: Setting up Percona xtrabackup
author: Shahid N. Shah
type: post
date: 2012-10-17T10:18:30+00:00
url: /knowledgebase/it-infrastructure-sops/2012/10/17/setting-up-percona-xtrabackup/
categories:
  - IT Infrastructure SOPs

---
## Setting up Percona xtrabackup 2.0.3

    wget http://www.percona.com/redir/downloads/XtraBackup/XtraBackup-2.0.3/binary/Linux/x86_64/percona-xtrabackup-2.0.3-470.tar.gz
    
    tar -zxvf percona-xtrabackup-2.0.3-470.tar.gz
    
    cd percona-xtrabackup-2.0.3/bin
    
    sudo cp * /usr/bin
    

note: XtraBackup knows where mysql data is by reading my.cnf file
  
note: Before installing it, Please check if latest version is available.