---
title: 2-WAY SSL == TWICE PHISHED
author: Eashwar Ganapathy
type: post
date: 2009-05-18T17:16:26+00:00
url: /uncategorized/2009/05/18/2-way-ssl-twice-phished/
categories:
  - Netspective Blogs
  - Uncategorized
tags:
  - Digital Certificates
  - SSL
  - TLS

---
[This thought paper is from <a title="Rel-Id Technologies Inc." href="http://www.rel-id.com" target="_blank">Rel-ID Technologies Inc.</a> &#8211; a <a title="Uniken" href="http://www.uniken.com" target="_blank">Uniken</a> venture]

**Authors** <a href="mailto://sanjay.deshpande@rel-id.com" target="_blank">Sanjay Deshpande</a>, <a href="mailto://pat.shankar@rel-id.com" target="_blank">Dr. Pat Shankar</a>, <a href="mailto://eashwar@rel-id.com" target="_blank">Eashwar Ganapathy</a>

<span style="text-decoration: underline;"><strong>Basics of Identity and Authentication</strong></span> &#8211; In order to be able to identify / authenticate any entity (be it man or machine), the entity must be characterized by a unique set of symbols, as per the adopted representation scheme. During the process of actually identifying / authenticating the entity, these characteristics are observed and matched against those that were captured earlier and associated with the entity.

The act of **establishing identity** is **identification**. An Identity System must be able to represent, provide, maintain and establish identity. The identity representation framework must ensure that it is extremely difficult to compromise the individual identities it deals with. Identity and identification are central to any interaction, both in real and virtual (digital) systems, typically where the interaction entails access to or manipulation of protected resource(s).

For example, we are identified by our name, social security number, passport number, national ID card, fingerprint, voice print, DNA print etc. The context of identification determines the parameters used to determine the identity. While establishing our identity, one or more of these characteristics are elicited / captured from us, and matched against _**previously captured and stored**_ characteristics.

Let&#8217;s take a look at prevalent IDENTITY TECHNOLOGIES

  * **Login-Password** The login-password is captured and stored A PRIORI with the server and then compared with the login-password that is presented before subsequent interactions with the login-password-secured system.
  * **Biometrics (fingerprint/voice/DNA/iris-scan)** The biometric is captured and stored A PRIORI and then compared with the biometric data that is presented before subsequent interactions with the biometric-secured system.
  * **Photo-ID Cards** After verifying that the Photo-ID Card is authentic using a system with a card-reader, the PHOTO on the ID-CARD is matched with the individuals face as well as the system-retrieved photo expected to be on the card.

Note that **AUTHENTICATION NEEDS <span style="text-decoration: underline;">A PRIORI</span> INFORMATION**.

<span style="text-decoration: underline;"><strong>PKI, Digital Certificates, SSL and Authentication</strong></span> &#8211; PUBLIC KEY CRYPTOGRAPHY, aka _Asymmetric Cryptography_, is a form of cryptography in which the key used to encrypt a message differes from the key used to decrypt it; the user has a pair of keys &#8211; a _public key_ and _private key_. The private key is kept secret, while the public key may be widely distributed. The keys are related mathematically, but the private key cannot be computationally derived from the public key in &#8216;reasonable&#8217; time, and vice versa. Messages encrypted with the public key can only be decrypted with the corresponding private key and vice versa. Further, in conjunction with a _signing algorithm_ and a _signature-verification algorithm_ the _key pair_ can be used to send _verifiably signed messages_

The two main branches of public key cryptography are &#8211;

  * **Public Key Encryption** &#8211; A message encrypted with a recipient&#8217;s public key cannot be decrypted by anyone but the recipient (using his/her corresponding private key). This ensures confidentiality of messages thus encrypted. An analogy for public-key encryption is that of a locked mail slot. The mail slot is exposed and accessible to the public &#8211; its location (the postal address) is, in essence, the public key. Anyone who knows the location can go to the door and drop a message through the slot. However, only the person who possesses the key can open the mailbox and read the messages.
  * **Digital Signatures** &#8211; A _signing algorithm_, given a message and the private key, produces the _signature_. And a _signature verification algorithm_, given a message, its signature and the correct public key, can verify that the message has not been modified with since signing (generation of the signature). This ensures non-repudiation of the message thus sent. An analogy for digital signatures is the sealing of an envelope with a personal wax seal. The recipient checks that the seal is intact and corresponds to that of the sender, before opening the message.

A central problem in public-key cryptography is proving that a public key, which is publicly available, is authentic, and has not been tampered with, or replaced, by a malicious 3rd party. This problem is solved by using a **Public Key Infrastructure (PKI)**, in which one or more 3rd parties, called _**Certificate Authorities** **(CA)**_, certify ownership of key pairs. Another approach, used by PGP, is the &#8216;_**web of trust**_&#8216; method to ensure authenticity of key pairs.

In **PKI**, a public key certificate (or digital certificate) is an electronic document which incorporates a digital signature to bind together a public key with an identity &#8211; information such as the name of a person or organization, their address&#8230; The certificate can be used to verify that a public key belongs to an entity. In practice this verification entails verifying that the digital signatures in the certificate were indeed generated using the correct private keys. In a typical PKI scheme, the signature is generated by a Certifying Authority (CA). In a web of trust scheme, the signature is either from the owner (a self-signed certificate) or another user (&#8216;endorsements&#8217;). In either case, the signatures on a certificate are attestations by the certificate signer that the information in the certificate and the public key belong together.

**Why do websites face PHISHING attacks even after adopting DIGITAL CERTIFICATES and SSL technology? What exactly is wrong with DIGITAL CERTIFICATES?**

In the 1990&#8217;s the DIGITAL CERTIFICATE technology was introduced by VERISIGN bundled with NETSCAPE. The idea was to issue certificates to entities requesting one from VERISIGN. This technology was based on the PKI scheme (made popular by RSA in the 1980&#8217;s). The term Certificate Authority was born and VERISIGN became the first such CA. Eventually other entities could become CAs by purchasing special certificates from VERISIGN or other CA&#8217;s and a CA chain came in to existence. The browser technology then invented by NETSCAPE incorporated the certificate technology and along with the SSL protocol became the de facto standard for SECURE INTERNET TRANSACTIONS. Since then this technology, that has been assumed to secure the internet transactions, went on to become a regulatory requirement for most institutions world-over.

Quite frequently, due to evolution, and at times mass acceptance of a technology, the industry seems to overlook some basic but extremely FUNDAMENTAL aspects of technology. Such ignorance (though unintentional) leads to serious security flaws that are exploited by fraudsters.

_DIGITAL CERTIFICATES ARE VERIFIED NOT IDENTIFIED (or AUTHENTICATED) SINCE THERE IS NO DIRECT A PRIORI KNOWLEDGE ABOUT THE CERTIFICATE WITH THE VERIFYING PARTY / PROGRAM_.

The Secure Sockets Layer (SSL) and the Transport Layer Security (TLS) protocols use DIGITAL CERTIFICATES to establish a secure connection between a SERVER and a CLIENT. They are MEMORY-LESS protocols they were designed to be so in order to make existing and newly developed web applications integrate with them seamlessly &#8211; for seamless interoperability. Both protocols are based on CERTIFICATE VERIFICATION. This proves to be a fundamental, subtle and yet non-trivial loophole when used for AUTHENTICATION there is NO A PRIORI knowledge about the CLIENT or SERVER side certificates available at the verifying side of the connection, during the protocol exchange. A priori knowledge is a fundamental requirement for any AUTHENTICATION PROTOCOL, be it 1-WAY or 2-WAY.

Although the SERVER has a DIGITAL CERTIFICATE which is used to establish a secure SSL connection with the CLIENT the CLIENT does not have any A PRIORI knowledge of this CERTIFICATE (public key). The SSL protocol only VERIFIES that the CERTIFICATE IS VALID and was issued by the valid CA (as per the contents of the certificate). The equivalent in real life would be to accept an ID card as valid simply because the card has not been tampered with although the person carrying the card may not be the same person you are trying to authenticate.

Due to this flaw any application can claim to be the right or authentic SERVER to a CLIENT as long as it has a VALID certificate &#8211; the same argument can be extended if one is using a CLIENT CERTIFICATE as well (in case of 2-WAY SSL). If 1-WAY SSL protocol is a VERIFICATION protocol how can 2-WAY SSL protocol claim to eliminate the fundamental issues of AUTHENTICATION since a 2-WAY SSL PROTOCOL is equivalent to 2 instances of the same 1-WAY SSL VERIFICATION PROTOCOL implemented on both CLIENT and SERVER side.

<img class="aligncenter size-full wp-image-111" src="http://www.federalarchitect.com/wp-content/uploads/2009/05/2-way-ssl-mitm.jpeg" alt="2-way-ssl-mitm" width="891" height="299" />

**Have we missed something when it comes to using certificate technology as an identity system for IDENTIFYING WEBSITES?**

As per the SSL Protocol, the client confirms that the CERTIFICATE produced by the server is VALID that the contents of the certificate have not been tampered with, and that the domain name in the certificate indeed is the same as the domain name to which you are currently connected. That is to say, **a CERTIFICATE can only be VERIFIED to the extent of the claims made on it** that it belongs to the ENTITY that has presented the CERTIFICATE. However, the client cannot confirm whether it is the SAME ENTITY that the USER is trying to connect to.

A fraudster gets a CERTIFICATE issued to himself/herself, with a domain name that sounds or looks similar, and presents the CERTIFICATE to the user the SSL/HTTPS layer will NOT be able to tell you whether the USER is indeed connected to the website he/she wants to connect to. This loophole is not addressed and cannot be addressed in the way the DIGITAL CERTIFICATE TECHNOLOGY and SSL are implemented in the internet today.

**Is it possible to correct the present system of DIGITAL CERTIFICATES?**

No. Since it would mean a sea change in the entire process of creating, issuing, distributing and identifying the certificates.

**If one has implemented the DIGITIAL CERTIFICATE Technology, does that mean their IDENTITY cannot be compromised?** [priligy online][1], [buy lioresal][2] 

Well, one can make their own educated judgment based on the arguments presented in this article.

According to us, ONCE the IDENTITY has been confirmed, the CERTIFICATE technology could be used to exchange encryption keys, and secure the transaction IT SHOULD NOT BE USED TO ESTABLISH or AUTHENTICATE THE IDENTITY.

**Why not?**

The reason why DIGITAL CERTIFICATE TECHNOLOGY is what it is today is because of the fundamental nature of online applications. Digital Certificates themselves are tools to ensure that a given datum communicated from one end to the other is not tampered with and is signed using the private secret corresponding to the publicly available certificate. The use of digital certificate technology between an all-purpose web-browser and any specific security-critical application can at best be described as a marriage of convenience essentially because online applications came first!

<span style="text-decoration: underline;"><strong>Conclusions</strong></span>

  1. The fundamental tenet of securing any application is to uniquely, unambiguously and reliably identify the user of the application before authorizing and executing any action on the identified user&#8217;s behalf.
  2. Furthermore, any centralized and fully automated trust-building mechanism for capturing, storing and verifying the trust between essentially anonymous entities across wide spectra of businesses and geographies will come with inherent weaknesses they will be as secure as the weakest link in the security chain built around it.

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

<!--Session data-->

 [1]: https://pills24h.com/buy-dapoxetine-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-lioresal-baclofen/