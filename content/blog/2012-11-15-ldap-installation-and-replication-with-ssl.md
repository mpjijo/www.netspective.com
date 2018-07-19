---
title: LDAP Installation and Replication with SSL
author: Geo P C
type: post
date: 2012-11-15T08:29:40+00:00
url: /knowledgebase/secure-sops/2012/11/15/ldap-installation-and-replication-with-ssl/
categories:
  - Secure SOPs

---
## Installation:

    sudo apt-get update
    sudo apt-get install slapd ldap-utils
    

slapd password for cn=admin is password

Please edit the following file as follows:

`vi /etc/ldap/slapd.d/cn\=config/olcDatabase\=&#123;1&#125;hdb.ldif`

    olcDbDirectory: /var/lib/ldap
    olcSuffix: dc=ds,dc=netspective,dc=com
    olcAccess: {0}to attrs=userPassword,shadowLastChange by self write by anonymou
    s auth by dn="cn=admin,dc=ds,dc=netspective,dc=com" write by * none
    olcAccess: {1}to dn.base="" by * read
    olcAccess: {2}to * by self write by dn="cn=admin,dc=ds,dc=netspective,dc=com" write by * read
    olcLastMod: TRUE
    olcRootDN: cn=admin,dc=ds,dc=netspective,dc=com
    

Now import the following ldif file in Dropbox to server: (Its the latest ldif file of Prime LDAP Server)

Dropbox\Netspective IT\prime.ds.netspective.com.ldif

### LDAP Replication:

Replication is achieved using the Syncrepl engine. Syncrepl allows the changes to be synced using a consumer, provider model. A provider sends directory changes to consumers.

#### Provider Configuration

The following is an example of a Single-Master configuration. In this configuration one OpenLDAP server is configured as a provider and another as a consumer.

  * First, configure the provider server. Copy the following to a file named provider_sync.ldif:

`sudo vi provider_sync.ldif`

    # Add indexes to the frontend db.
    dn: olcDatabase={1}hdb,cn=config
    changetype: modify
    add: olcDbIndex
    olcDbIndex: entryCSN eq
    -
    add: olcDbIndex
    olcDbIndex: entryUUID eq
    
    #Load the syncprov and accesslog modules.
    dn: cn=module{0},cn=config
    changetype: modify
    add: olcModuleLoad
    olcModuleLoad: syncprov
    -
    add: olcModuleLoad
    olcModuleLoad: accesslog
    
    # Accesslog database definitions
    dn: olcDatabase={2}hdb,cn=config
    objectClass: olcDatabaseConfig
    objectClass: olcHdbConfig
    olcDatabase: {2}hdb
    olcDbDirectory: /var/lib/ldap/accesslog
    olcSuffix: cn=accesslog
    olcRootDN: cn=admin,dc=ds,dc=netspective,dc=com
    olcDbIndex: default eq
    olcDbIndex: entryCSN,objectClass,reqEnd,reqResult,reqStart
    
    # Accesslog db syncprov.
    dn: olcOverlay=syncprov,olcDatabase={2}hdb,cn=config
    changetype: add
    objectClass: olcOverlayConfig
    objectClass: olcSyncProvConfig
    olcOverlay: syncprov
    olcSpNoPresent: TRUE
    olcSpReloadHint: TRUE
    
    # syncrepl Provider for primary db
    dn: olcOverlay=syncprov,olcDatabase={1}hdb,cn=config
    changetype: add
    objectClass: olcOverlayConfig
    objectClass: olcSyncProvConfig
    olcOverlay: syncprov
    olcSpNoPresent: TRUE
    
    # accesslog overlay definitions for primary db
    dn: olcOverlay=accesslog,olcDatabase={1}hdb,cn=config
    objectClass: olcOverlayConfig
    objectClass: olcAccessLogConfig
    olcOverlay: accesslog
    olcAccessLogDB: cn=accesslog
    olcAccessLogOps: writes
    olcAccessLogSuccess: TRUE
    # scan the accesslog DB every day, and purge entries older than 7 days
    olcAccessLogPurge: 07+00:00 01+00:00
    

  * The AppArmor profile for slapd will need to be adjusted for the accesslog database location. Edit /etc/apparmor.d/usr.sbin.slapd adding: 
    `sudo vi /etc/apparmor.d/usr.sbin.slapd`
    
    `/var/lib/ldap/accesslog/ r,<br />
/var/lib/ldap/accesslog/** rwk,`

