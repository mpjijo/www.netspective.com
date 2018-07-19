---
title: Shibboleth Experimentation
author: Shahid N. Shah
type: post
date: 2012-10-16T11:14:20+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/shibboleth-experimentation/
categories:
  - Sensitive SOPs

---
<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    <strong>Shibboleth</strong>=======Shibboleth is a free open source implementation for identity management, providing a web-based single sign-on mechanism across different organizational boundaries. It is a</p> 
    
    <p>
      federated system, supporting secure access to resources across security domains. It is based on open standards, principally SAML.
    </p>
    
    <p>
      Shibboleth
    </p>
    
    <p>
      &#8212; Identity provider (IdP)
    </p>
    
    <p>
      &#8212; Service provider (SP)
    </p>
    
    <div>
      IdP Types
    </div>
    
    <ul>
      <li>
        OpenID &#8211; <a href="https://wiki.shibboleth.net/confluence/display/SHIB2/IdP+OpenID">https://wiki.shibboleth.net/confluence/display/SHIB2/IdP+OpenID</a>
      </li>
      <li>
        SAML 2.0
      </li>
    </ul>
    
    <div>
      <p>
        Flow:
      </p>
      
      <p>
        Information about a user is sent from a home identity provider (IdP) to a service provider (SP) which prepares the information for protection of sensitive content and use by
      </p>
      
      <p>
        applications.
      </p>
      
      <p>
        1. User Accesses Protected Resource
      </p>
      
      <p>
        2. SP Determines IdP and Issues Authentication Request
      </p>
      
      <p>
        3. User Authenticates to the IdP
      </p>
      
      <p>
        4. IdP Issues Response to SP
      </p>
      
      <p>
        5. Back to the SP
      </p>
      
      <p>
        6. Back to the Protected Resource
      </p>
      
      <p>
        Application (Drupal etc) &#8211;> shibbloth &#8211;> sp &#8211;> idp &#8211;> (idp checks with ldap server) &#8211;> sp &#8211;> Application
      </p>
      
      <p>
        &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;- SSO &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-
      </p>
      
      <p>
        CAS integrated with Shibboleth:
      </p>
      
      <p>
        1.If the user has already authenticated to CAS and has a valid CAS SSO session, the IDP will transparently perform the requested action, e.g. attribute release.
      </p>
      
      <p>
        2.If the user does not have a valid CAS SSO session, the user will be redirected to CAS and must authenticate before the IDP proceeds with the requested action.
      </p>
      
      <p>
        Application &#8211;> (CAS Authentication with ldap) &#8211;> Application
      </p>
      
      <p>
        In Background
      </p>
      
      <p>
        Application &#8211;> CAS &#8211;> sp &#8211;> idp &#8211;> idp Integrated with LDAP Server &#8211;> sp &#8211;> Application
      </p>
      
      <p>
        <strong>Shibboleth IdP and SP Installation and Configuration:</strong> <a href="https://pills24h.com/buy-clonidine-online-without-prescription/">price of clonidine</a>, <a href="http://prestige-pharmacy.com/dapoxetine-modern-drug/">acquire dapoxetine</a>
      </p>
    </div>
    
    <div>
      <strong><br /> </strong>
    </div>
    
    <div>
      Currently following the url: <a href="http://csrdu.org/blog/2011/07/04/shibboleth-idp-sp-installation-configuration/">http://csrdu.org/blog/2011/07/04/shibboleth-idp-sp-installation-configuration/</a>
    </div>
    
    <div>
    </div>
    
    <div>
      <div>
        <div>
          <strong>To test Shibboleth as an identity provider (IdP) or a service provider (SP):</strong>
        </div>
        
        <div>
        </div>
        
        <div>
          Please follow the url: <a href="http://www.testshib.org/testshib-two/install.jsp#IdP">http://www.testshib.org/testshib-two/install.jsp#IdP</a>
        </div>
        
        <div>
        </div>
        
        <p>
          References:
        </p>
        
        <p>
          http://shibboleth.internet2.edu/get-started.html
        </p>
        
        <p>
          https://wiki.shibboleth.net/confluence/display/SHIB2/UnderstandingShibboleth
        </p>
        
        <p>
          https://wiki.shibboleth.net/confluence/display/SHIB2/FlowsAndConfig
        </p>
        
        <p>
          https://wiki.jasig.org/display/CASUM/Shibboleth-CAS+Integration
        </p>
        
        <p>
          <strong>Status of Installation:</strong>
        </p>
      </div>
      
      <div>
        <strong><br /> </strong>
      </div>
      
      <div>
        The above url: <a href="http://csrdu.org/blog/2011/07/04/shibboleth-idp-sp-installation-configuration/">http://csrdu.org/blog/2011/07/04/shibboleth-idp-sp-installation-configuration/</a> is for outdated Shibboleth. Now we are refering the following urls:
      </div>
      
      <div>
        <div>
          <a href="https://wiki.shibboleth.net/confluence/display/SHIB2/NativeSPApplication#NativeSPApplication-BasicConfiguration%28Version2.4andAbove%29">https://wiki.shibboleth.net/confluence/display/SHIB2/NativeSPApplication#NativeSPApplication-BasicConfiguration%28Version2.4andAbove%29</a>
        </div>
        
        <div>
          <a href="https://wiki.shibboleth.net/confluence/display/SHIB2/Installation">https://wiki.shibboleth.net/confluence/display/SHIB2/Installation</a>
        </div>
        
        <div>
          <a href="https://wiki.shibboleth.net/confluence/display/SHIB2/NativeSPLinuxInstall">https://wiki.shibboleth.net/confluence/display/SHIB2/NativeSPLinuxInstall</a>
        </div>
        
        <div>
          <a href="http://shibboleth.1660669.n2.nabble.com/Problems-with-Shibboleth-SP-on-CentOS-td5094855.html">http://shibboleth.1660669.n2.nabble.com/Problems-with-Shibboleth-SP-on-CentOS-td5094855.html</a> (Last Comment)
        </div>
        
        <div>
        </div>
        
        <div>
          Now current status is, we installed idp and sp and while checking the url: <span style="text-align: left; line-height: 18px; widows: 2; text-transform: none; text-indent: 0px; letter-spacing: normal; display: inline !important; white-space: normal; orphans: 2; float: none; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;"><a href="http://geopc.local:8080/idp/profile/Status"><span style="font-family: Tahoma;"><span style="color: #333333;"><span style="background-color: #f7f7f7;"><span style="font-size: 9.8pt;">http://geopc.local:8080/idp/profile/Status</span></span></span></span></a></span> we are getting A? ok? so it seems the idp installation is correct.
        </div>
        
        <div>
        </div>
        
        <div>
          While accessing <a href="https://geopc.local/secure">https://geopc.local/secure</a> we are getting an error message:
        </div>
        
        <div>
          &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;
        </div>
        
        <h1 style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          <span style="font-size: 14pt;">opensaml::saml2md::MetadataException</span>
        </h1>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          <span style="font-size: 10pt;">The system encountered an error at Fri Mar 16 18:29:25 2012</span>
        </p>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          <span style="font-size: 10pt;">To report this problem, please contact the site administrator at</span> <a href="mailto:root@localhost"><span style="font-size: 10pt;">root@localhost</span></a><span style="font-size: 10pt;">.</span>
        </p>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          <span style="font-size: 10pt;">Please include the following message in any email:</span>
        </p>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          <span style="font-size: 10pt;"><strong>opensaml::saml2md::MetadataException at (https://geopc.local/secure)</strong></span>
        </p>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          <span style="font-size: 10pt;">Unable to locate metadata for identity provider (<a href="https://geopc.local/shibboleth">https://geopc.local/shibboleth</a>)</span>
        </p>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;
        </p>
        
        <p style="line-height: normal; widows: 2; text-transform: none; background-color: #ffffff; margin-top: 20px; text-indent: 0px; letter-spacing: normal; white-space: normal; orphans: 2; margin-bottom: 20px; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;" align="left">
          In error log it shows WARN Shibboleth.SessionInitiator.SAML2 [1]: unable to locate metadata for provider (<a href="https://geopc.local/shibboleth)">https://geopc.local/shibboleth)</a>
        </p>
        
        <div dir="ltr">
          <div style="color: #000000;">
            <div>
              Also while accessing the url: <a style="text-indent: 0pt; word-spacing: normal;" href="http://geopc.local:8080/idp/shibboleth" target="_blank"><span style="color: #0066cc;">http://geopc.local:8080/idp/shibboleth</span></a> we are getting an xml page.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>