# Setup do Rest PKI Core em Docker

Para instalar uma instância [*on premises*](index.md) do [Rest PKI Core](../index.md) em Docker, siga os passos abaixo. Para outros ambientes, [clique aqui](index.md#platforms).

A imagem de Docker do Rest PKI Core encontra-se disponível no Docker Hub:

<br />
<center>
**[Rest PKI Core Docker image](https://hub.docker.com/r/lacunasoftware/restpkicore)**
</center>
<br />

A imagem atualmente recomendada é a `lacunasoftware/restpkicore:2.2`

Tags móveis disponíveis:

* A tag `2.0` aponta para a última imagem 2.2.x **(atualmente recomendada)**
* A tag `2` aponta para a última imagem 2.x
* A tag `stable` aponta para a última imagem estável

<!--
<a name="vnext" />

> [!NOTE]
> Para testar a próxima versão do Rest PKI Core, atualmente em estágio *Release Candidate*, use a imagem `lacunasoftware/restpkicore:2.0.0-rc08`.
> **Cuidado**: versões *Release Candidate* não são adequadas para produção e, portanto, devem ser instaladas apenas em ambientes de homologação/testes!
-->

Esta imagem requer:

* Um **blob storage** compartilhado entre todos os containers rodando a imagem -- veja [Configuração de Blob Storage](configure-blob-storage.md)

[!include[Common prerequisites](includes/common-requisites.md)]

## Configuração

Esta imagem é configurada utilizando variáveis de ambiente. Obtenha o [**arquivo de configuração de exemplo**](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env)
para um guia de como preencher os parâmetros necessários.

Para preencher o parâmetro `General__EncryptionKey`, gere uma chave de 256 bits para encriptar dados sensíveis armazenados no banco de dados:

[!include[Generate key](../../../../../includes/rest-pki/core/docker/gen-encryption-key-stdout.md)]

Para preencher o parâmetro `General__RootPasswordHash`, escolha uma senha forte para acesso à interface de gerenciamento como *root* e calcule o hash dela:

[!include[Hash root password](../../../../../includes/rest-pki/core/docker/hash-root-pass-stdout.md)]

## Portas

A imagem escuta na **porta 80**.

É recomendado configurar um proxy reverso ou balanceador de carga escutando nas portas padrão HTTP (80) e HTTPS (443), redirecionando o tráfego em
ambas portas para a porta 80 do Rest PKI Core. Ademais, seu proxy deve preencher os *request headers*
[X-Forwarded-Proto](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto),
[X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) e, opcionalmente, `X-Forwarded-Port`.
A configuração `Bindings__UseReverseProxy=True` instrui o Rest PKI Core a confiar nas informações preenchidas nestes headers.

## Exemplo

Em um ambiente de produção, tipicamente se utilizaria um orquestrador de Docker e um SGBD dedicado ou em nuvem (IaaS).
Entretanto, para fins de teste, utilizando apenas o Docker é possível rodar uma instância do Rest PKI Core com um banco de dados PostgreSQL local.

Comece criando um volume para o banco de dados:

[!include[Create SQL volume](../../../../../includes/rest-pki/core/docker/create-sql-volume.md)]

Inicie o SGBD com uma senha da sua preferência (substitua `SOME_PASS` abaixo):

[!include[Run database server](../../../../../includes/rest-pki/core/docker/run-sql.md)]

Verifique os logs do container para eventuais erros:

[!include[Check database server logs](../../../../../includes/rest-pki/core/docker/check-sql-logs.md)]

Esse processo pode levar alguns minutos. Uma vez que o SGBD esteja executando, pressione CTRL+C para sair dos logs.

Crie um volume para utilizar como *blob storage*:

[!include[Create data volume](../../../../../includes/rest-pki/core/docker/create-data-volume.md)]

Em seguida, baixe o [arquivo de configuração de exemplo](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env), salve-o com nome
*restpkicore.env* e preencha-o.

Na configuração da *connection string*, use o valor abaixo substituindo `HOST_IP` pelo endereço de IP da máquina *host* e `SOME_PASS`
pela senha escolhida para o banco de dados:

[!include[Connection string](../../../../../includes/rest-pki/core/docker/sample-config-connection-string.md)]

Na configuração de *blob storage*, deixe os parâmetros padrões, pois montaremos o volume criado em `/var/app`:

[!include[Blob storage configuration](../../../../../includes/rest-pki/core/docker/sample-config-blob-storage.md)]

Por fim, execute um container com a imagem usando o arquivo de configuração, montando o volume `restpkicore_data` em `/var/app` e expondo a aplicação (que escuta
na porta 80) na porta 8080 da máquina *host*:

[!include[Docker run](../../../../../includes/rest-pki/core/docker/run.md)]

> [!TIP]
> Caso tenha privilégios suficientes, o Rest PKI Core tentará criar o banco de dados no servidor caso ele não exista (é isso que acontecerá nesse caso)

Verifique os logs do container para eventuais erros de configuração:

[!include[Check logs](../../../../../includes/rest-pki/core/docker/check-logs.md)]

Se tudo estiver configurado corretamente, você deve ter uma instância do Rest PKI Core rodando em [localhost:8080](http://localhost:8080/)

## Veja também

* [Configuração de gerenciamento de usuários](configure-oidc.md)
