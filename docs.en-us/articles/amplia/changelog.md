# Amplia changelog

<a name="v3-13-2" />
### 3.13.2 (2021-12-16)

Bug fixes

* [AMP-224] - Keys stored on Database Key Store do not work after migration to a different environment

Updates database model: no


<a name="v3-13-1" />
### 3.13.1 (2021-12-05)

New Features

* [AMP-207] - Add support for Google KMS Key Store
* [AMP-222] - Add support for Amazon KMS Key Store
* [AMP-208] - Add support for OCSP responses
* [AMP-210] - Add Latinus (Ecuador corporate CA) certificate template

Improvements

* [AMP-223] - Add safe timespan threshold on end-entity certificates validity start

Updates database model: no


<a name="v3-12-0" />
### 3.12.0 (2021-04-27)

New Features

* [AMP-206] - Add support for AWS S3 blob storage

Updates database model: **yes**


<a name="v3-11-0" />
### 3.11.0 (2021-03-25)

Improvements

* [AMP-204] - Configuration `Amplia__IssueProcedureConfirmationEnabled` to disable SMS confirmation during issue procedure
* [AMP-205] - Providing internationalized issue links according to the API request language

Updates database model: no


<a name="v3-10-2" />
### 3.10.2 (2021-03-21)

Improvements

* [AMP-201] - Add support for SMS providers Zenvia and SmsEmpresa

Bug fixes

* [AMP-203] - Error when generating issue QR Code

Updates database model: no


<a name="v3-10-1" />
### 3.10.1 (2021-03-15)

Bug fixes:

* [AMP-200] - Error when issuing end-user certificate on cryptographic device

Updates database model: no


<a name="v3-10-0" />
### 3.10.0 (2021-02-08)

New Features:

* [AMP-195] - Add support for optional hard deletion of keys on Azure Key Store

Improvements:

* [AMP-196] - Allowing deletion of keys of revoked CAs

Bug fixes:

* [AMP-198] - When revoking a CA certificate and choosing for the CA to also be deactivated, the CA was actually deleted
* [AMP-197] - Broken messages on CA activation dialog

Updates database model: no


<a name="v3-9-6" />
### 3.9.6 (2020-11-26)

Improvements:

* [AMP-184] - Add configuration to hide "powered by" information
* [AMP-187] - Allow user order creation API to be called for an existing user without filling the `subject` field

Bug fixes:

* [AMP-183] - Order creation results in error if invalid email is inputted
* [AMP-188] - On the agreement signature, the *I agree* checkbox cannot be checked on certain screen resolutions
* [AMP-189] - Errors when using `EcuadorBce` templates
* [AMP-190] - Errors when listing CA certificates after removing keys used by CAs
* [AMP-191] - Birth date is incorrectly pre-filled on the user order creation page if the user already exists

Updates database model: no


<a name="v3-9-5" />
### 3.9.5 (2020-10-20)

Bug fixes:

* [AMP-182] - Depending on the user machine's system clock, the issue procedure immediately fails reporting expired session

Updates database model: no


<a name="v3-9-4" />
### 3.9.4 (2020-10-08)

Bug fixes:

* [AMP-186] - Recurring errors on CRL issuing

Updates database model: no


<a name="v3-9-3" />
### 3.9.3 (2020-09-30)

Bug fixes:

* [AMP-185] - Error sending SMS messages using TotalVoice provider

Updates database model: no


<a name="v3-9-2" />
### 3.9.2 (2020-09-03)

Improvements:

* [AMP-181] - Add new themes
  * *Metallic seaweed & Emerald* (`mse`)
  * *Oxford blue & Green* (`obg`)
  * *Castleton green & Orange* (`cgo`)
  * *Viridian green & Yellow* (`vgy`)

Bug fixes:

* [AMP-179] - Issuing QR Code not working when `QRCodeGatewayUrl` is not configured
* [AMP-180] - Application keys page does not load


Updates database model: no


<a name="v3-9-1" />
### 3.9.1 (2020-08-05)

