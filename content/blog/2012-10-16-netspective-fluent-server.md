---
title: Netspective Fluent Server
author: Shahid N. Shah
type: post
date: 2012-10-16T06:28:02+00:00
url: /knowledgebase/server-sops/2012/10/16/netspective-fluent-server/
categories:
  - Server SOPs

---
## Setting up Netspective Fluent Server

This Server should be used to build fluent server and the related components the required to do the data analytical.

  * [[Setting up a CentOS Base Server][1]] and make sure create user as fluent and configure the fluent user with Sudo permission as given in the document.
  * [[Setting up OpenSpliceDDS][2]]
  * [[Setting up MongoDB][3]]
  * [[Setting up Elastic Search][4]]
  * [[Setting up syslog Client][5]]
  * [[Setting up Graylog Server][6]]and make sure to check syslog, Elastic Search and mongoDB configurations were appropriately and match the product configuration already made.
  * [[Setting up Apache Httpd Server][7]]
  * [[Setting up Graylog WebInterface][8]]
  * [[Build Boost Library][9]]
  * [[Build Log4CPP from Source][10]]
  * [[Build Websocket++ Legacy from Source][11]]
  * [[Build MongoDB C++ Driver from Source][12]]
  * [[Build Fluent from Source][13]]

## Data Generator

Data Generator helps in creating synthetic data with random values. Start the data generator with the IP address and Port which will be used to connect to the process.

    cd ~/Downloads/fluent/bin
    ./data-generator <ipaddress> <port>
    

## Blood Pressure

**Blood pressure publisher** shall be started by passing the various options suffix to the command. Obtain options by using following command.

    ./bp-pub --help
    
    Available options for are:
    --help                   Produce help message
    --data-gen-ip arg        Data Generator IP 
    --data-gen-port          Data Generator Port
    --domain arg             Device Domain 
    --device-id arg          Device ID - for device identification
    --log-info arg           Log information category
    --log-data arg           Log data category 
    --log4cpp-conf arg       Log configuration and format specification file
    

Example:

    ./bp-pub --data-gen-ip 127.0.0.1 --data-gen-port 5000 --domain bp --device-id BP_LAB121 --log-info bp.info --log-data bp.data --log4cpp-conf ../src/c++/production/conf/simulation_log_bp.conf
    

Once the publisher binds with the data generator and send a command, it receives data from data-generator and displays the data in the log files.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format**

**Multiple publishers** for the same domain can be started using the bp-pub.sh shell script. Obtain options by using following command.

    ./bp-pub.sh --
    
    USAGE:
        BloodPressure Publisher
    
    OPTIONS:
        --domain  Device Domain
        --device-id  Device ID to identify the particular device
        --sp    awn  Number of publishers to run
        --log4cpp-conf  configration file path
    
    EXAMPLE:
        ./bp-pub.sh --domain=blood --device-id=BP --spawn=5 --log4cpp-conf ../src/c++/production/conf/simulation_log_bp.conf
    

**NOTE :The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **blood pressure subscribers** on the other terminal by passing the various options suffix to the command. Obtain options by using following command.

    ./bp-sub-echo --help
    
    Available options are:
    --help                  Produce help message
    --domain arg            Device Domain 
    --device-id arg         Device ID - for device identification
    --log-info arg          Log information category
    --lod-data arg          Log data category
    --log4cpp-conf arg      Log configuration and format specification file
    

Example:

    ./bp-sub-echo --domain bp --device-id BP_LAB121 --log-info bp.info --log-data bp.echo --log4cpp-conf ../src/c++/production/conf/simulation_log_bp_sub.conf
    

Once the blood pressure subscriber is started it will retrieve data from the Topic. Subscriber uses ContentFilterTopic to retrieve messages based on the Device ID from a single topic. Refer &#8216;Graylog Integration&#8217; to see the results in Graylog Webinterface.

**NOTE: The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **blood pressure alarm** on the other terminal by passing the various options suffix to the command. Obtain options by using following command.

    ./bp-sub-alarm --help
    
    Available options are:  
    --help                    Produce help message
    --domain arg              Device Domain
    --device-id arg           Device ID for identification
    --log-info arg            Log information category
    --log-data arg            Log data category 
    --log4cpp-conf arg        Log configuration and format specification file
    --systolic-low arg        Systolic low pressure alarm specification - default <90
    --systolic-high arg       Systolic high Pressure alarm specification - default >140
    --diatolic-low arg        Diatolic low pressure alarm specification - default <60
    --diatolic-high arg       Diatolic high pressure alarm specification - default>90
    --pulse-rate-low arg      Pulse low rate alarm specification - default <60
    --pulse-rate-high arg     Pulse high rate alarm specification - default >90
    

