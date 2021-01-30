# Signer - Setup on Docker

For Docker-based setup the following image is provided on DockerHub:

<br />
<center>
**[Signer Docker Image](https://hub.docker.com/r/lacunasoftware/signer)**
</center>
<br />

This image requires: 

* A SQL Server Database connection: the database collation must be Latin1_General_100_CI_AI (or Latin1_General_CI_AI). 
* Storage (shared between all instances of the image): see BlobStorage settings bellow for further information.
* OIDC Server (GrantID) Cloud or OnPremises.

## Basic Configuration

The image is configured using Environment variables.

Environment variable names must follow the pattern: `Section__Setting`, for instance: for the General section, if you want to
configure the SupportEmailAddres you must set a variable with name: `General__SupportEmailAddress`.

The required settings are presented below divided by sections.

### ConnectionStrings section

Configures the database connection:

* **DefaultConnection**: an a SQL Server Connection String. Example: 

```
Server=tcp:mysqlserverendoint.com,1433;Initial Catalog=databasename;Persist Security Info=False;User ID=user;Password=userpassword;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;
```

### Blob Storage Section

Defines how the application will store and retrieve files.

* **Type**: available options are `FileSystem`, `Azure` or `AwsS3`.
* Depending on the type selected, more settings must be set. Please see BlobStorage Examples for details on each specific type.


### Serilog Section

Defines where application logs will be stored.

* **Type**: available options are `FileSystem`, `Azure` or `AwsS3`.
* Depending on the type selected, more settings must be set. Please see Serilog Examples for details on each specific type.

### Oidc Section

If you use GrantID on Cloud theses settings will be provided for you. Otherwise see the [Configuring a SPA Application page](../../../grant-id/on-premises/configure-spa-app.md).

* **ApiEndpoint: the GrantID API URL (IdentityService URL).
* **ApiName**: the API connection name.
* **AppId**: the backend application App-Id.
* **AppSecret**: the backend application App secret.
* **Authority**: the GrantID subscription URL.
* **ClientAppId**: the frontend application App-Id.
* **CpfClaim**: the name of the CPF claim (custom claim).
* **CustomScopes**: the names of required custom scopes separated by space.

### PkiSuite Section

Required licenses for the PKI suite library:

* **SdkLicense**: license of the PKI SDK.
* **WebLicense**: license of the Web PKI.
* **LappEnabled**: (recommended): prevents errors from LCR endpoint instabilities. Please ask for this option when requesting your PKI Suite license.

### General Section

* **SiteUrl**:
* **SiteName**:
* **SupportEmailAddress**:


### Email Section

* **ServerHost**:
* **Username**:
* **Password**:
* **SenderAddress**:
* **SenderName**:


Additional settings can be found at the [Signer Settings page](../settings.md).


## Installation

After all environment variables are defined, simply run your docker instance. 

> [!WARNING]
> Start with only one instance as in the first startup the database tables will be created (more instances could create a race condition). 
> Once the initial startup is complete you may run as many instances as you want.

## Updating Guidelines

Before updating your instance, it is recommended to check the [Changelog](../../changelog.md) to see what was changed from your 
current version to the latest one available.

If any of the versions between the current and the one you'd like to upate to have database model changes (has the message "Updates database model: yes") then you
should procceed carefully. 

This message means that the image will attempt to update the database upon startup. It is recommended that this type of update is done in times of low usage and that 
only one image instance is allowed to updated the database by reducing your total image instance count to 1 or by setting the following configuration on all but one instance:

```
General__ProcessBackgroundJobs=false
General__AutoUpdateDatabase=false
```
To execute the update simply pull and run the image with tag corresponding to the desired version.


## See also

* [Docker Swarm](./docker-swarm/index.md)