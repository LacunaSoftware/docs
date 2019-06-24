# Amplia changelog


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

* Added validation of email address in the creation of ICP-Brazil type certificate requests (PKIBrazil)
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


