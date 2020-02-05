# Amplia - Setup on Docker

To run an [on-premises](../index.md) instance of [Amplia](../../index.md) on Docker, follow the steps below.

> [!TIP]
> Before you start, make sure you have completed the steps outlined on [Planning before installation](../index.md#planning)

Download the compose file and the configuration file templates:

[!include[Download files](../../../../../includes/amplia/docker/download.md)]

Generate the SQL password and store as a Docker secret:

[!include[Generate SQL password](../../../../../includes/amplia/docker/gen-sql-password.md)]

> [!NOTE]
> You can instead run `echo 'mypass' | docker secret create amplia_sql_password -` to use a SQL password of your choice

Generate the encryption key and store as a Docker secret:

[!include[Generate encryption key](../../../../../includes/amplia/docker/gen-encryption-key.md)]

> [!NOTE]
> If migrating from a previous installation, make sure to use the previosly generated encryption key

Edit the Amplia configuration file:

[!include[Edit Amplia config](../../../../../includes/amplia/docker/edit-amplia-config.md)]

Fill the following settings outlined below.

### Bindings / General

Under section **Bindings**:

* **HttpsMode**: leave commented for now

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website, hosted on the [dashboard domain](../index.md#dashboard-domain) (e.g.: `http://ca.patorum.com/`)
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails)

> [!NOTE]
> Even if you have an SSL certificate, use the **SiteUrl** configuration with `http://` and leave **HttpsMode** commented for now. Once you get Amplia
> up and running on HTTP, follow the steps on [Enabling SSL](enable-ssl.md) to enable SSL.

### Amplia settings

Under section **Amplia**:

* **DefaultAccessDomains**: domains to be used when composing the CRL distribution points (see [Access domains](../index.md#access-domains))

[!include[PKI Suite config](../includes/pki-config.md)]

[!include[Email config](../includes/email-config.md)]

[!include[OIDC config](../includes/oidc-config.md)]

[!include[SMS config](../includes/sms-config.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../includes/amplia/docker/edit-nginx-config.md)]

Replace the `server_name` entry with your [dashboard domain](../index.md#dashboard-domain).

Deploy the Amplia stack:

[!include[Deploy stack](../../../../../includes/amplia/docker/deploy.md)]

Check the logs for the *amplia* service:

[!include[Check logs](../../../../../includes/amplia/docker/check-logs-amplia.md)]

The expected output is similar to:

[!include[Expected output](../../../../../includes/amplia/docker/check-logs-amplia-output.md)]

> [!NOTE]
> During first the run of the stack you might see the error *A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible.*
> This is because the SQL Server service takes some time to become ready. The stack usually recovers from this automatically.

Test the dashboard (replace *ca.patorum.com* with your [dashboard domain](../index.md#dashboard-domain)):

[!include[Test dashboard](../../../../../includes/amplia/docker/test-dashboard.md)]

The expected output is similar to:

[!include[Test dashboard](../../../../../includes/amplia/linux/test-service-output.md)]

If you have a valid SSL certificate for your [dashboard domain](../index.md#dashboard-domain), follow the steps on [Enabling SSL on Docker](enable-ssl.md).

## See also

* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
