# Amplia - Kryptus key stores

> [!NOTE]
> Kryptus key stores are compatible with all supported platforms

To store keys on a [Kryptus kNET HSM](https://kryptus.com/en/network-hsm-knet/), use the following settings:

* **Type**: `Kryptus`
* **Host**: IP address or hostname of the VHSM
* **Port**: **HTTPS** port of the VHSM (*not* the TTLV port)

If you intend to use the HSM for storing CA keys, set credentials for a **regular user** (*not* a VCO user) on the following settings:

* **RootUsername**
* **RootPassword**

If you intend to use the HSM for storing user PIN-protected keys (typically combined with [Lacuna's PSC module](../../../psc/index.md)), set the
credentials for a **VCO user** (*not* a regular user) on the following settings:

* **VcoUsername**
* **VcoPassword**

> [!NOTE]
> If you intend to use the same VHSM for both use cases, set all 4 settings. However, this would be very unusual, since it is
> recommended to keep CA and user keys in separate VHSMs.

Sample configuration (*.json* file):

```json
"KeyStores": {
	"MyKryptusHsm": {
		"Type": "Kryptus",
		"Host": "10.1.2.3",
		"Port": 50000,
		"RootUsername": "SOME_REGULAR_USER",
		"RootPassword": "SOME_PASSWORD",
		"VcoUsername": "SOME_VCO_USER",
		"VcoPassword": "SOME_PASSWORD"
	}
}
```

Sample configuration (environment variables):

```bash
KeyStores__MyKryptusHsm__Type=Kryptus
KeyStores__MyKryptusHsm__Host=10.1.2.3
KeyStores__MyKryptusHsm__Port=50000
KeyStores__MyKryptusHsm__RootUsername=SOME_REGULAR_USER
KeyStores__MyKryptusHsm__RootPassword=SOME_PASSWORD
KeyStores__MyKryptusHsm__VcoUsername=SOME_VCO_USER
KeyStores__MyKryptusHsm__VcoPassword=SOME_PASSWORD
```

> [!NOTE]
> Please note that the `Port` value shown above is merely a sample. There is no default value for this setting. It depends entirely on your VHSM configuration.

## See also

* [Amplia - Key Stores](index.md)
* [Amplia on premises](../index.md)
