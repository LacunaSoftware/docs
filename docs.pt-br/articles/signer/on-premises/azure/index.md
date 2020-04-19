# Signer - Setup em Azure App Services

Para instalar uma instância [*on premises*](../index.md) do [Signer](../../index.md) em um [Azure App Service](https://docs.microsoft.com/azure/app-service/overview),
siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

<!--
[!include[Veja o planejamento](../includes/see-planning.md)]
-->

> [!TIP]
> Para permitir o uso do recurso de certificados SSL gratuitos pelo *App Service Managed Certificates (Preview)*,
> sugerimos não escolher "naked domains", ou seja, domínios sem porção de subdomínio, por exemplo ~~patorum.com~~.
> Prefira, por exemplo, `assinador.patorum.com`.

## Preparação

Antes de começar, obtenha o pacote de binários:

<br />
<center>
**[Pacote de binários do Signer 1.2.0](https://cdn.lacunasoftware.com/signer/signer-1.2.0.zip)**
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

Sugerimos criar um **resource group** para agrupar os *resources* criados. Entretanto, essa é uma medida com propósito meramente de organização. O que
realmente é importante é que **todos os resources sejam criados na mesma região**. Isso é fundamental para o funcionamento adequado do sistema.

[!include[Criação do banco de dados](../../../includes/azure/create-database.md)]

[!include[Criação de uma storage account](../../../includes/azure/create-storage.md)]

[!include[Criação do App Service](../../../includes/azure/create-webapp-31.md)]

## Configuração do domínio

Crie o apontamento de DNS para o domínio do site:

[!include[Crie o registro de DNS](../../../includes/azure/create-dns-record.md)]

Após criar o apontamento, adicione o domínio ao *App Service*:

[!include[Adicione o domínio](../../../includes/azure/add-custom-domain.md)]

Uma vez adicionado o domínio ao App Service, crie um *App Service Managed Certificate* para este (certificado SSL gratuito ofertado pelo Azure):

[!include[Crie um Managed Certificate](../../../includes/azure/create-managed-certificate.md)]

Após criar o certificado SSL, associe-o ao domínio:

[!include[Associe o certificado](../../../includes/azure/bind-certificate.md)]

## Cópia dos binários

**TODO**

## Configuração do Signer

Execute o comando abaixo em um Powershell para gerar a chave criptográfica utilizada para cifrar valores sensíveis no banco de dados:

[!include[Generate encryption key](../../../../../includes/windows/gen-encryption-key.md)]

Tome nota do valor gerado.

No App Service, vá em **Configuration** e adicione as seguintes configurações:

* `ASPNETCORE_ENVIRONMENT`: `Azure`
* `General:EncryptionKey`: chave criptográfica gerada acima
* `General:SiteUrl`: URL pública do site, localizada no [domínio de acesso ao painel de controle](../index.md#dashboard-domain) (ex: `https://ca.patorum.com/`)
* `General:SiteName`: nome da sua instância do Amplia, ex: *Patorum CA*

Adicione, também, as configurações descritas nas seções a seguir.

**TODO**

## Iniciando o App Service

Por fim, em **Overview** do App Service, clique em **Start**. Em seguida, acesse a URL do painel de controle (o primeiro acesso pode demorar alguns instantes).

Autentique-se com a senha de *root* escolhida durante a configuração. Você então terá acesso ao painel de controle, e a instalação estará concluída.

## Veja também

* [Atualização do Amplia em Azure App Services](update.md)
* [Resolução de problemas](troubleshoot/index.md)
