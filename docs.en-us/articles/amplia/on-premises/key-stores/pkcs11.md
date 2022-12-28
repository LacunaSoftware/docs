# PKCS #11 key stores - Amplia

> [!NOTE]
> PKCS #11 Key Stores are compatible with Windows Server and Linux installations only. To store keys on an HSM on an Amplia instance hosted on Azure App Services, use the an [Azure Key Vault key store](azure.md) instead.

Devices such as Hardware Security Modules (HSMs) and cryptographic USB tokens usually support communication through the
PKCS #11 protocol.

To configure a PKCS #11 key store on Amplia, use the following settings:

* **Type**: `Pkcs11`
* **Module**: name of the PKCS #11 library (e.g.: `eTPKCS11.dll`)
* **Pin**: PIN of the token, if required
* **TokenSerialNumber**: if multiple tokens will be present, you can specify the token to be used with this setting 

Sample configuration (*.ini* or *.conf* file):

```bash
[KeyStores:MyDevice]
Type=Pkcs11
Module=...
Pin=...
```

Sample configuration (environment variables):

```bash
KeyStores__MyDevice__Type=Pkcs11
KeyStores__MyDevice__Module=...
KeyStores__MyDevice__Pin=...
```

Sample configuration (*.json* file):

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

```ini
[KeyStores:eToken]
Type=Pkcs11
Module=eTPKCS11.dll
Pin=XXXX
```

```sh
KeyStores__eToken__Type=Pkcs11
KeyStores__eToken__Module=eTPKCS11.dll
KeyStores__eToken__Pin=XXXX
```

```json
"eToken": {
	"Type": "Pkcs11",
	"Module": "eTPKCS11.dll",
	"Pin": "XXXX"
}
```

Safenet eToken cryptographic USB token (multiple tokens present, specifying the token to be used):

```ini
[KeyStores:eTokenA]
Type=Pkcs11
Module=eTPKCS11.dll
Pin=XXXX
TokenSerialNumber=01f5cfe4
```

```sh
KeyStores__eTokenA__Type=Pkcs11
KeyStores__eTokenA__Module=eTPKCS11.dll
KeyStores__eTokenA__Pin=XXXX
KeyStores__eTokenA__TokenSerialNumber=01f5cfe4
```

```json
"eTokenA": {
	"Type": "Pkcs11",
	"Module": "eTPKCS11.dll",
	"Pin": "XXXX",
	"TokenSerialNumber": "01f5cfe4"
}
```

## Using a Kryptus HSM throught PKCS #11

> [!TIP]
> To store keys on a Kryptus HSM, it is recommended to use the [Kryptus](kryptus.md) key store instead. If for some reason you prefer
> to communicate with the HSM using PCKS #11, keep reading.

You will the following parameters for a **VHSM** (Virtual HSM) and a **regular user** (*not* a VCO user) with password authentication:

* **IP address** of the VHSM
* **HTTPS port** of the VHSM (*not* the TTLV port)
* **Username** and **Password** of the regular user

First, acquire the latest file *kNET-PKCS11-Linux-X.Y.Z.tar* from Kryptus or Lacuna. Then do:

```sh
sudo su -
tar xf kNET-PKCS11-Linux-X.Y.Z.tar
cd kNET-PKCS11-Linux-X.Y.Z
./install.sh
mkdir -p /var/amplia/.config/kryptus/knet/pkcs11
touch /var/amplia/.config/kryptus/knet/pkcs11/config.json
chown -R root:amplia /var/amplia/.config
chmod -R a=,u+rwX,g+rX /var/amplia/.config
nano /var/amplia/.config/kryptus/knet/pkcs11/config.json
```

Paste the following text, replacing the values with your own:

```json
{
  "connections": {
    "hsm_1": {
      "ip": "IP_ADDRESS_OF_YOUR_VHSM",
      "port": "HTTPS_PORT_OF_YOUR_VHSM"
    }
  },
  "users": {
    "SOME_USERNAME": {
      "authentication_type": "password",
      "connection": "hsm_1"
    }
  },
  "log_verbosity": "full"
}
```

According to Kryptus, the **log_verbosity** entry can assume one of the following values:

* `none`: Nothing is logged
* `key_only`: Only key operations and error are logged
* `quiet`: *key_only* + operations using the HSM, errors and warnings
* `info`: *quiet* + PCKS#11 operations (note: ignores the `C_GetTokenInfo` function)
* `verbose`: *info* + brief arguments from PKCS#11 operations
* `full`: Logs everything as verbosely as possible

> [!NOTE]
> If no verbosity was defined, i.e., no **log_verbosity** is found in the configuration file, the verbosity will default to `quiet`.

Then, on the Amplia configuration file:

```ini
[KeyStores:MyKryptusHsm]
Type=Pkcs11
Module=libkNETPKCS11.so
Pin=SOME_PASSWORD
```

```sh
KeyStores__MyKryptusHsm__Type=Pkcs11
KeyStores__MyKryptusHsm__Module=libkNETPKCS11.so
KeyStores__MyKryptusHsm__Pin=SOME_PASSWORD
```

```json
"MyKryptusHsm": {
	"Type": "Pkcs11",
	"Module": "libkNETPKCS11.so",
	"Pin": "SOME_PASSWORD"
}
```

### High Availability

To enable High Availability (HA) it is necessary to configure a vector of IP addresses and ports in the config file. The example below shows the necessary configuration:

```json
{
  "connections": {
    "hsm_1": {
      "ip": ["IP_ADDRESS_A", "IP_ADDRESS_B"],
      "port": ["HTTPS_PORT_ON_A", "HTTPS_PORT_ON_B"]
    }
  },
  ...
}

```

## See also

* [Key Stores](index.md)
* [Amplia on premises](../index.md)
