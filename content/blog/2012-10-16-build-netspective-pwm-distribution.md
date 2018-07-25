---
title: Build Netspective PWM Distribution
author: Shahid N. Shah
type: post
date: 2012-10-16T04:42:01+00:00
url: /knowledgebase/developer-sops/2012/10/16/build-netspective-pwm-distribution/
categories:
  - Developer SOPs

---
PWM is an open source password self service application for LDAP directories.
  
You should not build PWM on a production server. Build it on an configuration management server of some sort.

## Prerequisites

  * [Java 5 or above][ [(../Setting up Java.md)][3]
  * [Tomcat 7 or above][(../Setting up Apache Tomcat.md)][4]
  * [GitHub for Access to SOPs Files][(../Setting up GitHub Keys.md)][5]

## Download distribution

PWM is available at http://code.google.com/p/pwm/downloads/list:

    mkdir -p $HOME/setup; cd $HOME/setup
    wget http://pwm.googlecode.com/files/pwm_v1.6.1.zip
    

Unpack the contents:

    sudo apt-get install -y zip
    mkdir pwm-1.6.1; cd pwm-1.6.1
    unzip ../pwm_v1.6.1.zip
    

Copy the Netspective PWM configuration file from repository to pwm [WEB-INF][6] directory in the war file.

    jar uf pwm.war -C "$HOME/netspective-SOPs/Developer Operations (DevOps)/Netspective User Provisioning (PWM)" WEB-INF/PwmConfiguration.xml
    

Once the pwm.war has been updated, you can copy it to the Tomcat webapps directory:

    sudo cp -rv pwm.war /opt/tomcat/webapps
    

Restart tomcat

    sudo /opt/tomcat/bin/catalina.sh stop
    sudo /opt/tomcat/bin/catalina.sh start
    

When tomcat starts up, it will deploy the war file into /webapps/pwm directory. Next, visit the pwm application with a browser. Assuming your browser and tomcat are on the same machine and your using the default tomcat port numbers, the url will be as follows:

> https://idm.netspective.com:443/pwm 

_NOTE TO GEOPC_: **Why do we need to do this manually instead of in the PwmConfiguration.xml file?**

While accessing above url you will a page in which on top you will see &#8220;PWM is in configuration mode. Use the ConfigManager to modify or lock the configuration.&#8221; Click on ConfigManager

You will see PWM Configuration Editor and click on view and tick on &#8220;Show Advanced Settings&#8221;

Now change the followings settings to match your ldap server properties:

Click on settings and take LDAP Directory

> Under LDAP URLs change ldap url to your ldap server&#8217;s ip. _For eg: ldap://idm.netspective.com:10389_
> 
> Change LDAP Proxy User. _For eg: uid=admin,ou=users,ou=system_
> 
> Change LDAP Proxy Password to your password.
> 
> Change LDAP Contextless Login Root where its the base context to search for usernames during login. _For eg: ou=users,ou=system_
> 
> Change PWM Admin Query String with your ldap admin user _For eg: uid=admin,ou=users,ou=system_ 

**Configuration changes for PWM integrating with CAS**

In PWM Configuration Editor click on settings and take Miscellaneous

> Change CAS ClearPass URL to your CAS server url. For eg: https://idm.netspective.com:443/cas/clearPass 

Click on Actions and Save.

Now open file /opt/apache-tomcat-version/webapps/pwm/WEB-INF/web.xml either through shell or FTP

    vi /apache-tomcat-version/webapps/pwm/WEB-INF/web.xml
    

Now In the PWM web.xml you will need to uncomment the CAS section and fit it to your environment. Note the text is already in the web.xml, it just needs the comments removed and the settings modified.

    <filter>
            <filter-name>CAS Validation Filter</filter-name>
            <filter-class>org.jasig.cas.client.validation.Cas20ProxyReceivingTicketValidationFilter</filter-class>
            <init-param>
                <param-name>casServerUrlPrefix</param-name>
                <param-value>https://idm.netspective.com:443/cas/</param-value>
            </init-param>
            <init-param>
                <param-name>serverName</param-name>
                <param-value>idm.netspective.com:443</param-value>
            </init-param>
            <init-param>
                <param-name>proxyCallbackUrl</param-name>
                <param-value>https://idm.netspective.com:443/pwm/proxyCallback</param-value>
            </init-param>
            <init-param>
                <param-name>proxyReceptorUrl</param-name>
                <param-value>/proxyCallback</param-value>
            </init-param>
        </filter>
        <filter>
            <filter-name>CAS Authentication Filter</filter-name>
            <filter-class>org.jasig.cas.client.authentication.AuthenticationFilter</filter-class>
            <init-param>
                <param-name>casServerLoginUrl</param-name>
                <param-value>https://idm.netspective.com:443/cas/login</param-value>
            </init-param>
            <init-param>
                <param-name>serverName</param-name>
                <param-value>idm.netspective.com:443</param-value>
            </init-param>
            <init-param>
                <param-name>renew</param-name>
                <param-value>false</param-value>
            </init-param>
            <init-param>
                <param-name>gateway</param-name>
                <param-value>false</param-value>
            </init-param>
        </filter>
        <filter>
            <filter-name>CAS Single Sign Out Filter</filter-name>
            <filter-class>org.jasig.cas.client.session.SingleSignOutFilter</filter-class>
        </filter>
        <filter-mapping>
            <filter-name>CAS Single Sign Out Filter</filter-name>
            <url-pattern>/*</url-pattern>
        </filter-mapping>
    

Now we can lock the configuration so that once the configuration is locked, you can no longer directly edit the running configuration using browser interface.

    vi /opt/apache-tomcat-version/webapps/pwm/WEB-INF/PwmConfiguration.xml
    

Change true to false in <property key="configIsEditable">true</property> so that it will be as follows:

    <properties>
        <property key="configIsEditable">false</property>
    

If you wish to make changes after locking, you will need to have access to the /opt/apache-tomcat-version/webapps/pwm/WEB-INF/PwmConfiguration.xml file on the PWM server.

**Theme Modifications:**

For theme modifications you can refer to this document [https://github.com/netspective/operations/blob/master/configuration/server/sso/documents/pwm\_theme\_modifications.md]()


 [3]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-java/
 [4]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-tomcat/
 [5]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-github-keys/
 [6]: https://www.netspective.com/wp-content/uploads/2012/10/WEB-INF.rar