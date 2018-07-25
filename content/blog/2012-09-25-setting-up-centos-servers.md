---
title: Setting up CentOS Servers
author: Shahid N. Shah
type: post
date: 2012-09-25T08:48:47+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-centos-servers/
categories:
  - IT Infrastructure SOPs

---
## Distribution


Use the CentOS Server 5.X distribution (e.g. CentOS 5.7 Server 64bit Architecture)

## Download the CentOS Distribution

Latest Distribution : <http://isoredirect.centos.org/centos/5/isos/x86_64/>

CentOS 5.7 : <http://mirrors.hns.net.in/centos/5.7/isos/x86_64/>

## Installation Steps

Select the downloaded iso into your VM guest media and boot the machine.

Choose to install or upgrade in graphical mode, press Enter.

Skip the media check if md5 checksum validated.

Once you skipped media check, you can see CentOS System installer Anaconda running. CentOS just like RHEL and Fedora uses Anaconda as system installer.

Choose the &#8220;Installation process language&#8221;. English is default. Press Next.

Select appropriate &#8220;keyboard for the system&#8221;. U.S. English is default. Press Next.

Select the Installation Options as &#8220;Install CentOS&#8221; and Press Next.

Select the appropriate Partition options and Press Next.

Different Partition Options are,

    "Remove all partitions on selected drives and create default layout"
    "Remove linux partitiions on selected drives and create default layout"
    "Use free space on the selected drives and create default layout"
    "Create Custom layout"
    

For a first timer, please use the 3rd option.

To configure Network, Select &#8220;Edit&#8221; to Network Interface Edit window. Configure network setting accordingly using DHCP or Static. Default network configuration is DHCP. For Static, please provide clinet IP, DNS, default gateway. Press Next when configured.

Select timeZone by clicking appropriate place in the map and Press Next.

Provide &#8220;Root&#8221; password and Press Next.

When prompted with to select Packages to be installed, leave the default packages as such and Select Customize Later. Press Next

Press Next to begin the installation of CentOS. Installation will take place and may take a while to complete the installation. Once the installation completed remove any media used during the installation process and click Reboot.

## Server Configuration Management Setup

We use etckeeper to revision control all of our configuration changes in /etc/* because it&#8217;s crucial to know what&#8217;s changing and how.

    sudo apt-get install -y etckeeper && sudo etckeeper uninit -f
    sudo vi /etc/etckeeper/etckeeper.conf
    

Change &#8220;VCS&#8221; to git instead of mercurial so it looks like this:

    # VCS="hg"
    VCS="git"
    # VCS="bzr"
    # VCS="darcs"
    

Save the etckeeper.conf file and then commit the initial /etc files into Git:

    sudo apt-get install -y git-core
    sudo etckeeper init
    sudo etckeeper commit -am "Initial commit."
    

From this point on, if you ever change any files in /etc/ be sure to commit early and often. Whenever you install packages commits will be automatic between installations.

## User Management

Use the following command to add user to system.

    useradd user
    

Set the password for the user

    passwd user
    

## Security Setup

Sudo

Sudo used to run the command as privileged user (root user). Edit the /etc/sudoers file to add a new user.

    vim /etc/sudoers
    

Add the following line, if the user requires privileges to run all the commands as root user.

    user ALL=(ALL) ALL
    

Add the following line, if the user requires privileges to run only certain commands as root user. Only example commands were listed below. Add all the required commands with full path and separated by comma.

    user ALL=/bin/ls, /usr/bin/yum

