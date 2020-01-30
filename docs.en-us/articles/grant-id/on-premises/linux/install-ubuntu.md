# Installing Grant ID on Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Follow these steps to install an [on-premises](../index.md) instance of [Grant ID](../../index.md) on an Ubuntu Server.

> [!TIP]
> Before you start, make sure you have completed the steps outlined on [Planning before installation](../index.md#planning)

[!include[Install ASP.NET Core Runtime 2.1](../../../includes/linux/ubuntu/install-aspnetcore-21.md)]

## Install Nginx

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

## Install Grant ID

[!include[Initial setup](includes/common-initial-setup.md)]

<a name="identity-service" />
### Identity Service

[!include[Identity Service common setup](includes/common-identity-service.md)]

> [!NOTE]
> The Identity Service component does not need to be publicly accessible. If your applications don't call GrantID's APIs
> directly, you can skip the remainder of this section and go to the [Auth Server installation](#auth-server)

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/ubuntu/create-site-identity-service.md)]

Enter the following, replacing the `server_name` entry with your [API domain](../index.md#planning):

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-identity-service.md)]

Enable the site:

[!include[Enable site](../../../../../includes/grant-id/ubuntu/enable-site-identity-service.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site (replace *api.id.patorum.com* with your [API domain](../index.md#planning)):

[!include[Test site](../../../../../includes/grant-id/linux/test-site-identity-service.md)]

<a name="auth-server" />
### Auth Server

[!include[Auth Server common setup](includes/common-auth-server.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/ubuntu/create-site-auth-server.md)]

Enter the following, replacing the `server_name` entry with your [base and login domains](../index.md#planning):

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-auth-server.md)]

Enable the site:

[!include[Enable site](../../../../../includes/grant-id/ubuntu/enable-site-auth-server.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site (replace *id.patorum.com* with your [base domain](../index.md#planning)):

[!include[Test site](../../../../../includes/grant-id/linux/test-site-auth-server.md)]

<a name="console" />
### Console

[!include[Console common setup](includes/common-console.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/ubuntu/create-site-console.md)]

Enter the following, replacing the `server_name` entry with your [console domain](../index.md#planning):

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-console.md)]

Enable the site:

[!include[Enable site](../../../../../includes/grant-id/ubuntu/enable-site-console.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site (replace *console.id.patorum.com* with your [console domain](../index.md#planning)):

[!include[Test site](../../../../../includes/grant-id/linux/test-site-console.md)]
