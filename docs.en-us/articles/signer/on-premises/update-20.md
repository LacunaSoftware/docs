# Updating Signer from 1.x to 2.x

Before updating your [on-premises](index.md) instance from version 1.x to a 2.x version, you must follow a few extra steps.

## 1. Install the ASP.NET Core Runtime 8.0

Please refer to the *Install the ASP.NET Core Runtime 8.0* section of the installation procedure corresponding to your platform:

* Windows: Install <a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.15-windows-hosting-bundle-installer" target="_blank">NET 8.0 Hosting Bundle</a>
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  <!-- [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core) -->
  <!-- [Oracle Linux](linux/install-oracle.md#install-aspnet-core) -->

> [!TIP]
> It is not necessary to uninstall previous versions of ASP.NET Core Runtime, multiple versions can co-exist in the same system without issues

> [!NOTE]
> On Docker this step is not necessary since the new 2.x image already ships with the ASP.NET Core Runtime 8.0 embedded

## 2. Set an explicit AppDiscriminator

Check if your configuration file contains a setting named `AppDiscriminator` on the `General` section (or `General__AppDiscriminator` if using environment variables).
If there is such a setting and it is filled, skip to the next step. If there is no such setting (or if it has an empty value), proceed with the following instructions.

Open the application log and look for the following entry:

```
Application starting: Lacuna Signer (version: *, spaVersion: *, appDiscriminator: 'YOUR_APP_DISCRIMINATOR')
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

## 3. Serilog Changes

Some Serilog parameters have changed because the library was updated. Check the section `Serilog` of your app settings and make changes according to the directions below:

* Windows:
  * If you have `RollingFile` specified, replace it with `File` and the property `pathFormat` with `path`. In order to maintain *rolling* behavior add `"rollingInterval": "Day"`.
* Azure:
  * If you are hosting Signer on Azure (and have the `ASPNETCORE_ENVIRONMENT` setting set to `Azure`), default Serilog settings so now it's only required to define the `Serilog__WriteTo__0__Args__connectionString` property in order to direct logs to a table of a Storage Account.
  * If you have `Serilog__WriteTo__0__Name` set to `AzureTableStorageWithProperties`, remove it or replace it with `AzureTableStorage`.

## 4. Database Changes

The SQL Server minimum version was updated to SQL Server 2016 (13.x). To revert the compatibility to SQL Server 2014, add the setting `SqlServer__CompatibilityLevel` with value `120`.

## 5. Update Signer

After following the steps above, proceed with the update instructions.

## Troubleshooting certificate errors on SQL Server

Unlike on .NET 6, the new standard on .NET 8 is for the SQL server certificate to be validated. This might cause your instance to crash
when starting, with the following error appearing on the logs:

> Microsoft.Data.SqlClient.SqlException: 'A connection was successfully established with the server, but then an error occurred during the login process. (provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted.)'

In that case, ensure that your SQL Server is configured with a trusted TLS certificate and that it has not expired.

If you prefer to bypass the SQL Server certificate validation, append `;TrustServerCertificate=True` to the database connection string on the configuration file.

## Troubleshooting Database timeout after update

If you experience an application error after updating and the log indicates that there was a timeout applying database migrations, you should run the command line utility 
to manually trigger migrations with an increased timeout parameter:

1- Stop the application.
1- Navigate to the application binaries folder.
1- Execute the command below:
```
dotnet Lacuna.Signer.Site.dll -- update-db AddFontSize --timeout 6000
```
1- Restart the application.

## Azure App Services

If your Amplia instance is hosted on Azure App Services:

1. On the Azure Portal, enter your App Service configuration
1. Click on **Configuration**, then select the **General settings** tab
1. On the *Stack settings* section:
   1. The *Stack* setting should be set to **.NET**
   1. The *.NET version* setting, should be set to **.NET 8 (LTS)**

> [!TIP]
> The *Stack settings* section mentioned above is only shown if the App Service Plan is Windows-based. Otherwise, for Linux-based plans, no changes are needed.
