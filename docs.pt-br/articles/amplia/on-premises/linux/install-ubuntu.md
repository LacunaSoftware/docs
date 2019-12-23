# Instalação do Amplia em Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

* Ubuntu x64 versão 16.04, 18.04 ou 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

## Instale o ASP.NET Core Runtime

[!include[Proceed as root](includes/su.md)]

Siga as instruções abaixo dependendo da versão do seu Ubuntu para:

1. Registrar a chave da Microsoft e adicionar o repositório de pacotes (só precisa ser feito uma única vez por máquina)
1. Instalar o pacote `aspnetcore-runtime-2.2`

> [!TIP]
> Para métodos alternativos de instalação do ASP.NET Core Runtime, visite [esta página](https://docs.microsoft.com/pt-br/dotnet/core/install/runtime?pivots=os-linux)

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/ubuntu/install-aspnetcore.md)]

### Teste a instalação

[!include[Test dotnet](includes/test-dotnet.md)]

## Instalar o Amplia

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

> [!NOTE]
> Se você preferir usar o Apache ao invés do Nginx, [veja este artigo](https://docs.microsoft.com/pt-br/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Instale o Nginx (se ainda não estiver instalado)

[!include[Install nginx](../../../../../includes/amplia/ubuntu/install-nginx.md)]

[!include[Test nginx](includes/test-nginx.md)]

Desabilite o site padrão do Nginx:

[!include[Disable default site](../../../../../includes/amplia/ubuntu/disable-default-site.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Ative o site:

[!include[Enable site](../../../../../includes/amplia/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
