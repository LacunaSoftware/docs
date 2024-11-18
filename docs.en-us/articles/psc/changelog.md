# Lacuna PSC changelog

<!--<a name="vnext" />-->

<a name="v1-4-2" />
## 1.4.2 (2024-05-07)

Updates database model: no

### Bug

PSC-215 Fixed broken dialog windows introduced in the previous update



<a name="v1-4-1" />
## 1.4.1 (2024-04-25)

Updates database model: yes

### New Feature

PSC-205 Added API documentation pages aimed at PSC client applications

### Improvement

PSC-204 Updated Lacuna SPA to version 3.0



<a name="v1-3-1" />
## 1.3.1 (2024-03-11)

Updates database model: no

### New Feature

PSC-206 Added functionalities to integrate with KSPs

### Improvement

PSC-107 Improved handling of the validity of certificate usage sessions



<a name="v1-2-5" />
## 1.2.5 (2023-12-21)

Updates database model: no

### New Feature

PSC-208 Added page with account deletion instructions



<a name="v1-2-4" />
## 1.2.4 (2023-12-13)

Updates database model: no

### Bug

PSC-207 Fixed certificate discovery API not returning certificates in PEM format



<a name="v1-2-1" />
## 1.2.1 (2023-07-11)

Updates database model: no

### Improvements

PSC-192 Privacy policy in HTML format



<a name="v1-2-0" />
## 1.2.0 (2023-07-11)

Identical to: 1.2.0 RC 3

Updates database model: **yes**

### New Features

PSC-135 Management UI with accounts and certificates

PSC-182 Account deletion

### Improvements

PSC-180 Add support for storing blobs on a database



<a name="v1-1-2" />
## 1.1.2 (2023-06-02)

Identical to: 1.1.2 RC 1

Updates database model: no

### New Features

PSC-181 Mechanism to force old apps to update

### Bug fixes

PSC-176 Agreement URL should point back to PSC, not to Amplia

PSC-185 Metadata conversion from Amplia without the wanted locale results in error

PSC-186 Issues on issue page when link is generated with formatted order number (occurs since Amplia Reg 2.0.0)



<a name="v1-1-1" />
## 1.1.1 (2023-04-11)

Identical to: 1.1.1 RC 1

Minimum Amplia version: 4.2.0

Updates database model: no

### Improvements

PSC-103 Simplify Firebase configuration and create specific error for AppCheck

PSC-174 Simplify configuration of "app ID" on Android and Apple app stores

PSC-175 Add setting `General:AppDiscriminator` to avoid data protection issues

### Bug fixes

PSC-141 Issues on certification activation on the mobile app

PSC-169 "Wrong diagnostic code" message in Portuguese is displayed in Spanish

PSC-171 Web issue page does not allow typing either of the secrets with flavour `DigitalSign`



<a name="v1-1-0" />
## 1.1.0 (2023-04-10)

Identical to: 1.1.0 RC 2

Updates database model: **yes**

### New Features

PSC-144 Privacy policy route (`/privacy-policy`) with customizable document

PSC-150 Add support for PostgreSQL

PSC-154 PSC application management

PSC-157 Customizable certificate authorization page

### Improvements

PSC-104 Error logging and debugging for mobile apps

PSC-117 Fix test suite and OpenIddict update

PSC-149 Update ASP.NET Core to 6.0

PSC-159 Customizable PIN/PUK reminder save options on web issue page



<a name="v1-0-0" />
## 1.0.0 (2023-03-20)

Identical to: 1.1.0 RC 9

First publicly available version.
