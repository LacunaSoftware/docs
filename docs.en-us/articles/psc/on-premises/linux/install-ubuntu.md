# Installing Lacuna PSC on Ubuntu Server

To install an [on-premises](../index.md) instance of [Lacuna PSC](../../index.md) on Ubuntu Server, follow the steps below. For other platforms, [click here](../index.md).

## Prerequisites

* Ubuntu x64 version 21.10, 20.04, 18.04 or 16.04

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/ubuntu/install-aspnetcore-31.md)]

[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]

## Install Lacuna PSC

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

Create a site configuration file for Lacuna PSC:

[!include[Create site](../../../../../includes/psc/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Enable the site:

[!include[Enable site](../../../../../includes/psc/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## See also

* [Configure OpenID Connect](../configure-oidc.md)
* [Updating Lacuna PSC on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
