# Instalação do Amplia em Windows Server

> [!NOTE]
> A documentação para este sistema está atualmente em construção. Nos desculpamos por qualquer inconveniência que pode causar. Por favor, entre em contato conosco se houver alguma informação
que você precise que não esteja documentada no momento.

Antes de começar, leia a seção [Planejamento antes da instalação](../index.md#planning).

Para sua própria instalação do [Amplia](../../index.md) no Windows Server, siga os passos neste artigo. Para outras plataformas, [clique aqui](../index.md).

[!include[Database operation mode](../includes/database-mode.md)]

## Pré-requisitos

* Windows Server 2016 ou mais recente (qualquer edição)
[!include[Common prerequisites](../includes/common-requisites.md)]

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

Altere a configuração do ***path*** para outra pasta de log.

> [!NOTE]
> Lembre-se de conceder acesso total ao usuário do aplicativo na pasta de log.

### Configurações *General*

<a name="encryption-key-generation" /> <!-- This anchor actually belongs a bit farther below, placing it here is a workaround -->

Na seção **General**:

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

[!include [Common config](../includes/common-config.md)]

## Iniciando o aplicativo

1. Iniciar o site
1. Acesse o site

## Veja também

* [Atualização do Amplia em Windows Server](update.md)
* [Resolução de problemas](troubleshoot/index.md)