* Bug fix: [AMP-178] - Blank page when returning from login on Internet Explorer

Updates database model: no


<a name="v3-9-0" />
### 3.9.0 (2020-08-04)

New features:

* [AMP-154] - Issue certificates in compliance to Ecuador's Banco Central format

Improvements:

* [AMP-168] - Refactor CRL issuing procedure to improve performance on cases with hundreds or thousands of CAs
* [AMP-161] - Update Angular to version 9

Updates database model: **yes**


<a name="v3-8-4" />
### 3.8.4 (2020-07-22)

* [AMP-177] - Add *Dark cerulean & Green* (`dcg`) theme

Updates database model: no


<a name="v3-8-3" />
### 3.8.3 (2020-07-21)

* [AMP-173] - Don't generate preemptively certificate agreement file when providing access link on API
* Bug fix: [AMP-174] - Issue certificate page stays loading indefinitely

Updates database model: no


<a name="v3-8-2" />
### 3.8.2 (2020-07-10)

* Bug fixes
  * [AMP-175] - Information application logs are being logged by default on Linux and Docker
  * [AMP-176] - Subject agreement signature package filename is not internationalized

Updates database model: no


<a name="v3-8-1" />
### 3.8.1 (2020-06-24)

* Bug fix: upon accepting suggestion to issue certificate on mobile, QR Code is not shown

Updates database model: no


<a name="v3-8-0" />
### 3.8.0 (2020-06-24)

* Implement soft deletion of certificate ortders
* Add API to update certificate orders
* Improve user experience upon accessing on a PC the issue page for a certificate order that can only be issued on a mobile device
* Bug fix: Application is allowing a fulfilled certificate order to be deleted

Updates database model: **yes**


<a name="v3-7-5" />
### 3.7.5 (2020-06-23)

* Optimize job history storage
* Add argument `--heavy` to command [update-db](on-premises/tool/update-db.md)

Updates database model: no


<a name="v3-7-4" />
### 3.7.4 (2020-06-19)

* Bug fixes
  * EventLog log provider causing errors on Azure App Service
  * Too many enqueued jobs for CRL issuing could cause database connection exaustion

Updates database model: no


<a name="v3-7-3" />
### 3.7.3 (2020-06-05)

* Add *Green & Dark coral* (`gdc`) theme
* Bug fix
  * App client config API field `SmsEnabled` is wrongly filled with false in certain scenarios

Updates database model: no


<a name="v3-7-2" />
### 3.7.2 (2020-06-03)

* Remove diacritics from SMS messages

Updates database model: no


<a name="v3-7-1" />
### 3.7.1 (2020-05-21)

* Improve phone and user order labels

Updates database model: no


<a name="v3-7-0" />
### 3.7.0 (2020-05-06)

* Add support for PIN-protecting keys on Dinamo HSMs
* Add filter by `keyMedia` on list pending certificates for user API
* Add themes *eva*, *dir* and *cam*

Updates database model: no


<a name="v3-6-0" />
### 3.6.0 (2020-05-01)

* Add Dinamo HSM integration via proprietary API

Updates database model: no


<a name="v3-5-0" />
### 3.5.0 (2020-04-14)

* Migrated to ASP.NET Core 3.1 (LTS release, supported until December 2022)

See [Update Amplia from 3.0-3.4 to 3.5](on-premises/update-35.md)

Updates database model: no


<a name="v3-4-0" />
### 3.4.0 (2020-03-27)

* Add support for digitally signing the Certificate Agreement containing the subject's public key during the issue procedure
* Add birth date to PKI Brazil (ICP-Brasil) order creation page
* Add command [gen-enc-key](on-premises/tool/gen-enc-key.md)
* Setting `General.QRCodeGatewayUrl` is now optional
* Bug fixes
  * The logo image should not be a link on the certificate issue page
  * Error when trying to edit an attribute certificate template
  * Initial message on certificate issue page does not change upon changing the language
  * QR Code is not being displayed when clicking the *Issue QR Code* button on the order details page

Updates database model: **yes**


<a name="v3-3-0" />
### 3.3.0 (2019-03-17)

