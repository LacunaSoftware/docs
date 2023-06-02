# Amplia - Setup on Docker

To install an [on-premises](../index.md) instance of [Amplia](../../index.md) on Docker, follow the steps below. For other platforms, [click here](../index.md).

[!include[See planning](../includes/see-planning.md)]

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[Amplia Docker image](https://hub.docker.com/r/lacunasoftware/amplia)**
</center>
<br />

The current recommended image is `lacunasoftware/amplia:4.4`

Featured image tags:

* Tag `4.1` points to the latest 4.1.x image **(recommended)**
* Tag `4` points to the lastest 4.x image
* Tag `stable` points to the latest stable image

<!--
<a name="vnext" />

> [!NOTE]
> To test the upcoming version of Amplia, currently in Release Candidate state, use the image `lacunasoftware/amplia:4.4.0-rc07` instead.
> **Beware:** Release Candidate versions are not production-ready and thus should only be installed on staging or test environments.
-->

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

> [!NOTE]
> If you wish to enable user management, leave the `General__RootPasswordHash` setting blank and follow the steps on [Configure OpenID Connect](../configure-oidc.md) instead

## Exposed ports

The Amplia image listens on **port 80**.

You should set up a reverse proxy or load balancer listening on both default ports for HTTP (80) and HTTPS (443), redirecting
traffic on both ports to Amplia's port 80. Additionaly, your setup should fill the request headers `X-Forwarded-Proto`, `X-Forwarded-For`
and `X-Forwarded-Port`. The configuration `Bindings__UseReverseProxy=True` tells Amplia that the information on these headers should be
trusted.

## Example

In a production environment you would typically use a Docker orchestrator and a dedicated SQL Server (or a IaaS database offering), but for testing purposes you
can run an instance of Amplia with an instance of SQL Server Express (which is free) with Docker alone.

Start by creating a volume for the database server:

[!include[Create SQL volume](../../../../../includes/amplia/docker/create-sql-volume.md)]

Then, start it with a password of your choice (replace `SOME_PASS` below):

[!include[Run SQL Server Express](../../../../../includes/amplia/docker/run-sql.md)]

Check the console for any errors. This can take a few minutes.

Once SQL Server is up and running, open another terminal to start the Amplia instance.

Create a volume to use as blob storage:

[!include[Create data volume](../../../../../includes/amplia/docker/create-data-volume.md)]

Then, download the [sample environment file](https://cdn.lacunasoftware.com/amplia/docker/amplia.env), save it with name *amplia.env*
and fill it out.

On the connection string configuration, use the value below replacing `HOST_IP` with the IP address of the host and `SOME_PASS` with the
password you chose for the SQL Server:

[!include[Connection string](../../../../../includes/amplia/docker/sample-config-connection-string.md)]

On the blob storage configuration, leave the default settings, since we'll mount the created volume on `/var/app`:

[!include[Blob storage configuration](../../../../../includes/amplia/docker/sample-config-blob-storage.md)]

Now, let's run the container with the configuration file, mounting the volume `amplia_data` on `/var/app` and exposing the app (which listens on port 80) on the host's port 8080:

[!include[Run Amplia](../../../../../includes/amplia/docker/run.md)]

> [!TIP]
> If given a credential with enough privileges, Amplia will attempt to create the target database on the server (which is what will happen in this case)

Check the console for configuration errors. If everything is configured correctly, you should have a Amplia instance running on [localhost:8080](http://localhost:8080/)

## See also

* [SMS configuration](../configure-sms.md)
* [Key store configuration](../key-stores/index.md)
* [User management configuration](../configure-oidc.md)
