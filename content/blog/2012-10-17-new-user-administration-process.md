---
title: New User Administration Process
author: Shahid N. Shah
type: post
date: 2012-10-17T06:21:27+00:00
url: /knowledgebase/secure-sops/2012/10/17/new-user-administration-process/
categories:
  - Secure SOPs

---
<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    <div>
      <strong>Steps need to done in Proxy Server For New Users to login:</strong>
    </div>
    
    <ol>
      <li>
        Go to LDAP admin and create an user.
      </li>
      <li>
        Create the new user record in LDAP using either a template LDIF or manually in LDAP with a temporary password. User IDs must use firstname_lastname format (full name)
      </li>
      <li>
        Existing system admin user goes to home.netspective.com
      </li>
      <li>
        Existing system admin uses record from step 2 (user/pw) to login via &#8220;su &#8211; new_user&#8221; or through console <ul>
          <li>
            su user
          </li>
        </ul>
      </li>
      
      <li>
        This login via su should create new account with temporary password from LDAP sync
      </li>
      <li>
        Enter the google-authenticator command to get the secret key for that new user. <ul>
          <li>
            google-authenticator
          </li>
          <p>
            <a href="https://pills24h.com/buy-levitra-online-without-prescription/">mail order levitra</a>, <a href="http://prestige-pharmacy.com/buy-lioresal-baclofen/">lioresal online</a>
          </p>
          
          <li>
            Your new secret key is: XXXXXXXXXXXYour verification code is 99999Your emergency scratch codes are:11111111 <p>
              22222222
            </p>
            
            <p>
              33333333
            </p>
            
            <p>
              44444444
            </p>
            
            <p>
              55555555
            </p>
            
            <p>
              Do you want me to update your &#8220;~/.google_authenticator&#8221; file (y/n) y
            </p>
            
            <p>
              Do you want to disallow multiple uses of the same authentication
            </p>
            
            <p>
              token? This restricts you to one login about every 30s, but it increases
            </p>
            
            <p>
              your chances to notice or even prevent man-in-the-middle attacks (y/n) n
            </p>
            
            <p>
              By default, tokens are good for 30 seconds and in order to compensate for
            </p>
            
            <p>
              possible time-skew between the client and the server, we allow an extra
            </p>
            
            <p>
              token before and after the current time. If you experience problems with poor
            </p>
            
            <p>
              time synchronization, you can increase the window from its default
            </p>
            
            <p>
              size of 1:30min to about 4min. Do you want to do so (y/n) y
            </p>
            
            <p>
              If the computer that you are logging into isn&#8217;t hardened against brute-force
            </p>
            
            <p>
              login attempts, you can enable rate-limiting for the authentication module.
            </p>
            
            <p>
              By default, this limits attackers to no more than 3 login attempts every 30s.
            </p>
            
            <p>
              Do you want to enable rate-limiting (y/n) y</li> </ul> </li> 
              
              <li>
                Provide the new user with the above secret key and temporary password.
              </li>
              <li>
                Ask new user to login, via TFA (two factor authentication)
              </li></ol> 
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div>
              
              <div>
              </div></div> </div> 
              
              <p>
                &nbsp;
              </p>