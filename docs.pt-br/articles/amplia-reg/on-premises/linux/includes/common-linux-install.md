Crie um usuário local para executar o servidor de aplicação do Amplia Reg:

[!include[Create user](../../../../../../includes/amplia-reg/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

> [!NOTE]
> Para testar a [próxima versão](../../../changelog.md#vnext) do Amplia Reg, atualmente em estágio *Release Candidate*, substitua `ampliareg-x.y.z.tar.gz` nos comandos abaixo
> por `ampliareg-1.6.0-rc04.tar.gz`. **Cuidado**: versões *Release Candidate* não são adequadas para produção e, portanto, devem ser instaladas apenas em ambientes de
> homologação/testes!

[!include[Copy files](../../../../../../includes/amplia-reg/linux/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*ampliareg*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Amplia Reg a partir do template fornecido:

[!include[Move settings template](../../../../../../includes/amplia-reg/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *ampliareg* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Configure o Amplia Reg

Edite o arquivo de configuração e siga as instruções nele para configurar sua instância do Amplia Reg:

[!include[Edit settings](../../../../../../includes/amplia-reg/linux/edit-settings.md)]

Na seção `[General]`, para preencher o parâmetro `EncryptionKey` gere uma chave de 256 bits para cifrar dados sensíveis armazenados no banco de dados:

[!include[Generate key](../../../../../../includes/linux/gen-key.md)]

Ainda na seção `[General]`, para preencher o parâmetro `RootPasswordHash` escolha uma senha forte para o acesso de root e compute o *hash* da senha:

[!include[Hash root password](../../../../../../includes/amplia-reg/linux/hash-root-pass.md)]

Na seção `[Amplia]`, para preencher o parâmetro `ApiKey` é preciso criar uma aplicação na sua instância do [Amplia](../../../../amplia/index.md)
e gerar uma chave de API para a aplicação:

[!include[Amplia config](../../includes/amplia-config.md)]

Para preencher os parâmetros da seção `[Amplia:DeviceCertificates]`, siga as instruções em [Criação de AC para certificados de dispositivo](../../../../amplia/operation/create-device-ca.md).

Preencha os demais parâmetros de acordo com as instruções presentes no arquivo de configuração.

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../../includes/amplia-reg/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../../includes/amplia-reg/linux/service-definition.md)]

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../../includes/amplia-reg/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../../includes/amplia-reg/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `systemctl restart ampliareg`

Para testar se o servidor do Amplia está rodando, execute:

[!include[Test service](../../../../../../includes/amplia-reg/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../../includes/amplia-reg/linux/test-service-output.md)]
