# Configure OpenID Connect - Rest PKI Core

To perform user management, [Rest PKI Core](../index.md) requires an Open ID Connect (OIDC) server, more specifically a [GrantID](../../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../../grant-id/on-premises/index.md).

Once you have a GrantID subscription, fill the following settings on the configuration file:

* **Oidc__Authority**: the OIDC authority (e.g. *https://patorum.grantid.com*)
* **Oidc__ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.grantid.com*)
* **Oidc__ApiName**: the API scope that will be required on access tokens
* **Oidc__ClientAppId**: the *client id* of the dashboard app
* **Oidc__AppId**: the *client id* of the backend app
* **Oidc__AppSecret**: the *client secret* of the backend app
* **Oidc__RequireHttps** (optional): set to `false` if the OIDC server does not use HTTPS

## See also

* [GrantID](../../../grant-id/index.md)