* Add support for configuring a custom *certification policies* extension on templates
* Add new user role: *Registration Agent* (can only create certificate orders and revoke certificates)
* Full theming support (except customization of the home page)
* Add option to hide buttons for basic order creation or user order creation
* Bug fixes
  * On certain scenarios certificates might be issued with 0 day validity
  * Error when creating order certificate without a template
  * Error "You cannot specify the root subscription" upon entering the system administration 
  * Logo is not shown on invitation emails

Updates database model: **yes**


<a name="v3-2-0" />
### 3.2.0 (2019-03-10)

* Dashboard internationalized (English and Portuguese)
* Add support for storing end-user keys with PIN protection ("cloud HSM")
* Add support for creating certificate orders associated with user accounts
* CA name is now suggested based on the selected key
* Allow empty organizational units field during CA Certificate issuing and root CA creation
* Add partial support for theming (only affects emails for now)
* Add command [test-email](on-premises/tool/test-email.md)
* Bug fixes
  * Validity field was shown during order creation even when the selected template did not allow a custom validity
  * Initialization errors were not shown on dashboard

Updates database model: **yes**


<a name="v3-1-0" />
### 3.1.0 (2019-02-22)

* OpenID Connect integration is now optional
* Add [command-line tool](on-premises/tool/index.md) with:
  * Command [update-db](on-premises/tool/update-db.md) to manually update the database
  * Command [hash-root-pass](on-premises/tool/hash-root-pass.md) to compute a salted hash for a given root password
* Default subscription is now created on first run
* Fix bug that caused settings on JSON configuration file to have precedence over environment variables (which should have top precedence)

Updates database model: no


<a name="v3-0-0" />
### 3.0.0 (2019-02-06)

* Dashboard entirely redesigned
* Add support for performing operations on the dashboard that before had to be done via API:
  * Certificate template management
  * Creation of CAs that issue attribute certificates
* Add [support for Docker](on-premises/docker/index.md)
* Changed logging on Linux to write logs on the systemd journal ([click here for details](on-premises/linux/troubleshoot/check-logs.md))
* Improve end-user PK certificate profile, adding extension AuthorityKeyIdentifier

Updates database model: **yes**

Configuration changes: see [Update Amplia from 2.16 to 3.0](on-premises/update-30.md)


<a name="v2-16-1" />
### 2.16.1 (2019-12-12)

* Add option to configure an alias for the identity type on the *PrivateID* certificate template

Updates database model: no


<a name="v2-16-0" />
### 2.16.0 (2019-12-10)

* Add attribute certificate type *PrivateID*

Updates database model: no


<a name="v2-15-2" />
### 2.15.2 (2019-12-04)

* Changed Linux configuration template to log to */var/log/amplia* directory

Updates database model: no


<a name="v2-15-1" />
### 2.15.1 (2019-09-12)

* Improve PK certificate type *Cnb* (customer-specific)

Updates database model: no


<a name="v2-15-0" />
### 2.15.0 (2019-08-10)

