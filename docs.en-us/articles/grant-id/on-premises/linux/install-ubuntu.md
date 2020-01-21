# Installing Grant ID on Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Follow these steps to install an [on-premises](../index.md) instance of [Grant ID](../../index.md) on an Ubuntu Server.

[!include[Install ASP.NET Core Runtime 2.1](../../../includes/linux/ubuntu/install-aspnetcore-21.md)]

## Install Nginx

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

## Install Grant ID

[!include[Initial setup](includes/common-initial-setup.md)]

### Identity Service

[!include[Identity Service common setup](includes/common-identity-service.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/ubuntu/create-site-identity-service.md)]

Enter the following, replacing the public domain of the Identity Service on the `server_name` entry:

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-identity-service.md)]

Enable the site:

[!include[Enable site](../../../../../includes/grant-id/ubuntu/enable-site-identity-service.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site:

[!include[Test site](../../../../../includes/grant-id/linux/test-identity-service.md)]

### Auth Server

[!include[Auth Server common setup](includes/common-auth-server.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/ubuntu/create-site-auth-server.md)]

Enter the following, replacing the public domain of the Auth Server on the `server_name` entry:

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-auth-server.md)]

Enable the site:

[!include[Enable site](../../../../../includes/grant-id/ubuntu/enable-site-auth-server.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site:

[!include[Test site](../../../../../includes/grant-id/linux/test-auth-server.md)]

### Console

[!include[Console common setup](includes/common-console.md)]

Create a site configuration file for the component:

[!include[Create site](../../../../../includes/grant-id/ubuntu/create-site-console.md)]

Enter the following, replacing the public domain of the Console on the `server_name` entry:

[!include[Site definition](../../../../../includes/grant-id/linux/site-definition-console.md)]

Enable the site:

[!include[Enable site](../../../../../includes/grant-id/ubuntu/enable-site-console.md)]

Test the Nginx configuration and reload it:

[!include[Reload Nginx](../../../../../includes/linux/reload-nginx.md)]

Test the site:

[!include[Test site](../../../../../includes/grant-id/linux/test-console.md)]
