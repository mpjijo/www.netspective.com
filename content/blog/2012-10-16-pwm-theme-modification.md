---
title: PWM Theme Modification
author: Shahid N. Shah
type: post
date: 2012-10-16T05:07:22+00:00
url: /knowledgebase/developer-sops/2012/10/16/pwm-theme-modification/
categories:
  - Developer SOPs

---
While accessing PWM url (https://idm.netspective.com:443/pwm) you will get a page in which on top you will see &#8220;PWM is in configuration mode. Use the ConfigManager to modify or lock the configuration.&#8221; Click on ConfigManager

You will see PWM Configuration Editor and click on view and tick on &#8220;Show Advanced Settings&#8221;

To modify theme under settings menu choose the User Interface sub menu.

In &#8216;Interface Theme&#8217; select Custom so that you can enter Custom CSS Stylesheet.

To enter Custom CSS Stylesheet in the same User Interface windows you will see Custom CSS Stylesheet and paste the new custom style sheet code.

For netspective theme copy and paste below code:

[zoloft without prescription][1], [generic Zoloft][2] 

    #header {
        width: 100%;
        height: 85px;
        margin: 0;
        background-image: url('header-gradient.gif')
    }
    
    #header-company-logo {
        position: relative;
        float: left;
        background-image: url(logo.png);
        top: 10px;
        left: 10px;
        width: 199px;
        height: 54px;
        z-index: 1;
    }
    
    #centerbody {
        background-color: #eeeeee;
        padding: 10px 10px 40px 10px;
        border: solid 2px #2469B6;
        border-radius: 5px;
    }
    
    .message {
        background-color: #eeeeee;
    }
    
    .message-info {
        background-color: #b6ccdb;
    }
    
    .message-error {
        background-color: #ffcccc;
    }
    
    .message-success {
        background-color: #70c1f9;
    }
    #wrapper {
    background: #E5E3E3;
    }
    

In server through FTP or shell you can upload/replace logo in the folder path resources/themes/custom/logo.png to your own company logo and can replace the header background image resources/themes/custom/header-gradient.gif which fits theme.

 [1]: https://pills24h.com/buy-zoloft-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zoloft-online/вЂЋ