Then create the directory, reload the apparmor profile, and copy the DB_CONFIG file:

    sudo -u openldap mkdir /var/lib/ldap/accesslog
    sudo -u openldap cp /var/lib/ldap/DB_CONFIG /var/lib/ldap/accesslog/
    sudo /etc/init.d/apparmor reload
    

  * Next, add the LDIF file using the ldapadd utility: 
    `sudo ldapadd -Y EXTERNAL -H ldapi:/// -f provider_sync.ldif`

  * Restart slapd: 
    `sudo /etc/init.d/slapd restart`

#### Consumer Configuration

  * create a file named consumer_sync.ldif containing: 

`sudo vi consumer_sync.ldif`

    #Load the syncprov module.
    dn: cn=module{0},cn=config
    changetype: modify
    add: olcModuleLoad
    olcModuleLoad: syncprov
    
    # syncrepl specific indices
    dn: olcDatabase={1}hdb,cn=config
    changetype: modify
    add: olcDbIndex
    olcDbIndex: entryUUID eq
    -
    add: olcSyncRepl
    olcSyncRepl: rid=0 provider=ldaps://prime.ds.netspective.com bindmethod=simple binddn="cn=admin,dc=ds,dc=netspective,dc=com" 
     credentials=password searchbase="dc=ds,dc=netspective,dc=com" logbase="cn=accesslog" 
     logfilter="(&(objectClass=auditWriteObject)(reqResult=0))" schemachecking=on 
     type=refreshAndPersist retry="60 +" syncdata=accesslog
    -
    add: olcUpdateRef
    olcUpdateRef: ldaps://prime.ds.netspective.com
    

**Note**: You will probably want to change the attributes to match your configuration.

  * Add the LDIF file to the configuration tree: 
    `sudo ldapadd -c -Y EXTERNAL -H ldapi:/// -f consumer_sync.ldif`

The frontend database should now sync between servers. You can add additional servers using the steps above as the need arises.

  * Restart slapd: 
    `sudo /etc/init.d/slapd restart`

#### TLS and SSL

When authenticating to an OpenLDAP server it is best to do so using an encrypted session. This can be accomplished using Transport Layer Security (TLS) and/or Secure Sockets Layer (SSL).

The first step in the process is to obtain or create a certificate. Because slapd is compiled using the gnutls library, the certtool utility will be used to create certificates.

First, install gnutls-bin by entering the following in a terminal:

    sudo apt-get install gnutls-bin
    

Next, create a private key for the Certificate Authority (CA):

    sudo sh -c "certtool --generate-privkey > /etc/ssl/private/cakey.pem"
    

Create a /etc/ssl/ca.info details file to self-sign the CA certificate containing:

    cn = prime.ds.netspective.com
    ca
    cert_signing_key
    

Now create the self-signed CA certificate:

    sudo certtool --generate-self-signed --load-privkey /etc/ssl/private/cakey.pem --template  /etc/ssl/ca.info --outfile /etc/ssl/certs/cacert.pem
    

Make a private key for the server:

    sudo sh -c "certtool --generate-privkey > /etc/ssl/private/prime.ds.netspective.com_slapd_key.pem"
    

To sign the server&#8217;s certificate with the CA, create the /etc/ssl/ldap01.info info file containing:

    organization = Netspective Communications
    cn = prime.ds.netspective.com
    tls_www_server
    encryption_key
    signing_key
    

Create the server&#8217;s certificate:

    sudo certtool --generate-certificate --load-privkey /etc/ssl/private/prime.ds.netspective.com_slapd_key.pem --load-ca-certificate /etc/ssl/certs/cacert.pem --load-ca-privkey /etc/ssl/private/cakey.pem --template /etc/ssl/prime.ds.netspective.com.info --outfile /etc/ssl/certs/prime.ds.netspective.com_slapd_cert.pem
    

Once you have a certificate, key, and CA cert installed, use ldapmodify to add the new configuration options:

