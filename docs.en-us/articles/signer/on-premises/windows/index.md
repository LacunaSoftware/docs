# Signer - Setup on Windows Server

To install an on-premises instance of Signer on Windows Server, first download binaries of the desired version. The latest version available is provided in the link below: 

<br />
<center>
**[Signer 1.26.1 binaries package](https://cdn.lacunasoftware.com/signer/signer-1.26.1.zip)**
</center>
<br />

## Prerequisites

* Windows Server 2012 or newer (any edition)
* SQL Server 2014 or newer (recommended edition Standard or better)
* PKI SDK license (in Base64 format)
* Web PKI license (Base64/binary format)

## Database Requirements

* Database with collation `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`.
* Credentials corresponding to a user with `db_owner` role.

<a name="install-aspnet-core" />

## Installation

1. Install IIS
1. Install .NET Core Hosting Runtime https://aka.ms/dotnetcore-3-1-windowshosting
1. Create folder for IIS site. Example: `C:\inetpub\Signer`
1. Create folder for logs. Example: `C:\Logs`
1. Create site on IIS
1. In the corresponding Application pool:
   * Select Basic Settings and set the .NET CLR version to `No managed code`

     ![Load user profile](../../../../../images/windows/no-managed-code.png)
   * Select Advanced Settings and set load user profile to `True`

     ![Load user profile](../../../../../images/windows/load-user-profile.png)

1. Extract the files in the binaries package to the site folder.

## Configuration

On the installation folder, move the file **appsettings.iis.json** from the folder **config-templates** to the root folder of the site. Then, edit the file
to configure your instance.

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
				"path": "C:\\Logs\\Signer.log",
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

[!include[OIDC config](../../../includes/spa-config/oidc-config.md)]

[!include[PKI config](../../../includes/spa-config/pki-config.md)]

### General Configuration

[!include[General config](../includes/general-config.md)]

[!include[Email config](../../../includes/spa-config/email-config.md)]

## Additional Configuration

Additional settings can be found at the [Signer Settings page](../settings.md).

## Starting up application

1. Start site
1. Access site

## Updating application

> [!NOTE]
> To see if an update will require changing any settings, look in the [Amplia changelog](../../changelog.md) for the configuration changes between the version you are installing and the version you are currently installing (to know how to check the installed version of the system, see [this article](../check-version.md) ).

1. Stop the web site in IIS Manager.
1. Create a backup of database and site folder.
1. Download and extract the contents of the new binaries package to the site folder, overwriting all files.
1. Make any necessary changes to the file `appsettings.iis.json` (see note above on how to know which changes will be required).
1. Start the web site IIS Manager.

> [!NOTE]
> The `appsettings.iis.json` file with your instance settings will be preserved, because in the package there is no file with that name.

## See also
