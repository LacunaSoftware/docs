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

[!include[Install ASP.NET Core Runtime 2.2](../../../includes/linux/rhel/install-aspnetcore-22.md)]

## Install Amplia

> [!NOTE]
> Some steps use the `nano` command, which might not be installed on your system. Feel free to replace the command by `vi` or install nano with `yum install nano`

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../includes/linux/rhel/install-nginx.md)]

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
