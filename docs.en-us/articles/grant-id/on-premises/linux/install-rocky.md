# Installing GrantID on Rocky Linux

Follow these steps to install an [on-premises](../index.md) instance of [GrantID](../../index.md) on Rocky Linux.

> [!TIP]
> Before you start, make sure you have completed the steps outlined on [Planning before installation](../index.md#planning)

## Prerequisites

* Rocky Linux 8.x or greater

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime 8.0](../../../includes/linux/rocky/install-aspnetcore-80.md)]

## Install Nginx

[!include[Install Nginx](../../../includes/linux/rocky/install-nginx.md)]

## Install GrantID

[!include[Initial setup](includes/common-initial-setup.md)]

<a name="identity-service" />
### Identity Service

[!include[Identity Service common setup](includes/common-identity-service.md)]

> [!NOTE]
> The Identity Service component does not need to be publicly accessible. If your applications don't call GrantID's APIs
> directly, you can skip the remainder of this section and go to the [Auth Server installation](#auth-server)

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/rocky/create-site-identity-service.md)]

Enter the following, replacing the `server_name` entry with your [API domain](../index.md#planning):

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-identity-service.md)]

Allow services to make network requests:

[!include[Allow service access](../../../../../includes/linux/centos/allow-service-access.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site (replace *api.id.patorum.com* with your [API domain](../index.md#planning)):

[!include[Test site](../../../../../includes/grant-id/linux/test-site-identity-service.md)]

<a name="auth-server" />
### Auth Server

[!include[Auth Server common setup](includes/common-auth-server.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/rocky/create-site-auth-server.md)]

Enter the following, replacing the `server_name` entry with your [base and login domains](../index.md#planning):

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-auth-server.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site (replace *id.patorum.com* with your [base domain](../index.md#planning)):

[!include[Test site](../../../../../includes/grant-id/linux/test-site-auth-server.md)]

<a name="console" />
### Console

[!include[Console common setup](includes/common-console.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/rocky/create-site-console.md)]

Enter the following, replacing the `server_name` entry with your [console domain](../index.md#planning):

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-console.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site (replace *console.id.patorum.com* with your [console domain](../index.md#planning)):

[!include[Test site](../../../../../includes/grant-id/linux/test-site-console.md)]

## Post-installation

Follow the steps on [GrantID post-installation](../post-install.md) to complete the installation procedure.
