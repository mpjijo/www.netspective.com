---
title: Setting up Maven
author: Shahid N. Shah
type: post
date: 2012-10-16T05:31:31+00:00
url: /knowledgebase/developer-sops/2012/10/16/setting-up-maven/
categories:
  - Developer SOPs

---
## Apache Maven Installation and Configuration

Make sure \[Java is available\](../System Operations &#92;(SysOps&#92;)/Setting up Java.md):

    java -version
     [buy celebrex online][1], [cheap clomid][2] 

Maving is available at http://maven.apache.org/download.html. Download and install Apache Maven-2.2.1:

    mkdir -p $HOME/setup; cd $HOME/setup
    wget http://apache.mirrors.redwire.net//maven/binaries/apache-maven-2.2.1-bin.tar.gz
    sudo tar xvf apache-maven-2.2.1-bin.tar.gz -C /opt
    

Now set variables in server.

    vi $HOME/.bashrc
    

Copy and paste below lines:

    export MVN_HOME=/opt/apache-maven-2.2.1
    export PATH=$MVN_HOME/bin:$PATH
    

Reset your environment:

    . $HOME/.bashrc

 [1]: https://pills24h.com/buy-celebrex-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-clomid-online/