---
title: 'Installation and Configuration of Graphite & Statsd Server'
author: Geo P C
type: post
date: 2013-03-19T11:11:24+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/19/installation-and-configuration-of-graphite-statsd-server/
categories:
  - IT Infrastructure SOPs

---
##### Installation and Configuration of Graphite & Statsd Server

    sudo apt-get update
    

sudo apt-get install libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap memcached python-cairo python-cairo-dev python-django python-ldap python-memcache python-pysqlite2 sqlite3 python-setuptools build-essential python-dev

    sudo easy_install zope.interface
    sudo easy_install twisted
    sudo easy_install txamqp
    sudo easy_install django-tagging
    
    
    cd /root/setup
    sudo wget http://launchpad.net/graphite/0.9/0.9.10/+download/graphite-web-0.9.10.tar.gz
    sudo wget http://launchpad.net/graphite/0.9/0.9.10/+download/carbon-0.9.10.tar.gz
    sudo wget http://launchpad.net/graphite/0.9/0.9.10/+download/whisper-0.9.10.tar.gz
    
    
    sudo tar -zxvf graphite-web-0.9.10.tar.gz
    sudo tar -zxvf carbon-0.9.10.tar.gz
    sudo tar -zxvf whisper-0.9.10.tar.gz
    
    sudo rm carbon-0.9.10.tar.gz
    sudo rm graphite-web-0.9.10.tar.gz
    sudo rm whisper-0.9.10.tar.gz
    
    cd /root/setup/whisper-0.9.10/
    sudo python setup.py install
    
    cd /root/setup/carbon-0.9.10/
    sudo python setup.py install
    
    
    cd /opt/graphite/conf
    sudo cp carbon.conf.example carbon.conf
    sudo cp storage-schemas.conf.example storage-schemas.conf
    
    
    
    cd /root/setup/graphite-web-0.9.10/
    sudo python check-dependencies.py
    sudo python setup.py install
    
    
    sudo cp /opt/graphite/conf/graphite.wsgi.example /opt/graphite/conf/graphite.wsgi
    cd /opt/graphite/webapp/graphite/
    sudo cp local_settings.py.example local_settings.py
    
    cd /opt/graphite/webapp/graphite/
    sudo python manage.py syncdb
    Username (Leave blank to use 'root'): nsysadmin
    E-mail address: geopc@citrusinformatics.com
    Password:   password
    

**Starting Carbon as a service**

Create a new file /etc/init.d/carbon and add the following into it:

    sudo vi /etc/init.d/carbon
    

and add the following into it:

    #! /bin/sh
    # /etc/init.d/carbon
    
    # Some things that run always
    touch /var/lock/carbon
    
    GRAPHITE_HOME=/opt/graphite
    CARBON_USER=www-data
    
    # Carry out specific functions when asked to by the system
    case "$1" in
        start)
            echo "Starting script carbon "
            su $CARBON_USER -c "cd $GRAPHITE_HOME"; su $CARBON_USR -c "$GRAPHITE_HOME/bin/carbon-cache.py start"
            ;;
        stop)
            echo "Stopping script carbon"
            su $CARBON_USER -c "cd $GRAPHITE_HOME"; su $CARBON_USR -c "$GRAPHITE_HOME/bin/carbon-cache.py stop"
            ;;
        *)
            echo "Usage: /etc/init.d/carbon {start|stop}"
            exit 1
            ;;
    esac
    
    exit 0
    
    sudo chmod 755 /etc/init.d/carbon
    

