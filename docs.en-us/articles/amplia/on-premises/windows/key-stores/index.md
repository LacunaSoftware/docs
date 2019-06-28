# Amplia - Key Store configuration

TODO

* PKCS #11
* `Type`: set this setting to `Pkcs11` to specify a key store which uses a PKCS #11 module to store keys
* `Module`: name of the PKCS #11 DLL (e.g.: `eTPKCS11.dll`)
* `Pin`: PIN of the module, if required
* If multiple tokens will be present, you can specify the token to be used with the setting `TokenSerialNumber`
* CAPI (Windows Cryptographic API)
* `Type`: set this setting to `CAPI` to specify a key store which uses a CAPI crypto service provider (CSP) to store keys
* Every CAPI CSP is identified by its *name* and *type*. Set these values on the settings `ProviderName` and `ProviderType`
* `ExportableKeys`: whether to generate keys marked as exportable (`true` or `false`, default `true`)
* `UseMachineStore`: every CAPI CSP has the concept of storing keys on the *user store* or on the *machine store*`. By default, the
    user store is used. Set this setting to `true` to use the machine store
* `Pin`: the PIN of the store, if required
* `OverrideKeyPins`: ?
* `RememberKeyPins`: ?
* CNG (Windows Cryptography API - Next Generation)
* `Type`: set this setting to `CNG` to specify a key store which uses a CNG key storage provider (KSP) to store keys
* `ProviderName`: name that identifies the KSP to be used
* `UseMachineStore`: every CNG KSP has the concept of storing keys on the *user store* or on the *machine store*`. By default, the
    user store is used. Set this setting to `true` to use the machine store
* `Pin`: the PIN of the store, if required
* `OverrideKeyPins`: ?
* `RememberKeyPins`: ?
* [Azure Key Vault](https://azure.microsoft.com/en-in/services/key-vault/)
* `Type`: set this setting to `AzureKeyVault` to specify a key store which stores keys on an Azure Key Vault account
* `Endpoint`: DNS Name of the key vault (show on tab *Overview* of key vault) -- e.g.: `https://my-keys.vault.azure.net/`
* `AppId`: Application ID to be used to authenticate with Azure
* `AppKey`: Application secret key to be used to authenticate with Azure (for additional security, omit this value and specify the `CertThumb` instead)
* `CertThumb`: thumbprint of the certificate to be used to authenticate with Azure (hex-encoded, as provided by the Azure Portal)
* `UseHsm`: by default, [HSM-protected](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) keys are created. To use "software"
	keys, set this value to `false`
