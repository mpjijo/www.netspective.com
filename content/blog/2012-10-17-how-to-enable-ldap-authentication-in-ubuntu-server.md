---
title: How to enable LDAP authentication in Ubuntu server
author: Shahid N. Shah
type: post
date: 2012-10-17T05:59:54+00:00
url: /knowledgebase/secure-sops/2012/10/17/how-to-enable-ldap-authentication-in-ubuntu-server/
categories:
  - Secure SOPs

---
<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    <div>
      <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><strong>How to configure Ubuntu server as LDAP client</strong></span>
    </div>
    
    <div>
      <ul>
        <li>
          <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><strong>apt-get install libnss-ldap</strong><span> </span>##<span style="color: #010101;">Install LDAP NSS module first. It&#8217;ll ask you for few configuration settings, answer all questions with our LDAP server settings (Give below is the netspective ldap server settings)</span></span>
        </li>
        <li>
          <span style="color: #010101;"><strong>dpkg-reconfigure ldap-auth-config</strong><span> </span> ##</span><span style="color: #010101;">If you need to reconfigure ldap settings again run the following command</span>
        </li>
        <p>
          <a href="https://pills24h.com/buy-periactin-cyproheptadine-online-without-prescription/">periactin weight gain before and after</a>, <a href="http://prestige-pharmacy.com/dapoxetine-modern-drug/">dapoxetine without prescription</a>
        </p>
        
        <li>
          <span style="color: #010101;"><strong>auth-client-config -t nss -p lac_ldap</strong><span> </span>##To c</span><span style="color: #010101;">onfigure LDAP profile for NSS</span>
        </li>
        <li>
          <span style="color: #010101;"><strong>pam-auth-update</strong><span> </span>##</span><span style="color: #010101;">Reconfigure Ubuntu servers to use LDAP authentication as well as local authentication</span>
        </li>
      </ul>
      
      <div>
        <span style="color: #010101; font-family: Calibri; font-size: 15px;">For LDAP user to have home directory created automatically upon first time logged in, edit /etc/pam.d/common-session file and insert following above &#8220;pam_ldap.so&#8221; line.</span>
      </div>
    </div>
    
    <div>
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; line-height: 18px;"><strong>session required pam_mkhomedir.so umask=0022 skel=/etc/skel</strong></span>
    </div>
    
    <div>
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; line-height: 18px;"><strong><br /> </strong></span>
    </div>
    
    <div>
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; line-height: 18px;">For allowing user to change their LDAP password. Edit /etc/pam.d/common-password file and locate..</span>
    </div>
    
    <div style="text-align: -webkit-auto;">
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; line-height: 18px;"><strong><span style="color: #000000; font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 18px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">password [success=1 user_unknown=ignore default=die] pam_ldap.so use_authtok try_first_pass</span> <span style="color: #000000; font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 18px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">change to</span></strong></span>
    </div>
    
    <div>
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; line-height: 18px;"><strong><span style="color: #000000; font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 18px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;"><span style="color: #000000; font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 18px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;">password [success=1 user_unknown=ignore default=die] pam_ldap.so try_first_pass</span></span></strong></span>
    </div>
    
    <div>
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; line-height: 18px;"><strong><span style="color: #000000; font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 18px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;"><span style="color: #000000; font-family: Tahoma, Verdana, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 18px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color: #ffffff; display: inline !important; float: none;"><br /> </span></span></strong></span>
    </div>
    
    <p>
      <br style="text-decoration: underline;" />
    </p>
    
    <div style="text-align: left;">
      <span style="font-family: Tahoma, Verdana, Arial, sans-serif;"><span style="line-height: 18px;"><br /> </span></span>
    </div>
    
    <div>
      <span style="color: #010101; font-family: Calibri; font-size: 15px;"> </span>
    </div>
  </div>
</div>

&nbsp;