# Installing Amplia on Windows Server

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

To install your own instance of [Amplia](../../index.md) on Windows Server, follow the steps on this article. For other platforms, [click here](../index.md).

## Planning before installation

Before you start, you should plan ahead on where you intend to store your Certification Authority (CA) keys and where will your Certificate
Revocation Lists (CRLs) be published. Please read the sections below for details on each of these decisions.

### Key storage

The keys for your Certification Authorities (CAs) can be stored on a variety of locations, called *key stores*. The choice of where to store
CA keys is one of the most important decisions when planning for a CA. See article [Key Store configuration](key-stores/index.md) for more information
on where you can store your CA keys and how to configure Amplia accordingly.

### Dashboard domain / SSL certificate

The application has a web interface called the *dashboard* to manage CAs, keys etc. You must choose a domain to access it, for instance `ca.patorum.com`.

The chosen domain should be created on the DNS server of the zone (either A or CNAME records) prior to the installation, pointing to the server on which
Amplia will be installed.

> [!NOTE]
> Using a virtual directory (subfolder) on a domain hosting another web application is not supported

It is also recommended that you have a **valid SSL certificate** for the chosen domain.

### CRL publishing (*access domains*)

Certificates issued by Amplia include the X.509 *CRL Distribution Point* extension, which contains links to locations where a third party desiring to validate
the certificate should obtain the latest Certificate Revocation List (CRL) of the CA, required to determine the revocation status of the certificate.

These links have the following format: `http://your-ca-domain/crls/my-ca.crl`

The `your-ca-domain` part of the link is called on the Amplia configuration an *access domain*. You must choose at least one access domain, but
it is recommended to have two access domains, preferably independent of each other, for instance:

* *ca.patorum.com*
* *ca.patorum.net*

> [!TIP]
> One of the access domains may be the same domain on which the Amplia dashboard will be accessed.

> [!NOTE]
> Using a virtual directory (subfolder) on a domain hosting another web application is not supported

These domains should be chosen keeping in mind that they **will have to be maintained for a long time** (for the entire lifetime of the certificates
issued on your Amplia instance, which is typically several years).

The chosen access domains should be created on the DNS servers (either A or CNAME records) pointing to the server on which Amplia will be installed.

> [!TIP]
> You do not need an SSL certificate for your access domains. Since X.509 recommends that CRLs be distributed over HTTP instead of HTTPS, the
> certificates are issued with links using the HTTP protocol.

## Database operation mode

Amplia can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update (when needed)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrator (using a command line tool)

Granting owner privileges to the application is simpler, while granting only read and write ensures you greater control over the database. The decision
is up to you. If not sure what to choose, we recommend granting owner privileges (option 1), since it makes updating the application easier.

Some of the setup instructions depend on the option you choose.

## Prerequisites

* Windows Server 2016 or newer (any edition)
* SQL Server 2016 or newer (recommended edition Standard or better)
* PKI SDK license (in Base64 format)
* Web PKI license (Base64/binary format) -- only needed if users will issue certificates on their computers (web issuing procedure)
* DNS entries previously created for:
  * Dashboard access
  * CRL publishing (*access domains*)
* (recommended) Valid SSL certificate for the dashboard domain

> [!NOTE]
> This documentation is intended for Windows Servers with UI installed. For "core" installations (shell access only), please contact us.

You will also need a connection string to a **database** previously created having:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with the following database roles:
  * If the application should be owner of the database: `db_owner`
  * If the application should only have read and write permissions: `db_datareader` and `db_datawriter`

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, [click here](prepare-database.md).

## Installation

1. Install IIS
1. https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.2.5-windows-hosting-bundle-installer
   * https://aka.ms/dotnetcore-2-2-windowshosting
1. Create folder for site
1. Create folder for logs
1. Create site
   * Set no managed code
1. Extract files

## Configuration

On the installation folder, rename the file **appsettings.iis-template.json** to **appsettings.iis.json** (remove the `-template` suffix). Then, edit the file
to configure your Amplia instance.

### Database connection string

Under section **ConnectionStrings**, on the setting **DefaultConnection**, set the connection string to the previously created database. A typical connection string looks like this:

```
Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD
```

> [!NOTE]
> If you created the database using advanced features such as log shipping or mirroring, your connection string may be different

### Logging

Under section **Serilog**, configure the application logging:

```json
...
"Serilog": {
	"MinimumLevel": {
		"Default": "Warning",
	},
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "C:\\Logs\\Amplia.log",
				"outputTemplate": "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}",
			}
		}
	],
}
...
```

Change the **path** setting to the log file path.

> [!NOTE]
> Remember to grant full access to the application user on the log folder

### General settings

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website (e.g.: `https://ca.patorum.com/`). This address is used to compose emails with links back to the website 
* **AutoUpdateDatabase**: by default, the application tries to perform model changes to the database after an update (when needed). Set to `false` if the application does not have owner permissions over the database.
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails)

### Bindings

Under section **Bindings**:

* **HttpsMode**: by default, both the dashboard and the REST APIs can only be accessed through HTTPS, which is the recommended behavior if you have a valid SSL certificate.
  * If you do not have a valid SSL certificate, set this setting to `Optional`. Users accessing the dashboard will not be redirected to HTTPS and REST APIs will be accessible through HTTP.
  * If you have a valid SSL certificate but some legacy client applications do not recognize it, set this setting to `RedirectPages`. REST APIs will still be accessible through HTTP (like in `Optional` mode), but users accessing the dashboard will be redirected to HTTPS.
* **SslPort**: by default, users accessing the dashboard through HTTP are redirected to HTTPS on the standard TCP port 43. If the site is using HTTPS on a non-standard port, set it here.

### Amplia settings

Under section **Amplia**:

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

> [!NOTE]
> If you wish to use other SMS provider, please contact us

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

The setting **Type** on each key store configuration defines the type of the key store, and the remaining settings depend on the provider chosen. See article [Key Store configuration](key-stores/index.md) for details.

### Application Insights (additional instrumentation)

If you want to collect additional instrumentation data with [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), configure
the section **ApplicationInsights**:

* **InstrumentationKey**: the instrumentation key for the Insights account to be used

## Starting up application

1. Start site
1. Access site

## See also

* [Key Store configuration](key-stores/index.md)
* [Updating Amplia on Windows Server](update.md)
* [Troubleshooting](troubleshoot/index.md)
