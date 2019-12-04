# Instalação do Amplia em Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

* Ubuntu x64 versão 16.04, 18.04 or 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

## Instale o ASP.NET Core Runtime

Siga as instruções abaixo dependendo da versão do seu Ubuntu para:

1. Registrar a chave da Microsoft e adicionar o repositório de pacotes (só precisa ser feito uma única vez por máquina)
1. Instalar o pacote `aspnetcore-runtime-2.2`

> [!TIP]
> Para métodos alternativos de instalação do ASP.NET Core Runtime, visite [esta página](https://docs.microsoft.com/pt-br/dotnet/core/install/runtime?pivots=os-linux)

[!include[Install ASP.NET Core Runtime](../../../../../includes/amplia/ubuntu/install-aspnetcore.md)]

## Instalar o Amplia

Crie um usuário local para executar o servidor de aplicação do Amplia:

[!include[Create user](../../../../../includes/amplia/ubuntu/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../includes/amplia/ubuntu/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*amplia*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Amplia a partir do template fornecido:

[!include[Move settings template](../../../../../includes/amplia/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *amplia* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Configure o Amplia

Edite o arquivo de configuração para configurar sua instância do Amplia:

[!include[Edit settings](../../../../../includes/amplia/linux/edit-settings.md)]

[!include[Database config](../includes/database-config.md)]

### Logging

Na seção **Serilog**, configure o log da applicação:

[!include[Log configuration](../../../../../includes/amplia/linux/log-config.md)]

Se preferir, mude a configuração **path** para outra pasta.

> [!NOTE]
> Se você mudar o *path*, lembre-se de conceder permissões de escrita para o usuário do aplicativo (*amplia*) no diretório

<a name="encryption-key-generation" /> <!-- This anchor actually belongs a bit farther below, placing it here is a workaround -->

[!include[General config](../includes/general-config.md)]

Para gerar a *EncryptionKey*, execute o comando seguinte:

[!include[Generate key](../../../../../includes/amplia/linux/gen-key.md)]

[!include[Common config](../includes/common-config.md)]

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../includes/amplia/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../includes/amplia/linux/service-definition.md)]

> [!NOTE]
> Se você pretende usar chaves de curvas elípticas (EC), descomente a linha marcada acima. Neste caso, você também precisa ter certeza do seu servido ter o OpenSSL 1.1 instalado.

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../includes/amplia/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../includes/amplia/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `sudo systemctl restart amplia`

Para testar se o servidor do Amplia está rodando, execute:

[!include[Test service](../../../../../includes/amplia/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../includes/amplia/linux/test-service-output.md)]

## Configurar um servidor proxy reverso

> [!NOTE]
> Se você preferir usar o Apache ao invés do Nginx, [veja este artigo](https://docs.microsoft.com/pt-br/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Instale o Nginx (se ainda não estiver instalado)

[!include[Install nginx](../../../../../includes/amplia/ubuntu/install-nginx.md)]

Desabilite o site padrão do Nginx:

[!include[Disable default site](../../../../../includes/amplia/ubuntu/disable-default-site.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/ubuntu/create-site.md)]

Digite o seguinte, substituindo o domínio do painel na entrada `server_name`:

[!include[Site definition](../../../../../includes/amplia/linux/site-definition.md)]

> [!TIP]
> Idealmente, a configuração do site deve conter as entradas `ssl_certificate` e `ssl_certificate_key` com o certificado SSL válido. Essa configuração está fora do escopo dessas
> instruções.

Ative o site:

[!include[Enable site](../../../../../includes/amplia/ubuntu/enable-site.md)]

Teste a configuração do Nginx e recarregue-a:

[!include[Test Nginx](../../../../../includes/amplia/linux/reload-nginx.md)]

Teste o site:

[!include[Test site](../../../../../includes/amplia/linux/test-site.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
