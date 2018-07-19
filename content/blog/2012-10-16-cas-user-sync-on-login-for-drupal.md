---
title: CAS User Sync on Login for Drupal
author: Shahid N. Shah
type: post
date: 2012-10-16T09:00:46+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/cas-user-sync-on-login-for-drupal/
categories:
  - Sensitive SOPs

---
<a name="236"></a>

# 

<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    Created by GeoPC in a document in Dropbox on 1/19/2012 &#8212; moved into Evernote by Shahid.</p> 
    
    <div>
    </div>
    
    <div>
      <strong>Default scenario with CAS module.</strong>
    </div>
    
    <div>
    </div>
    
    <div>
      Able to login to drupal with CAS users but oles and user attributes will not map.
    </div>
    
    <div>
    </div>
    
    <div>
      <span style="line-height: 19px;"><strong><span style="mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US; mso-fareast-language: EN-IN;" lang="EN-US">For role mapping developed a separate module called <strong>CAS Alter module</strong> a ?</span></strong></span>
    </div>
    
    <div>
    </div>
    
    <div>
      To correct this we developed a new module <span style="line-height: 19px;"><strong><span lang="EN-US"><strong>CAS Alter module </strong></span></strong></span>in which if the drupal user not present, then user with groups mentioned in the LDAP will be created in drupal.
    </div>
    
    <div>
    </div>
    
    <div>
      If there is already a user in drupal (Whether it is created by CAS or created in drupal directly) CAS will map to drupal user and CAS will not check what groups, etc are there in LDAP.
    </div>
    
    <div>
    </div>
    
    <div>
      <strong>Different scenarios as follows:</strong>
    </div>
    
    <div>
    </div>
    
    <div>
      <div style="margin-left: -2mm;">
        <table style="table-layout: fixed; border-collapse: collapse; border-width: 1px; border-color: #000000;" width="616" border="1" cellspacing="0" cellpadding="6">
          <colgroup> <col width="87" /> <col width="95" /> <col width="96" /> <col width="96" /> <col width="242" /> </colgroup> <tr>
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="74">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>User present in LDAP</strong></span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="82">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>LDAP Group</strong></span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>User present in Drupal</strong></span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>Drupal Role present</strong></span></span>
              </div>
            </td>
            
            <td style="text-align: center;" valign="top">
              <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;"><strong>Suggestion from Geo</strong></span></span>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="229">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>Shahid&#8217;s Recommendations</strong></span></span>
              </div>
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
          </tr>
          
          <tr>
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="74">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="82">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
              </div>
            </td>
            
            <td valign="top">
              <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Will create new user and role in drupal and allowed to Access drupal with new user and role</span></span>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="229">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Agreed</span></span>
              </div>
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
          </tr>
          
          <tr>
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="74">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="82">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
              </div>
            </td>
            
            <td valign="top">
              <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal with existing drupal user with no specific role</span></span>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="229">
              <div align="center">
                <span style="font-family: 'Times New Roman'; font-size: large;"><span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Agreed</span></span></span>
              </div>
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
          </tr>
          
          <tr>
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="74">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="82">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td valign="top">
              <span style="border-collapse: separate; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium; color: #000000;"><span style="border-collapse: collapse; color: #ff0000; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal with existing drupal role</span></span>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="229">
              <div align="center">
                <span style="color: #ff0000; font-family: 'Times New Roman'; font-size: large;"><span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Agreed</span></span></span>
              </div>
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
          </tr>
          
          <tr>
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="74">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="82">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes (Same as Group)</span></span>
              </div>
            </td>
            
            <td valign="top">
              <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal</span></span>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="229">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Access drupal</span></span>
              </div>
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
          </tr>
          
          <tr>
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="74">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="82">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
              </div>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="83">
              <div align="center">
                <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes (Diff with Group)</span></span>
              </div>
            </td>
            
            <td valign="top">
              <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; color: #ff0000; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal with existing drupal role? Would it be better to login under new LDAP/drupal group?</span></span>
            </td>
            
            <td style="border: solid #000000 1px;" align="center" valign="middle" width="229">
              <div align="center">
                <span style="color: #ff0000; font-family: 'Times New Roman';"><span style="font-size: 12pt;">Overwrite drupal role with LDAP role because LDAP is the system of record.</span></span>
              </div>
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
            
            <td valign="top">
            </td>
          </tr>
        </table>
      </div>
      
      <p align="center">
        </div> 
        
        <div>
          We have modified the module <span style="line-height: 19px;"><span lang="EN-US"><strong style="font-weight: bold;">CAS Alter module</strong> so that it </span></span><span style="color: #010101; font-family: 'Times New Roman'; font-size: large;"><span style="line-height: 14px;">works in such a way that user a role mapping is completely governed by CAS (LDAP Groups). </span></span>
        </div>
        
        <div>
          <span style="color: #010101; font-family: 'Times New Roman'; font-size: large;"><span style="line-height: 14px;"><br /> </span></span>
        </div>
        
        <div>
          <span style="color: #010101; font-family: 'Times New Roman'; font-size: 16px; line-height: 14px;">For an user in LDAP if a particular group (role) is added or deleted then while login with this user, only existing ldap group will be mapped as user roles. So already existing drupal roles will be deleted.</span>
        </div>
        
        <div>
          <span style="color: #010101; font-family: 'Times New Roman'; font-size: large;"><span style="line-height: 14px;"><br /> </span></span>
        </div>
        
        <div>
          <span style="color: #010101; font-family: 'Times New Roman'; font-size: large;"><span style="line-height: 14px;">Now the </span><span style="line-height: 14px;">scenarios</span><span style="line-height: 14px;"> will be as follows:</span></span>
        </div>
        
        <div>
          <div>
          </div>
          
          <div>
            <div style="margin-left: -2mm;">
              <table style="table-layout: fixed; border-collapse: collapse; border-width: 1px; border-color: #000000;" width="616" border="1" cellspacing="0" cellpadding="6">
                <colgroup> <col width="87" /> <col width="95" /> <col width="96" /> <col width="96" /> <col width="242" /> </colgroup> <tr>
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="74">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>User present in LDAP</strong></span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="82">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>LDAP Group</strong></span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>User present in Drupal</strong></span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>Drupal Role present</strong></span></span>
                    </div>
                  </td>
                  
                  <td style="text-align: center;" valign="top">
                    <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;"><strong>Suggestion from Geo</strong></span></span>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="229">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;"><strong>Shahid&#8217;s Recommendations</strong></span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                </tr>
                
                <tr>
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="74">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="82">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                    <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Will create new user and role in drupal and allowed to Access drupal with new user and role</span></span>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="229">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Agreed</span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                </tr>
                
                <tr>
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="74">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="82">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                    <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal with existing drupal user with no specific role</span></span>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="229">
                    <div align="center">
                      <span style="font-family: 'Times New Roman'; font-size: large;"><span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Agreed</span></span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                </tr>
                
                <tr>
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="74">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="82">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">No</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                    <span style="border-collapse: separate; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium; color: #000000;"><span style="border-collapse: collapse; color: #ff0000; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal with no role.</span></span>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="229">
                    <div align="center">
                      <span style="font-family: 'Times New Roman'; font-size: large;"><br /> </span>
                    </div>
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                </tr>
                
                <tr>
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="74">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="82">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes (Same as Group)</span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                    <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal</span></span>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="229">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Access drupal</span></span>
                    </div>
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                  
                  <td valign="top">
                  </td>
                </tr>
                
                <tr>
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="74">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="82">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes</span></span>
                    </div>
                  </td>
                  
                  <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="83">
                    <div align="center">
                      <span style="font-family: 'Times New Roman';"><span style="font-size: 12pt;">Yes (Diff with Group)</span></span>
                    </div>
                    
                    <p>
                      <a href="https://pills24h.com/buy-paroxetine-online-without-prescription/">buy paroxetine</a>, <a href="http://prestige-pharmacy.com/buy-zoloft-online/вЂЋ">Zoloft withoutprescription</a> </td> 
                      
                      <td valign="top">
                        <span style="border-collapse: separate; color: #000000; font-family: Tahoma; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-border-horizontal-spacing: 0px; -webkit-border-vertical-spacing: 0px; -webkit-text-decorations-in-effect: none; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; font-size: medium;"><span style="border-collapse: collapse; color: #ff0000; font-family: 'Times New Roman'; font-size: 16px; text-align: -webkit-center;">Access drupal with LDAP group as role and existing drupal role will be deleted.</span></span>
                      </td>
                      
                      <td style="border-width: 1px; border-color: #000000; border-style: solid;" align="center" valign="middle" width="229">
                        <div align="center">
                          <span style="color: #ff0000; font-family: 'Times New Roman'; font-size: large;"><br /> </span>
                        </div>
                      </td>
                      
                      <td valign="top">
                      </td>
                      
                      <td valign="top">
                      </td>
                      
                      <td valign="top">
                      </td>
                      
                      <td valign="top">
                      </td></tr> </tbody> </table> </div> 
                      
                      <p align="center">
                        </div> </div> </div> </div> 
                        
                        <p>
                        </p>