# What is the signature format outputted by the functions signData and signHash?

The functions `signData` and `signHash` perform a *digital signature* ***algorithm*** using the private key of one of the
user's certificates. Therefore, their output is the raw output of the algorithm, encoded in Base64. In the most common case
of an RSA algorithm using a 2048-bit key, the output is 256 bytes long (344 characters in Base64).

This question normally arises from the confusion between a *digital signature*, such as CMS/CAdES, XmlDSig/XAdES and PAdES,
and a *digital signature* ***algorithm***, such as RSA. Usually, digital signature algorithms are a small part of the
implementation of digital signatures. The `signData` and `signHash` perform only the algorithm, not the entire digital
signature.

Please see the FAQ [How can I perform a digital signature with Web PKI?](digital-signature.md) for information on how to use
Web PKI to perform digital signatures.
