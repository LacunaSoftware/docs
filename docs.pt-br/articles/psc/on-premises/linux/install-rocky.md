# Instalação do Lacuna PSC em Rocky Linux

Para instalar uma instância [*on premises*](../index.md) do [Lacuna PSC](../../index.md) em Rocky Linux, siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

## Pré-requisitos

* Rocky Linux 8.x

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/rocky/install-aspnetcore-31.md)]

<!--
[!include[Install dependencies](../../../includes/linux/ubuntu/install-dependencies.md)]
-->

## Instalar o Lacuna PSC

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/rocky/install-nginx.md)]

Crie um arquivo de configuração para o site do Lacuna PSC:

[!include[Create site](../../../../../includes/psc/rocky/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

## Veja também

* [Atualização do Lacuna PSC em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
