---
title: Gitlab 5 Installation and Configuration
author: Geo P C
type: post
date: 2013-03-27T11:46:21+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/27/gitlab-5-installation-and-configuration/
categories:
  - IT Infrastructure SOPs

---
**Packages / Dependencies**

Install the required packages:

    sudo apt-get install -y build-essential zlib1g-dev libyaml-dev libssl-dev libgdbm-dev libreadline-dev libncurses5-dev libffi-dev curl git-core openssh-server redis-server postfix checkinstall libxml2-dev libxslt-dev libcurl4-openssl-dev libicu-dev
    

Make sure you have the right version of Python installed.

Install Python

    sudo apt-get install python
    

Make sure that Python is 2.5+ (3.x is not supported at the moment)

    python --version
    

If it&#8217;s Python 3 you might need to install Python 2 separately

    sudo apt-get install python2.7
    

Make sure you can access Python via python2

    python2 --version
    

If you get a &#8220;command not found&#8221; error create a link to the python binary

    sudo ln -s /usr/bin/python /usr/bin/python2
    

Ruby

Download and compile it:

    mkdir /tmp/ruby && cd /tmp/ruby
    curl --progress http://ftp.ruby-lang.org/pub/ruby/1.9/ruby-1.9.3-p392.tar.gz | tar xz
    cd ruby-1.9.3-p392
    ./configure
    make
    sudo make install
    

Install the Bundler Gem:

    sudo gem install bundler
    

**System Users**

Create a git user for Gitlab:

    sudo adduser --disabled-login --gecos 'GitLab' git
    

**GitLab shell**

GitLab Shell is a ssh access and repository management software developed specially for GitLab.

Login as git

    sudo su git
    

Go to home directory

    cd /home/git
    

Clone gitlab shell

    git clone https://github.com/gitlabhq/gitlab-shell.git
    
    cd gitlab-shell
    cp config.yml.example config.yml
    

Edit config and replace gitlab_url with something like &#8216;http://domain.com/&#8217;

    vim config.yml
    

Do setup

    ./bin/install
    

**Database**

Login to MySQL

    mysql -u root -p
    

Create a user for GitLab. (change $password to a real password)

    mysql> CREATE USER 'gitlab'@'localhost' IDENTIFIED BY '$password';
    

Create the GitLab production database

    mysql> CREATE DATABASE IF NOT EXISTS `gitlabhq_production` DEFAULT CHARACTER SET `utf8` COLLATE `utf8_unicode_ci`;
    

Grant the GitLab user necessary permissopns on the table.

    mysql> GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON `gitlabhq_production`.* TO 'gitlab'@'localhost';
    

Quit the database session

    mysql> \q
    

**GitLab**

We&#8217;ll install GitLab into home directory of the user &#8220;git&#8221;

    cd /home/git
    

Clone the Source

Clone GitLab repository

    sudo -u git -H git clone https://github.com/gitlabhq/gitlabhq.git gitlab
    

Go to gitlab dir

    cd /home/git/gitlab
    

Checkout to stable release

    sudo -u git -H git checkout 5-0-stable
    

Note: You can change 5-0-stable to master if you want the bleeding edge version, but do so with caution!

Configure it

    cd /home/git/gitlab
    

Copy the example GitLab config

    sudo -u git -H cp config/gitlab.yml.example config/gitlab.yml
    

Make sure to change &#8220;localhost&#8221; to the fully-qualified domain [Buy zoloft][1], [Zoloft reviews][2] name of your
  
host serving GitLab where necessary

    sudo -u git -H vim config/gitlab.yml
    

Make sure GitLab can write to the log/ and tmp/ directories

    sudo chown -R git log/
    sudo chown -R git tmp/
    sudo chmod -R u+rwX  log/
    sudo chmod -R u+rwX  tmp/
    

Create directory for satellites

    sudo -u git -H mkdir /home/git/gitlab-satellites
    

Create directory for pids and make sure GitLab can write to it

    sudo -u git -H mkdir tmp/pids/
    sudo chmod -R u+rwX  tmp/pids/
    

Copy the example Unicorn config

    sudo -u git -H cp config/unicorn.rb.example config/unicorn.rb
    

Important Note: Make sure to edit both files to match your setup.

**Configure GitLab DB settings**

Mysql

    sudo -u git cp config/database.yml.mysql config/database.yml
    

PostgreSQL

    sudo -u git cp config/database.yml.postgresql config/database.yml
    

Make sure to update username/password in config/database.yml.

**Install Gems**

    cd /home/git/gitlab
    
    sudo gem install charlock_holmes --version '0.6.9'
    

For MySQL (note, the option says &#8220;without&#8221;)

    sudo -u git -H bundle install --deployment --without development test postgres
    

Or for PostgreSQL

    sudo -u git -H bundle install --deployment --without development test mysql
    

**Initialise Database and Activate Advanced Features**

    sudo -u git -H bundle exec rake gitlab:setup RAILS_ENV=production
    

**Install Init Script**

Download the init script (will be /etc/init.d/gitlab):

    sudo curl --output /etc/init.d/gitlab https://raw.github.com/gitlabhq/gitlab-recipes/master/init.d/gitlab
    sudo chmod +x /etc/init.d/gitlab
    

Make GitLab start on boot:

    sudo update-rc.d gitlab defaults 21
    

**Check Application Status**

Check if GitLab and its environment are configured correctly:

    sudo -u git -H bundle exec rake gitlab:env:info RAILS_ENV=production
    

To make sure you didn&#8217;t miss anything run a more thorough check with:

    sudo -u git -H bundle exec rake gitlab:check RAILS_ENV=production
    

If all items are green, then congratulations on successfully installing GitLab! However there are still a few steps left.

Start Your GitLab Instance

    sudo service gitlab start
    

**Nginx**

Note: If you can&#8217;t or don&#8217;t want to use Nginx as your web server, have a look at the Advanced Setup Tips section.

Installation

    sudo apt-get install nginx
    

Site Configuration

Download an example site config:

    sudo curl --output /etc/nginx/sites-available/gitlab https://raw.github.com/gitlabhq/gitlab-recipes/master/nginx/gitlab
    sudo ln -s /etc/nginx/sites-available/gitlab /etc/nginx/sites-enabled/gitlab
    

Make sure to edit the config file to match your setup:

Change YOUR\_SERVER\_IP and YOUR\_SERVER\_FQDN to the IP address and fully-qualified domain name of your host serving GitLab

    sudo vim /etc/nginx/sites-available/gitlab
    

Restart

    sudo service nginx restart
    

Done!

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zoloft-online/вЂЋ