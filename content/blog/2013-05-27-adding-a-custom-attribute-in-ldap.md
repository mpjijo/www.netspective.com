---
title: Adding a custom attribute in LDAP
author: Geo P C
type: post
date: 2013-05-27T10:38:41+00:00
url: /knowledgebase/it-infrastructure-sops/2013/05/27/adding-a-custom-attribute-in-ldap/
categories:
  - IT Infrastructure SOPs

---
### Adding a custom attribute in LDAP

  * First, create a conversion schema_convert.conf file containing the following lines: 
    include /etc/ldap/schema/core.schema
  
    include /etc/ldap/schema/collective.schema
  
    include /etc/ldap/schema/corba.schema
  
    include /etc/ldap/schema/cosine.schema
  
    include /etc/ldap/schema/duaconf.schema
  
    include /etc/ldap/schema/dyngroup.schema
  
    include /etc/ldap/schema/inetorgperson.schema
  
    include /etc/ldap/schema/java.schema
  
    include /etc/ldap/schema/misc.schema
  
    include /etc/ldap/schema/nis.schema
  
    include /etc/ldap/schema/openldap.schema
  
    include /etc/ldap/schema/ppolicy.schema

  * Next, create a temporary directory to hold the output: 
    mkdir /tmp/ldif_output

  * Now using slaptest convert the schema files to LDIF: 
    slaptest -f schema\_convert.conf -F /tmp/ldif\_output

Adjust the configuration file name and temporary directory names if yours are different. Also, it may be worthwhile to keep the ldif_output directory around in case you want to add additional schemas in the future.

  * Edit the /tmp/ldif_output/cn=config/cn=schema/cn={8}misc.ldif file, changing the following attributes: 
    dn: cn=misc,cn=schema,cn=config
  
    &#8230;
  
    cn: misc
    
    And remove the following lines from the bottom of the file:
    
    structuralObjectClass: olcSchemaConfig
  
    entryUUID: 10dae0ea-0760-102d-80d3-f9366b7f7757
  
    creatorsName: cn=config
  
    createTimestamp: 20080826021140Z
  
    entryCSN: 20080826021140.791425Z#000000#000#000000
  
    modifiersName: cn=config
  
    modifyTimestamp: 20080826021140Z

[Note]

The attribute values will vary, just be sure the attributes are removed.

  * Finally, using the ldapadd utility, add the new schema to the directory: 
    ldapadd -Y EXTERNAL -H ldapi:// -f /tmp/ldif_output/cn\=config/cn\=schema/cn\=&#123;8&#125;misc.ldif