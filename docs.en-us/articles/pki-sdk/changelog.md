# PKI SDK changelog

<a name="v2-18-1" />
### 2.18.1 (2025-05-09)

- \[PKI-133\] Replace the usage of legacy CAPI RSA by Cng on public-key based `GetSignatureCsp` method
- \[PKI-134\] i18n validation success strings
- \[PKI-135\] Enforce LTV on PAdES PkiBrazil AD-RB and AD-RT policies when DSS entry is already present on PDF


<a name="v2-18-0" />
### 2.18.0 (2025-03-10)

- \[PKI-130\] Add async methods for `PKCertificateAuthentication`
- \[PKI-132\] Add public ICP-Brasil PAdES AD-RA and AD-RC policies for generation.
- \[PKI-129\] Improve PDF signature listing for duplicated or inconsistent `signatureFieldName`. Update Lacuna.T8 package.


<a name="v2-17-2" />
### 2.17.2 (2024-09-09)

- \[PKI-127\] Improve DocMDP inclusion and validation.
- \[PKI-128\] Fix SigningCertificate certificate decoding exception for not supported RSA signature scheme PSS.


<a name="v2-17-1" />
### 2.17.1 (2024-08-27)

- \[PKI-119\] Improve validation for PDF signature with invalid ByteRange parameter.
- \[PKI-124\] Improve CRL local cache validation (For CRL distribution points returning inconsistent CRLs).
- \[PKI-125\] Improve PAdES validation for mandatory DSS archiving policies.
- \[PKI-123\] Fix PAdES not using DSS revocation artifacts on first signer when `ValidateAll` method call.
- \[PKI-126\] Fix PAdES visual positioning for PDFs with cropbox on the page media size.


<a name="v2-16-1-beta01" />
### 2.16.1-beta01 (2024-06-13)

- \[PKI-99\]  Fix PAdES DSS usage for signature-timestamp validation when `ValidateAll` method call.


<a name="v2-16-0" />
### 2.16.0 (2024-04-16)

- \[PKI-112\] Add Nonce and Nonce raw bytes properties to TstInfo
- \[PKI-117\] Add support to Encrypted Private Keys decoding
- \[PKI-113\] Improve PDF 'Append Mode' generic error to InvalidPdfException
- \[PKI-116\] Improve PDF annotation change validation
- \[PKI-118\] Improve pt-BR messages on Validation Results
- \[PKI-114\] Improve legacy XAdES ArchiveTimeStamp namespace support
- \[PKI-115\] Improve DateTimeOffsets on validation messages with custom time zone PkiConfig.TimeZoneInfo
- \[PKI-109\] Fix PAdES signatures custom SignatureFieldName being set to default on some scenarios


<a name="v2-15-0" />
### 2.15.0 (2023-07-28)

- \[PKI-102\] Add X509Extension option on CSR generation 
- \[PKI-102\] Add IssuingDistributionPoint option to X509Extension generation
- \[PKI-107\] Add global TimeZoneInfo configuration for DateTimeOffset strings
- \[PKI-101\] Improve CRLs and Certificates Set decoding performance
- \[PKI-101\] Improve CAdES co-signatures performance
- \[PKI-108\] Improve PAdES RangeBytes value validation


<a name="v2-14-0-rc01" />
### 2.14.0-rc01 (2023-07-28)

- \[PKI-100\] Add Qualified Certificate Statements extension decoding and generation
- \[PKI-100\] Add X509 Name OrganizationIdentifier element
- \[PKI-100\] Improve Name generation from OIDs and Values list


<a name="v2-13-2" />
### 2.13.2 (2023-06-29)

- \[PKI-104\] Fix PdfMarks (Adobe wrongly checking signature when PdfMarked post signed with LTV enabled)


<a name="v2-13-1" />
### 2.13.1 (2023-05-03)

- \[PKI-103\] Improve PDF DocTimeStamp message-imprint validation


<a name="v2-13-0" />
### 2.13.0 (2022-10-19)

- Add PadesSigner filling pre-positioned blank signature feature
- Improve signature check for third parties `IPrivateKey` implementations
- Improve PDF signatures listing on non-consistent PDFs


