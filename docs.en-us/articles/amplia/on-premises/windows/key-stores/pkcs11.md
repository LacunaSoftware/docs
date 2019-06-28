# Amplia - PKCS #11 Key Stores

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

* `Type`: set this setting to `Pkcs11` to specify a key store which uses a PKCS #11 module to store keys
* `Module`: name of the PKCS #11 DLL (e.g.: `eTPKCS11.dll`)
* `Pin`: PIN of the module, if required
* If multiple tokens will be present, you can specify the token to be used with the setting `TokenSerialNumber`
