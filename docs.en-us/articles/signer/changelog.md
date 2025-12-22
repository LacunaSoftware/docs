# Signer changelog

<a name="v2-4-7" />
### 2.4.7 (2025-12-18)

* Bug fixes
  * [SIG-1547] Call stack overflow error when submitting certain DOCX templates

Updates database model: no

<a name="v2-4-6" />
### 2.4.6 (2025-12-17)

* Bug fixes
  * [SIG-1075] Enable removal of Javascript from PDFs submitted for document creation

Updates database model: no

<a name="v2-4-5" />
### 2.4.5 (2025-12-17)

* Bug fixes
  * [SIG-1542] Custom organization titles do not load when the organization is already selected at the time the document creation page opens
  * [SIG-1543] Fix in deletion of organizations with templates associated to folders
  * [SIG-1544] Fix in signature positioning in flows with approval rules
  * [SIG-1545] PKI Brasil certificates are not listed during signing when the user does not have a CPF

* Improvements
  * [SIG-1546] Reduce watermarks opacity

Updates database model: no

<a name="v2-4-4" />
### 2.4.4 (2025-12-05)

* Improvements
  * [SIG-1532] Send emails via SMTP using MailKit

Updates database model: no

<a name="v2-4-3" />
### 2.4.3 (2025-11-17)

* Bug fixes
  * [SIG-1537] Fix in Single Signature for signing without positioning the visual representation

* Improvements
  * [SIG-1531] Improve visibility of the “x” to close the preview message for pre-positioned signatures

Updates database model: no

<a name="v2-4-2" />
### 2.4.2 (2025-11-08)

* Improvements
  * [SIG-1529] Update lacuna-facetec-client to version 2.1.0
  * [SIG-1527] Disable autocomplete for blocked users

Updates database model: no

<a name="v2-4-1" />
### 2.4.1 (2025-11-07)

* Bug fixes
  * [SIG-1535] Adjust font size of visual representation on the front-end

Updates database model: no

<a name="v2-4-0" />
### 2.4.0 (2025-10-28)

* Improvements
  * [SIG-858] Define signature rules for more participants
  * [SIG-1494] Support sending notifications in a specific language
  * [SIG-1497] Add event when generating sharing link
  * [SIG-1504] Update Datavalid library to version 1.4.0
  * [SIG-1512] Register source port for registered events
  * [SIG-1525] Allow complete deactivation of document validator
  * [SIG-1513] Update FaceTecClient to version 2.2.2

* Bug fixes
  * [SIG-873] Title not appearing when positioning signature
  * [SIG-1124] Font size of visual representation not decreasing in Firefox
  * [SIG-1502] Position replicated across multiple PDFs and error when adding initials in Single Signature
  * [SIG-1523] Edited signature positions not saving correctly after creation
  * [SIG-1524] “Allow electronic signature” toggle not working correctly when editing or retrieving flow from another document

Updates database model: yes

<a name="v2-3-0" />
### 2.3.0 (2025-09-25)

* Improvements
  * [SIG-1482] Send direct notification when sharing link via WhatsApp
  * [SIG-1508] Add Prussian Blue Green theme
  * [SIG-1509] Allow displaying footer with information of a single signer
  * [SIG-381] Allow definition of rules for approvers in the order of actions
  * [SIG-816] Improve document selection in the documents screen
  * [SIG-1501] Add option to search for a plan in the organization management screen
  * [SIG-1505] Review validation message in cases of digital certificate expiration

* Bug fixes
  * [SIG-1485] Update packages with vulnerabilities
  * [SIG-1487] Segment sending of Terms of Use notification
  * [SIG-1490] Issue editing user access in SysAdmin
  * [SIG-1492] Error when switching from advanced to simple signature
  * [SIG-1493] Error generating formatted reports on Linux
  * [SIG-1498] Tests failing due to emails
  * [SIG-1499] Theme colors changing when submitting a file in single signature using Firefox
  * [SIG-1510] Single signature not validating certificate at the time of signing

Updates database model: yes


<a name="v2-2-1" />
### 2.2.1 (2025-08-07)

* Bug fixes
  * [SIG-1488] Error selecting template to create/generate documents

Updates database model: no

<a name="v2-2-0" />
### 2.2.0 (2025-08-06)

* Improvements
  * [SIG-580] Enable/disable or change the type of electronic signature when editing flow
  * [SIG-1464] FaceTec update
  * [SIG-1466] Page to review and sign individually multiple documents
  * [SIG-1467] Setting to disable "Refuse to sign" option
  * [SIG-1475] Setting to disable LTV
  * [SIG-1486] Validation support for new ICP Brasil policies

* Bug fixes
  * [SIG-705] Fix permission rules for Events API
  * [SIG-825] Bad request error when editing flow
  * [SIG-1352] Error editing participant email in a sign rule
  * [SIG-1471] Signature positioning is required even if it is disabled on organization settings
  * [SIG-1480] Signatures disappear after positioning them in multiple documents with different pages
  * [SIG-1481] Signature manifest is wrong in landscape documents
  * [SIG-1483] Electronic signature evidences are overlayed in signature manifest
  * [SIG-1484] Fix CSP violation when opening Hangfire with menu click

Updates database model: no

> [!CAUTION]
> Starting this version, the PKI SDK license is validated at application startup and, if it is not valid, the startup will be aborted.

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released until 2025-08-01.

<a name="v2-1-1" />
### 2.1.1 (2025-06-30)

* Bug fixes
  * [SIG-1470] Code authentication notification is not using the organization's custom e-mail settings
  * [SIG-1472] Scrollbar is not visible in file upload
  * [SIG-1476] Signature mark is not being added to simple signature documents

Updates database model: no

<a name="v2-1-0" />
### 2.1.0 (2025-06-12)

* Improvements
  * [SIG-405] Allow signatures to be positioned when uploading a new version of a document
  * [SIG-1374] Replace plus icon with switch icon for the template file when creating templates
  * [SIG-1434] Option to block users for open instances
  * [SIG-1457] Remove the e-mail displayed in the signature page when the required authentication does not include e-mail
  * [SIG-1468] Option to use security headers
  * [SIG-1469] Optimize document advanced search by participants

* Bug fixes
  * [SIG-1164] Envelope files are marked with key associated with the file itself instead of the envelope file

Updates database model: yes

<a name="v2-0-1" />
### 2.0.1 (2025-05-26)

* Bug fixes
  * [SIG-1465] Fix default home page button

Updates database model: no

<a name="v2-0-0" />
### 2.0.0 (2025-05-21)

* Improvements
  * [SIG-1429] Update SPA version
  * [SIG-1459] Add signature font size parameter in pre-positioning API
  * [SIG-1460] Create oregon blue cadet theme
  * [SIG-1462] Translate signature validation messages

* Bug fixes
  * [SIG-1461] Unfilled electronic signature steps are not preveting the request to be sent
  * [SIG-1463] Attachments with special characters in the name are being sent with the name attachment

* **Important changes**: before updating follow the steps shown in the [Updating to version 2.x](on-premises/update-20.md) page.

Updates database model: yes

> [!CAUTION]
> Starting this version the SQL Server minimum version was updated to SQL Server 2016 (13.x). To revert the compatibility to SQL Server 2014, 
> add the setting `SqlServer__CompatibilityLevel` with value `120`.

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released until 2025-05-20.

<a name="v1-80-1" />
### 1.80.1 (2025-04-22)

* Bug fixes
  * [SIG-1458] Increased usage of BlobStorage in batch signatures

Updates database model: no

<a name="v1-80-0" />
### 1.80.0 (2025-04-15)

* New Features
  * [SIG-1382] Electronic signature with selfie and ID document

* Improvements
  * [SIG-1428] FaceTec integration with Rest PKI
  * [SIG-1454] Setting to disable Swagger
  * [SIG-1456] Allow API users to query Datavalid user availability

* Bug fixes
  * [SIG-1453] Document creator is not notified when document is concluded by signing a batch

Updates database model: no

<a name="v1-79-0" />
### 1.79.0 (2025-03-13)

* Improvements
  * [SIG-1162] Organizations/personal accounts invoice report
  * [SIG-1432] Reduce the ammount of steps required to sign a document after submitting a template form
  * [SIG-1433] Display document being generated message while submitting a template form
  * [SIG-1436] Skip initial screen when signing a document
  * [SIG-1439] Allow basic users to create templates
  * [SIG-1441] Include qualified signature information in the printer friendly version of a unique signature document

