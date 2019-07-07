# Amplia - PKCS #11 key stores

Devices such as Hardware Security Modules (HSMs) and cryptographic USB tokens usually support communication through the
PKCS #11 protocol.

> [!NOTE]
> In the PKCS #11 standard, any device capable of storing keys is called a *token*

To configure a PKCS #11 key store on Amplia, use the following settings:

* **Type**: `Pkcs11`
* **Module**: name of the PKCS #11 library (e.g.: `eTPKCS11.dll`)
* **Pin**: PIN of the token, if required
* **TokenSerialNumber**: if multiple tokens will be present, you can specify the token to be used with this setting 

Sample configuration:

```json
"KeyStores": {
	...,
	"MyDevice": {
		"Type": "Pkcs11",
		"Module": "...",
		"Pin": "..."
	},
	...
}
```

## Common PKCS #11 key stores

Safenet eToken cryptographic USB token (one token plugged in only):

```json
"eToken": {
	"Type": "Pkcs11",
	"Module": "eTPKCS11.dll",
	"Pin": "XXXX"
}
```

Safenet eToken cryptographic USB token (multiple tokens present, specifying the token to be used):

```json
"eTokenA": {
	"Type": "Pkcs11",
	"Module": "eTPKCS11.dll",
	"Pin": "XXXX",
	"TokenSerialNumber": "01f5cfe4"
}
```

## See also

* [Amplia - Key Stores](index.md)
* [Amplia - CAPI Key Stores](capi.md)
* [Amplia - CNG Key Stores](cng.md)
* [Installing Amplia on Windows Server](../install.md)
* [Troubleshooting](../troubleshoot/index.md)
