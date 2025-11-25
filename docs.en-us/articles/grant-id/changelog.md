# GrantID changelog

<a name="v5-2-0" />
### 5.2.0 (2025-11-25)

* Improvements
  * [LI-443] Remove unnecessary and broken links from documentation
  * [LI-445] Improve validation of textual fields

* Bug fixes
  * [LI-444] SAML2 login button is not being displayed in console login
  * [LI-446] Error displaying certificate validation results when the login fails

Updates database model: no

<a name="v5-1-0" />
### 5.1.0 (2025-07-11)

* Improvements
  * [LI-438] Allow configuration of Identity Token expiration
  * [LI-439] Add support to new e-mail sending settings
  * [LI-441] Setting to disable Swagger

* Bug fixes
  * [LI-442] Fix OpenRedirect vulnerabilities

Updates database model: no

<a name="v5-0-1" />
### 5.0.1 (2025-04-24)

* Bug fixes
  * [LI-436] Error in the default Serilog settings for the Azure environment
  * [LI-437] Missing columns in the database when using Postgres

Updates database model: no

<a name="v5-0-0" />
### 5.0.0 (2025-03-27)

* Improvements
  * [LI-435] Update to NET 8

* **Important changes**:
  * Serilog usage:
	* If you used `RollingFile` replace it with `File` and the property `pathFormat` with `path`. In order to maintain *rolling* behavior add `"rollingInterval": "Day"`.
	* If you used `AzureTableStorageWithProperties` replace it with `AzureTableStorage`.
	* Standard settings were added for the Azure *environment* so now it's only required to configure the `connectionString` property in order to direct logs to a table of a Storage Acount.

Updates database model: no

> [!CAUTION]
> Starting this version the SQL Server minimum version was updated to SQL Server 2016 (13.x). To revert the compatibility to SQL Server 2014, 
> add the setting `Application__SqlServerCompatibilityLevel` with value `120`.

<a name="v4-11-0" />
### 4.11.0 (2025-03-19)

* New features
  * [LI-420] Enable reCAPTCHA by subscription
  * [LI-426] Add setting to disable logins with A1 digital certificates

* Improvements
  * [LI-422] Setting to hide number of login attempts left
  * [LI-427] Fix behavior of OTP setup
  * [LI-428] Add endpoint for Prometheus metrics
  * [LI-429] Avoid uses of Task.Run() in IdentityService
  * [LI-431] Allow creation of subscriptions only by instance administrator
  * [LI-432] Force lockout in second factor authentication
  * [LI-433] Remove Contact and Pricing pages
  * [LI-434] Added User Manager profile

Updates database model: yes

> [!WARNING]
> If you use digital certificate login, before updating to this version make sure your license supports PKI SDK versions released until 2025-03-19.

<a name="v4-10-0" />
### 4.10.0 (2024-11-04)

* New features
  * [LI-424] Add claims with the digital certificate issuer information used during login
  * [LI-425] Save data from digital certificate used during login

* Bug fixes
  * [LI-423] Fix version of phone component used in profile edit page on AuthServer

Updates database model: no

<a name="v4-9-0" />
### 4.9.0 (2024-06-25)

* New features
  * [LI-419] Setting to block user and password login
  * [LI-417] Add setting to block usage of temporary e-mail domains

* Improvements
  * [LI-367] Allow filtering of users without selecting applications
  * [LI-418] Option to define minimal level required for Gov BR authentication

* Bug fixes
  * [LI-319] Some events are being registered with AuthServer IP address
  * [LI-342] Error in users page when too many applications are selected

Updates database model: yes

<a name="v4-8-0" />
### 4.8.0 (2024-05-03)

* Improvements
  * [LI-414] Improve safety against HTML Injection in URL parameters
  * [LI-415] Add lockout settings for console login
  * [LI-416] Increase max URL and max query string limits

Updates database model: no

<a name="v4-7-0" />
### 4.7.0 (2024-04-18)

* Improvements
  * [LI-410] Update javascript libraries
  * [LI-412] Add requirement options for digital certificates
  * [LI-413] Option to disable use of ProviderUser for external identity providers

Updates database model: no

<a name="v4-6-0" />
### 4.6.0 (2023-11-06)

* New features
  * [LI-401] Gov BR integration

* Improvements
  * [LI-403] Add option to disable client secret requirement for Code Flow + PKCE
  * [LI-404] Updated phone number validation library
  * [LI-405] Improve filtering of digital certificates
  * [LI-406] Improve name validation
  * [LI-407] Update valid characters list for username
  * [LI-408] Add Paraguay's cédula de identidad validation
  * [LI-409] Add protection against HTML injection for e-mail sending

Updates database model: no

<a name="v4-5-0" />
### 4.5.0 (2023-05-25)

* New features
  * [LI-399] API to delete user

* Improvements
  * [LI-400] Add option to not updated phone number when logging in with SAML

Updates database model: no

<a name="v4-4-0" />
### 4.4.0 (2023-05-16)

* Improvements
  * [LI-398] Add support to new SMS providers (Amazon and Tigo)

Updates database model: no

<a name="v4-3-0" />
### 4.3.0 (2023-04-25)

* New features
  * [LI-392] Login with LDAP integration
  * [LI-394] Suggest common e-mail domains when spelling errors are identified
  * [LI-396] Add support to database Blob Storage