* Bug fixes
  * [SIG-1351] Add deselect button to a "Multiple choice" field when creating a pre-filled form
  * [SIG-1355] Field description is not spaced correctly for a Selection box field
  * [SIG-1356] Allow description removal of a template field
  * [SIG-1385] Incorrect error message in the create organization API
  * [SIG-1444] Error when using import participant data option and filling the "Send signed document to" field

Updates database model: yes

<a name="v1-78-1" />
### 1.78.1 (2025-02-27)

* Bug fixes
  * [SIG-1443] Incompatibility with SQL Server older than 2017

Updates database model: no

<a name="v1-78-0" />
### 1.78.0 (2025-02-25)

* New Features
  * [SIG-1403] Add document deleted webhook
  * [SIG-1346] Allow organizations to define default participant titles
  * [SIG-1422] Report of all documents in organization folders

* Improvements
  * [SIG-831] Users mistake the time for requesting a resend with the SMS expiration time
  * [SIG-1148] Add more details in document events
  * [SIG-1289] Do not allow deletion of organizations with outstanding debts
  * [SIG-1425] Disable document canceled notification for participants that are not yet active
  * [SIG-1435] Add control of number of document verification key queries
  * [SIG-1438] Send Whatsapp messages using Zenvia

* Bug fixes
  * [SIG-1344] Cannot copy share link or share directly to Whatsapp on iOS
  * [SIG-1384] IPv6 address is stretching beyond the bounds of the evidence box
  * [SIG-1387] Organization user report is including old organization members
  * [SIG-1430] Error creating document in a shared folder
  * [SIG-1427] Valid e-mail is being considered as invalid

Updates database model: no

> [!CAUTION]
> This version is only compatible with SQL Server 2017 or newer. If you are using an older version of SQL Server, please skip this version and update
> to version 1.78.1 or newer.

<a name="v1-77-0" />
### 1.77.0 (2025-01-23)

* New Features
  * [SIG-1365] Document option to disable notifications
  * [SIG-1383] Restricted templates

* Improvements
  * [SIG-1368] Improve notification error visibility
  * [SIG-1392] Added priority queue in Hangfire
  * [SIG-1407] SPA update
  * [SIG-1421] FaceTec engine update
  * [SIG-1423] Improvments in the create document API when using templates

* Bug fixes
  * [SIG-1248] Document created with invalid e-mail
  * [SIG-1386] Simple electronic signature is using GMT timezone
  * [SIG-1393] Unique signature does not add title to manifest
  * [SIG-1416] Cannot validate Paraguay phone number
  * [SIG-1420] Cannot donwload original version of concluded documents

Updates database model: yes

> [!CAUTION]
> This version is only compatible with SQL Server 2017 or newer. If you are using an older version of SQL Server, please skip this version and update
> to version 1.78.1 or newer.

> [!WARNING]
> Starting this version, the logs are partitioned by date when hosting the application on Azure. If you are hosting the application in this environment, check
> if the setting `ASPNETCORE_ENVIRONMENT` is defined with the value `Azure` and that the setting `Serilog__WriteTo__0__Args__keyGenerator` is **not defined**.

<a name="v1-76-0" />
### 1.76.0 (2024-12-04)

* New Features
  * [SIG-1357] Send authentication tokens with SMSToken
  * [SIG-1400] Enable liveness to work in embedded signature (iFrame)
  * [SIG-1402] Add setting to hide SubjectName Xades signatures

* Improvements
  * [SIG-1347] Setting to block the download of pending documents
  * [SIG-1360] Add button to generate events report
  * [SIG-1362] Generate expiring certificates report
  * [SIG-1411] Add setting to define database command timeout
  * [SIG-1370] [Templates] Create tag when clicking the plus button for "Multiple options", single choice
  * [SIG-1371] [Templates] Reorganization of cards in template creation
  * [SIG-1372] [Templates] Use the same order widget from recipients in the template fields
  * [SIG-1373] [Templates] Improvements to the template selection dialog
  * [SIG-1375] [Templates] Increase tag padding for pre-defined fields
  * [SIG-1376] [Templates] Create simplified dropdown for signature types
  * [SIG-1377] [Templates] Replace toggles with checkboxes and update texts
  * [SIG-1378] [Templates] Implement suggestions for the share link
  * [SIG-1379] [Templates] Replace "Name" with "Field label"
  * [SIG-1380] [Templates] Add "Checked" and "Unchecked" labels to checkboxes

* Bug fixes
  * [SIG-1308] Save button is always active when editing a recipient that has phone number in template update screen
  * [SIG-1366] [Templates] Bug when replacing template values
  * [SIG-1399] Error generating invoices for PIX fields that exceed the default limit
  * [SIG-1410] Document with simple signature type does not display signature marks

Updates database model: yes

<a name="v1-75-2" />
### 1.75.2 (2024-09-17)

* Bug fixes
  * [SIG-1364] Cannot sign terms of use with electronic signature

Updates database model: no

<a name="v1-75-1" />
### 1.75.1 (2024-09-12)

* Improvements
  * [SIG-1358] Setting to disable display of signature evidences in public document validation page

Updates database model: no

<a name="v1-75-0" />
### 1.75.0 (2024-09-12)

* New Features
  * [SIG-1330] FaceTec 3d-liveness integration (only for internal testing)

* Improvements
  * [SIG-1035] Setting to allow sending of attachments in pending and concluded document notifications
  * [SIG-1071] Generation of document validation link in document details page
  * [SIG-1196] Allow whatsapp only authentication in CSV flows
  * [SIG-1328] Block usage of virtual cameras for authentication methods that require selfie

* Bug fixes
  * [SIG-1340] Access removal in user administration is not removing folder accesses
  * [SIG-1348] Error while downloading batch of documents that have names with special characters

Updates database model: yes

<a name="v1-74-1" />
### 1.74.1 (2024-08-08)

* Improvements
  * [SIG-1331] Optimize organization document list performance
  * [SIG-1341] Prevent usage of eval() functions in PDFs opened with PDF.JS

* Bug fixes
  * [SIG-1342] 'DocumentExpired' webhook is not present in the swagger documentation

Updates database model: yes

<a name="v1-73-0" />
### 1.73.0 (2024-07-30)

* Improvements
  * [SIG-1316] Allow observer to view attachments in external observation page

* Bug fixes
  * [SIG-1306] Error restarting signature batch for instances that do not allow electronic signature
  * [SIG-1321] Bank billets cannot be generated

Updates database model: no

<a name="v1-72-1" />
### 1.72.1 (2024-07-03)

* Improvements
  * [SIG-1049] Update flow action order by using step numbers
  * [SIG-1300] Fix timezone for close invoice job

Updates database model: no

<a name="v1-72-0" />
### 1.72.0 (2024-07-03)

* Improvements
  * [SIG-1213] New email customization options for organizations
  * [SIG-1276] Save user name and identifier when signing eletronically
  * [SIG-1295] Hide pagination total in screens with tables with too many results

* Bug fixes
  * [SIG-1169] Default plan cannot be selected in billing organization administration
  * [SIG-1283] Whatsapp share link is incomplete
  * [SIG-1285] Error generating printer friendly version if there are initials placed in pages that do not exist in the document
  * [SIG-1286] Error generating QR code
  * [SIG-1294] Error validating documents with expired certificates
  * [SIG-1297] Error saving document flow with Whatsapp authentication only

Updates database model: no

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released until 2024-07-03.

<a name="v1-71-0" />
### 1.71.0 (2024-05-24)

* New Features
  * [SIG-1230] Cloud signature with CSC protocol
  * [SIG-1232] Procedure to generate iugu invoice again after failure during automated procedure

* Improvements
  * [SIG-1038] Allow folders to be viewed in system administration
  * [SIG-1193] Update packages with vulnerabilities
  * [SIG-1205] Participant data update warning shown before creating a document
  * [SIG-1207] Allow flow action ID to be added to Datavalid request tag
  * [SIG-1221] Add customizable signer limit

* Bug fixes
  * [SIG-1206] Swagger schema with wrong namespace
  * [SIG-1241] Electronic signature with Whatsapp authentication is not requiring phone number to be filled in order to create a document
  * [SIG-1258] Application lost access to document details API
  * [SIG-1259] Cloud signature does not create signature events
  * [SIG-1269] Incorret phone validation when switching authentication methods

Updates database model: no

<a name="v1-70-0" />
### 1.70.0 (2024-04-16)

