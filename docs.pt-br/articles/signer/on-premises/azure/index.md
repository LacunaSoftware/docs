# Signer - Setup em Azure App Services

Para instalar uma instância [*on premises*](../index.md) do [Signer](../../index.md) em um [Azure App Service](https://docs.microsoft.com/azure/app-service/overview),
siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

<!--
[!include[Veja o planejamento](../includes/see-planning.md)]
-->

## Preparação

Antes de começar, obtenha o pacote de binários:

<br />
<center>
**[Pacote de binários do Signer](https://cdn.lacunasoftware.com/signer/signer-2.9.0.zip)**
</center>
<br />

As instruções a seguir assumem que você já tem os seguintes *resources* criados na sua conta do Azure:

* Um *SQL Server* (a criação do *SQL database* é coberta por este artigo)
* Um *App Service Plan* (a criação do App Service é coberta por este artigo)
* Uma zona de DNS referente ao domínio do site

Durante a instalação, serão criados alguns *resources*:

* Um banco de dados (*SQL database*)
* Uma *storage account*
* Um App Service

[!include[Recomendações](../../../includes/azure/prep-recommendations.md)]

[!include[Criação do banco de dados](../../../includes/azure/create-database.md)]

[!include[Criação de uma storage account](../../../includes/azure/create-storage.md)]

[!include[Criação do App Service](../../../includes/azure/create-webapp.md)]

## Configuração do domínio

Crie o apontamento de DNS para o domínio do site:

[!include[Crie o registro de DNS](../../../includes/azure/create-dns-record.md)]

Após criar o apontamento, adicione o domínio ao *App Service*:

[!include[Adicione o domínio](../../../includes/azure/add-custom-domain.md)]

[!include[Cópia dos binários](../../../includes/azure/deploy.md)]

## Configuração do Signer

Execute o comando abaixo em um Powershell para gerar a chave criptográfica utilizada para cifrar valores sensíveis no banco de dados:

[!include[Generate encryption key](../../../../../includes/windows/gen-encryption-key.md)]

Tome nota do valor gerado.

No App Service, vá em **Configuration** e adicione as seguintes configurações:

* `ASPNETCORE_ENVIRONMENT`: `Azure`
* `General__EncryptionKey`: chave criptográfica gerada acima
* `General__SiteUrl`: URL pública do site, no domínio configurado anteriormente, ex: `https://assinador.patorum.com/`
* `General__SiteName`: nome da sua instância do Amplia, ex: *Assinador Patorum*
* `General__SupportEmailAddress`: o endereço de e-mail de suporte (usado no rodapé dos e-mails enviados)
* `General__Theme` (opcional): esquema de cores do site -- esquemas disponíveis:
  * `acr`: amazon + cornell-red
  * `alg`: azure-lime + green
  * `clg`: cerulean-lime + green
  * `cam`: charcoal + amazonite
  * `clc`: cobalt-lemon + curry
  * `dcg`: dark-cerulean + green
  * `dgy`: dark-grey + yellow
  * `dir`: dark-indigo + red
  * `eva`: english-vermillion + arsenic
  * `gdc`: green + dark-coral
  * `idg`: independence-green
  * `osg`: onyx + satin-gold
  * `qbm`: queen-blue + mint
  * `tbg`: teal-blue + gold
* `General__PersonalAccountsEnabled`: por padrão, o sistema é "fechado", ou seja, exige que usuários sejam previamente cadastrados em uma organização para poderem utilizar o sistema.
  Para deixar o sistema "aberto" ou seja, permitir que usuários se registrem e utilizem livremente o sistema (sem aprovação de um administrador), inclua essa configuração com valor `true`
* `General__EnableDocumentTypes`: por padrão, a seleção de tipo de documento não é exibida ao criar documentos. Para exibi-la, inclua essa configuração com valor `true`
* `General__EnableElectronicSignature`: por padrão, assinaturas eletrônicas (sem certificado digital) estão desabilitadas. Para habilitá-las, inclua essa configuração com valor `true`

Adicione, também, as configurações descritas nas seções a seguir.

### PKI Suite

Configurações do PKI Suite:

  * `PKiSuite__SdkLicense`: sua licença para PKI SDK, no formato Base64 (**obrigatório**)
  * `PKiSuite__WebLicense`: sua licença para o componente Web PKI no formato binário (Base64) (**obrigatório**)
  * `PKiSuite__LappEnabled`: `true` ou `false`. Indica se a opção de Lapp deve ser habilitada (**opcional**)

### Envio de email

Configurações de envio de email:

  * `Email__Enabled`: por padrão, o envio de email está habilitado. Para desabilitar, defina esta configuração como `false` e ignore o restante desta seção.
  * `Email__ServerHost`: *hostname* do servidor SMTP
  * `Email__EnableSsl`: por padrão, a conversação SMTP é executada por SSL. Para desativar o SSL, defina essa configuração como `false`
  * `Email__ServerPort`: Por padrão, a conversação SMTP é realizada pela porta 587. Defina esta configuração para usar uma porta diferente
  * `Email__Username` e `Email__Password`: se o servidor SMTP exigir autenticação, defina essas configurações
  * `Email__SenderAddress`: endereço de e-mail a ser usado como remetente (do campo)
  * `Email__SenderName`: nome a ser usado como o nome do remetente (opcional)

### Integração com provedor de OpenID Connect

O Signer requer um provedor de Open ID Connect (OIDC), mais especificamente uma *subscription* do [GrantID](../../../grant-id/index.md).

Você pode usar uma *subscription* em nosso serviço SaaS em [grantid.com](https://grantid.com/) ou [instalar sua instância própria do GrantID](../../../grant-id/on-premises/index.md).

<!--
> [!TIP]
> On Docker, see [Using a stack with GrantID](docker/internal-grantid.md) to install both Amplia and GrantID on the same stack
-->

De posse dos parâmetros da sua *subscription* do GrantID, adicione as seguintes configurações:

* `Oidc__Authority`: a *OIDC authority* (ex: `https://patorum.grantid.com`)
* `Oidc__ApiEndpoint`: o endereço da API do GrantID (ex: `https://api.grantid.com`)
* `Oidc__ApiName`: o escopo de API que será exigido nos tokens de acesso
* `Oidc__ClientAppId`: o *App-Id* da aplicação frontend
* `Oidc__AppId`: o *App-Id* da aplicação backend
* `Oidc__AppSecret`: um segredo para autenticação da aplicação backend
* `Oidc__CpfClaim`: coloque o nome da *claim* de CPF da subscription caso não seja `cpf`
* `Oidc__CustomScopes`: coloque o nome do escopo de CPF da subscription
* `Oidc__RequireHttps` (opcional): atribua o valor `false` caso esteja usando uma instância própria do GrantID sem HTTPS (não recomendado)

> [!TIP]
> Se a subscription utilizar o CPF como chave, coloque em `Oidc__CpfClaim` e `Oidc__CustomScopes` o valor `preferred_username`

### Blob Storage

Configuração da *storage account*:

* `BlobStorage__ConnectionString`: *connection string* da *storage account* criada anteriormente
* `BlobStorage__ContainerName` (opcional): nome do *container* a ser utilizado para armazenar arquivos. Caso omitido, um container denominado *signer* é utilizado.

### Logging

Configuração de log:

* `Serilog__WriteTo__0__Args__connectionString`: *connection string* da *storage account* criada anteriormente
* `Serilog__WriteTo__0__Args__storageTableName` (opcional): nome da tabela a ser utilizada para armazenar os logs. Caso omitido, uma tabela denomiada *SignerLog* é utilizada.

### Connection string

Na seção *Connection strings* (final da página de configurações), clique em **+ New connection string** e preencha:

* **Name**: `DefaultConnection`
* **Value**: valor da connection string obtido durante a criação do banco de dados
* **Type**: escolha **SQLAzure**

Salve as configurações feitas até o momento clicando em **Save**.

## Iniciando o App Service

Por fim, em **Overview** do App Service, clique em **Start**. Em seguida, acesse a URL do site (o primeiro acesso pode demorar alguns instantes).

Clique em **Login** e registre-se. Você então será "promovido" a administrador (o primeiro usuário que se registra é automaticamente promovido),
tendo acesso pleno ao sistema, e a instalação estará concluída.

<!--
## Veja também

* [Atualização do Amplia em Azure App Services](update.md)
* [Resolução de problemas](troubleshoot/index.md)
-->
