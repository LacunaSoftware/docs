# Digiploma changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

<a name="v2-4-0" />
### 2.4.0 (2022-11-08)

* Bug fixes
  * [AUT-231] "Nova pasta" option cannot be used when register degrees
  * [AUT-247] Type of the student's current situation is not filled in the XML of the History
  * [AUT-250] RVHE footnote text is on top of the information in the history elements
  * [AUT-255] Issuing time on the RVHE is in GMT
  * [AUT-256] Registration is not completed if there is already an Academic Transcript of the same student at the Issuing
  * [AUT-258] Nonce is not returned in Academic Documentation NSF

* Improvements
  * [AUT-226] Adding the academic transcript generation in the generator
  * [AUT-237] Generate XMLs coded in UTF-8
  * [AUT-240] Add in the tests the possibility of generating a RVDD tags list
  * [AUT-241] Implement in the tests the possibility of generating RVDD using Academic Documentation
  * [AUT-243] Add missing information to RVHE
  * [AUT-248] Remove "Pendente" column from the Academic Transcript visual representation
  * [AUT-249] Template details page forwarding to wrong page when clicking on "Gerar Diplomas"
  * [AUT-257] Remove the text "Ministerial" for Portaria in the regulatory acts
  * [AUT-260] Improving the list of models in the degrees or transcripts creation
  * [AUT-262] Change Lyceum cancellation endpoint

* New Features
  * [AUT-252] Create API to regenerate RVHE
  * [AUT-253] Error when generating school transcript with degree using degree batch by CSV

<a name="v2-3-1" />
### 2.3.1 (2022-10-06)

* Bug fixes
  * [AUT-236] Review screen doesn't loading when Situacao is "Não habilitado" in Enade
  * [AUT-234] It's not possible to generate RVHE if there is a Estagio without Concedente

* Improvements
  * [AUT-101] Treat the case that the diploma has been excluded in the signer when cancel the degree

* New Features
  * [AUT-239] Create tag that dynamically returns the identification document along with the type
  * [AUT-238] Create tag to return text type of regulatory act in process

Updates database model: no

<a name="v2-3-0" />
### 2.3.0 (2022-10-01)

* Bug fixes
  * [AUT-210] Mantenedora minimum data conversion doesn't check if value is null

* Improvements
  * [AUT-233] Check if Emission has has information about academic transcript
  * [AUT-228] Only allow 1st copy degree to automatically generate academic transcript
  * [AUT-222] Unify code that throws error regarding expected template type
  * [AUT-221] Add validations referring to the academic transcript template
  * [AUT-218] Add academic transcript route as child of degree details route

* New Features
  * [AUT-230] Generate XMLs without spaces and line breaks
  * [AUT-229] Create API to create academic transcript in a unitary way
  * [AUT-225] Validate the flow action sent when to create a degree via API
  * [AUT-220] Add academic transcript documentation and new webhooks to Swagger
  * [AUT-217] Create auto-cancel message constant for Registration
  * [AUT-200] Allow degrees from Lyceum issuers to be registered by Integration
  * [AUT-195] Implement the academic transcript XML

Updates database model: yes

<a name="v2-2-6" />
### 2.2.6 (2022-09-20)

* New Features
  * [AUT-214] Create API to resend webhooks

Updates database model: no

<a name="v2-2-5" />
### 2.2.5 (2022-09-15)

* Bug fixes
  * [AUT-213] Application is allowing the diploma creation with HoraAula equal 0
  * [AUT-212] Error not displayed when Enade without Edicao is sent
  * [AUT-211] Review page doesn't load if has Estagio without Concedente

* Improvements
  * [AUT-209] Remove template reference when cancel Emission
  * [AUT-198] Validate if academic documentation XML is signed

Updates database model: no

<a name="v2-2-4" />
### 2.2.4 (2022-09-12)

* Bug fixes
  * [AUT-208] Documentação comprobatória should not be required in "segunda via" degrees

Updates database model: no

<a name="v2-2-3" />
### 2.2.3 (2022-09-06)

* Improvements
  * [AUT-197] Improve UX for Registry information update screen

Updates database model: no

<a name="v2-2-2" />
### 2.2.2 (2022-08-30)

* Bug fixes
  * [AUT-206] Registration review screen does not load if there is no "Termo de Responsabilidade"

Updates database model: no

<a name="v2-2-1" />
### 2.2.1 (2022-08-30)

* Bug fixes
  * [AUT-204] Publish date duplicated

Updates database model: no

<a name="v2-2-0" />
### 2.2.0 (2022-08-25)

* Bug fixes
  * [AUT-201] Error when using "Psicólogo" in "OutroTitulo"

* New Features
  * [AUT-189] Degrees by period report

Updates database model: no

<a name="v2-1-2" />
### 2.1.2 (2022-08-10)

* Bug fixes
  * [AUT-181] 01/01/0001 dates are considered valid

* Improvements
  * [AUT-184] Do not allow degrees signed only by e-CNPJ
  * [AUT-177] Improve validation of texts that start with spaces

* New Features
  * [AUT-76] Customize validation page by organization

Updates database model: no

<a name="v2-1-1" />
### 2.1.1 (2022-04-28)

* Bug fixes
  * [AUT-178] Misspelling of state names

* Improvements
  * [AUT-180] Update "Naturalidade" conditional 
  * [AUT-167] Improve JSON interpretation of empty fields

Updates database model: no

<a name="v2-0-0" />
### 2.0.0 (2022-04-04)

* Bug fixes
  * [AUT-150] Send button disabled when trying to send documentation

* Improvements
  * [AUT-173] RVDD Tag for "data de colação"
  * [AUT-164] Force date string conversions to portuguese
  * [AUT-162] Update fields displayed in validation screen
  * [AUT-152] Add column for "IES Emissora" in registration screen
  * [AUT-151] Button to go to signer only displayed for administrator or manager
  * [AUT-149] Improve option to delete uploaded document
  * [AUT-146] "Do not generate" in the RVDD options list as last option
  * [AUT-145] Clarify option to define company signature in the flow

* New Features
  * [AUT-147] Preview of uploaded document
  * [AUT-134] Partnerhip creation in the subscription management
  * [AUT-133] Separate batches by type
  * [AUT-132] Registration request review
  * [AUT-130] Registration request list
  * [AUT-129] Registry company data
  * [AUT-128] Settings for integrations between Issuer and Registry
  * [AUT-127] Tela de listagem e criação de Emissões
  * [AUT-126] Separate subscriptions by type
  * [AUT-125] Separate flows by type

Updates database model: yes

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
