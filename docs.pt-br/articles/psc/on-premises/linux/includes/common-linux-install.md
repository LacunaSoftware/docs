Crie um usuário local para executar o servidor de aplicação do Lacuna PSC:

[!include[Create user](../../../../../../includes/psc/linux/create-user.md)]

Crie a pasta do site, baixe e extraia os binários:

> [!NOTE]
> Para testar a [próxima versão](../../../changelog.md#vnext) do Lacuna PSC, atualmente em estágio *Release Candidate*, substitua `psc-x.y.z.tar.gz` nos comandos abaixo
> por `psc-1.3.0-rc01.tar.gz`. **Cuidado**: versões *Release Candidate* não são adequadas para produção e, portanto, devem ser instaladas apenas em ambientes de
> homologação/testes!

[!include[Copy files](../../../../../../includes/psc/linux/copy-files.md)]

> [!NOTE]
> Os arquivos do site podem ser lidos por qualquer usuário mas só podem ser alterados por usuários com permissões elevadas. Isso significa que o usuário da aplicação (*lacuna-psc*)
> pode ler os arquivos mas não pode alterá-los (isso é intencional).

Crie o arquivo de configuração do Lacuna PSC a partir do template fornecido:

[!include[Move settings template](../../../../../../includes/psc/linux/move-settings-template.md)]

> [!NOTE]
> Arquivos de configuração só podem ser lidos por membros do grupo *lacuna-psc* e só podem ser alterados por usuários com permissões elevadas. Isso é importante para proteger informações
> sigilosas armazenadas no arquivo de configuração dos demais usuários da máquina.

## Gere um certificado para assinar tokens de OAuth

Gere um certificado auto-assinado para assinar os tokens de OAuth emitidos pela aplicação:

[!include[Generate certificate](../../../../../../includes/psc/linux/gen-cert.md)]

## Configure as raízes confiáveis

Edite o arquivo de definição das raízes confiáveis:

[!include[Edit trust](../../../../../../includes/psc/linux/edit-trust.md)]

Insira as raízes confiáveis conforme abaixo:

[!include[Trust sample](../../../../../../includes/spa-config/trust-config-sample.md)]

* O campo `Version` deve ser mantido
* A coleção `StandardPkis` pode conter `Brazil`, `Italy` ou `Peru` denotando que as raízes desses países devem ser consideradas confiáveis
* A coleção `TrustedRoots` pode conter certificados confiáveis adicionais de AC raiz em formato Base64

> [!WARNING]
> Este arquivo não suporta comentários

## Configure o Lacuna PSC

Edite o arquivo de configuração e siga as instruções nele para configurar sua instância do Lacuna PSC:

[!include[Edit settings](../../../../../../includes/psc/linux/edit-settings.md)]

Na seção `[General]`, para preencher o parâmetro `EncryptionKey` gere uma chave de 256 bits para cifrar dados sensíveis armazenados no banco de dados:

[!include[Generate key](../../../../../../includes/linux/gen-key.md)]

Na seção `[Amplia]`, para preencher o parâmetro `ApiKey` é preciso criar uma aplicação na sua instância do [Amplia](../../../../amplia/index.md)
e gerar uma chave de API para a aplicação:

[!include[Amplia config](../../includes/amplia-config.md)]

Siga os passos em [Configuração de OpenID Connect](../../configure-oidc.md) para preencher a seção `[Oidc]`.

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
