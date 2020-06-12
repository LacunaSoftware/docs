# Signer Settings

###  *General* Settings

In **General** section:

* **SiteUrl**: publicly accessible URL of the website (e.g.: `https://signer.patorum.com/`). This address is used to compose emails with links back to the website.
* **EncryptionKey**: encryption key.
* **EncryptionCertThumb**: encryption key certificate thumbprint.
* **RootPasswordHash**: hash of the root password, computed above.
* **AutoUpdateDatabase**: by default, the application tries to perform model changes to the database after an update (when needed). Set to `false` if the application does not have owner permissions over the database.
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails).

* **PersonalAccountsEnabled**: if `true`, any user that logs/registers in the website may use the application and create documents in his personal account. If `false`, users will only be 
able to use the logged user area if they are added previously in an organization.

* **EnableDocumentTypes**: if `true` shows a select to determine the type of a document when creating one. The available types are `Deed` and `Power of Attorney`.
* **OriginalFileWatermarkText**: Documents of type `Deed`, will have a watermark with this text on the original version until the document is concluded. 

* **EnableElectronicSignature** (deprecated v1.1.0): if `true` displays the option to accept electronic signatures when creating documents. Please use the [Electronic Signature settings](#electronic-settings) 
instead as this option is now deprecated.

* **NotifyConclusion** (v1.5.0): if `true` sends an email to all participants of a document when it is concluded.
* **FlowActionTicketValidityMinutes**: defines the validity in minutes of the ticket that is sent in the signature reminder email which allows an user to sign without logging in. 
The default value is `1440` (24 hours).

* **RestrictedUserAutocomplete**: if `true` shows in the participant autocomplete suggestions only users that are in the same organizations as the current user. 
If `false` the suggestions will search all of the users in the database. This option  doesn't affect the autocomplete experience for system administrators. 

* **EnableDocumentAuthentication**: if `true` shows the document authentication option in the fast signature screen. This allows an user to authenticate a document by inserting 
a custom visual representation that has information about his lawyer or accountant registration number.

* **EnableBilling**: if `true` enables the billing module.

* **UseCustomStaticHomePage**: if `true`, uses the static file index.html from the theme-assets as the home page. After the login, users will always be redirected to the 
`<SiteUrl>/private` as the home page will be static. You may change the redirect URL using the `RedirectUri` setting in the OIDC Config section. 

* **EnableSignaturePositioning** (default: `true`): if `true`, displays option to pre-select a signer signature position while creating documents.

* **EnableSignatureMarksDownload**: if `true`, enables user to download the signature marks version of a document.
* **EnableSigningTagsDownload** (default: `true`, v1.5.0): if `true`, enables user to download the signing tags of a document.
* **EnablePrinterFriendlyDownload** (default: `true`, v1.5.0): if `true`, enables user to download the printer friendly version of a document.

* **EmailAttachmentSizeLimit**: The maximum file size (in bytes) that can be attached to an email. The default value is `10485760` (10 MB).

* **UserManualUrl**: if set will display (next to the user menu) a button to a PDF that contains the user manual of the application.

* **SetPasswordEmailExpiration**: The expiration of the set password link, in minutes. The default value is `1440` (24 hours).


<a name="electronic-settings" />
###  *ElectronicSignature* Settings

* **Enabled**: if `true`, displays the option to accept electronic signatures when creating documents.
* **EnableSmsAuthentication**: if `true`, enables the SMS verification option for electronic signatures.
* **EnableOtpAuthentication**: if `true`, enables the OTP App verification option for electronic signatures.
* **EnableElectronicSignatureOfTermsOfUse** (default: `true`): if `true`, enables the terms of use to be signed electronically.
* **IsAllowedByDefault**: if `true`, the option to allow electronic signatures is selected by default.
* **IsGeolocationRequired**: if `true`, the geolocation of an user must be sent in order to sign electronically.

###  *VisualRepresentation* Settings

* **SignatureWidthCentimetersOnA4**: width of the signature visual representation in centimeters (optimized for A4 paper size). The default value is `6`.
* **SignatureHeightCentimetersOnA4**: height of the signature visual representation in centimeters (optimized for A4 paper size). The default value is `3.3`.

* **SignatureInitialsWidthCentimetersOnA4**: width of the signature initials (used when approving a document) visual representation in centimeters (optimized for A4 paper size). The default value is `1.5`.
* **SignatureInitialsHeightCentimetersOnA4**: height of the signature initials (used when approving a document) visual representation in centimeters (optimized for A4 paper size). The default value is `1.5`.

* **AuthenticationStampWidthCentimetersOnA4**: width of the authentication stamp visual representation in centimeters (optimized for A4 paper size). The default value is `2`.
* **AuthenticationStampHeightCentimetersOnA4**: height of the authentication stamp visual representation in centimeters (optimized for A4 paper size). The default value is `2`.

* **AuthenticationSignatureWidthCentimetersOnA4**: width of the authentication signature visual representation in centimeters (optimized for A4 paper size). The default value is `19.31`.
* **AuthenticationSignatureHeightCentimetersOnA4**: height of the authentication signature visual representation in centimeters (optimized for A4 paper size). The default value is `3.436`.

###  *PrinterFriendlySection* Settings


* **ShowSummaryBottom** (default: `true`): if `true`, shows the signature summary at the bottom of every page.
* **ShowSummaryRight**: if `true`, shows the signature summary at the right of every page.
* **SummaryHeightCentimeters**: the height of the summary in centimeters. The default value is `2`.
* **SummaryLeadingCentimeters**: the horizontal (or vertical if summary is on right) offset in centimeters from the start of the page. The default value is `1.5`.
* **SummaryTrailingCentimeters**: the horizontal (or vertical if summary is on right) offset in centimeters from the end of the page. The default value is `3.5`.
* **SummaryBottomMarginCentimeters**: the margin in centimeters from the bottom (or right side if summary is on right) of the page. The default value is `0.3`.
* **SummaryFontSize**: the font size of the summary in points. The default value is `8`.

* **ShowLogo** (default: `true`): if `true`, shows logo at bottom-right corner of every page.
* **LogoWidthCentimeters**: width of the logo in centimeters. The default value is `1`.
* **LogoHeightCentimeters**: height of the logo in centimeters. The default value is `1`.
* **LogoMarginRightCentimeters**: the margin of the logo in centimeters from the bottom of the page. The default value is `1`.
* **LogoMarginBottomCentimeters**: the margin of the logo in centimeters from the right side of the page. The default value is `1`.

* **ShowQrCode** (default: `true`): if `true`, show a QR code that links to the document signature validation screen.

* **ManifestPageMargin**: margins of the manifest page in centimeters. The default value is `2.5`.
* **ManifestPageHeight**: the height of the manifest page in centimeters. The default value is `29.7` (A4).
* **NormalFontSize**: size of the normal font in the manifest page in points. Sizes of header fonts are defined based on this size. The default value is `12`.
* **SmallFontSize**: size of the small font in the manifest page in points. The default value is `10`.
* **LineHeight**: approximated height of a font with the normal font size. The default value is `0.74`.
* **SmallLineHeight**: approximated height of a font with the small font size. The default value is `0.6`.

###  *SigningTagsSection* Settings

* **PageHeight**:
* **PageWidth**:
* **PageMarginTop**:
* **PageMarginRight**:
* **PageMarginBottom**:
* **PageMarginLeft**:

###  *AmpliaSection* Settings

* **EndpointUrl**:
* **ApiKey**:
* **EnableAttributeCertificate**:
* **KeyStore**: The default value is `Database`.

###  *Hsm* Settings

* **Enabled**:
* **EnableLocalCA**: if `true`, allows the users to issue test certificates using the local Amplia Service.
* **ImageUrl**:
* **Name**:
* **Type**:
* **DinamoPocket**: subsection:

####  *DinamoPocket* Settings
* **Address**: subsection:
* **MasterUser**: subsection:
* **MasterPassword**: subsection:


###  *TimestamperSection* Settings

* **Enabled**:
* **Url**:
* **BearerToken**:

###  *Notarize* Settings

* **Enabled**:
* **Notaries**: list of subsections:

####  *NotaryConfig* Settings
* **Type**: subsection:
* **ApplicationId**: subsection:
* **NotaryApplicationKey**: subsection:
* **EndpointUrl**:
* **UploadApi**:
* **StartNotarizationApi**:

###  *AuthenticatorSection* Settings

* **HashAlgorithm**:
* **NumberOfDigits**:
* **PeriodInSeconds**:
* **TokenAuthTimeValidationEnabled**:
* **TokenAuthTimeValidation**:


###  *BusinessHoursSection* Settings

* **StartHour**:
* **EndHour**:
* **IsWeekendBusinessDays**:
* **TimeZoneId**:
