# Azure Key Vault integration

The package [Lacuna PKI Azure Connector](https://www.nuget.org/packages/Lacuna.Pki.AzureConnector/) enables usage of certificates and keys stored on
[Azure Key Vaults](https://azure.microsoft.com/pt-br/services/key-vault/) to sign documents, issue certificates etc.

To use certificates or keys stored on a key vault, you will need the following parameters:

* **Endpoint**: the `DnsName` of the key vault, as shown on the *Overview* menu on Azure Portal
* **AppId**: the **Application ID** of an application registered on *Azure Active Directory*
* **AppSecret**: an authentication secret for the application, generated on *Certificates &amp; secrets*

You will also need to know the **name** of the certificate or key you intend to use.

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

Then, create an instance of
<!-- @ Lacuna.Pki.AzureConnector.AzureCertificateProvider (build issues are preventing the usage of this reference) --> `AzureCertificateProvider`
and request to it a @Lacuna.Pki.PKCertificateWithKey passing the `certificateName` of the certificate:

> [!NOTE]
> If you store only the certificates' keys on Azure Key Vault, but not the certificate themselves, read the [section below](#external-cert).

```cs
var azureCertProvider = new AzureCertificateProvider(options, azureApiAuthenticator);
var certWithKey = await azureCertProvider.GetCertificateWithKeyAsync(/* certificateName */);
```

> [!NOTE]
> The instance of `AzureCertificateProvider` should be created and disposed as needed (transient lifetime).

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

var azureCertProvider = new AzureCertificateProvider(Global.AzureKeyVaultOptions, Global.AzureApiAuthenticator);
var certWithKey = await azureCertProvider.GetCertificateWithKeyAsync(/* certificateName */);

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

Whenever your need to use certificates stored on Azure Key Vault, get an instance of
<!-- @ Lacuna.Pki.AzureConnector.IAzureCertificateProvider (build issues are preventing the usage of this reference) --> `IAzureCertificateProvider`
through dependency injection:

```cs
using Lacuna.Pki.AzureConnector;

public MyController : ApiController {

	private readonly IAzureCertificateProvider azureCertProvider;

	public MyController(IAzureCertificateProvider azureCertProvider) {
		this.azureCertProvider = azureCertProvider;
	}

	...
}
```

From then on, use the key as described previously:

```cs
var certWithKey = await azureCertProvider.GetCertificateWithKeyAsync(/* certificateName */);

var signer = new PadesSigner();
signer.SetPdfToSign(/* PDF file path, content or stream */);
signer.SetSigningCertificate(certWithKey);
signer.SetPolicy(PadesPoliciesForGeneration.GetPadesBasic(TrustArbitrators.PkiBrazil));
signer.ComputeSignature();
var signedPdf = signer.GetPadesSignature();
```

<a name="external-cert" />
## Using certificates which have only the key stored on Azure Key Vault

You may choose to store only your certificate keys on Azure Key Vault, storing on your application the public portion of the certificates (.cer/.crt/.pem files)
corresponding to the keys.

In this case, create an instance of @Lacuna.Pki.AzureConnector.AzureKeyProvider and request from it an @Lacuna.Pki.AzureConnector.AzureKey passing the `keyName` of the key:

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

However, the easiest way to use the key is by calling the `GetCertificateWithKey()` with the certificate (which may be hardcoded, or stored on your database,
or available as a configuration):

```cs
var certificate = PKCertificate.Decode(/* certificate file path or content */);
var certWithKey = key.GetCertificateWithKey(certificate);
```

For **ASP.NET Core** applications, instead of asking for an instance of `IAzureCertificateProvider` through dependency injection, ask for
@Lacuna.Pki.AzureConnector.IAzureKeyProvider and call its `GetKeyAsync()` method:

```cs
using Lacuna.Pki.AzureConnector;

public MyController : ApiController {

	private readonly IAzureKeyProvider azureKeyProvider;

	public MyController(IAzureKeyProvider azureKeyProvider) {
		this.azureKeyProvider = azureKeyProvider;
	}

	...

	public async Task<ActionResult> Post() {

		...

		var key = await azureKeyProvider.GetKeyAsync(/* keyName */);
		var certificate = PKCertificate.Decode(/* certificate file path or content */);
		var certWithKey = key.GetCertificateWithKey(certificate);

		var signer = new PadesSigner();
		signer.SetPdfToSign(/* PDF file path, content or stream */);
		signer.SetSigningCertificate(certWithKey);
		signer.SetPolicy(PadesPoliciesForGeneration.GetPadesBasic(TrustArbitrators.PkiBrazil));
		signer.ComputeSignature();
		var signedPdf = signer.GetPadesSignature();

		...
	}
}
```
