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

## Exemplo

Em um ambiente de produção, tipicamente se utilizaria um orquestrador de Docker e um servidor de SQL Server dedicado ou em nuvem (IaaS).
Entretanto, para fins de teste, é possível rodar uma instância do Rest PKI Core com um banco de dados SQL Server Express (que não tem custo) local utilizando apenas
o Docker.

Comece criando um volume para o banco de dados:

[!include[Create SQL volume](../../../../../includes/rest-pki/core/docker/create-sql-volume.md)]

Inicie o banco de dados com uma senha da sua preferência (substitua `SOME_PASS` abaixo):

[!include[Run SQL Server Express](../../../../../includes/rest-pki/core/docker/run-sql.md)]

Acompanhe a saída do console para eventuais erros. Esse processo pode levar alguns minutos.

Uma vez que o SQL Server esteja executando, abra outro terminal para iniciar a instância do Rest PKI Core.

Crie um volume para utilizar como *blob storage*:

[!include[Create data volume](../../../../../includes/rest-pki/core/docker/create-data-volume.md)]

Em seguida, baixe o [arquivo de configuração de exemplo](https://cdn.lacunasoftware.com/restpkicore/docker/restpkicore.env), salve-o com nome
*restpkicore.env* e preencha-o.

* Em `ConnectionStrings__DefaultConnection` use `Data Source=HOST_IP_ADDRESS;Initial Catalog=RestPkiCore;User ID=sa;Password=SOME_PASS` (substitua `HOST_IP_ADDRESS` pelo endereço de IP da máquina *host* e `SOME_PASS` pela senha escolhida para o SQL Server)
* Na seção de configuração de *blob storage*, deixe os parâmetros padrão (`BlobStorage__Type=FileSystem` e `BlobStorage__Path=/var/app`)

Por fim, execute um container com a imagem usando o arquivo de configuração, montando o volume `restpkicore` em `/var/app` e expondo a aplicação (que escuta
na porta 80) na porta 8080 da máquina *host*:

[!include[Docker run](../../../../../includes/rest-pki/core/docker/run.md)]

> [!TIP]
> Caso tenha privilégios suficientes, o Rest PKI Core tentará criar o banco de dados no servidor caso ele não exista (é isso que acontecerá nesse caso)

Verifique a saída no console para eventuais erros de configuração. Se tudo estiver configurado corretamente, você deve ter uma instância do Rest PKI Core
rodando em [localhost:8080](http://localhost:8080/)

## Veja também

* [Configuração de gerenciamento de usuários](configure-oidc.md)
