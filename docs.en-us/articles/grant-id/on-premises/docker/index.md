# Installing GrantID on Docker

To run an [on-premises](../index.md) of [GrantID](../../index.md) on Docker, follow the steps below.

> [!TIP]
> Before you start, make sure you have completed the steps outlined on [Planning before installation](../index.md#planning)

Download the compose file and the configuration file templates:

[!include[Download files](../../../../../includes/grant-id/docker/download.md)]

Generate the SQL password and store as a Docker secret:

[!include[Generate SQL password](../../../../../includes/grant-id/docker/gen-sql-password.md)]

> [!NOTE]
> You can instead run `echo 'mypass' | docker secret create grantid_sql_password -` to use a SQL password of your choice

[!include[Generate self-signed certificate](../includes/gen-cert.md)]

[!include[Generate certificate step 1](../../../../../includes/grant-id/linux/gen-cert-step1.md)]

Merge the key and certificate into a single PFX file and store as a Docker secret (when asked for a password, simply press ENTER twice):

[!include[Generate certificate step 2](../../../../../includes/grant-id/docker/gen-cert-step2.md)]

Do some housekeeping:

[!include[Generate certificate step 3](../../../../../includes/grant-id/docker/gen-cert-step3.md)]

Generate a key used to encrypt "tokens" sent on emails:

[!include[Generate temp token key](../../../../../includes/grant-id/docker/gen-temp-token-key.md)]

Edit the GrantID configuration file:

[!include[Edit GrantID config](../../../../../includes/grant-id/docker/edit-grantid-config.md)]

Fill the following settings:

* Section **Application**
  * **ProductName**: the name of your Grant ID instance, e.g. *Patorum ID*
  * **AuthServerUrl**: public URL of the Auth Server component, hosted on the [base domain](../index.md#planning), e.g. *http://id.patorum.com*
  * **ConsoleUrl**: public URL of the Console component, hosted on the [console domain](../index.md#planning), e.g. *http://console.id.patorum.com*
  * **UseSSL**: whether the public URLs will use HTTPS (leave `false` for now, see below)

> [!NOTE]
> Even if you have an SSL certificate, use URLs with `http://` and leave **UseSSL** as `false` for now. Once you get GrantID
> up and running on HTTP, follow the steps on [Enabling SSL](enable-ssl.md) to enable SSL.

[!include[PKI config](../includes/pki-config.md)]

[!include[SMS config](../includes/sms-config.md)]

[!include[Email config](../includes/email-config.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../includes/grant-id/docker/edit-nginx-config.md)]

Make the following changes to the file:

* On the **Identity Service** server, replace the `server_name` entry with your [API domain](../index.md#planning)
* On the **Auth Server** server, replace the `server_name` entry with your [base and login domains](../index.md#planning)
* On the **Console** server, replace the `server_name` entry with your [console domain](../index.md#planning)

Deploy the GrantID stack:

[!include[Deploy stack](../../../../../includes/grant-id/docker/deploy.md)]

Check the status of the deployment:

[!include[Check deployment status](../../../../../includes/grant-id/docker/check-deploy.md)]

Watch the column *CURRENT STATE*. Wait until all services are *Running* (this may take a few minutes for the *grantid_sql* service).

Check the logs for the *grantid* service:

[!include[Check grantid logs](../../../../../includes/grant-id/docker/check-logs-grantid.md)]

The expected output is similar to:

[!include[Expected output](../../../../../includes/grant-id/docker/check-logs-grantid-output.md)]

> [!NOTE]
> During first the run of the stack you might see the error *A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible.*
> This is because the SQL Server service takes some time to become ready. The stack usually recovers from this automatically.

Test the Identity Service component (replace *api.id.patorum.com* with your [API domain](../index.md#planning)):

[!include[Test Identity Service](../../../../../includes/grant-id/docker/test-identity-service.md)]

The version of the component should be outputted.

Test the Auth Server component (replace *id.patorum.com* with your [base domain](../index.md#planning)):

[!include[Test Auth Server](../../../../../includes/grant-id/docker/test-auth-server.md)]

The source for an HTML document should be outputted.

Test the Console component (replace *console.id.patorum.com* with your [console domain](../index.md#planning)):

[!include[Test Console](../../../../../includes/grant-id/docker/test-console.md)]

The source for an HTML document should be outputted.

## Post-installation

Follow the steps on [GrantID post-installation](../post-install.md) to complete the installation procedure.

## See also

* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
