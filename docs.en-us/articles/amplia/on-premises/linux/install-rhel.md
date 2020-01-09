# Installing Amplia on Red Hat Enterprise Linux

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Before you start, make sure you have read the section [Planning before installation](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Prerequisites

> [!NOTE]
> These instructions are for RHEL 7. If you use RHEL 8, please contact us.

> [!WARNING]
> Before starting, make sure your system is [registered and subscribed to the Red Hat Customer Portal](https://access.redhat.com/solutions/253273)

* Red Hat Enterprise Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

## Install the ASP.NET Core Runtime

[!include[Proceed as root](includes/su.md)]

Register the Microsoft key and package repository (this only needs to be done once per machine), then install the ASP.NET Core runtime package:

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/rhel/install-aspnetcore.md)]

> [!NOTE]
> If the command above fails due to broken dependencies, for instance on *libicu*, make sure your system is [registered and attached to a Red Hat subscription](https://access.redhat.com/solutions/253273)

[!include[Test dotnet](includes/test-dotnet.md)]

## Install Amplia

> [!NOTE]
> Some steps use the `nano` command, which might not be installed on your system. Feel free to replace the command by `vi` or install nano with `yum install nano`

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

> [!NOTE]
> If you prefer to use Apache instead of Nginx, [see this article](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Install Nginx (if not already installed):

[!include[Install nginx](../../../../../includes/amplia/rhel/install-nginx.md)]

[!include[Test nginx](includes/test-nginx.md)]

Edit the Nginx configuration:

[!include[Edit nginx config](../../../../../includes/amplia/rhel/edit-nginx-config.md)]

Delete or comment-out (with `#`s) the entire `server` section, shown below:

[!include[Section of nginx config to delete](../../../../../includes/amplia/rhel/nginx-config-to-delete.md)]

Create a site configuration file for Amplia:

[!include[Create site](../../../../../includes/amplia/rhel/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Allow Nginx to access the Amplia service:

[!include[Allow service access](../../../../../includes/amplia/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Allow HTTP and HTTPS traffic to your system (if not already allowed):

[!include[Allow traffic](../../../../../includes/amplia/centos/allow-http.md)]

## See also

* [Updating Amplia on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
