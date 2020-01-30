# Updating Grant ID on Linux

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

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
