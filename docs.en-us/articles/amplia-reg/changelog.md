# Amplia Reg changelog

<!--
<a name="vnext" />
-->

<a name="v2-5-0" />
## 2.5.0 (2024-01-25)

Updates database model: **yes**

### New Features

ARNG-226 Automatic certificate renewal alert sending

ARNG-317 Support for exporting order lists to CSV



<a name="v2-4-1" />
## 2.4.1 (2023-10-30)

Updates database model: **yes**

### Improvements

ARNG-384 Increase maximum DNOrganization size on BR certificate types to 200 characters

### Bug fixes

ARNG-382 Error saving certificate type without documents

ARNG-383 Order listings on the AVP home page do not filter by the selected AR

ARNG-385 Unable to filter orders by RUC \(PY\) 

ARNG-386 Documents such as ID and photo appear twice on the order details screen



<a name="v2-4-0" />
## 2.4.0 (2023-10-23)

Identical to: 2.4.0 RC 2 (2023-10-23)

Updates database model: **yes**

### New Features

ARNG-294 Mechanisms to unlink an order's validation agent

ARNG-329 Accept sale number on order creation API \(externally defined\)

ARNG-357 Custom holder file types

### Improvements

ARNG-332 Support for reusing another order's documents

ARNG-372 Send revocation request as attachment on revocation notification emails

ARNG-376 Version 2 of prepare certificate issue API (`POST /api/orders/v2/issue`)

### Bug fixes

ARNG-373 Documents of type `CaboVerdeTechnicalManagerDesignation` are persisted as `CaboVerdeLegalRepresentantDesignation`

ARNG-375 Order details page is not displaying buttons to revoke certificate nor resend issue notifications

ARNG-377 When the agent that revokes a certificate is not the original validation agent, the wrong agent name appears on the request document



<a name="v2-3-1" />
## 2.3.1 (2023-10-23)

Updates database model: no

### Bug fixes

