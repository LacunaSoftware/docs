# PKI Express Return Codes

The PKI Express operations have a set of return codes shown bellow with the meaning of each one.

| Return Code                         | Meaning                                                                          |
|-------------------------------------|----------------------------------------------------------------------------------|
| 00 - Ok                             | Operation completed successfully                                                 |
| 01 - BadSyntax                      | Parameters do not match the expected format                                      |
| 02 - UnknownError                   | Unknown error                                                                    |
| 03 - FileNotFound                   | File not found                                                                   |
| 04 - BadCertificate                 | Error decoding certificate file                                                  |
| 05 - BadThumbprint                  | Invalid thumbprint                                                               |
| 06 - BadHash                        | Invalid To Sign Hash or could not infer the digest algorithm from the given hash |
| 07 - BadData                        | Invalid To Sign Data                                                             |
| 08 - BadSignature                   | Invalid Signature                                                                |
| 09 - BadAlgorithm                   | Invalid Algorithm                                                                |
| 10 - BadPolicy                      | Invalid Policy                                                                   |
| 11 - BadVisualRep                   | Error parsing visual representation parameters file                              |
| 12 - UndefinedFileReference         | Undefined file reference                                                         |
| 13 - CertNotFound                   | Certificate not found                                                            |
| 14 - ValidationFailed               | Validation failed                                                                |
| 15 - IOError                        | Error reading file                                                               |
| 16 - NoCertsWithKey                 | PFX file does not contain any certificates with private key                      |
| 17 - NotActivated                   | Not Activated PKI Express                                                        |
| 18 - ActivationError                | Fail to activate PKI Express                                                     |
| 19 - BadLicense                     | Invalid Base-64 of activation license                                            |
| 20 - LicenseNeeded                  | No given license file                                                            |
| 21 - InvalidLicense                 | Invalid license                                                                  |
| 22 - AccessDenied                   | Missing permission to modify PKI Express settings                                |
| 23 - CertThumbNeeded                | No given thumbprint                                                              |
| 24 - BadPdfChanges                  | Error occurred while processing changes to PDF                                   |
| 25 - UpdateNeeded                   | Operation requires a newer version of PKI Express                                |
| 26 - DataFileNeeded                 | No given Data File                                                               |
| 27 - NoEncapsulatedContent          | Missing encapsulated content                                                     |
| 28 - NonceNotFound                  | Nonce not found                                                                  |
| 29 - DirectoryNotFound              | Directory not found                                                              |
| 30 - TimestampAuthorityNotAvailable | Timestamp requester failed                                                       |
| 31 - PolicyRequiresNetwork          | Chosen policy requires network (offline mode not supported)                      |
| 32 - TimestampOptionsRequired       | No given timestamp authority's address                                           |
| 33 - CultureNotFound                | Culture not found                                                                |
| 34 - TimeZoneNotFound               | TimeZone not found                                                               |
| 35 - InvalidUtcOffset               | Invalid UTC offset                                                               |
| 36 - KeySizeNotSupported            | Unsupported key size                                                             |
| 37 - BadKeyFormat                   | Unrecognized key format                                                          |
| 38 - BadKey                         | Invalid key                                                                      |
| 39 - InvalidTimeoutValue            | Invalid timeout value                                                            |
| 40 - CertificateMismatch            | Provided certificate file does not correspond to the stored key                  |
| 41 - KeyNotFound                    | Key not found                                                                    |
| 42 - NoCertificateFile              | No given certificate file                                                        |
| 43 - BadCertificationLevel          | Invalid certification level                                                      |

## Validation Errors

Validation errors occur during signatures or authentications or inspections with validation.

