Create a local user to run the Amplia server:

[!include[Create user](../../../../../../includes/amplia/linux/create-user.md)]

Create the site folder, download and extract the binaries:

> [!NOTE]
> To test the [next version](../../../changelog.md#vnext) of Amplia, currently in Release Candidate stage, replace `amplia-x.y.z.tar.gz` on the following commands
> with `amplia-4.14.0-rc01.tar.gz`. **Beware**: Release Candidate versions are not production-ready and thus should only be installed on staging or test environments!

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

<a name="encryption-key-generation" />

On the `[General]` section, to fill the `EncryptionKey` setting generate a 256-bit key to encrypt sensitive data stored on the database:

[!include[Generate key](../../../../../../includes/amplia/linux/gen-key.md)]

Also on the `[General]` section, to fill the `RootPasswordHash` setting choose a strong password for root access to the dashboard and hash it:

[!include[Hash root password](../../../../../../includes/amplia/linux/hash-root-pass.md)]

> [!NOTE]
> If you wish to enable user management, leave the `RootPasswordHash` setting blank and follow the steps on [Configure OpenID Connect](../../configure-oidc.md) instead

Fill the remaining settings according to the instructions on the configuration file.

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../../includes/amplia/linux/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../../includes/amplia/linux/service-definition.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/amplia/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/amplia/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart amplia`

To test that the Amplia server is running, run:

[!include[Test service](../../../../../../includes/amplia/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../includes/amplia/linux/test-service-output.md)]
