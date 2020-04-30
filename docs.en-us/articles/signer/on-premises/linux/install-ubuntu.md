# Installing Signer on Ubuntu Server

To install an instance [*on premises*](../index.md) from [Signer](../../index.md) on Ubuntu Server, follow the steps below. For other plataforms, [click here](../index.md).

<!--
[!include[See the planning](../includes/see-planning.md)]
-->

## Prerequisites

* Ubuntu x64 version 16.04, 18.04 ou 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/ubuntu/install-aspnetcore-31.md)]

## Install Signer

[!include[Common Linux installation](includes/common-linux-install.md)]

## Set up a reverse proxy server

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

Create a configuration file for the Amplia website:

[!include[Create site](../../../../../includes/signer/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Activate the site:

[!include[Enable site](../../../../../includes/signer/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## See too

* [Signer update on Linux](update.md)
* [Problem solving](troubleshoot/index.md)