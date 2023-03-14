# Rest PKI Core changelog

<a name="vnext" />
<a name="v2.0.0" />
## 2.0.0 (upcoming version)

Updates database model: **yes**

### New features

RPNG-155 Add support for legacy certificate authentication APIs

RPNG-159 Add support for legacy PDF signature APIs

RPNG-161 Add support for legacy XML signature APIs

RPNG-162 Add support for legacy PDF marking APIs

RPNG-177 Add support for signature policies



<a name="v1-12-1" />
## 1.12.1 (2023-01-05)

Updates database model: no

### Improvements

RPNG-164 Improve configuration on Linux



<a name="v1-12-0" />
## 1.12.0 (2022-12-13)

Updates database model: **yes**

### New Features

RPNG-158 Add support for PostgreSQL

### Improvements

RPNG-156 Updated ASP.NET Core to version 6.0

### Bug fixes

RPNG-152 Cannot add trusted roots on security context creation page



<a name="v1-11-0" />
## 1.11.0 (2022-11-14)

Updates database model: **yes**

### Improvements

RPNG-154 Add setting to control PDF marks left and top margins



<a name="v1-10-2" />
## 1.10.2 (2022-05-03)

Updates database model: no

### Improvements

RPNG-149 Add setting to force brazilian pdf signing policies



<a name="v1-10-1" />
## 1.10.1 (2022-04-23)

Updates database model: no

### Bug fixes

RPNG-148 Error when using custom security contexts



<a name="v1-10-0" />
## 1.10.0 (2022-04-23)

Updates database model: **yes**

### New Features

RPNG-2 Add certificate authentication API

### Improvements

RPNG-146 Allow configuration of PDF marks

RPNG-147 Allow configuration of PDF marking policy



<a name="v1-9-0" />
## 1.9.0 (2022-03-29)

Updates database model: no

### New Features

RPNG-41 Signature validation API

RPNG-141 Security context management on the web interface



<a name="v1-8-0" />
## 1.8.0 (2022-02-25)

Updates database model: **yes**

### Improvements

RPNG-10 Signature session [certificate requirements](integration/signature-sessions/certificate-requirements.md)



<a name="v1-7-0" />
## 1.7.0 (2022-01-25)

Updates database model: **yes**

### New Features

RPNG-135 Detached CAdES signatures

RPNG-44 UI to monitor calls \(especially errors\) to webhooks and file validation API

### Improvements

RPNG-51 UI to configure the subscription theme and customizable assets

### Bug fixes

RPNG-144 Session signature images are broken after authentication flow with cloud certificate provider



<a name="v1-6-0" />
## 1.6.0 (2021-12-08)

Updates database model: no

### New Features

RPNG-129 Add support for using cloud certificates on signature sessions

### Improvements

RPNG-139 Return more information about the signer's certificate on `SignatureSessionModel`



<a name="v1-5-1" />
## 1.5.1 (2021-11-23)

Updates database model: no

### Bug fixes

RPNG-140 Root password authentication error



<a name="v1-5-0" />
## 1.5.0 (2021-09-30)

Updates database model: **yes**

### New Features

RPNG-132 Add support for CAdES/CMS signatures

RPNG-93 Signature sessions with predefined documents

### Improvements

RPNG-138 Remove validation marks from document previews

RPNG-136 Add valiation marks to PDFs even if using CAdES/CMS signature

RPNG-128 Improve usage of theme assets to allow logos with varying aspect ratios

RPNG-120 Handle invalid/corrupt PDF exception properly

### Bug fixes

RPNG-119 Cached versions of acceptable filename patterns are shown on the management UI

### Client-specific changes

RPNG-130 Flavour ONR



<a name="v1-4-2" />
## 1.4.2 (2021-08-24)

Updates database model: no

### Improvements

RPNG-126 Add background worker count configuration

### Bug fixes

RPNG-125 Segmented upload error



<a name="v1-4-1" />
## 1.4.1 (2021-08-24)

Updates database model: no

### Improvements

RPNG-122 Improve validation notice on documents

RPNG-85 Adjustments to document key input

### Bug fixes

RPNG-124 Errors under high demand

RPNG-123 Retries of signature background processing always fail if a certain amont of time has elapsed



<a name="v1-4-0" />
## 1.4.0 (2021-08-11)

* First publicly available version
