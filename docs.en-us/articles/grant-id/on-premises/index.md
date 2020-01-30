# Grant ID on-premises

[Grant ID](../index.md) can be used as a service (SaaS) at [grantid.com](https://grantid.com) or you can host your own instance.

## Supported platforms

Grant ID is compatible with:

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
* **Login domain**: hosts the actual site where users sign in. Must be a sub-domain of the base domain.
* **Console domain**: hosts the dashboard that system administrators will use to configure GrantID itself.
* **API domain** (optional): hosts the GrantID API. The API does not need to be publicly accessible, so this domain is optional.

> [!NOTE]
> Although only the login domain needs to be a subdomain of the base domain, we recommend choosing a base domain and defining the remaining
> domains as subdomains of it.

For instance, suppose you choose as a base domain **easy.net**:

Domain type | Chosen domain name
----------- | ------------------
Base domain | easyid.net
Login       | login.easyid.net
Console     | console.easyid.net
API         | api.easyid.net

Instead suppose you prefer to use as base domain a subdomain of your existing organizational domain -- **id.patorum.com**:

Domain type | Chosen domain name
----------- | ------------------
Base domain | **id.patorum.com**
Login       | **login**.id.patorum.com
Console     | **console**.id.patorum.com
API         | **api**.id.patorum.com
