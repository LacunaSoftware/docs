# Updating Amplia on Windows Server

To update your instance of [Amplia](../../index.md), follow the instructions on that page.

> [!NOTE]
> To see if an update will require settings, look in the [Amplia changelog](../../changelog.md) for the configuration changes between the version you are installing and the version you are currently installing (how to check the installed version of the system, see [this article](../check-version.md) ).

1. Stop the web site in IIS Manager.
1. Create a backup of database and site folder.
1. Extract the contents of the new package ([amplia-2.14.1.zip] (https://cdn.lacunasoftware.com/amplia/amplia-2.14.1.zip)) to the site folder, overwriting all files.
1. Make any necessary change to the file `appsettings.iis.json` (see above how to know which changes will require).
1. Start the web site IIS Manager.

> [!NOTE]
> The `appsettings.iis.json` file with your instance settings will be preserved, because in the package there is no file with that name.

## See also

* [Installing Amplia on Windows Server](install.md)
* [Troubleshooting](troubleshoot/index.md)
