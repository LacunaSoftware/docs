# Installing Amplia on Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Before you start, make sure you have read the section [Planning before installation](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Prerequisites

* Ubuntu x64 version 16.04, 18.04 or 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

## Install the ASP.NET Core Runtime

[!include[Proceed as root](includes/su.md)]

Follow the instructions below depending on your Ubuntu version to:

1. Register the Microsoft key and add the product repository (this only needs to be done once per machine)
1. Install the package `aspnetcore-runtime-2.2`

> [!TIP]
> For alternative ways to install the ASP.NET Core Runtime, see [this page](https://docs.microsoft.com/en-us/dotnet/core/install/runtime?pivots=os-linux)

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/ubuntu/install-aspnetcore.md)]

### Test the installation

[!include[Test dotnet](includes/test-dotnet.md)]

## Install Amplia

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

> [!NOTE]
> If you prefer to use Apache instead of Nginx, [see this article](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Install Nginx (if not already installed):

[!include[Install nginx](../../../../../includes/amplia/ubuntu/install-nginx.md)]

[!include[Test nginx](includes/test-nginx.md)]

Disable the default Nginx site:

[!include[Disable default site](../../../../../includes/amplia/ubuntu/disable-default-site.md)]

Create a site configuration file for Amplia:

[!include[Create site](../../../../../includes/amplia/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Enable the site:

[!include[Enable site](../../../../../includes/amplia/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## See also

* [Updating Amplia on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
