# Amplia - CNG Key Stores

The **Cryptography API: Next Generation (CNG)** works with key storage through a number of **Key Storage Providers (KSPs)**
that do the actual work of providing key storage.

Devices such as Hardware Security Modules (HSMs) and cryptographic USB tokens may provide a CNG KSP that can
be used to communicate with the device. Moreover, Windows Server has its own KSP which provide access to its
native key stores.

Every CNG KSP is identified by a *name*. If using an HSM or crypto token, refer to the device's documentation
to find the name and type of the KSP. Additionally, see the section below for common KSP names.

To configure a CNG key store on Amplia, use the following settings:

* `Type`: `CNG`
* `ProviderName`: name that identifies the KSP to be used
* `UseMachineStore`: some KSPs have the concept of storing keys on the *user store* or on the *machine store*, most notably the OS's native KSP.
  By default, the user store is used. Set this setting to `true` to use the machine store.
* `Pin`: the PIN of the store, if required
<!--
TODO:
- OverrideKeyPins: ?
- RememberKeyPins: ?
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

> [!NOTE]
> Using the OS machine key store requires administrative privileges of the user running the application

Safenet eToken cryptographic USB token:

```json
"CngToken": {
	"Type": "Cng",
	"ProviderName": "SafeNet Smart Card Key Storage Provider"
}
```
