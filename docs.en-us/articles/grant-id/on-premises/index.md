﻿# GrantID on-premises

[GrantID](../index.md) can be used as a service (SaaS) at [grantid.com](https://grantid.com) or you can host your own instance.

<a name="platforms" />
## Supported platforms

GrantID is compatible with:

* [Windows Server](windows/index.md)
* [Linux](linux/index.md)
* [Azure App Services](azure/index.md)
* [Docker](docker/index.md)

Click on one of the platforms above for specific setup instructions.

<a name="planning" />
## Planning before installation

Before you start, you should have the following public domains defined and created on the corresponding DNS servers, pointing to the server
that will host your GrantID instance:

* **Base domain**: base domain of the sites where users sign in.
* **Login domain**: hosts the actual site where users sign in. Must be a subdomain of the base domain.
* **Console domain**: hosts the dashboard that system administrators will use to configure GrantID itself.
* **API domain** (optional): hosts the GrantID API. The API does not need to be publicly accessible, so this is optional.

For instance, suppose you choose **id.yourcompany.com** as the base domain:

Domain type | Chosen domain name
----------- | ------------------
Base domain | *id.yourcompany.com*
Login       | **login**.*id.yourcompany.com*
Console     | **console**.*id.yourcompany.com*
API         | **api**.*id.yourcompany.com*

> [!NOTE]
> Although only the login domain needs to be a subdomain of the base domain, we recommend choosing a base domain and defining the remaining
> domains as subdomains of it, as shown above.

> [!TIP]
> Ideally, you should also have a valid SSL certificate that encompasses the four domains before starting the installation.
> However, you can install GrantID without HTTPS and configure it later.
