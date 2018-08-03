---
title: A Radical New Approach to (MUTUAL) Authentication
author: Eashwar Ganapathy
type: post
date: 2009-05-19T14:57:01+00:00
excerpt: In this article, we present a fundamentally new identity framework RELATIVE IDENTITY which addresses and eliminates many of the core problems faced by the current identity technologies. We postulate that authentication necessarily has to be mutual and that the only valid way to perform mutual authentication is to make fundamental changes to the identity representation framework.
url: /blog/a-radical-new-approach-to-mutual-authentication/
categories:
  - Netspective Blogs
  - Uncategorized
tags:
  - Authentication
  - Identity Systems
  - Security

---
[This thought paper is from [http://www.rel-id.com/](Rel-ID Technologies Inc.) &#8211; a [Uniken](http://www.uniken.com/) venture]

**Authors** [Sanjay Deshpande](mailto://sanjay.deshpande@rel-id.com), [Dr. Pat Shankar](mailto://pat.shankar@rel-id.com), [Eashwar Ganapathy](mailto://eashwar@rel-id.com)

**Abstract** In this article, we present a fundamentally new identity framework RELATIVE IDENTITY &#8211; which addresses and eliminates many of the core problems faced by the current identity technologies. We postulate that authentication necessarily has to be mutual and that the only valid way to perform mutual authentication is to make fundamental changes to the identity representation framework.

This can be accomplished by 

  1. Changing from end-point entity labeling (like in the case of login/password, biometric, digital certificates, 2-Way SSL and a combination of these) to labeling the relationship between the end-point entities (which inherently covers the two end-points in its definition)  
  2. Making the authentication protocol truly mutual and thereby eliminating the susceptibility to man-in-the-middle attacks and phishing

Identity and identification are central to any interaction, both in real and virtual (digital) systems. Especially where the interaction entails access to or manipulation of protected resource(s).

We firmly believe that any identity framework has to address the problem of establishing a mutually-authenticated secure connection BEFORE initiating any data transaction using that connection.
  
**Introduction** Identity and Authentication form the central building block of any information security solution/framework. Establishing identity using an authentication protocol is the starting point for any secure transaction. In order to be able to establish identity (be it man or machine), the entity must be characterized by a unique set of symbols (as per the adopted identity representation framework). During the process of actually identifying / authenticating the entity, the same characteristics of the entity are observed and matched against those that were captured earlier and associated with the entity.

The act of establishing identity is identification. Identity Systems must possess the capability represent, provide, maintain and establish identity. The identity representation framework must ensure that it is extremely difficult to compromise the individual identities it is used to represent. In this article we cover the following points:

  1. Definition of **REL**ative **ID**entity the representation
  2. Fundamental properties of identity (representation)
  3. Proof that all authentication must necessarily be mutual ( that 1-way authentication basically flawed)
  4. Fundamental properties of authentication / identification (the process of)
  5. How is Relative Identity different from other identity schemes

The basic flaws and limitations in current identity technologies for websites prevalent in the World Wide Web SSL/Digital Certificates (when used for AUTHENTICATION) become apparent in the context of the axiomatic frame of reference defined in the following sections.

**Definition of Relative Identity** The relative identity of an entity is

  1. Distributed among the relationship of this entity with other entities. Each such valid relationship 
      * constitutes a unit Relative Identity an important and inseparable constituent of the identities of each of the entities sharing a valid relationship
      * contributes in the definition of the relative identity of each entity
      * exists only in the context of two (or more) entities who share a relationship
  2. Is the union/collection of all such Relative Identities
  3. Is dynamic since new relationships may be established, while old relationships may be discarded, over time
  4. Is associated with a set of labels/attributes/characteristics immutable and mutable 
      * immutable &#8211; such as biometrics, which cannot be changed at will
      * mutable &#8211; such as SSN which are awarded for life time, log in passwords, bank account numbers which are changed quite often

In practical implementations of identity based transactions, one is concerned only with the specific (relevant) relative identity and associated attributes, and hence the rest of the identity representation is not susceptible to identity theft.

#### As is evident from the above definition, the concept of identity in the prevalent conventional identity systems that deal with only labels/attributes/characteristics _What you have__What you know_ and _What you are_, totally ignore the most relevant concept of _**Who you know**_which is how humans establish trusted relationships.

**Fundamental Properties of Relative Identity**

The unit relative-identity data &#8211;

  1. must be _unique_ (no two relative-identities should have the same identity data)
  2. must be _tamper-proof_ (difficult to reconstruct and reproduce)
  3. must be _secret_ &#8211; wholly / partially (should not be communicated in full form during authentication; should be known only to the related entities)
  4. must be used _simultaneously_ and _uniquely_ , to identity all entities involved in the authentication transaction

Most of the prevalent conventional identity systems satisfy properties 1, 2 and 3 above. For example &#8211;

  * Login/Password would satisfy 1, 2 (partially) and 3 (partially)
  * Digital Certificates would satisfy 1, 2 and 3 (partially)

#### What is Mutual Authentication/Identification? Why does one need it?

As yourself the following questions &#8211;

  * what is the meaning of authentication if it is not mutual?
  * why would I allow someone to authenticate me, if I can&#8217;t authenticate him/her?
  * would I produce my passport to identify myself to someone who does not (even seemingly) possess the requisite authority?
  * Even so, don&#8217;t I run the risk of being duped into producing my passport to a person who only looks authentically like he/she has the requisite authority?

The basic flaw in identification over the internet is that an end-user assumes that the website challenging him/her for his/her credentials is indeed the authentic site so long as interaction with the user-agent application (the web-browser) while accessing the website, is identical to previous such interactions. That is to say so long as the website looks the same, behaves the same, and does not trigger a negative message from installed security products (due to more recent efforts in the anti-phishing features of these products).

All things considered, are you sure you can trust such a website that asks for your login credentials?

**Conclusion**: _Authentication, to be of any practical use, MUST BE MUTUAL
  
_ 

#### Fundamental properties of authentication / identification

The process for identification / authentication

  1. must be tightly integrated with a given/underlying identity representation
  2. must necessarily have a priori access to the identity data that is to be identified / authenticated
  3. must necessarily authenticate all identifying/authenticating parties (entities) preferably simultaneously

These are simple (minimal) properties that any identity/authentication system must possess. Some of them are straightforward while some may not be seem obvious.

Let us now visit some of the prevalent identification/authentication processes in light of the above properties &#8211;

  * Login/Password satisfies 1 and 2 above
  * Digital Certifications/SSL does not satisfy 2 and 3, and hence, should NOT be used for authentication
  * Hardware/Software Tokens (and OTPs) satisfy 1 and 2 but do not satisfy 3

Please note that even the use of multi-factors satisfy only properties 1 and 2 and not the property 3

Let us look at the third property above for authentication protocols that essentially says that &#8211; the process MUST be mutual and simultaneous. The term mutual has earlier been defined in the context of client-server architecture as client must authenticate the server and the server must authenticate the client. Such a definition classifies any 1-way authentication method executed twice as a valid 2-WAY or mutual authentication process. The fundamental flaws in existing mutual and 1-Way authentication systems are precisely due to the violation of properties (2) and (3) above.
  
Mutual authentication cannot and should not be implemented using two 1-WAY authentication schemes e.g. 2-Way SSL, or a combination of login/password and shared secrets/site-key. Any such scheme will be vulnerable to the same attacks that the 1-WAY equivalent is vulnerable to. For example, 2-WAY SSL is susceptible to MITM (man-in-the-middle) in exactly the same way that 1-WAY SSL is &#8211; for the same reasons.

#### How is Relative Identity different from other identity schemes?

Conventionally, identity is associated with the end-point entities (client or server) and authentication involved authenticating the end-points. Authenticating this information for both end-points in sequence is NOT secure mutual authentication it is a concatenation of 2 instances of 1-WAY authentication.

The REL-ID (relative identity) approach to authentication is to identify and authenticate the link/relationship between the end-point entities not the individual end-points. That is to say IDENTITY must necessarily be associated with the link representing the relationship between the end-points. This is the only representation, and authentication thereof, that can legitimately be termed as MUTUAL as the end-points are an integral part of the definition of any such representation.

Authenticating such a link would necessarily be mutual would ensure that all end-points are authenticated simultaneously, and makes the identity of every end-point relative to the other end-point(s) axiomatically.

  
Relative-Identity System

We believe that, in order to (a) represent the above information correctly at the end-points and (b) arrive at the correct protocols for identification/authentication, one must develop the necessary mathematical frameworks and algorithms. However, before starting to derive them, one must accept and acknowledge the fundamental paradigm shift in the desired properties of such representations and algorithms.

The set of identity representations and identification/authentication algorithms constituting the REL-ID Security Suite is one such implementation of the identity paradigm described here. Assuming that authentication must necessarily be mutual and simultaneous to be of any value, authentication schemes such as tokens, digital-certificates/SSL, login/password cannot be compared with REL-ID since they offer only 1-WAY authentication, at best. Furthermore, methods/products that claim to provide mutual authentication, but in reality implement two 1-WAY authentications (like SITE-KEY flash-persistent object; Shared Secrets), will remain vulnerable to man-in-the-middle attacks due to the inherent vulnerability in the conventional end-point identity representation scheme.

#### There are no known contemporary technologies/products that are built using mutual authentication protocols, which have the properties mentioned in this article, and which are available commercially.