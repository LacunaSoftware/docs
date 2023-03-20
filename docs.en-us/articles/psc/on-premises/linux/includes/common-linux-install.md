Create a local user to run the Lacuna PSC server:

[!include[Create user](../../../../../../includes/psc/linux/create-user.md)]

Create the site folder, download and extract the binaries:

> [!NOTE]
> To test the [next version](../../../changelog.md#vnext) of Lacuna PSC, currently in Release Candidate stage, replace `psc-x.y.z.tar.gz` on the following commands
> with `psc-1.1.0-rc01.tar.gz`. **Beware**: Release Candidate versions are not production-ready and thus should only be installed on staging or test environments!

[!include[Copy files](../../../../../../includes/psc/linux/copy-files.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*lacuna-psc*) can read but not change the files, which is intentional.

Create the configuration file from the given template:

[!include[Move settings template](../../../../../../includes/psc/linux/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the *lacuna-psc* group and can only be changed by the root user. This is important to protect sensitive data stored on the configuration files from unauthorized access.

## Generate a certificate to sign OAuth tokens

Generate a self-signed certificate to sign OAuth tokens issued by the application:

[!include[Generate certificate](../../../../../../includes/psc/linux/gen-cert.md)]

## Configure the trusted roots

Edit the certificate trust configuration file:

[!include[Edit trust](../../../../../../includes/psc/linux/edit-trust.md)]

Add the trusted root certificates as follows:

[!include[Trust sample](../../../../../../includes/spa-config/trust-config-sample.md)]

* The field `Version` must be kept as is above
* The collection `StandardPkis` may contain `Brazil`, `Italy` or `Peru` denoting that the root certificates for each of these countries are to be trusted
* The collection `TrustedRoots` may contain additional trusted CA root certificates encoded in Base64

> [!WARNING]
> This file does not support comments

## Configure Lacuna PSC

Edit the configuration file and follow the instructions on it to configure your Lacuna PSC instance:

[!include[Edit settings](../../../../../../includes/psc/linux/edit-settings.md)]

On the `[General]` section, to fill the `EncryptionKey` setting generate a 256-bit key to encrypt sensitive data stored on the database:

[!include[Generate key](../../../../../../includes/linux/gen-key.md)]

On the `[Amplia]` section, to fill the `ApiKey` setting you must create an application on your existing [Amplia](../../../../amplia/index.md)
instance and generate an API key for it:

[!include[Amplia config](../../includes/amplia-config.md)]

Follow the steps in [Configure OpenID Connect](../../configure-oidc.md) to fill out the `[Oidc]` section.

Fill the remaining settings according to the instructions on the configuration file.

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../../includes/psc/linux/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../../includes/psc/linux/service-definition.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/psc/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/psc/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart lacuna-psc`

To test that the Lacuna PSC server is running, run:

[!include[Test service](../../../../../../includes/psc/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../includes/psc/linux/test-service-output.md)]
