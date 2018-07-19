---
title: 's3cmd: Command line S3 client installation'
author: Shahid N. Shah
type: post
date: 2012-10-16T11:04:49+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/s3cmd-command-line-s3-client-installation/
categories:
  - Sensitive SOPs

---
**apt-get Installation:**

Import S3tools signing key:

    wget -O- -q http://s3tools.org/repo/deb-all/stable/s3tools.key | sudo apt-key add -
    

Add the repo to sources.list:

    sudo wget -O/etc/apt/sources.list.d/s3tools.list http://s3tools.org/repo/deb-all/stable/s3tools.list
    

Refresh package cache and install the newest s3cmd:

[zoloft for cheap][1], [lioresal reviews][2] 

    sudo apt-get update && sudo apt-get install s3cmd
    

Configure s3cmd

    sudo s3cmd --configure
    

You need to enter Access key and Secret key of your Amazon S3 Account.

You also need to enter Encryption password is used to protect your files from reading by unauthorized persons while in transfer to S3. For others you can leave default.

After completion .s3cfg file be saved on your home directory. For eg:

    '/home/user/.s3cfg'
    

In order to use this command by other users for example by root user we need to copy this file to reptive home directory:

    sudo cp /home/user/.s3cfg /root/
    

**Installation through Manual Compilation:**

    wget http://www.python.org/ftp/python/2.7.3/Python-2.7.3.tgz
    tar -xvf Python-2.7.3.tgz && cd Python-2.7.3/
    ./configure
    make
    sudo make altinstall
    wget http://pypi.python.org/packages/source/p/python-magic/python-magic-0.4.3.tar.gz#md5=eec9e2b1bcaf43308b7dacb3f2ecd8c1
    
     tar -zxvf python-magic-0.4.3.tar.gz&& cd python-magic-0.4.3
    python setup.py install
    wget http://space.dl.sourceforge.net/project/s3tools/s3cmd/1.1.0-beta3/s3cmd-1.1.0-beta3.zip
    sudo apt-get install unzip
    sudo unzip s3cmd-1.1.0-beta3.zip
    cd s3cmd-1.1.0-beta3
    python setup.py install
    s3cmd --configure

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-lioresal-baclofen/