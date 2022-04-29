# Configure OpenID Connect - Amplia Reg

To perform user management, Amplia Reg requires an Open ID Connect (OIDC) server, more specifically a [GrantID](../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../grant-id/on-premises/index.md).

Once you have a GrantID subscription, fill the section **Oidc** of the configuration file:

* **Authority**: the OIDC authority (e.g. *https://patorum.grantid.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.grantid.com*)
* **ApiName**: the API scope that will be required on access tokens
* **ClientAppId**: the *client id* of the dashboard app
* **AppId**: the *client id* of the backend app
* **AppSecret**: the *client secret* of the backend app
* **RequireHttps** (optional): set to `false` if the OIDC server does not use HTTPS

Example (*.ini* or *.conf* file):

```ini
[Oidc]
Enabled=True
Authority=https://patorum.grantid.com
ApiEndpoint=https://api.grantid.com
ApiName=your-api-scope
ClientAppId=YOURCLIENTAPPID
AppId=YOURAPPID
AppSecret=YOURAPPSECRET
```

Example (environment variables):

```bash
Oidc__Enabled=True
Oidc__Authority=https://patorum.grantid.com
Oidc__ApiEndpoint=https://api.grantid.com
Oidc__ApiName=your-api-scope
Oidc__ClientAppId=YOURCLIENTAPPID
Oidc__AppId=YOURAPPID
```

## See also

* [GrantID](../../grant-id/index.md)