Example :

    ./bp-sub-alarm --domain bp --device-id BP_LAB121 --log-info bp.info --log-data bp.alarm --log4cpp-conf ../src/c++/production/conf/simulation_log_bp_sub.conf
    

Once the blood pressure alarm is started it will retrieve the data and the displays in log file based on the default assessment or from the specified arguments.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **blood pressure persists** in the other terminal by passing the various options suffix to the command. Obtain options by using following command.

    ./bp-sub-persist --help
    
    Available options are:
    --help                Produce help message
    --domain arg          Device Domain
    --device-id arg       Device ID for identification
    --host                Host Ip_Address
    --database            Database Name
    --log-info arg        Log information category
    --log-data arg        Log data category
    --log4cpp-conf arg    Log configuration and format specification file
    

Example

    ./bp-sub-persist --domain bp --device-id BP_LAB121 --log-info bp.info --log-data bp.persist --log4cpp-conf ../src/c++/production/conf/simulation_log_bp_sub.conf --host 127.0.0.1 --database EMR
    

Once the blood pressure persistence is started it will update the data in to the data base and displays the data in the log file.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

## Pulse OxiMeter

**Pulse OxiMeter publisher** shall be started by passing the various options suffix to the command. Obtain options by using following command

    ./pulseox-pub --help
    
    Available options are:
    --help                Produce help message
    --data-gen-ip arg     Data Generator IP 
    --data-gen-port       Data Generator Port No.
    --domain arg          Device Domain 
    --device-id arg       Device ID - for device identification
    --log-info arg        Log information category
    --log-data arg        Log data category  
    --log4cpp-conf arg    Log configuration and format specification file
    

Example :

    ./pulseox-pub --data-gen-ip 127.0.0.1 --data-gen-port 5000 --domain pulse --device-id PULSE_LAB31 --log-info pulse.info --log-data pulse.data --log4cpp-conf ../src/c++/production/conf/simulation_log_pulse.conf
    

Once the publisher binds with the data generator and send a command, it receives data from data-generator and displays the data in the log files.

**NOTE :The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

**Multiple publishers** for the same domain can be started using the bp-pub.sh shell script. Obtain options by using following command.

    ./pulseox-pub.sh --
    
    Available Options are:
    --domain        Device Domain
    --device-id     Device ID to identify the particular device
    --spawn         Number of publishers to run
    --log4cpp-conf  Configration file path
    

EXAMPLE:

    ./pulseox-pub.sh --domain=pulse --device-id=PULSE --spawn=5 --log4cpp-conf ../src/c++/production/conf/simulation_log_pulse.conf
    

**NOTE :The arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format**

Start the **Pulseox meter subscribers** on the other terminal using by passing various options suffix to the command. Obtain options by using following command.

    ./pulseox-sub-echo --help
    
    Available options are:
    --help                Produce help message
    --domain arg          Device Domain 
    --device-id arg       Device ID - for device identification
    --log-info arg        Log information category 
    --lod-data arg        Log data category 
    --log4cpp-conf arg    Log configuration and format specification file
    

Example:

    ./pulseox-sub-echo --domain pulse --device-id PULSE_LAB31 --log-info pulse.info --log-data pulse.echo --log4cpp-conf ../src/c++/production/conf/simulation_log_pulse_sub.conf
    

Once the pulse oximeter subscriber is started it will retrieve data from the Topic. Subscriber uses ContentFilterTopic to retrieve messages based on the Device ID from a single topic. Refer &#8216;Graylog Integration&#8217; to see the results in Graylog Webinterface.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **pulseox meter alarm** on the other terminal using by passing various options suffix to the command. Obtain options by using following command.

    ./pulseox-sub-alarm --help
    
    Available options are:
    --help               Produce help message
    --domain arg         Device Domain
    --device-id arg      Device ID for identification
    --log-info arg       Log information category
    --log-data arg       Log data category 
    --log4cpp-conf arg   Log configuration and format specification file
    --spo2-low arg       SPO2 low level alarm specification - default <88
    --spo2-high arg      SPO2 high level alarm specification - default >92
    

