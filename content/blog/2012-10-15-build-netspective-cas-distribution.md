---
title: Build Netspective CAS Distribution
author: Shahid N. Shah
type: post
date: 2012-10-15T12:21:34+00:00
url: /knowledgebase/developer-sops/2012/10/15/build-netspective-cas-distribution/
categories:
  - Developer SOPs

---
### Build Netspective CAS Distribution (.war)

You should not build CAS on a production server. Build it on an configuration management
  
server of some sort.

Make sure \[Java is available\](../../System Operations &#92;(SysOps&#92;)/Setting up Java.md):

    java -version
    

Make sure \[Maven is available\](../Setting up Maven.md):

    mvn -version
    

Get the custom CAS Netspective libraries:

    mkdir -p $HOME/build; cd $HOME/build
    git clone git@github.com:netspective/netspective-person-directory.git
    mvn clean install
    

Get the standard CAS distribution:

    mkdir -p $HOME/build; cd $HOME/build
    wget http://downloads.jasig.org/cas/cas-server-3.4.11-release.tar.gz .
    tar xvzf cas-server-3.4.11-release.tar.gz
    

Setup the Netspective CAS directory home (wherever the GIT source files are stored):

    export NETSPECTIVE_CAS_BUILD_HOME="$HOME/netspective-SOPs/Developer Operations (DevOps)/Netspective CAS"
    

Add dependency information:

    cd cas-server-3.4.11
    vi cas-server-webapp/pom.xml
    

Right before the &#92;</dependencies&#92;> tag, add the following

       <dependency>
           <groupId>${project.groupId}</groupId>
           <artifactId>cas-server-support-ldap</artifactId>
           <version>${project.version}</version>
        </dependency>
    
        <dependency>
            <groupId>org.jasig.service.persondir</groupId>
            <artifactId>netspective-person-directory</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
    
        <dependency>
            <groupId>org.jasig.cas3.extensions</groupId>
            <artifactId>clearpass-webapp</artifactId>
            <version>1.0.7.GA</version>
            <scope>runtime</scope>
            <type>war</type>
        </dependency>
    
        <dependency>
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
            <version>1.1.1</version>
        </dependency>
    
        <dependency>
            <groupId>net.sf.ehcache</groupId>
            <artifactId>ehcache-core</artifactId>
            <version>2.5.1</version>
        </dependency>
    
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.10</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.ldap</groupId>
            <artifactId>spring-ldap-core</artifactId>
            <version>1.3.1.RELEASE</version>
        </dependency>
    
        <dependency>
            <groupId>org.springframework.ldap</groupId>
            <artifactId>spring-ldap-core-tiger</artifactId>
            <version>1.3.1.RELEASE</version>
        </dependency>
    
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-ldap</artifactId>
            <version>3.1.0.RELEASE</version>
        </dependency>
    
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-beans</artifactId>
            <version>3.1.1.RELEASE</version>
    </dependency>
    

Put the [Netspective-specific CAS configuration files][1] into the source location:

    cp -rv $NETSPECTIVE_CAS_BUILD_HOME/deployerConfigContext.xml ./cas-server-webapp/src/main/webapp/WEB-INF
    cp -rv $NETSPECTIVE_CAS_BUILD_HOME/web.xml ./cas-server-webapp/src/main/webapp/WEB-INF
    cp -rv $NETSPECTIVE_CAS_BUILD_HOME/cas.properties ./cas-server-webapp/src/main/webapp/WEB-INF
    

Now build the CAS war file:

    mvn -Dmaven.test.skip=true clean install
    

It will take some time and after successful completion there created a war file (called cas.war) and can be found inside folder./cas-server-webapp/target.
  
Copy the war file over to Tomcat distribution (from the build server to the production server). For example:

    sudo cp -rv ./cas-server-webapp/target/cas.war /opt/tomcat/webapps
    

Restart Tomcat (this will unwar the cas.war file and install it into Tomcat):

    sudo -E /opt/tomcat/bin/catalina.sh stop
    sudo -E /opt/tomcat/bin/catalina.sh start

 [1]: https://www.netspective.com/wp-content/uploads/2012/10/Netspective-CAS-Configuration-Files.zip