---
title: If you cant repeat it, dont bother automating it
author: Shahid N. Shah
type: post
date: 2008-07-20T06:00:24+00:00
url: /uncategorized/2008/07/20/if-you-cant-repeat-it-dont-bother-automating-it-2/
categories:
  - Netspective Blogs
  - Uncategorized

---
There been plenty of discussion in both literature and general media about most software projects failing.There are plenty of reasons for failed projects: from inadequate requirements gathering to poor project management to plain incompetence. Some of the problem starts at the C-Suite where projects are actually identified and started for asking to automate (presumably with software) something that maybe has no business being automated.

My simple advice to most architects, CTOs, CEOs and CIOs about project management starts with a question: can you methodically and manually repeat the thing you are trying to automate? If the answer to that question is no then no PMO, no project management technique, not even the smartest most talented people in the world can help automate something that cant at least be repeated consistenly manually.

This advice of asking a simple question about repeatability might sound so obvious as to not even bother asking it but it becomes perilous not to do so. At the heart of most failed software automation attempts is a failure to understand the workflow and gather the right requirements. That pretty easy to figure out. What not so easy to figure out is: why is the workflow so hard to gather requirements for? It is probably because the workflow, while it seems consistent at the high level, isnt repeatable enough consistently to describe in software. Perhaps parts of it are, but maybe the entire workflow isnt.

So, as a senior executive that may not be leading the project, but may be greenlighting it, what you need to do before making a decision is have your project managers describe that they can clearly repeat (manually and consistently) what they are trying to automate. If not, get the process engineering guys in there to work on the process before the geeks get in there to work on the technology.