# Enabling user management on Amplia

To perform user management, Amplia requires an Open ID Connect (OIDC) server, more specifically a [GrantID](../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../grant-id/on-premises/index.md).

> [!TIP]
> On Docker, see [Using a stack with GrantID](docker/internal-grantid.md) to install both Amplia and GrantID on the same stack

Once you have a GrantID subscription, fill the section **Oidc** of the JSON configuration file:

* **Authority**: the OIDC authority (e.g. *https://patorum.grantid.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.grantid.com*)
* **ApiName**: the API scope that will be required on access tokens
* **ClientAppId**: the *client id* of the dashboard app
* **AppId**: the *client id* of the backend app
* **AppSecret**: the *client secret* of the backend app
* **RequireHttps** (optional): set to `false` if the OIDC server does not use HTTPS

## See also

* [GrantID](../../grant-id/index.md)
* [Amplia on Docker - Using a stack with GrantID](docker/internal-grantid.md)
