---
title: Configuring an application to login from specified users using LDAP acl.
author: Geo P C
type: post
date: 2013-05-28T04:03:57+00:00
url: /knowledgebase/it-infrastructure-sops/2013/05/28/configuring-an-application-to-login-from-specified-users-using-ldap-acl/
categories:
  - IT Infrastructure SOPs
  - Sensitive SOPs

---
#### Configuring an application to login from specified users using LDAP acl.

First create an account for each application (all applications have binddn and bind password to connect to an ldap server).

For eg we have create an user for zabbix as follows:

    cn=zabbix,ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com
    

Then for users that need to login to application add objectClass &#8220;netspectiveSimpleAccessControl&#8221; and define attribute allowedService as &#8220;cn=zabbix,ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com&#8221;

You can refer [Adding Custom Attribute in LDAP][1]

Now in LDAP server we modify acl to restrict access rights of these DNs from users with that have a specified allowedService.

    olcAccess: {4}to dn.subtree="ou=People,dc=prime,dc=ds,dc=netspective,dc=com" filter="(allowedService=uid=gitlab,ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com)" by dn.exact="cn=gitlab,ou=Applications,dc=prime,dc=ds,dc=netspective,dc=com" read by * break
    

You can refer [Modifying Access Control List][2]

 [1]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2013/05/27/adding-a-custom-attribute-in-ldap/
 [2]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2013/05/27/modifying-access-control-list-in-ldap/