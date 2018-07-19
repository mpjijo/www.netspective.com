---
title: Troubleshooting Commands
author: Shahid N. Shah
type: post
date: 2012-09-25T09:40:19+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/troubleshooting-commands/
categories:
  - IT Infrastructure SOPs

---
### CentOS

[doxycycline online][1], [order zithromax][2] 

#### Command to find out total established connections, closing connection, TIME_WAIT and much more.

    netstat -nat | awk '{print $6}' | sort | uniq -c | sort -n
    

Sample Output:

     1 established
     1 Foreign
     5 LISTEN
     16 TIME_WAIT
     19 ESTABLISHED
    

#### Dig out more information about a specific ip address

    netstat -nat |grep {IP-address} | awk '{print $6}' | sort | uniq -c | sort -n
    
    2 LISTEN
    4 FIN_WAIT1
    4 ESTABLISHED
    7 TIME_WAIT
    

#### To print list of all unique IP address connected to server, enter:

    netstat -nat | awk '{ print $5}' | cut -d: -f1 | sed -e '/^$/d' | uniq
    

#### To print total of all unique IP address, enter:

    netstat -nat | awk '{ print $5}' | cut -d: -f1 | sed -e '/^$/d' | uniq | wc -l
    

#### Find Out If Box is Under DoS Attack or Not

If you think your Linux box is under attack, print out a list of open connections on your box and sorts them by according to IP address, enter:

    netstat -atun | awk '{print $5}' | cut -d: -f1 | sed -e '/^$/d' |sort | uniq -c | sort -n
    

#### Command to list the connections to port 80:

    netstat -alntp | grep :80
    

#### To check the number of connections to port 80:

    netstat -alntp | grep :80 | wc -l
    

#### Command To Find Out Top 10 CPU Consuming Process

    ps -auxf | sort -nr -k 3 | head -10
    

#### Command To Find Out The Top 10 Memory Consuming Process

    ps -auxf | sort -nr -k 4 | head -10
    

#### An useful command to list connections to a particular port with its proccess id.

For eg: Port 8080

    lsof -w -n -i tcp:8080
    

#### Command to remove a running process.

For eg: a proccess with PID 8457

    kill -9 8457
    

#### Linux Screen Command

Screen enables you to run many shell processes in a single terminal. Also it is very useful to avoid running shell commands locally and it can be monitored from everywhere.

##### Steps:

Create a screen using the command

    screen -S netspective
    

Close the shell without logout

Open a new shell and type

    screen -ls
    

Sample Output:

    There are screens on:
    16921.joemon (Dead ???)
    3981.name (Attached)
    5002.netspective (Attached)
    Remove dead screens with 'screen -wipe'.
    3 Sockets in /tmp/screens/S-root.
    

You can login to that screen using the command screen -r &#8216;screen name&#8217;

    screen -r 5002.netspective

 [1]: https://pills24h.com/buy-doxycycline-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/