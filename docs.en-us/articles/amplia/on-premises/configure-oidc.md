# Configure OpenID Connect - Amplia

[Amplia](../index.md) requires a [GrantID](../../grant-id/index.md) subscription.

You can either use a SaaS subscription on [grantid.com](https://grantid.com/) or [run your own instance of GrantID](../../grant-id/on-premises/index.md).

## Configuring GrantID

Log into the GrantID Console portal and follow the instructions below.

### Create an API Connection

On the **Scopes** tab, click on **New API Connection** to create an API connection for the application, providing:

* **Name**: `amplia`
* **Display name**: `Amplia`
* **User Informations (claims)**: check all

### Frontend Application

On the **Applications** tab, click on **New Application** and provide:

* **Name**: `Amplia`
* **App-id**: `amplia`
* **Type**: select `Implicit flow`.

Click the **Settings** tab and set:

* Check the `Allow Access tokens via browser?` checkbox (if not already checked)
* Uncheck the following checkboxes (if checked): `Require consent?`, `Front-channel logout session required?` and `Back-channel logout session required?`
* **Application URL**: the URL of your application. Example: `https://amplia.yourcompany.com`
* **Allowed URLs**:
  * **Redirect**: you must add 4 redirect URLs that are based on your application URL:
    * `<applicationURL>` without trailing slash.
    * `<applicationURL>/silent-refresh.html`
    * `<applicationURL>/private/profile/refresh`
    * `<applicationURL>/private`
  * **CORS origins**: `<applicationURL>` without trailing slash.
  * **Post Logout**: `<applicationURL>` without trailing slash.
* **Allowed Identification Scopes**: check all
* **Allowed API scopes**: check the `Amplia` API scope checkbox
* Check the following checkboxes: `Enable digital certificate login?`, `Prioritize digital certificate login?` and `Require digital certificate login?`

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

### Backend Application

On the **Applications** tab, click on **New Application** again and provide:

* **Name**: `Amplia Backend`
* **App-id**: `amplia-backend`
* **Type**: select `Client credentials`.

Click the **Settings** tab and set:

* **Allowed API scopes**: check the `Manage subscription's users` checkbox.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

After saving, return to the **Basic Details** tab and on the **App Secret** section click on **Generate**, then **Generate Secret**.
This is the `AppSecret` setting (copy it and save it for later).

## Configuring Amplia to use GrantID

Once you have followed the steps above to configure GrantID, fill the section **Oidc** of the configuration file:

* **Authority**: the OIDC authority (e.g. *https://login.id.patorum.com*)
* **ApiEndpoint**: the API endpoint of the OIDC server (e.g. *https://api.id.patorum.com*)
* **ApiName**: `amplia`
* **ClientAppId**: `amplia`
* **AppId**: `amplia-backend`
* **AppSecret**: the generated secret of the backend application
* **RequireHttps** (optional): set to `false` if the GrantID instance does not use HTTPS

Example (*.ini* or *.conf* configuration file):

```ini
[Oidc]
Enabled=True
Authority=https://login.id.patorum.com
ApiEndpoint=https://api.id.patorum.com
ApiName=amplia
ClientAppId=amplia
AppId=amplia-backend
AppSecret=YOUR_BACKEND_APP_SECRET
```

Example (environment variables):

```bash
Oidc__Enabled=True
Oidc__Authority=https://login.id.patorum.com
Oidc__ApiEndpoint=https://api.id.patorum.com
Oidc__ApiName=amplia
Oidc__ClientAppId=amplia
Oidc__AppId=amplia-backend
Oidc__AppSecret=YOUR_BACKEND_APP_SECRET
```

Example (*.json* configuration file):

```json
    ...,
    "Oidc": {
        "Enabled": true,
        "Authority": "https://login.id.patorum.com",
        "ApiEndpoint": "https://api.id.patorum.com",
        "ApiName": "amplia",
        "ClientAppId": "amplia",
        "AppId": "amplia-backend",
        "AppSecret": "YOUR_BACKEND_APP_SECRET"
    },
    ...
```

## Transitioning from root access

If your Amplia instance was initially configured to use root access, once you configure user management and attempt to access the application with your GrantID user,
you will most likely encounter a "no access" page.

This happens because full privileges are given to the first user that logs into the application, which in your case was *not* this user with which your are signing in now,
but rather the root user.

In this case, you must manually grant yourself privileges through the database. Start by locating your own user `Id`:

```sql
SELECT "Id", "Name", "EmailAddress"
FROM "Agents"
WHERE "Subject" IS NOT NULL
```

Then, grant the *Owner* sys admin role to yourself (copy your user `Id` to the query below):

<!--

NOTE TO DOCUMENTERS

When copying the query below over to some other application, refer to the app's source code to check if, like Amplia, it has `RootRoles.Owner = 0`. Some applications
actually have `RootRoles.Owner = 1`. In such cases, the correct `RootRoleFlags` value on the query is actually **2** !

-->

```sql
UPDATE "Agents"
SET "RootRoleFlags" = 1
WHERE "Id" = 'YOUR-USER-ID'
```

## See also

* [GrantID](../../grant-id/index.md)
