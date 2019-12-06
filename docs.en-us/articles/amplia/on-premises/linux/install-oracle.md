# Installing Amplia on Oracle Linux

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Before you start, make sure you have read the section [Planning before installation](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Prerequisites

* Oracle Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

## Install the ASP.NET Core Runtime

[!include[Proceed as root](includes/su.md)]

Register the Microsoft key and package repository (this only needs to be done once per machine), then install the ASP.NET Core runtime package:

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/oracle/install-aspnetcore.md)]

To test the installation, run:

[!include[Test ASP.NET Core installation](../../../../../includes/amplia/linux/test-aspnetcore.md)]

The expected output is similar to:

[!include[Expected output](../../../../../includes/amplia/linux/test-aspnetcore-output.md)]

> [!TIP]
> For alternative ways to install the ASP.NET Core Runtime, see [this page](https://docs.microsoft.com/en-us/dotnet/core/install/runtime?pivots=os-linux)

## Install Amplia

> [!NOTE]
> Some steps use the `nano` command, which might not be installed on your system. Feel free to replace the command by `vi` or install nano with `yum install nano`

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

> [!NOTE]
> If you prefer to use Apache instead of Nginx, [see this article](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Install Nginx (if not already installed):

[!include[Install nginx](../../../../../includes/amplia/oracle/install-nginx.md)]

[!include[Test nginx](includes/test-nginx.md)]

Disable the default Nginx site:

[!include[Disable default site](../../../../../includes/amplia/centos/disable-default-site.md)]

Create a site configuration file for Amplia:

[!include[Create site](../../../../../includes/amplia/centos/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Allow Nginx to access the Amplia service:

[!include[Allow service access](../../../../../includes/amplia/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Allow HTTP and HTTPS traffic to your system (if not already allowed):

[!include[Allow traffic](../../../../../includes/amplia/centos/allow-http.md)]

## See also

* [Updating Amplia on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
