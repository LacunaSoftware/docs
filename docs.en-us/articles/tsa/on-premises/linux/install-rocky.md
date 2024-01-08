# Installing Lacuna TSA on Rocky Linux

To install an [on-premises](../index.md) instance of [Lacuna TSA](../../index.md) on Rocky Linux, follow the steps below. For other platforms, [click here](../index.md).

## Prerequisites

* Rocky Linux 8.x or greater

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/rocky/install-aspnetcore-60.md)]

<!--
[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]
-->

## Install Lacuna TSA

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../includes/linux/rocky/install-nginx.md)]

Create a site configuration file for Lacuna TSA:

[!include[Create site](../../../../../includes/tsa/rocky/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

[!include[Production notes](../includes/production-notes.md)]

## See also

* [Updating Lacuna TSA on Linux](update.md)
* [Troubleshooting (Linux)](troubleshoot/index.md)
