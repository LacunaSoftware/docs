# Amplia Reg changelog

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