* New Features
  * [SIG-1194] Setting to add organization ID to Request Tag when using Datavalid
  * [SIG-1195] Embed signature marks positioning page
  * [SIG-1177] Users report with profile information
  * [SIG-1182] Setting to allow action refusals to not update document status

* Bug fixes
  * [SIG-1134] Events from personal accounts display special character in organization name

Updates database model: no

<a name="v1-69-1" />
### 1.69.1 (2024-04-02)

* New Features
  * [SIG-1183] Multiple signature marks in simple signature
  * [SIG-1185] Allow customization of backend and frontend resources

* Improvements
  * [SIG-1189] Allow Basic and Operator profiles to refuse/cancel documents

* Bug fixes
  * [SIG-1190] Electronic signature is not saving timestamp transactions
  * [SIG-1191] Simple signature type document can be signed digitally in batch signature
  * [SIG-1192] Send button is disabled when participants are added before uploading files

Updates database model: no

<a name="v1-68-1" />
### 1.68.1 (2024-03-06)

* Bug fixes
  * [SIG-1186] Printer friendly version of single signature document displays no signers
  * [SIG-1187] Cannot sign document that has prepositioned signature initials

Updates database model: no

<a name="v1-68-0" />
### 1.68.0 (2024-03-05)

* New Features
  * [SIG-949] Simple document - document with electronic signatures that is validated by ITI
  * [SIG-1061] Selection of signature types (simple, advanced and qualified) by document creator
  * [SIG-1176] Setting to initiate loading of big LCR files

* Improvements
  * [SIG-1171] Remove all of user's folder accesses for subscription folders when he is removed from subscription
  * [SIG-1174] Concluded document report in Administration
  * [SIG-1179] Update list folder method in Signer Client
  * [SIG-1180] Add folly russian violet theme
  * [SIG-1052] Allow cloud signature with e-CNPJ certificates

Updates database model: yes

<a name="v1-67-0" />
### 1.67.0 (2023-12-19)

* New Features
  * [SIG-1087] Display attachment preview by clicking the icon
  * [SIG-1152] Setting to generate signatures manifest when validating documents

* Improvements
  * [SIG-1084] Add information about organization creation permission in instance information
  * [SIG-1170] Low PDF resolution when viewed on mobile devices

* Bug fixes
  * [SIG-1166] Term of Use cannot be signed with cloud certificate
  * [SIG-1167] Document expired after being concluded

Updates database model: no

<a name="v1-66-0" />
### 1.66.0 (2023-11-13)

* New Features
  * [SIG-1157] Option to add unsubscribe link in notifications sent by e-mail
  * [SIG-1158] Opening and click tracking in sent e-mails
  * [SIG-1161] Support ITI QR code validation

* Improvements
  * [SIG-1151] Improve validation of PDFs that have annotations
  * [SIG-1153] Setting to notify participants when document attachments are added or deleted
  * [SIG-1154] Setting to notify participants when document information is updated
  * [SIG-1155] Setting to notify participants when a new version of a document is added

* Bug fixes
  * [SIG-1145] Cannot update payment preferences through Billing menu
  * [SIG-1150] Document concluded Webhook is being received after the document signed webhook
  * [SIG-1156] Cannot sign with cloud certificate in public area if there is a logged user that is not the signer
  * [SIG-1160] Organization credits are not displayed when organization has custom plan

Updates database model: yes

<a name="v1-65-0" />
### 1.65.0 (2023-10-11)

* New Features
  * [SIG-1106] Setting to require user to select a folder when creating a document
  * [SIG-1139] Allow creation of multiple webhooks in an organization

* Improvements
  * [SIG-1143] Use Datavalid v3 API and the endpoint that validates facial images only

* Bug fixes
  * [SIG-1144] Expired link screen generates pending action e-mail even if document is already concluded

Updates database model: no

<a name="v1-64-1" />
### 1.64.1 (2023-10-02)

* Bug fixes
  * [SIG-1140] Welcome email being sent more than once to users after signing documents

Updates database model: no

<a name="v1-64-0" />
### 1.64.0 (2023-09-28)

* New Features
  * [SIG-700] New types of signature visual representation

* Improvements
  * [SIG-451] Allow adding/removing organization users with API
  * [SIG-652] Allow organization administrator to update user information
  * [SIG-750] Allow creation of documents in folders shared by organizations
  * [SIG-868] Show reload certificates button when no certificate is found for the user
  * [SIG-987] List deleted documents with API
  * [SIG-1137] Error when a space is sent in the start/end of the participant name
  * [SIG-1141] Allow usage of any e-mail for existing participants when creating documents (for instances with e-mail as key and unique Country identifier)

* Bug fixes
  * [SIG-1140] Notarized document is registered with watermark

Updates database model: yes

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released until 2023-09-27.

<a name="v1-63-0" />
### 1.63.0 (2023-08-28)

* New Features
  * [SIG-948] Download/display file when validating uploaded P7S (PKCS7) files

* Improvements
  * [SIG-514] Improve description of Send Document permission in add user to organization screen
  * [SIG-532] Add document view/download events
  * [SIG-830] Include the electronic signature authentication type in the organization document report
  * [SIG-983] Display user initials when pre-positioning signature initials
  * [SIG-984] Setting to allow name/company identifier update only for sys admin users
  * [SIG-1042] Block usage of personal accounts (while using open mode)
  * [SIG-1093] Customize the position of marks of the signed version in organization settings page
  * [SIG-1128] Rename "e-mail and selfie (Datavalid)" authentication option to "e-mail and facial biometrics"

* Bug fixes
  * [SIG-911] Add approver without option to add signature initials
  * [SIG-966] Signature manifest displays invalid signatures as valid
  * [SIG-1060] Required signature initials are not being saved when editing a document flow
  * [SIG-1116] Account with billing disabled still generates invoices
  * [SIG-1132] Cannot receive authentication code if participant e-mail is wrong and is updated after first code is requested

Updates database model: no

<a name="v1-62-0" />
### 1.62.0 (2023-08-10)

* New Features
  * [SIG-1085] Add input to search for documents in Events page and create organization events page
  * [SIG-1121] Confirm signature positioning with a dialog

* Improvements
  * [SIG-747] Intermediate profile between basic and manager in organization
  * [SIG-872] Basic users should not view organization invoices and billing information
  * [SIG-1091] Send attachments in Generate Documents page
  * [SIG-1125] Improve search of ICP Brasil signature policies when validating documents

* Bug fixes
  * [SIG-1133] Signature initials displays a "undefined" string

Updates database model: no

<a name="v1-61-1" />
### 1.61.1 (2023-08-04)

* Bug fixes
  * [SIG-1130] Cannot edit participant e-mail while updating document flow

Updates database model: no

<a name="v1-61-0" />
### 1.61.0 (2023-08-02)

* Improvements
  * [SIG-974] Allow adding participants after document flow is concluded
  * [SIG-1037] Consider envelope as document for billing purposes (if there is no specific price defined for envelope in the plan)
  * [SIG-1120] Save notification content in Storage instead of database
  * [SIG-1127] Make NotifyPendingActionsIndividually work for approvers

* Bug fixes
  * [SIG-996] Signature reminder does not work for actions added when editing document flow
  * [SIG-1126] Error displaying details of document that has attachment sent by user that is not a flow participant

Updates database model: no

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released until 2023-08-01.
> This versions marks the start of the notifications content migration from the database to the configured Blob Storage.

<a name="v1-60-0" />
### 1.60.0 (2023-07-17)

* New Features
  * [SIG-1112] Display document original version when signing documents if Simplified Manifest is enabled

* Improvements
  * [SIG-1051] Add envelope information in the organization documents report
  * [SIG-1117] Decrease performance impact of adding user into organization with large number of documents
  * [SIG-1119] Update the maximum length of user identifiers
  * [SIG-1068] Permission description in the folder user profiles

* Bug fixes
  * [SIG-1113] Error signing with embedded signature when there are pre-positioned signature initials
  * [SIG-1115] Checkbox always comes selected even when setting the NotifyParticipantsDefaultValue options
  * [SIG-1118] Reminders are not being removed when a document is deleted

Updates database model: yes

<a name="v1-59-0" />
### 1.59.0 (2023-07-03)

* Improvements
  * [SIG-1092] Add djp (deep-jungle-princeton) theme
  * [SIG-1096] Update Zoom authentication to Server to Server instead of JWT

