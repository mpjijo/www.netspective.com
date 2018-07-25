---
title: Moving WordPress site from development to production
author: Shahid N. Shah
type: post
date: 2012-10-16T09:46:21+00:00
url: /knowledgebase/wordpress-sops/2012/10/16/moving-wordpress-site-from-development-to-production/
categories:
  - Wordpress SOPs

---
### Moving WordPress site from development to production [or from one domain to another]

Apart from moving the site files and DB to new server the following steps also has to be done for the site to be active:

  1. Update the database name, username and password in wp-config.php
  
    /*\* The name of the database for WordPress \*/
  
    define (&#8216;DB_NAME&#8217;, &#8216;wordpress&#8217;);
  
    /*\* MySQL database username \*/
  
    define (&#8216;DB_USER&#8217;, &#8216;root&#8217;);
  
    /*\* MySQL database password \*/
  
    define (&#8216;DB_PASSWORD&#8217;, &#8221;);
  
    /*\* MySQL hostname \*/
  
    define (&#8216;DB_HOST&#8217;, &#8216;localhost&#8217;);
  
    <div class="divider type-simple">
    </div>

  2. Add the following line to wp-config.php
  
    define(&#8216;FS_METHOD&#8217;, &#8216;direct&#8217;);
  
    <div class="divider type-simple">
    </div>

  3. Check the .htaccess file and make the code like
  
    \# BEGIN
  
    <IfModule mod_rewrite.c>
  
    RewriteEngine On
  
    RewriteBase /
  
    RewriteRule ^index\.php$ &#8211; [L]
  
    RewriteCond %{REQUEST_FILENAME} !-f
  
    RewriteCond %{REQUEST_FILENAME} !-d
  
    RewriteRule . /index.php [L]
  
    </IfModule>
  
    \# END
  
    <div class="divider type-simple">
    </div>

  4. Check the robots.txt file and if the search engine is disallowed like the below code
  
    User-agent: *
  
    Disallow: /Use the following code
  
    \# Google Image
  
    User-agent: Googlebot-Image
  
    Disallow:
  
    Allow: /*# Google AdSense
  
    User-agent: Mediapartners-Google*
  
    Disallow:# digg mirror
  
    User-agent: duggmirror
  
    Disallow: /# global
  
    User-agent: *
  
    Disallow: /cgi-bin/
  
    Disallow: /wp-admin/
  
    Disallow: /wp-includes/
  
    Disallow: /wp-content/plugins/
  
    Disallow: /wp-content/cache/
  
    Disallow: /wp-content/themes/
  
    Disallow: /trackback/
  
    Disallow: /feed/
  
    Disallow: /comments/
  
    Disallow: /category/\*/\*
  
    Disallow: */trackback/
  
    Disallow: */feed/
  
    Disallow: */comments/
  
    Disallow: /*?
  
    Allow: /wp-content/uploads/
  
    <div class="divider type-simple">
    </div>

  5. Execute the following commands against the database
  
    Note: Siteurl format (&#8216;http://www.example.com&#8217;)</p> 
      1. Change Siteurl & Homeurl
  
        UPDATE wp\_options SET option\_value = REPLACE (option_value, &#8216;Current Site Url&#8217;, &#8216;New Site Url&#8217;)
      2. Change GUID
  
        UPDATE wp_posts SET guid = REPLACE (guid, &#8216;Current Site Url &#8216;, &#8216;New Site Url&#8217;);
      3. Change URL in Content
  
        UPDATE wp\_posts SET post\_content = REPLACE (post_content, &#8216;Current Site Url &#8216;, &#8216;New Site Url&#8217;);
      4. Change Image Path Only
  
        UPDATE wp\_posts SET post\_content = REPLACE (post_content, &#8216;src=&#8221;Current site Url&#8217;, &#8216;src=&#8221;New Site Url&#8217;);
      5. If we have added any custom menu links using our siteurl Change it
  
        UPDATE wp\_postmeta SET meta\_value = REPLACE (meta_value, &#8216;Current Site Url&#8217;, &#8216;New Site Url&#8217;)
    
    Or a better and another way to do this URL change would be to run a find and replace
  
    (&#8216;Current Site Url&#8217; with &#8216;New Site Url&#8217;) on the SQL Script before creating the database.
  
    
    
    <div class="divider type-simple">
    </div></li> 
    
      * Change ownership on all files and folders to our web server username/group
  
        <div class="divider type-simple">
        </div>
    
      * Change permissions on all files and folders to 775</ol> 
