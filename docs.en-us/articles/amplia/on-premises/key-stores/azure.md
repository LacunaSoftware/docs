# Amplia - Azure Key Vault key stores

<!--
	2020-03-26 LeonardoP:
	This article was severely changed on the Portuguese version. Please translate. Hiding outdated English version for now.
-->

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

<!--
> [!NOTE]
> Azure Key Vault stores are compatible with all supported platforms

[Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) can be though of as a cloud HSM. Keys are stored on FIPS 140-2 Level 2
validated HSMs for a relatively low cost of ~5 dollars per month per key. This service from Microsoft has enabled the employment of HSMs on
projects which otherwise would not have the necessary budget.

> [!TIP]
> Lacuna Software's cloud-based Amplia instance (SaaS offering) stores all CA keys on Azure Key Vault, and we highly recommend it
> for instances installed both on the cloud or on local servers.

To configure an Azure Key Vault key store on Amplia, use the following settings:

* **Type**: `AzureKeyVault`
* **Endpoint**: DNS Name of the key vault (shown on tab *Overview* of key vault) -- e.g.: https://my-pki.vault.azure.net/
* **AppId**: Application ID to be used to authenticate with Azure
* **AppKey**: Application secret key to be used to authenticate with Azure (for additional security, omit this value and specify the `CertThumb` instead)
* **CertThumb**: thumbprint of the certificate to be used to authenticate with Azure (hex-encoded, as provided by the Azure Portal)
* **UseHsm**: by default, [HSM-protected](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) keys are created. To use "software"
  keys, set this value to `false`

Sample configuration:

```json
"KeyStores": {
	...,
	"MyKeyVault": {
		"Type": "AzureKeyVault",
		"Endpoint": "https://xxx.vault.azure.net/",
		"AppId": "00000000-0000-0000-0000-000000000000",
		"AppKey": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
	},
	...
}
```

## See also

* [Amplia - Key Stores](index.md)
* [Amplia - Database Key Store](database.md)
* [Amplia - CAPI Key Stores](capi.md)
* [Amplia - CNG Key Stores](cng.md)
* [Amplia - PKCS #11 key stores](pkcs11.md)
* [Amplia on premises](../index.md)
-->
