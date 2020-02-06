# Update Amplia from 2.16 to 3.0

To update your [on-premises](index.md) instance of [Amplia](../index.md) from version 2.16.x to [version 3.0](../changelog.md#v3-0-0), a few
changes are required.

## ASP.NET Core Environment

Starting on version 3.0, Amplia needs the `ASPNETCORE_ENVIRONMENT` environment variable to be set to either `Windows`, `Linux` or `Azure`.

On Windows Server, run the following command on a privileged command prompt:

```sh
%SYSTEMROOT%\System32\inetsrv\appcmd.exe set config Amplia -section:system.webServer/aspNetCore /+"environmentVariables.[name='ASPNETCORE_ENVIRONMENT',value='Windows']" /commit:apphost
```

On Azure App Services, go to the **Configuration** tab of the app service add an application setting with name `ASPNETCORE_ENVIRONMENT` and value `Azure`.

> [!NOTE]
> On Linux, this variable was already set as part of the installation instructions for versions 2.x, so there's nothing to be done

## Configuration changes

* Section `Oidc`
  * `DashboardClientId` =&gt; `ClientAppId`
  * Fill new settings `ApiEndpoint`, `AppId` and `AppSecret` accordingly (check with technical support for the correct values)
  * Edit the client app configuration on GrantID, changing allowed redirect URLs from `https://your-amplia-domain/dashboard` to only `https://your-amplia-domain` i.e. removing the suffix `/dashboard` (leave the return URL to *silent-refresh.html*, it is still required)
* On section `PkiSuite`, if you have any `Mobile*` settings (for instance `MobileAppName`), create a section called `MobileApp` and move
  these settings over to that section, renaming them accordingly:
  * `PkiSuite:MobileAppName` =&gt; `MobileApp:Name`
  * `PkiSuite:MobileAppCodeSuffix` =&gt; `MobileApp:CodeSuffix`
  * `PkiSuite:MobileIOSStoreUri` =&gt; `MobileApp:IOSStoreUri`
  * `PkiSuite:MobileAndroidStoreUri` =&gt; `MobileApp:AndroidStoreUri`

On Azure App Services:

* If you use a log sink of type *AzureTableStorageWithProperties*, change its `keyGenerator` to `Lacuna.Spa.Engine.AzureTableKeyGenerator, Lacuna.Spa.Engine`
* If you have a section named `AzureStorage`, rename it to `BlobStorage`
