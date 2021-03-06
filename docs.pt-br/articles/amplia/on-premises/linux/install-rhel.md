﻿# Instalação do Amplia em Red Hat Enterprise Linux

Para instalar uma instância [*on premises*](../index.md) do [Amplia](../../index.md) em Red Hat Enterprise Linux, siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

[!include[Veja o planejamento](../includes/see-planning.md)]

## Pré-requisitos

> [!NOTE]
> Essas instruções são para RHEL 7. Se você utiliza RHEL 8, por favor contate-nos.

> [!WARNING]
> Antes de começar, certifique-se de que seu sistema esteja [registrado e inscrito no Red Hat Customer Portal](https://access.redhat.com/solutions/253273)

* Red Hat Enterprise Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/rhel/install-aspnetcore-31.md)]

## Instalar o Amplia

> [!NOTE]
> Alguns passos utilizam o comando `nano`, que pode não estar disponível no seu sistema. Substitua o comando pelo
> `vi` ou instale o nano executando `yum install nano`.

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/rhel/install-nginx.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/rhel/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Permita que o Nginx acesse o serviço do Amplia:

[!include[Allow service access](../../../../../includes/linux/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Abra as portas HTTP e HTTPS do seu servidor para tráfego externo (caso ainda não estejam abertas):

[!include[Allow traffic](../../../../../includes/linux/centos/allow-http.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