<a name="v2-12-3" />
### 2.12.3 (2022-08-16)

- Add GovBR Trust Arbitrator option
- Add X.520 Description name parameter
- Increase PKI Brazil pre-loaded static CAs


<a name="v2-12-2" />
### 2.12.2 (2022-07-20)

- Improve `PdfContext`with form fields information
- Improve `PdfMarker` with form fields filling


<a name="v2-12-1" />
### 2.12.1 (2022-07-10)

- Improve XML transfer data parameters


<a name="v2-12-0" />
### 2.12.0 (2022-06-27)

**Unexpected breaking change**

Am I affected?
- If you make use of custom [`IPrivateKey`](https://docs.lacunasoftware.com/en-us/api/Lacuna.Pki.IPrivateKey), you may need to update your implementation
- If you make use of any dependent packages, `Lacuna.Pki.*` family, you may need to update the packages to the latest minor version

Changelog:
- Add Encryption interface
- Add signer name and location optional fields to PDF signature
- Improve signature CSP access to PublicKey
- Improve PKCS#12 generation options


<a name="v2-11-7" />
### 2.11.7 (2022-06-11)

- Fix PdfMarker NullReferenceException when preserving signatures visual representation on some PDFs


<a name="v2-11-6" />
### 2.11.6 (2022-06-06)

- Fix T8 PDF opening exception `Unable to cast object of type 'Lacuna.T8.text.pdf.PdfNull'`


<a name="v2-11-5" />
### 2.11.5 (2022-05-07)

- Improve decoding from bad formatted CRL Distribution Point URL


<a name="v2-11-4" />
### 2.11.4 (2022-04-27)

- Add PDF/A standard property to PdfContext


<a name="v2-11-3" />
### 2.11.3 (2022-04-25)

- Improve XML and PDF validation with external date reference


<a name="v2-11-2" />
### 2.11.2 (2022-04-22)

- Fix ValidationException on XML signing


<a name="v2-11-1" />
### 2.11.1 (2022-04-13)

- Improve Paraguay certificate fields decoding
- Add Paraguay "Pasaporte" certificate field


<a name="v2-11-0" />
### 2.11.0 (2022-04-02)

- Add line spacing configuration for PDF (PadesVisualText and PdfMarkText features)
- Improve Pades signing and validation performance


<a name="v2-10-1" />
### 2.10.1 (2022-03-06)

- Fix unwanted warning logs from lazy loaded country PKI fields decoding


<a name="v2-10-0" />
### 2.10.0 (2022-02-25)

- Improve certificate generation feature options
	- User notices certificate policy
	- Extended key usage extension critical option
	- End entity basic constraints extension critical option


<a name="v2-9-1" />
### 2.9.1 (2022-01-27)

- Improve PDF support with encoded XMP
- Improve PDF marker signature removal


<a name="v2-9-0" />
### 2.9.0 (2021-11-24)

- Add PDF marker page content scaling feature
- Add XML signature editor with archive timestamp extending feature
- Improve TimestampRequester with Basic authentication option through Authorization header
- Improve OCSP generation and validation
- Improve PDF/A compliance signature support


<a name="v2-8-12" />
### 2.8.12 (2021-08-19)

- Add XAdES X509Name info element by default on PKI Brazil policies
- Improve PDF handling thread safety
- Improve PKI Brazil DateOfBirth certificate field decoding error handling
- Fix XAdES X509Name order
- Fix PDF mark font auto resizing


<a name="v2-8-11" />
### 2.8.11 (2021-08-07)

- Improve not supported PDF encryption error handling


<a name="v2-8-10" />
### 2.8.10 (2021-08-02)

- Add LTV presence check to PAdES signer info


<a name="v2-8-9" />
### 2.8.9 (2021-07-16)

- Improve PAdES default validation with DSS artifacts
- Improve support to PDFs with minor inconsistencies


<a name="v2-8-8" />
### 2.8.8 (2021-07-10)

- Improve TSL (Trusted Service List) status validation
- Fix PdfMark text vertical align limit


<a name="v2-8-7" />
### 2.8.7 (2021-05-07)

- Add PDF signature visual representation position recover from PAdES signer info
- Add signature validation level for obsolete algorithms
- Add PDfContext with basic PDF and signature info
- Add password protected PDF exception
- Set Lapp feature as failover
- Improve PDF marker permissions checking


<a name="v2-8-5" />
### 2.8.5 (2021-04-22)

- Fix PAdES visual representation auto positioning behavior when applied on multiple pages


<a name="v2-8-4" />
### 2.8.4 (2021-03-26)

- Fix Bad Data error on RSA key loading from PKCS#12. Affects .NET Frameworks 4.0, 4.5 and 4.6


<a name="v2-8-3" />
### 2.8.3 (2021-03-24)

- Improve PDF Marker flattening


<a name="v2-8-2" />
### 2.8.2 (2021-03-19)

- Improve PDF signatures (without signed attributes) validation policy
- Improve CMS signatures (without signed attributes) validation policy


<a name="v2-8-0" />
### 2.8.0 (2021-01-11)

- Add CAdES signing description feature 
- Add XAdES DataObjectFormat description feature 
- Add PAdES visual representation text vertical alignment
- Add PdfMarker text vertical alignment
- Improve CAdES signing certificate issuner name validation


<a name="v2-7-9" />
### 2.7.9 (2020-09-17)

- Add access to private key interface on [PKCertificateWithKey](https://docs.lacunasoftware.com/api/Lacuna.Pki.PKCertificateWithKey#Lacuna_Pki_PKCertificateWithKey_PrivateKey)
- Add self-signed certificate generation simpler class: [SelfSignedPKCertificateGeneration](https://docs.lacunasoftware.com/api/Lacuna.Pki.Issuer.SelfSignedPKCertificateGenerator)
- Fix Brazil NFe XML signature canonicalization algorithm usage


<a name="v2-7-8" />
### 2.7.8 (2020-09-14)

- Update ICP-Brasil CAdES, PAdES and XAdES validation policies
- Fix XML with comments signature 


<a name="v2-7-7" />
### 2.7.7 (2020-09-09)

- Set exclusive c14n as XML signatures default canonicalization method
- Add forced removal of XML default namespaces on to-sign elements (which is not being correctly suppressed on .NET c14n implementation, see [issue report](https://github.com/dotnet/runtime/issues/28844))
- Fix namespaces propagation on XML signature validation
- Fix ValidationContext usage on XAdES validation with archive timestamps


<a name="v2-7-5" />
### 2.7.5 (2020-07-28)

- Add default XPath transformation on XML enveloped signatures


<a name="v2-7-3" />
### 2.7.3 (2020-07-18)

- Add PDF metadata include and recover on PadesSigner, PadesSignature and PdfMarker
- Add global configuration for prioritizing revocation status validation trhough OCSP over CRL
- Add PDF Document Timestamp signature visual representation option
- Improve Ecuador certificate fields
- Improve PdfMarker required area calculation with text rotation


<a name="v2-7-2" />
### 2.7.2 (2020-05-29)

- Add PAdES signer custom signature field name option


<a name="v2-7-1" />
### 2.7.1 (2020-05-28)

- Add custom X509 extensions feature to certificate generation


<a name="v2-7-0" />
### 2.7.0 (2020-05-22)

- Add Banco Central del Ecuador certificate fields
- Add PKI Argentina certificate fields
- Add ICP-Brasil missing certificate fields (e.g: RIC, CEI, Dados eleitorais, SIGEPE)
- Add text font color option to PAdES visual representation
- Improve CRL local cache performance


<a name="v2-6-1" />
### 2.6.1 (2020-05-07)

- Fix non-printable characters on stack trace


<a name="v2-6-0" />
### 2.6.0 (2020-04-14)

- Add embedded font on PAdES PDF/A visual representation
- Add background color option to PAdES visual representation
- Add XAdES long term policies
- Add TimestampException type on mandatory timestamp attributes failure


<a name="v2-5-5" />
### 2.5.5 (2019-12-18)

- Add Access Identity and Authentication Info certificate attributes encoding
- Update ICP-Brasil CAs local cache
- Fix Unix systems CA certificate store loading


<a name="v2-5-4" />
### 2.5.4 (2019-11-21)

- Fix PdfMark points per centimeters unit computation.
- Fix retrieving PDF signature visual representation size when malformed rectangle definition on PDF.


<a name="v2-5-3" />
### 2.5.3 (2019-08-06)

- Improve PdfMarks new page template.
- Add PdfMarker preserve signatures visual representation feature.


<a name="v2-5-2" />
### 2.5.2 (2019-07-16)

- Add AlphaCode (a pseudorandom alhpa code generator and handler)


<a name="v2-5-1" />
### 2.5.1 (2019-05-23)

- Add PKI Paraguay certificate fields
- Add PAdES auto-positioning vertical and horizontal directions control


<a name="v2-4-0" />
### 2.4.0 (2019-04-08)

- Add LAPP support
- Add objects PEM encoder
- Improve access to validation artifacts


<a name="v2-3-0" />
### 2.3.0 (2019-02-22)

- Add support for Elliptic-curve certificates validation
- Add support for Elliptic-curve certificates generation
- Improve access to validation artifacts
- Fix email regex validation


<a name="v2-2-8" />
### 2.2.8 (2019-02-15)

- Improve CadesSigner validation configurator


<a name="v2-2-7" />
### 2.2.7 (2018-12-26)

- Improve Pdf Marks with owner restrictions


<a name="v2-2-6" />
### 2.2.6 (2018-12-17)

- Fix Name generation with special characters support


<a name="v2-2-5" />
### 2.2.5 (2018-11-20)

- Improve PAdES validation with DSS OCSP stored
- Improve Name fields generation order
- Improve self-signed certificate generation


<a name="v2-2-4" />
### 2.2.4 (2018-11-09)

- Fix CadesSigner quick certificate validation with more permisssive configurator


<a name="v2-2-3" />
### 2.2.3 (2018-11-01)

- Improve memory usage on PAdES signatures
- Add invalid CAdES signature file exception


<a name="v2-2-2" />
### 2.2.2 (2018-10-17)

- Add functional PAdES signer reason
- Add FIPS compliant digest algorithms on .NETFramework 4.0 Client target
- Add Role attribute for Attribute Certificates
- Fix PDF marks rotation bug


<a name="v2-1-3" />
### 2.1.3 (2018-08-13)

- Add TSA optional parameter: TSA policy OID
- Improve Name encoding policies
- Fix archive signature finisher


<a name="v2-1-0" />
### 2.1.0 (2018-07-16)

- Add multi-target package support: .NETStandard 2.0, .NETFramework 4.5 and .NETFramework 4.0 Client


<a name="v1-20-16" />
### 1.20.16 (2018-05-15)

- Fix certificate chain filling bug on PAdES


<a name="v1-20-15" />
### 1.20.15 (2018-05-08)

- Update ICP-Brasil CAs local certificate store


<a name="v1-20-14" />
### 1.20.14 (2018-05-08)

- Improve malformed certificate extensions decode
- Improve OCSP nocheck validation


<a name="v1-20-12" />
### 1.20.12 (2018-01-30)

- Add proxy configuration for the PKI SDK Web requests


<a name="v1-20-10" />
### 1.20.10 (2018-01-17)

- Add signers custom certificate validation configuration support
- Add offline signer certificate validation configuration preset


<a name="v1-20-9" />
### 1.20.9 (2017-12-27)

- Add PDF/A standard and PDF version properties to PadesSignature
- Add PKCertificate generation without certificate policy URI option
- Improve ASN1 encoding util for primitive types


<a name="v1-20-8" />
### 1.20.8 (2017-12-13)

- Add serial number option to public key certificate generation


<a name="v1-20-7" />
### 1.20.7 (2017-12-06)

- Add signature element Id to XmlSignature
- Fix case sensitive CRL cache path
- Fix Windows certificate store not supported signature algorithm warnings


<a name="v1-20-6" />
### 1.20.6 (2017-11-21)

- Add commitment type attribute option for XAdES and PAdES signatures
- Fix unrecognized commitment type attribute on CAdES
- Fix PdfMarks not respecting previous throw behaviour


<a name="v1-20-5" />
### 1.20.5 (2017-11-20)

- Fix PAdES signing-time


<a name="v1-20-4" />
### 1.20.4 (2017-11-17)

- Add validation context feature for validating CAdES, PAdES and XAdES signatures
- Add verify parameters method for signer classes
- Add commitment type attribute option for CAdES signatures
- Fix chain build loop possibility


<a name="v1-20-1" />
### 1.20.1 (2017-10-26)

- Multi-target package supporting .Net Frameworks 4.5 and 4.0 Client Profile
- Using new csproj technology


<a name="v1-19-5" />
### 1.19.5 (2017-10-02)

- Add Certificate Signing Request (PKCS#10) object
- Improve RFC 3161 response encoding
- Improve PKI Peru fields decode
- Update T8 lib


<a name="v1-19-4" />
### 1.19.4 (2017-09-14)

- Improve issuer and subject names decode


<a name="v1-19-3" />
### 1.19.3 (2017-09-07)

- Improved PAdES complete signature
- Add Timestamp and signer revocation values after PAdES signature completed when LTV
- Fix multi URIs CRL distribution points extension
- Fix malformed OCSP status decode bug


<a name="v1-19-1" />
### 1.19.1 (2017-07-27)

- Removed SHA1 hash algorithm from allowed algorithms on default signature policies. Affects XadesBasic, XmlDSigBasic, Xades AdrTempo timestamps, Pades Basic, Italy CadesBes, CadesBes, CadesT, CadesC, CadesXLong, CadesXType1, CadesXLongType1 and CadesA policies


<a name="v1-19-0" />
### 1.19.0 (2017-07-25)

- Add PDF password protection feature
- Add timespan range for OCSP validation
- Fix OCSP fill issuer
- Fix bug on custom validation levels set for signing


<a name="v1-18-0" />
### 1.18.0 (2017-07-04)

- Improve PDF marks


<a name="v1-17-1" />
### 1.17.1 (2017-06-21)

- Add Public Key X509 Certificate generation
- Add PKCS#12 generation


<a name="v1-16-9" />
### 1.16.9 (2017-06-10)

- Pdf date referenced signature validation also considering CMS SignedData revocation data set if present


<a name="v1-16-8" />
### 1.16.8 (2017-05-25)

- Add property PadesVisualText.SigningTimeOffset


<a name="v1-16-7" />
### 1.16.7 (2017-05-10)

- Fix XML signature validation rising UnacceptableSignaturePolicyException
- Fix PDF marks image data redundancy
- Add URI to data download trace log


<a name="v1-16-6" />
### 1.16.6 (2017-04-26)

- Fix license refresh on restricted product
- New restricted product validation


<a name="v1-16-5" />
### 1.16.5 (2017-03-16)

- Updated ICP-Brasil intermediate CAs


<a name="v1-16-4" />
### 1.16.4 (2017-03-01)

- Changes on CAdES signature inspection and compression to deal with incorrectly encoded timestamps


<a name="v1-16-3" />
### 1.16.3 (2017-02-15)

- Add PKI Peru certificate fields


<a name="v1-16-2" />
### 1.16.2 (2017-02-07)

- Add Xml policy mappers
- NFe policy without signature elements IDs


<a name="v1-16-1" />
### 1.16.1 (2017-01-23)

- Fix last hotfix merge


<a name="v1-16-0" />
### 1.16.0 (2017-01-16)


- Add grunt conditional packaging for both Net4.0 and Net4.5 frameworks
- Add PdfMarker invalid pdf exception
- Add more Name parameters
- Add support to PAdES validation with date reference
- Add support to CSR generataion
- Add features based licensing option
- Improve Icp-Brasil filds. Fields also return null if have default padding value
- Improve digest algorithm get instance from various names patterns
- Improve Pades signature to load and validate adbe.pkcs7.sh1 PDF signatures
- Improve internal downloads
- Fix TSL UnderSupervision state as a valid state
- Fix Certificate Store loading delay due certificate chain loading attempt
- Fix bug with provider Microsoft Base Cryptographic Provider v1.0
- Fix CAdES archive timestamp encode
- Fix PAdES visual representation empty line
- Fix PDF marks and PAdES visual representation incorrect positioning in some rotated PDFs
- Fix exception in some Icp-Brasil fields decode


<a name="v1-13-5" />
### 1.13.5 (2016-12-08)


- Add new XML signature policy options


<a name="v1-13-4" />
### 1.13.4 (2016-08-15)

- Fix bug occurring in some PDF signatures


<a name="v1-13-3" />
### 1.13.3 (2016-07-20)

- Add versioned T8


<a name="v1-13-2" />
### 1.13.2 (2016-07-14)

- Fix CAdES complete revocation references attribute order
- Update italian TSL uri and root


<a name="v1-13-1" />
### 1.13.1 (2016-07-07)

- Fix bug affecting the signature of some large PDFs


<a name="v1-13-0" />
### 1.13.0 (2016-07-05)

- Add PAdES ICP-Brasil signature policies (v1.0)
- Add CAdES ICP-Brasil new signature policies (v2.2 and v2.3)
- Add XAdES ICP-Brasil new signature policies (v2.3)
- Add CRL and OCSP asynchronous issuance
- Fix issue affecting OCSP issuer validation
- Fix issue in CAdES signer-info digest algorithm definition
- Fix bug affecting usage of PKCS#12 certificates on rare scenarios


<a name="v1-12-2" />
### 1.12.2 (2016-06-10)

- Add visual representation parameter exception


<a name="v1-12-1" />
### 1.12.1 (2016-06-03)

- Add support for decoding of ICP-Brasil certificate fields "OAB" and "RG"
- Add support on attribute certificate generation for the AuthorityKeyIdentifier extension
- Introduce new class CadesAcceptablePoliciesCatalog to simplify validation of CAdES signatures accepting multiple signature policies
- Introduce new class Rfc3161Encoding allowing applications to implement the timestamp protocol (TSP)
- Introduce specialized exception class TimestampRequestException for identifying errors when requesting timestamps
- Add support for certificates with rare alternative SHA-1 with RSA signature algorithm OID (1.3.14.3.2.29)
- Introduce new class FileSystemNonceStore with a dependency-free implementation of the INonceStore interface


<a name="v1-12-0" />
### 1.12.0 (2016-05-02)

- Introduce new class PdfMarker for performing PDF marks
- Introduce new interface ITimestampRequester allowing customization of timestamping
- Add support for customization of culture, format and time zone of the signing time in PAdES visual representation
- Add support for performing CAdES signatures (without encapsulated content) passing message digest only
- Add support for adding encapsulated content to CAdES signature
- Add ICP-Brasil trusted root "v5"
- Fix issue affecting validation of XML signatures having namespace declarations on the Signature element
- Fix issue affecting positioning of PAdES visual representations in specific several-signers scenarios
- Fix issue causing unnecessary PIN dialogs when listing certificates


<a name="v1-11-2" />
### 1.11.2 (2016-03-27)

- Fix bug on CRL decoding when the ReasonCode is present
- Improve messages for certificate revocation status validation


<a name="v1-11-1" />
### 1.11.1 (2016-03-24)

- Fix bug on certificate revocation status validation which caused a stack overflow on rare OCSP validation scenarios


<a name="v1-11-0" />
### 1.11.0 (2016-02-22)

- SDK no longer requires the iTextSharp AGPL-licensed library in order to perform PAdES signatures
- Deprecated package Lacuna.Pki.PadesConnector, since PAdES signatures are now performed internally by the SDK


<a name="v1-10-1" />
### 1.10.1 (2016-02-15)

- Fix bug on PAdES signature which caused an incompatibility with certain TSAs which issued timestamps larger than
  expected
- Fix bug on attribute certificate generation which prevented the AuthorityInformationAccess extension from being added
  when the CAIssuersUri was given
- Fix bug on attribute certificate validation concerning validation of the "IsCA" basic constraint on the issuer
  certificate
- Fix bug on attribute certificate validation when the NoRevocationAvailable extension is present


<a name="v1-10-0" />
### 1.10.0 (2016-02-13)

- Add support for user-extensible private keys
- Add support on Asn1Util class for encoding the ASN.1 type "sequence of"
- Add support for decoding the "DNS Names" certificate extension
- Add support for clearing the previously loaded SDK license


<a name="v1-9-1" />
### 1.9.1 (2016-02-11)

- Fix bug on encoding of ASN.1 structure AlgorithmIdentifier which caused the field "parameters" to be omitted instead
  of being filled with the NULL value


<a name="v1-9-0" />
### 1.9.0 (2016-01-21)

- Add support for XML signatures (XmlDSig/XAdES)
- Add support for propagating changes to a signature policy's trust arbitrators to its timestamp validation policies
- Improve certificate validation to check the PathLenConstraint extension
- Improve CAdES signature validation on cases on which the signer certificate could not be found
- Fix bug on validation of licenses without the "restricted use" field
- Fix bug on CAdES signature validation which caused a wrong ValidationItem to be informed when no valid signature
  timestamp was found (was informing InvalidReferencesTimestamp, correct is InvalidSignatureTimestamp)


<a name="v1-8-0" />
### 1.8.0 (2015-11-23)

- Add support on PAdES visual representation for specifying a container inside the signature rectangle on which to
  place the text


<a name="v1-7-2" />
### 1.7.2 (2015-11-12)

- Modify behavior of property IcpBrasilCertificateFields.CompanyName to return the company name when the certificate is
  a ICP-Brasil company (PJ) certificate (previously the property only worked for ICP-Brasil application certificates)
- Fix bug on ICP-Brasil AD-RC v2.1 CAdES signature policy (policy OID was incorrect)
- Fix bug on validation of CAdES signatures using implict policies


<a name="v1-7-1" />
### 1.7.1 (2015-10-30)

- Add support for ICP-Brasil CPF field on "OU" field of subject name having a space after the colon ("OU=CPF: xxxxxxxxxxx")


<a name="v1-7-0" />
### 1.7.0 (2015-10-27)

- Add support for licenses with use restricted to certain Lacuna products
- Modify behavior of IcpBrasilCertificateFields class to try to decode fields regardless of whether the certificate
  appears to be an ICP-Brasil certificate or not
	- *Notice: the correct way to verify if a certificate is a valid ICP-Brasil certificate is to validate it using the
	  TrustArbitrators.PkiBrazil trust arbitrator, not through its fields*


<a name="v1-6-0" />
### 1.6.0 (2015-10-14)

- Add support on PAdES visual representation for horizontal text alignment to the right
- Introduce class PkiInfo with information about the loaded SDK license
- Fix bug on logging which caused the "source" argument to have an incorrect value


<a name="v1-5-8" />
### 1.5.8 (2015-09-30)

- Add check of signature value on PadesSigner
- Fix bug that caused classes WindowsCertificateStore and Pkcs12CertificateStore to return an empty list of
  certificates instead of throwing an exception when the SDK license was not found
- Fix bug in the backward compatibility for the old PAdES visual representation


<a name="v1-5-7" />
### 1.5.7 (2015-09-28)

- Refactor of PAdES visual representation (introducing new class PadesVisualRepresentation2)
- Fix bug on Italy CAdES policy which caused additional certificates and CRLs to be wrongly added to the SignedData


<a name="v1-5-6" />
### 1.5.6 (2015-08-31)

- Add support for supplying an external certificate store to the PadesSigner class
- Fix bug on certificate revocation status check when an external certificate store was required
- Fix bug on properties DateOfBirth and CertificateType of class IcpBrasilCertificateFields which caused an exception
  to be thrown if the certificate was badly issued/encoded (behavior now is to return null)


<a name="v1-5-5" />
### 1.5.5 (2015-08-14)

- Modify licensing to accept license files with .config extension only to prevent leaking of the license files
	- *Notice: licenses issued prior to the date of this release are still accepted with a .xml extension*


<a name="v1-5-4" />
### 1.5.4 (2015-07-30)

- Improve certificate revocation status check
- Improve validation of PAdES signatures to consider internal signature timestamps


<a name="v1-5-3" />
### 1.5.3 (2015-07-30)

(version not released)


<a name="v1-5-2" />
### 1.5.2 (2015-07-23)

- Add support for password-based authentication with timestamp servers
- Improve validation messages for errors on revocation status check
- Improve intellisense documentation
- Deprecated property PkiConfig.MaxDelay in favor of property PkiConfig.PreemptiveDownloadMaxDelay


<a name="v1-5-1" />
### 1.5.1 (2015-07-16)

- First publicly available version
