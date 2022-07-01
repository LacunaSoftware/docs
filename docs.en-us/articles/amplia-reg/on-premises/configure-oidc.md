# Configure OpenID Connect - Amplia Reg

To perform user management, Amplia Reg requires an Open ID Connect (OIDC) server, more specifically a [GrantID](../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../grant-id/on-premises/index.md).

## Configuring GrantID

Follow the steps on the [Configure SPA Applications](../../grant-id/on-premises/configure-spa-app.md) article to configure your GrantID instance, with
the following particularities:

* When creating the subscription, choose as the *username type* either **CPF** (for Brazilian instances) or **Custom Information** (elsewhere)
* **Skip** the steps *Create a Custom Claim for CPF* and *Create a Custom Identification Scope*

## Configuring Amplia Reg to use GrantID

Once you have followed the steps above to configure GrantID, fill the section **Oidc** of the configuration file:

* **Authority**: the OIDC authority (e.g. *https://login.id.patorum.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.id.patorum.com*)
* **ApiName**: the API scope that will be required on access tokens
* **ClientAppId**: the *client id* of the dashboard app
* **AppId**: the *client id* of the backend app
* **AppSecret**: the *client secret* of the backend app
* **RequireHttps** (optional): set to `false` if the OIDC server does not use HTTPS

Example (*.ini* or *.conf* file):

```ini
[Oidc]
Enabled=True
Authority=https://login.id.patorum.com
ApiEndpoint=https://api.id.patorum.com
ApiName=your-api-scope
ClientAppId=YOURCLIENTAPPID
AppId=YOURAPPID
AppSecret=YOURAPPSECRET
```

Example (environment variables):

```bash
Oidc__Enabled=True
Oidc__Authority=https://login.id.patorum.com
Oidc__ApiEndpoint=https://api.id.patorum.com
Oidc__ApiName=your-api-scope
Oidc__ClientAppId=YOURCLIENTAPPID
Oidc__AppId=YOURAPPID
```

## See also

* [GrantID](../../grant-id/index.md)
