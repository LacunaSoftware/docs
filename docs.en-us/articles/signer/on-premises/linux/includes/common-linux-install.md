Create a local user to run the Signer application server:

[!include[Create user](../../../../../../includes/signer/linux/create-user.md)]

Create the site folder, download and extract the binaries:

[!include[Copy files](../../../../../../includes/signer/linux/copy-files.md)]

> [!NOTE]
> The site files can be read by any user but can only be changed by users with high permissions. This means that the application user (*signer*)
> you can read the files but you cannot change them (this is intentional).

Create the Signer configuration file from the template provided:

[!include[Move settings template](../../../../../../includes/signer/linux/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the * signer * group and can only be changed by users with elevated permissions. This is important to protect information
> confidential information stored in the configuration file of other users of the machine.

## Configure Signer

Edit the configuration file to configure your Signer instance:

[!include[Edit settings](../../../../../../includes/signer/linux/edit-settings.md)]

[!include[Database config](../../../../includes/spa-config/database-config.md)]

<a name="encryption-key-generation" />

### General settings

Generate a 256-bit key to encrypt secrets stored in the database:

[!include[Generate key](../../../../../../includes/signer/linux/gen-key.md)]

[!include[General config](../../includes/general-config.md)]

[!include[Bindings config](../../../../includes/spa-config/bindings.md)]

[!include[PKI Suite config](../../../../includes/spa-config/pki-config.md)]

[!include[Email config](../../../../includes/spa-config/email-config.md)]

[!include[OIDC config](../../../../includes/spa-config/oidc-config.md)]

## Configure a *daemon*

Create the service definition file:

[!include[Create service](../../../../../../includes/signer/linux/create-service.md)]

Type the following:

[!include[Service definition](../../../../../../includes/signer/linux/service-definition.md)]

Save the file, enable the service and start it:

[!include[Start service](../../../../../../includes/signer/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/signer/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart signer`

To test whether the Signer server is running, run:

[!include[Test service](../../../../../../includes/signer/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../includes/signer/linux/test-service-output.md)]
