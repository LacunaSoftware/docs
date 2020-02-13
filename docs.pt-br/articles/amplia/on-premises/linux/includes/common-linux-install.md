Crie um usuário local para executar o servidor de aplicação do Amplia:

[!include[Create user](../../../../../../includes/amplia/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../../includes/amplia/linux/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*amplia*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Amplia a partir do template fornecido:

[!include[Move settings template](../../../../../../includes/amplia/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *amplia* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Configure o Amplia

Edite o arquivo de configuração para configurar sua instância do Amplia:

[!include[Edit settings](../../../../../../includes/amplia/linux/edit-settings.md)]

[!include[Database config](../../includes/database-config.md)]

<a name="encryption-key-generation" />

### Configurações gerais

Gere uma chave de 256 bits para cifrar chaves de AC [armazenadas em banco de dados](../../key-stores/database.md):

[!include[Generate key](../../../../../../includes/amplia/linux/gen-key.md)]

Escolha uma senha forte para o acesso de root e compute o *hash* da senha utilizando o [utilitário de comando de linha](../../tool/index.md):

[!include[Hash root password](../../../../../../includes/amplia/linux/hash-root-pass.md)]

[!include[General config](../../includes/general-config.md)]

[!include[Bindings config](../../includes/bindings-config.md)]

[!include[Amplia config](../../includes/amplia-config.md)]

[!include[PKI Suite config](../../includes/pki-config.md)]

[!include[Email config](../../includes/email-config.md)]

[!include[OIDC config](../../includes/oidc-config.md)]

[!include[SMS config](../../includes/sms-config.md)]

[!include[Key store config](../../includes/key-store-config.md)]

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../../includes/amplia/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../../includes/amplia/linux/service-definition.md)]

> [!NOTE]
> Se você pretende usar chaves de curvas elípticas (EC), descomente a linha marcada acima. Neste caso, você também precisa ter certeza do seu servido ter o OpenSSL 1.1 instalado.

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../../includes/amplia/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../../includes/amplia/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `systemctl restart amplia`

Para testar se o servidor do Amplia está rodando, execute:

[!include[Test service](../../../../../../includes/amplia/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../../includes/amplia/linux/test-service-output.md)]
