---
title: ActiveCollab file upload issue
author: Geo P C
type: post
date: 2013-03-13T06:04:40+00:00
url: /knowledgebase/it-infrastructure-sops/2013/03/13/activecollab-file-upload-issue/
categories:
  - IT Infrastructure SOPs
  - Server SOPs

---
Active collab was unable to upload large files and getting a Disk IO error.

Fixed the issue and please find the details.

There is a limit in Nginx called client\_max\_body_size for proxy pass communication. Earlier AC was directly accessing from PHP server thats why the issue was not reported earlier.

Now we are accessing AC through a proxy server so it affects the uploading files.

Now we added client\_max\_body_size directive in proxy.conf to 60M so that we can upload a file with a maximum size of 60MB.

    sudo vi /etc/nginx/sites-available/ac.pm.netspective.com.conf<br />
    client_max_body_size       60m;<br />
     </p>