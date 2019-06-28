# Installing Amplia on Windows Server

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

To install your own instance of [Amplia](../../index.md) on Windows Server, follow the steps on this article.

For other platforms, [click here](../index.md).

## Database operation mode

Amplia can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update (when needed)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrador (using a command line tool)

Granting owner privileges to the application is simpler, while granting only read and write ensures you greater control over the database. The decision
is up to you. If not sure what to choose, we recommend granting owner privileges (option 1), since the updates are simpler that way.

Some of the setup instructions depend on the option you choose.

## Prerequisites

* Windows Server 2016 or newer (any edition)
* SQL Server 2016 or newer (recommended edition Standard or better)
* PKI SDK license (in Base64 format)
* Web PKI license (Base64/binary format) -- only needed if users will issue certificates on their computers (web issuing procedure)

> [!NOTE]
> This documentation is intended for Windows Servers with GUI installed. For Core installations (shell access only), please contact us.

You will also need a connection string to a **database** previously created having:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with the following database roles:
  * If the application should be owner of the database: `db_owner`
  * If the application should only have read and write permissions: `db_datareader` and `db_datawriter`

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, [click here](prepare-database.md).

## Planning before installation

Before you start, you should plan ahead on where you intend to store your Certification Authority (CA) keys and where will your Certificate
Revocation Lists (CRLs) be published. Please read the sections below for details on each of these decisions.

### Key storage

TODO

### CRL publishing (*access domains*)

Certificates issued by Amplia include the X.509 *CRL Distribution Point* extension, which contains links to locations where a third party desiring to validate
the certificate should obtain the latest Certificate Revocation List (CRL) of the CA, required to determine the revocation status of the certificate.

These links have the following format: *http://your-ca-domain/crls/my-ca.crl*

The `your-ca-domain` part of the link is called on the Amplia configuration an *access domain*. You must choose at least one access domain, but
it is recommended to have two access domains, preferably independent of each other, for instance:

* *ca.patorum.com*
* *ca.patorum.net*

These domains should be chosen keeping in mind that they will have to be maintained for a long time (for the entire lifetime of the certificates
issued on your Amplia instance, which is tipically several years). They also need to be allocated exclusively for the Amplia instance -- using a virtual
directory (subfolder) on a domain hosting another web application is not supported.

The chosen access domains should be created on the DNS servers (either A or CNAME records) pointing to the server on which Amplia will be installed.

> [!TIP]
> One of the access domains may me the domain on which the Amplia dashboard will be accessed.

> [!TIP]
> You do not need an SSL certificate for your access domains. Since X.509 recommends that CRLs be distributed over HTTP instead of HTTPS, the
> certificates are issued with links using the HTTP protocol.

## Installation

1. Install IIS
1. https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.2.5-windows-hosting-bundle-installer
   * https://aka.ms/dotnetcore-2-2-windowshosting
1. Create folder for site
1. Create folder for logs
1. Create site
   * No managed code
1. Extract files
1. Rename appsettings.iis-template.json
1. Edit appsettings.iis.json

* Configure the connection string

* Configure the log folder

* Section `General`
  * `SiteUrl`: publicly accessible URL of the website (e.g.: `https://ca.patorum.com/`). This address is used to compose emails with links back to the website 
  * `AutoUpdateDatabase`: se to `false` if the application does not have permissions to perform model changes to the database, or leave commented otherwise (or se to `true`)
  * `SupportEmailAddress`: the support email address (used when composing emails)

* Section `Amplia`
  * `DefaultKeyStore`: the default key store on which to create new keys
  * `DefaultAccessDomains`: domains to be used when composing the CRL distribution points

* Section `ApplicationInsights`
  * `InstrumentationKey`: if you want to collect additional instrumentation data with
    [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), fill this setting with the "instrumentation key"
	for an Insights account

