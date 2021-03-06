﻿# Amplia - Setup on Docker Swarm

To install an [on-premises](../../index.md) instance of [Amplia](../../../index.md) on Docker Swarm, follow the steps below. If you use another Docker orchestrator,
see [Setup on Docker](../index.md). For other platforms, [click here](../../index.md).

[!include[See planning](../../includes/see-planning.md)]

Download the compose file and the configuration file templates:

[!include[Download files](../../../../../../includes/amplia/docker/download.md)]

Generate the SQL password and store as a Docker secret:

[!include[Generate SQL password](../../../../../../includes/amplia/docker/gen-sql-password.md)]

> [!NOTE]
> You can instead run `echo 'mypass' | docker secret create amplia_sql_password -` to use a SQL password of your choice

Generate the encryption key and store as a Docker secret:

[!include[Generate encryption key](../../../../../../includes/amplia/docker/gen-encryption-key.md)]

> [!NOTE]
> If migrating from a previous installation, make sure to use the previosly generated encryption key

Choose a strong password for root access to the dashboard, hash it using the [command-line tool](../../tool/index.md) and store as a Docker secret:

[!include[Hash root password](../../../../../../includes/amplia/docker/hash-root-pass.md)]

Edit the Amplia configuration file:

[!include[Edit Amplia config](../../../../../../includes/amplia/docker/edit-amplia-config.md)]

Fill the following settings outlined below.

### General

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website, hosted on the [dashboard domain](../../index.md#dashboard-domain) (e.g.: `http://ca.patorum.com/`)

> [!NOTE]
> Even if you have an SSL certificate, use the **SiteUrl** configuration with `http://`. Once you get Amplia
> up and running on HTTP, follow the steps on [Enabling SSL](enable-ssl.md) to enable SSL.

### Amplia settings

Under section **Amplia**:

* **DefaultAccessDomains**: domains to be used when composing the CRL distribution points (see [Access domains](../../index.md#access-domains))

[!include[PKI Suite config](../../includes/pki-config.md)]

[!include[Optional settings](../../includes/optional-settings.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../../includes/amplia/docker/edit-nginx-config.md)]

Replace the `server_name` entry with your [dashboard domain](../../index.md#dashboard-domain)
and [access domains](../../index.md#access-domains).

Pull the images beforehand:

[!include[Pull images](../../../../../../includes/amplia/docker/pull-images.md)]

> [!NOTE]
> This step is not really necessary, as the images would be pulled automatically on the next command. However, it
> avoids transient errors during deployment since not every orchestrator honors the `depends_on` instructions.

Deploy the Amplia stack:

[!include[Deploy stack](../../../../../../includes/amplia/docker/deploy.md)]

Check the status of the deployment:

[!include[Check deployment status](../../../../../../includes/amplia/docker/check-deploy.md)]

Watch the column *CURRENT STATE*. Wait until all services are *Running* (this may take a few minutes for the *amplia_sql* service).

Check the logs for the *amplia* service:

[!include[Check logs](../../../../../../includes/amplia/docker/check-logs-amplia.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/amplia/docker/check-logs-amplia-output.md)]

> [!NOTE]
> During first the run of the stack you might see the error *A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible.*
> This is because the SQL Server service takes some time to become ready. The stack usually recovers from this automatically.

Test the dashboard (replace *ca.patorum.com* with your [dashboard domain](../../index.md#dashboard-domain)):

[!include[Test dashboard](../../../../../../includes/amplia/docker/test-dashboard.md)]

The expected output is similar to:

[!include[Test dashboard](../../../../../../includes/amplia/linux/test-service-output.md)]

If you have a valid SSL certificate for your [dashboard domain](../../index.md#dashboard-domain), follow the steps on [Enabling SSL](enable-ssl.md).

## See also

* [Enabling SSL](enable-ssl.md)
* [Using an external database](external-db.md)
* [Checking the system logs](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
