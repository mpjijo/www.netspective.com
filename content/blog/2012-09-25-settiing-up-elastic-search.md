---
title: Setting Up Elastic Search
author: Shahid N. Shah
type: post
date: 2012-09-25T09:14:16+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/settiing-up-elastic-search/
categories:
  - IT Infrastructure SOPs

---
### Prerequisite

[Setting up Java][3]. Minimum required version is 6.

### Download and Install

Download [elasticsearch 0.18.6][4] and unpack the downloaded file.

    sudo mkdir /opt/elasticsearch
    sudo tar -xvf ~/Downloads/elasticsearch-0.18.6.tar.gz -C /opt/elasticsearch
    cd /opt/elasticsearch/elasticsearch-0.18.6
    

Create a data and log directory

    sudo mkdir -p /var/data/elasticsearch
    sudo mkdir -p /var/log/elasticsearch
    

Open config/elasticsearch.xml to configure elasticsearch.

    sudo vim config/elasticsearch.yml
    

Copy and paste the following lines at the end of the configuration file. You can make sure, none of the other lines were uncommented. Update the network.host with the machine IP address.

    network.host: <elasticsearch_ipaddress>
    path.logs : /var/log/elasticsearch
    path.data : /var/data/elasticsearch
    cluster.name : graylog2 
    http port : 9200 # default port number, can be changed to user needs.
    http.enabled: true
    http.max_content_length: 100mb
    

More information about configuration details, refer [link][5]

Start elasticsearch instance using the command

    cd bin
    sudo ./elasticsearch
    

Log information about the Elasticsearch instance will be available either in same directory or in default /var/log/elasticsearch/graylog2.log.

### Startup Script

Open /etc/init.d/elasticsearch

    sudo vim /etc/init.d/elasticsearch
    

Copy and paste the following lines in /etc/init.d/elasticsearch

    #!/bin/bash
    #DESCRIPTION:ELASTICSEARCH STARTUP SCRIPT
    ES_HOME=/opt/elasticsearch/elasticsearch-0.18.6
    ES_MIN_MEM=256m
    ES_MAX_MEM=2g
    DAEMON=$ES_HOME/bin/elasticsearch
    NAME=elasticsearch
    CONFIG_FILE=$ES_HOME/config/elasticsearch.yml
    case "$1"  in
        start)
            $DAEMON
            echo "Elasticsearch Started "
            ;;
        stop)
            ELASTICSEARCHPID=`ps -ef | grep 'org.elasticsearch.bootstrap.ElasticSearch' | grep -v grep | awk '{print $2}'`
            echo "Stopping Elasticsearch $ELASTICSEARCHPID"
            if [ ! -z "$ELASTICSEARCHPID" ]; then
                kill -9 $ELASTICSEARCHPID >/dev/null  2>&1
            fi
            echo "Elasticsearch Stopped "
            ;;
        *)
            N=/etc/init.d/$NAME
            echo "Usage: $N {start|stop}" >&2
            exit 1
            ;;
    esac
    exit 0
    

Provide Execute permission

    sudo chmod +x /etc/init.d/elasticsearch
    

Start ElasticSearch

    sudo /etc/init.d/elasticsearch start
    

Use the following command to stop ElasticSearch

    sudo /etc/init.d/elasticsearch stop
 [3]: https://www.netspective.com/setting-up-java/
 [4]: http://www.elasticsearch.org/download/
 [5]: http://www.elasticsearch.org/guide/reference/setup/configuration.html