# Installing Rest PKI Core on Ubuntu Server

To install an [on-premises](../index.md) instance of [Rest PKI Core](../../index.md) on Ubuntu Server, follow the steps below. For other platforms, [click here](../index.md).

[!include[See planning](../includes/see-planning.md)]

## Prerequisites

* Ubuntu Server (any version currently in support by vendor, latest LTS version recommended)

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../../includes/linux/ubuntu/install-aspnetcore-60.md)]

## Install Rest PKI Core

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../../includes/linux/ubuntu/install-nginx.md)]

Create a site configuration file for Rest PKI Core:

[!include[Create site](../../../../../../includes/rest-pki/core/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Enable the site:

[!include[Enable site](../../../../../../includes/rest-pki/core/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## See also

* [Configure OpenID Connect](../configure-oidc.md)
* [Updating Rest PKI Core on Linux](update.md)
* [Troubleshooting](troubleshoot/index.md)
