# Instalação do Amplia em Windows Server

> [!NOTE]
> A documentação para este sistema está atualmente em construção. Nos desculpamos por qualquer inconveniência que pode causar. Por favor, entre em contato conosco se houver alguma informação
que você precise que não esteja documentada no momento.

Para sua própria instalação do [Amplia](../../index.md) no Windows Server, siga os passos neste artigo. Para outras plataformas, [clique aqui](../index.md).

## Planejando antes da instalação

Antes de você começar, você deve planejar com antecedência onde você pretende armazenar suas chaves da Autoridade Certificadora (CA) e onde suas Listas do Certificado de Revogação (LCR)
serão publicados. Por favor leia as seções abaixo para detalhes de cada uma das decisões.

### Armazenamento de chaves

As chaves das suas Autoridades Certificadoras (ACs) podem ser armazenadas em uma variedade de locais, chamadas *key stores*. A escolha de onde armazenar chaves AC é uma das mais importantes
decisões ao planejar a AC. Veja o artigo [Configuração de Key Store](../key-stores/index.md) para mais informação onde você pode armazenar sua chave AC e como configurar de acordo com
Amplia.

### Domínio Dashboard / Certificado SSL

A aplicação tem uma interface chamada *dashboard* para gerenciar ACs, chaves etc. Você deve ecolher um domínio para acessar isto, por exemplo `ca.patorum.com`.

O domínio escolhido pode ser criado em um servidor DNS da zona (registros A ou CNAME) antes da instalação, apontando para o servidor onde o Amplia será instalado.

> [!NOTE]
> Não há suporte para o uso de um diretório virtual (subpasta) em um domínio que hospeda outro aplicativo da Web

É também recomendado que você tenha um **certificado SSL válido** para escolher o domínio.

### Publicação LCR (domínios de acesso)

Certificados emitidos pelo Amplia incluem a extensão X.509 *CRL Distribution Point*, que contém links para locais onde um terceiro que deseja validar o certificado deve obter a Lista de Certificados Revogados (LCR) mais recente da AC, necessária para determinar o status de revogação do certificado.

Estes links tem que seguir o formato: `http://your-ca-domain/crls/my-ca.crl`

O `your-ca-domain` parte do link é chamado na configuração Amplia um *domínio de acesso*. Você deve escolher pelo menos um domínio de acesso, mas é recomendado ter dois domínios de acesso,
preferencialmente um independente do outro, por exemplo:

* *ca.patorum.com*
* *ca.patorum.net*

> [!TIP]
> Um dos domínios de acesso pode ser o mesmo domínio que o paínel do Amplia será acessado.

> [!NOTE]
> Não há suporte para o uso de um diretório virtual (subpasta) em um domínio que hospeda outro aplicativo da Web

Esses domínios devem ser escolhidos tendo em mente que eles **terão que ser mantidos por um longo período** (por toda a vida útil dos certificados emitidos em sua instância do Amplia, que normalmente é de vários anos).

Os domínios de acesso escolhidos devem ser criados nos servidores DNS (registros A ou CNAME) apontando para o servidor no qual o Amplia será instalado.

> [!TIP]
> Você não precisa de um certificado SSL para seu domínio de acesso. Uma vez que o X.509 recomenda LCRs sejam distribuídas por HTTP em vez de HTTPS, os certificados são emitidios com
links usando HTTP protocolo.

## Modo de operação do banco de dados

Amplia pode operar de duas maneiras em relação ao acesso do banco de dados:

1. Sendo *owner* do banco de dados e atualizar automaticamente o modelo do banco de dados após uma atualização (quando necessário)
1. Ter privilégios apenas de leitura e escrita no banco de dados, exigindo que o modelo do banco de dados seja atualizado pelo administrador (usando uma ferramenta de linha de comando)

Concessão de ser *owner* do aplicativo é simples, enquanto conceder somente leitura e gravação garante maior controle sobre o banco de dados. A decisão cabe à você. Se não tiver certeza do
que escolher, recomendamos a concessão de ser *owner* (opção 1), pois isso facilita a atualização do aplicativo.

