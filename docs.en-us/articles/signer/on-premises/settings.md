# Signer Settings

###  *General* Settings

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website (e.g.: `https://signer.patorum.com/`). This address is used to compose emails with links back to the website.
* **EncryptionKey**: encryption key.
* **EncryptionCertThumb**: encryption key certificate thumbprint.
* **RootPasswordHash**: hash of the root password, computed above.
* **AutoUpdateDatabase**: by default, the application tries to perform model changes to the database after an update (when needed). Set to `false` if the application does not have owner permissions over the database.
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails).

* **PersonalAccountsEnabled** (deprecated v1.63.0): if `true`, any user that logs/registers in the website may use the application and create documents in his personal account. If `false`, users will only be 
able to use the logged user area if they are added previously in an organization. Please use the [Access Control settings](#access-control-settings) instead as this option is now deprecated.
* **AccessRequestEmailAddress** (v1.38.0): the e-mail address to send access requests to (if personal accounts are not enabled). If set, when a user sees the "No access" 
screen, there will be a button that allows him to request access to the system. The e-mail address configure will receive the name and email of the user who requested 
the access.

* **AllowCreateDocumentsByDefault** (default: `true`, v1.12.0): if `true` users will be able to create documents after registering. If `false`, the document creator role must be granted to
each user individually by the system administrator.

* **AllowCreateOrganizationsByDefault** (default: `true`, v1.12.0): if `true` users will be able to create organizations after registering (if personal accounts is enabled).

* **EnableDocumentTypes** (deprecated v1.7.0): if `true` shows a select to determine the type of a document when creating one. The available types are `Deed` and `Power of Attorney`.
Please use the [Document Types settings](#document-types-settings) instead as this option is now deprecated.
* **OriginalFileWatermarkText**: Documents of type `Deed`, will have a watermark with this text on the original version until the document is concluded. 

* **EnableElectronicSignature** (deprecated v1.1.0): if `true` displays the option to accept electronic signatures when creating documents. Please use the [Electronic Signature settings](#electronic-settings) 
instead as this option is now deprecated.

* **NotifyConclusion** (v1.5.0): if `true` sends an email to all participants of a document when it is concluded.
* **NotifyParticipantsOnAddedVersion** (v1.66.0): if `true` sends an email to all active participants of a document when a new document version is added. If not enabled, only observers will
be notified.
* **NotifyParticipantsOnAttachmentUpdates** (v1.66.0): if `true` sends an email to all active participants of a document when attachments are added or deleted. If not enabled, only observers will
be notified.
* **NotifyParticipantsOnDocumentInformationUpdates** (v1.66.0): if `true` sends an email to all active participants of a document when document information is updated. If not enabled, only observers will
be notified.

* **AreActionsOrderedByDefault** (v1.6.0): if `true`, actions of the document flow will be ordered by default unless overriden by the user during the document creation.
* **FlowActionTicketValidityMinutes**: defines the validity in minutes of the ticket that is sent in the signature reminder email which allows an user to sign without logging in. 
The default value is `1440` (24 hours).

* **RestrictedUserAutocomplete** (default: `true`): if `true` shows in the participant autocomplete suggestions only users that are in the same organizations as the current user and (as of v1.8.0) 
that were added as participants in the current user's documents. 
If `false` the suggestions will search all of the users in the database. This option doesn't affect the autocomplete experience for system administrators. 

* **EnableDocumentAuthentication**: if `true` shows the document authentication option in the fast signature screen. This allows an user to authenticate a document by inserting 
a custom visual representation that has information about his lawyer or accountant registration number.

* **EnableBilling** (deprecated v1.40.0): if `true` enables the billing module. Please use the option in [Billing settings](#billing-settings) instead as this option is now deprecated.
* **EnableBillingInformationCheck** (v1.19.0, deprecated v1.40.0): if `true` enables the check that verifies if the billing information has been set whenever a paid transaction is created by a user 
or organization. Please use the option in [Billing settings](#billing-settings) instead as this option is now deprecated.

* **UseCustomStaticHomePage**: if `true`, uses the static file index.html from the theme-assets as the home page. After the login, users will always be redirected to the 
`<SiteUrl>/private` as the home page will be static. You may change the redirect URL using the `RedirectUri` setting in the OIDC Config section. 
* **HidePoweredBy** (v1.9.0): if `true`, hides the powered by section that is displayed on the default home page.

* **EnableSignaturePositioning** (default: `true`): if `true`, displays option to pre-select a signer signature position while creating documents.

* **EnableSignatureMarksDownload**: if `true`, enables user to download the signature marks version of a document.
* **EnableSigningTagsDownload** (default: `true`, v1.5.0): if `true`, enables user to download the signing tags of a document.
* **EnablePrinterFriendlyDownload** (default: `true`, v1.5.0): if `true`, enables user to download the printer friendly version of a document.
* **DocumentConcludedNotificationAttachmentType** (default: `PrinterFriendlyVersion`, v1.35.0): defines the document version that is sent as an attachment when the 
document is concluded. Available values are: `Original`, `PrinterFriendlyVersion`, `Signatures`, `OriginalWithMarks`, `SigningTags` and `SignatureMarks`.
* **SendOriginalFileWithPendingActionEmail** (v1.36.0): if `true`, sends the original version of the document as an attachment in pending action notifications.

* **EmailAttachmentSizeLimit**: The maximum file size (in bytes) that can be attached to an email. The default value is `10485760` (10 MB).

* **UserManualUrl**: if set will display (next to the user menu) a button to a PDF that contains the user manual of the application.

* **SetPasswordEmailExpiration**: The expiration of the set password link, in minutes. The default value is `1440` (24 hours).

* **IdentifierType** (default: `Cpf`, v1.7.0): the type of user identifier of this instance. Available options are `Cpf` and `EcuadorBceId`.
* **FilterCertificatesByIdentifier** (default: `true`, v1.7.0): if `true`, filters certificates by the user's identifier automatically.
* **FilterCertificatesByKeyUsage** (v1.7.0): if `true`, filters certificates that have non repudiation and digital signature attributes.

* **MaximumItemsInBatchNotifications** (default: `10`, v1.10.4): defines a maximum number of items included in notifications that list a 
batch of items (for example all documents a user was added as observer).

* **UngroupedNotificationsDelayInSeconds** (default: `180`, v1.56.0): When multiple notifications need to be sent to a user regarding one or more 
documents (if the recipient type is not e-mail) each notification will be sent with an increasing interval in seconds defined by this setting.

* **NormalizePdfs** (default: `true`, v1.13.0): if `true`, the system automatically attempts to normalize PDFs when they are submitted to create a document to 
prevent protected file and append mode errors.

* **MaxUploadSizeInBytes** (default: `106954752` - 100 MB, v1.15.0): defines the maximum upload size in bytes. There is a 1 GB upper limit that can only be changed by
updating the web.config file in the installation package.

* **EnableDeletedDocumentValidation** (v1.18.0): if `true`, the system will validate documents by the validation code even if they were deleted 
by their owners.

* **AllowSetFlowActionEmail** (default: `true`, v1.20.0): if `true`, allows a participant to have a document specific email, that is, if a document is submitted to a user
but the email provided is different from what is registered for that user, the provided email will be the one considered in the notifications of the submitted document(s).
This option has no effect if the username is email.

* **AllowSetFlowActionPhoneNumber** (default: `true`, v1.28.0): if `true`, allows a participant to have a document specific phone number, that is, if a document is 
submitted to a user but the phone number provided is different from what is registered for that user, the provided phone will be the one considered in the notifications 
of the submitted document(s).

* **CountryIdentifierMode** (default: `Unique`, v1.21.0): defines the behaviour of the country identifier. The available types are `Unique`, `NonUnique`, `Nullable` and
`NullableUnique`. The country identifier claim must also be set accordingly in GrantID.
* **SearchByIdentifierOnlyForUniqueIdentifierMode** (v1.64.0): as of v1.64.0 when searching for a new user, checks the country identifier first if the identifier mode is `Unique` or 
`NullableUnique`. In previous versions this was only done for mode `Unique` (set to `true` to revert to that behavior).
* **FilterCertificatesByEmailIfNoIdentifier** (default: `true`, v1.21.0): if `true`, filters by email the digital certificates of a user who has no identifier.
* **UpdatedUserWithoutIdentifierAfterSignature** (default: `true`, v1.21.0): if `true`, attemps to add an identifier to a user after he has successfully signed a document
with a certificate that has an identifier.

* **DefaultCurrency** (default: `R$`, v1.22.0): sets the default currency for the application.

* **DocumentAcceptedMimeTypes** (v1.22.0): defines the accepted mime types for document uploads. Values should be separated by comma. Set as null if types should not 
be restricted.

* **HideMultipleDocumentNotificationViewDocumentsButton** (v1.27.0): if `true`, the `View documents` button will not be included in the pending action emails for multiple 
documents. This ensures that the email only contains links that do not require the user to log in.
* **HideMultipleConcludedDocumentNotificationViewDocumentsButton** (v1.45.0): if `true`, the `View documents` button will not be included in the concluded document email for multiple 
documents. This ensures that the email only contains links that do not require the user to log in.

* **AllowAlgorithmNotAllowed** (v1.31.0): if `true` accepts documents signed with algorithms that are deemed insecure shuch as SHA-1.

* **MaxNumberSignaturesToValidateAtOnce** (default: `40`, v1.31.0): sets the maximum number of signatures a document can have in order to validate all signatures at once instead of
doing it in rounds.
* **NumberSignaturesPerValidationRound** (default: `10`, v1.31.0): sets the number of signatures validated in each validation round if the document has exceeded the number
specified in the MaxNumberSignaturesToValidateAtOnce setting.
* **MaxTotalOfSignaturesForRoundsValidation** (default: `40`, v1.43.0): sets the maximum number of signatures that will be returned when performing validation rounds.
* **MaxEllapsedSecondsForRoundsValidation** (default: `30`, v1.43.0): sets the maximum number of seconds that can be used for all validation rounds. If the amount is exceeded, 
the application will return all signatures validated so far.

* **CanceledDocumentWatermarkText** (v1.33.0): the text of the watermark that is added to canceled documents.
* **ExpiredDocumentWatermarkText** (v1.33.0): the text of the watermark that is added to expired documents.

* **EnableEmailTemplateCustomization** (v1.33.0): if `true`, allows default email templates to be overriden. The files must be HTML and follow the pattern `Email-<template-type>.html`.

* **HidePublicAreaMenuLinks** (v1.34.0): if `true`, hides menu links in the public area such as the document validate and login links.

* **MaskUserIdentifier** (v1.35.0): if `true`, mask user identifiers in signature visual representations, signature manifest, public area and most screens that allow users to 
view information from other users.
* **MaskUserEmailAddress** (v1.47.0): if `true`, mask user e-mail addresses in signature manifest, public area and most screens that allow users to 
view information from other users.

* **ReplyToDocumentCreator** (v1.41.0): if `true`, adds the document creator's e-mail address as the reply to address for all e-mails associated with that document.

* **FilterDocumentsByPendingForMe** (v1.43.0): if `true`, the "Show documents that are pending for me" filter is enabled by default in the documents page.

* **MaxItemsRetrievedInOrganizationFilter** (default: `10`, v1.43.0): sets the maximum number of organizations displayed in the organization filter that is displayed in the documents page (and other pages).
* **MaxItemsRetrievedInFolderFilter** (default: `20`, v1.43.0): sets the maximum number of folders displayed in the folder filter that is displayed in the documents page (and other pages).

* **FlowActionTitleDisplayedByDefault** (v1.46.0): if `true` displays the participant title box by default.

* **UseOrganizationNameAsNotificationsSenderName** (v1.47.0): if `true` notifications regarding documents are sent using the organization name as sender name.

* **ParticipantWelcomeMessageIntervalInMinutes** (default: `0`, v1.47.0): if positive defines the amount of minutes that will be waited to send a participant welcome message notification
after he signed a document for the first time (and has not set his password yet). Any negative value will disable this notification.
* **OrganizationUserWelcomeMessageDisabled** (v1.58.3): if `true` won't send a welcome message notification after a user is added to an organization.

* **HideParticipantsListAndOrderOfActionsForNonManagers** (v1.50.0): hides participant information from document details page for all users but document's organization managers or admins.

* **DisablePendingFlowActionsApi** (v1.50.0): disables the API that retrieves information from pending participants for documents. This will prevent the pending participants 
to be displayed in the documents page.

* **DocumentExpirationTime** (v1.54.0): defines the document expiration time in timespan format (`HH:mm:ss`). By the default (if not set) it considers the expiration time as the 
end of the day in the configured default timezone. This option should only be used if the default timezone is Brasilia Standard Time (GMT-3).

* **ShortSiteName** (v1.56.0): a short name to reference the application in messages that have a small amount of allowed characters (such as SMS messages). Should be a shorter
version of the `SiteName` setting.

* **UpdateSubscriptionAccessTimeoutDelayInSeconds** (v1.60.0, default: `60`): timeout to reschedule update subscription access jobs if there is already one job of same type running.
If set to `0` disables this behavior.

* **DisableOrganizationRenameByNonInstanceAdmin** (v1.63.0): if `true` organization administrators will not be able to update organization info such as name and identifier. 
Only instance administrators will be able to perform such actions.

* **EnableSignatureValidationWhenGeneratingManifest** (v1.63.0): if `true`, whenever a signature manifest is generated, the associated signed document will have its signatures
validated. This is disabled by default because of performance implications.

* **AllowUserInfoUpdateBySubscription** (v.1.64.0): if `true`, users created when you create a document or when adding a user to a subscription will be able to have their information
updated by administrators of that subscription.

* **RequireFolderSelectionWhenCreatingDocuments** (v.1.65.0): if `true`, users are required to select a folder when creating documents.

* **MaxWebhooksPerOrganization** (v1.65.0, default: `5`): maximum number of webhooks that can be added to an organization.

* **DocumentConcludedWebhookDelayInSeconds** (v1.66.0, default: `60`): delay in seconds to wait until the document concluded webhook is triggered.

<a name="billing-settings" />
###  *Billing* Settings (v1.40.0)

Under section **Billing**:

* **Enabled**: if `true` enables the billing module.
* **EnableBillingInformationCheck**: if `true` enables the check that verifies if the billing information has been set whenever a paid transaction is created by a user 
or organization.
* **TrialPeriodDays**: if greater than `0`, enables and defines the number of days that the billing trial period will last. During the trial period, all transactions in an
organization will be free of charge (the creation date of the organization is considered as the start date).
* **EnableBillingPlanHiring** (v1.53.0): if `true` users will be able to choose and hire billing plans. If enabled a payment gateway must be configured. 
* **MaxNumberOfAvailablePlansDisplayed** (default: `20`, v1.53.0): the maximum number of billing plans displayed in the hire billing plans page.
* **AllowBasicUsersToViewOrganizationBillingInformation** (v1.62.0): if `true` basic users will be able to view invoices and billing information of an organization. 

<a name="document-types-settings" />
###  *DocumentTypes* Settings (v1.7.0)

Under section **DocumentTypes**:

* **Enabled**: if `true` shows a select to determine the type of a document when creating one. The available types are `Deed` (deprecated as of v1.33.0), `Power of Attorney` (deprecated as of v1.33.0) and `Prescription`.
* **EnabledOptions**: comma separated list of types that will be enabled/displayed. The order of the types will be respected when displaying them. Example: `PowerOfAttorney,Deed,Prescription`.
If this setting is not provided and document types are enabled, all available options will be displayed.

###  *SupportChat* Settings (v1.6.0)

Under section **SupportChat**:

* **Type**: the support chat provider. Available options are `Movidesk`, `Jivo` or `Custom` (v1.44.0).
* **Enabled**: if `true`, enables the support chat for the selected type.
* **Key**: the key for the support chat account.
* **ScriptUrl** (v1.44.0): if type is `Custom`, defines the URL to load the chat script.

<a name="electronic-settings" />
###  *ElectronicSignature* Settings

Under section **ElectronicSignature**:

* **Enabled**: if `true`, displays the option to accept electronic signatures when creating documents.
* **EnableSmsAuthentication**: if `true`, enables the SMS verification option for electronic signatures. In order to function properly, a SMS provider must be configured (see [SMS](#sms-settings)).
* **EnableWhatsappAuthentication** (v1.56.0): if `true`, enables the Whatsapp verification option for electronic signatures.  In order to function properly, the [Whatsapp settings](#whatsapp-settings) must be configured.
* **EnableOtpAuthentication**: if `true`, enables the OTP App verification option for electronic signatures.
* **EnableSelfieAuthentication** (v1.23.0): if `true`, enables the selfie capture for electronic signatures.
* **EnableDatavalidAuthentication** (v1.32.0): if `true`, enables the selfie capture with Datavalid validation for electronic signatures. If enabled, the setting in the section
`Datavalid` must also be configured.
* **EnablePixAuthentication** (v1.32.0): if `true`, enables the Pix authentication for electronic signatures. If enabled, the setting in the section
`Gerencianet` must also be configured.
* **EnableElectronicSignatureOfTermsOfUse** (default: `true`): if `true`, enables the terms of use to be signed electronically.
* **IsAllowedByDefault**: if `true`, the option to allow electronic signatures is selected by default.
* **IsRequired** (v1.46.0): if `true`, the signer **won't** have the option to sign with digital certificate.
* **IsGeolocationRequired** (v1.5.0): if `true`, the geolocation of an user must be sent in order to sign electronically.
* **Mode** (default: `Timestamp` if there is a timestamper configured, `SelfSigned` otherwise, v1.8.0): the mode in which the electronic signatures will be performed. The available modes are `SelfSigned` and `Timestamp`: 
	* `SelfSigned`: a self signed certificate is generated once and used for every electronic signagure in the application.
	* `Timestamp`: the electronic signature is added to the document as a timestamp signature. Requires that a Timestamper is configured.
* **AdditionalInfoUrl** (v1.9.0): URL to redirect the user when he clicks the electronic signature info icon in the document creation screen.
* **UseSignatureCertificateAsSelfSignedCertificate** (v1.52.0): if `true` and a [Signature Certificate](#signature-certificate) is enabled, use it instead of the auto generated self signed certificate.

<a name="signature-certificate" />
###  *Signature Certificate* Settings (v1.52.0)

Under section **SignatureCertificate**:

* **BlobName**: the name of the PFX certificate stored in the configured Blob Storage.
* **BlobFolder** (default: `certificates`): the folder where the certificate is stored in the configured Blob Storage.
* **Password**: the PFX certificate password. It is recommended that the certificate has a password.

###  *TrustServices* Settings (Cloud Certificates, v1.11.0)

Under section **TrustServices**:

* **Enabled**: if `true`, displays cloud certificate providers wherever a signature is required. Only the providers that have a certificate for the user's identifier
will be shown. If a user does not have any certificate in the configured providers nothing will be displayed.
* Service info options (`Services`): each service must be configured individually like shown bellow. Available services are: `BirdID`, `SafeID`, `NeoID` and `VIDaaS`:
	* **&lt;provider>:ClientId**: the client id for this provider.
	* **&lt;provider>:ClientSecret**: the client secret for this provider.
	* **&lt;provider>:Endpoint** (optional): should only be set for non standard providers such as staging environments. Specificies the service endpoint.
	* **&lt;provider>:BadgeUrl** (optional): should only be set for non standard providers such as staging environments. Specificies the badge image that will be shown
	to the user.
	* **&lt;provider>:Provider** (optional): should only be set for non standard providers such as staging environments. Specificies the name of the provider.
	* **&lt;provider>:ProtocolVariant** (optional): should only be set for non standard providers such as staging environments. Specificies the name of the protocol variant.

* **DiscoveryEnabled** (default: `true`, v1.48.1): if `false`, disables discovery of cloud certificate providers (displays all configured providers for every user).

###  *VisualRepresentation* Settings

Under section **VisualRepresentation**:

* **Enabled** (default: `true`, v1.7.0): if `true`, all PDF documents signed with PAdES will have a signature visual representation that can be automatically
or manually positioned.

* **SignatureWidthCentimetersOnA4**: width of the signature visual representation in centimeters (optimized for A4 paper size). The default value, as of v1.37.0, is `5.85` (previous value was `6`).
* **SignatureHeightCentimetersOnA4**: height of the signature visual representation in centimeters (optimized for A4 paper size). The default value, as of v1.37.0, is `1.45` (previous value was `3.3`).

* **SignatureInitialsWidthCentimetersOnA4**: width of the signature initials (used when approving a document) visual representation in centimeters (optimized for A4 paper size). The default value is `1.5`.
* **SignatureInitialsHeightCentimetersOnA4**: height of the signature initials (used when approving a document) visual representation in centimeters (optimized for A4 paper size). The default value is `1.5`.

* **AuthenticationStampWidthCentimetersOnA4**: width of the authentication stamp visual representation in centimeters (optimized for A4 paper size). The default value is `2`.
* **AuthenticationStampHeightCentimetersOnA4**: height of the authentication stamp visual representation in centimeters (optimized for A4 paper size). The default value is `2`.

* **AuthenticationSignatureWidthCentimetersOnA4**: width of the authentication signature visual representation in centimeters (optimized for A4 paper size). The default value is `19.31`.
* **AuthenticationSignatureHeightCentimetersOnA4**: height of the authentication signature visual representation in centimeters (optimized for A4 paper size). The default value is `3.436`.

* **DisableAutomaticSignaturePositioning** (v1.18.0): if `true` a signature visual representation will not be addeed to the document if the user does not
manually selects a position while signing.

* **SignaturePositioningRequired** (v1.28.0): if `true` requires that the user positions the signature representation when signing a PDF file.
* **SignaturePositioningEnabledByDefault** (v1.52.0): if `true` the pre-position signature option is set by default in the create document screen.

* **TextVerticalMarginMultiplier** (default: `1.0`, v1.37.0): defines the text's vertical margin by multiplying the provided number with 1% of the signature height.
* **TextHorizontalMarginMultiplier** (default: `1.0`, v1.37.0): defines the text's horizontal margin by multiplying the provided number with 1% of the signature width.
* **EnableSignaturePositionConfirmation** (v1.62.0): if `true` displays a dialog asking for confirmation when a user positions a signature.

###  *ValidationStamp* Settings (v1.7.0)

Under section **ValidationStamp**:

* **Enabled**: if `true`, adds a stamp to all PDF documents after they are uploaded. The stamp contains information of where the document was
created and where it's signatures can be validated. This is a recommended option if visual representation is disabled.

* **AddSimplifiedManifest** (v1.10.1): if `true`, adds a simplified manifest as the last page of a document. It will also prevent document flows from 
beeing edited since the manifest will only contain the participants added when the document is created.

* **AllowCustomization** (v1.63.0): if `true`, enables organizations to customize the validation stamp.

* **ShowOnBottom**: if `true`, shows the validation stamp at the bottom of every page.
* **ShowOnRight** (default: `true`): if `true`, shows the validation stamp at the right of every page.

* **HeightCentimeters**: the height of the stamp in centimeters. The default value is `0.5`.
* **LeadingCentimeters**: the horizontal (or vertical if stamp is on right) offset in centimeters from the start of the page. The default value is `1.5`.
* **TrailingCentimeters**: the horizontal (or vertical if stamp is on right) offset in centimeters from the end of the page. The default value is `1.5`.
* **MarginToPageCentimeters**: the margin in centimeters from the bottom (or right side if stamp is on right) of the page. The default value is `0.3`.
* **SummaryFontSize**: the font size of the stamp in points. The default value is `8`.

* **ShowLogo** (v1.17.0): if `true`, shows logo at bottom-right corner of every page.
* **LogoWidthCentimeters** (v1.17.0): width of the logo in centimeters. The default value is `1`.
* **LogoHeightCentimeters** (v1.17.0): height of the logo in centimeters. The default value is `1`.
* **LogoMarginRightCentimeters** (v1.17.0): the margin of the logo in centimeters from the bottom of the page. The default value is `1`.
* **LogoMarginBottomCentimeters** (v1.17.0): the margin of the logo in centimeters from the right side of the page. The default value is `1`.

* **EnableEditFlow** (v1.17.0): if `true` allows small changes to document flow after submission even if **AddSimplifiedManifest** is also `true`. The changes allowed are:
adding/removing observers and updating participant emails (if allowed by other settings).

* **AllowOriginalFileDownload** (v1.60.0, default: `true`): if `true` downloads the original version of a document without any of the validation stamp marks.
* **DisplayOriginalFileWhileDocumentNotConcluded** (v1.60.0): if `true` displays the original document when viewing document preview or signing documents (as long as they 
are not concluded). For this option to work properly, `AllowOriginalFileDownload` needs to be enabled as well.

###  *PrinterFriendly* Settings

Under section **PrinterFriendly**:

* **ShowSummaryBottom** (default: `true`): if `true`, shows the signature summary at the bottom of every page.
* **ShowSummaryRight**: if `true`, shows the signature summary at the right of every page.
* **SummaryHeightCentimeters**: the height of the summary in centimeters. The default value is `2`.
* **SummaryLeadingCentimeters**: the horizontal (or vertical if summary is on right) offset in centimeters from the start of the page. The default value is `1.5`.
* **SummaryTrailingCentimeters**: the horizontal (or vertical if summary is on right) offset in centimeters from the end of the page. The default value is `3.5`.
* **SummaryMarginToPageCentimeters** (v1.6.0): the margin in centimeters from the bottom (or right side if summary is on right) of the page. The default value is `0.3`.
* **SummaryFontSize** (v1.6.0): the font size of the summary in points. The default value is `8`.

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

* **AllowCustomization** (v1.63.0, default: `true`): if `true`, enables organizations to customize the printer friendly version.


###  *PaymentGateway* Settings (v1.27.0)

Under section **PaymentGateway**:

* **Enabled**: if `true`, enables Payment Gateway integration.
* **Gateway** (default: `Iugu`): defines the Payment Gateway. The only available value is `Iugu` ([https://www.iugu.com/](https://www.iugu.com/)).
* **DueDays** (default: `10`): the number of days a user will have to pay an invoice.
* **InvoiceProductName**  (default: same value set on the `SiteName` setting): defines the name of the product that will appear in the invoice PDF.
* **MinInvoiceValue** (default: `1`): the minimum value of an invoice. All invoices with value lower than this will be automatically marked as paid after being closed.
* **InvoiceDueDays** (default: `1`, v1.53.0): the number of days after the invoice closes that will be used to define the due date of the invoice. This controls when credit card
automatic charges will be made.
* **BillingPlanDueDays** (default: `2`, v1.53.0): the number of days the user will have to make the payment for a billing plan hire.

<a name="iugu-settings" />
###  *Iugu* Settings (v1.27.0)

Under section **Iugu**:

* **AccountId**: Iugu's Account ID.
* **ApiToken**: Iugu's API token.
* **WebhooksAuthKey**: Iugu's Webhook authentication key.
* **TestMode**: defines if the credentials are Test environment credentials.
* **PaymentMethods**(default: `credit_card,bank_slip,pix`, v1.37.0): list of allowed payment methods separated by comma.
 

###  *Invoice Receipt* Settings (v1.27.0)

Under section **InvoiceReceipt**:

* **Enabled**: if `true`, enables the issuing of receipts for invoices.
* **Gateway** (default: `NFEio`): defines the Receipts Gateway. The only available value is `NFEio` ([https://nfe.io/](https://nfe.io/)).
* **ReceiptType** (default: `NFSe`): defines the type of receipt issued. The only available value is `NFSe` (service receipt).
* **CityServiceCode**: the code for the service in the city it will be provided. Navigate to "Companies> List of Registered Services" in your NFEio account to view available codes for your company.
* **CnaeCode** (optional): your company's [CNAE](https://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/classificacao-nacional-de-atividades-economicas-2013-cnae). 
* **ReceiptDescription** (default: same value set on the `SiteName` setting): a description included in the "Service Description" of the receipt.

<a name="sms-settings" />
###  *SMS* Settings

Under section **SMS**:

* **Type**: defines the provider of SMSs. Available options are `TotalVoice`, `Twilio`, `Zenvia` (v1.28.0), `SmsEmpresa` (v1.28.0), `Generic` (v1.36.0), `AmazonSNS` (v1.55.0) and `Tigo` (v1.55.0).

For the `TotalVoice` provider, define the setting:

* **AccessToken**: 

For the `Twilio` provider, define the settings:

* **MessageFrom**: the number used to send the message.
* **AccountSid**: the account SID.
* **AuthToken**:  the account AUTH Token.

For the `Zenvia` provider, define the settings:

* **Account** (v1.28.0): the API Account of Zenvia Connect.
* **Password** (v1.28.0): the API Password of Zenvia Connect.

For the `SmsEmpresa` provider, please define the setting:

* **ChaveKey** (v1.28.0): the "Chave Key" displayed in your SMS Empresa account settings.

For the `Generic` provider (v1.36.0), define the settings:

* **Endpoint**: the endpoint to which the SMS information will be sent.
* **AuthType** (default: `NoAuth`): defines the type of authorization provided in the request. Available options are `NoAuth`, `Basic`, `Bearer` and `ApiKey`.
* **Username**: the username if the AuthType is `Basic`.
* **Password**: the password if the AuthType is `Basic`.
* **BearerToken**: the Bearer token if the AuthType is `Bearer`.
* **ApiKey**: the API key if the AuthType is `ApiKey`.

For the `AmazonSNS` provider (v1.55.0), define the settings:
* **Region**: he AWS region code, for instance `sa-east-1` or `us-east-1` (see [AWS region codes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)).
* **AccessKeyId**: the access key ID.
* **SecretAccessKey**: the secret access key.

<a name="whatsapp-settings" />
###  *Whatsapp* Settings (v1.56.0)

Under section **Whatsapp**:

* **Endpoint** (default: `https://graph.facebook.com`): the endpoint to which the Whatsapp messages will be sent. Should only be set if you have a Whatsapp Business 
on premises instance.
* **AccessToken**: a Whatsapp Business API access token.
* **PhoneNumberId**: the phone number ID that will be used to send messages.

* **TemplateMapping** (optional): dictionary of template names. This should only be used if you do not want to register the template in Meta Business Management 
with the name which we recommend. Example:

```
Whatsapp__TemplateMapping__pendingsignature=signer_pendingsignature
```

###  *NFEio* Settings (v1.27.0)

Under section **NFEio**:

* **ApiKey**: NFEio's API key.
* **CompanyId**: the NFEio company ID to be used.
* **WebhookSecretKey**: secret key used when creating Webhooks on NFEio.

###  *Zoom* Settings (v1.29.0)

Under section **Zoom**:

* **Enabled**: if `true`, enables the Zoom video conferences integration.
* **JwtToken** (deprecated as of v1.59.0): the Zoom's JWT authentication token. Use Server to Server authentication by setting `AccountId`, `ClientId` and `ClientSecret` instead.
* **AccountId** (v1.59.0): your Zoom account ID. Required for Server To Server authentication.
* **ClientId** (v1.59.0): your Zoom client ID. Required for Server To Server authentication.
* **ClientSecret** (v1.59.0): your Zoom client Secret. Required for Server To Server authentication.


###  *Datavalid* Settings (v1.32.0)

Under section **Datavalid**:

* **Disabled**: if `true`, disables the Datavalid service.
* **ConsumerKey**: the SERPRO's consumer key for usage of the Datavalid service.
* **ConsumerSecret**: the SERPRO's consumer secret for usage of the Datavalid service.
* **ApiVersion** (v1.65.0, default: `v3`): API version to use. Available values are `v3` and `v2`.
* **UseFacialOnlyValidation** (v1.65.0, default: `true`): if `true` uses the API that validates facial images only.

###  *Gerencianet* Settings (v1.32.0)

Under section **Gerencianet**:

* **Disabled**: if `true`, disables the Gerencianet service.
* **ClientId**: the API Client ID of the Gerencianet service.
* **ClientSecret**: the API Client Secret of the Gerencianet service.
* **PixKey**: the random Pix key registered in the Gerencianet account.
* **CertificateBase64**: the authentication certificate (in Base 64 format) of the Gerencianet service. If you are hosting the application in Azure App Service,
you must also include the setting `WEBSITE_LOAD_USER_PROFILE` with value `1`. If you are hosting in IIS (Windows Server), you must set the `Load User Profile` option 
of the application pool identity to `True`.

###  *Batches* Settings (v1.30.0)

Under section **Batches**:

* **MaxDocumentsInBatch** (default: `50000`): the maximum number of documents processed in a batch.
* **MaxItemsRetrievedFromDatabase** (default: `10000`): the maximum number of documents retrieved in a single query to the database when processing batches. For high 
volume batches this is used to avoid timeouts when querying the database.
* **NumberDocumentsPerSignatureRound** (default: `100`): number of documents processed in each round of a signature batch.
* **NumberDocumentsPerGenerationRound** (default: `10`): number of documents processed in each round of a generation batch.
* **NumberNotificationsCreatedPerRound** (default: `30`): number of notifications created per batch round.
* **NumberDocumentsPerExpirationRound** (v1.33.0, default: `100`): number of documents processed per expiration round.
* **NumberDocumentsPerDocumentsCreatedWebhookRound** (v1.50.0, default: `100`): number of documents retrieved each round when generating the documents created webhook.
* **NotifyPendingActionsIndividually** (v1.34.0): if `true`, will send pending action emails individually when performing batch actions.
* **NotifyParticipantsDefaultValue** (v1.39.0, default: `true`): sets the default value for the notify participants option that is displayed when a user signs documents in a batch.

###  *Envelopes* Settings (v1.33.0)

Under section **Envelopes**:

* **MaxNumberFiles** (default: `20`): the maximum number of files in the envelope.

###  *Custom Resources* Settings (v1.37.0)

Under section **CustomResources**:

* **Localizers**: dictionary of custom localizers. Available keys are: `MailFormatter` and `NotificationRepository`.
	* **Resources**: dictionary of resources to customize. The key of the dictionary is the key of the resource.
		* **en**:  the english specific value of the resource.
		* **pt**:  the portuguese specific value of the resource.
		* **es**:  the spanish specific value of the resource.
		* **Default**: the default value for the resource. used if the language specific value is not found.

Example:

```
CustomResources__Localizers__MailFormatter__Resources__SignDocument__Default=Sign Document
```

###  *Reminder* Settings (v1.49.0)

Under section **Reminder**:

* **DefaultReminderPeriodInDays** (default: `3`): the number of days to wait before sending action reminder notifications for organization documents. If set to `0` won't send reminder notifications.
* **MaxNumberOfNotificationsForReminder** (default: `10`): the maximum number of notifications sent for a reminder.
* **MaxNumberOfRemindersPerScheduleJobRound** (default: `100`): the maximum number of reminders processed by one round of the schedule job.

<a name="push-notification" />
###  *Push Notification* Settings (v1.54.0)

Under section **PushNotification**:

* **Disabled**: if `true` disables push notification sending.
* **ApiKey**: an API Key for subscription in Lacuna Customer portal that is allowed to send push notifications to the Web PKI App.

<a name="access-control-settings" />
###  *Access Control* Settings (v1.63.0)

Under section **AccessControl**:

* **IsOpen**: if `true`, any user that logs/registers in the website may use the application and create documents in his personal account. If `false`, users will only be 
able to use the logged user area if they are added previously in an organization. See [Access Control](access-control.md) for more details.
* **BlockPersonalAccounts**: if `true` and the access control is open, users may use the application normally but must create or use an organization to perform actions.

<a name="app-email-settings" />
###  *Email* Settings (v1.66.0)

Under section **Email**:

* **EnableTracking** (default: `true`): if `true`, e-mails will be tracked and evidences of opening and clicked links will be registered.
* **EnableUnsubscribe**: if `true` adds an unsubscribe link to e-mails. E-mails that have unsubscribed will only receive new notifications if they are excluded from the 
blocked list by the instance administrator.

###  *SigningTags* Settings

Under section **SigningTags**:

* **PageHeight**:
* **PageWidth**:
* **PageMarginTop**:
* **PageMarginRight**:
* **PageMarginBottom**:
* **PageMarginLeft**:

###  *Amplia* Settings

Under section **Amplia**:

* **EndpointUrl**:
* **ApiKey**:
* **EnableAttributeCertificate**:
* **KeyStore**: The default value is `Database`.

###  *Hsm* Settings

Under section **Hsm**:

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


###  *Timestamper* Settings

Under section **Timestamper**:

* **Enabled**: if `true`, timestamps will be added to signatures.
* **Url**: the URL of the timestamper.
* **Type** (default `BearerToken`, v1.28.0): defines the type of authentication used to connect to the timestamper. Available options are `BearerToken`, `BasicAuthentication` (deprecated as of v1.43.0) and `BasicAuthenticationV2` (v1.43.0).
* **BearerToken**: if type is `BearerToken`, defines the bearer token value for authentication.
* **Username** (v1.28.0): if type is `BasicAuthentication` or `BasicAuthenticationV2`, defines the username value for authentication.
* **Password** (v1.28.0): if type is `BasicAuthentication` or `BasicAuthenticationV2`, defines the password value for authentication.
* **MaxAutoRetryCount** (default: `3`, v1.30.0): the number of retries that will be made if a timestamp cannot be obtained in the first try.
* **RetryDelayInMilliseconds** (default: `1500`): the delay in miliseconds to wait between timestamp retries.


###  *Notarize* Settings

Under section **Notarize**:

* **Enabled**:
* **Notaries**: list of subsections:

####  *NotaryConfig* Settings
* **Type**: subsection:
* **ApplicationId**: subsection:
* **NotaryApplicationKey**: subsection:
* **EndpointUrl**:
* **UploadApi**:
* **StartNotarizationApi**:

###  *Authenticator* Settings

Under section **Authenticator**:

* **HashAlgorithm**:
* **NumberOfDigits**:
* **PeriodInSeconds**:
* **TokenAuthTimeValidationEnabled**:
* **TokenAuthTimeValidation**:


###  *Scanner* Settings

Under section **Scanner**:

* **Disabled**: if `true`, disables Scanner integration.
* **Endpoint**: the Scanner endpoint.
* **ApiKey**: a Scanner API Key. To enable validation of documents from all subscriptions of Scanner, you must provide a key with Root Admin privileges and set the `SubscriptionId` parameter.
* **SubscriptionId** (optional): should only be set if the `ApiKey` is a Root key. Defines the subscription to which scanned documents will be associated.
* **InputType** (default: 'Scan', v1.37.0): defines allowed input options. Available options are `Scan`, `FileUpload` and `ScanOrFileUpload`.
* **MetadataInputEnabled** (default: `true`, v1.37.0): if `true` the scanning user will need to provide metadata information.
* **MetadataPresets** (optional, v1.37.0): subsection as defined below:
	* **DocumentType**: defines the document type metada information so the scanning user does not have provide it while filling metadata.
	* **DocumentTypeIsReadonly**: if `true` the scanning user won't be able to change the document type.

###  *Google Tag Manager* Settings (v1.50.0)

Under section **GoogleTagManager**:

* **Id**: the tag manager ID. Must be provided in order to use tag manager.
* **Auth**
* **Preview**
* **ResourcePath**
* **CspNonce**