---
title: Setting up Rails
author: Shahid N. Shah
type: post
date: 2012-09-25T09:31:26+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-rails/
categories:
  - IT Infrastructure SOPs

---
## Install Rails

### Prerequisite

[Setting Up Ruby][1]

### Install rails

Set the ruby version for gem

    rvm use 1.9.2
    

Installing Rails will be done using RubyGems, Ruby package manager. Check the currently installed gems as follows.

    gem list
    

Update sudoers to keep the environment variables.

    sudo vim /etc/sudoers
    

Add PATH, GEM&#92;\_HOME environment variables to be included in env\_keep as root user.

    Defaults    env_keep = "COLORS DISPLAY HOSTNAME HISTSIZE INPUTRC KDEDIR \
                        LS_COLORS MAIL PS1 PS2 QTDIR USERNAME \
                        LANG LC_ADDRESS LC_CTYPE LC_COLLATE LC_IDENTIFICATION \
                        LC_MEASUREMENT LC_MESSAGES LC_MONETARY LC_NAME LC_NUMERIC \
                        LC_PAPER LC_TELEPHONE LC_TIME LC_ALL LANGUAGE LINGUAS \
                        _XKB_CHARSET XAUTHORITY PATH GEM_HOME"
    

Install rails using the given below command.

    sudo gem install rails
    

Run the following command to make sure, rails was installed properly.

    rails -v
    
[1]: https://www.netspective.com/setting-up-ruby/
 