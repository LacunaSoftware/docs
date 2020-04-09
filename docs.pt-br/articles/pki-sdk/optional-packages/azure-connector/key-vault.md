# Integração com Azure Key Vault

O pacote [Lacuna PKI Azure Connector](https://www.nuget.org/packages/Lacuna.Pki.AzureConnector/) possibilita utilizar chaves armazenadas em
[Azure Key Vaults](https://azure.microsoft.com/pt-br/services/key-vault/) para assinar documentos, emitir certificados etc.

Para utilizar chaves armazenadas em um key vault, você precisará dos seguintes parâmetros:

* **Endpoint**: campo `DnsName` do key vault, pode ser obtido na área *Overview* do vault
* **AppId**: campo **Application ID** de uma aplicação registrada no *Azure Active Directory*
* **AppSecret**: segredo da aplicação, gerado na área *Certificates &amp; secrets* da aplicação

## Instruções para uso

> [!TIP]
> Veja a sessão [ASP.NET Core](#aspnet-core) abaixo caso a sua aplicação utilize essa tecnologia.

De posse dos parâmetros necessários, instancie um @Lacuna.Pki.AzureConnector.AzureKeyVaultOptions e, com este, um @Lacuna.Pki.AzureConnector.AzureApiAuthenticator conforme abaixo:

```cs
var options = new AzureKeyVaultOptions() {
	Endpoint = "...",
	AppId = "...",
	AppSecret = "...",
};
var azureApiAuthenticator = new AzureApiAuthenticator(options);
```

> [!NOTE]
> A sua aplicação deve manter uma única instância do `AzureApiAuthenticator` (*singleton lifetime*).

Em seguida, instancie um @Lacuna.Pki.AzureConnector.AzureKeyProvider conforme abaixo:

```cs
var azureKeyProvider = new AzureKeyProvider(options, azureApiAuthenticator);
```

> [!NOTE]
> A instância do `AzureKeyProvider` deve ser criada e descartada à medida que for necessário (*transient lifetime*).

Em seguida, solicite uma @Lacuna.Pki.AzureConnector.AzureKey passando o `keyName` da chave que deseja utilizar:

```cs
var keyName = "...";
var key = await azureKeyProvider.GetKeyAsync(keyName);
```

A classe `AzureKey` implementa a interface @Lacuna.Pki.IPrivateKey portanto pode ser usada como tal:

```cs
byte[] toSignHash = ...;
var signature = key.GetSignatureCsp(DigestAlgorithm.SHA256).SignHash(toSignHash);
```

Entretanto, a forma mais fácil de usar a chave é chamando o método `GetCertificateWithKey()` passando um @Lacuna.Pki.PKCertificate obtendo de volta um @Lacuna.Pki.PKCertificateWithKey

```cs
var certificate = PKCertificate.Decode(...);
var certificateWithKey = key.GetCertificateWithKey(certificate);
```

> [!NOTE]
> Recomendamos armazenar no Key Vault apenas chaves. Guarde os certificados (arquivos .cer/.crt/.pem) correspondentes às chaves na sua aplicação.

Com um `PKCertificateWithKey`, é possível fazer assinaturas em "um único passo", por exemplo:

```cs
var signer = new PadesSigner();
signer.SetPdfToSign(...);
signer.SetSigningCertificate(certWithKey);
signer.SetPolicy(PadesPoliciesForGeneration.GetPadesBasic(TrustArbitrators.PkiBrazil));
signer.ComputeSignature();
var signedPdf = signer.GetPadesSignature();
```

<a name="aspnet-core" />
## ASP.NET Core

Caso a sua aplicação web seja em ASP.NET Core, adicione o seguinte código ao método `ConfigureServices(IServiceCollection)` do *startup* da sua aplicação:

```cs
public void ConfigureServices(IServiceCollection services) {
    ...
    services.AddAzureKeys()
        .Configure(Configuration.GetSection("AzureKeyVault"));
}
```

No arquivo de configuração `appsettings.json`, adicione a seção **AzureKeyVault**:

```json
...
"AzureKeyVault": {
	"Endpoint": "https://my-key-vault.vault.azure.net/",
	"AppId": "...",
	"AppSecret": "..."
},
...
```

Nas partes da aplicação que precisarem fazer chamadas à API do serviço, peça via *dependency injection* uma instância de `IAzureKeyProvider`:

```cs
using Lacuna.Pki.AzureConnector;

public MyController : ApiController {

	private readonly IAzureKeyProvider azureKeyProvider;

	public MyController(IAzureKeyProvider azureKeyProvider) {
		this.azureKeyProvider = azureKeyProvider;
	}

	...
}
```

Daí em diante, o uso é idêntico ao descrito na seção anterior:

```cs
var keyName = "...";
var certificate = PKCertificate.Decode(...);
var key = await azureKeyProvider.GetKeyAsync(keyName);
var certificateWithKey = key.GetCertificateWithKey(certificate, key);
```
