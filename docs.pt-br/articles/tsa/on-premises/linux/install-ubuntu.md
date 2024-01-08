# Instalação do Lacuna TSA em Ubuntu Server

Para instalar uma instância [*on premises*](../index.md) do [Lacuna TSA](../../index.md) em Ubuntu Server, siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

## Pré-requisitos

* Ubuntu Server (qualquer versão ainda suportada pelo fabricante, recomendamos a versão LTS mais recente)

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/ubuntu/install-aspnetcore-60.md)]

[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]

## Instalar o Lacuna TSA

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

Crie um arquivo de configuração para o site do Lacuna TSA:

[!include[Create site](../../../../../includes/tsa/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Ative o site:

[!include[Enable site](../../../../../includes/tsa/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

[!include[Production notes](../includes/production-notes.md)]

## Veja também

* [Atualização do Lacuna TSA em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