**Setting-up Webserver &#8211; Nginx**

    cd /root/setup
    sudo wget http://projects.unbit.it/downloads/uwsgi-1.4.9.tar.gz
    sudo tar -zxvf uwsgi-1.4.9.tar.gz
    sudo rm -rf uwsgi-1.4.9.tar.gz
    cd uwsgi-1.4.9/
    sudo make -f Makefile
    sudo cp uwsgi /usr/local/bin/
    sudo cp nginx/uwsgi_params /etc/nginx/
    sudo chown -R www-data:www-data /opt/graphite/storage/
    
    
    sudo apt-get install supervisor
    sudo vi  /etc/supervisor/conf.d/uwsgi.conf
    
    [program:uwsgi]
    command=/usr/local/bin/uwsgi
      --module 'django.core.handlers.wsgi:WSGIHandler()'
      --socket 127.0.0.1:3031
      --chdir /opt/graphite/webapp
      --processes 1
      --master
      --harakiri 120
      --max-requests 5000
      --pythonpath "['/opt/graphite/webapp'] + sys.path"
    directory=/opt/graphite/webapp
    environment=DJANGO_SETTINGS_MODULE='graphite.settings'
    user=www-data
    autostart=true
    autorestart=true
    stdout_logfile=/var/log/nginx/uwsgi.log
    redirect_stderr=true
    stopsignal=QUIT
    
    sudo vi /etc/nginx/sites-available/statsd.netspective.com
    
    server {
            listen 80;
           # listen [::]:80; # use this only if using IPv6
            client_max_body_size    4M;
            server_name  stats.netspective.com;
            root   /opt/graphite/webapp;
            access_log  /var/log/nginx/statsd.netspective.com-access.log;
            error_log  /var/log/nginx/statsd.netspective.com-error.log;
    
           location / {
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
           location /content {
                    alias /opt/graphite/webapp/graphite/content;
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
           location /metrics {
                    alias /opt/graphite/webapp/graphite/metrics;
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
           location /dashboard {
                    alias /opt/graphite/webapp/graphite/dashboard;
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
           location /render {
                    alias /opt/graphite/webapp/graphite/render;
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
        location /browser {
                    alias /opt/graphite/webapp/graphite/browser;
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
           location /composer {
                    alias /opt/graphite/webapp/graphite/composer;
                    gzip off;
                    include uwsgi_params;
                    uwsgi_pass      127.0.0.1:3031;
            }
    }
    

Access: http://stats.netspective.com/

### Statsd Server:

    sudo apt-get install git
    sudo apt-get install node
    sudo apt-get install npm
    
    cd /opt/
    sudo git clone git://github.com/etsy/statsd.git
    cd statsd/
    sudo cp exampleConfig.js localConfig.js
    

Edit /opt/statsd/localConfig.js, change graphiteHost to 127.0.0.1

    sudo vi /opt/statsd/localConfig.js
    
    graphiteHost: "127.0.0.1"
    

Edit /opt/graphite/conf/storage-schemas.conf and add:

    sudi vi /opt/graphite/conf/storage-schemas.conf
    
    [stats]
    priority = 110
    pattern = ^stats\..*
    retentions = 10s:6h,1m:7d,10m:1y
    
    
    sudo apt-get install upstart monit
    

Create this file /etc/init/statsd.conf and add:

    sudo vi /etc/init/statsd.conf
    
    #!upstart
    description "Statsd node.js server"
    author      "Nicolas"
    
    start on startup
    stop on shutdown
    
    script
        export HOME="/root"
    
        echo $$ > /var/run/statsd.pid
        exec sudo -u www-data /usr/bin/node /opt/statsd/stats.js /opt/statsd/localConfig.js  >> /var/log/statsd.log 2> /var/log/statsd.error.log
    end script
    
    pre-start script
        # Date format same as (new Date()).toISOString() for consistency
        echo "[`date -u +%Y-%m-%dT%T.%3NZ`] (sys) Starting" >> /var/log/statsd.log
    end script
    
    pre-stop script
        rm /var/run/statsd.pid
        echo "[`date -u +%Y-%m-%dT%T.%3NZ`] (sys) Stopping" >> /var/log/statsd.log
    end script
    

You can now start/stop your statsd server with those commands

    start statsd
    stop statsd
    

We now need to setup monit, for this create this file /etc/monit/conf.d/statsd and add

    sudo vi /etc/monit/conf.d/statsd
    
    #!monit
    set logfile /var/log/monit.log
    
    check process nodejs with pidfile "/var/run/statsd.pid"
        start program = "/sbin/start statsd"
        stop program  = "/sbin/stop statsd"
    
    sudo /etc/init.d/monit restart
    
    sudo start statsd
    

Now allow udp port on firewall

       sudo ufw allow proto udp from <ip> to any port 8125