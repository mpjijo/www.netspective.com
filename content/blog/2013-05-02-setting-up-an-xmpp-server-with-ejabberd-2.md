---
title: Setting Up an XMPP Server with ejabberd
author: Roni Baby
type: post
excerpt: Setting Up an XMPP Server with ejabberd
date: 2013-05-02T11:08:34+00:00
url: /blog/setting-up-an-xmpp-server-with-ejabberd-2/
categories:
  - Server SOPs
  - Uncategorized

---
# Setting Up an XMPP Server with ejabberd

    apt-get update && sudo aptitude safe-upgrade
    apt-get install build-essential
    

**Need to install Erlang for ejabberd.**

**Prerequisite Packages for Erlang**

    sudo apt-get install fop
    sudo apt-get install openjdk-6-jdk
    sudo apt-get install libncurses5-dev
    sudo apt-get install unixodbc-dev
    sudo apt-get install libssl-dev
    sudo apt-get install libwxbase2.8
    sudo apt-get install libwxgtk2.8-dev
    sudo apt-get install libqt4-opengl-dev
    sudo apt-get install libgtk2.0-dev
    sudo apt-get install xsltproc
     

**Download Erlang source**

    cd /home/roni_baby/setup
    wget http://www.erlang.org/download/otp_src_R16B.tar.gz
    tar -zxvf otp_src_R16B.tar.gz
    cd otp_src_R16B
    ./configure
    make
    make install
    

**Download ejabberd source**

    wget http://www.process-one.net/downloads/ejabberd/2.1.12/ejabberd-2.1.12.tgz
    tar -zxvf ejabberd-2.1.12.tgz
    cd ejabberd-2.1.12/src
    ./configure
    make
    make install
    

Once it successfully installed, open its configuration file using

    vi /etc/ejabberd/ejabberd.cfg
    

Go to the host section and edit it accordingly

    {hosts, ["citrus.com","192.168.1.147"]}.
    

Go to the module section of this config file do enable the modules as per out requirements

**Start ejabberd service using**

    /sbin/ejabberdctl start
    /sbin/ejabberdctl status
    /sbin/ejabberdctl stop
    

**Create and register ejabbered user with**

    ejabberdctl register roni citrus.com roni123
    

Getting the error message &#8220;Can&#8217;t register user testadmin@ domain.com at node ejabberd@localhost: not_allowed&#8221; when i try to register new users in ejabbered

for fixing this above error i used the following in its configuration file

    {access, register, [{allow, admin}, {deny, all}]}.
    

I can able to register users successfully after this

Then login to Ejabbered admin login via

    http://ejabberd.citrus.com:5280/admin
    

How to enable BOSH module in Ejabbered:- It allows to embed XMPP requests in an HTTP packet

We will first enable BOSH module in configuration

    {5280, ejabberd_http, [
      {request_handlers,
        [
          {["http-bind"], mod_http_bind}
        ]}
    ]}
    

Then, like other modules, we will enable it in the few lines after,

    {mod_http_bind, []}
    

restart Ejabbered server. You can also check the BOSH access is properly configured by browsing the page

    http://ejabberd.citrus.com:5280/http-bind