# Configure OpenID Connect - Lacuna PSC

Lacuna PSC requires a [GrantID](../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../grant-id/on-premises/index.md).

## Configuring GrantID

Log into the GrantID Console portal and follow the instructions below.

### Create a Subscription 

> [!TIP]
> You may skip this step if you already have a subscription created.

Create a subscription by providing: 

* **Name**: the name of the subscription.
* **Namespace**: unique identifier for this subscription. It will be used to construct the Subscription URL.
* **Username type**: choose `Email`

The subscription URL is always a subdomain of the GrantID (AuthServer) URL: `https://<sub_namespace>.<auth_server_domain>`

Add DNS records pointing the generated subscription URL to your GrantID instance (AuthServer).

To test your settings, access: `https://<subscription_url>/.well-known/openid-configuration` and verify that a JSON is displayed.

### Create an API Connection

On the **Scopes** tab, click on **New API Connection** to create an API connection for the application, providing:

* **Name**: `psc`
* **Display name**: `PSC`

After the API connection is created, click on the **Generate** button on the *API Secret* column, then **Generate Secret**.
This is the `ApiSecret` setting (copy it and save it for later).

Expand the API connection it and click on the ✎ button of the API Scope to edit it. Mark all claims and click **Edit API Scope**.

### Frontend Application

On the **Applications** tab, click on **New Application** and provide:

* **Name**: `PSC`
* **App-id**: `psc`
* **Type**: select `Implicit flow`.

In the application details, choose the Settings tab to set:

* **Application URL**: the URL of your application. Example: `https://myappname.com`
* Select the `Allow Access tokens via browser?` checkbox.
* Deselect the following checkboxes: `Require consent?`, `Front-channel logout session required?` and `Back-channel logout session required?`
* **Allowed URLs**: name of this application on GrantID. Suggestion: `<My App Name>`
  * **Redirect**: you must add 4 redirect URLs that are based on your application URL:
    * `<applicationURL>` without trailing slash.
    * `<applicationURL>/silent-refresh.html`
    * `<applicationURL>/private/profile/refresh`
    * `<applicationURL>/private`
  * **CORS origins**: `<applicationURL>` without trailing slash.
  * **Post Logout**: `<applicationURL>` without trailing slash.
* **Allowed Identification Scopes**: mark all scopes
* **Allowed API scopes**: mark the `PSC` scope
* It is recommended to select the option `Verify user's email` so only verified email users are allowed to complete the login process.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

### Backend Application

On the **Applications** tab, click on **New Application** again and provide:

* **Name**: `PSC Backend`
* **App-id**: `psc-backend`
* **Type**: select `Client credentials`.

In the application details, choose the Settings tab to set:

* **Allowed API scopes**: select the `Manage subscription's users` scope.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

After saving, return to the **Basic Details** tab and on the **App Secret** section click on **Generate**, then **Generate Secret**.
This is the `AppSecret` setting (copy it and save it for later).

### ROP Application

On the **Applications** tab, click on **New Application** again and provide:

* **Name**: `PSC ROP`
* **App-id**: `psc-rop`
* **Type**: select `Resource Owner Password`.

In the application details, choose the Settings tab to set:

* Select the `Allow offline access?` checkbox.
* **Access Token Type**: select `Reference Token`
* **Access Token Lifetime**: change to `36000000`
* **Allowed Identification Scopes**: mark all scopes
* **Allowed API scopes**: mark the `PSC` scope

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

After saving, return to the **Basic Details** tab and on the **App Secret** section click on **Generate**, then **Generate Secret**.
This is the `ResourceOwnerPasswordAppSecret` setting (copy it and save it for later).

## Configuring Lacuna PSC to use GrantID

Once you have followed the steps above to configure GrantID, fill the section **Oidc** of the configuration file:

* **Authority**: the OIDC authority (e.g. *https://login.id.patorum.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.id.patorum.com*)
* **ApiName**: `psc`
* **ClientAppId**: `psc`
* **AppId**: `psc-backend`
* **ResourceOwnerPasswordAppId**: `psc-rop`
* **ApiSecret**: the generated secret of the API connection
* **AppSecret**: the generated secret of the backend application
* **ResourceOwnerPasswordAppSecret**: the generated secret of the ROP application

Example (*.ini* or *.conf* file):

```ini
[Oidc]
Authority=https://login.id.patorum.com
ApiEndpoint=https://api.id.patorum.com
ApiName=psc
ClientAppId=psc
AppId=psc-backend
ResourceOwnerPasswordAppId=psc-rop
ApiSecret=YOUR_API_SECRET
AppSecret=YOUR_BACKEND_APP_SECRET
ResourceOwnerPasswordAppSecret=YOUR_ROP_APP_SECRET
```

Example (environment variables):

```bash
Oidc__Authority=https://login.id.patorum.com
Oidc__ApiEndpoint=https://api.id.patorum.com
Oidc__ApiName=psc
Oidc__ClientAppId=psc
Oidc__AppId=psc-backend
Oidc__ResourceOwnerPasswordAppId=psc-rop
Oidc__ApiSecret=YOUR_API_SECRET
Oidc__AppSecret=YOUR_BACKEND_APP_SECRET
Oidc__ResourceOwnerPasswordAppSecret=YOUR_ROP_APP_SECRET
```

## See also

* [GrantID](../../grant-id/index.md)
