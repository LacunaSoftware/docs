# Signer - Setup on Docker

For Docker-based setup the following image is provided on DockerHub:

<br />
<center>
**[Signer Docker Image](https://hub.docker.com/r/lacunasoftware/signer)**
</center>
<br />

This image requires: 

* A SQL Server Database connection: the database collation must be Latin1_General_100_CI_AI or Latin1_General_CI_AI. 
* Storage (shared between all instances of the image): see BlobStorage settings bellow for further information.
* OIDC Server ([GrantID](../../../grant-id/index.md)) Cloud or On-Premises.

## Basic Configuration

The container for this image is configured using Environment variables.

Environment variable names must follow the pattern: `Section__Setting`, for instance: for the General section, if you want to
configure the SupportEmailAddres you must set a variable with name: `General__SupportEmailAddress`.

The required settings are presented below.

### ConnectionStrings section

Configures the database connection:

* **DefaultConnection**: an a SQL Server Connection String. 

Example: 

```
ConnectionStrings__DefaultConnection=Server=tcp:mysqlserverendoint.com,1433;Initial Catalog=databasename;Persist Security Info=False;User ID=user;Password=userpassword;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;
```

### BlobStorage Section

Defines how the application will store and retrieve files.

See [BlobStorage Configuration](./blob-storage.md) for details and examples of supported services.

### Serilog Section

Defines where application logs will be stored. 

Please see [Serilog Configuration](./serilog.md) for details and examples of supported services.

### Oidc Section

If you use GrantID on Cloud these settings will be provided for you. Otherwise see the [Configuring a SPA Application page](../../../grant-id/on-premises/configure-spa-app.md).

* **ApiEndpoint**: the GrantID API URL (IdentityService URL).
* **ApiName**: the API connection name.
* **AppId**: the backend application App-Id.
* **AppSecret**: the backend application App secret.
* **Authority**: the GrantID subscription URL.
* **ClientAppId**: the frontend application App-Id.
* **CpfClaim**: the name of the CPF claim (custom claim).
* **CustomScopes**: the names of required custom scopes separated by space.

Example:

```
Oidc__ApiEndpoint https://api.grantid.com
Oidc__ApiName myapp-api
Oidc__AppId myapp-backend
Oidc__AppSecret 8CqeGeur46kfX422ujStJGH/M/kqjiliJd37VduJcRw=
Oidc__Authority https://mysub.grantid.com
Oidc__ClientAppId myapp
Oidc__CpfClaim cpf
Oidc__CustomScopes mysub-cpf
```

### PkiSuite Section

Required licenses for the PKI suite library:

* **SdkLicense**: license of the PKI SDK.
* **WebLicense**: license of the Web PKI.
* **LappEnabled**: (recommended): prevents errors from LCR endpoint instabilities. Ask for this option when requesting your PKI Suite license.

Example:

```
PkiSuite__SdkLicense AxAAzHeWJY9AK...
PkiSuite__WebLicense ApwBY29uZml1A...
PkiSuite__LappEnabled true
```

### General Section

* **SiteUrl**: the URL where the application will be running from.
* **SiteName**: the name of the application.
* **SupportEmailAddress**: the support email which will be included at the bottom of every email sent by the application.

### Bindings Section

* **UseReverseProxy**: set as `true` if the application will be executed behind a reverse proxy or load balancer. It can be omitted otherwise.

[!include[Email config](../../../includes/spa-config/email-config.md)]

Additional settings can be found at the [Signer Settings page](../settings.md).

## Installation

Pull the latest stable image, configure the required environment variables and run the container. 

> [!WARNING]
> Start with **only one container** as in the first startup, the database tables will be created (more containers could create a race condition). 
> Once the initial startup is complete, you may run as many containers as you want.

## Updating Guidelines

Before updating your container, it is recommended to check the [Changelog](../../changelog.md) to see what has changed from your 
current version to the latest one available.

If any of the versions included in the update have database model changes ("Updates database model: yes") then you
should procceed carefully as the container will attempt to update the database upon startup.

In this scenario, it is recommended to choose one of the following options:

* Reduce the number of running containers to 1.
* Allow only one container to update the database. This is done by adding the following settings to all but one container:

```
General__ProcessBackgroundJobs=false
General__AutoUpdateDatabase=false
```

Finally, to update simply pull the image with tag corresponding to the desired version and run the container.

## See also

* [Docker Swarm](./docker-swarm/index.md)