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