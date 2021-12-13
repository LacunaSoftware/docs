# Setup do Rest PKI Core em Docker

Para instalar uma instância [*on premises*](index.md) do [Rest PKI Core](../index.md) em Docker, siga os passos abaixo. Para outros ambientes, [clique aqui](index.md#platforms).

A imagem de Docker do Rest PKI Core encontra-se disponível no Docker Hub:

<br />
<center>
**[Rest PKI Core Docker image](https://hub.docker.com/repository/docker/lacunasoftware/restpkicore)**
</center>
<br />

A imagem atualmente recomendada é a `lacunasoftware/restpkicore:1.6`

Tags móveis disponíveis:

* A tag `1.6` aponta para a última imagem 1.6.x **(recomendada)**
* A tag `1` aponta para a última imagem 1.x
* A tag `stable` aponta para a última image estável

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
ambas portas para a porta 80 do Rest PKI Core. Ademais, seu proxy deve preencher os *request headers* `X-Forwarded-Proto`, `X-Forwarded-For`
e `X-Forwarded-Port`. A configuração `Bindings__UseReverseProxy=True` instrui o Rest PKI Core a confiar nas informações preenchidas nestes headers.

## Exemplos

Em um ambiente de produção, tipicamente se utilizaria um orquestrador de Docker. Entretanto, para fins de teste, é possível rodar o Rest PKI Core apenas com Docker.

Para fins de teste, vamos utilizar como *blob storage* um volume de Docker simples chamado `restpkicore` montado em `/var/app`. Comece criando o volume:

[!include[Create volume](../../../../../includes/rest-pki/core/docker/create-volume.md)]

Em seguida, baixe o [arquivo de configuração de exemplo](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env) e salve-o com nome
*restpkicore.env*, e então preencha-o. Na seção de configuração de *blob storage*, deixe os parâmetros padrão (`BlobStorage__Type=FileSystem` e `BlobStorage__Path=/var/app`).

Por fim, vamos rodar a imagem num container com o arquivo de configuração, montando o volume `restpkicore` em `/var/app` e expondo a aplicação (que escuta
na porta 80) na porta 8080 do *host*:

[!include[Docker run](../../../../../includes/rest-pki/core/docker/run.md)]

Verifique a saída no console para eventuais erros de configuração. Se tudo estiver configurado corretamente, você deve ter uma instância do Rest PKI Core
rodando em [localhost:8080](http://localhost:8080/)

## Veja também

* [Configuração de gerenciamento de usuários](configure-oidc.md)
