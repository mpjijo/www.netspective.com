---
title: Upgradation of home.netspective.com from Ubuntu 10.04 to Ubuntu 12.04
author: Shahid N. Shah
type: post
date: 2012-10-16T11:20:42+00:00
url: /knowledgebase/sensitive-sops/2012/10/16/upgradation-of-home-netspective-com-from-ubuntu-10-04-to-ubuntu-12-04/
categories:
  - Sensitive SOPs

---
**Action Plan for the Upgradation of home.netspective.com from Ubuntu 10.04 to Ubuntu 12.04**

<div>
  <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;">
    <div>
      <ol>
        <li>
          Create a new server home2.netspective.com with Ubuntu 12.04
        </li>
        <li>
          <a style="color: #69aa35;" href="https://www.netspective.com/knowledgebase/it-infrastructure-sops/secure-sops/2012/10/17/setting-up-a-base-ubuntu-server/">Setting up a Base Ubuntu Server</a>A� To follow NetspectiveA�A�standard security
        </li>
        <li>
          <a href="https://www.netspective.com/knowledgebase/it-infrastructure-sops/secure-sops/2012/10/17/netspective-vlan/"><span style="color: #69aa35;">Netspective VLAN</span>A�</a>Implement firewall rules for netspective VLAN through ufw
        </li>
        <li>
          <a href="www.netspective.citrusdev.com/knowledgebase/it-infrastructure-sops/secure-sops/2012/10/17/how-to-enable-ldap-authentication-in-ubuntu-server/"><span style="color: #69aa35;">How to enable LDAP authentication in Ubuntu server</span>A�</a>Enable LDAP Authentication
        </li>
        <li>
          Install Nginx webserver with php-fpm.
        </li>
        <li>
          Copy all configuration files from current home.netspective.com server to new A�home2.netspective.com.
        </li>
        <li>
          In php server and on other servers update all configuration files to reflect the new server IP.
        </li>
        <li>
          Rename current server to retired.home.netspective.com and home2.netspective.com server to A�home.netspective.com
        </li>
        <li>
          Update the DNS of A�home.netspective.com to new server IP.
        </li>
        <li>
          Turn off retired.mysql.rdbms server but don&#8217;t delete it
        </li>
        <li>
          If everything is working across all netspective apps <ol>
            <li>
              Do one final migration of files from old server to new server.
            </li>
            <li>
              delete A�retired.home.netspective.com
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</div>

[doxycycline monohydrate chlamydia][1], [acquire zithromax][2]

 [1]: https://pills24h.com/buy-doxycycline-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/