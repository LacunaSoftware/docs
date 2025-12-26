# Amplia Reg Settings

###  *General* Settings

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website (e.g.: `https://ampliareg.patorum.com/`). This address is used to compose emails with links back to the website.
* **EncryptionKey**: encryption key.
* **EncryptionCertThumb**: encryption key certificate thumbprint.
* **RootPasswordHash**: hash of the root password, computed above.
* **AutoUpdateDatabase**: by default, the application tries to perform model changes to the database after an update (when needed). Set to `false` if the application does not have owner permissions over the database.
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails).

* **Flavour**: type of application flavour, this affects various parts of the applicaiton like default certificate formats, labels, states, validations, allowed holder file types, etc.. Defaults to `Brazil`.
* **HidePoweredBy**: removes powered by Lacuna from home if set to `true`. Defaults to `false`.
* **BiometricTokenExpirationMinutes**: validity of token from biometric authentication in minutes. Defaults to `720` (12 hours).
* **DeviceTokenExpirationMinutes**: validity of token from device authentication in minutes. Defaults to `720` (12 hours).
* **DeviceAuthenticationTimeoutSeconds**: timeout from start device authentication to complete device authentication in seconds. Defaults to `15`.
* **AcceptedCryptoDeviceProviders**: list of accepted crypto providers separated by comma. Leave blank to accept all known crypto providers. Defaults to `null`.
* **DeviceAuthenticationCertificatePolicy**: certificate policy of device certificate. Defaults to `1.3.6.1.4.1.46332.3.3` [Lacuna's subtree](https://docs.lacunasoftware.com/pt-br/articles/asn1.html).
* **DocumentGenerator**: type of document generator. Defaults to `Standard`.
* **SessionTimeoutMinutes**: timeout of current session by inactivity in minutes. Defaults to `5`.
* **SessionTimeoutWarningSeconds**: timeout of warning before logout by inactivity in seconds. Defaults to `60`.
* **ExportedFileTicketValidityMinutes**: validity of tickets to download exported files in minutes. Defaults to `60`.
* **ZipCompressionLevel**: type of zip compression level. Defaults to `Fastest`.
* **DenySelfOperations**: deny self operation from orders. Defaults to `false`.
* **AgentCertificateEnabled**: agent certificate authentication enabled. Defaults to `false`.
* **HsmSerialNumber**: HSM serial number that will appear on agreements for cloud orders. Only applied to `Code100` DocumentGenerator. Defaults to `null`.
* **EnableRolesConflict**: roles conflict enabled. Defaults to `true`.

### *JobSchedules* Settings

Under section **JobSchedules**:

> controls jobs schedules.
* **CleanupUsedNonces**: desired cron schedule expression. Defaults to `*/11 * * * *` (every 11th minute)
* **CertificateRenewalAlert**: desired cron schedule expression. Defaults to `0 10 * * *` (every day at 10:00).
* **CertificateRenewalAlertTimeZone**: desired time zone for the cron schedule expression. Defaults to the system time zone.
* **SafSync**: desired cron schedule expression. Defaults to `*/13 * * * *` (every 13th minute).
* **SafOccurrencesSync**: desired cron schedule expression. Defaults to `*/17 * * * *` (every 17th minute).
* **SafOccurrencesProcess**: desired cron schedule expression. Defaults to `*/21 * * * *` (every 21th minute).
* **PkiBrazilDailyReport**: desired cron schedule expression. Defaults to `5 3 * * *` (every day at 03:05).

> [!TIP]
> If you need help defining a cron schedule expression, visit [crontab guru](https://crontab.guru/).

### *Order* Settings

Under section **Order**:

* **MinConfirmationDeadlineHours**: min confirmation deadline in hours for orders that will be issued before approval. Defaults to `4`.
* **MinConfirmationDeadlineToleranceMinutes**: min confirmation deadline tolerance in minutes for orders that will be issued before approval. Defaults to `15`.
* **MaxConfirmationDeadlineHours**: max confirmation deadline in hours for orders that will be issued before approval. Defaults to `168` (7 days).
* **AllowSameValidationAndConfirmationAgent**: . Defaults to `false`.
* **AdditionalCertificateFormats**: list of additional certificate formats separated by comma. Defaults to `null`.
* **AdditionalHolderFileTypes**: list of additional holder file types separated by comma. Defaults to `null`.
* **ExpirationImminentLimitInHours**: expiration imminent limit in hours. Orders with imminent deadline will have priority in confirmation queue. Defaults to `24`.
* **AllowUserCreateOrder**: allows order creation without application integration. Defaults to `true`.
* **OrderNumberSeries**: order number series, will be used as order number prefix. Defaults to `1`.
* **OrderIndexLength**: order index length. Defaults to `7`.
* **ResendIssueNotificationCooldownMinutes**: resend issue notification cooldown in minutes. Defaults to `1`.
* **IssuePasswordLength**: length of issue key one and issue key two. Defaults to `6`.
* **ApiSessionExpirationMinutes**: default api session expiration in minutes. Defaults to `15`.
* **IssuePreparationSessionExpirationMinutes**: issue preparation session expiration in minutes. Defaults to `16`.
* **IssuingSessionExpirationMinutes**: issuing session expiration in minutes. Defaults to `16`.
* **ValidationSignatureSessionExpirationMinutes**: validation signature session expiration in minutes. Defaults to `15`.
* **ConfirmationSignatureSessionExpirationMinutes**: confirmation signature session expiration in minutes. Defaults to `15`.
* **PrettyIssueUrl**: pretty issue url. Will be used as issue URL over default if no other method (authority issue URL) is setted. Defaults to `null`;
* **CloudIssueUrl**: cloud issue URL. Defaults to `null`.
* **PendencyReasons**: order pendency reasons separated by comma. Leave blank to set all default reasons. Defaults to `null`.
* **DeclineReasons**: order declination reasons separated by comma. Leave blank to set all default reasons. Defaults to `null`.
* **RevocationReasons**: order revocation reasons separated by comma. Leave blank to set all default reasons. Defaults to `null`.
* **FaceValidationProvider**: face validation provider. Defaults to `None`.
* **PublicSearchEnabled**: public certificate search enabled. Defaults to `false`.
* **ConfirmationRequirementMode**: confirmation requirement mode. `Always`, `Never` or `OnlyIfRequired` (like Registration Agent requires confirmation). Defaults to `Always`.
* **IssueBeforeApprovalEnabled**: set to `true` to allow orders to be issue before approval with future certificate validity. Defaults to `false`.
* **CustomNumbersEnabled**: by default the application auto generate order numbers. Set to `true` to allow order number creation. Defaults to `false`.
* **SaleNumberEnabled**: sale number enabled. Default to `true`.
* **SaleNumberRequired**: sale number required. Defaults to `false`.
* **BiometricCollectionType**: type of biometric colletion. Defaults to `Photo`.
* **DeliveryMethodDescriptionForIssueKey1**: message displays with issue key one on subject authentication form. Defaults to `received on RA or videoconference` or `received via SMS` (if `Flavour` `CaboVerde`).
* **DeliveryMethodDescriptionForIssueKey2**: message displays with issue key two on subject authentication form. Defaults to `received by email or SMS`.
* **LivenessEnabled**: liveness enabled on biometric validation step. Defaults to `false`.
* **PresentialLivenessType**: liveness provider on presential order. Defaults to `FaceTec`.
* **VideoconferenceLivenessType**: liveness provider on videoconference order. Defaults to `FaceTec`.
* **LivenessTriesBeforeBypass**: tries before enabling liveness bypass. Defaults to `1`.
* **BrazilIdentificationFieldMode**: Brazil identification fields mode. Defaults to `Required`.
* **EnableValidationReverseGeolocation**: enables validation reserve geolocation. Defaults to `false`.
* **RequireConfirmationForPresentialIssuance**: set all presential orders to require confirmation. Defaults to `false`.
* **EnableConfirmationUpdateDocuments**: enable update holder documents on confirmation, this will generate a new agreement to be signed by confirmation agent if any documents has changed. Defaults to `false`.

* **SubjectAuth**: Under section **SubjectAuth**:

    > controls holder authentication on subject authentication form.
    * **MaxFailedAttempts**: Max failed attempts before locking order. Defaults to 1.
    * **InitialLockPeriodMinutes** Initial lock period in minutes. Defaults to 1.

### *CertificateRenewalAlert* Settings

See [Configure certificate renewal alert](configure-certificate-renewal-alert.md) for more details.

### *Maps* Settings

Under section **Maps**:

> Used to get service place location if configured.
* **AzureEndpointUrl**: azure endpoint url. Defaults to `https://atlas.microsoft.com/`.
* **AzureClientId**: azure client id. Defaults to `null`.
* **AzurePrimaryKey**: azure primary key. Defaults to `null`.

### *CertificateType* Settings

Under section **CertificateType**:

* **KeySizes**: Allowed key sizes separated by comma. Defaults to `1024,2048,3072,4096`.

### *SealCertificate* Settings

Under section **SealCertificate**:

> Used for agreement and dossier signature for pre approved orders.
* **Certificate**: Certificate base 64. Defaults to `null`.
* **ProtectedKey**: Protected key base 64. Defaults to `null`.

### *Jitsi* Settings

Under section **Jitsi**:

* **Domain**: domain. Defaults to `8x8.vc`.
* **Issuer**: issuer used on jwt `iss` field. Defaults to `chat`.
* **AppId**: app id. Defaults to `null`.
* **ApiKey**: api key. Defaults to `null`.
* **PrivateKeyPath**: private key path. Defaults to `null`.
* **PrivateKeyContent**: private key content. Defaults to `null`.
* **PrivateKeyType**: private key type. Defaults to `PKCS1`.
* **IsSharedService**: by defaults the application throws an expcetion if receives any payload and it cannot finds related order, if same configured Jitsi is used by others applications and can send webhook for outside application purpose set to `true`. Defaults to `false`.

### *Serpro* Settings

Under section **Serpro**:

* **DatavalidMinSimilarity**: min similarity to accept face validation. Defaults to `0.93`.
* **DatavalidMinConfirmationSimilarity**: min similarity to accept face validation with confirmation warning. Defaults to `null`.

### *RfbQuery* Settings

Under section **RfbQuery**:

* **Enabled**: enabled. Defaults to `null`.
* **Endpoint**: endpoint. Defaults to `https://www6.receita.fazenda.gov.br/`.
* **ServerCertificateThumbprint**: accept response from pinned server certificate. Defaults to `null`.
* **DangerousAcceptAnyServerCertificate**: ignore server certificate validation. Defaults to `false`.
* **PfxContent**: certificate content. Defaults to `null`.
* **PfxPath**: certificate path. Defaults to `null`.
* **PfxPassword**: certificate password. Defaults to `null`.

### *HolderFileTypes* Settings

Under section **HolderFileTypes**:

> Key value will be used to save value on database and have maximum value of 15.
* **`Key`**: displayed name.

### *BryPSBio* Settings

Under section **BryPSBio**:

* **Endpoint**: endpoint. Defaults to `null`.
* **Username**: username. Defaults to `null`.
* **Password**: password. Defaults to `null`.
* **TokenRenewAdvanceSeconds**: token renew advance seconds. Defaults to `5`.
* **TokenExpirationSeconds**: token expiration seconds. Defaults to `900` (15 minutes).
* **ServerCertificateThumbprint**: accept response from pinned server certificate. Defaults to `null`.
* **DangerousAcceptAnyServerCertificate**: ignore server certificate validation. Defaults to `false`.
* **FingerMaxQualityScore**: finger max quality score. Defaults to `3`.
* **HealthCheckEnabled**: health check enabled. Defaults to `true`.
* **HealthCheckPath**: health check path. Defaults to `api/profile-info`.

### *AscertiaAdss* Settings

Under section **AscertiaAdss**:

* **Endpoint**: endpoint. Defaults to `null`.
* **ClientId**: client id. Defaults to `null`.
* **ClientSecret**: client secret. Defaults to `null`.
* **ServerCertificateThumbprint**: accept response from pinned server certificate. Defaults to `null`.
* **DangerousAcceptAnyServerCertificate**: ignore server certificate validation. Defaults to `false`.

### *Sms* Settings

Under section **Sms**:

See [Configure SMS sending](configure-sms.md) for more details.

### *Saf* Settings

Under section **Saf**:

* **Enabled**: enabled. Defaults to `false`.
* **Endpoint**: endpoint. Defaults to `null`.
* **PfxContent**: certificate content. Defaults to `null`.
* **PfxPath**: certificate path. Defaults to `null`.
* **PfxPassword**: certificate password. Defaults to `null`.
* **BatchSyncSize**: batch sync size. Defaults to `100`.
* **CacheTimeoutMinutes**: cache timeout in minutes. Defaults to `1`.
* **ServerCertificateThumbprint**: accept response from pinned server certificate. Defaults to `null`.
* **DangerousAcceptAnyServerCertificate**: ignore server certificate validation. Defaults to `false`.
* **SendTimeoutMinutes**: send timeout in minutes. Defaults to `1`.

### *PkiBrazilDailyReport* Settings

Under section **PkiBrazilDailyReport**:

* **AutoGenerationCertificationAuthorityId**: Certification authority id to auto generate daily report. Defaults to `null`.
* **BatchSize**: batch size. Defaults to `50`.

### *GoogleMaps* Settings

Under section **GoogleMaps**:

> Used to get validation IBGE code if `EnableValidationReverseGeolocation`.
* **ApiKey**: api key. Defaults to `null`.

### *Amplia* Settings

Under section **Amplia**:

* **Disabled**: disabled. Defaults to `null`.
* **Endpoint**: endpoint. Defaults to `null`.
* **ApiKey**: api key. Defaults to `null`.
* **Timeout**: timeout. Defaults to `null`.
* **Culture**: culture. Defaults to `null`.
* **DefaultSubscriptionId**: default subscription id. Defaults to `null`.

### *Audit* Settings

Under section **Audit**:

* **Endpoint**: endpoint. Defaults to `null`.
* **ApiKey**: api key. Defaults to `null`.
* **TimeoutSeconds**: timeout in seconds. Defaults to `null`.
* **CultureName**: culture name. Defaults to `null`.
* **DangerousAcceptAnyServerCertificate**: ignore server certificate validation. Defaults to `false`.
* **ServerCertificateThumbprint**: accept response from pinned server certificate. Defaults to `null`.

### *Acertpix* Settings

Under section **Acertpix**:

* **Endpoint**: endpoint. Defaults to `https://api.plataformaacertpix.com.br/`.
* **DocumentoscopiaPro**: Under section **DocumentoscopiaPro**:
    * **ClientId**: client id. Defaults to `null`.
    * **ClientSecret**: client secret. Defaults to `null`.
* **DocumentoscopiaScore**: Under section **DocumentoscopiaScore**:
    * **ClientId**: client id. Defaults to `null`.
    * **ClientSecret**: client secret. Defaults to `null`.
* **Facematch**: Under section **Facematch**:
    * **ClientId**: client id. Defaults to `null`.
    * **ClientSecret**: client secret. Defaults to `null`.
    * **MinSimilarityThreshold**: minimum similarity threshold. Defaults to `95`
* **DocumentoscopiaLite**: Under section **DocumentoscopiaLite**:
    * **ClientId**: client id. Defaults to `null`.
    * **ClientSecret**: client secret. Defaults to `null`.
* **WebhookUrl**: URL to receive webhooks. Defaults to `null`.
* **WebhookApiKey**: webhook api key. Defaults to `null`.
* **DangerousAcceptAnyServerCertificate**: ignore server certificate validation. Defaults to `false`.
* **ServerCertificateThumbprint**: accept response from pinned server certificate. Defaults to `null`.

### *VideoIdentification* Settings

Under section **VideoIdentification**:

* **Enabled**: enabled. Defaults to `false`.

### *IronPdf* Settings

Under section **IronPdf**:

* **LicenseKey**: license key. Defaults to `false`.

### *VideoconferenceCache* Settings

Under section **VideoconferenceCache**:

* **CacheRecordSlidingExpirationMinutes**: cache record sling expiration in minutes. Defaults to `5`.

### *BryBioService* Settings

Under section **BryBioService**:

* **AgentBiometricsEnabled**: enabled registration agent biometric authentication. Defaults to `false`.
* **AgentBiometricsEndpoint**: endpoint to be used on biometric authentication. Defaults to `null`.


### *Otp* Settings

Under section **Otp**:

* **VideoIdentification**: under section **VideoIdentification**:
    * **Length**: OTP length. Defaults to `6`.
    * **ResendTimeoutSeconds**: OTP resend timeout in seconds. Defaults to `60`.
    * **ValidityMinutes**: OTP validity in minutes. Defaults to `60`.
    * **DeliveryMethods**: delivery OTP methods separated by comma. Configured order will be the displayed order on OTP form. possible values `Email` or `Sms`. Defaults to `null`.
* **Videoconference**: under section **Videoconference**:
    * **Length**: OTP length. Defaults to `6`.
    * **ResendTimeoutSeconds**: OTP resend timeout in seconds. Defaults to `60`.
    * **ValidityMinutes**: OTP validity in minutes. Defaults to `60`.
    * **DeliveryMethods**: delivery OTP methods separated by comma. Configured order will be the displayed order on OTP form. possible values `Email` or `Sms`. Defaults to `null`.

### *Geolocation* Settings

Under section **Geolocation**:

* **EnableLowAccuracyRetry**: enable low accuray retry after failed attempt. Defaults to `true`.
* **MaximumAgeSeconds**: maximum age in seconds. Defaults to `60`.
* **TimeoutSeconds**: timeout in seconds. Defaults to `20`.
