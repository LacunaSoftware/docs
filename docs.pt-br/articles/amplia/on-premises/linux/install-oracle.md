# Instalação do Amplia em Oracle Linux

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

* Oracle Linux 7.x

[!include[Common prerequisites](../includes/common-requisites.md)]

## Instale o ASP.NET Core Runtime

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
> `vi` ou instale o nano executando `sudo yum install nano`.

Crie um usuário local para executar o servidor de aplicação do Amplia:

[!include[Create user](../../../../../includes/amplia/centos/create-user.md)]

Crie uma pasta para armazenar os logs da aplicação:

[!include[Create log directory](../../../../../includes/amplia/centos/create-log-dir.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../includes/amplia/centos/copy-files.md)]

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

[!include[Expected output](../../../../../includes/amplia/centos/start-service-output.md)]

Se necessário, reinicie o serviço: `sudo systemctl restart amplia`

Para testar se o servidor do Amplia está rodando, execute:

[!include[Test service](../../../../../includes/amplia/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../includes/amplia/linux/test-service-output.md)]

## Configurar um servidor proxy reverso

> [!NOTE]
> Se você preferir usar o Apache ao invés do Nginx, [veja este artigo](https://docs.microsoft.com/pt-br/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Instale o Nginx (se ainda não estiver instalado)

[!include[Install nginx](../../../../../includes/amplia/oracle/install-nginx.md)]

Teste a instalação do Nginx:

[!include[Test nginx](../../../../../includes/amplia/centos/test-nginx.md)]

Verifique as primeiras linhas da saída, que devem ser similares a:

[!include[Expected output](../../../../../includes/amplia/centos/test-nginx-output.md)]

Desabilite o site padrão do Nginx:

[!include[Disable default site](../../../../../includes/amplia/centos/disable-default-site.md)]

Crie um arquivo de configuração para o site do Amplia:

[!include[Create site](../../../../../includes/amplia/centos/create-site.md)]

Digite o seguinte, substituindo o valor do item `server_name` pelo domínio de acesso ao painel de controle (veja [Domínio de acesso ao painel de controle](../index.md#dashboard-domain)):

[!include[Site definition](../../../../../includes/amplia/linux/site-definition.md)]

> [!TIP]
> Idealmente, a configuração do site deve conter as entradas `ssl_certificate` e `ssl_certificate_key` com o certificado SSL válido. Essa configuração está fora do escopo dessas
> instruções.

Permita que o Nginx acesse o serviço do Amplia:

[!include[Allow service access](../../../../../includes/amplia/centos/allow-service-access.md)]

Teste a configuração do Nginx e recarregue-a:

[!include[Test Nginx](../../../../../includes/amplia/linux/reload-nginx.md)]

Teste o site:

[!include[Test site](../../../../../includes/amplia/linux/test-site.md)]

Abra as portas HTTP e HTTPS do seu servidor para tráfego externo (caso ainda não estejam abertas):

[!include[Allow traffic](../../../../../includes/amplia/centos/allow-http.md)]

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
