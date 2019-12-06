# Instalação do Amplia em Oracle Linux

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

* Oracle Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

## Instale o ASP.NET Core Runtime

[!include[Proceed as root](includes/su.md)]

Registre a chave da Microsoft e o repositório de pacotes (só precisa ser feito uma única vez por máquina),
e então instale o pacote do ASP.NET Core Runtime:

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/oracle/install-aspnetcore.md)]

Para testar a instalação, execute:

[!include[Test ASP.NET Core installation](../../../../../includes/amplia/linux/test-aspnetcore.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../includes/amplia/linux/test-aspnetcore-output.md)]

> [!TIP]
> Para métodos alternativos de instalação do ASP.NET Core Runtime, visite [esta página](https://docs.microsoft.com/pt-br/dotnet/core/install/runtime?pivots=os-linux)

## Instalar o Amplia

> [!NOTE]
> Alguns passos utilizam o comando `nano`, que pode não estar disponível no seu sistema. Substitua o comando pelo
> `vi` ou instale o nano executando `yum install nano`.

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

> [!NOTE]
> Se você preferir usar o Apache ao invés do Nginx, [veja este artigo](https://docs.microsoft.com/pt-br/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Instale o Nginx (se ainda não estiver instalado)

[!include[Install nginx](../../../../../includes/amplia/oracle/install-nginx.md)]

[!include[Test nginx](includes/test-nginx.md)]

Desabilite o site padrão do Nginx:

[!include[Disable default site](../../../../../includes/amplia/centos/disable-default-site.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/centos/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Permita que o Nginx acesse o serviço do Amplia:

[!include[Allow service access](../../../../../includes/amplia/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Abra as portas HTTP e HTTPS do seu servidor para tráfego externo (caso ainda não estejam abertas):

[!include[Allow traffic](../../../../../includes/amplia/centos/allow-http.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