* Section `Storage`: in order to keep the database tidy, Amplia does stores files outside of the database. Files may be stored in different *providers*. The setting
  `Type` defines which provider should be used, and the remaining settings depend on the provider chosen.
  * File system
    * `Type`: set this setting to `FileSystem` to store files on the local file system
    * `Path`: set the path of the folder on which to store files. Make sure the application has access to the folder
  * [Azure Storage](https://azure.microsoft.com/en-in/services/storage/)
    * `Type`: set this setting to `Azure` to store files on an Azure Storage account
	* `ConnectionString`: provide a connection string to the account
	* `ContainerName`: the of the blob container on which to store files
  * Amazon S3 (coming soon, contact us if you need it)

* Section `PkiSuite`
  * `SdkLicense`: your license for the PKI SDK, in Base64 format (**required**)
  * `WebLicense`: your license for the Web PKI component in binary (Base64) format. Only required if users will issue certificates on their computers (web issuing procedure)
  * `WebBrand`: if you have a custom *setup brand* on Web PKI, set it here

* Section `Email`
  * `Enabled`: by default, email sending is enabled. To disable it, set this setting to `false` and ignore the remainder of this section
  * `ServerHost`: hostname of the SMTP server
  * `EnableSsl`: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
  * `ServerPort`: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
  * If the SMTP server requires authentication, set the settings `Username` and `Password`
  * `SenderAddress`: email address to be used as sender (*from* field)
  * `SenderName`: name to be used as the sender name (optional)

* Section `Oidc`: the Amplia dashboard requires an Open ID Connect (OIDC) server to perform authentication of users
  * `Authority`: the OIDC authority (e.g.: `https://id.patorum.com`)
  * `ApiName`: the API scope that will be required on access tokens
  * `DashboardClientId`: the *client id* of the dashboard app

* Section `SMS`: if users will issue certificates (either web or mobile issuing procedure), a SMS confirmation is required to confirm the identity of the user during the
  certificate issue procedure. SMS messages may be sent using different *providers*. The setting `Type` defines which provider should be used, and the remaining settings
  depend on the provider chosen.
  * [Twilio](https://www.twilio.com/)
    * `Type`: set this setting to `Twilio` to send SMS messages using Twilio
    * `MessageFrom`: the sender phone number provided by Twilio (e.g.: `+12125550000`)
    * `AccountSid`: the account SID, provided by Twilio
    * `AuthToken`: the authentication token, provided by Twilio
  * If you wish to use other SMS provider, please contact us

* Section `KeyStores`: on this section, each key is the name of a key store, having as value a JSON section with the key store's configuration. For instance:
  ```json
    "KeyStores": {
      "MyHSM": {
        "Type": "...",
        "Setting1": "...",
        "Setting2": "...",
		...
      },
      ...
    }
  ```
  The setting `Type` defines the type of the key store, and the remaining settings depend on the provider chosen.
  * PKCS #11
    * `Type`: set this setting to `Pkcs11` to specify a key store which uses a PKCS #11 module to store keys
    * `Module`: name of the PKCS #11 DLL (e.g.: `eTPKCS11.dll`)
    * `Pin`: PIN of the module, if required
    * If multiple tokens will be present, you can specify the token to be used with the setting `TokenSerialNumber`
  * CAPI (Windows Cryptographic API)
    * `Type`: set this setting to `CAPI` to specify a key store which uses a CAPI crypto service provider (CSP) to store keys
    * Every CAPI CSP is identified by its *name* and *type*. Set these values on the settings `ProviderName` and `ProviderType`
    * `ExportableKeys`: whether to generate keys marked as exportable (`true` or `false`, default `true`)
    * `UseMachineStore`: every CAPI CSP has the concept of storing keys on the *user store* or on the *machine store*`. By default, the
      user store is used. Set this setting to `true` to use the machine store
    * `Pin`: the PIN of the store, if required
    * `OverrideKeyPins`: ?
    * `RememberKeyPins`: ?
  * CNG (Windows Cryptography API - Next Generation)
    * `Type`: set this setting to `CNG` to specify a key store which uses a CNG key storage provider (KSP) to store keys
    * `ProviderName`: name that identifies the KSP to be used
    * `UseMachineStore`: every CNG KSP has the concept of storing keys on the *user store* or on the *machine store*`. By default, the
      user store is used. Set this setting to `true` to use the machine store
    * `Pin`: the PIN of the store, if required
    * `OverrideKeyPins`: ?
    * `RememberKeyPins`: ?
  * [Azure Key Vault](https://azure.microsoft.com/en-in/services/key-vault/)
    * `Type`: set this setting to `AzureKeyVault` to specify a key store which stores keys on an Azure Key Vault account
	* `Endpoint`: DNS Name of the key vault (show on tab *Overview* of key vault) -- e.g.: `https://my-keys.vault.azure.net/`
	* `AppId`: Application ID to be used to authenticate with Azure
	* `AppKey`: Application secret key to be used to authenticate with Azure (for additional security, omit this value and specify the `CertThumb` instead)
	* `CertThumb`: thumbprint of the certificate to be used to authenticate with Azure (hex-encoded, as provided by the Azure Portal)
	* `UseHsm`: by default, [HSM-protected](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) keys are created. To use "software"
	   keys, set this value to `false`

## See also

* [Updating Amplia on Windows Server](update.md)
* [Troubleshooting](troubleshoot/index.md)
