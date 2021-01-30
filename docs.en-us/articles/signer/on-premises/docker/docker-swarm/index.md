# Signer - Setup on Docker

To install an [on-premises](../../index.md) instance of [Signer](../../../index.md) on Docker, follow the steps below. For other platforms, [click here](../../index.md).

Download the compose file and the configuration file templates:

[!include[Download files](../../../../../../includes/signer/docker/download.md)]

Generate the SQL password and store as a Docker secret:

[!include[Generate SQL password](../../../../../../includes/signer/docker/gen-sql-password.md)]

> [!NOTE]
> You can instead run `echo 'mypass' | docker secret create signer_sql_password -` to use a SQL password of your choice

Generate the encryption key and store as a Docker secret:

[!include[Generate encryption key](../../../../../../includes/signer/docker/gen-encryption-key.md)]

> [!NOTE]
> If migrating from a previous installation, make sure to use the previosly generated encryption key

Edit the Signer configuration file:

[!include[Edit Signer config](../../../../../../includes/signer/docker/edit-signer-config.md)]

Follow the instructions on the file to fill it out.

> [!TIP]
> For instructions on specific configurations on the *signer.json* file, please refer to the [Ubuntu setup instructions](../../linux/install-ubuntu.md)

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../../includes/signer/docker/edit-nginx-config.md)]

Replace the `server_name` entry with your site domain.

Pull the images beforehand:

[!include[Pull images](../../../../../../includes/signer/docker/pull-images.md)]

> [!NOTE]
> This step is not really necessary, as the images would be pulled automatically on the next command. However, it
> avoids transient errors during deployment since not every orchestrator honors the `depends_on` instructions.

Deploy the Signer stack:

[!include[Deploy stack](../../../../../../includes/signer/docker/deploy.md)]

Check the status of the deployment:

[!include[Check deployment status](../../../../../../includes/signer/docker/check-deploy.md)]

Watch the column *CURRENT STATE*. Wait until all services are *Running* (this may take a few minutes for the *signer_sql* service).

Check the logs for the *signer* service:

[!include[Check logs](../../../../../../includes/signer/docker/check-logs-signer.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/signer/docker/check-logs-signer-output.md)]

> [!NOTE]
> During first the run of the stack you might see the error *A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible.*
> This is because the SQL Server service takes some time to become ready. The stack usually recovers from this automatically.

Test the dashboard (replace *signer.patorum.com* with your site domain):

[!include[Test site](../../../../../../includes/signer/docker/test-site.md)]

The expected output is similar to:

[!include[Site output](../../../../../../includes/signer/linux/test-service-output.md)]

If you have a valid SSL certificate for your site, follow the steps on [Enabling SSL on Docker](enable-ssl.md).

## See also

* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
