# Rest PKI Core - Setup on Docker

To install an [on-premises](index.md) instance of [Rest PKI Core](../index.md) on Docker, follow the steps below. For other platforms, [click here](index.md#platforms).

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[Rest PKI Core Docker image](https://hub.docker.com/repository/docker/lacunasoftware/restpkicore)**
</center>
<br />

The currently recommended image is `lacunasoftware/restpkicore:1.6`

Available moving tags:

* Tag `1.6` points to the latest 1.6.x image **(recommended)**
* Tag `1` points to the lastest 1.x image
* Tag `stable` points to the latest stable image

This image requires: 

* **Blob storage** shared between all containers running the image -- see [Blob Storage configuration](configure-blob-storage.md)

[!include[Common prerequisites](includes/common-requisites.md)]

## Configuration

The container for this image is configured using environment variables. Get the [**sample environment file**](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env) for a
template to fill in the image's settings.

To fill the `General__EncryptionKey` setting, generate a 256-bit key to encrypt sensitive data stored on the database:

[!include[Generate key](../../../../../includes/rest-pki/core/docker/gen-encryption-key-stdout.md)]

To fill the `General__RootPasswordHash` setting, choose a strong password for root access to the dashboard and hash it:

[!include[Hash root password](../../../../../includes/rest-pki/core/docker/hash-root-pass-stdout.md)]

## Exposed ports

The Rest PKI Core image listens on **port 80**.

You should set up a reverse proxy or load balancer listening on both default ports for HTTP (80) and HTTPS (443), redirecting
traffic on both ports to Rest PKI Core's port 80. Additionaly, your setup should fill the request headers `X-Forwarded-Proto`, `X-Forwarded-For`
and `X-Forwarded-Port`. The configuration `Bindings__UseReverseProxy=True` tells Rest PKI Core that the information on these headers should be
trusted.

## Example

In a production environment you would typically use a Docker orchestrator, but for testing purposes you can run Rest PKI Core with Docker alone.

For testing purposes, let's use as blob storage a simple Docker volume named `restpkicore` mounted on `/var/app`. Start by creating it:

[!include[Create volume](../../../../../includes/rest-pki/core/docker/create-volume.md)]

Next, download the [sample environment file](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env) and save it with name *restpkicore.env*, then
fill it out. On the blob storage section, leave the default settings (`BlobStorage__Type=FileSystem` and `BlobStorage__Path=/var/app`).

Now, let's run the container with the configuration file, mounting the volume `restpkicore` on `/var/app` and exposing the app (which listens on port 80) on the host's port 8080:

[!include[Docker run](../../../../../includes/rest-pki/core/docker/run.md)]

Check the console for configuration errors. If everything is configured correctly, you should have a Rest PKI Core instance running on [localhost:8080](http://localhost:8080/)

## See also

* [User management configuration](configure-oidc.md)