`sudo ldapmodify -Y EXTERNAL -H ldapi:///<br />
` 

    dn: cn=config
    add: olcTLSCACertificateFile
    olcTLSCACertificateFile: /etc/ssl/certs/cacert.pem
    -
    add: olcTLSCertificateFile
    olcTLSCertificateFile: /etc/ssl/certs/prime.ds.netspective.com_slapd_cert.pem
    -
    add: olcTLSCertificateKeyFile
    olcTLSCertificateKeyFile: /etc/ssl/private/prime.ds.netspective.com_slapd_key.pem</code>
    

Note: Use &#8220;Contrl + D&#8221; to exit.

Next, edit /etc/default/slapd uncomment the SLAPD_SERVICES option:

SLAPD_SERVICES=&#8221;ldap:/// ldapi:/// ldaps:///&#8221;

Now the openldap user needs access to the certificate:

    sudo adduser openldap ssl-cert
    sudo chgrp ssl-cert /etc/ssl/private/prime.ds.netspective.com_slapd_key.pem
    sudo chmod g+r /etc/ssl/private/prime.ds.netspective.com_slapd_key.pem
    

If the /etc/ssl/private and /etc/ssl/private/server.key have different permissions, adjust the commands appropriately.

Finally, restart slapd and allow port 636 in firewall:

    sudo /etc/init.d/slapd restart
    sudo ufw allow 636
    

The slapd daemon should now be listening for LDAPS connections and be able to use STARTTLS during authentication.

If you run into troubles with the server not starting, check the /var/log/syslog. If you see errors like main: TLS init def ctx failed: -1, it is likely there is a configuration problem. Check that the certificate is signed by the authority from in the files configured, and that the ssl-cert group has read permissions on the private key.

#### TLS Replication

If you have setup Syncrepl between servers, it is prudent to encrypt the replication traffic using Transport Layer Security (TLS). For details on setting up replication see the section called LDAP Replication.

Assuming you have followed the above instructions and created a CA certificate and server certificate on the Provider server.

In **Provider server** follow the following instructions to create a certificate and key for the Consumer server.

Create a new key for the Consumer server:

    mkdir slave1.ds.netspective.com
    cd slave1.ds.netspective.com
    certtool --generate-privkey > slave1.ds.netspective.com_slapd_key.pem
    

Creating a new directory is not strictly necessary, but it will help keep things organized and make it easier to copy the files to the Consumer server.

Next, create an info file, slave1.ds.netspective.com.info for the Consumer server, changing the attributes to match your locality and server:

    country = US
    state = MD
    locality = Brightseat Rd. Landover
    organization = Netspective Communications
    cn = slave1.ds.netspective.com
    tls_www_client
    encryption_key
    signing_key
    

Create the certificate:

    sudo certtool --generate-certificate --load-privkey slave1.ds.netspective.com_slapd_key.pem --load-ca-certificate /etc/ssl/certs/cacert.pem --load-ca-privkey /etc/ssl/private/cakey.pem --template slave1.ds.netspective.com.info --outfile slave1.ds.netspective.com_slapd_cert.pem
    

Copy the cacert.pem to the dicretory:

    cp /etc/ssl/certs/cacert.pem .
    

The only thing left is to copy the slave1.ds.netspective.com directory to the Consumer server

    scp -rv slave1.ds.netspective.com geo_pc@10.177.7.163:/home/geo_pc
    

Now in **consumer server** follow the steps:

From the directory slave1.ds.netspective.com copy slave1.ds.netspective.com\_slapd\_cert.pem and cacert.pem to /etc/ssl/certs, and copy slave1.ds.netspective.com\_slapd\_key.pem to /etc/ssl/private.

    sudo cp slave1.ds.netspective.com_slapd_cert.pem /etc/ssl/certs/
    sudo cp cacert.pem /etc/ssl/certs/
    sudo cp slave1.ds.netspective.com_slapd_key.pem /etc/ssl/private/
    

