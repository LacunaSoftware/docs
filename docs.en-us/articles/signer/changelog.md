# Signer changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

<a name="v1-7-0" />
### 1.7.0 (2020-07-02)

* Bug fixes
  * [SIG-370] - Ticket parameter displayed in the Upload API documentation
  * [SIG-379] - Fix organization creation without Identifier (CNPJ)
  * [SIG-380] - Fix deed creation

* Improvements
  * [SIG-316] - Batch signature with HSM certificates
  * [SIG-317] - Changes to support Ecuador
  * [SIG-361] - Configure enabled/displayed document types
  * [SIG-376] - List documents with API key

Updates database model: no

<a name="v1-6-2" />
### 1.6.2 (2020-06-25)

* Bug fixes
  * [SIG-377] - Error viewing document details of a document with observer that is not in the flow

Updates database model: no

<a name="v1-6-1" />
### 1.6.1 (2020-06-24)

* Improvements
  * [SIG-374] - Add metallic-seaweed-emerald (MSE) theme

Updates database model: no

<a name="v1-6-0" />
### 1.6.0 (2020-06-24)

* New Features
  * [SIG-349] - Load document creation page with an upload file pre-loaded
  * [SIG-360] - Embedded signature integration

* Improvements
  * [SIG-227] - Simplify Swagger samples
  * [SIG-320] - Improve signature marks in printer friendly version for documents with a lot of signers
  * [SIG-327] - Update message in document upload validation to singular
  * [SIG-334] - Add document validation APIs documentation on Swagger
  * [SIG-335] - MoviDesk and JivoChat integration
  * [SIG-339] - Add Setting to configure if actions in the document flow should be ordered by default

* Bug fixes
  * [SIG-307] - Fix DevOps tests
  * [SIG-352] - Error while viewing user's events
  * [SIG-356] - Error while creating document if electronic signature is enabled and IsAllowedByDefault setting is true
  * [SIG-357] - Timeout retrieving document details with many participants
  * [SIG-358] - Missing translations in the edit flow email notification
  * [SIG-359] - Batch electronic signature is redirecting to Web PKI installation page

Updates database model: yes

<a name="v1-5-0" />
### 1.5.0 (2020-06-15)

* New Features
  * [SIG-331] - Send email to all participants after the document is concluded
  * [SIG-343] - Batch Electronic Signature
  * [SIG-344] - Option to configure if electronic signature is allowed by default

* Improvements
  * [SIG-311] - Setting to set geolocation as required for electronic signature
  * [SIG-318] - Allow participant to access the document after signing/approving in the public area
  * [SIG-326] - Automated tests for scanned document with Scanner
  * [SIG-332] - Add application name in the PDF properties
  * [SIG-341] - Hide printer friendly version

* Bug fixes
  * [SIG-347] - Fix translations in the document validation page

Updates database model: yes

<a name="v1-4-1" />
### 1.4.1 (2020-06-08)

* Bug fixes
  * [SIG-313] - Wrong internationalization (en) for the approval and sign email

Updates database model: no

<a name="v1-4-0" />
### 1.4.0 (2020-06-08)

* New Features
  * [SIG-216] - Instance settings to configure details of the print version

* Improvements
  * [SIG-249] - Add notification internationalization
  * [SIG-285] - Removed fast scan button and updated behaviour of the scan flow
  * [SIG-294] - Send set password email for new users
  * [SIG-312] - Add setting to configure if visual representation information should be placed in the middle of the rectangle
  * [SIG-314] - Improve Scanner integration settings
  * [SIG-323] - Enable batch download
  * [SIG-329] - Add more auditing events

* Bug fixes
  * [SIG-313] - Folder document status shown as Pending when it is concluded

Updates database model: yes

<a name="v1-3-2" />
### 1.3.2 (2020-05-15)

* Bug fixes
  * [SIG-310] - Exceptions while logging special characters from PKI SDK stack traces

Updates database model: no

<a name="v1-3-1" />
### 1.3.1 (2020-05-05)

* Bug fixes
  * [SIG-309] - Hide batch download until Web PKI update

Updates database model: no

<a name="v1-3-0" />
### 1.3.0 (2020-05-05)

* New Features
  * [SIG-178] - Batch download
  * [SIG-187] - Select signature format (CADeS or PADeS) in the document creation API
  * [SIG-190] - Enable administrators to view documents from users/organizations
  * [SIG-287] - Enable applications to generate a link to an external action

* Improvements
  * [SIG-161] - Enable administrators to update user data
  * [SIG-193] - Add link to PDF user manual
  * [SIG-262] - Improvements to Authentication funcionality (on Fast Signature)
  * [SIG-293] - Sign terms of service with electronic signature
  * [SIG-297] - Add document list in administration
  * [SIG-301] - Responsiveness fixes and removed scrolls that showed while loader was being displayed
  * [SIG-302] - Validate Adobe PDF signatures
  * [SIG-305] - Handle PinValidationFailed error from Amplia


* Bug fixes
  * [SIG-304] - Certificate issue requests that cannot be issued in Cloud should be ignored
  * [SIG-306] - Emails not being sent when SMS is disabled

Updates database model: **yes**

<a name="v1-2-0" />
### 1.2.0 (2020-04-29)

* New Features
  * [SIG-284] - Document validation of an uploaded signed file
  * [SIG-296] - Add settings to configure printer friendly version marks


* Improvements
  * [SIG-225] - Improved batch signature performance


* Bug fixes
  * [SIG-292] - Unified name and alias uses in SPA/Signer components
  * [SIG-295] - Fixed XAdES signatures without parameters
  * [SIG-298] - Error trying to obtain Brasilia timezone on Linux

Updates database model: **yes**