* Bug fixes
  * [SIG-1067] Participant phone number is not displayed when editing document flow
  * [SIG-1103] Add settings to allow use of time zone that is different from the defined by the IdentifierHandler
  * [SIG-1105] Number of pending documents is including refused documents in the dashboard
  * [SIG-1110] Signed PDF with Validation Stamp displays errors in Adobe Reader validation

Updates database model: no

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released until 2023-06-28.
> If you use Zoom integration, configure Server to Server credentials before updating.

<a name="v1-58-3" />
### 1.58.3 (2023-06-19)

* Improvements
  * [SIG-1102] Support new Whatsapp message policies
  * [SIG-1108] Send neighborhood information when creating receipts with NFE.io

* Bug fixes
  * [SIG-1104] Welcome notification to set password is sent even if instance has AD exclusive login

Updates database model: no

<a name="v1-58-2" />
### 1.58.2 (2023-05-30)

* Bug fixes
  * [SIG-1097] Cannot sign document in single signature page

Updates database model: no

<a name="v1-58-1" />
### 1.58.1 (2023-05-25)

* Improvements
  * [SIG-1094] Add dim palatinate blue theme

Updates database model: no

<a name="v1-58-0" />
### 1.58.0 (2023-05-25)

* New Features
  * [SIG-1073] Support to Paraguay's Cédula de Identidad
  * [SIG-1090] Setting to add custom mark in Validation Stamp

* Improvements
  * [SIG-986] Add Organization and Billing reports in administration
  * [SIG-1045] Add folder reports by period

* Bug fixes
  * [SIG-1088] Document updated after signature does not diplay signature errors
  * [SIG-1095] When batch signing with HSM and selecting all documents, only the first 10 are signed

Updates database model: no

<a name="v1-57-0" />
### 1.57.0 (2023-04-24)

* New Features
  * [SIG-1028] Disable/enable timestamp in organization settings
  * [SIG-1056] Enable removal of CAdES signatures via API

* Improvements
  * [SIG-1031] Improve message when electronic signature is not enabled for a signer and he attempts to sign electronically
  * [SIG-1063] Provide document validation key via API
  * [SIG-1086] Allow download of the unmarked original file when Validation Stamp is enabled

* Bug fixes
  * [SIG-197] HSM signature does not apply signature visual representation correctly
  * [SIG-1081] Signature pre-positioning not working for flow actions that will be added to all documents in Generate Documents page

Updates database model: yes

<a name="v1-56-0" />
### 1.56.0 (2023-03-27)

* New Features
  * [SIG-350] Signature notifications via Whatsapp
  * [SIG-1062] Create Zomp Ut Orange theme

* Improvements
  * [SIG-1065] Display SMS and Whatsapp notifications in the same page that displays e-mail notifications

* Bug fixes
  * [SIG-1064] Correct order of required authentication methods when signing electronically

Updates database model: yes

<a name="v1-55-0" />
### 1.55.0 (2023-03-03)

* Improvements
  * [SIG-798] Send multiple documents with document specific flows
  * [SIG-1044] Add new SMS providers (Amazon SNS and Tigo)

* Bug fixes
  * [SIG-870] Option to position text in the middle does not work for signature image set in the user profile
  * [SIG-1015] Error signing multiple documents with certificate
  * [SIG-1039] Cannot set the default billing plan for organization/user that has a custom plan
  * [SIG-1047] Even if signature visual representation is disabled in a organization, it is still used in electronic and cloud signatures

Updates database model: no

<a name="v1-54-0" />
### 1.54.0 (2023-02-17)

* New Features
  * [SIG-1032] Push notification for pending signature/approval in Web PKI app
  * [SIG-1040] Organization setting to enable/disable signature visual representation

* Improvements
  * [SIG-1022] Define signature format (CAdES, XAdES ou PAdES) in document create page
  * [SIG-1034] Setting to define the default document expiration time

* Bug fixes
  * [SIG-1043] Cannot sign with cloud certificate if user has a valid and an expired certificate

Updates database model: yes

<a name="v1-53-0" />
### 1.53.0 (2023-02-02)

* New Features
  * [SIG-819] New billing system
  * [SIG-1007] Setting to define organization signature image
  * [SIG-1033] Direct link to hire billing plan

* Improvements
  * [SIG-947] Add option to define required type of digital certificate when creating documents
  * [SIG-1000] Add basic instance settings in administration page
  * [SIG-1036] Web PKI brand support

* Bug fixes
  * [SIG-834] Folder settings allows users to list all organizations
  * [SIG-958] Unique (fast) signature with cloud certificate does not create Validation Stamp marks

Updates database model: yes

<a name="v1-52-1" />
### 1.52.1 (2023-01-18)

* New Features
  * [SIG-978] Create Silver Eerie Black theme

* Improvements
  * [SIG-43] Refactor folder and documents access updates

Updates database model: no

<a name="v1-52-0" />
### 1.52.0 (2023-01-10)

* New Features
  * [SIG-743] Add configuration for forcing pre-position signatures option enabled by default in document creation screen
  * [SIG-1021] Document reports in PDF and CSV formats
  * [SIG-1025] Electronic signature with PFX certificate

* Improvements
  * [SIG-994] Framework update to .NET 6
  * [SIG-1023] Add default titles for signers

Updates database model: yes

<a name="v1-51-0" />
### 1.51.0 (2022-12-08)

* New Features
  * [SIG-978] Create yale blue yellow theme

* Improvements
  * [SIG-999] Allow folder admin to create subfolders
  * [SIG-1006] Optimize organization documents report

* Bug fixes
  * [SIG-1005] Cannot fill PDF form using document create API if a document type is not set
  * [SIG-1002] HSM integration does not work on Linux
  * [SIG-1009] Error canceling signature batch

Updates database model: no

<a name="v1-50-0" />
### 1.50.0 (2022-11-16)

* New Features
  * [SIG-445] Add tags to the document and allow them to be used while searching
  * [SIG-1001] Google Tag Manager integration

* Improvements
  * [SIG-988] Setting to hide participants and action orders in document detials page for non Manager/Admin users.
  * [SIG-992] Webhook for document creation

* Bug fixes
  * [SIG-964] Error sending file with too long name
  * [SIG-1002] Batch signature of all documents does not work with HSM

Updates database model: yes

<a name="v1-49-2" />
### 1.49.2 (2022-11-01)

* Improvements
  * [SIG-998] Add setting to enable menu loading using iframe

* Bug fixes
  * [SIG-995] Error while signing documemnt whose flow has been updated

Updates database model: no

<a name="v1-49-1" />
### 1.49.1 (2022-11-01)

* Improvements
  * [SIG-982] Allow migration of documents between instances

* Bug fixes
  * [SIG-965] Cannot add user to folder

Updates database model: no

<a name="v1-49-0" />
### 1.49.0 (2022-10-18)

* Improvements
  * [SIG-975] Do not display login button after signing a document if hide public area links option is enabled
  * [SIG-969] Allow sign rule users to sign document even if one of the users to refuses to sign
  * [SIG-944] Optimize memory use

* Bug fixes
  * [SIG-991] iugu Rate limiting when closing invoices
  * [SIG-989] Multiple notifications sent to organization that disabled the periodic reminder notifications
  * [SIG-970] Option "Return to home screen" in the restricted access page does not respect the customized home page

Updates database model: yes

<a name="v1-48-1" />
### 1.48.1 (2022-09-15)

* Improvements
  * [SIG-967] Add setting to not perform cloud certificate discovery

* Bug fixes
  * [SIG-968] Searches in users screen return multiple options if there is a number on the query

Updates database model: no

<a name="v1-48-0" />
### 1.48.0 (2022-09-06)

* New Features
  * [SIG-938] Automatic pending signature reminders

* Improvements
  * [SIG-515] Permitir acessar tela de detalhes do documento ao clicar em evento relacionado a ele
  * [SIG-65] Improve error handling in signature batch

* Bug fixes
  * [SIG-963] Validation result is undefined when validating XML files
  * [SIG-956] Printer friendly version has a typo in download multiple documents dialog
  * [SIG-923] Refusal webhook is not sent for sign rules
  * [SIG-811] Error message displayed when creating document with flow that contains only observers

Updates database model: yes

<a name="v1-47-0" />
### 1.47.0 (2022-08-18)

* New Features
  * [SIG-915] Setting to use organization name as notifications sender name
  * [SIG-832] GOV BR integration for signing documents