Once the files are in place adjust the cn=config tree by entering:

    sudo ldapmodify -Y EXTERNAL -H ldapi:///
    
    
    dn: cn=config
    add: olcTLSCACertificateFile
    olcTLSCACertificateFile: /etc/ssl/certs/cacert.pem
    -
    add: olcTLSCertificateFile
    olcTLSCertificateFile: /etc/ssl/certs/slave1.ds.netspective.com_slapd_cert.pem
    -
    add: olcTLSCertificateKeyFile
    olcTLSCertificateKeyFile: /etc/ssl/private/slave1.ds.netspective.com_slapd_key.pem
    modifying entry "cn=config"
    

As with the Provider you can now edit /etc/default/slapd and add the ldaps:/// parameter to the SLAPD_SERVICES option.

Now that TLS has been setup on each server, once again modify the Consumer server&#8217;s cn=config tree by entering the following in a terminal:

    sudo ldapmodify -Y EXTERNAL -H ldapi:///
    
    dn: olcDatabase={1}hdb,cn=config
    replace: olcSyncrepl
    olcSyncRepl: rid=0 provider=ldaps://prime.ds.netspective.com bindmethod=simple binddn="cn=admin,dc=ds,dc=netspective,dc=com" 
         credentials=password searchbase="dc=ds,dc=netspective,dc=com" logbase="cn=accesslog" 
         logfilter="(&(objectClass=auditWriteObject)(reqResult=0))" schemachecking=on 
         type=refreshAndPersist retry="60 +" syncdata=accesslog starttls=yes
    

Or you manullay add the line &#8220;starttls=yes&#8221; in the file

    vi /etc/ldap/slapd.d/cn\=config/olcDatabase\=\{1\}hdb.ldif
    

If the LDAP server hostname does not match the Fully Qualified Domain Name (FQDN) in the certificate, you may have to edit /etc/ldap/ldap.conf and add the following TLS options:

    # TLS certificates (needed for GnuTLS)
    #TLS_CACERT     /etc/ssl/certs/ca-certificates.crt
    TLS_CERT /etc/ssl/certs/slave1.ds.netspective.com_slapd_cert.pem
    TLS_KEY /etc/ssl/private/slave1.ds.netspective.com_slapd_key.pem
    TLS_CACERT /etc/ssl/certs/cacert.pem
    

Now the openldap user needs access to the certificate:

`sudo adduser openldap ssl-cert<br />
sudo chgrp ssl-cert /etc/ssl/private/slave1.ds.netspective.com_slapd_key.pem<br />
sudo chmod g+r /etc/ssl/private/slave1.ds.netspective.com_slapd_key.pem`

Finally, restart slapd on each of the servers:

    sudo /etc/init.d/slapd restart
    

### Client Configuration:

Follow [To enable LDAP authentication in Ubuntu server][1]

Now chnage the seetings to add LDAP servers and connection through SSL.

`sudo vi /etc/ldap.conf`

    # Your LDAP server. Must be resolvable without using LDAP.
    # Multiple hosts may be specified, each separated by a
    # space. How long nss_ldap takes to failover depends on
    # whether your LDAP client library supports configurable
    # network or connect timeouts (see bind_timelimit).
    host prime.ds.netspective.com slave1.ds.netspective.com
    
    # The distinguished name of the search base.
    base dc=ds,dc=netspective,dc=com
    
    # Another way to specify your LDAP server is to provide an
    #uri ldap://master.ds.netspective.com
    #uri ldap://slave1.ds.netspective.com
    # Unix Domain Sockets to connect to a local LDAP Server.
    
    # The port.
    # Optional: default is 389.
    port 636
    
    # OpenLDAP SSL mechanism
    # start_tls mechanism uses the normal LDAP port, LDAPS typically 636
    ssl start_tls
    ssl on
    
    # OpenLDAP SSL options
    # Require and verify server certificate (yes/no)
    # Default is to use libldap's default behavior, which can be configured in
    # /etc/openldap/ldap.conf using the TLS_REQCERT setting.  The default for
    # OpenLDAP 2.0 and earlier is "no", for 2.1 and later is "yes".
    tls_checkpeer no
    

Restart LDAP NSS:

    sudo /etc/init.d/libnss-ldap restart

 [1]: https://www.netspective.com/knowledgebase/secure-sops/2012/10/17/how-to-enable-ldap-authentication-in-ubuntu-server/