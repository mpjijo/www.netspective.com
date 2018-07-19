---
title: Steps to import a repository to Gitlab
author: Geo P C
type: post
date: 2013-03-27T14:44:31+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/27/steps-to-import-a-repository-to-gitlab/
categories:
  - IT Infrastructure SOPs

---
Below are the steps to import a repository to Gitlab

  * Login to Gitlab
  * Click on &#8220;Create New Project&#8221;
  * Now Enter Project Name
  * Select Namespace. We can give it as Global (/)
  * Now click on Import existing repository?
  * Now enter reposiroy url and click Create Project.

Please note the following:

For eg we can get the http url to clone hitpsher repos as

http://rcs.cm.netspective.com/netspective-hitsphere.git

Now we need to add username (EMail ID) and password to this url for accessing the repo. Now if the credentials are as follows

    Email ID: geopc@citrusinformatics.com
    Password: Netspective.geo
    

Then the url repository url we need to enter is as follows:

    http://geopc%40citrusinformatics.com:Netspective.geo@rcs.cm.netspective.com/netspective-hitsphere.git
    

If you can clone the repo with above url then you can import repo to gitlab with out any issue.