Algumas das instruções de configuração depende da opção que você escolhe.

## Pré-requisitos

* Windows Server 2016 ou mais recente (qualquer edição)
* SQL Server 2016 ou mais recente (edião recomendada Padrão ou melhor)
* Licença PKI SDK (no formato Base64)
* Licença Web PKI (formato Base64/binário) -- necessário apenas se os usuários irão emitir certificados em seus computadores (procedimento de emissão da web)
* Entradas de DNS criadas anteriormente para:
    * Acesso *dashboard*
    * Publicação LCR (domínios de acesso)
* (recomendado) Certificado SSL válido para o domínio *dashboard*

> [!NOTE]
> Esta documentação é destinada a Windows Server com UI instalado. Para instalações "core" (apenas linhas de código), entre em contato conosco.

Você vai precisar também de uma *connection string* para o **banco de dados** previamente criado tendo:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with the following database roles:
    * If the application should be owner of the database: `db_owner`
    * If the application should only have read and write permissions: `db_datareader` and `db_datawriter`

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, [clique aqui](prepare-database.md).

## Instalação

1. Instale IIS
1. https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.2.5-windows-hosting-bundle-installer
    * https://aka.ms/dotnetcore-2-2-windowshosting
1. Criar pasta para site
1. Criar pasta para logs
1. Criar site
    * Não definir código gerenciado
    * Definir o perfil do usuário de carregamento para `True`

     ![Load user profile](../../../../../images/windows/load-user-profile.png)

1. Extrair arquivos.

> [!NOTE]
> Se você pretende usar um dos armazenamentos de chaves nativos do sistema operacional, [configure o Amplia para usar uma conta de usuário local](configure-app-user.md)

## Configuração

Na pasta de instalação, renomeie o arquivo **appsettings.iis-template.json** para **appsettings.iis.json** (remova o sufixo `-template`). Então, edite o arquivo para configurar a instância do Amplia.

### *Connection string* do banco de dados

Na seção ***ConnectionStrings***, na configuração ***DefaultConnection***, defina a cadeia de conexão para o banco de dados criado anteriormente. Uma string de conexão típica é assim:

```
Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD
```

> [!NOTE]
> Se você criou banco de dados usando recursos avançados como *log shipping* ou *mirroring*, sua *connection string* pode ser diferente.

### Logging 

Na seção ***Serilog***, configure o registro do aplicativo:

```json
...
"Serilog": {
	"MinimumLevel": {
		"Default": "Warning",
	},
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "C:\\Logs\\Amplia.log",
				"outputTemplate": "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}",
			}
		}
	],
}
...
```

Altere a configuração do ***path*** para ***path*** do arquivo de log.

> [!NOTE]
> Lembre-se de conceder acesso total ao usuário do aplicativo na pasta de log.

### Configurações Gerais

Na seção **Geral**:

* **SiteUrl**: URL publicamente acessível do site (ex.: `https://ca.patorum.com/`). Este endereço é usado para compor emails com links de volta ao site.
* **EncryptionKey**: chave 256 bits usada para criptografar segredos temporiários emitidos pelo site e chaves [armazenamento de chaves em banco de dados](../key-stores/database.md). Veja abaixo como gerar essa chave.
* **AutoUpdateDatabase**: Por padrão, o aplicativo tenta realizar alterações de modelo no banco de dados após uma atualização (quando necessário). Defina como `false` se o aplicativo não tiver
permissões de proprietário sobre o banco de dados.
* **SupportEmailAdress**: o endereço de e-mail de suporte (usado no rodapé dos e-mails enviados)

Para gerar a *EncryptionKey*, execute o seguinte em um Powershell:

```ps
$k = New-Object byte[] 32;
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($k);
[Convert]::ToBase64String($k);
```

[!include[Common config](../includes/common-config.md)]

## Iniciando o aplicativo

1. Iniciar o site
1. Acesse o site

## Veja também

* [Atualização do Amplia em Windows Server](update.md)
* [Resolução de problemas](troubleshoot/index.md)
