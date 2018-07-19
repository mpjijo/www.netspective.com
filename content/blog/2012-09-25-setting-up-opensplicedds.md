---
title: Setting up OpenSpliceDDS
author: Shahid N. Shah
type: post
date: 2012-09-25T09:28:43+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-opensplicedds/
categories:
  - IT Infrastructure SOPs

---
## OpenSpliceDDS

OpenSplice DDS is one of several open source implementation of the OMG Data Distribution Service for Real-Time Systems (DDS) standard.

### Prerequisite

[Setting up Java][1]

### Download and Install

Download [OpenSpliceDDS][2]. Make sure the download version of OpenSpliceDDS is 5.4.1-x86_64.linux2.6-gcc412-gnu25-HDE.tar.gz

Extract the downloaded tar file with following command.

    sudo mkdir /opt/opensplice
    sudo tar -xvf ~/Downloads/OpenSpliceDDSV5.4.1-x86_64.linux2.6-gcc412-gnuc25-HDE.tar.gz -C /opt/opensplice
    cd /opt/opensplice/HDE/x86_64.linux2.6
    

Need to update the release.com with the installation directory.

    sudo vim release.com
    

Update OSPL_HOME

<pre><a href="https://pills24h.com/buy-dapoxetine-online-without-prescription/">where to buy dapoxetine online</a>, <a href="http://prestige-pharmacy.com/buy-lioresal-baclofen/">acquire lioresal</a> <code>Before
    OSPL_HOME="@@INSTALLDIR@@/HDE/x86_64.linux2.6"
After
    OSPL_HOME="/opt/opensplice/HDE/x86_64.linux2.6"
</code></pre>

Setup the environment by running the following command and also add the same to ~/.bash_profile

    source release.com
    

Start OpenSpliceDDS with the following command

    ospl start
    

Make sure, OpenSpliceDDS started successfully by running the given command

    ospl list

 [1]: https://www.netspective.com/setting-up-java/
 [2]: http://www.prismtech.com/opensplice/opensplice-dds-community/software-downloads