# Rest PKI Core changelog

<!--<a name="vnext" />-->

<a name="v3-4-0" />
## 3.4.0 (2025-10-28)

Updates database model: **yes**

## New features

RPNG-351, RPNG-352, RPNG-359, RPNG-353, RPNG-364, RPNG-391, RPNG-407, RPNG-422, RPNG-426 Add video identification session

RPNG-360 Allow static customization of the Home Page (per instance)

RPNG-379 Implement management of PDF settings and Security Context per Subscription

RPNG-381 Add API for diploma renotarization

RPNG-393 Biometrics Dashboard – Add subjects listing screen

## Improvements

RPNG-151 Add spanish language

RPNG-414 Update signing libraries

## Bug fixes

RPNG-285 Permission fixes

RPNG-388 Duplicate constraint error when saving certificates

<a name="v3-3-0" />
## 3.3.0 (2025-10-16)

Updates database model: **yes**

### New features

RPNG-184 Support for custom Intermediate CAs (Certificate Authorities).

RPNG-324 Store public key thumbprint for FaceTec sessions

RPNG-346 Enrollment and authentication sessions using face pictures

RPNG-358 Identification document face matching session

RPNG-374 Face identity verification with external providers (FortFace/Datavalid)

RPNG-377 Enrollment and authentication sessions using FortFace Liveness face capture

RPNG-383, RPNG-382 Add subscription biometric settings page

RPNG-385 Biometric sessions summary list page with images preview

RPNG-404 Add config to enable support for low quality images on face authentication API

### Improvements

RPNG-312, RPNG-314, RPNG-372, RPNG-375,RPNG-384, RPNG-343 Improvements on database modeling for biometric related entities

RPNG-371 Improve biometric sessions demo layout

RPNG-373 Improve biometric sessions layout on mobile devices

RPNG-399 Add FaceTec browser SDK v9.7.83 resources

### Bug fixes

RPNG-376 Inconsistencies on attempt limit configuration for biometric sessions using FaceTec liveness

<!-- RPNG-378 Fix on internal SQL migration -->

<a name="v3-2-1" />
## 3.2.1 (2025-08-27)

Updates database model: no

### Improvements

RPNG-367 Update test certificates root v3

### Bug fixes

RPNG-365 Docker build using latest AspNet image

<a name="v3-2-0" />
## 3.2.0 (2025-08-22)

Updates database model: **yes**

### New features

RPNG-319 QR Code for biometric sessions

RPNG-329 Face occlusion detection on FortFace liveness sessions

### Improvements

RPNG-325 Apply theming to biometric sessions

RPNG-331 Create implicit biometric session for FaceTec API calls

RPNG-332 Crop FortFace liveness result image

RPNG-354 Add FaceTec browser SDK v9.7.75 resources

### Bug fixes

RPNG-355 `BadRequest` error when using AWS S3 in some scenarios



<a name="v3-1-1" />
## 3.1.1 (2025-07-24)

Updates database model: no

### Improvements

RPNG-340 Add FaceTec browser SDK v9.7.72 resources

### Bug fixes

RPNG-341 ARM64 image is not listening on port 80 after updating to .NET 8



<a name="v3-1-0" />
## 3.1.0 (2025-07-24)

Updates database model: **yes**

### New features

RPNG-297 Biometric sessions



<a name="v3-0-1" />
## 3.0.1 (2025-06-25)

Updates database model: no

### New features

RPNG-316 Command/Job to check integrity of documents

### Improvements

RPNG-284 Add FaceTec browser SDK v9.7.63 e v9.7.66 resources

### Bug fixes

RPNG-315 `BlobNotFoundException` error on certain blobs on `signedfiles` folder



<a name="v3-0-0" />
## 3.0.0 (2025-06-16)

> [!WARNING]
> See [Update Rest PKI Core from 2.x to 3.0](on-premises/update-30.md)

Updates database model: **yes**

### Improvements

RPNG-275 Update ASP.NET Core to version 8.0