Example:

    ./pulseox-sub-alarm --domain pulse --device-id PULSE_LAB31 --log-info pulse.info --log-data pulse.alarm --log4cpp-conf ../src/c++/production/conf/simulation_log_pulse_sub.conf
    

Once the pulse oximeter alarm is started will retrieve the data and the displays in log file based on the default assessment or from the specified arguments.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **pulseox meter persists** on the other terminal using by passing various options suffix to the command. Obtain options by using following command.

    ./pulseox-sub-persist --help
    
    Available options are:    
    --help               Produce help message
    --domain arg         Device Domain
    --device-id arg      Device ID for identification
    --host               Host Ip_Address
    --database           Database Name
    --log-info arg       Log information category
    --log-data arg       Log data category
    --log4cpp-conf arg   Log configuration and format specification file
    

Example:

    ./pulseox-sub-persist --domain pulse --device-id PULSE_LAB31 --log-info pulse.info --log-data pulse.persist --log4cpp-conf ../src/c++/production/conf/simulation_log_pulse_sub.conf --host 127.0.0.1 --database EMR
    

Once the pulse oximeter persistence is started it will update the data in to the database and displays the data in the log file.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

## Temperature Monitor

**Temperature monitor** publisher shall be started by passing the various options suffix to the command. Obtain options by using following command.

    ./temperature-pub --help
    
    Available options are:  
    --help                Produce help message
    --data-gen-ip arg     Data Generator IP 
    --data-gen-port       Data Generator Port No.
    --domain arg          Device Domain 
    --device-id arg       Device ID - for device identification
    --log-info arg        Log information category
    --log-data arg        Log data category  
    --log4cpp-conf arg    Log configuration and format specification file
    

Example :

    ./temperature-pub --data-gen-ip 127.0.0.1 --data-gen-port 5000 --domain temp --device-id TEMP_LAB33 --log-info temp.info --log-data temp.data --log4cpp-conf ../src/c++/production/conf/simulation_log_temp.conf
    

Once the publisher binds with the data generator and send a command, it receives data from data-generator and displays the data in the log files.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

**Multiple publishers** for the same domain can be started using the bp-pub.sh shell script. Obtain options by using following command.

    ./temperature-pub.sh --help
    
    Available options are:
    --domain        Device Domain
    --device-id     Device ID to identify the particular device
    --spawn         Number of publishers to run
    --log4cpp-conf  Configration file path
    

EXAMPLE:

    ./temperature-pub.sh --domain=temp --device-id=TEMP --spawn=5 --log4cpp-conf ../src/c++/production/conf/simulation_log_temp.conf
    

**NOTE : The arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format**

Start the **temperature-monitor subscribers** on the other terminal by passing the various options suffix to the command. Obtain options by using following command.

    ./tempmerature-sub-echo --help
    
    Available options are:
    --help                  Produce help message
    --domain arg            Device Domain 
    --device-id arg         Device ID - for device identification
    --log-info arg          Log information category
    --lod-data arg          Log data file 
    --log4cpp-conf arg      Log configuration and format specification file
    

Example:

    ./temperature-sub-echo --domain temp --device-id TEMP_LAB33 --log-info temp.info --log-data temp.echo --log4cpp-conf ../src/c++/production/conf/simulation_log_temp_sub.conf
    

Once the temp subscriber is started it will retrieve data from the Topic. Subscriber uses ContentFilterTopic to retrieve messages based on the Device ID from a single topic. Refer &#8216;Graylog Integration&#8217; to see the results in Graylog Webinterface.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **temperature-monitor alarm** by passing the various options suffix to the command. Obtain options by using following command.

    ./tempmerature-sub-alarm --help
    
    Available options are:
    --help              Produce help message
    --domain arg            Device Domain
    --device-id arg         Device ID for identification
    --log-info arg          Log information category
    --log-data arg          Log data category 
    --log4cpp-conf arg      Log configuration and format specification file
    --avg-time-period arg   Average time period for temperature - default 1 min
    --temp-low arg          Temperature low level alarm  specification -default<88
    --temp-high arg         Temperature high level alarm specification-default>92
    

Example:

    ./temperature-sub-alarm --domain temp --device-id TEMP_LAB33 --log-info temp.info --log-data temp.alarm --log4cpp-conf ../src/c++/production/conf/simulation_log_temp_sub.conf
    

