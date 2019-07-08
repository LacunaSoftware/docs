# Amplia - CNG Key Stores

> [!NOTE]
> CNG Key Stores are only compatible with Windows Server installations

The **Cryptography API: Next Generation (CNG)** works with key storage through a number of **Key Storage Providers (KSPs)**
that do the actual work of storing keys.

Devices such as Hardware Security Modules (HSMs) and cryptographic USB tokens may provide a CNG KSP that can
be used to communicate with the device. Moreover, Windows Server has its own KSP which provide access to its
native key stores.

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

Sample configuration:

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

> [!TIP]
> In order to use one of the operating system's native key stores, [configure Amplia to use a local user account](../windows/configure-app-user.md)

Operating system's native user key store:

```json
"CngUserStore": {
	"Type": "Cng",
	"ProviderName": "Microsoft Software Key Storage Provider"
}
```

Operating system's native machine key store:

```json
"CngMachineStore": {
	"Type": "Cng",
	"ProviderName": "Microsoft Software Key Storage Provider",
	"UseMachineStore": true
}
```

> [!TIP]
> To use the OS machine key store, [configure Amplia to use a local user account](../windows/configure-app-user.md) and
> [add the application user to the local *Administrators* user group](../windows/configure-app-user.md#grant-admin).

Safenet eToken cryptographic USB token:

```json
"CngToken": {
	"Type": "Cng",
	"ProviderName": "SafeNet Smart Card Key Storage Provider"
}
```

## See also

* [Amplia - Key Stores](index.md)
* [Amplia - Native Key Stores](native.md)
* [Amplia - CAPI Key Stores](capi.md)
* [Amplia - PKCS #11 key stores](pkcs11.md)
* [Amplia - Azure Key Vault Key Stores](azure.md)
* [Amplia on premises](../index.md)