RPNG-292 Fix known vulnerabilities (for more information see [Vulnerability check 25.04](on-premises/vulnerabilities.md#c2504))

RPNG-295 Signal search engines that document validation pages should not be indexed

RPNG-299 Improve timestamp display on validation page

RPNG-301 Create "distroless" image with reduced attack surface

### Bug fixes

RPNG-293 Marks of type `QRCode` cause error 500 on PDF marking API when running on Linux/Docker

RPNG-296 Certificate validation details on document validation page appear in English with Portuguese selected



<a name="v2-5-0" />
## 2.5.0 (2025-04-11)

Identical to: 2.5.0 RC 7 (2025-04-11)

Updates database model: **yes**

### New features

RPNG-276 FaceTec liveness APIs

RPNG-279 FaceTec IdScan APIs

RPNG-280 FaceTec liveness demo

### Improvements

RPNG-287 Support for using custom database schemes

RPNG-289 Support for ARM64 platform on Docker

### Bug fixes

RPNG-288 Error *An error has occurred while processing your authentication \(blank email address\). Please try again.*

### Flavour-specific changes

RPNG-286 Landscape-specific validation marks (flavour *onr*)



<a name="v2-4-5" />
## 2.4.5 (2025-12-03)

Updates database model: no

### Bug

RPNG-277 Column `DateCompleted` is not filled when a signature session is completed



<a name="v2-4-4" />
## 2.4.4 (2024-10-02)

Updates database model: no

### Improvements

RPNG-271 Improve performance on simple requests repeated several times by clients



<a name="v2-4-3" />
## 2.4.3 (2024-09-25)

Updates database model: no

### Bug fixes

RPNG-291 Backward-compatibility issues on PDF marking API



<a name="v2-4-2" />
## 2.4.2 (2024-07-26)

Updates database model: no

### Bug fixes

RPNG-269 Error 500 when signing PDFs with policy `PkiBrazil.AdrTempo`



<a name="v2-4-1" />
## 2.4.1 (2024-07-25)

Updates database model: no

### Bug fixes

RPNG-290 Compatibility issue with SQL Server 2012 \(usage of `TRIM()` function\)



<a name="v2-4-0" />
## 2.4.0 (2024-07-25)

Identical to: 2.4.0 RC 1 (2024-06-15)

Updates database model: no

### New features

RPNG-262 Setting `Oidc:AuthorityBackchannelUrl` for scenarios on which GrantID has a URL specific for backend-to-backend communication

### Improvements

RPNG-265 Improve specification of client-side signature algorithm parameters on APIs

RPNG-266 Policies for accepting signatures performed on Gov.BR platform

### Flavour-specific changes

RPNG-264 Document metadata are not shown on validation page \(flavour *onr*\)



<a name="v2-3-0" />
## 2.3.0 (2024-06-06)

Identical to: 2.3.0 RC 1 (2024-05-17)

Updates database model: **yes**

### Flavour-specific changes

RPNG-259 Metadata `CNS` and `Cartório` on a per-subscription basis \(flavour `Onr`\)



<a name="v2-2-2" />
## 2.2.2 (2024-05-04)

Updates database model: no

### Bug fixes

RPNG-261 NullReferenceException error when requesting timestamps through TSP (introduced on 2.2.0)



<a name="v2-2-1" />
## 2.2.1 (2024-05-01)

Updates database model: no

### Bug fixes

RPNG-260 Relative URLs returned by the upload API on `FileModel.Location` passed on `FileReferenceModel.Url` are still not accepted on Linux/Docker



<a name="v2-2-0" />
## 2.2.0 (2024-04-30)

Updates database model: **yes**

### New features

RPNG-241 API transaction registering

RPNG-225 PDF stamping API

RPNG-214 Per-subscription settings for culture, time zone and date/hour format (used on PDF signature visual representation)

### Improvements

RPNG-236 Round-robin strategy among timestamp providers with optional priority setting

<!--
RPNG-238 Permitir visualização e edição de metadados das aplicações
-->

RPNG-239 Update Angular to version 17

RPNG-248 Accept relative URLs returned by the upload API on `FileModel.Location` passed on `FileReferenceModel.Url`

RPNG-255 Show latest events, timestamp requests and API transactions on signed-in home page

RPNG-256 Improve demonstrations and move to a separate menu item

RPNG-257 Delete old TSP messages only if explicitly configured

### Bug fixes

RPNG-235 Application does not try again to fetch a timestamp in case of error on initial try

RPNG-237 Error on complete signature job for CMS signatures

RPNG-245 Bad visual representation parameters cause return code 500 instead of 422

RPNG-247 Invalid URLs on `ResourceContentOrReference.Url` cause 500 error

RPNG-250 Exceptions transformed into ApiException are not logged properly

RPNG-252 Date filter is not working on "Timestamp provider details" page

RPNG-253 Duration of fimestamp request is not registered in case of error

RPNG-254 Query on timestamp provider calls is not using the appropriate database index



<a name="v2-1-3" />
## 2.1.3 (2024-04-10)

Updates database model: no

### Improvements

RPNG-240 Use default timestamp tier when a policy requiring timestamp is used combined with a custom security context without a timestamp tier



<a name="v2-1-2" />
## 2.1.2 (2024-03-14)

Updates database model: no

### Bug fixes

RPNG-231 API return codes documented on Swagger do not match actual return codes returned by app



<a name="v2-1-1" />
## 2.1.1 (2024-01-24)

Updates database model: no

### New features

RPNG-234 Add route `/api/system/manifest`

### Improvents

RPNG-228 Add settings to log HTTP messages

### Bug fixes

RPNG-208 Property `signatureResult.getFile().url` returns an absolute URL (was relative on legacy Rest PKI)



<a name="v2-1-0" />
## 2.1.0 (2024-01-15)

Updates database model: no

### New features

RPNG-215 Proxy configuration

### Improvements

RPNG-216 Add support for Standby mode to simplify setup on Azure App Service

RPNG-219 Show attribute certificate information on signature information page

RPNG-224 Review swagger

### Bug fixes

RPNG-222 Error when saving security context referencing timestamp tier

RPNG-226 Necessary data for completing signatures is lost if an error occurs during completion in background

RPNG-227 "NotSupportedException" error on Cades start APIs versions 1 and 2

RPNG-232 CPF claim is unnecessarily required



<a name="v2-0-2" />
## 2.0.2 (2023-11-09)

Updates database model: no

### Improvements

RPNG-220 Ignore communication errors with Amplia when `AttributeCertificateInclusion` is set to `Recommended`



<a name="v2-0-1" />
## 2.0.1 (2023-11-08)

Updates database model: no

### Bug fixes

RPNG-217 Error "CryptographicException: The payload was invalid" when fetching old signature sessions



<a name="v2-0-0" />
## 2.0.0 (2023-10-30)

Updates database model: **yes**

### Improvements

RPNG-178 Allow optional definition of timestamp tier on security context

RPNG-204 Anonymization of signers' personal data on validation page

RPNG-207 Improvements to timestamping management

RPNG-246 Date filters on timestamp provider call history

### Bug fixes

RPNG-198 Signature validaiton API does not honor setting `General:DefaultTimeZone`



<a name="v1-13-1" />
## 1.13.1 (2023-10-17)

Updates database model: no

### Flavour-specific changes

RPNG-212 Change validation marks text \(flavour *onr*\)



<a name="v2.0.0-rc16" />
## 2.0.0 RC 16 (2023-09-12)

Updates database model: **yes**

### New features

RPNG-160 Add support for legacy CAdES signature APIs

RPNG-182 Timestamp tier and provider history

RPNG-206 Enable SSH access on Docker image

### Bug fixes

RPNG-185 Certificate files are not accepted on security context management's root CA upload

RPNG-200 `MessageDigest` property of PDF/CMS signers is not filled when only the algorithm is known

RPNG-201 Signature exploring APIs are ignoring parameter `SignaturePolicyId`

RPNG-209 Multipart upload not working



<a name="v2.0.0-rc08" />
## 2.0.0 RC 8 (2023-06-30)

> [!WARNING]
> Before updating to this version make sure your PKI SDK license supports versions released up to 2023-06-27.

Updates database model: no

### Improvements

RPNG-192 Add setting `General:ReturnExceptionsToApplications` to return exceptions on error responses when the API is being called by an application

### Bug fixes

RPNG-191 Property `Detail` is not filled on 422 responses

RPNG-193 PDFs signed with legacy signature standard \(non-PAdES\) cause error on signature exploration API

RPNG-194 Password-protected PDFs cause error 500 \(should cause 422 with code `ProtectedPdfError`\)

RPNG-195 Corrupt PDFs cause error 500 \(should cause 422 with code `InvalidPdf`\)

RPNG-196 Error *Wrong last certificate on Pades signature*



<a name="v2.0.0-rc07" />
## 2.0.0 RC 7 (2023-05-30)

> [!WARNING]
> Before updating to this version make sure your PKI SDK license supports versions released up to 2022-10-19.

Updates database model: **yes**

### New features

RPNG-155 Add support for legacy certificate authentication APIs

RPNG-159 Add support for legacy PDF signature APIs

RPNG-161 Add support for legacy XML signature APIs

RPNG-162 Add support for legacy PDF marking APIs

RPNG-177 Add support for signature policies

RPNG-179 Automatically add attribute certificates to signatures

RPNG-183 Add suport for legacy certificate validation API

### Bug fixes

RPNG-180 Cloud certificate integration was broken after updating to SPA 2.6 (v1.13.0)

RPNG-190 Error "cannot access a closed file" when using AwsS3 blob storage



<a name="v1-13-0" />
## 1.13.0 (2023-03-14)

Updates database model: **yes**

### Improvements

RPNG-153 Add PDF visual representation to signature API

RPNG-172 Allow using "S3 clones" as blob storage

RPNG-169 Complete update to SPA 2.6



<a name="v1-12-2" />
## 1.12.2 (2023-02-28)

Updates database model: no

### Bug fixes

RPNG-173 Document details API does not allow inter-subscription access when instance is configured as on-premises


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
