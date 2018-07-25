---
title: Build Log4CPP from Source
author: Shahid N. Shah
type: post
date: 2012-10-16T05:19:42+00:00
url: /knowledgebase/developer-sops/2012/10/16/build-log4cpp-from-source/
categories:
  - Developer SOPs

---
## LOG For C++

Log4cpp is library of C++ classes for logging to files, syslog and other destinations.

### Prerequisite

\[Setting Up C-C++ Development Libraries\](./Setting Up C-C++ Development Libraries.md)

### Download and Install

Download [log4c++][1].

Follow the steps given below to install Log4cpp

    cd ~/Downloads
    tar -xvf log4cpp-1.0.tar.gz
    cd log4cpp-1.0/
    ./configure --prefix=/opt/log4cpp
    make
    make check
    sudo make install
    

Export the log4cpp path to the environment variable using following command

    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/log4cpp/lib
    

### Troubleshooting

Constructor error in the Basiclayout.cpp

    add header file  include<memory> in src/BasicLayout.cpp.
    

Parsing error in the Patternlayout.cpp

    Change the line 373 as follows
    
    Before
        "component = new FormatModifierComponent(component, std::abs(minWidth), maxWidth, minWidth < 0);"
    After
        "component = new FormatModifierComponent(component, std::abs((float)minWidth), maxWidth, minWidth < 0);"

 [1]: http://sourceforge.net/projects/log4cpp/files/
