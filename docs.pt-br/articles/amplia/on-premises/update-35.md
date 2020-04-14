# Atualizando o Amplia da versão 3.0-3.4 para 3.5

> [!NOTE]
> Se a sua instância do Amplia está em uma versão 2.x, [atualize primeiro para a versão 3.0](update-30.md)

Com o término do suporte por parte da Microsoft ao ASP.NET Core 2.2, a versão [3.5](../changelog.md#v3-5-0) do [Amplia](../index.md) foi migrada
para o ASP.NET Core 3.1, que é a versão mais recente com suporte de longo prazo, [sendo suportada até dezembro de 2022](https://dotnet.microsoft.com/platform/support/policy/dotnet-core#lifecycle).

Por isso, para atualizar a sua instância [*on premises*](index.md), você precisará instalar o ASP.NET Core Runtime 3.1.

Veja a seção *Instale o ASP.NET Core Runtime 3.1* do procedimento de instalação correspondente ao ambiente onde sua instância encontra-se instalada:

* [Windows Server](windows/install.md#install-aspnet-core)
* Linux
  * [Ubuntu Server](linux/install-ubuntu.md#install-aspnet-core)
  * [Red Hat Enterprise Linux](linux/install-rhel.md#install-aspnet-core)
  * [Oracle Linux](linux/install-oracle.md#install-aspnet-core)

> [!NOTE]
> Em Docker não há nada a fazer, a nova imagem 3.5 já vem com o ASP.NET Core 3.1 embutido

## Azure App Services

Se a sua instância do Amplia está instalada em Azure App Services:

1. No Azure Portal, acesse a configuração do App Service
1. Clique em **Configuration**, em seguida na aba **General settings**
1. Na seção *Stack settings*:
   1. A configuração *Stack* deve estar em **.NET Core**
   1. Se houver o campo *Major version*, selecione **3.1**

> [!TIP]
> O campo *Major version* só aparece se o App Service Plan for Linux. Caso contrário, no caso de App Service Plans em Windows, não é necessário
> alterar a *major version*.
