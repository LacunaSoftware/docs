# What is the difference between the functions signData and signHash?

The both fuctions -- `signData` and `signHash` -- perform a digital signature algorithm using the
one of the certificates present on the user's machine. To understand the difference between the two functions, we need to talk
quickly about the details of a signature algorithm.

> [!NOTE]
> The term *digital signature* ***algorithm*** not to be confused with *digital signature*. Read more about
this subject in the article [Digital signatures](../../pki-guide/signatures.md).

The RSA algorithm, in general, has 4 steps:

1. Hash calculation of bytes to be signed
1. Structure coding [DigestInfo](https://tools.ietf.org/html/rfc2313#section-10.1.2) containing the hash and OID of the hash algorithm used to produce it
1. *Padding* codificated of DigestInfo
1. Mathematical operation on coded DigestInfo and *padded*

> [!NOTE]
> The hash calculation performed in the first step is usually not **about the document being signed**. In the CMS/CAdES, PAdES, and XmlDSig / XAdES signature schemes,
> the bytes used as input to the signature algorithm correspond to the encoding of the "signed attributes", a 
> structure that contains miscellaneous data, including the document hash.

The fuction `signData` receives *to-sign-data* and performs all the steps on it, while the function `signHash` receives *to-sign-hash*, this is, the hash precomputed from *to-sign-data*, and realize about him
only from the second step onwards.

The both fuctions can be used in the implementation of [web remotes signatures](../../pki-guide/web-signatures/remote.md)
regardless of the subscription scheme (CAdES, PAdES, etc.) being used. The choice of function to use
depends on *output* provided by backend code at the end of remote signature "staging". If produced an *to-sign-data*, use the fuction `signData`. If produced an *to-sign-hash*, use the fuction `signHash`.