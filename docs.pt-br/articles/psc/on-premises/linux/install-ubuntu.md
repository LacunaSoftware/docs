# Instalação do Lacuna PSC em Ubuntu Server

Para instalar uma instância [*on premises*](../index.md) do [Lacuna PSC](../../index.md) em Ubuntu Server, siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

## Pré-requisitos

* Ubuntu x64 versão 21.10, 20.04, 18.04 ou 16.04

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/ubuntu/install-aspnetcore-31.md)]

[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]

## Instalar o Lacuna PSC

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

Crie um arquivo de configuração para o site do Lacuna PSC:

[!include[Create site](../../../../../includes/psc/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Ative o site:

[!include[Enable site](../../../../../includes/psc/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

[!include[Production notes](../includes/production-notes.md)]

## Veja também

* [Atualização do Lacuna PSC em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
