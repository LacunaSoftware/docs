# List of PKI Express return codes

The PKI Express operations have a set of return codes shown bellow with the meaning of each one.

| Return Code                    | Meaning                                                                          |
|--------------------------------|----------------------------------------------------------------------------------|
| Ok                             | Operation completed successfully                                                 |
| BadSyntax                      | Parameters do not match the expected format                                      |
| UnknownError                   | Unknown error                                                                    |
| FileNotFound                   | File not found                                                                   |
| BadCertificate                 | Error decoding certificate file                                                  |
| BadThumbprint                  | Invalid thumbprint                                                               |
| BadHash                        | Invalid To Sign Hash or could not infer the digest algorithm from the given hash |
| BadData                        | Invalid To Sign Data                                                             |
| BadSignature                   | Invalid Signature                                                                |
| BadAlgorithm                   | Invalid Algorithm                                                                |
| BadPolicy                      | Invalid Policy                                                                   |
| BadVisualRep                   | Error parsing visual representation parameters file                              |
| UndefinedFileReference         | Undefined file reference                                                         |
| CertNotFound                   | Certificate not found                                                            |
| ValidationFailed               | Validation failed                                                                |
| IOError                        | Error reading file                                                               |
| NoCertsWithKey                 | PFX file does not contain any certificates with private key                      |
| NotActivated                   | Not Activated PKI Express                                                        |
| ActivationError                | Fail to activate PKI Express                                                     |
| BadLicense                     | Invalid Base-64 of activation license                                            |
| LicenseNeeded                  | No given license file                                                            |
| InvalidLicense                 | Invalid license                                                                  |
| AccessDenied                   | Missing permission to modify PKI Express settings                                |
| CertThumbNeeded                | No given thumbprint                                                              |
| BadPdfChanges                  | Error occurred while processing changes to PDF                                   |
| UpdateNeeded                   | Operation requires a newer version of PKI Express                                |
| DataFileNeeded                 | No given Data File                                                               |
| NoEncapsulatedContent          | Missing encapsulated content                                                     |
| NonceNotFound                  | Nonce not found                                                                  |
| DirectoryNotFound              | Directory not found                                                              |
| TimestampAuthorityNotAvailable | Timestamp requester failed                                                       |
| PolicyRequiresNetwork          | Chosen policy requires network (offline mode not supported)                      |
| TimestampOptionsRequired       | No given timestamp authority's address                                           |
| CultureNotFound                | Culture not found                                                                |
| TimeZoneNotFound               | TimeZone not found                                                               |
| InvalidUtcOffset               | Invalid UTC offset                                                               |
| KeySizeNotSupported            | Unsupported key size                                                             |
| BadKeyFormat                   | Unrecognized key format                                                          |
| BadKey                         | Invalid key                                                                      |
| InvalidTimeoutValue            | Invalid timeout value                                                            |
| CertificateMismatch            | Provided certificate file does not correspond to the stored key                  |
| KeyNotFound                    | Key not found                                                                    |
| NoCertificateFile              | No given certificate file                                                        |
| BadCertificationLevel          | Invalid certification level                                                      |