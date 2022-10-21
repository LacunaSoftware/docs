# Installing Lacuna PSC on Rocky Linux

To install an [on-premises](../index.md) instance of [Lacuna PSC](../../index.md) on Rocky Linux, follow the steps below. For other platforms, [click here](../index.md).

## Prerequisites

* Rocky Linux 8.x

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/rocky/install-aspnetcore-31.md)]

<!--
[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]
-->

## Install Lacuna PSC

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../includes/linux/rocky/install-nginx.md)]

Create a site configuration file for Lacuna PSC:

[!include[Create site](../../../../../includes/psc/rocky/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

[!include[Production notes](../includes/production-notes.md)]

## See also

* [Configure OpenID Connect](../configure-oidc.md)
* [Updating Lacuna PSC on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
