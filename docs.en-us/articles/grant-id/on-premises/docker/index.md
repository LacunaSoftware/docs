# GrantID - Setup on Docker

For Docker-based setup the following image is provided on DockerHub:

<br />
<center>
**[GrantID Docker Image](https://hub.docker.com/r/lacunasoftware/grantid)**
</center>
<br />

This image requires: 

* A SQL Server Database connection: the database collation must be Latin1_General_100_CI_AI or Latin1_General_CI_AI. 
* Storage (shared between all instances of the image): see BlobStorage settings bellow for further information.
* A certificate to issue tokens. See [GrantID Linux Installation](../linux/index.md) for instructions to generate this certificate using openssl.
* A key to generate temporary tokens sent on emails. See [GrantID Linux Installation](../linux/index.md) for instructions to generate this key using openssl.

GrantID is composed of three services (see [GrantID Overview](../index.md)) which the image exposes in a single container. Different ports that can be configured using environment
variables:

* **GRANTID_IDENTITY_SERVICE_PORT**: default `5010`.
* **GRANTID_AUTH_SERVER_PORT**: default `5011`.
* **GRANTID_CONSOLE_PORT**: default `5012`.

If you need one image per service for fine-grained control of your containers contact us.

## Basic Configuration

The container for this image is configured using Environment variables.

Environment variable names must follow the pattern: `Section__Setting`, for instance: for the General section, if you want to
configure the SupportEmailAddres you must set a variable with name: `General__SupportEmailAddress`.

The required settings are presented below.

[!include[Database config](../../../includes/spa-config/database-config.md)]

[!include[Database config sample](../../../includes/spa-config/database-config-sample.md)]

### BlobStorage Section

Defines how the application will store and retrieve files.

See [BlobStorage Configuration](./blob-storage.md) for details and examples of supported services.

### Serilog Section

Defines where application logs will be stored. 

Please see [Serilog Configuration](./serilog.md) for details and examples of supported services.

[!include[PKI config](../../../includes/spa-config/pki-config.md)]

[!include[PKI config sample](../../../includes/spa-config/pki-config-sample.md)]

### Application Section

* **ProductName**: the URL where the application will be running from.
* **IdentityServiceUrl**: the name of the application.
* **ConsoleUrl**:
* **AuthServerUrl**:
* **ProtectorKeyStorePath**:
* **SigningCertificatePfxPath**:
* **SigningCertificatePfxPassword**:
* **TempTokenPassword**:
* **UseReverseProxy**:

[!include[Email config](../../../includes/spa-config/email-config.md)]
* **Support**: the support email which will be included at the bottom of every email sent by the application.

Example:

```
Email__ServerHost=email-smtp.us-east-1.amazonaws.com
Email__Username=USERNAME
Email__Password=PASSWORD
Email__SenderAddress=no-reply@email.com
Email__SenderName=MYAPPNAME
Email__Support=support@email.com
```

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
Application__AutoUpdateDatabase=false
```

Finally, to update simply pull the image with tag corresponding to the desired version and run the container.

> [!TIP]
> Additional settings can be found at the [GrantID Settings page](../settings.md).