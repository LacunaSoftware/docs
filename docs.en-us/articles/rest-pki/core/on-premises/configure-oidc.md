﻿# Configure OpenID Connect - Rest PKI Core

To perform user management, [Rest PKI Core](../index.md) requires an Open ID Connect (OIDC) server, more specifically a [GrantID](../../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../../grant-id/on-premises/index.md).

## Configuring GrantID

Log into the GrantID Console portal and follow the instructions below.

### Create an API Connection

On the **Scopes** tab, click on **New API Connection** to create an API connection for the application, providing:

* **Name**: `restpkicore`
* **Display name**: `Rest PKI Core`
* **User Informations (claims)**: check all

### Frontend Application

On the **Applications** tab, click on **New Application** and provide:

* **Name**: `Rest PKI Core`
* **App-id**: `restpkicore`
* **Type**: select `Implicit flow`.

Click the **Settings** tab and set:

* Check the `Allow Access tokens via browser?` checkbox (if not already checked)
* Uncheck the following checkboxes (if checked): `Require consent?`, `Front-channel logout session required?` and `Back-channel logout session required?`
* **Application URL**: the URL of your application. Example: `https://restpkicore.yourcompany.com`
* **Allowed URLs**:
  * **Redirect**: you must add 4 redirect URLs that are based on your application URL:
    * `<applicationURL>` without trailing slash.
    * `<applicationURL>/silent-refresh.html`
    * `<applicationURL>/private/profile/refresh`
    * `<applicationURL>/private`
  * **CORS origins**: `<applicationURL>` without trailing slash.
  * **Post Logout**: `<applicationURL>` without trailing slash.
* **Allowed Identification Scopes**: check all
* **Allowed API scopes**: check the `Rest PKI Core` API scope checkbox
* Check the following checkboxes: `Enable digital certificate login?`, `Prioritize digital certificate login?` and `Require digital certificate login?`

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

### Backend Application

On the **Applications** tab, click on **New Application** again and provide:

* **Name**: `Rest PKI Core Backend`
* **App-id**: `restpkicore-backend`
* **Type**: select `Client credentials`.

Click the **Settings** tab and set:

* **Allowed API scopes**: check the `Manage subscription's users` checkbox.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

After saving, return to the **Basic Details** tab and on the **App Secret** section click on **Generate**, then **Generate Secret**.
This is the `AppSecret` setting (copy it and save it for later).

## Configuring Rest PKI Core to use GrantID

Once you have followed the steps above to configure GrantID, fill the section **Oidc** of the configuration file:

* **Authority**: the OIDC authority (e.g. *https://login.id.patorum.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.id.patorum.com*)
* **ApiName**: `restpkicore`
* **ClientAppId**: `restpkicore`
* **AppId**: `restpkicore-backend`
* **AppSecret**: the generated secret of the backend application
* **RequireHttps** (optional): set to `false` if the GrantID instance does not use HTTPS

Example (*.ini* or *.conf* configuration file):

```ini
[Oidc]
Enabled=True
Authority=https://login.id.patorum.com
ApiEndpoint=https://api.id.patorum.com
ApiName=restpkicore
ClientAppId=restpkicore
AppId=restpkicore-backend
AppSecret=YOUR_BACKEND_APP_SECRET
```

Example (environment variables):

```bash
Oidc__Enabled=True
Oidc__Authority=https://login.id.patorum.com
Oidc__ApiEndpoint=https://api.id.patorum.com
Oidc__ApiName=restpkicore
Oidc__ClientAppId=restpkicore
Oidc__AppId=restpkicore-backend
Oidc__AppSecret=YOUR_BACKEND_APP_SECRET
```

## See also

* [GrantID](../../grant-id/index.md)