ARNG-381 Error *System.ArgumentNullException: Path cannot be null. (Parameter 'path')* (introduced on [v2.3.0](#v2-3-0))



<a name="v2-3-0" />
## 2.3.0 (2023-10-20)

Identical to: 2.3.0 RC 3 (2023-09-22)

Updates database model: **yes**

### New features

ARNG-201 Brazilian organizational certificate

ARNG-258 Integration with RFB's prior validation API (BR only)

ARNG-330 Integration with SERPRO's organization query service (BR only)

ARNG-352 Orders without confirmation

### Improvements

ARNG-266 Improvements to validation agent's home page

ARNG-347 Add support for NTP synchronization

ARNG-355 Postpone and allow changing the definition of holder type

ARNG-356 Facial validation also on presential orders (configurable)

ARNG-365 Show holder type options in the orderer in which they appear on the certificate type

ARNG-366 Improvements to BrazilCertificateType to add DN fields O= and OU= required by RFB

### Bug fixes

ARNG-148 Camera remains active after leaving photo capture component

ARNG-344 Error when agent attempts to issue certificate before approval

ARNG-345 Issue type selector gets duplicate "Videoconference" items when changing between certificate types

ARNG-353 Certificate type details page does not show whether the type allows videoconference

ARNG-359 Error when creating a Brazilian certificate type

ARNG-364 Error when creating a holder type

ARNG-370 DN field C= of Brazilian certificates is being encoded with the wrong value



<a name="v2-2-0" />
## 2.2.0 (2023-08-08)

Updates database model: **yes**

### New features

ARNG-362 Validation by videoconference

### Improvements

ARNG-342 Add configuration to certificate types to issue software certificates with non-exportable key



<a name="v2-1-0" />
## 2.1.0 (2023-07-26)

Updates database model: **yes**

### New features

ARNG-341 Automatic signature of documentation in pre-approved orders



<a name="v2-0-3" />
## 2.0.3 (2023-07-11)

Updates database model: no

### Bug fixes

ARNG-340 Videoconference recordings cause error when generating order documentation (introduced on [v2.0.2](#v2-0-2))



<a name="v2-0-2" />
## 2.0.2 (2023-07-11)

Updates database model: no

### Improvements

ARNG-338 Add holder file type `VideoConferenceRecording`



<a name="v2-0-1" />
## 2.0.1 (2023-06-07)

Updates database model: no

### Improvements

ARNG-335 Remove all occurrences of term "protocolo", replacing with "número do pedido"

### Bug fixes

ARNG-336 Theme `djp` is not affecting emails



<a name="v2-0-0" />
## 2.0.0 (2023-06-02)

> [!WARNING]
> **Breaking change:** in order to allow externally defined order numbers, `OrderSummary.Number` is now `string` (used to be `long`) and
> contains the *formatted* order number. This should only affect you if you have call Amplia Reg's APIs programmatically.

Updates database model: **yes**

Minimum Amplia version: 4.4.0

Minimum PSC version: 1.1.2

### New features

ARNG-334 Allow customization of the digest algorithm on certificate types

### Improvements

ARNG-321 Allow externally defined order numbers

ARNG-322 SISP agreement generation

ARNG-323 Replace *protocolo* by *pedido* on PT l10n whenever it is used to refer to order and not order number

ARNG-324 Improved "customer accounts" feature

ARNG-326 Change issue page labels for `CaboVerde`

ARNG-327 Revise SISP document generation

### Bug fixes

ARNG-325 Fix filling of holder and organization fields on CV certificates

ARNG-333 Columns `NormalizedOrganizationIdentifier` and `NormalizedOrganizationName` are being filled incorrectly, affecting order searching



<a name="v1-8-0" />
## 1.8.0 (2023-04-06)

Updates database model: no

### New Features

ARNG-306 Integration with SISP SMS gateway

### Improvements

ARNG-313 Holder type management improvements

ARNG-319 Additional CV holder file types

### Bug fixes

ARNG-308 RA users cannot use search components after clicking the *Clear* button

ARNG-318 Client/campaign autocomplete stops working on validation page if order is autofilled



<a name="v1-7-0" />
## 1.7.0 (2023-03-06)

Updates database model: **yes**

### New Features

ARNG-257 Client/campaign field on orders

ARNG-316 Cumnulative certificates by type report



<a name="v1-6-0" />
## 1.6.0 (2023-03-02)

Updates database model: **yes**

### New Features

ARNG-172 Certificate type management

ARNG-250 Holder type management

### Improvements

ARNG-283 Add support for PostgreSQL

ARNG-303 Improved SSL certificate to support *Autenticação Web* certificates (Cape Verde)

ARNG-312 Field `CustomTypeDenominator` on CV certificate types

### Bug fixes

ARNG-310 Paged query over registration agents does not have a order by clause



<a name="v1-5-0" />
## 1.5.0 (2023-02-07)

Updates database model: **yes**

### Improvements

ARNG-263 Add certificate serial number and crypto device information to agreements

ARNG-307 Allow applications with Electronic RA role to issue certificates without CAPTCHA

ARNG-309 Replace term "suscriptor" by "titular" on ES localization



<a name="v1-4-1" />
## 1.4.1 (2023-01-11)

Updates database model: no

### Bug fixes

ARNG-299 Requests made by Amplia during cloud certificate issue procedure are forbidden



<a name="v1-4-0" />
## 1.4.0 (2023-01-09)

Updates database model: **yes**

### New Features

ARNG-222 Preapproved order creation API

ARNG-269 Flavour `CaboVerde`

ARNG-270 Cape Verde certificate format

ARNG-271 SSL/TLS certificate format

ARNG-279 Theme `djp` \(*deep jungle princeton*\)

ARNG-281 Certificate issue by CSR

ARNG-293 Add command `init-data` to simplify setup procedure

### Improvements

ARNG-232 Review authorization and add auditor role

ARNG-282 Update ASP.NET Core to version 6.0

ARNG-254 Make Azure Maps configuration optional

ARNG-255 Deprecate Google Maps Embed configuration

ARNG-274 Change "Distrito Capital" into simply "Capital" on PY addresses

ARNG-277 Implemented check for certificate adequacy for signature and search for adequate similar certificate

ARNG-278 Key size configuration per certificate type

ARNG-287 Add support for crypto provider IDGo 800

ARNG-288 Improve device CA configuration method

ARNG-292 Add system version visible on pages

### Bug fixes

ARNG-248 Order list on confirmation agent home page should not be sortable

ARNG-260 Alphanumeric input fields for PY certificates are not accepting `Ñ` character

ARNG-280 Automatic sign-out due to session timeout is interrupted by discard confirmations

ARNG-285 An error occurrs if the order has a photo and the documents step is loaded

ARNG-286 Image cropping seems to be cropping more than what the user selected

ARNG-289 Unused database column `Subscription.LegalRepresentantId1`

ARNG-290 Configuration `Order:CloudIssueUrl` should be optional


<a name="v1-3-0" />
## 1.3.0 (2022-11-11)

Updates database model: **yes**

### New Features

ARNG-240 Public certificate search page

### Improvements

ARNG-245 Register geolocation when capturing subject's biometry

ARNG-249 Add clauses to Code100's agreement

ARNG-259 Add clause with revocation URL to Code100's agreement

ARNG-261 Allow capturing documents through webcam

ARNG-262 Generate and sign revocation letter when revocation is performed by an agent \(and not by the subject\)

ARNG-264 Move down form row with company fields \(PY\)



<a name="v1-2-0" />
## 1.2.0 (2022-10-14)

Updates database model: **yes**

### New Features

ARNG-230 Session idle timeout

### Improvements

ARNG-244 Refactor certificate types

ARNG-242 Additional filters on order search

ARNG-219 Allow confirmation agents to pick orders to confirm arbitrarily from a list

### Bug fixes

ARNG-241 Cannot type letters on the identifier filter of the order search \(PY identifiers are now alphanumeric\)

ARNG-231 Overlapping fields on order confirmation



<a name="v1-1-2" />
## 1.1.2 (2022-09-26)

Updates database model: no

### Improvements

ARNG-228 SMS provider Tigo



<a name="v1-1-1" />
## 1.1.1 (2022-09-26)

Updates database model: no

### Improvements

ARNG-229 Display friendly message when agent certificate is not found



<a name="v1-1-0" />
## 1.1.0 (2022-09-19)

Updates database model: **yes**

### New Features

ARNG-217 Pre-fill order data from previous orders

ARNG-210 Document generation customizations for Code100

ARNG-224 Add support for SMS provider Amazon SNS

ARNG-227 Add support for "EmailDump" SMS provider

### Improvements

ARNG-223 Hide selection of validation kind while face-to-face is the only option actually implemented

ARNG-220 Pre-select token if a single token is detected

ARNG-213 Revise reasons for opening pending issues, refusal and revocation

ARNG-211 Improve initialization of PY certificate types

ARNG-209 Display maximum file on document upload page

ARNG-200 Allow validation agents to revoke certificates

ARNG-186 Refactor history recording

ARNG-225 Registering events on application log

### Bug fixes

ARNG-216 Error 400 when attempting to change the birth date to an invalid date

ARNG-215 Oversized images overlap buttons on confirmation page

ARNG-207 Order number input does not accept pasting formatted numbers

ARNG-202 "Start validation" checkbox is appearing when creating an order from management area



<a name="v1-0-2" />
## 1.0.2 (2022-08-17)

Updates database model: no

### Bug fixes

ARNG-206 BR certificates are not issued according to RFB regulations

ARNG-160 Voter registration data should not be mandatory for BR certificates



<a name="v1-0-1" />
## 1.0.1 (2022-08-16)

Updates database model: no

### Bug fixes

ARNG-205 Cannot view documents on order details

ARNG-204 Document generation error for BR certificates



<a name="v1-0-0" />
## 1.0.0 (2022-08-15)

Updates database model: **yes**

### New Features

ARNG-199 New PY certificate types

ARNG-181 Certificate revocation by subject

ARNG-180 Certificate revocation by agents

ARNG-173 Allow users to create an order an immediately start its validation

ARNG-118 Device authentication

ARNG-126 Device managament

### Improvements

ARNG-203 Accept alphanumeric document numbers for PY certificates

ARNG-193 Refactor certificate issuing to postpone issuance of certificate to after agreement signature by subject

ARNG-192 Improve agreement

ARNG-188 Make ahead-of-time issuance optional and performed after order is sent to confirmation queue

ARNG-184 Improvements to order search page

ARNG-183 Improvements to order details page

ARNG-179 Store information about crypto token used to issue certificate

ARNG-177 Remove address fields from PY certificates

ARNG-175 Improve displaying of documents in confirmation page

ARNG-159 Validation agent's signature over agreement and dossier

### Bug fixes

ARNG-194 Order number series is not taken into account when computing order number check digit



<a name="v1-0-0-rc12" />
## 1.0.0 RC12 (2022-07-05)

First publicly available version
