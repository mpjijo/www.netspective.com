---
title: Modifying Access Control List In LDAP
author: Geo P C
type: post
date: 2013-05-27T11:05:30+00:00
url: /knowledgebase/it-infrastructure-sops/2013/05/27/modifying-access-control-list-in-ldap/
categories:
  - IT Infrastructure SOPs

---
Modifying Access Control List In LDAP:

Create a file called acl.ldif

    sudo vi acl.ldif
    

Copy and paste the following line:

    dn: olcDatabase={1}hdb,cn=config
    changetype: modify
    add: olcAccess
    olcAccess: {0}to attrs=userPassword,shadowLastChange by self write by anonymous auth by dn="cn=admin,dc=ds,dc=netspective,dc=com" write by * none
    olcAccess: {1}to dn.base="" by * read
    olcAccess: {2}to dn.subtree="ou=People,dc=prime,dc=ds,dc=netspective,dc=com" attrs="entry" by dn.sub="ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com" read by * break
    olcAccess: {3}to dn.subtree="ou=People,dc=prime,dc=ds,dc=netspective,dc=com" filter="(allowedService=uid=phabricator,ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com)" by dn.exact="cn=phabricator,ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com" read by * break
    ----
    

You can add any acls in to it.

Now update this acl to LDAP server by executing the following command:

    sudo ldapmodify -Y EXTERNAL -H ldapi:/// -f acl.ldif