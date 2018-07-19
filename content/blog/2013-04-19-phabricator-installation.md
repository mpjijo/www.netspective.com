---
title: Phabricator Installation
author: Geo P C
type: post
date: 2013-04-19T04:43:35+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/19/phabricator-installation/
categories:
  - IT Infrastructure SOPs

---
We have downloaded Ubuntu Phabricator installation script from the [url][1]

Modified the script for our PHP Server. Now login to server and go the directory where we need to install Phabricator.

cd /usr/local/phabricator.cm.netspective.com

sudo vi phabricator\_install\_script.sh

Copy and paste the following:

    #!/bin/bash
    
    confirm() {
      echo "Press RETURN to continue, or ^C to cancel.";
      read -e ignored
    }
    
    GIT='git'
    
    LTS="Ubuntu 10.04"
    ISSUE=`cat /etc/issue`
    if [[ $ISSUE != Ubuntu* ]]
    then
      echo "This script is intended for use on Ubuntu, but this system appears";
      echo "to be something else. Your results may vary.";
      echo
      confirm
    elif [[ `expr match "$ISSUE" "$LTS"` -eq ${#LTS} ]]
    then
      GIT='git-core'
    fi
    
    echo "PHABRICATOR UBUNTU INSTALL SCRIPT";
    echo "This script will install Phabricator and all of its core dependencies.";
    echo "Run it from the directory you want to install into.";
    echo
    
    ROOT=`pwd`
    echo "Phabricator will be installed to: ${ROOT}.";
    confirm
    
    echo "Testing sudo..."
    sudo true
    if [ $? -ne 0 ]
    then
      echo "ERROR: You must be able to sudo to run this script.";
      exit 1;
    fi;
    
    echo "Installing dependencies: git, apache, mysql, php...";
    echo
    
    set +x
    
    sudo apt-get -qq update
    sudo apt-get install $GIT php5-mysql php5-gd php5-dev php5-curl php-apc php5-cli dpkg-dev
    
    HAVEPCNTL=`php -r "echo extension_loaded('pcntl');"`
    if [ $HAVEPCNTL != "1" ]
    then
      echo "Installing pcntl...";
      echo
      apt-get source php5
      PHP5=`ls -1F | grep '^php5-.*/$'`
      (cd $PHP5/ext/pcntl && phpize && ./configure && make && sudo make install)
    else
      echo "pcntl already installed";
    fi
    
    if [ ! -e libphutil ]
    then
      git clone git://github.com/facebook/libphutil.git
    else
      (cd libphutil && git pull --rebase)
    fi
    
    if [ ! -e arcanist ]
    then
      git clone git://github.com/facebook/arcanist.git
    else
      (cd arcanist && git pull --rebase)
    fi
    
    if [ ! -e phabricator ]
    then
      git clone git://github.com/facebook/phabricator.git
    else
      (cd phabricator && git pull --rebase)
    fi
    
    echo
    echo
    echo "Install probably worked mostly correctly. Continue with the 'Configuration Guide':";
    echo
    echo "    http://www.phabricator.com/docs/phabricator/article/Configuration_Guide.html";
    echo
    echo "You can delete any php5-* stuff that's left over in this directory if you want.";
    

Give execute permission:

    sudo chmod +x phabricator_install_script.sh
    

Now execute the script and it will install Phabricator.

    sudo sh phabricator_install_script.sh
    

**Now we can configure webserver:**

Create Nginx Configuration file with the following contents. Remember to change server_name and root path.

    server {
      server_name phabricator.example.com;
    
      root      /path/to/phabricator/webroot;
      try_files $uri $uri/ /index.php;
    
      location / {
        index   index.php;
    
        if ( !-f $request_filename )
        {
          rewrite ^/(.*)$ /index.php?__path__=/$1 last;
          break;
        }
      }
    
      location /index.php {
        fastcgi_pass   localhost:9000;
        fastcgi_index   index.php;
    
        #required if PHP was built with --enable-force-cgi-redirect
        fastcgi_param  REDIRECT_STATUS    200;
    
        #variables to make the $_SERVER populate in PHP
        fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;
        fastcgi_param  QUERY_STRING       $query_string;
        fastcgi_param  REQUEST_METHOD     $request_method;
        fastcgi_param  CONTENT_TYPE       $content_type;
        fastcgi_param  CONTENT_LENGTH     $content_length;
    
        fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
    
        fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
        fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;
    
        fastcgi_param  REMOTE_ADDR        $remote_addr;
      }
    }
    

Restart nginx after making your edits, then continue to &#8220;Setup&#8221; below.

Now, navigate to whichever subdomain you set up. You should see instructions to continue setup.

During setup, you&#8217;ll need to configure MySQL. To do this, get MySQL running and verify you can connect to it. Consult the MySQL documentation for help. When MySQL works, you need to load the Phabricator schemata into it. To do this, run:

    phabricator/ $ ./bin/storage upgrade
    

If your configuration uses an unprivileged user to connect to the database, you may have to override the default user so the schema changes can be applied with root or some other admin user:

    phabricator/ $ ./bin/storage upgrade --user <user> --password <password>

 [1]: [url](http://www.phabricator.com/rsrc/install/install_ubuntu.sh) "url"