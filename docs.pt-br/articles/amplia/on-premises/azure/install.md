# Instalação do Amplia em Azure App Services

Para instalar uma instância [*on premises*](../index.md) do [Amplia](../../index.md) em um [Azure App Service](https://docs.microsoft.com/azure/app-service/overview),
siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

[!include[Veja o planejamento](../includes/see-planning.md)]

> [!TIP]
> Para permitir o uso do recurso de certificados SSL gratuitos pelo *App Service Managed Certificates*,
> sugerimos não escolher "naked domains", ou seja, domínios sem porção de subdomínio, por exemplo ~~patorum.com~~.
> Prefira, por exemplo, `ac.patorum.com`.

## Preparação

As instruções a seguir assumem que você já tem instalado localmente o [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) e já possui
os seguintes *resources* criados na sua conta do Azure:

* Um *SQL Server* (a criação do *SQL database* é coberta por este artigo)
* Um *App Service Plan* com sistema operacional **Linux** (a criação do App Service é coberta por este artigo)
* Zonas de DNS referentes ao [domínio de acesso ao painel de controle](../index.md#dashboard-domain)
  e aos [domínios de acesso](../index.md#access-domains)

Durante a instalação, serão criados alguns *resources*:

* Um *Container Registry*
* Um banco de dados (*SQL database*)
* Uma *storage account*
* Um App Service
* Um Azure Key Vault (opcional)

Sugerimos criar um **resource group** para agrupar os *resources* criados. Entretanto, essa é uma medida com propósito meramente de organização. O que
realmente é importante é que **todos os resources sejam criados na mesma região**. Isso é fundamental para o funcionamento adequado do sistema.

[!include[Criação do Container registry](../../../includes/azure/create-acr.md)]

Uma vez concluida a criação do *container registry*, replique a imagem de Docker do sistema para ele (substitua `MY_ACR_NAME` pelo nome escolhido
no passo anterior):

```sh
az login
az acr import --name MY_ACR_NAME --source docker.io/lacunasoftware/amplia:4.6.0-rc01 --image amplia:4.6.0-rc01
```

[!include[Criação do banco de dados](../../../includes/azure/create-database.md)]

[!include[Criação de uma storage account](../../../includes/azure/create-storage.md)]

[!include[Criação do App Service](../../../includes/azure/create-webapp-docker.md)]

## Configuração de domínios

Crie os apontamentos necessários para o [domínio de acesso ao painel de controle](../index.md#dashboard-domain) e
os [domínios de acesso](../index.md#access-domains):

> [!NOTE]
> Dependendo das suas escolhas, o procedimento abaixo pode ter que ser feito apenas 1 vez (se você escolheu apenas um
> domínio de acesso e pretende usá-lo também como domínio de acesso ao painel de controle) ou até 3 vezes (se você escolheu
> dois domínios de acesso e pretende usar um terceiro domínio para acessar o painel de controle).

[!include[Crie o registro de DNS](../../../includes/azure/create-dns-record.md)]

Após criar os apontamentos para todos os domínios (de 1 a 3 domínios dependendo das suas escolhas),
adicione os domínios ao *App Service* (repita o procedimento abaixo para cada domínio):

[!include[Adicione o domínio](../../../includes/azure/add-custom-domain.md)]

Uma vez adicionados os domínios ao App Service, crie um *App Service Managed Certificate* (certificado SSL gratuito ofertado pelo Azure)
para cada domínio (repita o procedimento abaixo para cada domínio):

[!include[Crie um Managed Certificate](../../../includes/azure/create-managed-certificate.md)]

Após criar os certificados SSL para cada domínio, associe-os aos domínios (repita o procedimento abaixo para cada domínio):

[!include[Associe o certificado](../../../includes/azure/bind-certificate.md)]

## Configuração do Amplia

No menu lateral do App Service, na seção *Development Tools*, clique em **SSH**, em seguida em **Go →**. Você será levado a um terminal. Execute:

```bash
cd /app
```

Execute o comando abaixo para gerar a chave criptográfica utilizada para cifrar valores sensíveis no banco de dados:

```cmd
dotnet Lacuna.Amplia.Site.dll -- gen-enc-key
```

Tome nota do valor gerado.

Escolha uma senha forte para proteger o acesso de *root* ao painel de controle, e calcule o hash dessa senha com o comando abaixo:

```cmd
dotnet Lacuna.Amplia.Site.dll -- hash-root-pass
```

Novamente, tome nota do valor gerado.

Feche o terminal, voltando ao portal do Azure. No App Service, vá em **Configuration** e adicione as seguintes configurações:

* `ASPNETCORE_ENVIRONMENT`: `Azure`
* `General__EncryptionKey`: chave criptográfica gerada acima
* `General__RootPasswordHash`: hash da senha de *root* calculado acima
* `General__SiteUrl`: URL pública do site, localizada no [domínio de acesso ao painel de controle](../index.md#dashboard-domain) (ex: `https://ca.patorum.com/`)
* `General__SiteName`: nome da sua instância do Amplia, ex: *Patorum CA*
* `Oidc__Enabled`: `False` (desabilita a [integração com OpenID Connect](../configure-oidc.md), por ora)

Adicione, também, as configurações descritas nas seções a seguir.

### Domínios de acesso

Configure os [domínios de acesso](../index.md#access-domains):

* `Amplia__AccessDomains`: domínios de acesso separados por vírgula, ex: `ca.patorum.com,ca.patorum.org`

### PKI Suite

Configurações do PKI Suite:

* `PkiSuite__SdkLicense`: sua licença para PKI SDK, no formato Base64 (**obrigatório**)
* `PkiSuite__WebLicense`: sua licença para o componente Web PKI no formato binário (Base64). Somente obrigatório se usuário vai emitir certificados em seus computadores (procedimento de emissão web)

### Blob Storage

Configuração da *storage account*:

* `BlobStorage__ConnectionString`: *connection string* da *storage account* criada anteriormente
* `BlobStorage__ContainerName` (opcional): nome do *container* a ser utilizado para armazenar arquivos. Caso omitido, um container denominado *amplia* é utilizado.

### Logging

Configuração de log:

* `Serilog__WriteTo__0__Args__connectionString`: *connection string* da *storage account* criada anteriormente
* `Serilog__WriteTo__0__Args__storageTableName` (opcional): nome da tabela a ser utilizada para armazenar os logs. Caso omitido, uma tabela denomiada *AmpliaLog* é utilizada.

### Connection string

Na seção *Connection strings* (final da página de configurações), clique em **+ New connection string** e preencha:

* **Name**: `DefaultConnection`
* **Value**: valor da connection string obtido durante a criação do banco de dados
* **Type**: escolha **SQLAzure** ou **PostgreSQL** de acordo com o tipo de banco de dados criado

Salve as configurações feitas até o momento clicando em **Save**.

### Armazenamento de chaves

Conforme explicado na seção [Armazenamento de chaves](../index.md#key-storage) do planejamento da instalação, é preciso configurar pelo menos um key store para
armazenar chaves. No Azure, recomendamos armazenar chaves no **Azure Key Vault**. Para tanto, siga as [instruções de configuração](../key-stores/azure.md) usando
como nome do key store o valor `Azure`. Em seguida, adicione a configuração:

* `Amplia__DefaultKeyStore`: `Azure`

Outra opção é utilizar o [Armazenamento em banco de dados](../key-stores/database.md). Nesse caso, adicione as seguintes configurações:

* `Amplia__DatabaseKeyStoreEnabled`: `True`
* `Amplia__DefaultKeyStore`: `Database`

[!include[Optional settings](../includes/optional-settings.md)]

> [!NOTE]
> Nos links acima, sempre que for mencionado algo como "na seção **Sec**, atribua a configuração **Conf** ao valor ...", no Azure App Services você deve
> compor o nome da configuração com os nomes da seção e da configuração separados por `:`, ou seja, no exemplo acima: `Sec:Conf`

## Iniciando o App Service

Por fim, em **Overview** do App Service, clique em **Start**. Em seguida, acesse a URL do painel de controle (o primeiro acesso pode demorar alguns instantes).

Autentique-se com a senha de *root* escolhida durante a configuração. Você então terá acesso ao painel de controle, e a instalação estará concluída.

## Veja também

* [Atualização do Amplia em Azure App Services](update.md)
* [Resolução de problemas](troubleshoot/index.md)
