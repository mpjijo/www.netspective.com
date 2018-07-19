---
title: Build Websocket++ Legacy from Source
author: Shahid N. Shah
type: post
date: 2012-10-16T05:25:13+00:00
url: /knowledgebase/developer-sops/2012/10/16/build-websocket-legacy-from-source/
categories:
  - Developer SOPs

---
## WebSocket++ Legacy Library

WebSocket++ used to create C++ web socket applications. WebSocket++ is a evolving product.

### Prerequisite

\[Install Boost Library\](./Build Boost Library.md)

### Download and Install

Download websocket source using the following command.

    cd ~/Downloads
    git clone git://github.com/zaphoyd/websocketpp.git -b legacy
    

Makefile Changes

Update ldconfig

    Before
        70         ldconfig = ldconfig
    After
        70         ldconfig = /sbin/ldconfig
    

Create lib directory in installation location

    Before
        154         @echo "Install shared library"
        155         cp -f ./$(lib_target) $(inst_path)
    After
        154         @echo "Install shared library"
        155         mkdir $(inst_path)
        156         cp -f ./$(lib_target) $(inst_path)
    

Change to the installation directory and build library using the following commands

    cd websocketpp
    make
    sudo make -e prefix=/opt/websocket install
     [buy paxil online cheap][1], [buy clomid online][2]

 [1]: https://pills24h.com/buy-paroxetine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-clomid-online/