* Improvements
  * [SIG-953] Setting to define the delay to send the welcome message notification
  * [SIG-941] Do not require login when using share option to obtain a signature link
  * [SIG-931] AD-RC signing policy for full XML signature
  * [SIG-758] Setting to mask user e-mail address

* Bug fixes
  * [SIG-952] Blue stripe being displayed when signing PDF with forceCadesSignature option enabled
  * [SIG-951] Error generating printer friendly version of CADeS PDF

Updates database model: yes

<a name="v1-46-1" />
### 1.46.1 (2022-08-01)

* Bug fixes
  * [SIG-946] Error signing with cloud certificate

Updates database model: no

<a name="v1-46-0" />
### 1.46.0 (2022-07-29)

* New Features
  * [SIG-943] Creation and validation of health documents (prescription, certificate...)
  * [SIG-939] Setting to not allow digital signature if electronic signature is enabled for a signer
  * [SIG-932] Display number of actions and participants in signature page
  * [SIG-738] Add approvers to signature manifest

* Improvements
  * [SIG-928] Add new columns for organization documents report
  * [SIG-914] Setting to display participant title as default
  * [SIG-913] Add bigger page size options in documents list page
  * [SIG-779] Add document creator in invoice transactions report

* Bug fixes
  * [SIG-942] User can select multiple signature positions for the same document
  * [SIG-940] Signature is not positioned correctly while loading flow from existing document
  * [SIG-935] Cannot edit flow of document that has observers using the API

Updates database model: no

<a name="v1-45-0" />
### 1.45.0 (2022-06-30)

* New Features
  * [SIG-904] Option to require a specific certificate holder type
  * [SIG-726] Option to delete certificates in the personal certificates screen

* Improvements
  * [SIG-933] Update Swagger
  * [SIG-920] Add message for signatures made with ICP Brasil certificates in the Manifest
  * [SIG-905] Add event when the default billing plan is updated
  * [SIG-885] Improve how a timestamper signature is displayed when validating a document

* Bug fixes
  * [SIG-924] View documents button is not displayed in the documents concluded notification
  * [SIG-907] Repeated API calls when signing a document
  * [SIG-818] Add loading when requesting new pending action notifications
  * [SIG-817] Error displaying informations for users without identifier (CPF)

Updates database model: yes

<a name="v1-44-1" />
### 1.44.1 (2022-06-15)

* Improvements
  * [SIG-917] Improvements in embedded signature
  * [SIG-912] Improve performance of user queries with GrantID
  * [SIG-875] Create chartreuse traditional violet theme

* Bug fixes
  * [SIG-925] Error displaying swagger (for Linux instances)
  * [SIG-922] Embedded signature without preview and with pre-positioned initials shows initials not found error
  * [SIG-918] Error generating manifest
  * [SIG-908] Error downloading printer friendly version

Updates database model: no

<a name="v1-44-0" />
### 1.44.0 (2022-06-03)

* New Features
  * [SIG-898] Allow setup of chat with customized script
  * [SIG-875] Create vivid sky blue theme

* Improvements
  * [SIG-902] Add tooltip for the dates in the Documents screen

* Bug fixes
  * [SIG-906] Error retrieving initials for signer of rule in public signature page
  * [SIG-888] Update signature type in order of actions according to the type of signature performed
  * [SIG-812] Cannot change document page number in iPhone

Updates database model: no

<a name="v1-43-3" />
### 1.43.3 (2022-05-19)

* Bug fixes
  * [SIG-896] User redirected to login page after embedded signature
  * [SIG-895] Incorrect count of documents in the organization details screen
  * [SIG-892] Instance without visual representation displays signature initials setting when creating documents

* Improvements
  * [SIG-899] Allow special province for foreign users in the "cedula de identidade" and "RUC" for ecuador

Updates database model: no

<a name="v1-43-2" />
### 1.43.2 (2022-05-09)

* Bug fixes
  * [SIG-893] Assinaturas ADRA e ADRC inválidas por conta de LCR com formatação errada publicada pelo ITI

Updates database model: no

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released after 2022-05-09.

<a name="v1-43-1" />
### 1.43.1 (2022-05-04)

* New Features
  * [SIG-887] Setting to force usage of ICP Brasil signing policies for PDFs

* Improvements
  * [SIG-882] Do not normalize PDFs if it is PDF/A

* Bug fixes
  * [SIG-886] Cannot download printer friendly version

Updates database model: no

<a name="v1-43-0" />
### 1.43.0 (2022-04-29)

* New Features
  * [SIG-619] Allow migration of signed documents from other applications
  * [SIG-138] Signature with initials on "normal signature" and "unique signature"
  * [SIG-793] Allow page specific positioning of initials
  * [SIG-783] Signature initials requirement modes (disabled, optional or required) by participant

* Improvements
  * [SIG-883] New option for configuring timestamper with Basic Authentication
  * [SIG-877] Setting to enable "Pending for me" option as default for all users
  * [SIG-874] Edit signature initials image for pre-positioned initials
  * [SIG-871] Settings to define maximum number of Organizations and Folders displayed in the document filters
  * [SIG-863] Add initials with the participant's name as default
  * [SIG-857] Updated PKI SDK
  * [SIG-850] Reduce impact of validating documents with too many signatures
  * [SIG-846] Mock calls to iugu in tests

* Bug fixes
  * [SIG-878] Blank page in the signature manifest for documents that are not PDF

Updates database model: yes

> [!WARNING]
> Before updating to this version make sure your license supports PKI SDK versions released after 2022-04-29.

<a name="v1-42-0" />
### 1.42.0 (2022-04-11)

* New Features
  * [SIG-859] Option to set the signer title in single signature

* Improvements
  * [SIG-845] Display signature type in the action order

* Bug fixes
  * [SIG-864] Document validation link has additional characters at the end
  * [SIG-844] Cancelled document is displayed as pending in the folder list

Updates database model: no

<a name="v1-41-0" />
### 1.41.0 (2022-03-20)

* Improvements
  * [SIG-835] Improvements in upload restrictions
  * [SIG-787] Added setting for automatic ReplyTo to the document creator's email address
  * [SIG-509] Added setting for number of trial period days

* Bug fixes
  * [SIG-851] Cannot create documents with Sys Admin application
  * [SIG-849] Electronic signature appears as digital signature in Signing Tags
  * [SIG-847] Cannot download envelope documents if the Simplified Manifest is enabled

Updates database model: yes

<a name="v1-40-0" />
### 1.40.0 (2022-03-20)

* Improvements
  * [SIG-308] Improve experience for the user that needs to sign the same document twice (with different titles) in the same step

* Bug fixes
  * [SIG-829] PDF/A file is no longer PDF/A after signature

Updates database model: no

<a name="v1-39-1" />
### 1.39.1 (2022-03-20)

* Improvements
  * [SIG-822] Add eminence-cornflower-blue theme
  * [SIG-821] Add "disable pending notifications" field to the create document version API

Updates database model: no

<a name="v1-39-0" />
### 1.39.0 (2021-12-13)

* New Features
  * [SIG-722] Define printer friendly options by organization
  * [SIG-730] Define e-mail options by organization

* Improvements
  * [SIG-729] Option to set "Notify participants" unchecked by default
  * [SIG-800] Improved signed P7S file name
  * [SIG-802] Add electric purple indigo theme
  * [SIG-804] Updated button text to "View document" in sign/approve notifications
  * [SIG-810] Add certificate requirements information in FlowActionModel

* Bug fixes
  * [SIG-794] Fix informations in the organization billing report
  * [SIG-807] Create documents button still being displayed after disabling create document permission as default
  * [SIG-808] Fixed Ecuador personal identifier validation

Updates database model: yes

<a name="v1-38-0" />
### 1.38.0 (2021-11-11)

* New Features
  * [SIG-723] Request access to administrators in closed mode
  * [SIG-665] Monthly limit for transaction type

* Improvements
  * [SIG-452] Display and search by CPF in users administration

* Bug fixes
  * [SIG-796] Error displaying signature page if prepositioned marks have 0 width/height
  * [SIG-792] Generic SMS is sending wrong content-type
  * [SIG-791] Default payment method cannot be changed in the system administration area
  * [SIG-781] Signature with multiple documents fails in the first document on Unique Signature

Updates database model: no

<a name="v1-37-0" />
### 1.37.0 (2021-10-21)

* New Features
  * [SIG-774] Allow configuration of payment methods in iugu integration
  * [SIG-773] Add document name in the notification subject
  * [SIG-772] Display pending signers in the document list screen
  * [SIG-229] Resize signature visual representation during signature

