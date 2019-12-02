# Installing Amplia on Windows Server

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

Before you start, make sure you have read the section [Planning before installation](../index.md#planning).

To install your own instance of [Amplia](../../index.md) on Windows Server, follow the steps on this article. For other platforms, [click here](../index.md).

[!include[Database operation mode](../includes/database-mode.md)]

## Prerequisites

* Windows Server 2016 or newer (any edition)

[!include[Common prerequisites](../includes/common-requisites.md)]

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
