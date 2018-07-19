---
title: Setting up Ruby
author: Shahid N. Shah
type: post
date: 2012-09-25T09:33:51+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-ruby/
categories:
  - IT Infrastructure SOPs

---
## Install and Configure Ruby

Our standard approach for Ruby to install all Ruby versions in /usr/local/rvm/rubies. If you did ls in /usr/local/rvm/rubies, the directory would look something like this:

    lrwxrwxrwx 1 root rvm   38 Mar 21 23:02 home -> /usr/local/rvm/rubies/ruby-1.9.2-p318/
    drwxr-xr-x 5 root rvm 4096 Mar 21 23:06 ruby-1.8.7-p358
    drwxr-xr-x 6 root rvm 4096 Mar 21 23:01 ruby-1.9.2-p318
    

Note that we symbalic link /usr/local/rvm/rubies/home to the &#8220;primary&#8221; version that we want to be standard ruby version across the server but leave it up to the individual users on the server to also choose what they&#8217;d like.

## Install Ruby

Our standard way to installing Ruby is through RVM (Ruby Version Manager).

Install RVM

Install RVM through following command

    sudo bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
    export PATH=/usr/local/rvm/bin:$PATH
    

Update ~/.bash_profile

    vim ~/.bash_profile
    

Copy and Paste the following lines.

<pre><a href="https://pills24h.com/buy-doxycycline-online-without-prescription/">cheap doxycycline online</a>, <a href="http://prestige-pharmacy.com/buy-lioresal-baclofen/">purchase lioresal</a> <code># Load RVM into a shell session *as a function*
if [[ -s "$HOME/.rvm/scripts/rvm" ]] ; then
    # First try to load from a user install
    source "$HOME/.rvm/scripts/rvm"
elif [[ -s "/usr/local/rvm/scripts/rvm" ]] ; then
    # Then try to load from a root install
    source "/usr/local/rvm/scripts/rvm"
else
    printf "ERROR: An RVM installation was not found.\n"
fi
</code></pre>

Run the bash profile.

    . ~/.bash_profile
    

Install Ruby

Identify the requirements by running the following command

    sudo rvm requirements
    

The command will give you instructions on the dependencies needed to be installed for the platform install ruby. Install those dependencies by using yum with sudo user. For CentOS, the requirement is to install the following component.

    sudo yum install -y gcc-c++ patch readline readline-devel zlib zlib-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison iconv-devel
    

Based on the version need to be installed, provide the version to rvm to download and install. RVM supports from version 1.8.6.

    sudo rvm install 1.9.2
    

Installing Ruby through RVM will also install RubyGems, which is Ruby Package Manager. RubyGems will be intalled in /usr/local/rvm/gems with various versions of Ruby. Following is the directory for Gems.

    drwxrwsr-x  5 root rvm 4096 Mar 23 03:26 .
    drwxrwsr-x 24 root rvm 4096 Mar 23 03:02 ..
    drwxrwsr-x  2 root rvm 4096 Mar 23 03:06 cache
    lrwxrwxrwx  1 root rvm   35 Mar 23 03:26 home -> /usr/local/rvm/gems/ruby-1.9.2-p318
    drwxrwsr-x  7 root rvm 4096 Mar 23 03:06 ruby-1.9.2-p318
    drwxrwsr-x  7 root rvm 4096 Mar 23 03:07 ruby-1.9.2-p318@global
    

Export the PATH environment variable as given below and add the variables in ~/.bash&#92;_profile.

    export PATH=/usr/local/rvm/rubies/home/bin:$PATH
    export PATH=/usr/local/rvm/gems/home/bin:$PATH
    export GEM_HOME=/usr/local/rvm/gems/home
    

Check the version of ruby.

    ruby -v