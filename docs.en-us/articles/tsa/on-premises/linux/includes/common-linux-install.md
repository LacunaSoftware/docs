Create a local user to run the Lacuna TSA server:

[!include[Create user](../../../../../../includes/tsa/linux/create-user.md)]

Create the site folder, download and extract the binaries:

<!--
> [!NOTE]
> To test the [next version](../../../changelog.md#vnext) of Lacuna TSA, currently in Release Candidate stage, replace `tsa-x.y.z.tar.gz` on the following commands
> with `tsa-1.2.0-rc03.tar.gz`. **Beware**: Release Candidate versions are not production-ready and thus should only be installed on staging or test environments!
-->

[!include[Copy files](../../../../../../includes/tsa/linux/copy-files.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*lacuna-tsa*) can read but not change the files, which is intentional.

Create the configuration file from the given template:

[!include[Move settings template](../../../../../../includes/tsa/linux/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the *lacuna-tsa* group and can only be changed by the root user. This is important to protect sensitive data stored on the configuration files from unauthorized access.

## Configure Lacuna TSA

Edit the configuration file and follow the instructions on it to configure your Lacuna TSA instance:

[!include[Edit settings](../../../../../../includes/tsa/linux/edit-settings.md)]

If your TSA key is hosted on an Amplia instance, you will need to fill the `[Amplia]` section. To fill the `ApiKey` setting you must create an application on your existing
Amplia instance and generate an API key for it:

[!include[Amplia config](../../includes/amplia-config.md)] 

Fill the remaining settings according to the instructions on the configuration file.

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../../includes/tsa/linux/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../../includes/tsa/linux/service-definition.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/tsa/linux/start-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/tsa/linux/start-service-output.md)]

If necessary, restart the service: `systemctl restart lacuna-tsa`

To test that the Lacuna TSA server is running, run:

[!include[Test service](../../../../../../includes/tsa/linux/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../../includes/tsa/linux/test-service-output.md)]