Once the pulse oximeter alarm is started it will retrieve the data and the displays in log file based on the default assessment or from the specified arguments.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **temperature-monitor persists** by passing the various options suffix to the command. Obtain options by using following command.

    ./temperature-sub-persist --help
    
    Available options are:
    --help                Produce help message
    --domain arg          Device domain
    --device-id arg       Device ID for identification
    --host                Host IP_Address
    --database            Database Name
    --log-info arg        Log information category
    --log-data arg        Log data category 
    --log4cpp-conf arg    Log configuration and format specification file
    

Example:

    ./temperature-sub-persist --domain temp --device-id TEMP_LAB33 --log-info temp.info --log-data temp.persist --log4cpp-conf ../src/c++/production/conf/simulation_log_temp_sub.conf --host 127.0.0.1 --database graylog2
    

Once the temperature monitor persists is started it will update the data in to the database and displays the data in the log file.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

## ECG

**Ecg publisher** shall be started by passing the various options suffix to the command. Obtain options by using following command.

    ./ecg-pub --help
    
    Available options are:  
    --help                Produce help message
    --data-gen-ip arg     Data Generator IP 
    --data-gen-port       Data Generator Port No.
    --domain arg          Device Domain 
    --device-id arg       Device ID - for device identification
    --log-info arg        Log information category
    --log-data arg        Log data category  
    --log4cpp-conf arg    Log configuration and format specification file
    

Example :

    ./ecg-pub --data-gen-ip 127.0.0.1 --data-gen-port 5000 --domain ECG --device-id ECG_LAB44 --log-info ecg.info --log-data ecg.data --log4cpp-conf ../src/c++/production/conf/simulation_log_ecg.conf 
    

Once the publisher binds with the data generator and send a command, it receives data from data-generator and displays the data in the log files.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

Start the **ecg subscribers** on the other terminal by passing the various options suffix to the command. Obtain options by using following command.

    ./ecg-sub-echo --help
    
    Available options are:
    --help                  Produce help message
    --domain arg            Device Domain 
    --device-id arg         Device ID - for device identification
    --log-info arg          Log information category
    --lod-data arg          Log data file 
    --log4cpp-conf arg      Log configuration and format specification file
    

Example:

    ./ecg-sub-echo --domain ECG --device-id ECG_LAB44 --log-info ecg.info --log-data ecg.echo --log4cpp-conf ../src/c++/production/conf/simulation_log_ecg_sub.conf
    

Once the ecg subscriber is started it will retrieve data from the ContentFilterTopic to retrieve messages based on the Device ID from a single topic. Refer &#8216;Graylog Integration&#8217; to see the results in Graylog Webinterface.

**NOTE : The category name arguments passed to the application needs to be configured in the log4cpp configuration file with the appender and layout format.**

## Graylog Integration

Running any echo subscriber will retrieve the data from DDS and display the data in console. It can also sends the data to syslog if the syslog client was installed and configured.

Run syslog client, elastic search, graylog server and graylog webinterface. Access graylog webinterface by using the Virtual Host configuration done in Graylog WebInterface setup guide.

Refresh the home page to get the latest data displayed in the Messages table. In order to get continuous updates, click &#8216;Open dashboard&#8217; in right hand side frame.

## Running WebSocket

        $ ./webserver <websocket-ip> <websocket-port> <data-generator-ip> <data-generator-port>
    

Accessing Publisher and subscriber on broswer

        http://<ip-address>/index.php
    

Note : If we are using hostname instead of ip-address make sure to have a name server entry in /etc/hosts or in DNS

 [1]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/10/18/setting-up-centos-servers/
 [2]: www.netspective.citrusdev.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-opensplicedds/
 [3]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-mongodb/
 [4]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/settiing-up-elastic-search/
 [5]: www.netspective.citrusdev.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-syslog-client/
 [6]: www.netspective.citrusdev.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-graylog-server/
 [7]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-apache-httpd-server/
 [8]: https://www.netspective.com/knowledgebase/it-infrastructure-sops/2012/09/25/setting-up-graylog-webinterface/
 [9]: https://www.netspective.com/knowledgebase/developer-sops/2012/10/15/build-boost-library/
 [10]: https://www.netspective.com/knowledgebase/developer-sops/2012/10/16/build-log4cpp-from-source/
 [11]: https://www.netspective.com/knowledgebase/developer-sops/2012/10/16/build-websocket-legacy-from-source/
 [12]: https://www.netspective.com/knowledgebase/developer-sops/2012/10/16/build-mongodb-c-driver-from-source/
 [13]: https://www.netspective.com/knowledgebase/developer-sops/2012/10/16/build-fluent-from-source/