* Improvements
  * [SIG-784] Allow user to upload file instead of scanning it on Scanner
  * [SIG-764] Allow notification subjects to be customized
  * [SIG-759] Refused documents tab

* Bug fixes
  * [SIG-778] Error saving billing information if the Zip Code is an "incomplete code"
  * [SIG-761] PDF that was signed and protected by password does not show appropriate error when signing

Updates database model: no

<a name="v1-36-0" />
### 1.36.0 (2021-10-06)

* New Features
  * [SIG-769] Route to redirect user to register page
  * [SIG-751] Setting to attach original document in the pending signature notification
  * [SIG-641] Add document new version

* Improvements
  * [SIG-777] Fixes in e-mails content
  * [SIG-776] Create blue venetian red theme
  * [SIG-762] Add support to the Generic SMS provider
  * [SIG-757] Add greetings and improvements to e-mails
  * [SIG-450] Refactoring of SPA themes

* Bug fixes
  * [SIG-775] Signatures download options is displayed in the validation of cancelled documents
  * [SIG-768] Printer friendly right side mark is not displayed in horizontal documents
  * [SIG-767] Wrong SPA mixin include
  * [SIG-763] Document with timestamp and self signed certificate electronic signatures do not display all signatures in manifest
  * [SIG-741] Electronic signature with selfie is not displayed correctly when updating flow
  * [SIG-469] Fix invite flow

Updates database model: no

<a name="v1-35-0" />
### 1.35.0 (2021-09-15)

* New Features
  * [SIG-752] Instance setting to define which document version is sent in the document conclusion notification
  * [SIG-576] Folder selector that allows to navigate in folder hierarchy

* Improvements
  * [SIG-745] Add signature type (electronic or digital) in document reports
  * [SIG-699] Setting to mask CPFs
  * [SIG-687] Document signature with certificate requirements

* Bug fixes
  * [SIG-753] Signature positioning not available in document generation
  * [SIG-749] Instance with disabled printer friendly version is attaching it in document conclusion notifications
  * [SIG-733] Document creator in organization cannot edit or delete documents he created

Updates database model: yes

<a name="v1-34-0" />
### 1.34.0 (2021-08-20)

* New Features
  * [SIG-740] Add setting that allows notification of pending actions in batch signature
  * [SIG-737] Create space cadet yellow theme
  * [SIG-181] Default signature image for both digital and electronic signatures

* Improvements
  * [SIG-719] Allow reduction of possible actions in the public area
  * [SIG-689] Handle repeated headers in the document generation CSV
  * [SIG-662] Cloud certificate signature does not display certificate validation errors in single signature

* Bug fixes
  * [SIG-742] Printer friendly version displays expiration watermark even if the document is concluded
  * [SIG-734] Incorrect selfie orientation when taking picture in iOS
  * [SIG-725] Error while removing participant from flow after sending SMS or creating Pix authentication
  * [SIG-706] Organization is not unblocked after paying due invoices

Updates database model: no

<a name="v1-33-1" />
### 1.33.1 (2021-07-30)

* Improvements
  * [SIG-736] Update Azure blob management library

* Bug fixes
  * [SIG-735] Error while signing PDF electronically

Updates database model: no

<a name="v1-33-0" />
### 1.33.0 (2021-07-22)

* New Features
  * [SIG-418] Display update history in document details
  * [SIG-422] Envelope submission (public batch signature/approval)
  * [SIG-480] Batch signature reminders in documents screen
  * [SIG-524] Document report by folder
  * [SIG-596] Document saved flows management
  * [SIG-618] Document refusal and cancellation
  * [SIG-686] Add e-CNPJ information in the signature mark
  * [SIG-696] Advanced document search
  * [SIG-697] Due date for signing documents
  * [SIG-713] Email templates customization per instance

* Improvements
  * [SIG-633] Signature ticket simplification to have shorter URLs
  * [SIG-703] Enable TSP provider names to be hidden for cloud certificates
  * [SIG-712] Add international orange apricot theme
  * [SIG-720] Update document due date
  * [SIG-724] Add generic viridian blue theme

* Bug fixes
  * [SIG-701] Electronic signature with Selfie not working in iOS

Updates database model: yes

<a name="v1-32-0" />
### 1.32.0 (2021-06-25)

* New Features
  * [SIG-670] Electronic signature with PIX authentication
  * [SIG-631] Electronic signature with facial biometric validated by SERPRO
  * [SIG-538] Refuse to sign a document

* Improvements
  * [SIG-653] Embedded signature without document preview

* Bug fixes
  * [SIG-690] Error signing deleted document if the enabled deleted document validation is enabled

Updates database model: yes

<a name="v1-31-1" />
### 1.31.1 (2021-06-08)

* Bug fixes
  * [SIG-691] Share participant link button should direct approvers to private area

Updates database model: no

<a name="v1-31-0" />
### 1.31.0 (2021-06-08)

* New Features
  * [SIG-688] Add international orange green and onyx carrot orange themes
  * [SIG-664] Instance documents per month report
  * [SIG-655] Generate share link for document participants

* Improvements
  * [SIG-685] Add support to alternative authentication methods with AWS S3
  * [SIG-656] Support signature validation with obsolete algorithms
  * [SIG-650] Display non PDF files while signing documents
  * [SIG-648] Improve error handling of password protected PDFs
  * [SIG-628] Add warning that attachments are not signed
  * [SIG-560] Support validation of files with more than 100 signatures

* Bug fixes
  * [SIG-649] Do not display signature positioning option for non PDF documents

Updates database model: no

<a name="v1-30-0" />
### 1.30.0 (2021-05-25)

* Improvements
  * [SIG-659] Auto retry timestamp request after a failure
  * [SIG-646] Add home page dynamic HTML as a trusted resource
  * [SIG-629] Batch signature of documents without the need to select them page by page

* Bug fixes
  * [SIG-661] Conclusion notification not being sent in fast signature mode
  * [SIG-658] Emails to be notified when document are concluded are not being notified when the documents are signed in batch
  * [SIG-657] Too many emails sent to participants when generating documents
  * [SIG-654] Cannot edit the text positioning of the signature visual representation after the images has been sent
  * [SIG-645] Display of signers in the manifest is different if the file type is not PDF

Updates database model: yes

<a name="v1-29-0" />
### 1.29.0 (2021-04-27)

* New Features
  * [SIG-638] Zoom meetings integration
  * [SIG-624] Set notified emails to send documents as attachment after the flow is concluded
  * [SIG-543] CSV with flow information to generate multiple documents with document specific flows

* Improvements
  * [SIG-460] Display pending signatures in the signature manifest

* Bug fixes
  * [SIG-643] Signature intials options is not displayed if document authentication option is not visible 
  * [SIG-642] Wrong extensions added when downloading multiple documents at once

Updates database model: yes

<a name="v1-28-0" />
### 1.28.0 (2021-04-06)

* New Features
  * [SIG-555] Require the selection of a signature representation position
  * [SIG-476] Consent Removal

* Improvements
  * [SIG-634] Allow Timestamper authentication with Basic Authentication
  * [SIG-621] Send welcome notification only after the document is concluded
  * [SIG-613] Allow a user submitting a document to inform the cellphone number for SMS electronic signature signers
  * [SIG-578] Add new SMS providers

* Bug fixes
  * [SIG-635] Invoice webhook does not included owner information
  * [SIG-630] Edit flow button is displayed even for concluded flows
  * [SIG-470] Error signing with custom visual representation that has .webp file

Updates database model: yes

<a name="v1-27-0" />
### 1.27.0 (2021-03-25)

* New Features
  * [SIG-614] Service receipt generation (NFS-e)

* [SIG-549] iugu payment gateway integration:
  * [SIG-588] Create checkout page
  * [SIG-593] Allow user to view and set his favorite payment method
  * [SIG-592] Send emails to clients regarding invoices statuses
  * [SIG-590] Display payment information in the invoice details screen

* Improvements
  * [SIG-625] Add new API for SECURITI integration
  * [SIG-620] Fix tests that are failing in the development environment
  * [SIG-606] Add setting to remove view documents button in multiple documents notifications

* Bug fixes
  * [SIG-626] Fix signature time displayed in the printer friendly version
  * [SIG-617] Incorrect detection of Scanner integration

Updates database model: yes

<a name="v1-26-1" />
### 1.26.1 (2021-02-18)

