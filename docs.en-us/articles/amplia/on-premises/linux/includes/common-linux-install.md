Create a local user to run the Amplia server:

[!include[Create user](../../../../../../includes/amplia/linux/create-user.md)]

Create a directory to hold the application logs:

[!include[Create log directory](../../../../../../includes/amplia/linux/create-log-dir.md)]

Create the site folder, download and extract the binaries:

[!include[Copy files](../../../../../../includes/amplia/linux/copy-files.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*amplia*) can read but not change the files, which is intentional.

Create the configuration file from the given template:

[!include[Move settings template](../../../../../../includes/amplia/linux/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the *amplia* group and can only be changed by the root user. This is important to protect sensitive data stored on the configuration files from unauthorized access.

## Configure Amplia

Edit the configuration file to configure your Amplia instance:

[!include[Edit settings](../../../../../../includes/amplia/linux/edit-settings.md)]

[!include[Database config](../../includes/database-config.md)]

### Logging

Under section **Serilog**, configure the application logging:

[!include[Log configuration](../../../../../../includes/amplia/linux/log-config.md)]

If desired, change the **path** setting to the log file path.

> [!NOTE]
> If you change the default log file path, remember to grant write permissions to the application user (*amplia*) to the directory

<a name="encryption-key-generation" /> <!-- This anchor actually belongs a bit farther below, placing it here is a workaround -->

[!include[General config](../../includes/general-config.md)]

To generate the *EncryptionKey*, run the following command:

[!include[Generate key](../../../../../../includes/amplia/linux/gen-key.md)]

[!include[Common config](../../includes/common-config.md)]

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../../includes/amplia/linux/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../../includes/amplia/linux/service-definition.md)]

> [!NOTE]
> If you intend to use Elliptic Curve (EC) keys, uncomment the line marked above. In that case, you also need to make sure your server has OpenSSL 1.1 installed.

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/amplia/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/amplia/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart amplia`

To test that the Amplia server is running, run:

[!include[Test service](../../../../../../includes/amplia/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../includes/amplia/linux/test-service-output.md)]