| Validation Error                        | Meaning                                                                            |
|-----------------------------------------|------------------------------------------------------------------------------------|
| Success                                 | Validation completed successfully                                                  |
| CertificateNotYetValid                  | At the date reference, the certificate is not valid yet                            |
| CertificateExpired                      | At the date reference, the certificate has expired                                 |
| CertificateRevoked                      | At the date reference, the certificate has been revoked                            |
| CertificateIssuerNotFound               | The issuer of the certificate could not be found                                   |
| CertificateRevocationStatusUnknown      | The revocation status of the certificate could not be verify. Mostly, REST PKI could not access the certificate's CRLs |
| CertificateChainRootNotTrusted          | The root of the certificate chain is not trusted                                   |
| InvalidCertificateSignature             | The signature is not valid based on the provided certificate's public key          |
| DecodeError                             | Could not decode a part of the object being validated                              |
| RequiredSignedAttributeMissing          | The signature does not have all required signed attributes                         |
| ForbiddenSignedAttributePresent         | The signature have one or more forbidden signed attributes                         |
| RequiredUnsignedAttributeMissing        | The signature does not have all required unsigned attributes                       |
| ForbiddenUnsignedAttributePresent       | The signature have one or more forbidden unsigned attributes                       |
| ContentTypeMismatch                     | The content-type attribute specifies a different content-type than that of the CMS |
| MessageDigestMismatch                   | The message digest attribute specifies a digest that does not match the digest of the signed data |
| SigningCertificateDigestMismatch        | The signing certificate attribute specifies a certificate digest that does not match the digest of the signer's certificate |
| SignatureAlgorithmValidationFailed      | The signature algorithm validation failed                                           |
| RevocationDataIssuedBeforeGracePeriod   | The revocation data values were issued before the grace period                      |
| UncertifiedDateReference                | The date reference used to validate the signature is not certified                  |
| SignaturePolicyMismatch                 | During validation, the signature policy differes from the given policy              |
| SigningTimeOutOfCertificateValidity     | The signature happened out of the certificate validity period                       |
| UnknownSignedAttributesPresent          | The signature contains one or more unknown signed attributes                        |
| UnknownUnsignedAttributesPresent        | The signature contains one or more unknwon unsigned attributes                      |
| TimestampWithMoreThanOneSigner          | The timestamp has more than one signer                                              |
| TimestampMessageImprintMismatch         | The timestamp message-imprint is not the same as the computed message-imprint       |
| CompleteReferencesMismatch              | The certificate's complete reference is not valid                                   |
| InvalidSignatureTimestamp               | The signature timestamp is not valid                                                |
| InvalidReferencesTimestamp              | The reference timestamp is not valid                                                |
| InvalidSigAndRefsTimestamp              | The signature timestamp and the reference timestamp is not valid                    |
| InvalidArchiveTimestamp                 | The archive timestamp is not valid                                                  |
| InvalidKeyUsage                         | The signing-certificate does not have permission for performing this type of operation |
| InvalidOcspResponse                     | The OCSP's response is not valid                                                    |
| UnauthorizedIssuer                      | The certificate issuer is not a CA                                                  |
| UnknownRootTrustStatus                  | The root trust status is unknown                                                    |
| InvalidTsl                              | The TSL is not valid                                                                |
| InvalidCrl                              | The certificate CRLs are not valid                                                  |
| CertificateIssuerValid                  | The certificate issuer is valid and trusted                                         |
| CertificateIssuerInvalid                | The certificate issuer is not valid or not trusted                                  |
| CertificateValidationFailed             | The certificate validation failed                                                   |
| SignatureVulnerableToSignerSubstitution | The signature is vulnerable to signer substitution                                  |
| InvalidXmlSignatureSchema               | The signature schema (XSD) is not valid                                             |
| XmlDSigCoreValidationFailed             | The core validation of the signature failed (the digest or signature are incorrect) |
| SignatureTimestampIgnored               | The signature's timestamp was ignored                                               |
| InvalidCertificationPathLen             | The CAs certification path is not valid                                             |
| SigningCertificateNotFound              | The certificate of the signer was not found                                         |
| UnauthorizedACIssuer                    | The certificate issuer is a CA, therefore cannot be used to issue attribute certificates |
| AlgorithmNotAllowed                     | The algorithm is not allowed                                                        |
| UnacceptableSignaturePolicy             | The signature policy is not acceptable                                              |
| TslNotAvailable                         | TSL is not available                                                                |