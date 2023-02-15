# GrantID - Setup on Docker

To install an [on-premises](../index.md) instance of [GrantID](../../index.md) on Docker, follow the steps below. For other platforms, [click here](../index.md#platforms).

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[GrantID Docker Image](https://hub.docker.com/r/lacunasoftware/grantid)**
</center>
<br />

The currently recommended image is `lacunasoftware/grantid:4.2`

Available moving tags:

* Tag `4.2` points to the latest 4.2.x image **(currently recommended)**
* Tag `4` points to the lastest 4.x image
* Tag `stable` points to the latest stable image

This image requires: 

* **Blob storage** shared between all containers running the image -- see [Blob Storage configuration](../blob-storage.md)
* **Volume** shared between all containers running the image mounted on `/var/keys`, used to store data protection keys. Files on this volume are few, seldom written to and read only during container
  startup, therefore this can be any low-performing shared volume provided by whatever orchestrator you use.

[!include[Common prerequisites](../includes/common-requisites.md)]

## Configuration

The container for this image is configured using environment variables. Get the [**sample environment file**](https://cdn.lacunasoftware.com/grantid/docker/grantid.env) for a
template to fill in the image's settings.

To fill the `Application__TempTokenPassword` setting, generate a 256-bit key to encrypt sensitive data:

```sh
docker run lacunasoftware/psc:1 -- gen-enc-key
```

To fill the `Application__SigningCertificatePfxContent` and `Application__SigningCertificatePfxPassword` settings, generate a PFX file containing a self-signed certificate to sign OAuth tokens:

```sh
docker run lacunasoftware/psc:1 -- gen-cert "Your GrantID Name" SOME_PASSWORD
```

The output will be similar to:

```plaintext
$ docker run lacunasoftware/psc:1 -- gen-cert "Patorum ID" "1234"
PSC entrypoint invoked
Starting application

#
# PFX
#
MIIPwQ...AAA=

#
# Certificate
#
-----BEGIN CERTIFICATE-----
MIIE...
.......
...AAA=
-----END CERTIFICATE-----

#
# Thumbprint
#
0123...CDEF
```

Copy the entire contents of the **PFX** section (all as a single line) over to the `Application__SigningCertificatePfxContent` setting (in the example above, `MIIPwQ...AAA=`, in reality this would be
close to 5000 characters) and fill the `Application__SigningCertificatePfxPassword` setting with the same password you used on the generation command.

Additional settings can be found at the [GrantID Settings page](../settings.md).

## Exposed ports

GrantID is composed of three services (see [GrantID Overview](../index.md#planning)) which the image exposes in a single container, listening on the following ports:

* The *identity service* listens on port **5010**
* The *auth server* listens on port **5011**
* The *console* listens on port **5012**

These ports can be customized by setting the environment variables `GRANTID_IDENTITY_SERVICE_PORT`, `GRANTID_AUTH_SERVER_PORT` and `GRANTID_CONSOLE_PORT`.

Your environment configuration should direct traffic from the [application domains](../index.md#planning) to these ports in the following way:

Domain type | Container port
----------- | --------------
Base domain | Auth server (5012)
Login       | Auth server (5012)
Console     | Console (5011)
API         | Identity service (5010)


Different ports that can be configured using environment
variables:

* **GRANTID_IDENTITY_SERVICE_PORT**: default `5010`.
* **GRANTID_AUTH_SERVER_PORT**: default `5011`.
* **GRANTID_CONSOLE_PORT**: default `5012`.

> [!NOTE]
> If you need one image per service for fine-grained control of your containers contact us.




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
Application__AutoUpdateDatabase=false
```

Finally, to update simply pull the image with tag corresponding to the desired version and run the container.

## See also

* [Docker Swarm](./docker-swarm/index.md)