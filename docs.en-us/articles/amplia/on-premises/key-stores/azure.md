# Azure Key Vault key stores - Amplia

> [!NOTE]
> Azure Key Vault stores are compatible with all supported platforms

[Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) can be thought of as a cloud HSM. Keys are stored on FIPS 140-2 Level 2
validated HSMs for a relatively low cost of ~5 dollars per month per key. This service from Microsoft has enabled the employment of HSMs on
projects which otherwise would not have the necessary budget.

> [!TIP]
> Lacuna Software's cloud-based Amplia instance (SaaS offering) stores all CA keys on Azure Key Vault, and we highly recommend it
> for instances installed both on the cloud or on local servers.

## Procedure

To configure an Azure Key Vault key store on Amplia, log in <a href="https://portal.azure.com" target="_blank">Azure portal</a> and use the following settings:

### Creating an application and authentication secret

Create an application corresponding to your Amplia instance:

1. In the option **Microsoft Entra ID**, go to **App registrations** and click in **New registration**
1. Enter a name for the application
1. Leave the rest of the fields in the default options
1. Click on **Register**

Once the application is created, take note of the **Application (client) ID**.

Generate a secret for application identification:

1. In the application settings, click in **Certificate &amp; secrets**
1. In **Client secrets**, click in **New client secret**
1. Fill in a description and choose validity **Never** (does not expire)
1. Click on **Add**
1. **Copy the displayed value** in column **Value** (it will not be possible to recover this value later!)

### Creating the Key Vault

Create the Key Vault (skip this part if you want to use an existing Key Vault):

1. In the option **Key Vaults**, click in **Add**
1. Fill in the data according to your infrastructure
1. In the *Pricing tier* option, choose **Premium** to be able to generate keys stored in HSM
1. Click on **Review + create**
1. Click on **Create**

Once the creation of the Key Vault is complete, click **Go to resource**. Then, take note of the Key Vault's **DNS Name** (ex: `https://my-key-vault.vault.azure.net/`).

Grant permissions to the application:

1. In the Key Vault settings, click in **Access policies**, after in **Add Access Policy**
1. In *Configure from template*. do not fill anything
1. In *Key permissions*, select **Get**, **List**, **Create**, **Verify** and **Sign**
1. In *Select principal*, select the created application and click **Select**
1. Leave the *Secret permissions*, *Certificate permissions* and *Authorized application* fields unchanged
1. Click on **Add**
1. Back in the *policies* screen, click **Save**

> [!WARNING]
> This last step (clicking the **Save** button after clicking **Add**) is necessary, otherwise permissions are not saved!

### Amplia configuration

Edit your JSON configuration file or your App Service settings and add a section with a name to the **KeyStores** section
that identifies the Key Vault (see example below), and place the following settings in it:

* **Type**: `AzureKeyVault`
* **Endpoint**: DNS Name of the key vault (shown on tab *Overview* of key vault) -- e.g.: https://my-pki.vault.azure.net/
* **AppId**: Application ID to be used to authenticate with Azure
* **AppKey**: Application secret key to be used to authenticate with Azure (for additional security, omit this value and specify the `CertThumb` instead)
* **CertThumb**: thumbprint of the certificate to be used to authenticate with Azure (hex-encoded, as provided by the Azure Portal)
* **UseHsm**: by default, [HSM-protected](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) keys are created. To use "software"
  keys, set this value to `false`

Example (*.ini* or *.conf* configuration file):

```ini
[KeyStores:MyKeyVault]
Type=AzureKeyVault
Endpoint=https://xxx.vault.azure.net/
AppId=00000000-0000-0000-0000-000000000000
AppKey=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
```

Example (environment variables):

```sh
KeyStores__MyKeyVault__Type=AzureKeyVault
KeyStores__MyKeyVault__Endpoint=https://xxx.vault.azure.net/
KeyStores__MyKeyVault__AppId=00000000-0000-0000-0000-000000000000
KeyStores__MyKeyVault__AppKey=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
```

Example (*.json* configuration file):

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

* [Key Stores](index.md)
* [Amplia on premises](../index.md)
