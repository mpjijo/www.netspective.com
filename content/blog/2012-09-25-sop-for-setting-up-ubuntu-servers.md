---
title: SOP for Setting up Base Ubuntu Servers
author: Shahid N. Shah
type: post
date: 2012-09-25T08:50:52+00:00
url: /knowledgebase/secure-sops/2012/09/25/sop-for-setting-up-ubuntu-servers/
categories:
  - Secure SOPs

---
# SOP for Setting up Base Ubuntu Servers

Please follow the procedures outlined below when setting up any Ubuntu server in the Netspective Operations Unit. Please follow the instructions in the order given and note any discrepancies or deviations meticulously.

**Server Configuration Management Setup**

Be sure that the server starts with the latest upgrades, packages, etc.

    sudo apt-get update && apt-get -y upgrade
    

**Install etckeeper**

We use etckeeper to revision control all of our configuration changes in /etc/* because it&#8217;s crucial to know what&#8217;s changing and how.

    sudo apt-get install -y etckeeper && sudo etckeeper uninit -f
    sudo vi /etc/etckeeper/etckeeper.conf
    

Change &#8220;VCS&#8221; to git instead of mercurial so it looks like this:

    VCS="git" 
    

Save the etckeeper.conf file and then commit the initial /etc files into Git:

    sudo apt-get install -y git-core 
    sudo etckeeper init 
    sudo etckeeper commit -am "Initial commit" 
    

From this point on, if you ever change any files in /etc/ be sure to commit early and often. Whenever you install packages commits will be automatic between installations.

**Now we need to configure Ubuntu server as LDAP client**

We need to install LDAP NSS module first issue the follow command

    apt-get install libnss-ldap 
    

It will ask you for few configuration settings, answer all questions with our LDAP server settings (Give below is the netspective ldap server settings)

Netspective LDAP server settings:

    ldap server : ldap://10.180.156.157
    Base Distinguished Name(Base DN): dc=prime,dc=ds,dc=netspective,dc=com 
    LDAP Version to Use : 3
    Make Local Root Database Admin: Yes
    Does the LDAP database require login: No
    LDAP account for root : cn=admin,dc=ds,dc=netspective,dc=com
    Password:
    

[viagra no rx][1], [lioresal without prescription][2] 

If you need to reconfigure ldap settings again run the following command

    dpkg-reconfigure ldap-auth-config 
    

To configure LDAP profile for NSS

    auth-client-config -t nss -p lac_ldap 
    

Reconfigure Ubuntu servers to use LDAP authentication as well as local authentication

    pam-auth-update 
    

You need to enable both profiles

For LDAP user to have home directory created automatically upon first time logged in, edit /etc/pam.d/common-session file and insert following above &#8220;pam_ldap.so&#8221; line.

    session required pam_mkhomedir.so umask=0022 skel=/etc/skel
    

For allowing user to change their LDAP password from this system. Edit /etc/pam.d/common-password file.

locate

    password [success=1 user_unknown=ignore default=die] pam_ldap.so use_authtok try_first_pass
    

and is change to

    password [success=1 user_unknown=ignore default=die] pam_ldap.so try_first_pass
    

Log out of the root user and log in with LDAP User

Disable root ssh login

    sudo apt-get install -y ssh sudo vi /etc/ssh/sshd_config 
    

Modify PermitRootLogin as shown below:

    PermitRootLogin no 
    sudo /etc/init.d/ssh restart 
    

**Installing Mail Server**

     sudo apt-get install postfix 
    

Please make sure that if there exists sendmail then packages that were automatically installed with sendmail should be removed with the following command:

     sudo apt-get autoremove sendmail 
    

Prevent repeated login attempts with Fail2Ban

Fail2Ban is a security tool to prevent dictionary attacks. It works by monitoring important services (like SSH) and blocking IP addresses which appear to be malicious (i.e. they are failing too many login attempts because they are guessing passwords).

**Install Fail2Ban:**

    sudo aptitude install fail2ban 
    

Configure Fail2Ban:

sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local sudo vi /etc/fail2ban/jail.local Set &#8220;enabled&#8221; to &#8220;true&#8221; in [ssh-ddos] section Set &#8220;port&#8221; to proper port in [ssh] and [ssh-ddos] sections

Restart to put new Fail2Ban rules into effect:

    sudo service fail2ban restart 
    

Remove whoopsie package from all Ubuntu 12.04 servers

    sudo apt-get purge whoopsie 
    

Environment Setup

Follow Shahid&#8217;s Linux and UNIX Configuration Instructions.

Security Setup

Reference: http://www.andrewault.net/2010/05/17/securing-an-ubuntu-server/

Other tools: http://www.ubuntugeek.com/list-of-security-tools-available-in-ubuntu.html

Secure shared memory https://help.ubuntu.com/community/StricterDefaults.

Disallow source routing of incoming packets http://www.cromwell-intl.com/security/security-stack-hardening.html

Netspective VLAN Implementation

Turn on Uncomplicated Firewall:

    sudo apt-get install -y ufw 
    

If this is a production server running in our cloud, make sure SSH is only allowed from our &#8220;jumpbox&#8221;. We have a server called home.netspective.com (IP 198.61.167.225) which is considered the &#8220;jumping&#8221; off point for all SSH.

sudo ufw allow proto tcp from 198.61.167.225 to any port 22 sudo ufw allow proto tcp from 10.180.144.66 to any port 22 sudo ufw enable

If this is not a production server (just a development box or something):

    sudo ufw allow ssh && sudo ufw enable 
    

Avoid SSH attacks:

sudo apt-get -y install denyhosts

Add a system security scanner:

sudo apt-get -y install tiger

Add intrusion detection tool:

sudo apt-get -y install psad

Modify psad settings to e-mail the admin in the event of intrusion detection

sudo vi psad.conf

Add email address in EMAIL_ADDRESSES

Add port scanning tool:

sudo apt-get -y install nmap

Add log watcher:

sudo apt-get install -y logwatch

Following these too

  1. getting an email alert when server reboot/shutdown

 [1]: https://pills24h.com/buy-viagra-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-lioresal-baclofen/