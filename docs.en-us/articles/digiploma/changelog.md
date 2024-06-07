# Digiploma changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

<a name="v2-23-1" />
### 2.23.0 (2024-05-27)

* Bug fixes
    * [AUT-420] Affiliation form does not appear for copy degrees

* New Features
    * [AUT-419] API to get visual representation in Base64

<a name="v2-23-1" />
### 2.23.0 (2024-05-13)

* Bug fixes
    * [AUT-415] Academic transcript / Curriculum validation message is not appearing

<a name="v2-23-0" />
### 2.23.0 (2024-04-30)

* Bug fixes
    * [AUT-409] Unable to generate the degree due to subject approval validation

* Improvements
    * [AUT-410] Add value propagation when creating the academic transcript
    * [AUT-413] Add the student's social name in the required APIs

* New Features
    * [AUT-411] Add sending of webhook in issuances by integration or with accredited registry
    * [AUT-412] Create tag to use CPF or RG or other document according to nationality

<a name="v2-22-0" />
### 2.22.0 (2024-04-12)

* Bug fixes
    * [AUT-408] Fix incorrect value of Concept values

* New Features
    * [AUT-374] API to restore Issuance status
    * [AUT-406] Use the social name in the visual representation of the academic transcript

<a name="v2-21-3" />
### 2.21.3 (2024-04-04)

* Bug fixes
    * [AUT-407] Supporting documentation generating a bad request error

<a name="v2-21-2" />
### 2.21.2 (2024-04-01)

* Bug fixes
    * [AUT-403] Incorrect title in RVDD when another title has been filled
    * [AUT-404] Properties of type enum accept values not present in enum

* Improvements
    * [AUT-400] Add possibility to generate academic transcript of degree already created/issued
    

<a name="v2-21-1" />
### 2.21.1 (2024-03-18)

* Improvements
    * [AUT-402] Add decimal places to RVHE

* New Features
    * [AUT-401] Add additional information field to the academic transcript during degree creation

<a name="v2-21-0" />
### 2.21.0 (2024-03-06)

* Improvements
    * [AUT-394] Improve Events screen
    * [AUT-399] Improve degree classes conversion

<a name="v2-20-2" />
### 2.20.2 (2024-03-05)

* Improvements
    * [AUT-397] Set value for academic trascript issue date and time when null
    * [AUT-398] Allow line breaks in additional information using pipe in RVHE and RVCE

<a name="v2-20-1" />
### 2.20.1 (2024-03-04)

* Bug fixes
    * [AUT-396] Incorrect value of decimal numbers  

<a name="v2-20-0" />
### 2.20.0 (2024-02-26)

* Bug fixes
    * [AUT-242] Allow the academic transcript template to use TAGs 
    * [AUT-387] Add validations for registration book fields
    * [AUT-388] Validate XML according to XSD before it's created
    * [AUT-392] Add additional information to the end of the RVHE

* Improvements
    * [AUT-389] Historical elements code not being validated on the form
    * [AUT-390] Discipline notes with more than two decimal places
    * [AUT-391] Validation of structure via XSD returning blank fields
    * [AUT-393] Text on top of text on the degree review screen

<a name="v2-19-1" />
### 2.19.1 (2023-12-23)

* Bug fixes
    * [AUT-254] Add page count validation for Degrees RVDDs
    * [AUT-383] Delete saved form files after only 24 hours
    * [AUT-384] Improve search field

* Improvements
    * [AUT-385] The address is not filled in the Issuing and Maintaining Institute the academic transcript
    * [AUT-386] Authorization and Recognition fields do not appear on the form

<a name="v2-19-0" />
### 2.19.0 (2023-12-12)

* Bug fixes
    * [AUT-378] It's not possible to edit the institute's information

* Improvements
    * [AUT-188] Term of responsibility viewer when reviewing the registration request
    * [AUT-379] Improve query that searches for institutes to generate a list of annulled degrees
    * [AUT-380] Creation of new tags for the degree visual representation 

* New Features
    * [AUT-324] Save form progress
    * [AUT-381] Add yby theme
    * [AUT-382] Add validation to the code of historical elements

<a name="v2-18-0" />
### 2.18.0 (2023-12-12)

* Bug fixes
    * [AUT-377] It's not possible to create a record by court decision with XML without comprobatory documentation

* Improvements
    * [AUT-376] Improve string conversion in requests to remove tabs and line breaks

* New features
    * [AUT-169] Validate XML according to XSD

<a name="v2-17-0" />
### 2.17.0 (2023-10-09)

* Bug fixes
    * [AUT-371] Duplicated complementary activity name and code in RVCE
    * [AUT-372] Error when trying to convert certificate password when it has special characters

* Improvements
    * [AUT-219] Add possibility of generating academic transcript from degree already created/issued

