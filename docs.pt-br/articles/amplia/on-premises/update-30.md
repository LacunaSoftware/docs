# Atualizando o Amplia da versão 2.16 para 3.0

Para atualizar sua instância [*on premises*](index.md) do [Amplia](../index.md) da versão 2.16.x para a [versão 3.0](../changelog.md#v3-0-0), algumas
alterações são necessárias.

## ASP.NET Core Environment

A partir da versão 3.0, o Amplia requer que a variável de ambiente `ASPNETCORE_ENVIRONMENT` esteja setada com `Windows`, `Linux` ou `Azure`.

Em Windows Server, execute o comando abaixo em um *command prompt* com privilégios de administrador:

```sh
%SYSTEMROOT%\System32\inetsrv\appcmd.exe set config Amplia -section:system.webServer/aspNetCore /+"environmentVariables.[name='ASPNETCORE_ENVIRONMENT',value='Windows']" /commit:apphost
```

Em Azure App Services, vá na aba **Configuração** do seu app service e adicione uma configuração com nome `ASPNETCORE_ENVIRONMENT` e valor `Azure`.

> [!NOTE]
> Em Linux, essa variável já era setada como parte do processo de instalação das versões 2.x. Portanto, não há nada a fazer.

## Mudanças de configuração

* Seção `Oidc`
  * `DashboardClientId` =&gt; `ClientAppId`
  * Preencha as configurações `ApiEndpoint`, `AppId` e `AppSecret` (verifique com o suporte técnico os valores apropriados para a sua instância)
  * Altere a configuração da aplicação no GrantID, alterando a *allowed redirect URLs* de `https://your-amplia-domain/dashboard` para apenas `https://your-amplia-domain` i.e. remova o sufixo `/dashboard` (mantenha a *return URL* com final *silent-refresh.html*, ela ainda é necessária)
* Na seção `PkiSuite`, se você possui alguma configuração `Mobile*` (por exemplo `MobileAppName`), crie uma seção chamada `MobileApp` e mova
  essas configurações para essa nova seção, renomeando-as conforme abaixo:
  * `PkiSuite:MobileAppName` =&gt; `MobileApp:Name`
  * `PkiSuite:MobileAppCodeSuffix` =&gt; `MobileApp:CodeSuffix`
  * `PkiSuite:MobileIOSStoreUri` =&gt; `MobileApp:IOSStoreUri`
  * `PkiSuite:MobileAndroidStoreUri` =&gt; `MobileApp:AndroidStoreUri`

Em Azure App Services:

* Se você possui um *log sink* do tipo *AzureTableStorageWithProperties*, altere a configuração `keyGenerator` para `Lacuna.Spa.Engine.AzureTableKeyGenerator, Lacuna.Spa.Engine`
* Se você possuir uma seção chamada `AzureStorage`, renomeie-a para `BlobStorage`
