# Installing GrantID on Windows Server

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.


## IIS Setup

1. Open Server Manager and select the "Add Roles and Features" option:

![Add Roles and Features](../../../../../images/grant-id/add-roles.png)

1. In the Server Roles section, select Web Server (IIS):

![Server Roles](../../../../../images/grant-id/server-roles.png)

1. In the Role Services section, select the desired services or accept the default options:

![Role Services](../../../../../images/grant-id/role-services.png)

1. Open Internet Information Services (IIS) Manager and remove the Default Web Site:
