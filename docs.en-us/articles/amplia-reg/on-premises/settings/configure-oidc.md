# Configure OpenID Connect - Amplia Reg

[Amplia Reg](../index.md) requires a [GrantID](../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../grant-id/on-premises/index.md).

## Configuring GrantID

Log into the GrantID Console portal and follow the instructions below.

### Subscription creation

When creating the subscription as part of the [GrantID post-installation steps](../../grant-id/on-premises/post-install.md), make sure to select
as the **Username type**:

* `CPF` for Brazilian instances
* `Custom Information` for non-Brazilian instances

### Create an API Connection

On the **Scopes** tab, click on **New API Connection** to create an API connection for the application, providing:

* **Name**: `amplia-reg`
* **Display name**: `Amplia Reg`
* **User Informations (claims)**: check all

### Frontend Application

On the **Applications** tab, click on **New Application** and provide:

* **Name**: `Amplia Reg`
* **App-id**: `amplia-reg`
* **Type**: select `Implicit flow`.

Click the **Settings** tab and set:

* Check the `Allow Access tokens via browser?` checkbox (if not already checked)
* Uncheck the following checkboxes (if checked): `Require consent?`, `Front-channel logout session required?` and `Back-channel logout session required?`
* **Application URL**: the URL of your application. Example: `https://ampliareg.yourcompany.com`
* **Allowed URLs**:
  * **Redirect**: you must add 4 redirect URLs that are based on your application URL:
    * `<applicationURL>` without trailing slash.
    * `<applicationURL>/silent-refresh.html`
    * `<applicationURL>/private/profile/refresh`
    * `<applicationURL>/private`
  * **CORS origins**: `<applicationURL>` without trailing slash.
  * **Post Logout**: `<applicationURL>` without trailing slash.
* **Allowed Identification Scopes**: check all
* **Allowed API scopes**: check the `Amplia Reg` API scope checkbox
* Check the following checkboxes: `Enable digital certificate login?`, `Prioritize digital certificate login?` and `Require digital certificate login?`

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

### Backend Application

On the **Applications** tab, click on **New Application** again and provide:

* **Name**: `Amplia Reg Backend`
* **App-id**: `amplia-reg-backend`
* **Type**: select `Client credentials`.

Click the **Settings** tab and set:

* **Allowed API scopes**: check the `Manage subscription's users` checkbox.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

After saving, return to the **Basic Details** tab and on the **App Secret** section click on **Generate**, then **Generate Secret**.
This is the `AppSecret` setting (copy it and save it for later).

## Configuring Amplia Reg to use GrantID

Once you have followed the steps above to configure GrantID, fill the section **Oidc** of the configuration file:

* **Authority**: the OIDC authority (e.g. *https://login.id.patorum.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.id.patorum.com*)
* **ApiName**: `amplia-reg`
* **ClientAppId**: `amplia-reg`
* **AppId**: `amplia-reg-backend`
* **AppSecret**: the generated secret of the backend application
* **RequireHttps** (optional): set to `false` if the GrantID instance does not use HTTPS

Example (*.ini* or *.conf* file):

```ini
[Oidc]
Authority=https://login.id.patorum.com
ApiEndpoint=https://api.id.patorum.com
ApiName=amplia-reg
ClientAppId=amplia-reg
AppId=amplia-reg-backend
AppSecret=YOUR_BACKEND_APP_SECRET
```

Example (environment variables):

```bash
Oidc__Authority=https://login.id.patorum.com
Oidc__ApiEndpoint=https://api.id.patorum.com
Oidc__ApiName=amplia-reg
Oidc__ClientAppId=amplia-reg
Oidc__AppId=amplia-reg-backend
Oidc__AppSecret=YOUR_BACKEND_APP_SECRET
```

<a name="disable-sign-up" />

## Disabling sign up

After you have configured OIDC on Amplia Reg, go ahead and sign in to Amplia Reg. As part of this process, you will need to register, thus creating the very first user
account. Once you have created an account, follow the steps below to disable further account creations (which will henceforth be created exclusively through Amplia Reg's
user management):

1. On the **Applications** tab, click on the **Amplia Reg** application
1. Click the **Settings** tab
1. Check the `Disable sign up in login page?` checkbox
1. Click the **Save** button at the end of the page

## See also

* [GrantID](../../grant-id/index.md)
