# REST PKI Return Codes

REST PKI returns the following HTTP status codes:

## 401 - Unauthorized

The provided access token is not valid.

## 422 - Unprocessable Entity

The REST PKI operations have a set of return codes shown bellow with the meaning of each one.

| Return Code                   | Meaning                                                                       |
|-------------------------------|-------------------------------------------------------------------------------|
| EntityNotFound                | The entity is unknown or not valid (culture, timezone or signature policy )   |
| EntityAlreadyExists           | The entity already exists (policy, security context, intermediate CA or trusted root) |
| EntityUnusable                | The entity is unusable (policy or security context)                           |
| EntityIsReadOnly              | The entity is read-only (timestamp or policy)                                 |
| SecurityContextRequired       | No given security context                                                     |
| PKCertificateMalformed        | The provided certificate content is malformed                                 |
| ValidationError               | For more information on this error see the tables [below](#validation-errors) |
| ClientSignatureNotSet         | No client signature was provided                                              |
| ClientSignatureAlreadySet     | The client signature is provided twice                                        |
| ToSignHashNotAvailable        | The hash to be signed is not avaliable                                        |
| CertificateMismatch           | The certificate content differes from the one that started the signature      |
| InvalidRequest                | The request is not valid                                                      |
| TimestampingUnavailable       | The timestamping service are not available                                    |
| EndUserCertificate            | End-user certificates cannot be added as trusted root or intermediate CA      |
| CACertificate                 | Intermediate CA certificates cannot be added as trusted root                  |
| SelfSignedCertificate         | Self-signed certificates cannot be added as intermediate CA                   |
| TimestampPlanRequired         | No given timestamp plan                                                       |
| StorageUnavailable            | TODO                                                                          |
| InvalidPdf                    | The provided PDF is not valid                                                 |
| InvalidVisualRepresentation   | The provided visual representation is not valid                               |
| SignaturePolicyRequired       | TODO                                                                          |
| MissingDataHash               | No given data hash                                                            |
| CannotApplyPdfMarks           | The PDF is already digitally signed and AbortIfSigned was set                 |
| BadDigest                     | The given digest does not match the received content                          |
| InvalidXml                    | The provided XML is not valid                                                 |
| TransactionLimitAlreadyExists | The transaction limit already exists, to update it use the PUT request method |
| InvalidSortField              | The sort field provided could not be found in the query                       |
| FontSizeZero                  | The font size must be greater than 0                                          |
| InvalidPage                   | The visual representation positioned in invalid page                          |
| FileDownloadFailed            | Download failed                                                               |
| InvalidElementType            | Unknown pdf mark element type                                                 |
| UnsupportedCMSContentType     | The CMS content type is not supported                                         |
| UnsupportedDigestAlgorithm    | The digest algorithm is not supported                                         |
| UnsupportedSignatureAlgorithm | The signature algorithm is not supported                                      |
| PadesPositionNotFilled        | PadesPositionModel must have either Auto or Manual fields filled              |
| SignatureHashNotFound         | TODO                                                                          |
| InvoiceNotCreated             | The searched invoice was not created yet                                      |
| InvalidCades                  | The provided p7s file is not valid                                            |
| InvalidToken                  | The provided signature token is not valid                                     |

<a name="validation-errors" />
### Validation Errors

| Validation Error                        | Meaning                                                                            |
|-----------------------------------------|------------------------------------------------------------------------------------|
| Success                                 | Successful validation                                                              |
| CertificateNotYetValid                  | At the validation date, the certificate is not valid yet                           |
| CertificateExpired                      | At the validation date, the certificate has expired                                |
| CertificateRevoked                      | At the validation date, the certificate has been revoked                           |
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
| TimestampValidationException            | TODO                                                                                |
| CompleteReferencesMismatch              | The certificate's complete reference is not valid                                   |
| InvalidSignatureTimestamp               | The signature timestamp is not valid                                                |
| InvalidReferencesTimestamp              | The reference timestamp is not valid                                                |
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

## 500 - Internal Server Error

An unexpected error has occurred on the server.