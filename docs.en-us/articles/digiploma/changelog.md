# Digiploma changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

<a name="v1-14-0" />
### 1.14.0 (2022-04-07)

* Bug fixes
  * [AUT-166] Section is not returned when there is no page information

* Improvements
  * [AUT-171] Create tag for the pending process text

* New Features
  * [AUT-176] Allow updated of multiple RVDDs
  * [AUT-163] Tag for "Segunda Via" in the RVDD

Updates database model: no

<a name="v1-13-1" />
### 1.13.1 (2022-02-23)

* Improvements
  * [AUT-161] Pipe character as line break in Additional information tag

Updates database model: no

<a name="v1-13-0" />
### 1.13.0 (2022-02-14)

* Bug fixes
  * [AUT-156] Wrong requirements for "2ª via" fields
  * [AUT-154] "Habilitação" is not returned in the RVDD when multiple names are sent

* Improvements
  * [AUT-155] Allow use of other tags in the validation path

Updates database model: no

<a name="v1-12-0" />
### 1.12.0 (2022-01-26)

* Bug fixes
  * [AUT-143] Degree version is wrong in webhook request
  * [AUT-142] Error in act number regex

* Improvements
  * [AUT-141] Allow URLs with path in the base URL
  * [AUT-140] Create new RVDD keys
  * [AUT-139] Improve error message when a uint filed is not filled as the process number of informacoesTramitacaoEmec

Updates database model: no

<a name="v1-11-1" />
### 1.11.1 (2022-01-18)

* Bug fixes
  * [AUT-138] Error retrieving registration documentation information

* Improvements
  * [AUT-137] New keys for dates in RVDD and new column in degrees preview

Updates database model: no

<a name="v1-11-0" />
### 1.11.0 (2021-11-30)

* Improvements
  * [AUT-120] Adequações para versão 1.03 do XSD
  * [AUT-121] CPF do diplomado mascarado na tela de validação

Updates database model: no

> [!WARNING]
> API Breaking changes:
> TituloConferido: the value "Psicólogo" cannot be used in property "outroTitulo", since it was added to the Titulo enum.
> DisciplinaCursada: added new required property "situacao" (SituacaoDisciplina).
> "tipoAvaliacao" is now optional and had the values "Aprovado" and "Reprovado" moved to the property "situacao". Added the values "ConceitoRM" e "ConceitoEspecificoDoCurso".

<a name="v1-10-0" />
### 1.10.0 (2021-11-11)

* Improvements
  * [AUT-114] Irreversible cancellation of degrees

Updates database model: no

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
