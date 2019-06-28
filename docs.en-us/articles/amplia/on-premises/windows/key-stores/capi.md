# Amplia - CAPI Key Stores

The Windows CryptoAPI (CAPI) works with a number of Cryptographic Service Providers (CSPs) that do the actual work
of providing various "cryptographic services", such as key storage.

Devices such as Hardware Security Modules (HSMs) and cryptographic USB tokens usually provide a CAPI CSP that can
be used to communicate with the device. Additionally, Windows Server has its own CSPs which provide access to its
native key stores.

Every CAPI CSP is identified by its *name* and *type*. If using an HSM or crypto token, refer to the device's documentation
to find the name and type of the CSP.

To configure a CAPI key store on Amplia, use the following settings:

* `Type`: `CAPI`
* `ProviderName`: name of the CSP (see section below for common provider names)
* `ProviderType`: type of the CSP
  * Valid values are:
	  * PROV_RSA_FULL
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
	  * PROV_RSA_AES
  * The most common values are PROV_RSA_FULL and PROV_RSA_AES
* `ExportableKeys`: whether to generate keys marked as exportable (`true` or `false`, defaults to `true`)
* `UseMachineStore`: every CAPI CSP has the concept of storing keys on the *user store* or on the *machine store*. By default, the
   user store is used. Set this setting to `true` to use the machine store.
* `Pin`: the PIN of the store, if required
<!--
* `OverrideKeyPins`: ?
* `RememberKeyPins`: ?
-->

## Common CSP types and names

* Operating system key store
  * `ProviderName`: `Microsoft Enhanced RSA and AES Cryptographic Provider`
  * `ProviderType`: `PROV_RSA_AES`
* Safenet eToken
  * `ProviderName`: `eToken Base Cryptographic Provider`
  * `ProviderType`: `PROV_RSA_FULL`

## See also

* [Amplia - Key Stores](index.md)
* [Amplia - CNG Key Stores](cng.md)
* [Amplia - PKCS #11 key stores](pkcs11.md)
* [Installing Amplia on Windows Server](install.md)
* [Troubleshooting](troubleshoot/index.md)
