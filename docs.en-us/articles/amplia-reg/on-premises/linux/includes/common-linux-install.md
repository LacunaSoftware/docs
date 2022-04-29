Create a local user to run the Amplia Reg server:

[!include[Create user](../../../../../../includes/amplia-reg/linux/create-user.md)]

Create the site folder, download and extract the binaries:

[!include[Copy files](../../../../../../includes/amplia-reg/linux/copy-files.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*ampliareg*) can read but not change the files, which is intentional.

Create the configuration file from the given template:

[!include[Move settings template](../../../../../../includes/amplia-reg/linux/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the *ampliareg* group and can only be changed by the root user. This is important to protect sensitive data stored on the configuration files from unauthorized access.

## Configure Amplia Reg

Edit the configuration file and follow the instructions on it to configure your Amplia Reg instance:

[!include[Edit settings](../../../../../../includes/amplia-reg/linux/edit-settings.md)]

To fill the `EncryptionKey` setting under the `[General]` section, generate a 256-bit key to encrypt sensitive data stored on the database:

[!include[Generate key](../../../../../../includes/linux/gen-key.md)]

To fill the `RootPasswordHash` setting under the `[General]` section, choose a strong password for root access to the dashboard and hash it:

[!include[Hash root password](../../../../../../includes/amplia-reg/linux/hash-root-pass.md)]

To fill the `ApiKey` setting under the `[Amplia]` section, you must create an application on your existing [Amplia](../../../../amplia/index.md)
instance (which is a prerequisite) and generate an API key for it:

[!include[Amplia config](../../includes/amplia-config.md)]

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../../includes/amplia-reg/linux/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../../includes/amplia-reg/linux/service-definition.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/amplia-reg/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/amplia-reg/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart ampliareg`

To test that the Amplia Reg server is running, run:

[!include[Test service](../../../../../../includes/amplia-reg/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../includes/amplia-reg/linux/test-service-output.md)]
