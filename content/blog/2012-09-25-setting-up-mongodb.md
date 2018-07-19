---
title: Setting up MongoDB
author: Shahid N. Shah
type: post
date: 2012-09-25T09:24:45+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-mongodb/
categories:
  - IT Infrastructure SOPs

---
## MongoDB Server

Download the version of mongodb-linux-x86_64-2.0.2 from the [link][1].

Extract the mongodb-linux-x86_64-2.0.2.tgz tar file using the command and change it into the bin/directory

    cd /opt
    sudo tar -xvf mongodb-linux-x86_64-2.0.2.tgz -C /opt/
    cd mongodb-linux-x86_64-2.0.2/bin/
    

[cheap clonidine online][2], [order clomid][3] 

To check successful installation ,execute database server binary file using below given command.

    sudo mkdir -p /data/db/
    sudo chown `id -u` /data/db
    ./mongod
    

To open a client database connection execute the binary file using below given command

    cd /opt/mongodb-linux-x86_64-2.0.2/bin/
    ./mongo
    

Default port for MongoDB is 27017. To change the port, use the following command,

    ./mongod --port 12345
    

Client to connect with the port other than the default port

    ./mongo --port 12345
    

Create/Use database

    use sample
    

Add new user to the database

    db.addUser('sample','password');
    

Authenticate the user

    db.auth('sample','password');
    

## Startup

Open /etc/init.d/mongodb

    sudo vim /etc/init.d/mongodb
    

Copy and paste the following lines in /etc/init.d/mongodb

    #!/bin/bash
    #DESCRIPTION:MONGODB STARTUP SCRIPT
    PROGRAM=/opt/mongodb-linux-x86_64-2.0.2/bin/mongod
    MONGOPID=`ps -ef | grep 'mongodb' | grep -v grep | awk '{print $2}'`
    case "$1" in
        start)
            echo "Starting MongoDB server"
            /opt/mongodb-linux-x86_64-2.0.2/bin/mongod --fork --quiet --dbpath /data/db  --logpath /var/log/mongodb.log
            echo "Started MongoDB Server\n"
            ;;
        stop)
            if [ -f /data/db/mongod.lock ]; then
                echo "Stopping MongoDB server"
                MONGOPID=`cat /data/db/mongod.lock`
                kill -2 $MONGOPID
                echo "Stopped MongoDB"
            fi
            ;;
        *)
            echo "Usage: /etc/init.d/mongo {start|stop}"
            exit 1
    esac
    exit 0
    

Provide Execute permission

    sudo chmod +x /etc/init.d/mongodb
    

Start MonogoDB

    sudo /etc/init.d/mongodb start
    

Use the following command to stop MongoDB

    sudo /etc/init.d/mongodb stop

 [1]: http://www.mongodb.org/downloads
 [2]: https://pills24h.com/buy-clonidine-online-without-prescription/
 [3]: http://prestige-pharmacy.com/buy-clomid-online/