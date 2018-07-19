---
title: Jenkin installation
author: Roni Baby
type: post
date: 2013-05-27T09:43:37+00:00
url: /knowledgebase/server-sops/2013/05/27/jenkins-installation/
categories:
  - Server SOPs

---
**Jenkins Installation**

Prerequisites

Need JAVA

    java --version
    
    wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
    sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
    sudo apt-get update
    sudo apt-get install jenkins
    

We can access its web administration page http://ip:8080

Install the jenkins plugins that we needed

Go to http://ip:8080

Jenkins->manage Jenkins->manage plugins

  * GitHub plugin
  * Jenkins URLTrigger Plug-in

Generate SSH key for Jenkin user and copy this key into gitLab user profile

    sudo -u jenkins ssh-keygen -t rsa
    
    vi /var/lib/jenkins/.ssh/id_rsa.pub
    

need to include gitLab host into its known_hosts.

    cd ~/setup
    git clone YOUR_GITLAB_URL
    

Allow adding the SSH host key to your known_hosts

Hence we are ready to create new build job in Jenkins

New Job -> Build a free-style software project

    select Source Code Management as Git
    Enter Repository URL
    Choose Repository browser and enter URL and its version
    

Choose Build Triggers

    Select Poll SCM with schedule * * * * *
    
    select "[URLTrigger] - Poll with a URL"
    select Inspect URL content under "URL Response Check"
    Add a content nature as "Monitor a change of the content"
    

Right now onwards build system is ready to start automated build process when gitLab Repository updates