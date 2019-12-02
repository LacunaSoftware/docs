# Installing Amplia on Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Before you start, make sure you have read the section [Planning before installation](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Prerequisites

* Ubuntu x64 version 16.04, 18.04 or 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

## Install the ASP.NET Core Runtime

Click the link below, then **select your Ubuntu version** and follow the instructions:

<br />
<center>
<a href="https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1804" target="_blank">Install ASP.NET Core Runtime on Linux Ubuntu</a>
</center>
<br />

> [!TIP]
> Ignore the footnote on the instructions about installing just the .NET Core runtime. You need the full "runtime bundle". In other words, make sure you get the package `aspnetcore-runtime-xxx`, not ~~dotnet-runtime-xxx~~

## Install Amplia

Create a local user to run the Amplia server:

[!include[Create user](../../../../../includes/amplia/ubuntu/create-user.md)]

Create the site folder, download and extract the binaries:

[!include[Copy files](../../../../../includes/amplia/ubuntu/copy-files.md)]

> [!NOTE]
> Site binaries can be read by any user and can only be changed by root users. This means that the application user (*amplia*) can read but not change the files, which is intended.

Create the configuration file from the given template:

[!include[Move settings template](../../../../../includes/amplia/ubuntu/move-settings-template.md)]

> [!NOTE]
> Configuration files can only be read by members of the *amplia* group and can only be changed by root users. This is important to protect sensitive data stored on the configuration files from unauthorized access.

## Configure Amplia

Edit the configuration file to configure your Amplia instance:

[!include[Edit settings](../../../../../includes/amplia/ubuntu/edit-settings.md)]

[!include[Database config](../includes/database-config.md)]

### Logging

Under section **Serilog**, configure the application logging:

[!include[Log configuration](../../../../../includes/amplia/ubuntu/log-config.md)]

If desired, change the **path** setting to the log file path.

> [!NOTE]
> If you change the default log file path, remember to grant write permissions to the application user (*amplia*) to the directory

<a name="encryption-key-generation" /> <!-- This anchor actually belongs a bit farther below, placing it here is a workaround -->

[!include[General config](../includes/general-config.md)]

To generate the *EncryptionKey*, run the following command:

[!include[Generate key](../../../../../includes/amplia/ubuntu/gen-key.md)]

[!include[Common config](../includes/common-config.md)]

## Set up a daemon

Create the service definition file:

[!include[Create service](../../../../../includes/amplia/ubuntu/create-service.md)]

Enter the following:

[!include[Service definition](../../../../../includes/amplia/ubuntu/service-definition.md)]

> [!NOTE]
> If you intend to use Elliptic Curve (EC) keys, uncomment the line marked above. In that case, you also need to make sure your server has OpenSSL 1.1 installed.

Save the file and enable the service:

[!include[Enable service](../../../../../includes/amplia/ubuntu/enable-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../includes/amplia/ubuntu/enable-service-output.md)]

If necessary, restart the service: `sudo systemctl restart amplia`

To test that the Amplia server is running, run:

[!include[Test service](../../../../../includes/amplia/ubuntu/test-service.md)]

The expected output is something like:

[!include[Expected output](../../../../../includes/amplia/ubuntu/test-service-output.md)]

## Set up a reverse proxy server

> [!NOTE]
> If you prefer to use Apache instead of Nginx, [see this article](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Install Nginx (if not already installed):

[!include[Install nginx](../../../../../includes/amplia/ubuntu/install-nginx.md)]

Disable the default Nginx site:

[!include[Disable default site](../../../../../includes/amplia/ubuntu/disable-default-site.md)]

Create a site configuration file for Amplia:

[!include[Create site](../../../../../includes/amplia/ubuntu/create-site.md)]

Enter the following, replacing the dashboard domain on the `server_name` entry:

[!include[Site definition](../../../../../includes/amplia/ubuntu/site-definition.md)]

> [!TIP]
> Ideally, your site configuration should contain the entries `ssl_certificate` and `ssl_certificate_key` with a valid SSL certificate. This configuration is outside of the scope of these instructions.

Enable the site, test the Nginx configuration and reload it:

[!include[Enable site](../../../../../includes/amplia/ubuntu/enable-site.md)]

Test the site:

[!include[Test site](../../../../../includes/amplia/ubuntu/test-site.md)]

## See also

* [Updating Amplia on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
