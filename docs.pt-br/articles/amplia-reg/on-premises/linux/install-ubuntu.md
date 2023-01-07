# Instalação do Amplia em Ubuntu Server

Para instalar uma instância [*on premises*](../index.md) do [Amplia Reg](../../index.md) em Ubuntu Server, siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

## Pré-requisitos

* Ubuntu Server (qualquer versão ainda suportada pelo fabricante, recomendamos a versão LTS mais recente)

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/ubuntu/install-aspnetcore-60.md)]

[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]

## Instalar o Amplia Reg

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/ubuntu/install-nginx.md)]

Crie um arquivo de configuração para o site do Amplia Reg:

[!include[Create site](../../../../../includes/amplia-reg/ubuntu/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Ative o site:

[!include[Enable site](../../../../../includes/amplia-reg/ubuntu/enable-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

[!include[Common ending](../includes/common-ending.md)]

## Veja também

* [Atualização do Amplia Reg em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
