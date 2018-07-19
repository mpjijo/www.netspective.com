---
title: ActiveCollab Upgradation
author: Geo P C
type: post
date: 2013-03-18T13:17:30+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/18/activecollab-upgradation/
categories:
  - IT Infrastructure SOPs

---
**ActiveCollab upgradation steps (From 3.2.11 to 3.3.6)**

    1. Download latest version from http://www.activecollab.com/user/54835/profile/ to home.netspective.com:/home/roni_baby/setup
    2. scp activecollab-corporate-3.3.6.zip roni_baby@php.apps:/home/roni_baby/setup
    3. Make sure you're now on the PHP server
    4. cd $HOME/setup
    5. mkdir activecollab-corporate-3.3.6
    6. cd activecollab-corporate-3.3.6
    7. unzip ../activecollab-corporate-3.3.6.zip
    8. sudo cp -r for-upload/activecollab/3.3.6/ /usr/share/activeCollab/activecollab/3.3.6
    9. sudo chown -R www-data:www-data /usr/share/activeCollab/activecollab/3.3.6/
    10. Accesss http://ac.php.apps.netspective.com/upgrade this url for upgrading it
    

Ref: <https://www.activecollab.com/docs/manuals/admin-version-3/upgrade/from-3-1>

**ActiveCollab 3.2.11 Upgradation**

    1. Download latest version from http://www.activecollab.com/user/54835/profile/ to home.netspective.com:/home/geo_pc/setup
    2. Make sure you're now on the PHP server
    3. cd $HOME/setup
    4. scp geo_pc@home.netspective.com:/home/geo_pc/setup/activeCollab-corporate_3.2.11.zip .
    5. mkdir activeCollab-corporate_3.2.11
    6. cd activeCollab-corporate_3.2.11
    7. unzip ../activeCollab-corporate_3.2.11.zip
    8. sudo cp -r for-upload/activecollab/3.2.11 /usr/share/activeCollab/activecollab
    9. sudo chown -R www-data.www-data /usr/share/activeCollab/activecollab/3.2.11
    10. After you have latest version of activeCollab files uploaded, visit /public/upgrade/index.php part of your activeCollab with your web browser, that is http://ac.pm.netspective.com/public/upgrade/
    11. Now log in with your administrator credentials and let the system upgrade your database.
    12. To confirm that you have successfully upgraded activeCollab, open config/versions.php and make sure that upgrade script has written the valid version number in it.