* New Features
    * [AUT-370] Add validation when changing pages in the manual form  
    * [AUT-373] Create API to change visual representation of academic curriculum


<a name="v2-16-0" />
### 2.16.0 (2023-09-27)

* Bug fixes
    * [AUT-296] Duplicated documents in the Signer when an error occurs when persisting the academic transcript
    * [AUT-365] Incorrect text in the IES's reaccreditation on the validation screen when it is in processing
    * [AUT-367] It's not possible to create a Curriculum using API
    * [AUT-368] Areas is an optional element, but is always used in the visual representation of the Curriculum

* Improvements
    * [AUT-364] Allow Registrations to skip the signature validation stage
    * [AUT-369] Add cancellation reason to webhooks

* New Features
    * [AUT-357] Allow the Registration to be sent on issue after a version change
    * [AUT-362] API to change the visual representation of the degree and academic transcript
    * [AUT-366] Validate the CNPJ of the certificate belongs to the Issuing IES at the time of Registration

<a name="v2-15-0" />
### 2.15.0 (2023-09-04)

* Improvements
    * [AUT-186] Move entry and completion date to database for new degrees

* New Features
    * [AUT-316] Implement the academic curriculum

<a name="v2-14-0" />
### 2.14.0 (2023-08-28)

* Bug fixes
    * [AUT-358] When searching for the document by pressing Enter, the Only Signed button is pressed

* Improvements
    * [AUT-359] Remove requirement for RegistrationBookCode property

<a name="v2-13-1" />
### 2.13.1 (2023-08-08)

* Bug fixes
    * [AUT-355] Cancellation reason not displayed correctly on screen

* Improvements
    * [AUT-354] Hide NSF configuration for Issuer organization
    * [AUT-360] Improve conditions related to the signed diploma

<a name="v2-13-0" />
### 2.13.0 (2023-08-08)

* Bug fixes
    * [AUT-352] Academic transcript template Id is not removed from copy issues once they have been finalized

* Improvements
    * [AUT-160] Define whether HEI is part of the federal system separately
    * [AUT-338] Remove date of graduation, dispatch and completion fields from the RVHE when not graduated
    * [AUT-347] Add reason for registration cancellation field
    * [AUT-348] Allow the use of an e-CPF certificate for testing in the Institution's homologation environment
    * [AUT-349] Improve Xades signature policy search for validation
    * [AUT-350] Improve the gender nationality tag for cases where the nationality is capitalized
    * [AUT-351] List signed degrees without active or canceled status restriction

<a name="v2-12-1" />
### 2.12.1 (2023-07-17)

* Improvements
    * [AUT-343] Inform user that institute with that code already exists when registering new institute
    * [AUT-345] Improve the way to get the issue date and registration for issuer inspection file

* Bug fixes
    * [AUT-341] Institute information does not appear on the screen when editing it
    * [AUT-342] Institute form with conditional fields does not load when changing the type of institute
    * [AUT-344] Type of the Institute is not displayed correctly when listing them

<a name="v2-12-0" />
### 2.12.0 (2023-07-13)

* New Features
    * [AUT-273] Implement cancellation list
    * [AUT-274] Implement inspection file

<a name="v2-11-2" />
### 2.11.2 (2023-07-05)

* Bug fixes
    * [AUT-340] Degree concluded webhook is not sent

<a name="v2-11-1" />
### 2.11.1 (2023-07-05)

* Bug fixes
    * [AUT-339] It is not possible to cancel the registration after they have canceled the degree on the side of the Issuer

<a name="v2-11-0" />
### 2.11.0 (2023-06-20)

* Bug fixes
  * [AUT-336] Error when generating report by selection

* Improvements
  * [AUT-304] Update the list of required data
  * [AUT-333] Remove dispatch date validation for detached academic transcripts

<a name="v2-10-5" />
### 2.10.5 (2023-05-17)

* Improvements
  * [AUT-332] Create tag referring to the judicial decision fields

<a name="v2-10-4" />
### 2.10.4 (2023-05-12)

* Bug fixes
  * [AUT-320] Remove the template Id from the history of Issues and Degrees that are cancelled
  * [AUT-334] Fixed incorrect workload in RVHE

<a name="v2-10-3" />
### 2.10.3 (2023-05-10)

* Bug fixes
  * [AUT-331] Error when submitting the evaluation in discipline in the form

* Improvements
  * [AUT-330] Add "Discard changes" warning when leaving the form page

<a name="v2-10-2" />
### 2.10.2 (2023-05-08)

* Bug fixes
  * [AUT-328] Manual issue is not sent to the registry when using the Credentialed Registry option
  * [AUT-329] Method for creating unit issue does not save signature flow

<a name="v2-10-1" />
### 2.10.1 (2023-05-05)

* Bug fixes
  * [AUT-325] Missing fields in the form in the step academic transcript elements
  * [AUT-326] Remove template requirement in Manual Issue
  * [AUT-327] Error enable or disable regulatory act 

