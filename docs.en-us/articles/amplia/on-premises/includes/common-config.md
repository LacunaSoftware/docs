### Bindings

Under section **Bindings**:

* **HttpsMode**: by default, both the dashboard and the REST APIs can only be accessed through HTTPS, which is the recommended behavior if you have a valid SSL certificate.
  * If you do not have a valid SSL certificate, set this setting to `Optional`. Users accessing the dashboard will not be redirected to HTTPS and REST APIs will be accessible through HTTP.
  * If you have a valid SSL certificate but some legacy client applications do not recognize it, set this setting to `RedirectPages`. REST APIs will still be accessible through HTTP (like in `Optional` mode), but users accessing the dashboard will be redirected to HTTPS.
* **SslPort**: by default, users accessing the dashboard through HTTP are redirected to HTTPS on the standard TCP port 443. If the site is using HTTPS on a non-standard port, set it here.

### Amplia settings

Under section **Amplia**:

* **DatabaseKeyStoreEnabled**: to enable the [database key store](../key-stores/database.md), set this to `true`
<!-- Native key stores will remain undocumented for the moment
**NativeUserKeyStoreEnabled**: to enable the [native user key store](../key-stores/native.md), set this to `true`
**NativeMachineKeyStoreEnabled**: to enable the [native machine key store](../key-stores/native.md), set this to `true` -->
* **DefaultKeyStore**: the default key store on which to create new keys
* **DefaultAccessDomains**: domains to be used when composing the CRL distribution points

### File storage

In order to keep the database tidy, Amplia stores files outside of the database. Files may be stored in different *providers*.

The section **Storage** configures the file storage. The setting **Type** defines which provider should be used, and the remaining settings depend on the provider chosen:

* File system
  * **Type**: set this setting to `FileSystem` to store files on the local file system
  * **Path**: set the path of the folder on which to store files. Make sure the application has access to the folder
* [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
  * **Type**: set this setting to `Azure` to store files on an Azure Storage account
  * **ConnectionString**: provide a connection string to the account
  * **ContainerName**: the name of the blob container on which to store files <!-- TODO: Azure container name restrictions -->
* Amazon S3 (coming soon, contact us if you need it)

### PKI Suite

Under section **PkiSuite**:

* **SdkLicense**: your license for the PKI SDK, in Base64 format (**required**)
* **WebLicense**: your license for the Web PKI component in binary (Base64) format. Only required if users will issue certificates on their computers (web issuing procedure)
* **WebBrand**: if you have a custom *setup brand* on Web PKI, set it here

### Email sending

Under section **Email**:

* **Enabled**: by default, email sending is enabled. To disable it, set this setting to `false` and ignore the remainder of this section
* **ServerHost**: hostname of the SMTP server
* **EnableSsl**: by default, the SMTP conversation is performed over SSL. To disable SSL, set this setting to `false`
* **ServerPort**: by default, the SMTP conversation is performed over port 587. Set this setting to use a different port
* **Username** and **Password**: if the SMTP server requires authentication, set these settings
* **SenderAddress**: email address to be used as sender (*from* field)
* **SenderName**: name to be used as the sender name (optional)

### Open ID Connect configuration

The Amplia dashboard requires an Open ID Connect (OIDC) server to perform authentication of users.

The section **Oidc** configures the OIDC server:

* **Authority**: the OIDC authority (e.g.: `https://id.patorum.com`)
* **ApiName**: the API scope that will be required on access tokens
* **DashboardClientId**: the *client id* of the dashboard app

### SMS sending

If users will issue certificates (either web or mobile issuing procedure), a SMS confirmation is required to confirm the identity of the user during the
certificate issue procedure. SMS messages may be sent using different *providers*.

The section **SMS** configures the SMS sending. The setting **Type** defines which provider should be used, and the remaining settings depend on the provider chosen:

* [Twilio](https://www.twilio.com/)
  * **Type**: set this setting to `Twilio` to send SMS messages using Twilio
  * **MessageFrom**: the sender phone number provided by Twilio (e.g.: `+12125550000`)
  * **AccountSid**: the account SID, provided by Twilio
  * **AuthToken**: the authentication token, provided by Twilio
* [TotalVoice](https://totalvoice.com.br/)
  * **Type**: set this setting to `TotalVoice` to send SMS messages using TotalVoice
  * **AccessToken**: the access token, provided by TotalVoice (e.g.: `0123456789abcdef0123456789abcdef`)

### Key store configuration

On the section **KeyStores**, each key is the name of a key store, having as value a section with the key store's configuration. For instance:

```json
...
"KeyStores": {
  "Store1": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "..."
  },
  "Store2": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "...",
    "Setting3": "..."
  },
}
...
```

The setting **Type** on each key store configuration defines the type of the key store, and the remaining settings depend on the provider chosen. See article [Key Store configuration](../key-stores/index.md) for details.

### Application Insights (additional instrumentation)

If you want to collect additional instrumentation data with [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), configure
the section **ApplicationInsights**:

* **InstrumentationKey**: the instrumentation key for the Insights account to be used
