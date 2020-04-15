Crie um usuário local para executar o servidor de aplicação do Signer:

[!include[Create user](../../../../../../includes/signer/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../../includes/signer/linux/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*signer*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Signer a partir do template fornecido:

[!include[Move settings template](../../../../../../includes/signer/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *signer* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Configure o Signer

Edite o arquivo de configuração para configurar sua instância do Signer:

[!include[Edit settings](../../../../../../includes/signer/linux/edit-settings.md)]

[!include[Database config](../../includes/database-config.md)]

<a name="encryption-key-generation" />

### Configurações gerais

Gere uma chave de 256 bits para cifrar segredos armazenadas em banco de dados:

[!include[Generate key](../../../../../../includes/signer/linux/gen-key.md)]

[!include[Bindings config](../../../../includes/spa-config/bindings.md)]

[!include[General config](../../includes/general-config.md)]

[!include[PKI Suite config](../../includes/pki-config.md)]

[!include[Email config](../../includes/email-config.md)]

[!include[OIDC config](../../includes/oidc-config.md)]

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../../includes/signer/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../../includes/signer/linux/service-definition.md)]

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../../includes/signer/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../../includes/signer/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `systemctl restart signer`

Para testar se o servidor do Signer está rodando, execute:

[!include[Test service](../../../../../../includes/signer/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../../includes/signer/linux/test-service-output.md)]
