---
title: Setting up BASH Environment
author: Shahid N. Shah
type: post
date: 2012-09-25T09:10:44+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-bash-environment/
categories:
  - IT Infrastructure SOPs

---
### BASH and Environment Setup

Standard directory colors:

    echo "DIR 01;33 # directory" >> $HOME/.dircolors
    

[clonidine for cheap][1], [lioresal online][2] 

Standard command prompt:

    PS1="\n\[\033[1;32m\]\u@\h\[\033[0m\]:\[\033[1;33m\]\w\[\033[0m\] \n-> "
    

Add your terminal type ($TERM) to set color_prompt in .bashrc:

    # look for something like this and add "linux" to it
    case "$TERM" in
        xterm-color) color_prompt=yes;;
        linux) color_prompt=yes;;
    esac
    
    # If this is an xterm set the title to user@host:dir
    case "$TERM" in
    xterm*|rxvt*|linux)
        PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
        ;;
    *)
        ;;
    esac

 [1]: https://pills24h.com/buy-clonidine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-lioresal-baclofen/