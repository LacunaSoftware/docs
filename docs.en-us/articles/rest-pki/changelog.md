# Rest PKI changelog

<a name="v1-22-0" />
### 1.22.0 (2020-02-28)

Database model update: No

- Add PAdES signature policy without LTV
- Add option "PreserveSignaturesVisualRepresentation" when adding PDF marks
- Add option "TrustUncertifiedSigningTime" on PAdES and CAdES signature validation
- Add validation policy for Adobe Reader signatures
- Add configuration for throttling API requests

<a name="v1-21-1" />
### 1.21.1 (2020-02-21)

Database model update: No

- Update PKI SDK to [2.5.5](../pki-sdk/changelog.md#v2-5-5)

<a name="v1-21-0" />
### 1.21.0 (2020-01-10)

Database model update: No

- Add a ICP-Brasil CAdES signature policy without CRLs

<a name="v1-20-2" />
### 1.20.2 (2019-07-21)

Database model update: No

- Fix high CPU usage problem that occurred on certain conditions
- Improve timestamp scheduling to try requesters marked as unavailable (with less priority)
- Add settings `ProcessBackgroundJobs` and `WatchTimestampRequesters`
- Update PKI SDK to [2.5.2](../pki-sdk/changelog.md#v2-5-2)


<a name="v1-20-1" />
### 1.20.1 (2019-07-04)

Database model update: No

- Add PAdES auto positioning directions (`LeftToRight`/`RightToLeft` and `TopDown`/`BottomUp`)
- Add support for Lapp integration (*Lapp* is an Artifact Provider for PKI, used as a CRL proxy)
- Update PKI SDK to [2.5.1](../pki-sdk/changelog.md#v2-5-1)


<a name="v1-20-0" />
### 1.20.0

*No changes (version skipped)*


<a name="v1-19-1" />
### 1.19.1 (2019-07-03)

Database model update: No

- Improve maintenance jobs


<a name="v1-19-0" />
### 1.19.0 (2019-03-15)

Database model update: No

- Refactored integration with B-Stamper
- Update PKI SDK to [2.2.8](../pki-sdk/changelog.md#v2-2-8)


<a name="v1-18-5" />
### 1.18.5 (2019-01-03)

Database model update: No

- Performance improvements on billing (does not affect on-premises installations)


<a name="v1-18-4" />
### 1.18.4 (2018-12-11)

Database model update: No

- Improve validations on PAdES and CAdES signature exploring APIs to return status code 422 instead of 500
- Update PKI SDK to [2.2.3](../pki-sdk/changelog.md#v2-2-3)


<a name="v1-18-3" />
### 1.18.3 (2018-10-23)

Database model update: No

- Add support for the XML signature standard *Certificación de Origen Digital* (COD),
  from *Asociación Latinoamericana de Integración* (ALADI). For more information, see standard in
  [Spanish](http://www.aladi.org/nsfweb/Documentos/2327Rev2.pdf) or in
  [Portuguese](http://www.mdic.gov.br/images/REPOSITORIO/secex/deint/coreo/2014_09_19_-_Brasaladi_761_-_Documento_ALADI_SEC__di_2327__Rev_2_al_port_.pdf)
- Update PKI SDK to [2.2.2](../pki-sdk/changelog.md#v2-2-2), thus fixing bug on PDF marks rotation


<a name="v1-18-2" />
### 1.18.2 (2018-09-26)

Database model update: No

- Fix bugs that prevented correct certificate chain loading on certain scenarios:
  - On CAdES signatures, whenever the last link (to the root CA) could not be automatically constructed
  - On all XML signatures


<a name="v1-18-1" />
### 1.18.1 (2018-09-11)

Database model update: No

- Improve Application Insights instrumentation
  - Add support for specifing the AI API key, apart from the instrumentation key


<a name="v1-18-0" />
### 1.18.0 (2018-08-13)

Database model update: **Yes**

- Add support for configuring a TSA Policy ID on outgoing timestamp requests
- Update PKI SDK to [2.1.3](../pki-sdk/changelog.md#v2-1-3)


<a name="v1-17-5" />
### 1.17.5 (2018-08-01)

Database model update: No

- Fixed bug on Swagger metadata
- Improve users API


<a name="v1-17-4" />
### 1.17.4 (2018-07-11)

Database model update: No

- Fixed bug affecting operations performed with security contexts that include PKI Italy
- Improve invoice API


<a name="v1-17-3" />
### 1.17.3 (2018-05-24)

Database model update: No

- Add link to the [privacy policy](privacy-policy.md) on the splash screen ([GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) compliance)


<a name="v1-17-2" />
### 1.17.2 (2018-05-15)

Database model update: No

- Update Lacuna PKI SDK to 1.20.16, thus:
  - Fix certificate chain filling bug on PAdES


<a name="v1-17-1" />
### 1.17.1 (2018-05-09)

Database model update: No

- Update Lacuna PKI SDK to 1.20.15, thus:
  - Improve tolerance for malformed certificates (fixing problems due to recent SERPRO malformed certificates)
  - Update ICP-Brasil intermediate CAs

<a name="v1-17-0" />
### 1.17.0 (2018-03-29)

Database model update: No

- Improve dashboard
- General billing improvements


<a name="v1-16-0" />
### 1.16.0 (2017-12-12)

Database model update: **Yes**

- Add support for ignoring certificate validation errors due to unknown revocation status
- Add support for enabling Lacuna Test PKI on on-premises instances
- Add configuration of B-Stamper API key
- Improve instrumentation of TSP requests
- Fix bug that caused signatures to fail if the server `catest.lacunasoftware.com` was unreachable
- Fix minor bugs on invoices API


<a name="v1-15-2" />
### 1.15.2 (2017-11-20)

Database model update: No

- Add B-Stamp information on response of open signature APIs
- Improve audit package generation to return download link instead of content
- Fix bug on B-Stamping of signatures sent to the open signature APIs
- Fix validation of B-Stamped signatures
- Fix bug on database model update
- Update Lacuna PKI SDK to 1.20.5


<a name="v1-15-1" />
### 1.15.1 (2017-11-16)

Database model update: No

- Fix model validation bug that could cause a 400 (BadRequest) response on the PDF marks API

**Known issues:**

- An exception may be thrown during database model update (fixed on 1.15.2)


<a name="v1-15-0" />
### 1.15.0 (2017-11-14)

Database model update: **Yes**

- Add B-Stamper integration
- Add invoices APIs and reports
- Improve validations on PAdES signatures API to return status codes 400/422 instead of 500
- Improve Application Insights instrumentation
  - Add UserId field
  - Fix bug that caused some 422 responses to be logged without the ErrorCode field
- Fix frontend bug that suggested that users could update their own CustomerId

**Known issues:**

- An exception may be thrown during database model update (fixed on 1.15.2)


<a name="v1-14-4" />
### 1.14.4 (2017-09-29)

Database model update: No

- Add option to export billing report to CSV
- Improve validation of external file URLs passed to the API
- Improve instrumentation
  - Registering API error fields on Application Insights
  - Increase verbosity of log level "Debug"
  - Add events to help diagnosing problems on integration with Web PKI
- Fix bug that could cause several background tasks to remain queued
- Fix bug that caused a (handled) NullReferenceException during system startup
- Fix bug on transaction limit enforcing
- Update Lacuna PKI SDK to 1.19.4


<a name="v1-14-3" />
### 1.14.3 (2017-09-17)

Database model update: **Yes**

- Fix compatibility with PostgreSQL (previous 1.14.x versions were not compatible)
- Improve timestamp requester management
- Improve validations on PDF marks API
- Reduce files not used on on-premises installations
- Fix bug that caused timestamp requesters to be marked as unavailable during database update
- Fix bug that caused CA certificates without a CN (common name) field to be displayed incorrectly
- Fix bug on loading of user limits page


<a name="v1-14-2" />
### 1.14.2 (2017-09-12)

Database model update: No

- Fix bug that caused successful TSP requests to be logged as failures on Azure Application Insights

**Known issues:**

- Version cannot be installed on PostgreSQL (fixed on 1.14.3)


<a name="v1-14-1" />
### 1.14.1 (2017-09-11)

Database model update: No

- ~~Fix bug that caused successful TSP requests to be logged as failures on Azure Application Insights~~ (only really fixed on 1.14.2)

**Known issues:**

- Version cannot be installed on PostgreSQL (fixed on 1.14.3)


<a name="v1-14-0" />
### 1.14.0 (2017-09-09)

Database model update: **Yes**

- Add transaction limits (system-wide or per user)
- Add support for admins to block users
- Improve timestamp requester fallback and recovery
- Add various API validations to return status codes 400 and 422 instead of 500
- Add support for admins to manage users' custom intermediate CAs
- Add "Windows Server" option on custom security contexts' additional standard PKIs
- Add warning on dashboard if PKI SDK license is close to expiration
- Improvements on billing report
  - Fix bug on paging buttons
  - Add column with PDF marks
  - Add totals row
- Instrumentation improvements
  - Operations differing only by parameter on route are now unified on application insights
  - Failed TSP requests are now logged as so on application insights
  - API trust parameters (security context and signature policy) are now registered on events
  - Add client lib tracking
- Fix bug that caused sensible settings to be written on the system log
- Fix bug that prevented deletion of timestamp requesters
- Fix name of PAdES tag `{{br_oab_numero}}` (old `{{br_oab_numbero}}` is still supported)

**Known issues:**

- Version cannot be installed on PostgreSQL (fixed on 1.14.3)


<a name="v1-13-3" />
### 1.13.3 (2017-09-07)

Database model update: No

- Update Lacuna PKI SDK to 1.19.3 to fix bugs on revocation status checking
- Full validation results now included on certificate authentication completed event
- Improved logs to help diagnostic of trust parameterization errors


<a name="v1-13-2" />
### 1.13.2 (2017-08-28)

Database model update: No

- Add proxy configuration


<a name="v1-13-1" />
### 1.13.1 (2017-07-28)

Database model update: No

- Minor changes to billing API


<a name="v1-13-0" />
### 1.13.0 (2017-07-03)

Database model update: No

- Add new API to add marks to PDFs
- Add support for admins to manage users' custom security contexts
- Improve transactions and events screens


<a name="v1-12-8" />
### 1.12.8 (2017-06-27)

Database model update: No

- Fix bug that caused intermediate CAs to be ignored on open/validate signature APIs


<a name="v1-12-7" />
### 1.12.7 (2017-06-05)

Database model update: **Yes**

- Fix bug that caused database deadlocks on high load scenarios
- Fix bug that caused errors on recently-created timestampers


<a name="v1-12-6" />
### 1.12.6 (2017-06-01)

Database model update: No

- Create app settings TimeToCompleteSignatures and TimeToCompleteAuthentications


<a name="v1-12-5" />
### 1.12.5 (2017-05-11)

Database model update: No

- Add optional app setting DefaultTimestampTimeout to customize the default timeout when requesting timestamps
- Improve performance logs
- Update Lacuna PKI SDK to 1.16.7 to improve download logs


<a name="v1-12-4" />
### 1.12.4 (2017-05-05)

Database model update: No

- Fix bug that caused execution privileges over the site's folder to be required from the application


<a name="v1-12-3" />
### 1.12.3 (2017-05-04)

Database model update: No

- Fix bug on configuration of setting "Is on premises"
- Fix bug on hint of setting "Cryptographic keys"
- Fix bug on open/validate XML signatures API


<a name="v1-12-2" />
### 1.12.2 (2017-04-26)

Database model update: No

- Fix bug on certificate authentication with Web PKI


<a name="v1-12-1" />
### 1.12.1 (2017-04-26)

Database model update: No

- Fix bug on application startup that could cause double processing of background jobs


<a name="v1-12-0" />
### 1.12.0 (2017-04-25)

Database model update: **Yes**

- Add support for issuing timestamps through the REST API
- Add new API to open/validate XML signatures
- Add optional instrumentation with Application Insights
- Add optional app setting "AutoUpdateDatabase" to control whether the application will attempt to auto-update the database
- Add optional app setting "AllowInsecureMaintenance" to allow remote access to maintenance pages through HTTP
- Fix various issues occurring when running multiple instances of the application (high availability scenarios)
- ~~Fix database concurrency issues occurring on high load situations~~ (only really fixed on 1.12.7)
- Fix bug that occurred when the license for the Lacuna PKI SDK was changed
- Update Lacuna PKI SDK to 1.16.6


<a name="v1-11-4" />
### 1.11.4 (2017-03-16)

Database model update: No

- Update Lacuna PKI SDK to 1.16.5, thus:
	- Updated ICP-Brasil intermediate CAs
	- Changes on CAdES signature inspection to deal with incorrectly encoded timestamps


<a name="v1-11-3" />
### 1.11.3 (2017-02-13)

Database model update: No

- Alter XML policy "Nota Fiscal Eletrônica (NF-e)" to exclude signature elements IDs
- Update Lacuna PKI SDK to 1.16.2
	

<a name="v1-11-2" />
### 1.11.2 (2017-01-20)

Database model update: No

- Fix bug on database maintenance page

<a name="v1-11-1" />
### 1.11.1 (2017-01-17)

Database model update: No

- Fix bug on upload and download routes


<a name="v1-11-0" />
### 1.11.0 (2017-01-17)

Database model update: **Yes**

- Add support for multipart upload of files
- Add support for signing previously uploaded files, files from previous signatures and remote files
- Add support for downloading the signed file on a separate HTTP request ("download link")
- Add support for new PAdES visual representation tags (see [PAdES tags](pades-tags.md))
- Add support for decoding all fields in X.509 names
- Add CAdES policy "Basic Electronic Signature (CAdES-BES) with signing-time and no CRLs"
- Fix bug that prevented system intermediate CAs from taking effect
- Fix bug that resetted the storage service to local everytime the application was restarted
- Update Lacuna PKI SDK to 1.16.0, thus:
	- Improve ICP-Brasil filds. Fields also return null if have default padding value
	- Improve Pades signature to load and validate adbe.pkcs7.sh1 PDF signatures
	- Improve internal downloads
	- Fix TSL UnderSupervision state as a valid state
	- Fix Certificate Store loading delay due certificate chain loading attempt
	- Fix CAdES archive timestamp encode
	- Fix PAdES visual representation empty line
	- Fix PDF marks and PAdES visual representation incorrect positioning in some rotated PDFs
	- Fix exception in some ICP-Brasil fields decode
	- Fix bug occurring in some PDF signatures
	- Fix CAdES complete revocation references attribute order
	- Update italian TSL uri and root


<a name="v1-10-1" />
### 1.10.1 (2016-10-01)

Database model update: No

- Add standard PAdES policies "Basic with ICP-Brasil certificates" and "PAdES-T with ICP-Brasil certificates"


<a name="v1-10-0" />
### 1.10.0 (2016-09-27)

Database model update: **Yes**

- Add support for performing CAdES detached signatures without uploading the data file
- Improve user management


<a name="v1-9-1" />
### 1.9.1 (2016-09-22)

Database model update: No

- Fix bug preventing use of tags {{signerEmail}} and {{issuerCommonName}} on PAdES visual representation


<a name="v1-9-0" />
### 1.9.0 (2016-08-25)

Database model update: **Yes**

- Add support for PDF marks
- Add support to get the encapsulated file when opening a CAdES signature
- Improve billing report


<a name="v1-8-2" />
### 1.8.2 (2016-07-19)

Database model update: No

- Fix bug on CAdES co-signatures with timestamp


<a name="v1-8-1" />
### 1.8.1 (2016-07-11)

Database model update: No

- Fix bug affecting some signatures of large PDFs
- Update Lacuna PKI SDK to 1.13.1


<a name="v1-8-0" />
### 1.8.0 (2016-07-05)

Database model update: No

- Add new API to open/validate CAdES and PAdES signatures
- Add support for new ICP-Brasil PAdES signature policies AD-RB and AD-RT
- Add transaction history report
- Add support for tags {{signerEmail}} and {{issuerCommonName}} on PAdES visual representation
- Add property BinaryThumbprintSHA256 to CertificateModel
- Add support for creating users without a password (useful for application users)
- Add warning on system status when changing the storage when there are already stored blobs
- Increase maximum API request length to 100 MB
- Fix bug that prevented CAdES co-signatures
- Fix authorization bug on the download route for the security contexts' trusted root certificates
- Update Lacuna PKI SDK to 1.13.0


<a name="v1-7-2" />
### 1.7.2 (2016-06-10)

Database model update: No

- Add detection of bad data passed by client applications:
	- Invalid/corrupt PDFs
	- Invalid PAdES visual representation parameters
- Fix bug on security context removal
- Fix bug causing unused ClientSideSignature records to be left behind in the database
- Fix bug that prevented admin users from viewing details of other users' events
- Update Lacuna PKI SDK to 1.12.2 (no bug fixes)


<a name="v1-7-1" />
### 1.7.1 (2016-06-03)

Database model update: No

- Fix bug on download of a security context's trusted root certificate


<a name="v1-7-0" />
### 1.7.0 (2016-06-03)

Database model update: **Yes**

- Add support for timestamping
- Add support for system-wide security contexts
- Add support for system-wide customized signature policies
- Add support for additional storage options for encrypted temporary files (storing on local filesystem is still supported):
	- Microsoft Azure Blob Storage
	- Amazon S3
- Add support for admins to generate access tokens for other users
- Add support for admins to view other users' events ("history")
- Add support for ICP-Brasil certificate fields "RG" and "OAB"
- Update Lacuna PKI SDK to 1.12.1, thus:
	- Add support for certificates with rare alternative SHA-1 with RSA signature algorithm OID (1.3.14.3.2.29)


<a name="v1-6-4" />
### 1.6.4 (2016-05-05)

Database model update: **Yes**

- Store temporary encrypted files on local temp directory instead of storing on binary columns in the database
	- This change was done due to performance issues. The next release will add support for other storage options.


<a name="v1-6-3" />
### 1.6.3 (2016-05-02)

Database model update: **Yes**

- Add support for customization of culture, format and time zone of the signing time in PAdES visual representation
- Update Lacuna PKI SDK to 1.12.0, thus:
	- Fix bug on encoding of ASN.1 structure AlgorithmIdentifier which caused the field "parameters" to be omitted instead
	  of being filled with the NULL value
	- No longer using the iTextSharp AGPL-licensed library
	- Fix bug on certificate revocation status validation which caused a stack overflow on rare OCSP validation scenarios
	- Fix bug on CRL decoding when the ReasonCode is present
	- Improve messages for certificate revocation status validation
	- Fix issue affecting validation of XML signatures having namespace declarations on the Signature element
	- Fix issue affecting positioning of PAdES visual representations in specific several-signers scenarios
	- Add ICP-Brasil trusted root "v5"


<a name="v1-6-2" />
### 1.6.2 (2016-04-18)

Database model update: No

- Add support on PAdES visual representation for specifying a container inside the signature rectangle on which to place the text


<a name="v1-6-1" />
### 1.6.1 (2016-02-22)

Database model update: No

- Fix bug causing delay on database access when running on Microsoft Azure


<a name="v1-6-0" />
### 1.6.0 (2016-01-21)

Database model update: **Yes**

- Add support for XML signatures (XmlDSig/XAdES)
- Update Lacuna PKI SDK to 1.9.0, thus:
	- Improve certificate validation to check the PathLenConstraint extension


<a name="v1-5-1" />
### 1.5.1 (2015-11-24)

Database model update: No

- Aesthetic changes only


<a name="v1-5-0" />
### 1.5.0 (2015-11-23)

Database model update: **Yes**

- Add support for CAdES signatures
- Add transaction register (for future billing)
- Add support for Lacuna PKI SDK licenses with use restricted to REST PKI
- Improve removal of expired signature processes
- Update Lacuna PKI SDK to 1.8.0, thus:
	- Modify behavior of decoding of ICP-Brasil certificate fields to decode fields regardless of whether the
	  certificate appears to be an ICP-Brasil certificate or not
	- Modify behavior of decoding of CompanyName ICP-Brasil certificate field to return the company name when the certificate is
	  a ICP-Brasil company (PJ) certificate (previously the property only worked for ICP-Brasil application certificates)
	- Add support for ICP-Brasil CPF field on "OU" field of subject name having a space after the colon ("OU=CPF: xxxxxxxxxxx")

	
<a name="v1-4-3" />
### 1.4.3 (2015-11-06)

Database model update: No

- Aesthetic changes only


<a name="v1-4-2" />
### 1.4.2 (2015-11-06)

Database model update: No

- Aesthetic changes only


<a name="v1-4-1" />
### 1.4.1 (2015-10-21)

Database model update: No

- Aesthetic changes only


<a name="v1-4-0" />
### 1.4.0 (2015-10-21)

Database model update: No

- Add support on PAdES visual representation for horizontal text alignment to the right
- Set site culture to pt-BR (affects PAdES visual representation)
- Fix bug on PAdES signatures


<a name="v1-3-1" />
### 1.3.1 (2015-10-14)

Database model update: No

- Improve logging to file so as to prevent indefinite file growth
- Add information about the Lacuna PKI SDK license on the system status screen
- Fix minor issue on javascript when Google Analytics is not being used
- Fix minor issue on log test dialog
- Update Lacuna PKI SDK to 1.6.0, thus:
	- Fix bug on logging which caused the "source" argument to have an incorrect value

<a name="v1-3-0" />
### 1.3.0 (2015-10-13)

- First version released publicly
- Main features on this version:
	- Certificate authentication
	- PAdES signatures
