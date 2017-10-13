# PKI SDK changelog

<a name="v1-19-5" />
### 1.19.5 (2017/10/02)

- Add Certificate Signing Request (PKCS#10) object
- Improve RFC 3161 response encoding
- Improve PKI Peru fields decode
- Update T8 lib


<a name="v1-19-4" />
### 1.19.4 (2017/09/14)

- Improve issuer and subject names decode


<a name="v1-19-3" />
### 1.19.3 (2017/09/07)

- Improved PAdES complete signature
- Add Timestamp and signer revocation values after PAdES signature completed when LTV
- Fix multi URIs CRL distribution points extension
- Fix malformed OCSP status decode bug


<a name="v1-19-1" />
### 1.19.1 (2017/07/27)

- Removed SHA1 hash algorithm from allowed algorithms on default signature policies. Affects XadesBasic, XmlDSigBasic, Xades AdrTempo timestamps, Pades Basic, Italy CadesBes, CadesBes, CadesT, CadesC, CadesXLong, CadesXType1, CadesXLongType1 and CadesA policies


<a name="v1-19-0" />
### 1.19.0 (2017/07/25)

- Add PDF password protection feature
- Add timespan range for OCSP validation
- Fix OCSP fill issuer
- Fix bug on custom validation levels set for signing


<a name="v1-18-0" />
### 1.18.0 (2017/07/04)

- Improve PDF marks


<a name="v1-17-1" />
### 1.17.1 (2017/06/21)

- Add Public Key X509 Certificate generation
- Add PKCS#12 generation


<a name="v1-16-9" />
### 1.16.9 (2017/06/10)

- Pdf date referenced signature validation also considering CMS SignedData revocation data set if present


<a name="v1-16-8" />
### 1.16.8 (2017/05/25)

- Add property PadesVisualText.SigningTimeOffset


<a name="v1-16-7" />
### 1.16.7 (2017/05/10)

- Fix XML signature validation rising UnacceptableSignaturePolicyException
- Fix PDF marks image data redundancy
- Add URI to data download trace log


<a name="v1-16-6" />
### 1.16.6 (2017/04/26)

- Fix license refresh on restricted product
- New restricted product validation


<a name="v1-16-5" />
### 1.16.5 (2017/03/16)

- Updated ICP-Brasil intermediate CAs


<a name="v1-16-4" />
### 1.16.4 (2017/03/01)

- Changes on CAdES signature inspection and compression to deal with incorrectly encoded timestamps


<a name="v1-16-3" />
### 1.16.3 (2017/02/15)

- Add PKI Peru certificate fields


<a name="v1-16-2" />
### 1.16.2 (2017/02/07)

- Add Xml policy mappers
- NFe policy without signature elements IDs


<a name="v1-16-1" />
### 1.16.1 (2017/01/23)

- Fix last hotfix merge


<a name="v1-16-0" />
### 1.16.0 (2017/01/16)


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
