# Update Amplia from 3.x to 4.0

> [!NOTE]
> If your Amplia instance is on a 2.x version, [update first to 3.0](update-30.md)

> [!WARNING]
> This update creates two missing indexes, on the `Orders` and `Certificates` tables. If your database has a high number of orders and/or
> certificates (several thousands or more), the database update may fail. In this case, update the database manually with the command
> [update-db](tool/update-db.md) passing a high `--timeout <seconds>` value.

Now that ASP.NET Core 3.1 is deprecated, version [4.0](../changelog.md#v4-0-0) of [Amplia](../index.md) has been migrated to use ASP.NET Core 6.0, which is
the newest LTS release of ASP.NET Core, [to be supported by Microsoft until November 2024](https://dotnet.microsoft.com/platform/support/policy/dotnet-core#lifecycle).

Because of that, to update your [on-premises](index.md) instance, you must install the ASP.NET Core Runtime 6.0.

Please refer to the *Install the ASP.NET Core Runtime 6.0* section of the installation procedure corresponding to your platform:

* [Windows Server](windows/install.md#install-aspnet-core)
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  * [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core)
  * [Oracle Linux](linux/install-oracle.md#install-aspnet-core)

> [!NOTE]
> On Docker, there's nothing to do, the new 4.0 image already ships based on the ASP.NET Core 6.0 image

## Azure App Services

If your Amplia instance is hosted on Azure App Services:

1. On the Azure Portal, enter your App Service configuration
1. Click on **Configuration**, then select the **General settings** tab
1. On the *Stack settings* section:
   1. The *Stack* setting should be set to **.NET**
   1. The *.NET version* setting, should be set to **.NET 6 (LTS)**

> [!TIP]
> The *Stack settings* section mentioned above is only shown if the App Service Plan is Windows-based. Otherwise, for Linux-based plans, no changes are needed.

<!-- 
## Breaking change on OCSP configuration

TODO!
-->
