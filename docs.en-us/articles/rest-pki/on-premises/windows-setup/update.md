# Updating Rest PKI on Windows Server

For atualizate your instance from [Rest PKI](../../index.md), follow the instructions from this page.

> [!TIP]
> Before to start, verify the [configuration of atualizations from the database](../database-update.md) from the system.
> Also [check the minimum .NET version required on Windows](netframework-version.md).

1. Create a backup of the database and of the site folder
1. Delete all files on the site folder **EXCEPT THE FILES** `AppSettings.config` and `Connections.config`
1. Extract the contests of the new Rest PKI package ([restpki-1.33.3.zip](https://cdn.lacunasoftware.com/restpki/restpki-1.33.3-rtm.zip)) to the site folder
1. Access the website

> [!NOTE]
> Since the package does not contain files named AppSettings.config and Connections.config, its files with these names containing system settings will be preserved during the operation.

If you see the screen titled "REST PKI on premises", the process is complete.

<a name="db-update" />
If the system is configured to perform manual database model updates, an 
additional procedure may be required to update the database.

> [!NOTE]
> To know in advance if an upgrade will require database upgrade, look at the [Rest PKI Changelog](../../changelog.md) if any 
of the versions between the version you are installing and the one you are installing are marked as requiring database upgrade. 
To learn how to verify the installed version of the system, [see this article](../check-version.md).

In this case, the message "HTTP Error 503.0 - The server is currently undergoing maintenance. Please try again later." when accessing the system as follows:

![HTTP Error 503.0 - The server is currently undergoing maintenance](../../../../../images/rest-pki/maintenance.png)

Then perform [manual database update](../database-update.md#manual-update).

## See too

* [Troubleshooting issues on Rest PKI setup](troubleshoot/index.md)
