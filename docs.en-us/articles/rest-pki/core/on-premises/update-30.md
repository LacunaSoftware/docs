# Update Rest PKI Core from 2.x to 3.0

Now that ASP.NET Core 6.0 is deprecated, version [3.0](../changelog.md#v3-0-0) of [Rest PKI Core](../index.md) has been migrated to use ASP.NET Core 8.0, which is
the newest LTS release of ASP.NET Core, [to be supported by Microsoft until November 2026](https://dotnet.microsoft.com/platform/support/policy/dotnet-core#lifecycle).

Because of that, before updating your [on-premises](index.md) instance, you must follow a few extra steps.

## 1. Install the ASP.NET Core Runtime 8.0

Please refer to the *Install the ASP.NET Core Runtime 8.0* section of the installation procedure corresponding to your platform:

<!-- [Windows Server](windows/install.md#install-aspnet-core) -->
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  * [Rocky Linux](linux/install-rocky.md#install-aspnet-core)

> [!TIP]
> It is not necessary to uninstall previous versions of ASP.NET Core Runtime, multiple versions can co-exist in the same system without issues

> [!NOTE]
> On Docker this step is not necessary since the new 3.x image already ships with the ASP.NET Core Runtime 8.0 embedded

## 2. Set an explicit AppDiscriminator

Check if your configuration file contains a setting named `AppDiscriminator` on the `General` section (or `General__AppDiscriminator` if using environment variables).
If there is such a setting and it is filled, skip to the next step. If there is no such setting (or if it has an empty value), proceed with the following instructions.

Open the application log and look for the following entry:

```
Application starting: Lacuna Rest PKI Core (version: *, spaVersion: *, appDiscriminator: 'YOUR_APP_DISCRIMINATOR')
                                                                                          ^^^^^^^^^^^^^^^^^^^^^^
```

Copy the value of the *appDiscriminator* field **without the surrounding single quotes** (on the example above the correct value would be `YOUR_APP_DISCRIMINATOR`,
not `'YOUR_APP_DISCRIMINATOR'`) and add the `AppDiscriminator` setting on the `General` section of your configuration file with that value.

Example (*.ini* or *.conf* file):

```ini
[General]
AppDiscriminator=YOUR_APP_DISCRIMINATOR
```

Example (environment variables):

```sh
General__AppDiscriminator=YOUR_APP_DISCRIMINATOR
```

Next, restart the application and check the logs again. A new "application starting" log should be registered, with no change to the *appDiscriminator* field.

## 3. Update Rest PKI Core

After following the steps above, proceed with the update instructions.

## Troubleshooting certificate errors on SQL Server

Unlike on .NET 6, the new standard on .NET 8 is for the SQL server certificate to be validated. This might cause your instance to crash
when starting, with the following error appearing on the logs:

> Microsoft.Data.SqlClient.SqlException: 'A connection was successfully established with the server, but then an error occurred during the login process. (provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted.)'

In that case, ensure that your SQL Server is configured with a trusted TLS certificate and that it has not expired.

If you prefer to bypass the SQL Server certificate validation, append `;TrustServerCertificate=True` to the database connection string on the configuration file.

## Azure App Services

If your Rest PKI Core instance is hosted on Azure App Services:

1. On the Azure Portal, enter your App Service configuration
1. Click on **Configuration**, then select the **General settings** tab
1. On the *Stack settings* section:
   1. The *Stack* setting should be set to **.NET**
   1. The *.NET version* setting, should be set to **.NET 8 (LTS)**

> [!TIP]
> The *Stack settings* section mentioned above is only shown if the App Service Plan is Windows-based. Otherwise, for Linux-based plans, no changes are needed.
