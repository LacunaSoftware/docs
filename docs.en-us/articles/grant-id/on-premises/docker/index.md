# Installing GrantID on Docker

To run an [on-premises](../index.md) of [GrantID](../../index.md) on Docker, follow the steps below.

> [!TIP]
> Before you start, make sure you have completed the steps outlined on [Planning before installation](../index.md#planning)

Download the compose file and the configuration file templates:

```sh
curl -O https://cdn.lacunasoftware.com/grantid/docker/grantid.yml
curl -O https://cdn.lacunasoftware.com/grantid/docker/grantid.json
curl -O https://cdn.lacunasoftware.com/grantid/docker/nginx.conf
```

Generate the SQL password and store as a Docker secret:

[!include[Generate SQL password](../../../../../includes/grant-id/docker/gen-sql-password.md)]

> [!NOTE]
> You can instead run `echo 'mypass' | docker secret create grantid_sql_password -` to use a SQL password of your choice

Generate a self-signed certificate to sign the JSON Web Tokens. Provide the information below, pressing ENTER on the remaining questions. Avoid using diacritics ("accents" e.g. *á*, *ã*, *ç* etc).

* **Country Name**: enter the two-letter code of your country, e.g.: *BR*
* **State or Province Name**: enter the name of your organization's state, e.g.: *Sao Paulo*
* **Organization Name**: enter the name of your organization, e.g. *Patorum Inc*
* **Common Name**: enter the name of your Grant ID instance, e.g. *Patorum ID*

[!include[Generate certificate step 1](../../../../../includes/grant-id/linux/gen-cert-step1.md)]

Merge the key and certificate into a single PFX file and store as a Docker secret (when asked for a password, simply press ENTER twice):

[!include[Generate certificate step 2](../../../../../includes/grant-id/docker/gen-cert-step2.md)]

Do some housekeeping:

[!include[Generate certificate step 3](../../../../../includes/grant-id/docker/gen-cert-step3.md)]

Generate a key used to encrypt "tokens" sent on emails:

[!include[Generate temp token key](../../../../../includes/grant-id/docker/gen-temp-token-key.md)]

Edit the *grantid.json* file (`nano grantid.json`) and fill the following settings:

* Section **Application**
  * **ProductName**: the name of your Grant ID instance, e.g. *Patorum ID*
  * **AuthServerUrl**: public URL of the Auth Server component, hosted on the [base domain](../index.md#planning), e.g. *http://id.patorum.com*
  * **ConsoleUrl**: public URL of the Console component, hosted on the [console domain](../index.md#planning), e.g. *http://console.id.patorum.com*
  * **UseSSL**: whether the public URLs will use HTTPS (leave `false` for now, see below)
[!include[PKI settings](../includes/pki-settings.md)]
[!include[Common Identity Service settings](../includes/common-identity-service-settings.md)]

> [!NOTE]
> Even if you have an SSL certificate, use URLs with `http://` and leave *UseSSL* as `false` for now. When you get GrantID
> up and running on HTTP, follow the steps on [Enabling SSL](enable-ssl.md) to enable SSL.

Edit the *nginx.conf* file (`nano nginx.conf`) and make the following changes:

* On the **Identity Service** server, replace the `server_name` entry with your [API domain](../index.md#planning)
* On the **Auth Server** server, replace the `server_name` entry with your [base and login domains](../index.md#planning)
* On the **Console** server, replace the `server_name` entry with your [console domain](../index.md#planning)

Deploy the GrantID stack:

[!include[Generate temp token key](../../../../../includes/grant-id/docker/deploy.md)]

## See also

* [Enabling SSL on Docker](enable-ssl.md)
