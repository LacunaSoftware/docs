# Configure SPA Applications

The majority of Lacuna Software's web applications are SPA applications that require a specific setup on GrantID to enable user management, namely:

* [Rest PKI Core](../../rest-pki/core/index.md)
* [Signer](../../signer/index.md)
* [Amplia](../../amplia/index.md)
* [Amplia Reg](../../amplia-reg/index.md)
* [Scanner](../../scanner/index.md)
* [Digiploma](../../digiploma/index.md)

To configure one of these applications, log into the GrantID Console portal and follow the instructions below.

> [!NOTE]
> Please refer to each application's OIDC config documentation to check if there are any particularities for using GrantID with that application

## Create a Subscription 

> [!TIP]
> You may skip this step if you already have a subscription created.

Create a subscription by providing: 

* **Name**: the name of the subscription.
* **Namespace**: unique identifier for this subscription. It will be used to construct the Subscription URL.

The subscription URL is always a subdomain of the GrantID (AuthServer) URL: `https://<sub_namespace>.<auth_server_domain>`

Add DNS records pointing the generated subscription URL to your GrantID instance (AuthServer).

To test your settings, access: `https://<subscription_url>/.well-known/openid-configuration` and verify that a JSON is displayed.

## Create a Custom Claim for CPF

> [!TIP]
> You may skip this step if your application does not require CPF information or the claim was already created.

On the **Scopes** tab, click on **New Claim** to create a custom Claim, providing: 

* **Name** (type): the name of your custom claim. Suggestion: `cpf`. This is referred in installation pages as the `OIDC CpfClaim` setting.
* **Display name**: the display name of your custom claim. Suggestion: `CPF`.
* **Validation Options**: the type of validation to use when the value of this claim is provided by a user. Set it to `Cpf`.
* **Unique**: you may select it as Unique or not according to your application configuration/requirements. If it is not marked as unique it is recommended
to select the `Visible in profile page?` and `Display in register page?` options.


## Create a Custom Identification Scope

> [!TIP]
> You may skip this step if skipped the previous step.

On the **Scopes** tab, click on **New Identification Scope** to create a Custom Identification Scope so that identity tokens contain the information of the custom claim created, providing:

* **Name**: the name of the identification scope. Suggestion: `<sub-namespace>-cpf`. This and other required identification scopes should be set in the `OIDC Custom Scopes` setting as described in installation pages.
* **Display name**: the display name of the scope. Suggestion: `CPF`.
* **User Information**: Select the checkbox correspoding to the claim created in the previous step.

## Create an API Connection

On the **Scopes** tab, click on **New API Connection** to create an API connection for the application, providing:

* **Name**: the name of the API connection. Suggestion: `<my-app-name>-api`. This is referred in installation pages as the `OIDC ApiName`.
* **Display name**: the display name of your API (shown on consent screens if enabled). Suggestion: `<My App Name> API`.

After the connection is created expand it and edit the API Scope to add informations that you want to include in the access tokens issued for this API.
Choose all informations including any custom identification scopes.

## Create the Applications

Each SPA Application requires two applications registered on GrantID, one for frontend login and another to access GrantID User management APIs (backend).

### Frontend Application

On the **Applications** tab, click on **New Application** and provide:

* **Name**: name of this application on GrantID. Suggestion: `<My App Name>`
* **App-id**: this is a unique name across GrantID for the application. This is referred in installation pages as the `OIDC ClientAppId`.
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
* **Allowed Identification Scopes**: select the information you want to include in Identity Tokens. Select at least: 
  * `User identifier (sub)`
  * `User profile (name, email, phone)`
  * `Name`
  * `Email` 
  * `Phone number` 
  * `Username`
  * `CPF` (if created as Custom Identification Scope)
* **Allowed API scopes**: select the API connection created.
* **Required Claims**: select the custom claim created (CPF) if it is required that all users in application have this information.
* **Login Options**: you may enable digital certificate login by selecting the corresponding checkbox. 
* It is recommended to select the option `Verify user's email` so only verified email users are allowed to complete the login process.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

### Backend Application

On the **Applications** tab, click on **New Application** again and provide:

* **Name**: name of this application on GrantID. Suggestion: `<My App Name> Backend`
* **App-id**: this is a unique name across GrantID for the application. This is referred in installation pages as the `OIDC AppId` setting.
* **Type**: select `Client credentials`.

In the application details, choose the Settings tab to set:

* **Allowed API scopes**: select the `Manage subscription's users` scope.

> [!WARNING]
> Don't forget to save your changes by clicking the button at the end of the page.

After saving, return to the **Basic Details** tab and on the **App Secret** section click on **Generate**, then **Generate Secret**.
This is referred in installation pages as the `OIDC AppSecret` setting.