* Improvements
  * [LI-397] Create setting to allow use of protection keys stored in fileysystem without automatic generation

Updates database model: yes

<a name="v4-2-2" />
### 4.2.2 (2023-02-14)

* Improvements
  * [LI-389] Allow configuration of signing certificate directly through PFX content (useful for Docker scenarios)

* Bug fixes
  * [LI-390] Changing the identity service port on Docker causes issues with inter-service communication

Updates database model: no

<a name="v4-2-1" />
### 4.2.1 (2023-02-07)

* Improvements
  * [LI-391] Add PostgreSQL configuration example to identity service sample configuration file

Updates database model: no

<a name="v4-2-0" />
### 4.2.0 (2023-01-26)

* Improvements
  * [LI-388] PostgreSQL support

Updates database model: yes

<a name="v4-1-0" />
### 4.1.0 (2022-12-28)

* Improvements
  * [LI-387] Add configuration to show only certificates having the `DigitalSignature` key usage

Updates database model: no

<a name="v4-0-3" />
### 4.0.3 (2022-12-07)

* Improvements
  * [LI-377] .NET 6 support

Updates database model: yes

> [!WARNING]
> Requires an updated PKI SDK license.

<a name="v3-30-1" />
### 3.30.1 (2022-07-11)

* New Features
  * [LI-377] Add claim with certificate thumbprint when logging with digital certificate

Updates database model: no

<a name="v3-30-0" />
### 3.30.0 (2022-07-07)

* Improvements
  * [LI-375] Update list of supported SMS providers
  * [LI-374] Improvoments in refresh token usage

* Bug fixes
  * [LI-376] Invalid link when a link redirector is used in the set password URL

Updates database model: no

<a name="v3-29-0" />
### 3.29.0 (2022-06-06)

* New Features
  * [LI-372] Add APIs to validate e-mail by code
  * [LI-371] Digital certificate login using Serial Number common name

* Improvements
  * [LI-373] Exact search by user informations

Updates database model: no

<a name="v3-28-0" />
### 3.28.0 (2022-05-06)

* Improvements
  * [LI-370] Fix texts in screens
  * [LI-369] Add option to define company identifier in the cloud certificate login
  * [LI-366] Updates to import command
  * [LI-363] Use thread default culture to fill AcceptLanguage header in client lib

Updates database model: no

<a name="v3-27-1" />
### 3.27.1 (2021-09-12)

* Improvements
  * [LI-365] Melhorar uso do certificado em nuvem no mobile

Updates database model: no

<a name="v3-27-0" />
### 3.27.0 (2021-09-12)

* New Features
  * [LI-362] Permitir controlar duração da autenticação

* Improvements
  * [LI-364] Correções no conteúdo dos emails

Updates database model: no

<a name="v3-26-0" />
### 3.26.0 (2021-09-01)

* New Features
  * [LI-361] HTML customization of notifications
  * [LI-359] Login with cloud certificates

* Bug fixes
  * [LI-360] Disable signup option still allows users to register when using a digital certificate

Updates database model: no

<a name="v3-25-1" />
### 3.25.1 (2021-07-01)

* Improvements
  * [LI-358] Support AWS S3 alternative authentication types
  * [LI-356] Update New Relic Sink to improve exception logs

Updates database model: no

<a name="v3-25-0" />
### 3.25.0 (2021-02-03)

* Improvements
  * [LI-355] - Update Serilog/Sinks and Blob Storage
  * [LI-354] - Add ADFS support with SAML
  * [LI-353] - Fix back to site link behavior

> [!WARNING]
> As of this version, the token issuer certificate needs to have Key Encipherment usage flag or no Key Usage restrictions.

Updates database model: yes

<a name="v3-24-0" />
### 3.24.0 (2020-12-29)

* New Features
  * [LI-350] - Add password policy to screens that define a password
  * [LI-351] - Update CPF already found message

Updates database model: no

<a name="v3-23-1" />
### 3.23.1 (2020-12-29)

* Bug fixes
  * [LI-348] - Digital certificate login events are not registered

Updates database model: no

<a name="v3-23-0" />
### 3.23.0 (2020-08-20)

* New Features
  * [LI-341] - Add setting to enable signature with certificates that have unknown revocation status
  * [LI-347] - Send mail with custom SMTP server by subscription (app setting)

* Improvements
  * [LI-344] - Update PKI SDK to accept security data certificates

Updates database model: no

<a name="v3-22-0" />
### 3.22.0 (2020-06-29)

* Improvements
  * [LI-339] - Set default country for phone number inputs

Updates database model: yes


<a name="v3-21-0" />
### 3.21.0 (2020-06-08)

* Bug fixes
  * [LI-330] - User's username is not being updated
  * [LI-331] - Non handled error while resending password recovery email

* Improvements
  * [LI-293] - Allow administrators to remove information such as email and phone number
  * [LI-327] - Digital Certificate login with non-unique Identifier (CPF) in the subscription
  * [LI-329] - Add spanish translations
  * [LI-332] - Configure White-list domains that can use iframes
  * [LI-334] - Screen to update email before 2FA verification
  * [LI-335] - Screen to update phone before 2FA verification
  * [LI-337] - Enable register with other countries identifiers

Updates database model: yes
