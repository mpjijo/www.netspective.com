---
title: API Guidelines
author: Geo V.L
type: post
date: 2013-06-26T11:13:08+00:00
url: /knowledgebase/developer-sops/2013/06/26/api-guidelines/
categories:
  - Developer SOPs

---
Following are some common guidelines which need to follow every team members. Naming Structure and response should be some general REST Standard. We should restructure our all API&#8217;s with following guidelines

# Basic Structure

<div class="table-wrapper">
  <table class="simple" style="border: solid 1px #f2f2f2" border="1" cellspacing="3" cellpadding="3">
    <tr>
      <td valign="top" width="80">
        host
      </td>
      
      <td valign="top" width="75">
        category
      </td>
      
      <td valign="top" width="128">
        subject/subject/*
      </td>
      
      <td valign="top" width="69">
        {Name- Noun/*}
      </td>
      
      <td valign="top" width="72">
        {param, param/*}
      </td>
      
      <td valign="top" width="69">
        {format}
      </td>
    </tr>
    
    <tr>
      <td valign="top" width="80">
        {Base Url}
      </td>
      
      <td valign="top" width="75">
        api
      </td>
      
      <td valign="top" width="128">
      </td>
      
      <td valign="top" width="69">
      </td>
      
      <td valign="top" width="72">
      </td>
      
      <td valign="top" width="69">
        {format}
      </td>
    </tr>
    
    <tr>
      <td valign="top" width="80">
        {Base Url}
      </td>
      
      <td valign="top" width="75">
        lib
      </td>
      
      <td valign="top" width="128">
      </td>
      
      <td valign="top" width="69">
      </td>
      
      <td valign="top" width="72">
      </td>
      
      <td valign="top" width="69">
        {format}
      </td>
    </tr>
    
    <tr>
      <td valign="top" width="80">
        {Base Url}
      </td>
      
      <td valign="top" width="75">
        s
      </td>
      
      <td valign="top" width="128">
      </td>
      
      <td valign="top" width="69">
      </td>
      
      <td valign="top" width="72">
      </td>
      
      <td valign="top" width="69">
        {format}
      </td>
    </tr>
    
    <tr>
      <td valign="top" width="80">
        {Base Url}
      </td>
      
      <td valign="top" width="75">
        w
      </td>
      
      <td valign="top" width="128">
      </td>
      
      <td valign="top" width="69">
      </td>
      
      <td valign="top" width="72">
      </td>
      
      <td valign="top" width="69">
        {format}
      </td>
    </tr>
    
    <tr>
      <td valign="top" width="80">
        {Base Url}
      </td>
      
      <td valign="top" width="75">
        a
      </td>
      
      <td valign="top" width="128">
      </td>
      
      <td valign="top" width="69">
      </td>
      
      <td valign="top" width="72">
      </td>
      
      <td valign="top" width="69">
        {format}
      </td>
    </tr>
  </table>
</div>


  
Marked columns are mandatory in all apis</p> 

http://{baseurl}/{subject}/{ subject }/{scope}/{name}{format}

http://{baseurl}/{ subject }/{ subject}/{scope}/{name}/[{param1}/{param2}/&#8230;/{paramn}{format}

First part of API will be the base url of website that providing API. Major categories comes under this section are described below

  * api
  * lib
  * s
  * w
  * a

## api

This should be chatty, simple input/process/return with no context, stateless, no coupling, etc. If the first part consist of api in url it will be a fine grained services. For example a service call which returns name of a user with user id parameter ,the first part of this request will be api

## lib

If lib is the second field of API call that call will be for a library that should be return.

## s

If s is second part of the API call it should be a service. That means this request may have another internal functionalities and give final response. If API is a service it may not have direct result and it may have another api calls inside this

## w

If the response is a widget we should follow this letter as second parameter.

## a

If the API call returns an application we should use this letter as a second parameter in our API structure

### Examples

Base URL : http://mysitename.com

API Names

http://mysitename.com/api/*

http://mysitename.com/lib/*

http://mysitename.com/s/*

http://mysitename.com/w/*

http://mysitename.com/a/*

## Namespace

Namespace mainly consists company name or library name

## Scope

Scope mainly consists the product name or the package name where it resides.

## Name

Name of the api must consists sensible resource names. Appropriate resource names provides context for a service request, increasing understand-ability of the service API.

Resource names should be nouns avoid verbs as resource names. It makes things more clear. Use the HTTP methods to specify the verb portion of the request.

## Parameters

After this we can add multiple parameters and possibly we can add scope of project as third parameter and then api names and multiple parameters. We need to add format to the last parameter/apiname as following

http://mysitename.com/api/:namespace/:scope/:param1/apiname-in-noun.format
  
http://mysitename.com/s/:namespace/:scope/:param1/param2.format

## format

format part can contain return type. this may be some think like .json for JSON,.jsonp?callback= for JSONP , .xml for XML , .html for html etc&#8230;, If no returns then can kept format as empty.

# Best practices

  1. Use only singular (not plural) nouns in api names

eg: /api/scope/user/users

  1. Do not use verbs in api names

eg:/api/scope/user/getusers is wrong

  1. Use only small letters with dashes as separators (not underscores)

eg: /api/scope/user/Users &#8211; **is wrong**

# Major API Operations

GET &#8211; method is used to retrieve (or read) a representation of a resource.

POST &#8211; verb is most-often utilized for creation of new resources. For this purpose, the body of the request must contain the representation of the resource. also it can find useful in other situations, i.e. when updating several resources at once, on tunneling requests, or when avoiding browser limitations (like query size),search, pagination etc.

PUT &#8211; most-often utilized for update capabilities
  
DELETE &#8211; delete resources
  
HEAD &#8211; check for existence of a record or other operation that requires very fast response

# DOs and DON&#8217;Ts in API Creation

## Don&#8217;ts

  * Remove API name with verbs as per following

/api/addUser
  
/api/getUser
  
/api/updateUser
  
/api/deleteUser

## DOs

  * Use Nouns not Verbs
  * APIs are fine grained, not coarse grained; /s/ are coarse grained not fine grained (because they aggregate APIs)
  * Architectural style for use case scalability

/api/user ( POST )

/api/user/:id ( GET )

/api/user/:id ( PUT )

/api/user/:id ( DELETE )

# API Response

All APIs must have to follow a general response format as per following . In the case of POST we dont need to add payload in service. In GET we need to add Parameters in the response
  
`{'service' :<br />
{<br />
'originalURI' : '', // original URI<br />
'version' : 'X', // version of the service that handled request<br />
'handler': '/category/subject/X/Y', // the service URI that handled the request<br />
'param1' : 'param1Value',// the first parameter passed in<br />
'param2' : 'param2Value', // the second parameter passed in, etc.<br />
},<br />
'status' : 0, // <i>0</i> for success, non-zero for failure with descriptive status message<br />
'statusMessage' : 'key not found', // any error message that should be returned<br />
'results' : { ... } // whatever the service returns<br />
// may be empty if status is error<br />
}`

# Security and Authentication in API

If we are not implementing a public API system we must use at least one of these:

  * Identity &#8211; who is making an API request?
  * Authentication &#8211; are they really are who they say they are?
  * Authorization are they allowed to do what they are trying to do?

## API Identity vs. Authentication

Take Yahoo and Google maps they are fairly open. They want to know who you are but they aren&#8217;t concerned what address you are looking up. So they use an API key to establish identity, but don&#8217;t authenticate or authorize. So if you use someone else API key, it not good but not a serious security breach.

The API key lets them identify (most likely) who is making a API call so they can limit on the number of requests you can make. Identity is important here to keep service volume under control.

Then take Twitter API &#8211; open for looking up public information about a user, but other operations require authentication. So Twitter supports both username/password authentication as well as OAuth. Twitter also has authorization checks in its code, so that you cannot tweet on behalf of another user without either their password or an OAuth key to their account. This is an example of an API that implements identify, authentication and authorization.

## Usernames/Passwords And Tokens

Its easiest to use HTTP Basic authentication that most websites use. The advantage of using this technology is that nearly all clients and servers support it. There is no special processing required, as long as the caller takes reasonable precautions to keep the password secret.

## Add Response Headers

Add headers in each page response in the following format

HTTP Header X-[Org]-[App]-ContextItem

### Examples

X-Ryohee-MECARS-Enterprise-UserID=shahid.shah

X-Ryohee-MECARS-Enterprise-TenantID=XYZ

X-Netspective-Medigy-UserID=anonymous

X-Netspective-Medigy-UserID=shahid@shah.org

The idea is to take as much from the environment / context of the page and add them into HTTP headers so that we can do packet analysis in the future when we need it.

Developers can add as many different HTTP headers for each application where it makes sense. For example page gen time, user ID, etc. might all be good to have.

Points to be noted :

  * Authorize base on resource content not url
  * Use any existing protocol like oauth 1.0a,oauth2 ,ssl
  * Use API Keys that username and passwords

For implement a secure API we need to add all better the properties to our API implementation

# API Examples

<table width="583" border="1" cellspacing="0" cellpadding="0">
  <tr>
    <td valign="top" width="583">
      <b>Ryohee</b>/s/ryohee/mecars/*/api/ryohee/mecars/user/*/api/ryohee/mecars/user/users.json &#8212; list all users but the API key says which users they can see</p> 
      
      <p>
        GET
      </p>
      
      <p>
        /api/ryohee/mecars/user/{userId}.json &#8212; get single user
      </p>
      
      <p>
        POST
      </p>
      
      <p>
        /api/ryohee/mecars/user/{userId}.json &#8212; save single user
      </p>
      
      <p>
        /api/ryohee/mecars/user/*.json
      </p>
      
      <p>
        /w
      </p>
      
      <p>
        /a
      </p>
      
      <p>
        <b>Physia</b>
      </p>
      
      <p>
        /api/party/party-name/1.json
      </p>
      
      <p>
        /api/party/party-name-suggestions/jo.json
      </p>
      
      <p>
        /s/party/party.json
      </p>
      
      <p>
        /s/party/person.json
      </p>
      
      <p>
        <b>FormsNG</b>
      </p>
      
      <p>
        /s/form/data/library/registrations.json
      </p>
      
      <p>
        /s/form/data/library/test/registration.json
      </p>
    </td>
  </tr>
</table>