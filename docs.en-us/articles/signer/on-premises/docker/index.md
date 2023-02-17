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

Environment variable names must follow the pattern: `Section__Setting`, for instance: for the General section, to
configure the SupportEmailAddress you must set a variable with name: `General__SupportEmailAddress`.

The required settings are presented below.

[!include[Database config](../../../includes/spa-config/database-config.md)]

Example:

[!include[Database config sample](../../../../../includes/spa-config/database-config-sample.md)]

### BlobStorage Section

Defines how the application will store and retrieve files.

See [BlobStorage Configuration](../blob-storage.md) for details and examples of supported services.

### Serilog Section

Defines where application logs will be stored. 

Please see [Serilog Configuration](../serilog.md) for details and examples of supported services.

[!include[OIDC config](../../../includes/spa-config/oidc-config.md)]

Example:

[!include[OIDC config sample](../../../../../includes/spa-config/oidc-config-sample.md)]

[!include[PKI config](../../../includes/spa-config/pki-config.md)]

Example:

[!include[PKI config sample](../../../../../includes/spa-config/pki-config-sample.md)]

### General Configuration

* **SiteUrl**: the URL where the application will be running from.
* **SiteName**: the name of the application.
* **SupportEmailAddress**: the support email which will be included at the bottom of every email sent by the application.

Example: 

```sh
General__SiteUrl=https://signer.myapp.com
General__SiteName=MyApp Signer
General__SupportEmailAddress=support@email.com
```

### Bindings Configuration

* **UseReverseProxy**: set as `true` if the container will be executed behind a reverse proxy or load balancer. It can be omitted otherwise.

```sh
Bindings__UseReverseProxy=true
```

[!include[Email config](../../../includes/spa-config/email-config.md)]

Example:

[!include[Email config sample](../../../../../includes/spa-config/email-config-sample.md)]

## Additional Configuration

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

```sh
General__ProcessBackgroundJobs=false
General__AutoUpdateDatabase=false
```

Finally, to update simply pull the image with tag corresponding to the desired version and run the container.

## See also

* [Signer on-premises](../index.md)
