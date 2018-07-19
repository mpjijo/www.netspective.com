---
title: Standard folder structure for apps
author: Geo V.L
type: post
date: 2013-04-02T06:24:55+00:00
url: /knowledgebase/developer-sops/2013/04/02/standard-folder-structure-for-apps/
categories:
  - Developer SOPs

---
# Standard Folder Structure Of Apps

## Summary

    /conf
        config.inc.php 
    /service 
        /api 
        /data 
        /lib
            /auto
        /public 
            /images 
            /scripts  
            /css 
        /ui
            /common 
            /app 
    /lib
    /public
    /support
        /docs 
        /scripts 
        /database 
            /schema
            /orm
    

## Description

## /conf

> Contains all configuration directives in Application
> 
> Example : conf.inc.php 

## /service

> Contains all service directives in Application 

### /service/api

> All *.php files that serve outward facing service APIs 

### /service/data

> All *.php files that serve pure data in JSON
> 
> Should be full REST 

### /service/lib

> All *.php files that are custom to the service but not serving data or HTML 

### /service/public

> All custom app-specific \*.html, \*.css, *.js, etc. files that will be served to the public 

#### /service/public/images

> Default directory for all service-specific image files 

#### /service/public/scripts

> Default directory for all service-specific JavaScript files 

#### /service/public/css

> Default file for all CSS styles 

### /service/ui

#### /service/ui/common

> *.php files that serve common HTML like header, footer, etc 

#### /service/ui/app

> *.php files that serve app-specific HTML 

## /lib

> Each 3rd party PHP library in a separate directly, exactly as it comes from the vendor so it&#8217;s easy to update
> 
> Example : Slim,ezSQL etc 

## /public

> Each 3rd party public-facing JavaScript, CSS, images, etc. library has its own directory, as-is, no changes;
> 
> Example : bootstrap etc 

## /support

### /support/docs

> Reference documents etc 

### /support/scripts

> Support scripts
> 
> Build scripts etc 

### /support/database

> Liquibase schema and migrations