* Bug fixes
  * [SIG-616] File name is required when uploading with API
  * [SIG-615] Error sending document to user with email that is a part of other emails
  * [SIG-609] Fix translation of resource common.search (i18n)

Updates database model: no

<a name="v1-26-0" />
### 1.26.0 (2021-02-11)

* Improvements
  * [SIG-605] Update New Relic Sink to improve exception log
  * [SIG-604] Update Lacuna SPA

Updates database model: no

<a name="v1-25-0" />
### 1.25.0 (2021-02-03)

* Improvements
  * [SIG-602] - Improve AWS S3 support

Updates database model: yes

<a name="v1-24-3" />
### 1.24.3 (2021-01-28)

* Improvements
  * [SIG-599] - Do not send invite email if the document was created with the disable notifications option

* Bug fixes
  * [SIG-601] - Cannot use signature rules with private attachments

Updates database model: no

<a name="v1-24-2" />
### 1.24.2 (2021-01-18)

* Bug fixes
  * [SIG-598] - Error opening document creation screen without organizations in the closed system mode

Updates database model: no

<a name="v1-24-1" />
### 1.24.1 (2021-01-15)

* Bug fixes
  * [SIG-597] - Wrong theming of the signature position message

Updates database model: no

<a name="v1-24-0" />
### 1.24.0 (2021-01-14)

* New Features
  * [SIG-463] - Display electronic signature as first option in signature page
  * [SIG-594] - Electronic signature validation for CAdES and XAdES

* Improvements
  * [SIG-441] - Create options to define which PDF page should be displayed first in the Embedded Signature Widget
  * [SIG-474] - Add consent message in screens for LGPD
  * [SIG-496] - Improve handling of password protected PDFs in Fast Signature
  * [SIG-566] - Document flow completion email should redirect to public area
  * [SIG-584] - Simplify user experience of the public signature page

* Bug fixes
  * [SIG-568] - Signature position instructions still displayed after signature
  * [SIG-595] - Error deleting approver that is last participant in the flow

Updates database model: yes

<a name="v1-23-0" />
### 1.23.0 (2021-01-07)

* New Features
  * [SIG-430] - Electronic signature with Selfie
  * [SIG-554] - Allow adding attachments to documents

* Improvements
  * [SIG-408] - Allow signature pre-positioning in edit flow screen
  * [SIG-583] - Update PKI SDK to correct text positioning

* Bug fixes
  * [SIG-582] - Fix RUC validation (Ecuador)

Updates database model: yes

<a name="v1-22-0" />
### 1.22.0 (2020-12-17)

* New Features
  * [SIG-144] - Display electronic signature evidences
  * [SIG-551] - Add document description field
  * [SIG-541] - Allow user to set a message that will be added to pending signature/approval emails

* Improvements
  * [SIG-330] - Allow user to define signature positions for multiple files
  * [SIG-390] - Show all signature in signature pre-positioning
  * [SIG-425] - Validate Scanner verification code of any Scanner subscription
  * [SIG-426] - Add validation stamp in Scanned document
  * [SIG-531] - Improve error handling of HSM signatures
  * [SIG-545] - API to validate signatures and retrieve electronic signature evidences by document ID
  * [SIG-550] - Increase number of retrieved folder in document creation screen
  * [SIG-559] - Update Lacuna PKI to allow ANF certificates (Ecuador)
  * [SIG-570] - Fix welcome and terms of use emails i18n
  * [SIG-571] - Parameterize application default currency
  * [SIG-572] - Parameterize accepted file types for document creation

Updates database model: yes

<a name="v1-21-0" />
### 1.21.0 (2020-12-03)

* New Features
  * [SIG-217] - Allow CPF to be nullable

Updates database model: yes

<a name="v1-20-0" />
### 1.20.0 (2020-11-27)

* New Features
  * [SIG-477] - Integration with Securiti to automate LGDP/DSR requests
  * [SIG-486] - Billing of timestamps and SMS

* Improvements
  * [SIG-508] - Create option to disable email change while submitting a document
  * [SIG-553] - Add participant title in the Simplified manifest
  * [SIG-563] - Enable organization creation via integrations
  * [SIG-565] - Disable indexing of the document validation page

Updates database model: no

<a name="v1-19-0" />
### 1.19.0 (2020-11-18)

* Improvements
  * [SIG-468] - Allow creation of subfolders
  * [SIG-544] - Recognize electronic signatures in the manifest and code validation
  * [SIG-548] - Direct user to billing screen if he has not set billing information
  * [SIG-557] - Replace the name of the initial approval button to review

* Bug fixes
  * [SIG-546] - Document is displayed as signed if another participant has refused it
  * [SIG-547] - Error signing XLSX file
  * [SIG-558] - Prevent normalization of PDFs if they are signed

Updates database model: yes

<a name="v1-18-0" />
### 1.18.0 (2020-11-05)

* New Features
  * [SIG-483] - Prevent completion of billable actions while billing information is not set
  * [SIG-513] - Disable signature visual representation automatic positioning
  * [SIG-519] - Webhook for completed flow actions

* Improvements
  * [SIG-528] - Allow validation of deleted document

Updates database model: no

<a name="v1-17-0" />
### 1.17.0 (2020-10-28)

* Improvements
  * [SIG-437] - Allow flow edit even with Simplified Manifest enabled
  * [SIG-506] - Add logo to lateral mark (validation stamp)
  * [SIG-517] - Changes to manifest and simplified manifest

Updates database model: no

<a name="v1-16-1" />
### 1.16.1 (2020-10-23)

* Improvements
  * [SIG-534] - Create billing administration profile

Updates database model: no

<a name="v1-16-0" />
### 1.16.0 (2020-10-22)

* Improvements
  * [SIG-484] - Include billing information in the closed invoice Webhook
  * [SIG-485] - API to Update invoice status
  * [SIG-525] - Improve error message when upload is not found

* Bug fixes
  * [SIG-511] - Scan button is over the exclude file button in the document submit screen
  * [SIG-526] - Error in unique signature for non PDF documents

Updates database model: no

<a name="v1-15-1" />
### 1.15.1 (2020-10-21)

* Bug fixes
  * [SIG-529] - Restricted access screen does not show if basic profiles are set as default

Updates database model: no

<a name="v1-15-0" />
### 1.15.0 (2020-10-08)

* New Features
  * [SIG-520] - Document versions direct download API
  * [SIG-521] - Simplified API for uploads
  * [SIG-522] - Enable configuration of maximum upload size

* Improvements
  * [SIG-471] - Update watermark text for the validation stamp

Updates database model: no

<a name="v1-14-0" />
### 1.14.0 (2020-09-30)

* Improvements
  * [SIG-427] - Notify the creator of a document upon flow conclusion

* Bug fixes
  * [SIG-499] - Validation screen shows email from registration instead of the one validated in the electronic signature
  * [SIG-505] - Flow order is lost when using a flow from another document
  * [SIG-512] - Error displaying document status in the document administration screen

Updates database model: no

<a name="v1-13-0" />
### 1.13.0 (2020-09-23)

* Improvements
  * [SIG-366] - Allow reproval in the approval flow action
  * [SIG-383] - Improve preview of digital certificates
  * [SIG-411] - Improve error message when a PDF has password and allow signature of protected PDFs
  * [SIG-438] - Set Restricted autocomplete mode as default

* Bug fixes
  * [SIG-442] - Cannot validate signed XML file
  * [SIG-457] - Invoices button is displayed even with billing disabled
  * [SIG-459] - Handle case where page number of a visual representation is set to a page that does not exist in the PDF
  * [SIG-479] - Electronic signature visual representation does not contain the tile specified for the signer

Updates database model: yes

<a name="v1-12-0" />
### 1.12.0 (2020-09-14)

* New Features
  * [SIG-462] - Add profiles to enable/disable creation of documents and organizations
  * [SIG-464] - Add phone number parameter to document creation API

* Improvements
  * [SIG-373] - Generate signing widget with Typescript
  * [SIG-465] - Fast signature with cloud certificate

* Bug fixes
  * [SIG-466] - Error editing order of flow actions

Updates database model: no

<a name="v1-11-0" />
### 1.11.0 (2020-09-02)

* New Features

* Improvements
  * [SIG-397] - Cloud certificates support

Updates database model: no

<a name="v1-10-4" />
### 1.10.4 (2020-08-31)

* New Features
  * [SIG-455] - Add persian-plum-sand theme

* Improvements
  * [SIG-417] - Add file segmented upload

