---
title: Build Boost Library
author: Shahid N. Shah
type: post
date: 2012-10-15T12:35:14+00:00
url: /knowledgebase/developer-sops/2012/10/15/build-boost-library/
categories:
  - Developer SOPs

---
## Boost Library

Boost libraries are intended to be widely used, and usable across a broad spectrum of applications.

### Prerequisite

\[Setting Up C-C++ Development Libraries\](./Setting Up C-C++ Development Libraries.md)

### Check availability

Before installing Boost, check for existing boost library.

rpm -qa|grep boost

If it exists, remove the boost library using following command to build Boost cleanly.

rpm -e <package_name>

For Ubuntu, use the given below commands for checking and removing respectively.

dpkg &#8211;get-selections | grep boost
  
dpkg &#8211;remove <package_name>

### Download and Install

Download [Boost.1.48.0][1].

Extract the downloaded boost.1.48.0.tar.gz file using the following command

cd ~/Downloads
  
tar [cheap celebrex online][2], [acquire zithromax][3] -xvf boost\_1\_48_0.tar.gz

Run the following command to start the build process. Follow the instructions until the installation was successful.

cd boost\_1\_48_0
  
sudo ./bootstrap.sh &#8211;prefix=/opt/boost\_1\_48_0
  
sudo ./bjam install

Required create symbolic link with the appropriate path

sudo ln -s /opt/boost\_1\_48_0/lib/* /lib
  
sudo ln -s /opt/boost\_1\_48_0/include/* /usr/include

 [1]: http://sourceforge.net/projects/boost/files/boost/1.48.0/
 [2]: https://pills24h.com/buy-celebrex-online-without-prescription/
 [3]: http://prestige-pharmacy.com/buy-zithromax-online/