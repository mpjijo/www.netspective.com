---
title: machform installation steps
author: Shahid N. Shah
type: post
date: 2012-10-16T09:32:16+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/machform-installation-steps/
categories:
  - Sensitive SOPs

---
<a name="1113"></a>

# machform installation steps

<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    <div>
      sudo git clone git@rcs.cm.netspective.com:appnitro-machform-unlimited.git
    </div>
    
    <div>
      chown -R www-data:www-data appnitro-machform-unlimited
    </div>
    
    <div>
    </div>
    
    <div>
      <strong>Create mysql database database</strong>
    </div>
    
    <div>
      create database machform;
    </div>
    
    <div>
      GRANT ALL PRIVILEGES ON machform.* TO mformusr@&#8217;localhost&#8217; IDENTIFIED BY &#8216;password;
    </div>
    
    <div>
    </div>
    
    <div>
      edit the following in config.php file for database settings
    </div>
    
    <div>
      [sourcecode language=&#8221;plain&#8221;]<br /> MF_DB_NAME&#8217;, &#8216;machform&#8217;MF_DB_USER&#8217;, &#8216;mformusr&#8217;</p> 
      
      <p>
        MF_DB_PASSWORD&#8217;, &#8216;password&#8217;
      </p>
      
      <p>
        MF_DB_HOST&#8217;, &#8216;localhost'[/sourcecode]
      </p>
    </div>
    
    <div>
    </div>
    
    <div>
      Created nginx configuration file for it in php.apps.* and home.* servers
    </div>
    
    <div>
    </div>
    
    <div>
      to install it access <a href="http://forms.apps.netspective.com/">http://forms.apps.netspective.com/</a>installer.php
    </div>
    
    <div>
    </div>
    
    <div>
    </div>
    
    <div>
      MachForm License key :Key
    </div>
    
    <div>
    </div>
    
    <div>
    </div>
    
    <div>
    </div>
    
    <div>
    </div>
    
    <div>
    </div>
    
    <div>
    </div>
  </div>
</div>