# Azure Key Vault integration

The package [Lacuna PKI Azure Connector](https://www.nuget.org/packages/Lacuna.Pki.AzureConnector/) enables usage of keys stored on
[Azure Key Vaults](https://azure.microsoft.com/pt-br/services/key-vault/) to sign documents, issue certificates etc.

To use keys stored on a key vault, you will need the following parameters:

* **Endpoint**: the `DnsName` of the key vault, as shown on the *Overview* menu on Azure Portal
* **AppId**: the **Application ID** of an application registered on *Azure Active Directory*
* **AppSecret**: an authentication secret for the application, generated on *Certificates &amp; secrets*

You will also need to know the **keyName** of each key you intend to use.

## Instructions

> [!TIP]
> If your application uses ASP.NET Core, [see the section below](#aspnet-core)

Once you have the required parameters, create na instance of @Lacuna.Pki.AzureConnector.AzureKeyVaultOptions and, with it, an instance of @Lacuna.Pki.AzureConnector.AzureApiAuthenticator:

```cs
var options = new AzureKeyVaultOptions() {
	Endpoint = "...",
	AppId = "...",
	AppSecret = "...",
};
var azureApiAuthenticator = new AzureApiAuthenticator(options);
```

> [!NOTE]
> Your application should keep a single instance of `AzureApiAuthenticator` (singleton lifetime).

Then, create an instance of @Lacuna.Pki.AzureConnector.AzureKeyProvider and request from it an @Lacuna.Pki.AzureConnector.AzureKey passing the `keyName` of the key:

```cs
var azureKeyProvider = new AzureKeyProvider(options, azureApiAuthenticator);
var key = await azureKeyProvider.GetKeyAsync(/* keyName */);
```

> [!NOTE]
> The instance of `AzureKeyProvider` should be created and disposed as needed (transient lifetime).

The `AzureKey` class implements @Lacuna.Pki.IPrivateKey, and therefore can be used as such:

```cs
byte[] toSignHash = ...;
var signature = key.GetSignatureCsp(DigestAlgorithm.SHA256).SignHash(toSignHash);
```

However, the easiest way to use the key is by calling the `GetCertificateWithKey()` method passing a @Lacuna.Pki.PKCertificate, which will
return a @Lacuna.Pki.PKCertificateWithKey:

```cs
var certificate = PKCertificate.Decode(/* certificate file path or content */);
var certificateWithKey = key.GetCertificateWithKey(certificate);
```

> [!NOTE]
> We recommend storing only keys on Azure Key Vault. You should keep the certificates (.cer/.crt/.pem files) corresponding to the keys on your application.

With a `PKCertificateWithKey`, you can perform "single step" signatures (as if they were not remote signatures), such as this:

```cs
var signer = new PadesSigner();
signer.SetPdfToSign(/* PDF file path, content or stream */);
signer.SetSigningCertificate(certWithKey);
signer.SetPolicy(PadesPoliciesForGeneration.GetPadesBasic(TrustArbitrators.PkiBrazil));
signer.ComputeSignature();
var signedPdf = signer.GetPadesSignature();
```

Here follows a complete sample:

```cs
// System-wide singletons
Global.AzureKeyVaultOptions = new AzureKeyVaultOptions() {
	Endpoint = "...",
	AppId = "...",
	AppSecret = "...",
};
Global.AzureApiAuthenticator = new AzureApiAuthenticator(options);

...

var azureKeyProvider = new AzureKeyProvider(Global.AzureKeyVaultOptions, Global.AzureApiAuthenticator);
var key = await azureKeyProvider.GetKeyAsync(/* keyName */);
var certificate = PKCertificate.Decode(/* certificate file path or content */);
var certificateWithKey = key.GetCertificateWithKey(certificate);

var signer = new PadesSigner();
signer.SetPdfToSign(/* PDF file path, content or stream */);
signer.SetSigningCertificate(certWithKey);
signer.SetPolicy(PadesPoliciesForGeneration.GetPadesBasic(TrustArbitrators.PkiBrazil));
signer.ComputeSignature();
var signedPdf = signer.GetPadesSignature();
```

<a name="aspnet-core" />
## ASP.NET Core

If your application is an ASP.NET Core web application, add the following to your `ConfigureServices` on your app's startup:

```cs
public void ConfigureServices(IServiceCollection services) {
    ...
    services.AddAzureKeys()
        .Configure(Configuration.GetSection("AzureKeyVault"));
}
```

Add a section named **AzureKeyVault** to your `appsettings.json` file:

```json
...
"AzureKeyVault": {
	"Endpoint": "https://my-key-vault.vault.azure.net/",
	"AppId": "...",
	"AppSecret": "..."
},
...
```

Whenever your need to use keys stored on Azure Key Vault, get an instance of `IAzureKeyProvider` through dependency injection:

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

From then on, use the key as described previously:

```cs
var key = await azureKeyProvider.GetKeyAsync(/* keyName */);
var certificate = PKCertificate.Decode(/* certificate file path or content */);
var certificateWithKey = key.GetCertificateWithKey(certificate);

var signer = new PadesSigner();
signer.SetPdfToSign(/* PDF file path, content or stream */);
signer.SetSigningCertificate(certWithKey);
signer.SetPolicy(PadesPoliciesForGeneration.GetPadesBasic(TrustArbitrators.PkiBrazil));
signer.ComputeSignature();
var signedPdf = signer.GetPadesSignature();
```
