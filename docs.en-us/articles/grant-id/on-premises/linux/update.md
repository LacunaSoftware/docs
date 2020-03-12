# Updating GrantID on Linux

Follow these steps to update an [on-premises](../index.md) instance of [GrantID](../../index.md) installed on Linux.

[!include[Proceed as root](../../../includes/linux/su.md)]

Download and extract the distribution package to its own directory, then enter it:

[!include[Update steps](../../../../../includes/grant-id/linux/download-package.md)]

Stop the services:

[!include[Stop services](../../../../../includes/grant-id/linux/stop-services.md)]

Remove the old binaries and copy over the new binaries:

[!include[Update binaries](../../../../../includes/grant-id/linux/update-binaries.md)]

Start the services again:

[!include[Start services](../../../../../includes/grant-id/linux/start-services.md)]

## See also

* [Setup on Linux](index.md)
* [Troubleshooting](troubleshoot/index.md)
