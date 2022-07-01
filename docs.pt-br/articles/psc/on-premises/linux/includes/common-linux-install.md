Crie um usuário local para executar o servidor de aplicação do Lacuna PSC:

[!include[Create user](../../../../../../includes/psc/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../../includes/psc/linux/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*lacuna-psc*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Lacuna PSC a partir do template fornecido:

[!include[Move settings template](../../../../../../includes/psc/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *lacuna-psc* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Configure o Lacuna PSC

Edite o arquivo de configuração e siga as instruções nele para configurar sua instância do Lacuna PSC:

[!include[Edit settings](../../../../../../includes/psc/linux/edit-settings.md)]

Na seção `[General]`, para preencher o parâmetro `EncryptionKey` gere uma chave de 256 bits para cifrar dados sensíveis armazenados no banco de dados:

[!include[Generate key](../../../../../../includes/linux/gen-key.md)]

Ainda na seção `[General]`, para preencher o parâmetro `RootPasswordHash` escolha uma senha forte para o acesso de root e compute o *hash* da senha:

[!include[Hash root password](../../../../../../includes/psc/linux/hash-root-pass.md)]

Na seção `[Amplia]`, para preencher o parâmetro `ApiKey` é preciso criar uma aplicação na sua instância do [Amplia](../../../../amplia/index.md)
e gerar uma chave de API para a aplicação:

[!include[Amplia config](../../includes/amplia-config.md)]

Preencha os demais parâmetros de acordo com as instruções presentes no arquivo de configuração.

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../../includes/psc/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../../includes/psc/linux/service-definition.md)]

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../../includes/psc/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../../includes/psc/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `systemctl restart lacuna-psc`

Para testar se o servidor do Lacuna PSC está rodando, execute:

[!include[Test service](../../../../../../includes/psc/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../../includes/psc/linux/test-service-output.md)]
