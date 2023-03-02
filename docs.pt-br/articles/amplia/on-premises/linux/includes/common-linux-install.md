Crie um usuário local para executar o servidor de aplicação do Amplia:

[!include[Create user](../../../../../../includes/amplia/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

<!--
> [!NOTE]
> Para testar a [próxima versão](../../../changelog.md#vnext) do Amplia, atualmente em estágio *Release Candidate*, substitua `amplia-x.y.z.tar.gz` nos comandos abaixo
> por `amplia-4.1.0-rc09.tar.gz`. **Cuidado**: versões *Release Candidate* não são adequadas para produção e, portanto, devem ser instaladas apenas em ambientes de
> homologação/testes!
-->

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

<a name="encryption-key-generation" />

Na seção `[General]`, para preencher o parâmetro `EncryptionKey` gere uma chave de 256 bits para cifrar dados sensíveis armazenados no banco de dados:

[!include[Generate key](../../../../../../includes/amplia/linux/gen-key.md)]

Ainda na seção `[General]`, para preencher o parâmetro `RootPasswordHash` escolha uma senha forte para o acesso de root e compute o *hash* da senha:

[!include[Hash root password](../../../../../../includes/amplia/linux/hash-root-pass.md)]

Preencha os demais parâmetros de acordo com as instruções presentes no arquivo de configuração.

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../../includes/amplia/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../../includes/amplia/linux/service-definition.md)]

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../../includes/amplia/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../../includes/amplia/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `systemctl restart amplia`

Para testar se o servidor do Amplia está rodando, execute:

[!include[Test service](../../../../../../includes/amplia/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../../includes/amplia/linux/test-service-output.md)]
