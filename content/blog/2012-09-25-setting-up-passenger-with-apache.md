---
title: Setting up Passenger with Apache
author: Shahid N. Shah
type: post
date: 2012-09-25T09:29:51+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-passenger-with-apache/
categories:
  - IT Infrastructure SOPs

---
## Passenger with Apache

Passenger helps in deployment of applications developed in Ruby on Rails web framework.

## Prerequisite

  * [Setting up Rails][1]
  * [paxil for cheap][2], [acquire Zoloft][3] [Setting up Apache Httpd Server][4]

## Install Passenger

Set the version ruby to be used

    rvm use 1.9.2
    

Type following command to install passenger

    gem install passenger
    

Following command is used to compile and install passenger apache module.

    passenger-install-apache2-module
    

During the process, it will check for the dependent products, compile and install the product, steps to configure the passenger module in apache and steps to add a virtual host for the ruby on rails web application.

Need to add the following lines to each of site configuration files in which ruby on rails web application will be used.

    LoadModule passenger_module /usr/local/rvm/gems/ruby-1.9.2-p318/gems/passenger-3.0.11/ext/apache2/mod_passenger.so
    PassengerRoot /usr/local/rvm/gems/ruby-1.9.2-p318/gems/passenger-3.0.11
    PassengerRuby /usr/local/rvm/wrappers/ruby-1.9.2-p318/ruby

 [1]: https://www.netspective.com/setting-up-rails/
 [2]: https://pills24h.com/buy-paroxetine-online-without-prescription/
 [3]: http://prestige-pharmacy.com/buy-zoloft-online/вЂЋ
 [4]: https://www.netspective.com/setting-up-apache-httpd-server/