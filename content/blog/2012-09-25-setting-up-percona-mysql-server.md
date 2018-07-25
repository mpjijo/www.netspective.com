---
title: Setting up Percona MySql server
author: Shahid N. Shah
type: post
date: 2012-09-25T10:14:49+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-percona-mysql-server/
post_private:
  - 'a:1:{i:0;s:8:"Required";}'
categories:
  - IT Infrastructure SOPs

---
Percona apt Repository is not included in Base Ubuntu. So need to install it

    sudo gpg --keyserver  hkp://keys.gnupg.net --recv-keys 1C4CBDCDCD2EFD2A
    sudo gpg -a --export CD2EFD2A | sudo apt-key add -
    

Add this to /etc/apt/sources.list, replacing VERSION with the name of your distribution:

    deb http://repo.percona.com/apt precise main
    deb-src http://repo.percona.com/apt precise main
    apt-get update
    apt-get install percona-server-server-5.5 percona-server-client-5.5
    

Ref:<http://www.percona.com/doc/percona-server/5.5/installation/apt_repo.html>
  
Ref:<http://www.percona.com/doc/percona-server/5.5/installation.html>

We can generate initial mysql configuration file (my.cnf) through the following link
  
<https://tools.percona.com/wizard>
