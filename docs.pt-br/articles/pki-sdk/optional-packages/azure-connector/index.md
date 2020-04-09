# Azure Connector

O pacote [Lacuna PKI Azure Connector](https://www.nuget.org/packages/Lacuna.Pki.AzureConnector/) possibilita as seguintes integrações entre o SDK e o [Microsoft Azure Storage Service](https://azure.microsoft.com/pt-br/services/storage/):

* Utilizar chaves armazenadas em um [Azure Key Vault](https://azure.microsoft.com/pt-br/services/key-vault/)
* Compressão e descompressão de assinaturas CAdES armazenando LCRs e certificados em um [Blob Storage](https://docs.microsoft.com/pt-br/azure/storage/storage-dotnet-how-to-use-blobs)
* Criação e validação de assinaturas CAdES com referência de revogação porém sem valores de revogação armazenando os valores em um Blob Storage
* Enviar mensagens de log geradas pelo SDK para um [Table Storage](https://docs.microsoft.com/pt-br/azure/storage/storage-dotnet-how-to-use-tables)

> [!NOTE]
> Para informações sobre integração com Azure Key Vault, [clique aqui](key-vault.md)

## Credenciais do Azure Storage

A primeira coisa que você vai precisar é criar uma conta no Azure Storage e obter credenciais de acesso, denominadas *Access Keys* no vocabulário do Azure. Se você ainda não fez isso, siga as instruções contidas [neste link](https://azure.microsoft.com/pt-br/documentation/articles/storage-create-storage-account/).

Ao final desse processo você deve ter uma *connection string* similar a:

    DefaultEndpointsProtocol=https;AccountName=youraccount;AccountKey=XXXXXXXXXX==

O lugar ideal para colocar essa string é no seu `web.config` ou `app.config`:

```xml
<appSettings>
  <add key="AzureStorage" value="DefaultEndpointsProtocol=https;AccountName=youraccount;AccountKey=XXXXXXXXXX==" />
</appSettings>
```

## Utilizando o armazenamento em Blob Storage

A classe @Lacuna.Pki.AzureConnector.AzureBlobStorageStore, incluída no pacote opcional, implementa a interface @Lacuna.Pki.Stores.ISimpleStore, utilizada pelo SDK quando um storage externo é necessário (para mais informações, veja [Pacotes nuget opcionais](index.md)).

Se você armazenou sua *connection string* do Azure Storage no `web.config` como sugerido acima, você deve instanciar a classe @Lacuna.Pki.AzureConnector.AzureBlobStorageStore da seguinte maneira:

```csharp
var store = AzureBlobStorageStore.CreateFromSettingName("AzureStorage"); // ou o que você colocou no atributo "key" da tag appSetting
```

Também é possível deixar a *connection string* no código:

```csharp
var store = AzureBlobStorageStore.CreateFromConnectionString("DefaultEndpointsProtocol=https;AccountName=youraccount;AccountKey=XXXXXXXXXX==");
```

Os objetos são armazenados por padrão em um container denominado "lacuna-pki-store", mas é possível alterar isso:

```csharp
var store = AzureBlobStorageStore.CreateFromSettingName("AzureStorage", "my-container");
```

Tendo uma instância da classe @Lacuna.Pki.AzureConnector.AzureBlobStorageStore associada à sua conta do Azure Storage, você pode utilizá-la em qualquer lugar que o SDK exija um @Lacuna.Pki.Stores.ISimpleStore, por exemplo para comprimir e descomprimir assinaturas CAdES:

```csharp
byte[] precomputedSignature = ...; // qualquer assinatura CAdES, não necessariamente feita com o SDK
var compressedSignature = CadesSignatureCompression.Compress(precomputedSignature, store);
var decompressedSignature = CadesSignatureCompression.Decompress(compressedSignature, store);
```

## Enviando logs para um Table Storage

A classe @Lacuna.Pki.AzureConnector.AzureTableStorageLogger é utilizada para enviar logs gerados pelo SDK para uma tabela do Azure Table Storage. Instancia-se a classe da mesma maneira que a @Lacuna.Pki.AzureConnector.AzureBlobStorageStore:

```csharp
var logger = AzureTableStorageLogger.CreateFromSettingName("AzureStorage"); // ou o que você colocou no atributo "key" da tag appSetting
```

Os logs são armazenados por padrão em uma tabela denominada "LacunaPkiLog", mas é possível alterar essa configuração:

```csharp
var logger = AzureTableStorageLogger.CreateFromSettingName("AzureStorage", "MyTable");
```

Também é possível especificar um nível mínimo de log a ser considerado (o padrão é logar de `Info` para cima):

```csharp
var logger = AzureTableStorageLogger.CreateFromSettingName("AzureStorage", minLevel: LogLevels.Trace); // this would log A LOT, use only for diagnostics
```

Tendo uma instância da classe @Lacuna.Pki.AzureConnector.AzureTableStorageLogger, basta então chamar o método @Lacuna.Pki.AzureConnector.AzureTableStorageLogger.Configure para configurar o SDK para enviar os logs para o Azure:

```csharp
logger.Configure();
```

Geralmente faz-se apenas o seguinte:

```csharp
AzureTableStorageLogger.CreateFromSettingName("AzureStorage").Configure();
```

## Código-fonte

O código-fonte do pacote **Lacuna PKI Azure Connector** é aberto, ficando hospedado no [BitBucket](https://bitbucket.org/Lacunas/pkiazureconnector). Caso queira customizá-lo, você pode fazer um fork do projeto e utilizar a sua versão customizada ao invés do pacote opcional.
