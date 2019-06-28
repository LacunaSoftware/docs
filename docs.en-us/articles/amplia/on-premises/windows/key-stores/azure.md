# Storing keys on Azure Key Vault

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

* `Type`: set this setting to `AzureKeyVault` to specify a key store which stores keys on an Azure Key Vault account
* `Endpoint`: DNS Name of the key vault (show on tab *Overview* of key vault) -- e.g.: `https://my-keys.vault.azure.net/`
* `AppId`: Application ID to be used to authenticate with Azure
* `AppKey`: Application secret key to be used to authenticate with Azure (for additional security, omit this value and specify the `CertThumb` instead)
* `CertThumb`: thumbprint of the certificate to be used to authenticate with Azure (hex-encoded, as provided by the Azure Portal)
* `UseHsm`: by default, [HSM-protected](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) keys are created. To use "software"
  keys, set this value to `false`
