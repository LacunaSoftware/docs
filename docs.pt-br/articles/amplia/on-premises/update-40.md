# Atualizando o Amplia da versão 3.x para 4.0

> [!NOTE]
> Se a sua instância do Amplia está em uma versão 2.x, [atualize primeiro para a versão 3.0](update-30.md)

> [!WARNING]
> Esta atualização cria dois índices que estavam faltando, nas tabelas `Orders` e `Certificates`. Caso a sua base de dados tenha
> um número elevado de pedidos e/ou certificados (muitos milhares ou mais), a atualização do banco de dados pode falhar. Nesse caso,
> atualize o banco de dados manualmente com o comando [update-db](on-premises/tool/update-db.md) passando um `--timeout <seconds>` alto.

Com o término do suporte por parte da Microsoft ao ASP.NET Core 3.1, a versão [4.0](../changelog.md#v4-0-0) do [Amplia](../index.md) foi migrada
para o ASP.NET Core 6.0, que é a versão mais recente com suporte de longo prazo, [sendo suportada até novembro de 2024](https://dotnet.microsoft.com/platform/support/policy/dotnet-core#lifecycle).

Por isso, para atualizar a sua instância [*on premises*](index.md), você precisará instalar o ASP.NET Core Runtime 6.0.

Veja a seção *Instale o ASP.NET Core Runtime 6.0* do procedimento de instalação correspondente ao ambiente onde sua instância encontra-se instalada:

* [Windows Server](windows/install.md#install-aspnet-core)
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  * [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core)
  * [Oracle Linux](linux/install-oracle.md#install-aspnet-core)

> [!NOTE]
> Em Docker não há nada a fazer, a nova imagem 4.0 já vem com o ASP.NET Core 6.0 embutido

## Azure App Services

Se a sua instância do Amplia está instalada em Azure App Services:

1. No Azure Portal, acesse a configuração do App Service
1. Clique em **Configuration**, em seguida na aba **General settings**
1. Na seção *Stack settings*:
   1. A configuração *Stack* deve estar em **.NET Core**
   1. A configuração *.NET version* deve estar em **.NET 6 (LTS)**

> [!TIP]
> A seção *Stack settings* só aparece se o App Service Plan for Windows. Caso contrário, no caso de App Service Plans em Linux, nenhuma mudança é necessária.
