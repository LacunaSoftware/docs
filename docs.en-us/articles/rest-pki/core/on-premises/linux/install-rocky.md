# Installing Rest PKI Core on Rocky Linux

To install an [on-premises](../index.md) instance of [Rest PKI Core](../../index.md) on Rocky Linux, follow the steps below. For other platforms, [click here](../index.md).

## Prerequisites

* Rocky Linux 8.x or greater

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../../includes/linux/rocky/install-aspnetcore-60.md)]

## Install Rest PKI Core

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../../includes/linux/rocky/install-nginx.md)]

Create a site configuration file for Rest PKI Core:

[!include[Create site](../../../../../../includes/rest-pki/core/rocky/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Allow Nginx to access the Rest PKI Core service:

[!include[Allow service access](../../../../../../includes/linux/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Allow HTTP and HTTPS traffic to your system (if not already allowed):

[!include[Allow traffic](../../../../../../includes/linux/centos/allow-http.md)]

## See also

* [Updating Rest PKI Core on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
