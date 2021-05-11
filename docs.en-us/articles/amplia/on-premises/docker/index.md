# Amplia - Setup on Docker

To install an [on-premises](../index.md) instance of [Amplia](../../index.md) on Docker, follow the steps below. If you prefer, see specific
instructions for [Docker Swarm](swarm/index.md). For other platforms, [click here](../index.md).

[!include[See planning](../includes/see-planning.md)]

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[Amplia Docker image](https://hub.docker.com/repository/docker/lacunasoftware/amplia)**
</center>
<br />

The current recommended image is `lacunasoftware/amplia:3.12`

Featured image tags:

* Tag `3.12` points to the latest 3.12.x image **(recommended)**
* Tag `3` points to the lastest 3.x image
* Tag `stable` points to the latest stable image

This image requires: 

* **Blob storage** shared between all containers running the image -- see [Blob Storage configuration](../configure-blob-storage.md)

[!include[Common prerequisites](../includes/common-requisites.md)]

## Configuration

The container for this image is configured using environment variables. Get the [**sample environment file**](https://cdn.lacunasoftware.com/amplia/docker/amplia.env) for a
template to fill in the image's settings.

To fill the `General__EncryptionKey` setting, generate a 256-bit key to encrypt sensitive data stored on the database:

[!include[Generate key](../../../../../includes/amplia/docker/gen-encryption-key-stdout.md)]

To fill the `General__RootPasswordHash` setting, choose a strong password for root access to the dashboard and hash it:

[!include[Hash root password](../../../../../includes/amplia/docker/hash-root-pass-stdout.md)]

## Exposed ports

The Amplia image listens on **port 80**.

You should set up a reverse proxy or load balancer listening on both default ports for HTTP (80) and HTTPS (443), redirecting
traffic on both ports to Amplia's port 80. Additionaly, your setup should fill the request headers `X-Forwarded-Proto`, `X-Forwarded-For`
and `X-Forwarded-Port`. The configuration `Bindings__UseReverseProxy=True` tells Amplia that the information on these headers should be
trusted.

## See also

* [SMS configuration](../configure-sms.md)
* [Key store configuration](../key-stores/index.md)
* [User management configuration](../configure-oidc.md)