<a name="v2-10-0" />
### 2.10.0 (2023-05-03)

* Bug fixes
  * [AUT-321] Incorrect display of naturalness when use the element <NomeMunicipioEstrangeiro>

* New Features
  * [AUT-174] Create a screen to fill in students' data
  * [AUT-300] Allow XML sending after version change

<a name="v2-9-5" />
### 2.9.5 (2023-04-18)

* Bug fixes
  * [AUT-318] Fix validation of the select version field on issue creation

<a name="v2-9-4" />
### 2.9.4 (2023-04-17)

* Improvements
  * [AUT-317] Update Signer API package version

<a name="v2-9-3" />
### 2.9.3 (2023-04-03)

* Improvements
  * [AUT-314] Validate the dispatch date according to the version

<a name="v2-9-2" />
### 2.9.2 (2023-03-21)

* Bug fixes
  * [AUT-313] Wrong version of the degree by creating degree in the previous version

<a name="v2-9-1" />
### 2.9.1 (2023-03-20)

* Bug fixes
  * [AUT-312] Error sending documentation manually to the instance of the previous version

<a name="v2-9-0" />
### 2.9.0 (2023-03-17)

* New Features
  * [AUT-305] Allow the application to accept the version of the degree to be issued

<a name="v2-8-2" />
### 2.8.2 (2023-03-13)

* Bug fixes
  * [AUT-308] Fix order of the Internship Grantor information
  * [AUT-310] No email is sent when the XML of public data is sent to the Signer

* Improvements
  * [AUT-306] Fix start date of degree version
  * [AUT-307] Fix JSON template of academic transcript
  * [AUT-311] Implement Webhook resend for academic transcript

* New Features
  * [AUT-309] Create preposition tag with gender in the naturalness of the states in RVDD

<a name="v2-8-1" />
### 2.8.1 (2023-02-27)

* Bug fixes
  * [AUT-303] Emission JSON without comprobatory documentation is not validated correctly

* Improvements
  * [AUT-301] Make optional the ProcessoDoDiploma field in the LivroRegistro
  * [AUT-302] Regulatory act information is not apperiang in the RVHE

* New Features
  * [AUT-299] Create Ênfase tag on RVDD

<a name="v2-8-0" />
### 2.8.0 (2023-02-14)

* Bug fixes
  * [AUT-298] Fix bugs identified in 1.05 in Homologation

* New Features
  * [AUT-270] Updating the Digital Degree to 1.05 version
  * [AUT-271] Updating Academic Documentation to 1.05 version
  * [AUT-272] Updating Academic Transcript to 1.05 version

<a name="v2-7-0" />
### 2.7.0 (2023-01-19)

* Bug fixes
  * [AUT-293] Error when generating RVHE for discipline with null approval
  * [AUT-295] Incorrect RVHE publication date

* Improvements
  * [AUT-294] Add validation if the dispatch date is in the validity period of the current version
  * [AUT-297] Update framework for .NET 6

* New Features
  * [AUT-291] Implement the temporary cancellation for academic transcripts

<a name="v2-6-0" />
### 2.6.0 (2022-12-21)

* Bug fixes
  * [AUT-290] Error when generating academic transcripts from previous emissions with missing information improvement

* Improvements
  * [AUT-284] Documents report in SysAdmin
  * [AUT-285] Academic transcript emissions in the report
  * [AUT-288] Add column of Form of Integralization of the discipline in the RVHE
  * [AUT-289] Refactor the validation of the Assinantes element

<a name="v2-5-0" />
### 2.5.0 (2022-12-12)

* Bug fixes
  * [AUT-279] Error when no regulatory act is informed for an institution that does not belong to the federal system
  * [AUT-281] Additional information element is added with empty value using CSV

* Improvements
  * [AUT-227] Improved verification code validation at registration time
  * [AUT-275] Course recognition should not be compulsory for academic transcripts
  * [AUT-278] Removed the requirement of the grade of the disciplines
  * [AUT-280] Included the date of publication of the D.O.U. in the course recognition information in RVHE
  * [AUT-282] Created checkbox to disable the signatures validation

* New Features
  * [AUT-264] Created "Aguardando aceitação" status for the Registration organization
  * [AUT-286] Created tag to inform only the qualification date in the RVDD

<a name="v2-4-1" />
### 2.4.1 (2022-11-16)

* Bug fixes
  * [AUT-207] Add DataRegistro and Descricao to the Complementary Activity in CSV
  * [AUT-263] Documentation files are not saved to NSF Academic Doc.
  * [AUT-265] Error in the Assinantes element validation
  * [AUT-268] Change the response type of the Lyceum's cancellation API

* Improvements
  * [AUT-261] Created API to list the academic transcript of a batch

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
