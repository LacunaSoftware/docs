# Amplia Reg changelog

<a name="v1-6-0" />
## 1.6.0 (next version)

Updates database model: **yes**

### New Features

ARNG-172 Certificate type management

ARNG-250 Holder type management

### Improvements

ARNG-283 Add support for PostgreSQL

ARNG-303 Improved SSL certificate to support *Autenticação Web* certificates (Cape Verde)

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
