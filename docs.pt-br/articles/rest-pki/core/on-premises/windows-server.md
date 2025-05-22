# Rest PKI Core - Configuração no Windows Server

Para instalar uma instância *on premises* do Rest PKI Core no Windows Server, primeiro baixe os binários da versão desejada. A versão mais recente disponível é fornecida no link abaixo:

<br />
<center>
**[Pacote de binários do Rest PKI Core](https://cdn.lacunasoftware.com/restpkicore/restpkicore-2.5.0.zip)**
</center>
<br />

## Pré-requisitos

* Windows Server 2012 ou mais recente (qualquer edição)
* SQL Server 2014 ou mais recente (edição Standard ou superior recomendada)
* Licença do PKI SDK (em formato Base64)
* Licença do Web PKI (formato Base64/binário)

## Requisitos do Banco de Dados

* Banco de dados com collation `Latin1_General_100_CI_AI` ou `Latin1_General_CI_AI`.
* Credenciais correspondentes a um usuário com função `db_owner`.

Se precisar de ajuda para preparar o banco de dados, [clique aqui](../prepare-database.md).

<a name="install-aspnet-core" />

## Instalação

1. Instale o IIS
1. Instale o <a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.15-windows-hosting-bundle-installer" target="_blank">.NET 8.0 Hosting Bundle</a>
1. Crie uma pasta para o site do IIS. Exemplo: `C:\inetpub\Signer`
1. Crie uma pasta para logs. Exemplo: `C:\Logs`
1. Crie o site no IIS
1. No pool de aplicativos correspondente:
   * Selecione Configurações Básicas e defina a versão do .NET CLR para `No managed code`

     ![Load user profile](../../../../../images/windows/no-managed-code.png)
   * Selecione Configurações Avançadas e defina load user profile para `True`

     ![Load user profile](../../../../../images/windows/load-user-profile.png)

1. Extraia os arquivos do pacote de binários para a pasta do site.

> [!WARNING]
> O Runtime de Hospedagem .NET Core deve ser instalado após o IIS, caso contrário, ao executar o site, você poderá receber o erro `500.19 (0x8007000d)`.
> Se este for o seu caso, execute a opção "Repair" do instalador do Runtime de Hospedagem.


## Configuração

1. Dentro da pasta anteriormente extraída, navegue para `config-templates/linux` e renomeie o arquivo `appsettings.conf` para `appsettings.ini` [como mostra a imagem](../../../../../images/windows/appsettings-rename.png)
1. Criar pasta `C:\Program Data\Lacuna Software\Rest PKI Core`,
1. Copiar arquivo `config-templates\linux\appsettings.ini` para a pasta recém-criada
1. Adicionar o seguinte blob storage dentro do `appsettings.ini` (Altere o path )
```
[BlobStorage]
Type=FileSystem
Path=C:\Path\Do\Storage
```

1. Gere