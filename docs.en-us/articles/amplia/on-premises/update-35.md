# Update Amplia from 3.0-3.4 to 3.5

Now that ASP.NET Core 2.2 is deprecated, version [3.5](../changelog.md#v3-5-0) of [Amplia](../index.md) has been migrated to use ASP.NET Core 3.1, which is
the newest LTS release of ASP.NET Core, [to be supported by Microsoft until December 2022](https://dotnet.microsoft.com/platform/support/policy/dotnet-core#lifecycle).

Because of that, to update your [on-premises](index.md) instance, you must install the ASP.NET Core Runtime 3.1.

Please refer to the *Install the ASP.NET Core Runtime 3.1* section of the installation procedure corresponding to your platform:

* [Windows Server](windows/install.md#install-aspnet-core)
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  * [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core)
  * [Oracle Linux](linux/install-oracle.md#install-aspnet-core)

> [!NOTE]
> On Docker, there's nothing to do, the new 3.5 image already ships based on the ASP.NET Core 3.1 image

## Azure App Services

If your Amplia instance is hosted on Azure App Services:

1. On the Azure Portal, enter your App Service configuration
1. Click on **Configuration**, then select the **General settings** tab
1. On the *Stack settings* section:
   1. The *Stack* setting should be set to **.NET Core**
   1. If there's a *Major version* setting, set it to **3.1**

> [!TIP]
> The *Major version* setting is only shown if the App Service Plan is Linux-based. Otherwise, for Windows-based plans, it is not needed
> to change the *major version*.
