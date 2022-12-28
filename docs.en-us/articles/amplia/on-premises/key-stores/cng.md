# CNG Key Stores - Amplia

> [!NOTE]
> CNG Key Stores are only compatible with Windows Server installations

The **Cryptography API: Next Generation (CNG)** works with key storage through a number of **Key Storage Providers (KSPs)**
that do the actual work of storing keys. Devices such as Hardware Security Modules (HSMs) and cryptographic USB tokens may
provide a CNG KSP that can be used to communicate with the device.

<!--
> [!TIP]
> Although Windows Server has its own KSP which provides access to its native key stores, for that purpose you should use [Native Key Stores](native.md) instead.
-->

Every CNG KSP is identified by a *name*. If using an HSM or crypto token, refer to the device's documentation
to find the name and type of the KSP. Additionally, see the section below for common KSP names.

To configure a CNG key store on Amplia, use the following settings:

* **Type**: `CNG`
* **ProviderName**: name that identifies the KSP to be used
* **UseMachineStore**: some KSPs have the concept of storing keys on the *user store* or on the *machine store* (most notably the OS's native KSP).
  By default, the user store is used. Set this setting to `true` to use the machine store.
* **Pin**: the PIN of the store, if required

<!--
TODO:
OverrideKeyPins: ?
RememberKeyPins: ?
-->

Example (*.ini* or *.conf* configuration file):

```ini
[KeyStores:MyCngKeyStore]
Type=Cng
ProviderName=...
```

Example (environment variables):

```sh
KeyStores__MyCngKeyStore__Type=Cng
KeyStores__MyCngKeyStore__ProviderName=...
```

Example (*.json* configuration file):

```json
"KeyStores": {
	...,
	"MyCngKeyStore": {
		"Type": "Cng",
		"ProviderName": "..."
	},
	...
}
```

## Common CNG key stores

Safenet eToken cryptographic USB token:

```json
"CngToken": {
	"Type": "Cng",
	"ProviderName": "SafeNet Smart Card Key Storage Provider"
}
```

## See also

* [Key Stores](index.md)
* [Amplia on premises](../index.md)
