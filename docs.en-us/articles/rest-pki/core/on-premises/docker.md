# Rest PKI Core - Setup on Docker

To install an [on-premises](index.md) instance of [Rest PKI Core](../index.md) on Docker, follow the steps below. For other platforms, [click here](index.md#platforms).

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[Rest PKI Core Docker image](https://hub.docker.com/r/lacunasoftware/restpkicore)**
</center>
<br />

The currently recommended image is `lacunasoftware/restpkicore:3.1`

Available moving tags:

* Tag `3.1` points to the latest 3.1.x image **(recommended)**
* Tag `3` points to the lastest 3.x image
* Tag `stable` points to the latest stable image

<a name="vnext" />

> [!NOTE]
> To test the upcoming version of Rest PKI Core, currently in Release Candidate state, use the image `lacunasoftware/restpkicore:3.3.0-rc05` instead.
> **Beware:** Release Candidate versions are not production-ready and thus should only be installed on staging or test environments.

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
traffic on both ports to Rest PKI Core's port 80. Additionaly, your setup should fill the request headers
[X-Forwarded-Proto](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto),
[X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) and, optionally, `X-Forwarded-Port`.
The configuration `Bindings__UseReverseProxy=True` tells Rest PKI Core that the information on these headers should be trusted.

## Example

In a production environment you would typically use a Docker orchestrator and a dedicated database server (or a IaaS database offering), but for testing purposes you
can run an instance of Rest PKI Core with an instance of PostgreSQL with Docker alone.

Start by creating a volume for the database server:

[!include[Create SQL volume](../../../../../includes/rest-pki/core/docker/create-sql-volume.md)]

Then, start it with a password of your choice (replace `SOME_PASS` below):

[!include[Run database server](../../../../../includes/rest-pki/core/docker/run-sql.md)]

Check the container logs for any errors:

[!include[Check database server logs](../../../../../includes/rest-pki/core/docker/check-sql-logs.md)]

This can take a few minutes. Once the database server is up and running, hit CTRL+C to exit the logs.

Create a volume to use as blob storage:

[!include[Create data volume](../../../../../includes/rest-pki/core/docker/create-data-volume.md)]

Then, download the [sample environment file](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env), save it with name *restpkicore.env*
and fill it out.

On the connection string configuration, use the value below replacing `HOST_IP` with the IP address of the host and `SOME_PASS` with the
password you chose for PostgreSQL:

[!include[Connection string](../../../../../includes/rest-pki/core/docker/sample-config-connection-string.md)]

On the blob storage configuration, leave the default settings, since we'll mount the created volume on `/var/app`:

[!include[Blob storage configuration](../../../../../includes/rest-pki/core/docker/sample-config-blob-storage.md)]

Now, let's run the container with the configuration file, mounting the volume `restpkicore_data` on `/var/app` and exposing the app (which listens on port 80) on the host's port 8080:

[!include[Run Rest PKI Core](../../../../../includes/rest-pki/core/docker/run.md)]

> [!TIP]
> If given a credential with enough privileges, Rest PKI Core will attempt to create the target database on the server (which is what will happen in this case)

Check the container logs for any configuration errors:

[!include[Check logs](../../../../../includes/rest-pki/core/docker/check-logs.md)]

If everything is configured correctly, you should have a Rest PKI Core instance running on [localhost:8080](http://localhost:8080/)

## See also

* [User management configuration](configure-oidc.md)
