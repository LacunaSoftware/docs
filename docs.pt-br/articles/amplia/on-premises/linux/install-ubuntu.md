# Instalação do Amplia em Ubuntu Server

Para instalar uma instância [*on premises*](../index.md) do [Amplia](../../index.md) em Ubuntu Server, siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

[!include[Veja o planejamento](../includes/see-planning.md)]

## Pré-requisitos

* Ubuntu x64 versão 16.04, 18.04 ou 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime 2.2](../../../includes/linux/ubuntu/install-aspnetcore-22.md)]

## Instalar o Amplia

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Ative o site:

[!include[Enable site](../../../../../includes/amplia/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
