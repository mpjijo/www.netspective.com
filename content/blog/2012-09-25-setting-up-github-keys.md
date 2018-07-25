---
title: Setting up GitHub Keys
author: Shahid N. Shah
type: post
date: 2012-09-25T09:16:41+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-github-keys/
categories:
  - IT Infrastructure SOPs

---
### GitHub Setup

All our code is managed in Git so we need to setup our repository keys:

<pre><code>cd $HOME && ssh-keygen -t rsa 
vi .ssh/id_rsa.pub
</code></pre>

_Paste the ssh key into the GitHub account you&#8217;ll be using_