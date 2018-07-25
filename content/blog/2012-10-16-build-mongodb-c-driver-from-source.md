---
title: Build MongoDB C++ Driver from Source
author: Shahid N. Shah
type: post
date: 2012-10-16T05:22:34+00:00
url: /knowledgebase/developer-sops/2012/10/16/build-mongodb-c-driver-from-source/
categories:
  - Developer SOPs

---
## MongoDB C++ Driver

### Prerequisite

  * \[Build Boost Library\](../Developer Operations&#92;(DevOps&#92;)/Build Boost Library.md)
  * \[Setting up MongoDB\](../System Operations&#92;(SysOps&#92;)/Build MongoDB from Source.md)

Scons

Scons required to build MongoDB C++ driver. Required version of scons is 2.1.0-1

For CentOS, download from the following [link][1] and copy it to ~/Downloads. Install using the following command.

    sudo rpm -ivh ~/Downloads/scons-2.1.0-1.noarch.rpm
    

For Ubuntu

    apt-get install scons
    
PCRE

For CentOS,

    sudo yum install pcre-devel
    

### Download and Install

Download the MongoDB C++ driver(mongodb-linux-x86_64-v1.8)from the link.[Click here to download][4] and copy it to ~/Downloads.

Extract mongodb-linux-x86_64-v1.8-latest.tgz file using the command

    cd ~/Downloads
    tar -xvf mongodb-linux-x86_64-v1.8-latest.tgz
    

To compile the &#8220;standalone&#8221; C++ driver, run the scons command in the installation directory of the driver

    cd mongo-cxx-driver-v1.8
    scons
    sudo scons --prefix=/opt/mongodb-cxx-driver install
    sudo chown -R `id -u` /opt/mongodb-cxx-driver
    

export LD\_LIBRARY\_PATH=$LD\_LIBRARY\_PATH:/opt/mongodb-cxx-driver/lib

 [1]: http://sourceforge.net/projects/scons/files/scons/2.1.0/scons-2.1.0-1.noarch.rpm/download
 [4]: http://downloads.mongodb.org/cxx-driver/mongodb-linux-x86_64-v1.8-latest.tgz