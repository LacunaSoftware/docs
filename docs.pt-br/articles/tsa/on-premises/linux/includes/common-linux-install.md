Crie um usuário local para executar o servidor de aplicação do Lacuna TSA:

[!include[Create user](../../../../../../includes/tsa/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

[!include[Copy files](../../../../../../includes/tsa/linux/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*lacuna-tsa*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Lacuna TSA a partir do template fornecido:

[!include[Move settings template](../../../../../../includes/tsa/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *lacuna-tsa* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

> [!WARNING]
> Este arquivo não suporta comentários

## Configure o Lacuna TSA

Edite o arquivo de configuração e siga as instruções nele para configurar sua instância do Lacuna TSA:

[!include[Edit settings](../../../../../../includes/tsa/linux/edit-settings.md)]

Se a chave do seu certificado de TSA estiver hospedada em uma instância do Amplia, será necessário preencher a seção `[Amplia]`. Para preencher o parâmetro `ApiKey` é preciso criar uma
aplicação na sua instância do Amplia e gerar uma chave de API para a aplicação:

[!include[Amplia config](../../includes/amplia-config.md)]

Preencha os demais parâmetros de acordo com as instruções presentes no arquivo de configuração.

## Configurar um *daemon*

Crie o arquivo de definição do serviço:

[!include[Create service](../../../../../../includes/tsa/linux/create-service.md)]

Digite o seguinte:

[!include[Service definition](../../../../../../includes/tsa/linux/service-definition.md)]

Salve o arquivo, habilite o serviço e inicie-o:

[!include[Start service](../../../../../../includes/tsa/linux/start-service.md)]

A saída esperada é semelhante a:

[!include[Expected output](../../../../../../includes/tsa/linux/start-service-output.md)]

Se necessário, reinicie o serviço: `systemctl restart lacuna-tsa`

Para testar se o servidor do Lacuna TSA está rodando, execute:

[!include[Test service](../../../../../../includes/tsa/linux/test-service.md)]

A saída esperada é algo como:

[!include[Expected output](../../../../../../includes/tsa/linux/test-service-output.md)]
