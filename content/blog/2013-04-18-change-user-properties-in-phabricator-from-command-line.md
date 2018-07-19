---
title: Change user properties in phabricator from Command Line.
author: Geo P C
type: post
date: 2013-04-18T12:48:13+00:00
url: /knowledgebase/it-infrastructure-sops/2013/04/18/change-user-properties-in-phabricator-from-command-line/
categories:
  - IT Infrastructure SOPs

---
In Phabricator accountadmin is a user-friendly command line interface for creating and editing accounts.

In order to change user properties in phabricator please see the following steps:

Login to Netspective PHP Server.
  
Go to phabricator location:

    cd /usr/local/phabricator.cm.netspective.com
    

Just run the script: ./phabricator/bin/accountadmin

    sudo ./phabricator/bin/accountadmin
    

This will walk you through the process of creating/editing an user account.

For eg:

    geo_pc@php:/usr/local/phabricator.cm.netspective.com
    -> ./phabricator/bin/accountadmin
    Enter a username to create a new account or edit an existing account.
    
        Enter a username: geo_pc
    There is an existing user account 'geo_pc'.
    
    
        Do you want to edit the existing 'geo_pc' account? [Y/n] y
    
    
    
        Enter user real name [Geo PC]:
    
    
        Enter a password for this user [blank to leave unchanged]:
    
        Should this user be a system agent? [y/N] n
    
    
    
        Should the primary email address be verified? [y/N] N
    
    
    
        Should this user be an administrator? [y/N] y
    
    
    
    ACCOUNT SUMMARY
    
                   OLD VALUE                        NEW VALUE
        Username   geo_pc                           geo_pc
       Real Name   Geo PC                           Geo PC
        Password                                    Unchanged
    System Agent   N                                N
    Verify Email   N                                N
           Admin   N                                Y
    
    
    
        Save these changes? [Y/n] y
    
    Saved changes.