# Atualizando o Amplia Reg da versão 2.x para 3.0

Como o ASP.NET Core 6.0 foi descontinuado, a versão [3.0](../changelog.md#v3-0-0) do [Amplia Reg](../index.md) foi migrada para utilizar o ASP.NET Core 8.0, que é
a versão LTS mais recente do ASP.NET Core, [com suporte da Microsoft até novembro de 2026](https://dotnet.microsoft.com/platform/support/policy/dotnet-core#lifecycle).

Por isso, antes de atualizar a sua [instância on-premises](index.md), você deve seguir algumas etapas adicionais.

## 1. Instalar o ASP.NET Core Runtime 8.0

Consulte a seção *Instalar o ASP.NET Core Runtime 8.0* do procedimento de instalação correspondente à sua plataforma:

<!-- [Windows Server](windows/install.md#install-aspnet-core) -->
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  <!-- [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core) -->
  <!-- [Oracle Linux](linux/install-oracle.md#install-aspnet-core) -->

> [!TIP]
> Não é necessário desinstalar versões anteriores do ASP.NET Core Runtime; múltiplas versões podem coexistir no mesmo sistema sem problemas

> [!NOTE]
> No Docker, esta etapa não é necessária, pois a nova imagem 3.x já inclui o ASP.NET Core Runtime 8.0

## 2. Definir um AppDiscriminator explícito

Verifique se o seu arquivo de configuração contém uma configuração chamada `AppDiscriminator` na seção `General` (ou `General__AppDiscriminator` se estiver usando variáveis de ambiente).
Se esta configuração existir e estiver preenchida, avance para a próxima etapa. Se não houver tal configuração (ou se o valor estiver vazio), siga as instruções a seguir.

Abra o log da aplicação e procure a seguinte entrada:

```
Application starting: Lacuna Amplia Reg (version: *, spaVersion: *, appDiscriminator: 'YOUR_APP_DISCRIMINATOR')
                                                                                       ^^^^^^^^^^^^^^^^^^^^^^
```

Copie o valor do campo *appDiscriminator* **sem as aspas simples ao redor** (no exemplo acima o valor correto seria `YOUR_APP_DISCRIMINATOR`,
não `'YOUR_APP_DISCRIMINATOR'`) e adicione a configuração `AppDiscriminator` na seção `General` do seu arquivo de configuração com esse valor.

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[General]
AppDiscriminator=YOUR_APP_DISCRIMINATOR
```

Exemplo (variáveis de ambiente):

```sh
General__AppDiscriminator=YOUR_APP_DISCRIMINATOR
```

Em seguida, reinicie a aplicação e verifique os logs novamente. Um novo log "application starting" deve ser registrado, sem alteração no campo *appDiscriminator*.

## 3. Atualizar o Amplia Reg

Após seguir as etapas acima, prossiga com as instruções de atualização.

## Solução de problemas com erros de certificado no SQL Server

Ao contrário do .NET 6, o novo padrão no .NET 8 é que o certificado do servidor SQL seja validado. Isso pode fazer com que sua instância falhe ao iniciar,
com o seguinte erro aparecendo nos logs:

> Microsoft.Data.SqlClient.SqlException: 'A connection was successfully established with the server, but then an error occurred during the login process. (provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted.)'

Nesse caso, certifique-se de que seu SQL Server está configurado com um certificado TLS confiável e que ele não expirou.

Se preferir ignorar a validação do certificado do SQL Server, adicione `;TrustServerCertificate=True` à string de conexão do banco de dados no arquivo de configuração.

## Azure App Services

Se sua instância do Amplia Reg estiver hospedada no Azure App Services:

1. No portal do Azure, acesse a configuração do seu App Service
1. Clique em **Configuração**, em seguida selecione a aba **Configurações gerais**
1. Na seção *Configurações da pilha*:
   1. A configuração *Pilha* deve estar definida como **.NET**
   1. A configuração *Versão do .NET* deve estar definida como **.NET 8 (LTS)**

> [!TIP]
> A seção *Configurações da pilha* mencionada acima só é exibida se o Plano do App Service for baseado em Windows. Caso contrário, para planos baseados em Linux, nenhuma alteração é necessária.
