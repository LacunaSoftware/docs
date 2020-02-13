Create a local user to run the Amplia server:

[!include[Create user](../../../../../../includes/amplia/linux/create-user.md)]

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

<a name="encryption-key-generation" />

### General settings

Generate a 256-bit key to encrypt CA keys [stored on the database](../../key-stores/database.md):

[!include[Generate key](../../../../../../includes/amplia/linux/gen-key.md)]

Choose a strong password for root access to the dashboard and hash it with the [command-line tool](../../tool/index.md):

[!include[Hash root password](../../../../../../includes/amplia/linux/hash-root-pass.md)]

[!include[General config](../../includes/general-config.md)]

[!include[Bindings config](../../includes/bindings-config.md)]

[!include[Amplia config](../../includes/amplia-config.md)]

[!include[PKI Suite config](../../includes/pki-config.md)]

[!include[Email config](../../includes/email-config.md)]

[!include[OIDC config](../../includes/oidc-config.md)]

[!include[SMS config](../../includes/sms-config.md)]

[!include[Key store config](../../includes/key-store-config.md)]

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
