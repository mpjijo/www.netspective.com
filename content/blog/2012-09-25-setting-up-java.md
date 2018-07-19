---
title: Setting up Java
author: Shahid N. Shah
type: post
date: 2012-09-25T09:21:39+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-java/
categories:
  - IT Infrastructure SOPs

---
## Java Setup and Configuration

Our standard approach for Java is to install all Java versions into /usr/java. If you did an ls in /usr/java, the
  
directory would look something like this:

    drwxr-xr-x  4 root root 4096 May 12 22:32 .
    drwxr-xr-x 11 root root 4096 May 12 22:31 ..
    lrwxrwxrwx  1 root root   21 May 12 22:32 jdk -> /usr/java/jdk1.7.0_04
    drwxr-xr-x  8 uucp  143 4096 Apr 12 05:27 jdk1.7.0_04
    lrwxrwxrwx  1 root root   21 May 12 22:32 jre -> /usr/java/jre1.7.0_04
    drwxr-xr-x  6 uucp  143 4096 Apr 12 05:22 jre1.7.0_04
    

Note that we symlink /usr/java/jdk and /usr/java/jre to the &#8220;primary&#8221; versions that we want [side effects of paxil][1], [cheap dapoxetine][2] to be the standard Java version across
  
the server but leave it up to the invidual users on the server to also choose what they&#8217;d like.

## Java Distributions

Java distributions are found at <http://www.oracle.com/technetwork/java/javase/overview/index.html>.

## Java 7.0 Setup Instructions

These instructions are platform-independent and should work on any Linux distribution.

    mkdir -p $HOME/setup; cd $HOME/setup
    # download the Java JDK and JRE packages 
    sudo mkdir -p /usr/java
    sudo tar xvf jdk-7u4-linux-x64.gz -C /usr/java
    sudo tar xvf jre-7u4-linux-x64.gz -C /usr/java
    sudo ln -s /usr/java/jdk1.7.0_04 /usr/java/jdk
    sudo ln -s /usr/java/jre1.7.0_04 /usr/java/jre
    

When possible, try and use the JRE instead of the JDK.

    export JAVA_HOME=/usr/java/jre

 [1]: https://pills24h.com/buy-paroxetine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/dapoxetine-modern-drug/