---
title: Website Identity – the root cause for Internet Fraud
author: Eashwar Ganapathy
type: post
date: 2009-05-14T19:22:18+00:00
excerpt: "On the internet there are 2 types of websites - ones that take sensitive information from you and ones that don't. Online banking applications, shopping applications, stock-trading applications are examples of the former; while CNN, Google etc are examples of the latter. This article deals with the very real insecurities of working with applications of the former variety and the root cause for their existence - the nature of website identity in the contemporary internet environment."
url: /uncategorized/2009/05/14/website-identity-the-root-cause-for-internet-fraud/
categories:
  - Netspective Blogs
  - Uncategorized
tags:
  - Authentication
  - Security

---
[This thought paper is from <a title="Rel-Id Technologies Inc." href="http://www.rel-id.com" target="_blank">Rel-ID Technologies Inc.</a> &#8211; a <a title="Uniken" href="http://www.uniken.com" target="_blank">Uniken</a> venture]

**Authors** <a href="mailto://sanjay.deshpande@rel-id.com" target="_blank">Sanjay Deshpande</a>, <a href="mailto://pat.shankar@rel-id.com" target="_blank">Dr. Pat Shankar</a>, <a href="mailto://eashwar@rel-id.com" target="_blank">Eashwar Ganapathy</a>

**Abstract** On the internet there are 2 types of websites &#8211; ones that take sensitive information from you and ones that don&#8217;t. Online banking applications, shopping applications, stock-trading applications are examples of the former; while CNN, Google etc are examples of the latter. This article deals with the very real insecurities of working with applications of the former variety.

<span style="text-decoration: underline;"><strong>How do you know that you are at an authentic website? </strong></span>_ <span style="text-decoration: underline;"><strong>What if you are not?</strong></span>_

Authenticating a website implicitly assumes you already know what to look for in the website, in order to establish the websites identity &#8211; which in turn implicitly assumes you know what constitutes the identity of a website. Let us define WEBSITE IDENTITY to be _a set of identifiers that can be authenticated to prove the identity of the website_. Currently, there are only 3 identifiers that constitute WEBSITE IDENTITY &#8211; (1) URL, (2) CONTENT, and (3) SSL/TLS CERTIFICATE. Furthermore, let us note that _&#8211; any kind of authentication of any identity mandatorily requires <span style="text-decoration: underline;"><strong>a priori knowledge</strong></span> of the identity information_.

In this article we shall delve deeper into the above constituents of WEBSITE IDENTITY, and conclusively prove that they are fundamentally incomplete, leaving you &#8211; the internet-user, at the mercy of fraudsters who use this knowledge to their benefits, by sending fraudulent emails with links to similar looking websites.

<span style="text-decoration: underline;"><strong>The Website URL</strong></span> &#8211; when one sets up a website the first thing one does is to register the domain name (www.mywebsite.com) &#8211; that is the primary identifier for the website. More often than not, this is the ONLY identifier &#8211; for first-time visitors.

Let us say the website&#8217;s domain name is communicated to you by the owner of the website directly/indirectly through trusted channels. In this case, since the identity information for the website has been communicated from a trusted source, the problem of authenticating the website reduces to authenticating the identifier &#8211; ensuring that the website you are visiting is authentic.

What if the website&#8217;s domain name is communicated to you through channels that you cannot necessarily trust &#8211; the first question that arises is how would you know for sure that this identifier indeed belongs to the correct website.

For example, let us assume you are a customer of Bank of America. How would you know for sure that www.bankofamerica.com is the correct website if it has not been communicated to you by the bank? What if someone told you or you searched on the internet and got the website name to be www.boa.com instead, what would you do?

Do you know how to confirm the ownership of a given URL/Domain Name before using it? Further, even if the OWNER (let&#8217;s say the bank in this case) told you what to check (assuming there was a way to get this information) &#8211; if you have not received the information from a TRUSTED source, how do you verify that the information is correct?

NOTE that the DOMAIN REGISTRATION entities (companies that issue the domain name) do not verify the information provided by the individual who is registering the domain (website address).

NOTE that there is no central TRUSTED repository where you can find the WEBSITE NAME for a given OWNER. There are services like www.who.is that give you information about who has registered the DOMAIN. However, since the domain registration entities do not authenticate or validate the owner of the website name which means any one can register any name and own it what use is this information anyway!

<span style="text-decoration: underline;"><strong>Website Content</strong></span> &#8211; Let us move on to the next identifier of the website the content. Most users confirm the authenticity of the website based on just the visual cues and verifying the visual cues every time they visit the website.

The very nature of HTTP and HTML (the protocol and language used to retrieve and render website content, respectively) allows one to stream information/content from multiple sources. Which means, even if the visual cues are the same, how do you confirm the validity of the content &#8211; what if someone has tampered the content and/or it is being served from somewhere else? Further, if you are visiting the website for the first time and the owner has NEVER communicated what the website should look like in the first place, how would you authenticate the website&#8217;s content?

The website content the HTML document &#8211; is available for any one to view, copy and save. It is a trivial task to scrape content off an authentic website (using a browser or wget or website copiers such as HTTrack etc), register a similar (but not identical) website, and put up the same content there &#8211; a COUNTERFEIT WEBSITE.

Let us say there are 2 URLs A and B that are displaying contents Ca and Cb &#8211; each implying that the website belongs to the same company X. If the company X has not communicated the correct URL(s) to its users &#8211; how would you confirm that the URL you are browsing (A/B) indeed belongs to the company X? If you conclude incorrectly, you could end up providing valuable information to a counterfeit / fraudulent website!

<span style="text-decoration: underline;"><strong>Digital Certificates</strong></span> &#8211; By far the most popular method of registering, certifying and verifying identity on internet.

The anti-trust laws in this part of the business world are laughable &#8211; to become a valid certification authority one just has to be affiliated to the company called VERISIGN directly or indirectly &#8211; isn&#8217;t this a fundamental violation of the anti-trust laws? VERISIGN (www.verisign.com) is neither a government nor an international body.

If you navigate to www.patentoffice.nic.in, the official website of India&#8217;s Patent Office and visit their e-filing section, most browsers say this could be a fraudulent website &#8211; because the certificate is not issued by VERISIGN or any of its affiliated certification authorities (it is issued by a company called NCODE SOLUTIONS &#8211; one of the valid root certificate authorities in India). Not just that, the address-bar turns RED.

Who decided that one has to trust VERISIGN? And why does that mean one has to trust all certification authorities certified by VERISIGN? Most consumers do not even know VERISIGN &#8211; MicroSoft, maybe, but not VERISIGN. In their defence &#8211; given the fundamental flaw with the Certification Authority scheme &#8211; there really was no solution but to pick up a bunch of &#8216;root CAs&#8217; and declare them as the TRUSTED AUTHORITY.

An end-user has no A PRIORI knowledge of the certificate issued to an entity. The transaction (or act) of getting a certificate is a private transaction between the entity (for eg. a bank) and the CA (Certification Authority). This information is never distributed to the end-user and he/she in turn is in no way equipped to verify this information. How can a 3rd party (the CA) vouch for the authenticity of an entity to the end-user? Does it make sense for a child to ask a visitor (a stranger) to vouch for the authenticity of his/her mother? But that is what it is. Why is there a necessity for a 3rd party like VERISIGN (or its derivative CAs) to verify the identity between 2 parties who already share a primary relationship (like bank-customer or enterprise-employee &#8230;)?

The original premise of the SSL protocol (that uses these certificates) was to establish an encrypted communication channel between two UNTRUSTED parties. What completely defies logic is &#8211; what good would an encrypted channel be between two UNTRUSTED parties?!

Banks and other e-commerce websites boldly declare that they are secure &#8211; they have SSL/TLS enabled websites. What good is it when the user does not know what to verify? He/She does not have a-priori knowledge of the information that should be present in the website&#8217;s certificate &#8211; such as the signed content, the public-key in use etc.

The CA infrastructure and the current SSL protocol violate the basic principles of IDENTITY and AUTHENTICATION &#8211; that <span style="text-decoration: underline;">IDENTITY must be established first and then verified between 2 (now) trusted parties &#8211; using information shared during IDENTITY ESTABLISHMENT</span>.

The above discussion conclusively proves that the three primary identifiers  _WEBSITE URL, CONTENT and (optionally) PKI-based CERTIFICATES are incomplete as website identifiers_. They leave the user at the mercy of fraudsters who use this knowledge to their benefit &#8211; sending fraudulent emails with links of similar looking counterfeit websites, luring the ignorant users to divulge sensitive information to the wrong websites.

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->

<!--Session data-->