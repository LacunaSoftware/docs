# Instalação do Amplia em Oracle Linux

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

## Pré-requisitos

* Oracle Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

[!include[Install ASP.NET Core Runtime](../../../includes/linux/oracle/install-aspnetcore-22.md)]

## Instalar o Amplia

> [!NOTE]
> Alguns passos utilizam o comando `nano`, que pode não estar disponível no seu sistema. Substitua o comando pelo
> `vi` ou instale o nano executando `yum install nano`.

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

[!include[Install Nginx](../../../includes/linux/oracle/install-nginx.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/centos/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Permita que o Nginx acesse o serviço do Amplia:

[!include[Allow service access](../../../../../includes/linux/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Abra as portas HTTP e HTTPS do seu servidor para tráfego externo (caso ainda não estejam abertas):

[!include[Allow traffic](../../../../../includes/linux/centos/allow-http.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
