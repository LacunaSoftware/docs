# Amplia - Dinamo key stores

> [!NOTE]
> Dinamo key stores are compatible with all supported platforms

To store keys on a [Dinamo HSM](https://www.dinamonetworks.com/en/hardware-security-module-hsm/), use the following settings:

* **Type**: `Dinamo`
* **Address**: IP address or hostname of the HSM
* **User** and **Password**: credentials for an Operator or regular user (see below)

If you intend to use the HSM for storing CA keys, the credentials can be either for an Operator or a regular user.

If you intend to use the HSM for storing PIN-protected keys, typically combined with [Lacuna's PSC module](../../../index.md), the credentials must be for an
**Operator** user.

Sample configuration (*.json* file):

```json
"KeyStores": {
	"MyDinamoHsm": {
		"Type": "Dinamo",
		"Address": "10.1.2.3",
		"User": "SOME_USER",
		"Password": "SOME_PASSWORD"
	}
}
```

Sample configuration (environment variables):

```bash
KeyStores__MyDinamoHsm__Type=Dinamo
KeyStores__MyDinamoHsm__Host=10.1.2.3
KeyStores__MyDinamoHsm__User=SOME_USER
KeyStores__MyDinamoHsm__Password=SOME_PASSWORD
```

## See also

* [Amplia - Key Stores](index.md)
* [Amplia on premises](../index.md)
