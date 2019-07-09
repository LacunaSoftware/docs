# Amplia - CAPI Key Stores

> [!NOTE]
> CAPI Key Stores are only compatible with Windows Server installations

The **Windows CryptoAPI (CAPI)** works with a number of **Cryptographic Service Providers (CSPs)** that do the actual work
of providing various "cryptographic services", such as key storage. Devices such as Hardware Security Modules (HSMs) and
cryptographic USB tokens usually provide a CAPI CSP that can be used to communicate with the device.

> [!TIP]
> Although Windows Server has its own CSP which provides access to its native key stores, for that purpose you should use [Native Key Stores](native.md) instead.

Every CAPI CSP is identified by its *name* and *type*. If using an HSM or crypto token, refer to the device's documentation
to find the name and type of the CSP.

To configure a CAPI key store on Amplia, use the following settings:

* **Type**: `CAPI`
* **ProviderName**: name of the CSP
* **ProviderType**: type of the CSP. Valid values are:
	* **PROV_RSA_FULL**
	* PROV_RSA_SIG
	* PROV_DSS
	* PROV_FORTEZZA
	* PROV_MS_EXCHANGE
	* PROV_SSL
	* PROV_RSA_SCHANNEL
	* PROV_DSS_DH
	* PROV_EC_ECDSA_SIG
	* PROV_EC_ECNRA_SIG
	* PROV_EC_ECDSA_FULL
	* PROV_EC_ECNRA_FULL
	* PROV_DH_SCHANNEL
	* PROV_SPYRUS_LYNKS
	* PROV_RNG
	* PROV_INTEL_SEC
	* PROV_REPLACE_OWF
	* **PROV_RSA_AES**
* **ExportableKeys**: by default, keys are generated marked as exportable. To generate non-exportable keys, set this to `false`.
* **UseMachineStore**: some CSPs have the concept of storing keys on the *user store* or on the *machine store* (most notably Windows's native CSP).
  By default, the user store is used. Set this setting to `true` to use the machine store.
* **Pin**: the PIN of the store, if required

<!--
TODO:
OverrideKeyPins: ?
RememberKeyPins: ?
-->

Sample configuration:

```json
"KeyStores": {
	...,
	"MyCapiKeyStore": {
		"Type": "Capi",
		"ProviderName": "...",
		"ProviderType": "PROV_RSA_FULL"
	},
	...
}
```

> [!TIP]
> If the HSM documentation is unclear about the *type* of the CSP, try using `PROV_RSA_FULL` or `PROV_RSA_AES`

## Common CAPI key stores

Safenet eToken cryptographic USB token:

```json
"CapiToken": {
	"Type": "Capi",
	"ProviderName": "eToken Base Cryptographic Provider",
	"ProviderType": "PROV_RSA_FULL",
	"Pin": "XXXX"
}
```

<!-- TODO: add Thales nCipher configuration -->

## See also

* [Amplia - Key Stores](index.md)
* [Amplia - Database Key Store](database.md)
* [Amplia - Native Key Stores](native.md)
* [Amplia - CNG Key Stores](cng.md)
* [Amplia - PKCS #11 key stores](pkcs11.md)
* [Amplia - Azure Key Vault Key Stores](azure.md)
* [Amplia on premises](../index.md)
