# Atualizando o Signer da versão 1.x para 2.x

Antes de atualizar sua instância [on-premises](index.md) da versão 1.x para a 2.x, é preciso seguir alguns passos adicionais.

## 1. Instalar o ASP.NET Core Runtime 8.0

Por favor verifique a seção *Instale o ASP.NET Core Runtime 8.0* do procedimento de instalação da plataforma que está utilizando:

* Windows: Instale <a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.15-windows-hosting-bundle-installer" target="_blank">NET 8.0 Hosting Bundle</a>
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  <!-- [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core) -->
  <!-- [Oracle Linux](linux/install-oracle.md#install-aspnet-core) -->

> [!TIP]
> Não é necessário desinstalar versões prévias do ASP.NET Core Runtime, pois múltiplas versões podem coexistir no mesmo ambiente sem problemas.

> [!NOTE]
> No Docker, esse passo não é necessário pois as versões 2.x da imagem já vêm com o ASP.NET Core Runtime 8.0 embutido.

## 2. Defina um AppDiscriminator explícito

Verifique se o seu arquivo de configuração contém a configuração chamada `AppDiscriminator` na seção `General` (ou `General__AppDiscriminator` se estiver usando variáveis de ambiente).
Se existir a configuração e estiver preenchida, pule para o próximo passo.

Se não existir a configuração ou se o valor estiver vazio, verifique os logs da aplicação e procure pela entrada mais recente com o modelo abaixo:

```
Application starting: Lacuna Signer (version: *, spaVersion: *, appDiscriminator: 'YOUR_APP_DISCRIMINATOR')
                                                                                   ^^^^^^^^^^^^^^^^^^^^^^
```

Copie o valor do campo *appDiscriminator* **sem as aspas simples que o cercam** (no exemplo acima o valor correto seria `YOUR_APP_DISCRIMINATOR`,
não `'YOUR_APP_DISCRIMINATOR'`) e adicione a configuração `AppDiscriminator` com esse valor na seção `General` do seu arquivo de configuração.

Exemplo (*.ini* ou arquivo *.conf*):

```ini
[General]
AppDiscriminator=YOUR_APP_DISCRIMINATOR
```

Exemplo (environment variables):

```sh
General__AppDiscriminator=YOUR_APP_DISCRIMINATOR
```

Em seguida, reinicie a aplicação e verifique os logs de novo. Um novo log do tipo "application starting" deve aparecer e nenhuma mudança deve ser registrada no campo *appDiscriminator*.

## 3. Mudanças do Serilog

Alguns parâmetros do Serilog mudaram porque a biblioteca foi atualizada. Confira a seção `Serilog` dos seus app settings e faça mudanças de acordo com os direcionamentos abaixo:

* Windows:
  * Se você tiver o parâmetro `RollingFile` especificado, troque-o por `File` e a propriedade `pathFormat` por `path`. Para manter o comportamento de *rolling* adicione `"rollingInterval": "Day"`.
* Azure:
  * Se você estiver hospedando o Signer no Azure (e tiver a configuração `ASPNETCORE_ENVIRONMENT` definida para `Azure`), configurações padrões de Serilog foram adicionadas, então agora só é necessário definir a configuração `Serilog__WriteTo__0__Args__connectionString` para direcionar os logs para uma table de um Storage Account.
  * Se você tiver a configuração `Serilog__WriteTo__0__Name` definida com o valor `AzureTableStorageWithProperties`, remova-a ou substitua o valor por `AzureTableStorage`.

## 4. Mudanças de banco de dados

Foi alterada a versão mínima exigida do SQL Server para o SQL Server 2016 (13.x). Para reverter a compatibilidade para o SQL Server 2014, 
adicione a configuração `SqlServer__CompatibilityLevel` com valor `120`.

## 5. Update Signer

Após seguir os passos acima, proceda com as instruções de atualização normais.

## Solucionando erros de certificado no SQL Server

Diferentemente do .NET 6, o novo padrão para o .NET 8 é que o certificado do servidor SQL Server seja validado. Isso pode ocasionar uma falha ao iniciar a aplicação com o seguinte
erro sendo apresentado nos logs:

> Microsoft.Data.SqlClient.SqlException: 'A connection was successfully established with the server, but then an error occurred during the login process. (provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted.)'

Nesse caso, verifique que seu SQL Server está configurado com um certificado TLS confiável e que ele não está expirado.

Se você preferir contornar a verificação do certificado do servidor SQL Server, adicione `;TrustServerCertificate=True` à connection string do banco de dados no arquivo de configuração.

## Solucionando erros de timeout do banco de dados após o update

Se você enfrentar erros durante o primeiro início da aplicação após a atualização e o log indicar que ocorreu um timeout ao aplicar as migrações de banco de dados, você deverá 
executar o utilitário de linha de comando para iniciar as migrações de maneira manual usando um parâmetro de timeout com valor maior que o padrão:

1. Pare a aplicação.
1. Navegue até a pasta aonde se encontram os binários da aplicação.
1. Execute o comando:
```
dotnet Lacuna.Signer.Site.dll -- update-db AddFontSize --timeout 6000
```
1. Reinicie a aplicação.

## Azure App Services

Se sua instâcnia está hospeada no Azure App Services:

1. No portal do Azure, acesse as configurações do App Service.
1. Selecione **Configuration**, e depois selecione a aba **General settings**
1. Na seção *Stack settings*:
   1. A configuração de *Stack* deve estar definida como **.NET**
   1. A configuração *.NET version*, deve estar definida como **.NET 8 (LTS)**

> [!TIP]
> A seção *Stack settings* mencionada acima só aparece para App Service Plan de plataforma Windows. Para planos baseados em plataforma Linux, nenhuma mudança é necessária.
