# Digiploma changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

<a name="v1-9-2" />
### 1.9.2 (2021-11-05)

* Bug fixes
  * [AUT-118] NacionalidadeGenero key has gender transformation only if nationality is provided in masculine form
  * [AUT-117] RG, Outro documento de identificação, naturalidade e Situação ENADE error messages do not display correct path
  * [AUT-116] TermoResponsabilidade should not be required
  * [AUT-115] Error generating degree without LivroRegistro
  * [AUT-113] Fixed keys for RVDD generation

Updates database model: no

<a name="v1-9-1" />
### 1.9.1 (2021-10-21)

* Bug fixes
  * [AUT-112] Recredenciamento is required in IES Emissora

Updates database model: no

<a name="v1-9-0" />
### 1.9.0 (2021-10-20)

* New Features
  * [AUT-111] New conditionals and gender transformations

* Bug fixes
  * [AUT-110] Error creating degree when enums are provided without accent
  * [AUT-109] Error creating degre without Autorizacao, Reconhecimento and Renovação
  * [AUT-108] Reconhecimento data is displayed as Renovação de reconhecimento data

Updates database model: no

<a name="v1-8-0" />
### 1.8.0 (2021-10-13)

* Bug fixes
  * [AUT-106] Added new file upload for letterhead version of the visual representation

Updates database model: yes

<a name="v1-7-0" />
### 1.7.0 (2021-10-01)

* New Features
  * [AUT-103] Add status and date filter in degrees list

* Improvements
  * [AUT-104] Add new key for gender transformations of the degree title
  * [AUT-100] Add flow id in the degree creation API

* Bug fixes
  * [AUT-105] Degree validation screen displays errors when the degree is not valid

Updates database model: no

<a name="v1-6-0" />
### 1.6.0 (2021-09-17)

* New Features
  * [AUT-95] Degree batch download
  * [AUT-26] Add Captcha in public degree lookup

* Improvements
  * [AUT-93] Degree signature with digital certificate requirements

Updates database model: no