* Add [support for Linux](on-premises/linux/index.md)
* Add database key store
* Add support for storing blobs on local file system
* Add support for SMS provider [TotalVoice](https://www.totalvoice.com.br/)
* Add certificate type information (A1/A3) to PKI Brazil (ICP-Brasil) certificates
* Improve certificate order creation page
* Scalability improvement: data protection keys are now stored on the database
* Security improvement: add support for encrypting data protection keys (required to use the new database key store)
* Bug fixes
  * Fix race condition that allowed two certificates to be issued for the same order
  * Fix validation bug that allowed an order to be created without a `validityEnd` with a template without a default validity

Updates database model: **yes**

Configuration changes:
* `General:EncryptionKey`: optional (for backward compatibility), but highly recommended to fill this setting with an encryption key
  (see key generation instructions for [Windows](on-premises/windows/install.md#encryption-key-generation) or [Linux](on-premises/linux/install-ubuntu.md#encryption-key-generation))

<!-- TODO: add link to EncryptionKey generation instructions -->


<a name="v2-14-1" />
### 2.14.1 (2019-06-13)

* Bug fixes
    * Textual search in certificates and orders was not working with partial terms.
    * Fixed error while trying to revoke attribute certificate.

Updates database model: no

Configuration changes: none

<a name="v2-14-0" />
### 2.14.0 (2019-06-11)

* Interface to view and unlock blocked orders
* Order creation screen tailored to order CA, Template and mobile phone.
* Temporarily disabled order edition 

Updates database model: no

Configuration changes: none

<a name="v2-13-0" />
### 2.13.0 (2019-05-09)

* Added possibility to configure emails sent by system (theme and pictures)
* Created API for sending SMS with link for issuing certificate 
* Added `KeyMediaConstraints` field in `OrderModel`

Updates database model: no

Configuration changes:
* `General:Theme` (optional)
    * Valid values: empty (standard) or `Teal`

<a name="v2-12-1" />
### 2.12.1 (2019-04-18)

* PKI SDK updated to version [2.4.0]
(https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-4-0)
* Bug fixes
    * SSL certificates do not allow wildcard use
    * Accumulation of jobs of CRL emission when the emission is impossible for long time

Updates database model: no

Configuration changes: none

<a name="v2-12-0" />
### 2.12.0 (2019-03-21)

* Certificate issue on mobile

Updates database model: no

Configuration changes:

* `General:SmsContextInfo` (optional)
    * Allows you to configure a string to be used as "context" information in SMS sent by the system, for example: "Link for issuing your certificate on *platform X*:..." (in this example, the configuration value would be `in platform X`)
* Optional settings for custom mobile application usage (standard all empty settings)
    * `PkiSuite:MobileAppName`
    * `PkiSuite:MobileAppCodeSuffix`
    * `PkiSuite:MobileIOSStoreUri`
    * `PkiSuite:MobileAndroidStoreUri`

<a name="v2-11-1" />
### 2.11.1 (2019-02-26)

* Added validation of email address in the creation of ICP-Brasil type certificate requests (PKIBrazil)
* PKI SDK updated to version [2.3.0]
(https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-3-0) (RTM)

Updates database model: no

Configuration changes: none

<a name="v2-11-0" />
### 2.11.0 (2019-02-15)

* Added certificate support for blockchain [IBMHyperledger]
(https://www.ibm.com/blockchain/hyperledger)
* Added elliptic curves support (ECC)
    * Certificate Issuing with ECC key
    * ECC key storage in Azure Key Vault -- supported curves:
        * P-256 (secp256r1)
        * P-256K (secp256k1)
        * P-384 (secp384r1)
        * P-521 (secp521r1)
* PKI SDK updated to version [2.3.0]
(https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-3-0) (beta 3)

Updates database model: no

Configuration changes: none

<a name="v2-10-3" />
### 2.10.3 (2019-01-21)

* Improvements to SMS sending configuration
* PKI SDK updated to version [2.2.6]
(https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-2-6)

Updates database model: no

Configuration changes:

* `SMS:Type` (optional)
    * Sets the sending SMS provider
    * Valid values: empty (standard) or `Twilio` (support will be added in the future for other providers)
    * If the configuration is omitted, the value `Twilio` (for backward compatibility)
* New Twilio settings: you can specify `SMS:AccountSid` and `SMS:AuthToken` instead of specifying `SMS:TwilioBasicCredential`
    * The old configuration `SMS:TwilioBasicCredential` is still supported for backward compatibility

<a name="v2-10-2" />
### 2.10.2 (2019-01-17)

* ASP.NET Core updated to 2.2
* New setting file for IIS (appsettings.iss.json)
* Fixed encoding of the role information on certificate type 6

Updates database model: no

Configuration changes: none

<a name="v2-10-1" />
### 2.10.1 (2019-01-14)

* Fixed bug that caused certificate issue error when Web PKI was not installed

Updates database model: no

Configuration changes: none

<a name="v2-10-0" />
### 2.10.0 (2019-01-10)

* First version available to install *on-premises* 


