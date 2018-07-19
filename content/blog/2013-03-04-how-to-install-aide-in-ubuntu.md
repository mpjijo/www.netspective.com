---
title: How to install AIDE in ubuntu
author: Roni Baby
type: post
date: 2013-03-04T06:53:54+00:00
url: /uncategorized/2013/03/04/how-to-install-aide-in-ubuntu/
categories:
  - Server SOPs
  - Uncategorized

---
## How to install AIDE (Advanced Intrusion Detection Environment)

Install AIDE

    apt-get update && apt-get install aide
    

Initialize AIDE database

    aideinit
    

Finaly, install newly-initialized database

    cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db
    

There are two primary configuration files for AIDE

  1. /etc/default/aide &#8211;> AIDE general config file
  2. /etc/aide/aide.conf &#8211;> AIDE rules configuration file

[Netspective KB][1] for creating custom AIDE database

Ref:

<https://help.ubuntu.com/community/FileIntegrityAIDE#Installing_AIDE>

<http://www.cyberciti.biz/faq/debian-ubuntu-linux-software-integrity-checking-with-aide/>

 [1]: https://www.netspective.com/uncategorized/2013/03/11/how-to-create-custome-aide-database-for-specific-filefolder-integrity-check/?preview=true&preview_id=70519&preview_nonce=47b04b0804