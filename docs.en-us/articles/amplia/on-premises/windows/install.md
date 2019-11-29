# Installing Amplia on Windows Server

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

Before you start, make sure you have read the section [Planning before installation](../index.md#planning).

To install your own instance of [Amplia](../../index.md) on Windows Server, follow the steps on this article. For other platforms, [click here](../index.md).

## Database operation mode

Amplia can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update (when needed)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrator (using a command line tool)

Granting owner privileges to the application is simpler, while granting only read and write ensures you greater control over the database. The decision
is up to you. If not sure what to choose, we recommend granting owner privileges (option 1), since it makes updating the application easier.

Some of the setup instructions depend on the option you choose.

## Prerequisites

* Windows Server 2016 or newer (any edition)
* SQL Server 2016 or newer (recommended edition Standard or better)
* PKI SDK license (in Base64 format)
* Web PKI license (Base64/binary format) -- only needed if users will issue certificates on their computers (web issuing procedure)
* DNS entries previously created for:
  * Dashboard access
  * CRL publishing (*access domains*)
* (recommended) Valid SSL certificate for the dashboard domain

> [!NOTE]
> This documentation is intended for Windows Servers with UI installed. For "core" installations (shell access only), please contact us.

You will also need a connection string to a **database** previously created having:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with the following database roles:
  * If the application should be owner of the database: `db_owner`
  * If the application should only have read and write permissions: `db_datareader` and `db_datawriter`

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, [click here](prepare-database.md).

## Installation

1. Install IIS
1. https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.2.5-windows-hosting-bundle-installer
   * https://aka.ms/dotnetcore-2-2-windowshosting
1. Create folder for site
1. Create folder for logs
1. Create site
   * Set no managed code
   * Set load user profile to `True`

     ![Load user profile](../../../../../images/windows/load-user-profile.png)

1. Extract files

> [!NOTE]
> If you intend to to use one of the operating system's native key stores, [configure Amplia to use a local user account](configure-app-user.md)

## Configuration

On the installation folder, move the file **appsettings.iis.json** from the folder **config-templates** to the root folder of the site. Then, edit the file
to configure your Amplia instance.

[!include[Database config](../includes/database-config.md)]

### Logging

Under section **Serilog**, configure the application logging:

```json
...
"Serilog": {
	"MinimumLevel": {
		"Default": "Warning",
	},
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "C:\\Logs\\Amplia.log",
				"outputTemplate": "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}",
			}
		}
	],
}
...
```

Change the **path** setting to the log file path.

> [!NOTE]
> Remember to grant full access to the application user on the log folder

<a name="encryption-key-generation" /> <!-- This anchor actually belongs a bit farther below, placing it here is a workaround -->

[!include[General config](../includes/general-config.md)]

To generate the *EncryptionKey*, run the following on a Powershell:

```ps
$k = New-Object byte[] 32;
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($k);
[Convert]::ToBase64String($k);
```

[!include[Common config](../includes/common-config.md)]

## Starting up application

1. Start site
1. Access site

## See also

* [Key Store configuration](../key-stores/index.md)
* [Updating Amplia on Windows Server](update.md)
* [Troubleshooting](troubleshoot/index.md)
