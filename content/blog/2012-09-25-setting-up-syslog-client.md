---
title: Setting up syslog client
author: Shahid N. Shah
type: post
date: 2012-09-25T09:38:08+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-syslog-client/
categories:
  - IT Infrastructure SOPs

---
## Syslog Installation

Syslog supported by a wide variety of devices and receivers across multiple platforms and can be used to integrate log data from many different types of systems into a central repository.

Check for existing syslog. If not present, follow the document and install syslog

    rpm -aq | grep syslog
    

For Ubuntu

    dpkg --get-selections | grep syslog
    

Install Syslog

For CentOS

    yum install syslog-ng
    

For Ubuntu,

    apt-get install syslog-ng
    

Update the configuration in syslog-ng.conf using the following command

    sudo vim /etc/syslog-ng/syslog-ng.conf
    

Copy and paste the following lines. Update <Syslog_IP> with machine IP address.

    destination netspective { udp(<Syslog_IP> port(514)); };
    source s_all {internal(); 
    unix-stream("/dev/log");
    file("/proc/kmsg" log_prefix("kernel: "));};
    log { source(s_all); destination(netspective); };
    

Command used to start the syslog are given below

    /etc/init.d/syslog-ng start
    

Command to stop syslog

    /etc/init.d/syslog-ng stop
    

[doxycycline without prescription][1], [cheap zithromax][2]

 [1]: https://pills24h.com/buy-doxycycline-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/