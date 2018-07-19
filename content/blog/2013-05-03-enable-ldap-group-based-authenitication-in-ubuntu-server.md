---
title: Enable LDAP group based authentication in Ubuntu Server
author: Geo P C
type: post
date: 2013-05-03T05:38:43+00:00
url: /knowledgebase/it-infrastructure-sops/2013/05/03/enable-ldap-group-based-authenitication-in-ubuntu-server/
categories:
  - IT Infrastructure SOPs

---
Enable LDAP group based authentication in Ubuntu Server:

Open /etc/pam.d/sshd file and uncomment the following:

    sudo vi /etc/pam.d/sshd
    
    account  required     pam_access.so
    

Now open /etc/security/access.conf and add required rule.

    sudo vi /etc/security/access.conf
    
    # disallow all except people in the following group and root
    -:ALL EXCEPT root home.netspective.com:ALL EXCEPT LOCAL
    

Where home.netspective.com is the ldap group.