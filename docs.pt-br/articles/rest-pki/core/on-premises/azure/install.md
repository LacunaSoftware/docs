# Instalação do Rest PKI Core em Azure App Services

<!-- link to version in English -->
<div data-alt-locales="en-us"></div>

Para instalar uma instância [*on premises*](../index.md) do [Rest PKI Core](../../index.md) em um [Azure App Service](https://docs.microsoft.com/azure/app-service/overview),
siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md#platforms).

> [!TIP]
> Para permitir o uso do recurso de certificados SSL gratuitos pelo *App Service Managed Certificates*,
> sugerimos não escolher "naked domains", ou seja, domínios sem porção de subdomínio, por exemplo ~~patorum.com~~.
> Prefira, por exemplo, `restpki.patorum.com`.

## Preparação

As instruções a seguir assumem que você já tem instalado localmente o [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) e já possui
os seguintes recursos criados na sua conta do Azure:

* Um *SQL Server* (a criação do *SQL database* é coberta por este artigo)
* Um *App Service Plan* com sistema operacional **Linux** (a criação do App Service é coberta por este artigo)
* Uma zona de DNS referente ao domínio de acesso ao Rest PKI Core

Durante a instalação, serão criados alguns recursos:

* Um *Container Registry*
* Um banco de dados (*SQL database*)
* Uma *storage account*
* Um App Service

[!include[Recomendações](../../../../includes/azure/prep-recommendations.md)]

[!include[Criação do Container registry](../../../../includes/azure/create-acr.md)]

Uma vez concluída a criação do *container registry*, replique a imagem de Docker do sistema para ele (substitua `MY_ACR_NAME` pelo nome escolhido
no passo anterior):

```sh
az login
```

> [!NOTE]
> Caso você tenha acesso a mais de uma conta no Azure, pode ser necessário passar o argumento `--tenant YOUR_TENANT`

```sh
az acr login --name MY_ACR_NAME
az acr import --name MY_ACR_NAME --source docker.io/lacunasoftware/restpkicore:4.2.5 --image restpkicore:4.2.5
```

> [!TIP]
> Substitua `4.2.5` pela versão atualmente recomendada (veja a [instalação em Docker](../docker.md))

[!include[Criação do banco de dados](../../../../includes/azure/create-database.md)]

[!include[Criação de uma storage account](../../../../includes/azure/create-storage.md)]

[!include[Criação do App Service](../../../../includes/azure/create-webapp-docker.md)]

## Configuração do domínio

Crie o apontamento necessário para o domínio de acesso ao Rest PKI Core:

[!include[Crie o registro de DNS](../../../../includes/azure/create-dns-record.md)]

Após criar o apontamento, adicione o domínio ao *App Service*:

[!include[Adicione o domínio](../../../../includes/azure/add-custom-domain.md)]

## Configuração do Rest PKI Core

No menu lateral do App Service, na seção *Development Tools*, clique em **SSH**, em seguida em **Go &rarr;**. Você será levado a um terminal. Navegue
para a pasta `/app`:

```bash
cd /app
```

> [!TIP]
> Embora o terminal pareça iniciar na pasta `/app`, o comando acima **é necessário** devido a um bug do Azure

Execute o comando abaixo para gerar a chave criptográfica utilizada para cifrar valores sensíveis no banco de dados:

```cmd
dotnet Lacuna.RestPki.Site.dll -- gen-enc-key
```

Tome nota do valor gerado.

Escolha uma senha forte para proteger o acesso de *root* ao painel de controle, e calcule o hash dessa senha com o comando abaixo:

```cmd
dotnet Lacuna.RestPki.Site.dll -- hash-root-pass
```

Novamente, tome nota do valor gerado.

Feche o terminal, voltando ao portal do Azure. No App Service, vá em **Configuration** e adicione as seguintes configurações:

* `General__AppDiscriminator`: veja a seção [App discriminator](#app-discriminator) abaixo
* `General__EncryptionKey`: chave criptográfica gerada acima
* `General__RootPasswordHash`: hash da senha de *root* calculado acima
* `General__SiteUrl`: URL pública do site (ex: `https://restpki.patorum.com/`)
* `General__SiteName` (opcional): nome da sua instância do Rest PKI Core (o padrão é *Rest PKI Core*)
* `Oidc__Enabled`: `False` (desabilita a [integração com OpenID Connect](../configure-oidc.md), por ora)

> [!NOTE]
> Caso queira habilitar o gerenciamento de usuários via OpenID Connect, deixe a configuração `General__RootPasswordHash` em branco e siga os passos em
> [Configuração de OpenID Connect](../configure-oidc.md).

Adicione, também, as configurações descritas nas seções a seguir.

<a name="app-discriminator" />

### App discriminator

A configuração `General__AppDiscriminator` identifica a instância e é utilizada para derivar as chaves de proteção de dados do sistema.

> [!WARNING]
> Esta configuração é **obrigatória** no Azure App Services. Caso não seja definida explicitamente, um valor é derivado automaticamente e pode
> **mudar quando o container é recriado**, o que impede a decifragem dos dados sensíveis já armazenados, causando **perda de dados**. Escolha um valor
> estável (por exemplo `RestPkiCore`) e **nunca o altere** após a instalação. Para mais detalhes, veja a seção *Defina um AppDiscriminator explícito* do artigo
> [Atualização da versão 2.x para 3.0](../update-30.md).

* `General__AppDiscriminator`: um valor estável que identifica a instância, ex: `RestPkiCore`

### PKI Suite

Configurações do PKI Suite:

* `PkiSuite__SdkLicense`: sua licença para o PKI SDK, no formato Base64 (**obrigatório**)
* `PkiSuite__WebLicense`: sua licença para o componente Web PKI no formato binário (Base64). Somente obrigatório se os usuários forem assinar documentos com certificados em seus computadores (assinatura no navegador via Web PKI)

### Blob Storage

Configuração da *storage account* (o tipo de armazenamento e o nome do container já vêm pré-configurados para o ambiente Azure):

* `BlobStorage__ConnectionString`: *connection string* da *storage account* criada anteriormente
* `BlobStorage__ContainerName` (opcional): nome do *container* a ser utilizado para armazenar arquivos. Caso omitido, um container denominado *restpki* é utilizado.

### Logging

Configuração de log (o *sink* de logs para o Azure Table já vem pré-configurado para o ambiente Azure):

* `Serilog__WriteTo__0__Args__connectionString`: *connection string* da *storage account* criada anteriormente
* `Serilog__WriteTo__0__Args__storageTableName` (opcional): nome da tabela a ser utilizada para armazenar os logs. Caso omitido, uma tabela denominada *RestPkiCoreLog* é utilizada.

### Connection string

Na seção *Connection strings* (final da página de configurações), clique em **+ New connection string** e preencha:

* **Name**: `DefaultConnection`
* **Value**: valor da connection string obtido durante a criação do banco de dados
* **Type**: escolha **SQLAzure**

> [!TIP]
> O Rest PKI Core também é compatível com PostgreSQL. Caso deseje utilizar um banco de dados Azure Database for PostgreSQL, entre em contato com o suporte
> para obter mais informações. Para detalhes sobre os bancos de dados suportados, veja [Preparando um banco de dados](../prepare-database.md).

Salve as configurações feitas até o momento clicando em **Save**.

> [!NOTE]
> Sempre que a documentação mencionar algo como "na seção **Sec**, atribua a configuração **Conf** ao valor ...", no Azure App Services você deve
> compor o nome da configuração com os nomes da seção e da configuração separados por `__` (**dois** *underscores*), ou seja, no exemplo acima: `Sec__Conf`

## Iniciando o App Service

Por fim, remova a configuração `STANDBY` do App Service e salve as configurações. Em seguida, acesse a URL pública do site (o primeiro acesso pode demorar alguns instantes).

Autentique-se com a senha de *root* escolhida durante a configuração. Você então terá acesso ao painel de controle.

Para começar a utilizar o sistema, crie uma [subscription](../create-sub.md) e adicione um usuário administrador a ela.

## Veja também

* [Criando uma subscription no Rest PKI Core](../create-sub.md)
* [Atualização do Rest PKI Core em Azure App Services](update.md)
