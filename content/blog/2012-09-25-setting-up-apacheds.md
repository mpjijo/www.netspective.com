---
title: Setting up ApacheDS
author: Shahid N. Shah
type: post
date: 2012-09-25T09:08:02+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apacheds/
categories:
  - IT Infrastructure SOPs

---
## ApacheDS LDAP Server Installation and Configuration

### Prerequisites

Make sure [Java is available][1]:
      
java -version

### ApacheDS Distribution

Downloads are available at <http://directory.apache.org/apacheds/1.5/download/download-linux-bin.html>.

### Server Setup

    mkdir -p $HOME/setup; cd $HOME/setup
    wget http://mirrors.gigenet.com/apache//directory/apacheds/unstable/1.5/1.5.7/apacheds-1.5.7-x86_64.bin
    chmod +x apacheds-1.5.7-x86_64.bin
    sudo ./apacheds-1.5.7-x86_64.bin
    

When responses are requested, supply the following defaults (&#8220;ENTER&#8221; means hit the Enter key to accept the default):

    Do you agree to the above license terms? [yes or no] yes
    Where do you want to install Apache DS? [Default: /opt/apacheds-1.5.7] ENTER
    Where do you want to install Apache DS instances? [Default: /var/lib/apacheds-1.5.7] ENTER
    What name do you want for the default instance? [Default: default] ENTER
    Where do you want to install the startup script? [Default: /etc/init.d] ENTER
    Which user do you want to run the server with (if not already existing, the specified user will be created)? [Default: apacheds] ENTER
    

### Start the Server

You need to start the default server (and verify that it starts automatically when the server is rebooted):

    sudo /etc/init.d/apacheds-1.5.7-default start
    

Check to see that it&#8217;s running:

    sudo /etc/init.d/apacheds-1.5.7-default status
    

You should see something like the following:

    Apache Directory Server - default is running (4905).
    

### Troubleshooting

If you do not see that it&#8217;s running look at the /opt/apacheds-1.5.7/bin/wrapper.log file to see if there were any
  
issues. The most common problem is that it couldn&#8217;t find Java. If that&#8217;s the case, open up the [dapoxetine where to buy][2], [order zithromax][3] config file:

    sudo vi /opt/apacheds-1.5.7/conf/apacheds.conf 
    

Look for this line:

    wrapper.java.command=/usr/java/home/bin/java
    

Make sure it points to a valid java executable.

### Connecting to the Server

When you need to connect to the server, use the following details:

    Hostname: localhost
    Port: 10389
    Bind DN or user: uid=admin,ou=system
    Bind password: secret
    

### Command Line LDAP Client Setup

You should install the ldap-utils package for using LDAP server from Linux command line.

    sudo apt-get install -y ldap-utils
    

### Initial ABAC Schema Import

Use the following command line on the Server to load up initial Netspective ABAC Schema:

    cd "$HOME/netspective-SOPs/System Operations (SysOps)/Netspective LDAP"
    ldapmodify -h localhost -p 10389 -D "uid=admin,ou=system" -w secret -a -f "Netspective ApacheDS ABAC Schema.ldif"

 [1]: https://www.netspective.com/setting-up-java/
 [2]: https://pills24h.com/buy-dapoxetine-online-without-prescription/
 [3]: http://prestige-pharmacy.com/buy-zithromax-online/