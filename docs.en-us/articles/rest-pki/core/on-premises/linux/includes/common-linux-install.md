Create a local user to run the Rest PKI Core instance:

[!include[Create user](../../../../../../../includes/rest-pki/core/linux/create-user.md)]

Create the site folder, download and extract the binaries:

> [!NOTE]
> To test the [next version](../../../changelog.md#vnext) of Rest PKI Core, currently in Release Candidate stage, replace `restpkicore-x.y.z.tar.gz` on the following commands
> with `restpkicore-3.3.0-rc12.tar.gz`. **Beware**: Release Candidate versions are not production-ready and thus should only be installed on staging or test environments!

[!include[Copy files](../../../../../../../includes/rest-pki/core/linux/copy-files.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*restpkicore*) can read but not change the files, which is intentional.

Create the configuration file from the given template:

[!include[Move settings template](../../../../../../../includes/rest-pki/core/linux/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the *restpkicore* group and can only be changed by the root user. This is important to protect sensitive data stored on the configuration files from unauthorized access.

## Configure Rest PKI Core

Edit the configuration file to configure your Rest PKI Core instance:

[!include[Edit settings](../../../../../../../includes/rest-pki/core/linux/edit-settings.md)]

<a name="encryption-key-generation" />

On the `[General]` section, to fill the `EncryptionKey` setting generate a 256-bit key to encrypt sensitive data stored on the database:

[!include[Generate key](../../../../../../../includes/rest-pki/core/linux/gen-key.md)]

Also on the `[General]` section, to fill the `RootPasswordHash` setting choose a strong password for root access to the dashboard and hash it:

[!include[Hash root password](../../../../../../../includes/rest-pki/core/linux/hash-root-pass.md)]

> [!NOTE]
> If you wish to enable user management, leave the `RootPasswordHash` setting blank and follow the steps on [Configure OpenID Connect](../../configure-oidc.md) instead

Fill the remaining settings according to the instructions on the configuration file.

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../../../includes/rest-pki/core/linux/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../../../includes/rest-pki/core/linux/service-definition.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../../includes/rest-pki/core/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../../includes/rest-pki/core/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart restpkicore`

To test that the Rest PKI Core instance is running, run:

[!include[Test service](../../../../../../../includes/rest-pki/core/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../../includes/rest-pki/core/linux/test-service-output.md)]
