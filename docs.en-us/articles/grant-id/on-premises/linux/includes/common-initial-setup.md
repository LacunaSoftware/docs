Grant ID is composed of three components:

* **Identity Service**: contains the business logic and encapsulates access to the database
* **Auth Server**: accessed by end-users during logins, redirects and sign-ups
* **Console**: allows administrators to manage the system

We'll first do some initial setup, then we'll install each component.

### Initial setup

Create a local user to run the components:

[!include[Create user](../../../../../../includes/grant-id/linux/create-user.md)]

Create the folder that will contain the binaries for each component:

[!include[Create bin directory](../../../../../../includes/grant-id/linux/create-bin-dir.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*grantid*) can read but not change the files, which is intended.

Create the folder that will contain the configuration files:

[!include[Create etc directory](../../../../../../includes/grant-id/linux/create-etc-dir.md)]

Create the configuration file from the given template and edit it:

[!include[Create common settings](../../../../../../includes/grant-id/linux/create-settings-common.md)]

Fill the following settings:

* Section **Application**
  * **ProductName**: the name of your Grant ID instance, e.g. *Patorum ID*
  * **UseSSL**: whether the public URLs will use HTTPS (recommended `true`)
  * **UseReverseProxy**: leave this setting as `true` unless you intend to run the components without a reverse proxy
  * **ReverseProxyAddress**: leave this setting commented for now
  * **IdentityServiceUrl**: internal URL of the Identity Service component. Leave this setting as is unless you intend to run the Identity Service on a different local port.
  * **AuthServerUrl**: public URL of the Auth Server component, e.g. *https://patorumid.com*
  * **ConsoleUrl**: public URL of the Console component, e.g. *https://console.patorumid.com*
