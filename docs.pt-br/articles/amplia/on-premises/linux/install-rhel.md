# Instalação do Amplia em Red Hat Enterprise Linux

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

> [!NOTE]
> Essas instruções são para RHEL 7. Se você utiliza RHEL 8, por favor contate-nos.

> [!WARNING]
> Antes de começar, certifique-se de que seu sistema esteja [registrado e inscrito no Red Hat Customer Portal](https://access.redhat.com/solutions/253273)

* Red Hat Enterprise Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

## Instale o ASP.NET Core Runtime

[!include[Proceed as root](../../../includes/linux/su.md)]

Registre a chave da Microsoft e o repositório de pacotes (só precisa ser feito uma única vez por máquina),
e então instale o pacote do ASP.NET Core Runtime:

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/rhel/install-aspnetcore.md)]

> [!NOTE]
> Se o comando acima falhar devido a dependencias faltando, por exemplo pelo pacote *libicu* não estar disponível, certifique-se de que o seu sistema está [registrado e associado a uma subscription da Red Hat](https://access.redhat.com/solutions/253273)

[!include[Test dotnet](includes/test-dotnet.md)]

## Instalar o Amplia

> [!NOTE]
> Alguns passos utilizam o comando `nano`, que pode não estar disponível no seu sistema. Substitua o comando pelo
> `vi` ou instale o nano executando `yum install nano`.

[!include[Common Linux installation](includes/common-linux-install.md)]

## Configurar um servidor proxy reverso

> [!NOTE]
> Se você preferir usar o Apache ao invés do Nginx, [veja este artigo](https://docs.microsoft.com/pt-br/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Instale o Nginx (se ainda não estiver instalado):

[!include[Install nginx](../../../../../includes/amplia/rhel/install-nginx.md)]

[!include[Test nginx](includes/test-nginx.md)]

Edite o arquivo de configuração do Nginx:

[!include[Edit nginx config](../../../../../includes/amplia/rhel/edit-nginx-config.md)]

Apague ou comente (prefixando cada linha com `#`) a seção `server` inteira, mostrada abaixo:

[!include[Section of nginx config to delete](../../../../../includes/amplia/rhel/nginx-config-to-delete.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/rhel/create-site.md)]

[!include[Configure site](includes/configure-site.md)]

Permita que o Nginx acesse o serviço do Amplia:

[!include[Allow service access](../../../../../includes/amplia/centos/allow-service-access.md)]

[!include[Reload nginx and test site](includes/reload-and-test.md)]

Abra as portas HTTP e HTTPS do seu servidor para tráfego externo (caso ainda não estejam abertas):

[!include[Allow traffic](../../../../../includes/amplia/centos/allow-http.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
