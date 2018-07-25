---
title: Secure SSH with Google Authenticator’s Two-Factor Authentication
author: Shahid N. Shah
type: post
date: 2012-10-16T11:53:30+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/secure-ssh-with-google-authenticators-two-factor-authentication-2/
categories:
  - Sensitive SOPs

---
To install the package on Ubuntu, run the following command:

sudo apt-get install libpam-google-authenticator

Activate Google Authenticator

Next you&#8217;ll have to require Google Authenticator for SSH logins. To do so, open the/etc/pam.d/sshd file on your system (for example, with the sudo nano /etc/pam.d/sshd command) and add the following line to the file:

auth required pam\_google\_authenticator.so

Next, open the sshd_config file, locate theChallengeResponseAuthentication line, and change it to read as follows:

ChallengeResponseAuthentication yes

(If the ChallengeResponseAuthentication line doesn&#8217;t already exist, add the above line to the file.)

Finally, restart the SSH server so your changes will take effect:

sudo service ssh restart

Create an Authentication Key
  
Log in as the user you&#8217;ll be logging in with remotely and run the google-authenticatorcommand to create a secret key for that user.
  
Finally, restart the SSH server so your changes will take effect:

google-authenticator

Google Authenticator will present you with a secret key and several emergency scratch codes. Write down the emergency scratch codes somewhere safe they can only be used one time each, and they&#8217;re intended for use if you lose your phone.
  
Phone:

Official application (Google Authenticator app) are available for Android, iOS, and Blackberry.
  
Download and install the application.

While executing the application it will ask for secret key.

 ![newrelic](/blog/Image.png#left) 

Then you will getting the verification codes and you&#8217;ll now have a constantly changing verification code on your phone.

Windows Operating System:

Execute the exe file ![newrelic](/blog/0aa156f6a108d1bbf97837a21fed5cc6.png#center) 

After running the program and a little padlock icon appears in the system tray. The context menu lets you enter your secret key.

Then Then you will getting the verification codes.

Note: We can create separate keys for each user.
  
Reference:

http://www.howtogeek.com/121650/how-to-secure-ssh-with-google-authenticators-two-factor-authentication/

http://productforums.google.com/forum/#!topic/gmail/1NfpeM2jEMQ

 [1]: https://pills24h.com/buy-clonidine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-clomid-online/
 [3]: https://www.netspective.com/wp-content/uploads/2012/10/Image.png
 [4]: https://www.netspective.com/wp-content/uploads/2012/10/LCGoogleApps.exe