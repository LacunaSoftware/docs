# Instalação do Amplia em Azure App Services

Para instalar uma instância [*on premises*](../index.md) do [Amplia](../../index.md) em um [Azure App Service](https://docs.microsoft.com/azure/app-service/overview),
siga os passos abaixo. Para outras plataformas, [clique aqui](../index.md).

[!include[Veja o planejamento](../includes/see-planning.md)]

> [!TIP]
> Para permitir o uso do recurso de certificados de *App Services* gratuitos do Azure, sugerimos não escolher "naked domains", ou seja,
> domínios sem porção de subdomínio, por exemplo ~~patorum.com~~. Prefira, por exemplo, `ac.patorum.com`.

## Preparação

Durante a instalação, serão criados alguns *resources*:

* Um banco de dados (*SQL database*)
* Uma *storage account*
* Um App Service

Sugerimos criar um **resource group** para agrupar os *resources* criados. Entretanto, essa é uma medida com propósito meramente de organização. O que
realmente é importante é que **todos os resources sejam criados na mesma região**. Isso é fundamental para o funcionamento adequado do sistema.

As instruções a seguir assumem que você já tem os seguintes *resources* criados na sua conta do Azure:

* Um *SQL Server* (a criação do *SQL database* é coberta por este artigo)
* Um *App Service Plan* (a criação do App Service é coberta por este artigo)
* Zonas de DNS referentes ao [domínio de acesso ao painel de controle](../index.md#dashboard-domain)
  e aos [domínios de acesso](../index.md#access-domains)

Antes de começar, obtenha o pacote de binários:

<br />
<center>
**[Pacote de binários do Amplia 3.3.0](https://cdn.lacunasoftware.com/amplia/amplia-3.3.0.zip)**
</center>
<br />

## Criação do banco de dados

Siga os procedimentos abaixo para criar um banco de dados para o sistema (você precisa ter um *SQL Server* previamente criado):

1. Na opção **SQL databases**, clique em **+ Add**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
1. Clique em **Next: Networking** (***não clique*** no botão padrão *Review + create*)
1. Na aba *Networking* não é necessário alterar nada

   > [!NOTE]
   > Dependendo da sua infraestrutura você pode querer restringir o acesso de rede ao banco de dados na aba *Networking*

1. Clique em **Next: Additional settings** (novamente, ***não clique*** no botão padrão *Review + create*)
1. Em **Collation** preencha `Latin1_General_100_CI_AI`
1. Clique em **Review + create**
1. Clique em **Create**

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Uma vez criado o banco de dados, obtenha a *connection string*:

1. Clique em **Connection strings**
1. Tome nota da connection string exibida na seção **ADO.NET (SQL authentication)**

> [!NOTE]
> Substitua na connection string copiada o trecho `{your_password}` pela senha do banco de dados

## Criação de uma *storage account*

Precisamos de uma *storage account* para armazenar arquivos (o Amplia armazena arquivos fora do banco de dados para mantê-lo organizado) e também os
logs de sistema. Siga os passos abaixo para criar uma *storage account* (caso queira utilizar uma conta existente, pule essa parte):

1. Em **Storage accounts**, clique em **+ Add**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
   * Em *Performance*, escolha **Standard**
   * Em *Account kind*, escolha **StorageV2**)
   * Em *Replication*, escolha a opção que preferir ([clique aqui](https://azure.microsoft.com/documentation/articles/storage-redundancy/) para detalhes
     sobre as diferentes opções de replicação).

     > [!TIP]
     > Sugerimos a opção **Geo-redundant storage (GRS)** por ser um meio-termo entre alta resiliência mas com preço acessível

   * Em *Access tier*, escolha **Hot**
1. Clique em **Review + create** (caso queira restringir o acesso de rede à *storage account*, clique em *Next: Networking* e faça as configurações necessárias)
1. Clique em **Create**

Uma vez criada a *storage account*, obtenha uma *connection string*:

1. Nas configurações da *storage acount*, clique em **Access keys**
1. Na seção **key1**, tome nota do valor do campo **Connection string**

## Criação do App Service

Siga os procedimentos abaixo para criar um *App Service* (você precisa ter um *App Service Plan* previamente criado):

1. Em **App Services**, clique em **+ Add**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
   * Em *Publish*, escolha **Code**
   * Em *Runtime stack*, escolha **.NET Core 2.1 (LTS)**
1. Clique em **Review + create**
1. Clique em **Create**

Uma vez criado o App Service, tome nota de seu domínio, por exemplo `meu-app-service.azurewebsites.net`.

## Configuração de domínios

Crie os apontamentos necessários para o [domínio de acesso ao painel de controle](../index.md#dashboard-domain) e
os [domínios de acesso](../index.md#access-domains).

Dependendo das suas escolhas, o procedimento abaixo pode ter que ser feito apenas 1 vez (se você escolheu apenas um
domínio de acesso e pretende usá-lo também como domínio de acesso ao painel de controle) ou até 3 vezes (se você escolheu
dois domínios de acesso e pretende usar um terceiro domínio para acessar o painel de controle).

> [!NOTE]
> Nas instruções abaixo, utilizaremos como exemplo a criação do apontamento para o domínio `ac.patorum.com`

1. Em **DNS zones**, clique na zona à qual o domínio de acesso pertence (ex: `patorum.com`)
1. Clique em **+ Record set**
1. Em *Name*, digite a porção mais à esquerda do domínio de acesso (ex: `ac`)
1. Em *Type*, selecione **CNAME**
1. Em *Alias record set*, selecione **No**
1. Em *Alias*, preencha o domínio do App Service (ex: `meu-app-service.azurewebsites.net`)
1. Clique em **OK**

Após criar os apontamentos para todos os domínios (de 1 a 3 domínios dependendo das suas escolhas), retorne às configurações
do App Service, clique em **Custom domains** e repita o procedimento abaixo para cada domínio:

1. Clique em **+ Add custom domain**
1. Preencha o domínio (ex: `ac.patorum.com`)
1. Clique em **Validate**
1. Após a validação, clique em **Add custom domain**

Uma vez adicionados os domínios ao App Service, clique em **TLS/SSL settings** e repita os passos abaixo para cada domínio:

1. Clique na aba **Private Key Certificates (.pfx)**
1. Clique em **Create App Service Managed Certificate**
1. Escolha o domínio
1. Clique em **Create**

Após criar os certificados SSL para cada domínio, volte em **Custom domains** e siga os passos abaixo para cada domínio:

1. Na listagem de domínios, localize o domínio em questão (marcado como *Not Secure*) e clique em **Add binding**
1. Em *Private Certificate Thumbprint*, escolha a única opção disponível
1. Em *TLS/SSL Type*, escolha **SNI SSL**
1. Clique em **Add Binding**

## Configuração do Amplia

Agora iremos configurar o site. Pare-o clicando em **Stop**. Em seguida, vá em **Configuration** e insira as seguintes configurações:

(TODO...)

Na seção *Connection strings*, clique em **+ New connection string** e preencha:

* **Name**: `DefaultConnection`
* **Value**: valor da connection string obtido durante a criação do banco de dados
* **Type**: escolha **SQLAzure**

## Cópia dos binários

Na seção **Overview** do App Service, obtenha os dados de acesso via FTP:

* FTP hostname
* FTP deployment username

Utilizando os dados obtidos (a senha provavelmente foi cadastrada anteriormente), conecte-se ao App Service utilizando um cliente de FTP
(sugerimos o <a href="https://filezilla-project.org/" target="_blank">FileZilla Client</a> ou o <a href="https://winscp.net/eng/download.php" target="_blank">WinSCP</a>)
e siga os passos abaixo:

1. Navegue até a pasta `site/wwwroot`
1. Apague o arquivo existente na pasta
1. Extraia o conteúdo do [pacote de binários do Amplia](https://cdn.lacunasoftware.com/amplia/amplia-3.3.0.zip) para uma pasta temporária no seu computador
1. Copie o conteúdo extraído para a pasta `wwwroot` do App Service

Por fim, em **Overview** do App Service, clique em **Start**.

## Veja também

* [Atualização do Amplia em Azure App Services](update.md)
* [Resolução de problemas](troubleshoot/index.md)
