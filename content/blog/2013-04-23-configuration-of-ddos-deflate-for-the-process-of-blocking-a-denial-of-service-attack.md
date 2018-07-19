---
title: Configuration of DDoS-Deflate for the process of blocking a denial of service attack
author: Geo P C
type: post
date: 2013-04-23T05:41:32+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/23/configuration-of-ddos-deflate-for-the-process-of-blocking-a-denial-of-service-attack/
categories:
  - IT Infrastructure SOPs

---
Installation:

    wget http://www.mattzuba.com/wordpress/wp-content/uploads/2011/02/ddos_deflate-0.7.tar.gz
    tar -xf ddos_deflate-0.7.tar.gz
    cd ddos_deflate-0.7
    sudo ./install.sh
    

Configuration File:

    /usr/local/ddos/ddos.conf
    

It is possible to whitelist IP addresses, via

    /usr/local/ddos/ignore.ip.list
    

If an IP is blocked in server for eg: 115.248.183.170 we can unblock it with the following commands:

We can check if this IP is blocked in server or not with the following command.

    sudo iptabes -L | grep 115.248.183.170
    

Use following command to unblock IP from iptables:

    sudo iptables -D INPUT -s 115.248.183.170 -j DROP