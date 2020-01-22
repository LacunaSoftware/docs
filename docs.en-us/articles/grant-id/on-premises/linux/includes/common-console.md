We'll now install the **Console** component. First, copy the binaries:

[!include[Copy Console files](../../../../../../includes/grant-id/linux/copy-files-console.md)]

Create the configuration file from the given template and edit it:

[!include[Create Console settings](../../../../../../includes/grant-id/linux/create-settings-console.md)]

Fill the following settings:

* Section **Logging**: ?
* Section **Serilog**: ?
* Section **Application**
  * **EnableExternalFingerprintValidationConfiguration**: ?
  * **EnableExternalTokenValidationConfiguration**: ?

Create the service definition file:

[!include[Create Console daemon](../../../../../../includes/grant-id/linux/create-daemon-console.md)]

Enter the following:

[!include[Console daemon definition](../../../../../../includes/grant-id/linux/daemon-definition-console.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/grant-id/linux/start-console.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-console.md)]

If necessary, restart the service: `systemctl restart grantid-console`

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-daemon-console.md)]

The source for an HTML document should be outputted.