Updates database model: no

<a name="v1-10-3" />
### 1.10.3 (2020-08-26)

* New Features
  * [SIG-429] - Add indicative text to download App for the QR code signature feature
  * [SIG-439] - Update texts and watermark of the simplified manifest

Updates database model: no

<a name="v1-10-2" />
### 1.10.2 (2020-08-25)

* New Features
  * [SIG-449] - Create viridian green yellow theme

* Bug fixes
  * [SIG-447] - Error sending SMS with TotalVoice
  * [SIG-448] - Timeout in login process

Updates database model: no

<a name="v1-10-1" />
### 1.10.1 (2020-08-21)

* New Features
  * [SIG-435] - Create oxford-blue-green theme
  * [SIG-436] - Create castleton-green-orange theme

* Bug fixes
  * [SIG-420] - Blocked screen after failed attempt to sign document with A3 certificate

Updates database model: no

<a name="v1-10-0" />
### 1.10.0 (2020-08-19)

* Improvements
  * [SIG-382] - Associate Applications to folders
  * [SIG-384] - Standard language for the system
  * [SIG-389] - Check if user is already registered in organization while adding
  * [SIG-399] - Check maximum attachment size while sending email
  * [SIG-400] - Load fast signature screen with pre-uploaded file 
  * [SIG-404] - Add simplified manifest option for the Validation Stamp
  * [SIG-409] - Improve error message when an email is already being used by another account
  * [SIG-412] - Support to medical prescriptions in document generation

* Bug fixes
  * [SIG-407] - Validation Stamp not showing for documents with size smaller than A4
  * [SIG-416] - Error creating non PDF documents when Validation Stamp is enabled

Updates database model: yes

<a name="v1-9-1" />
### 1.9.1 (2020-07-23)

* Bug fixes
  * [SIG-396] - String not translated in folder settings
  * [SIG-410] - Unnecessary scroll in home page

Updates database model: no

<a name="v1-9-0" />
### 1.9.0 (2020-07-23)

* New Features
  * [SIG-378] - Recovery procedure for deleted documents

* Improvements
  * [SIG-338] - Improve electronic signature description
  * [SIG-394] - Display participant actions of the document flow in alphabetic order
  * [SIG-395] - Refactor powered by position in the footer

* Bug fixes
  * [SIG-403] - Electronic signature with visual representation even with visual representations disabled

Updates database model: no

<a name="v1-8-0" />
### 1.8.0 (2020-07-16)

* New Features
  * [SIG-364] - Document Types for medical prescriptions

* Improvements
  * [SIG-337] - Updated fast signature button name
  * [SIG-362] - Create personal contacts list (LGPD adjustments)
  * [SIG-365] - Electronic signature with timestamp

* Bug fixes
  * [SIG-385] - Check if signer title is working when the flow has signature rules
  * [SIG-391] - Cannot add observers in the flow update
  * [SIG-392] - Fix Terms of use screen title

Updates database model: yes

<a name="v1-7-0" />
### 1.7.0 (2020-07-02)

* Bug fixes
  * [SIG-370] - Ticket parameter displayed in the Upload API documentation
  * [SIG-379] - Fix organization creation without Identifier (CNPJ)
  * [SIG-380] - Fix deed creation

* Improvements
  * [SIG-316] - Batch signature with HSM certificates
  * [SIG-317] - Changes to support Ecuador
  * [SIG-361] - Configure enabled/displayed document types
  * [SIG-376] - List documents with API key

Updates database model: no

<a name="v1-6-2" />
### 1.6.2 (2020-06-25)

* Bug fixes
  * [SIG-377] - Error viewing document details of a document with observer that is not in the flow

Updates database model: no

<a name="v1-6-1" />
### 1.6.1 (2020-06-24)

* Improvements
  * [SIG-374] - Add metallic-seaweed-emerald (MSE) theme

Updates database model: no

<a name="v1-6-0" />
### 1.6.0 (2020-06-24)

* New Features
  * [SIG-349] - Load document creation page with an upload file pre-loaded
  * [SIG-360] - Embedded signature integration

* Improvements
  * [SIG-227] - Simplify Swagger samples
  * [SIG-320] - Improve signature marks in printer friendly version for documents with a lot of signers
  * [SIG-327] - Update message in document upload validation to singular
  * [SIG-334] - Add document validation APIs documentation on Swagger
  * [SIG-335] - MoviDesk and JivoChat integration
  * [SIG-339] - Add Setting to configure if actions in the document flow should be ordered by default

* Bug fixes
  * [SIG-307] - Fix DevOps tests
  * [SIG-352] - Error while viewing user's events
  * [SIG-356] - Error while creating document if electronic signature is enabled and IsAllowedByDefault setting is true
  * [SIG-357] - Timeout retrieving document details with many participants
  * [SIG-358] - Missing translations in the edit flow email notification
  * [SIG-359] - Batch electronic signature is redirecting to Web PKI installation page

Updates database model: yes

<a name="v1-5-0" />
### 1.5.0 (2020-06-15)

* New Features
  * [SIG-331] - Send email to all participants after the document is concluded
  * [SIG-343] - Batch Electronic Signature
  * [SIG-344] - Option to configure if electronic signature is allowed by default

* Improvements
  * [SIG-311] - Setting to set geolocation as required for electronic signature
  * [SIG-318] - Allow participant to access the document after signing/approving in the public area
  * [SIG-326] - Automated tests for scanned document with Scanner
  * [SIG-332] - Add application name in the PDF properties
  * [SIG-341] - Hide printer friendly version

* Bug fixes
  * [SIG-347] - Fix translations in the document validation page

Updates database model: yes

<a name="v1-4-1" />
### 1.4.1 (2020-06-08)

* Bug fixes
  * [SIG-313] - Wrong internationalization (en) for the approval and sign email

Updates database model: no

<a name="v1-4-0" />
### 1.4.0 (2020-06-08)

* New Features
  * [SIG-216] - Instance settings to configure details of the print version

* Improvements
  * [SIG-249] - Add notification internationalization
  * [SIG-285] - Removed fast scan button and updated behaviour of the scan flow
  * [SIG-294] - Send set password email for new users
  * [SIG-312] - Add setting to configure if visual representation information should be placed in the middle of the rectangle
  * [SIG-314] - Improve Scanner integration settings
  * [SIG-323] - Enable batch download
  * [SIG-329] - Add more auditing events

* Bug fixes
  * [SIG-313] - Folder document status shown as Pending when it is concluded

Updates database model: yes

<a name="v1-3-2" />
### 1.3.2 (2020-05-15)

* Bug fixes
  * [SIG-310] - Exceptions while logging special characters from PKI SDK stack traces

Updates database model: no

<a name="v1-3-1" />
### 1.3.1 (2020-05-05)

* Bug fixes
  * [SIG-309] - Hide batch download until Web PKI update

Updates database model: no

<a name="v1-3-0" />
### 1.3.0 (2020-05-05)

* New Features
  * [SIG-178] - Batch download
  * [SIG-187] - Select signature format (CADeS or PADeS) in the document creation API
  * [SIG-190] - Enable administrators to view documents from users/organizations
  * [SIG-287] - Enable applications to generate a link to an external action

* Improvements
  * [SIG-161] - Enable administrators to update user data
  * [SIG-193] - Add link to PDF user manual
  * [SIG-262] - Improvements to Authentication funcionality (on Fast Signature)
  * [SIG-293] - Sign terms of service with electronic signature
  * [SIG-297] - Add document list in administration
  * [SIG-301] - Responsiveness fixes and removed scrolls that showed while loader was being displayed
  * [SIG-302] - Validate Adobe PDF signatures
  * [SIG-305] - Handle PinValidationFailed error from Amplia


* Bug fixes
  * [SIG-304] - Certificate issue requests that cannot be issued in Cloud should be ignored
  * [SIG-306] - Emails not being sent when SMS is disabled

Updates database model: **yes**

<a name="v1-2-0" />
### 1.2.0 (2020-04-29)

* New Features
  * [SIG-284] - Document validation of an uploaded signed file
  * [SIG-296] - Add settings to configure printer friendly version marks


* Improvements
  * [SIG-225] - Improved batch signature performance


* Bug fixes
  * [SIG-292] - Unified name and alias uses in SPA/Signer components
  * [SIG-295] - Fixed XAdES signatures without parameters
  * [SIG-298] - Error trying to obtain Brasilia timezone on Linux

Updates database model: **yes**

