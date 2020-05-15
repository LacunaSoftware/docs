# Signer changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

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


* Correções de bugs
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


#<a name="v1-0-0" />
#### 1.0.0 (2020-00-00)
#
#* New Features
#* Improvements
#* Bug fixes
#  * ...
#  * ...
#
#Updates database model: no
