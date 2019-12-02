# Instalação do Amplia em Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

* Ubuntu x64 versão 16.04, 18.04 or 19.04

[!include[Common prerequisites](../includes/common-requisites.md)]

## Instale o ASP.NET Core Runtime

Clique no link abaixo, então **selecione sua versão Ubuntu** e siga as instruções:

<br />
<center>
<a href="https://dotnet.microsoft.com/download/linux-package-manager/ubuntu18-04/runtime-current" target="_blank">Install .NET Core Runtime on Linux Ubuntu</a>
</center>
<br />

> [!TIP]
> Ignore a nota de rodapé das instruções sobre instalar somente o *.NET Core runtime*. Você precisa do "runtime bundle" completo. Em outras palavras, tenha certeza que você pegou o pacote `aspnetcore-runtime-xxx`, não ~~dotnet-runtime-xxx~~

## Instalar o Amplia

Crie um usuário local para executar o servidor de aplicação do Amplia:

[!include[Create user](../../../../../includes/amplia/ubuntu/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../includes/amplia/ubuntu/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*amplia*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Amplia a partir do template fornecido:

[!include[Move settings template](../../../../../includes/amplia/ubuntu/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *amplia* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Configure o Amplia

Edite o arquivo de configuração para configurar sua instância do Amplia:

[!include[Edit settings](../../../../../includes/amplia/ubuntu/edit-settings.md)]

[!include[Database config](../includes/database-config.md)]

### Logging

Na seção **Serilog**, configure o log da applicação:

[!include[Log configuration](../../../../../includes/amplia/ubuntu/log-config.md)]

Se preferir, mude a configuração **path** para outra pasta.

> [!NOTE]
> Se você mudar o *path*, lembre-se de conceder permissões de escrita para o usuário do aplicativo (*amplia*) no diretório

<a name="encryption-key-generation" /> <!-- This anchor actually belongs a bit farther below, placing it here is a workaround -->

[!include[General config](../includes/general-config.md)]

Para gerar a *EncryptionKey*, execute o comando seguinte:

[!include[Generate key](../../../../../includes/amplia/ubuntu/gen-key.md)]

[!include[Common config](../includes/common-config.md)]

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../includes/amplia/ubuntu/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../includes/amplia/ubuntu/service-definition.md)]

> [!NOTE]
> Se você pretende usar chaves de curvas elípticas (EC), descomente a linha marcada acima. Neste caso, você também precisa ter certeza do seu servido ter o OpenSSL 1.1 instalado.

Salve o arquivo e ativar o serviço:

[!include[Enable service](../../../../../includes/amplia/ubuntu/enable-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../includes/amplia/ubuntu/enable-service-output.md)]

Se necessário, reinicie o serviço: `sudo systemctl restart amplia`

Para testar se o servidor do Amplia está rodando, execute:

[!include[Test service](../../../../../includes/amplia/ubuntu/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../includes/amplia/ubuntu/test-service-output.md)]

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

[!include[Site definition](../../../../../includes/amplia/ubuntu/site-definition.md)]

> [!TIP]
> Idealmente, a configuração do site deve conter as entradas `ssl_certificate` e `ssl_certificate_key` com o certificado SSL válido. Essa configuração está fora do escopo dessas
> instruções.

Ative o site, teste a configuração do Nginx e recarregue-a:

[!include[Enable site](../../../../../includes/amplia/ubuntu/enable-site.md)]

Teste o site:

[!include[Test site](../../../../../includes/amplia/ubuntu/test-site.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
