---
title: Amazon Cold Standy Environment Notes
author: Shahid N. Shah
type: post
date: 2012-10-17T05:45:46+00:00
url: /knowledgebase/secure-sops/2012/10/17/amazon-cold-standy-environment-notes/
categories:
  - Secure SOPs

---
Amazon Cold Standy Environment Notes
  
<basefont size="2" face="Tahoma" />
  
Amazon EC2 manually created replica of R (normally shutdown)

<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    <div>
      Shahid&#8217;s VM farm (SVM) manually created replica Amazon S3Racksapce Rscript for FILES (no images)
    </div>
    
    <div>
      1. Use API to turn on EC2 cold (async)<br /> 2. R -> S3<br /> 3. Check if EC2 twin is on (or wait until it is)<br /> 4. S3 -> EC2 restore<br /> 5. Shutdown EC2
    </div>
    
    <div>
    </div>
    
    <p>
      <a href="https://pills24h.com/buy-periactin-cyproheptadine-online-without-prescription/">periactin side effects</a>, <a href="http://prestige-pharmacy.com/dapoxetine-modern-drug/">purchase dapoxetine</a>
    </p>
    
    <div>
      MySQL Replication: R -> SVM or (R -> EC2 MySQL direct)
    </div>
  </div>
</div>

&nbsp;