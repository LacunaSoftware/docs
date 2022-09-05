# Armazenamento de chaves via PKCS #11

> [!NOTE]
> PKCS #11 são compatíveis apenas com as instalações do Windows Server e Linux. Para armazenar chaves em um HSM em uma instância do Amplia hospedada no Azure App Services, use o armazenamento
[Azure Key Vault key store](azure.md).

Dispositivos como *Hardware Security Modules* (HSMs) e tokens USB criptográficos geralmente suportam a comunicação através do protocolo PKCS #11.

Para configurar uma PKCS #11 no Amplia, siga as configurações

* **Type**: `Pkcs11`
* **Module**: nome da biblioteca da PKCS #11 (ex.: `eTPKCS11.dll`)
* **Pin**: PIN do token, se necessário
* **TokenSerialNumber**: Se vários tokens estiverem presentes, você poderá especificar o token a ser usado com essa configuração

Configuração de amostra:

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

Token USB criptográfico Safenet eToken (apenas um token conectado):

```json
"eToken": {
	"Type": "Pkcs11",
	"Module": "eTPKCS11.dll",
	"Pin": "XXXX"
}
```

Token USB criptográfico Safenet eToken (múltiplos tokens presentes, especificando o token a ser usado):

```json
"eTokenA": {
	"Type": "Pkcs11",
	"Module": "eTPKCS11.dll",
	"Pin": "XXXX",
	"TokenSerialNumber": "01f5cfe4"
}
```

## Using a Kryptus HSM throught PKCS #11

You will the following parameters for a **VHSM** (Virtual HSM) and a **regular user** (*not* a VCO user) with password authentication:

* **IP address** of the VHSM
* HTTPS **port** of the VHSM (*not* the TTLV port)
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

The **log_verbosity** entry can assume one of the following values:

* `none`: Nothing is logged
* `key_only`: Only key operations and error are logged
* `quiet`: key_only + operations using the HSM, errors and warnings
* `info`: quiet + PCKS#11 operations (note: ignores the C_GetTokenInfo function)
* `verbose`: info + brief arguments from PKCS#11 operations
* `full`: Logs everything as verbosely as possible

> [!NOTE]
> If no verbosity was defined, i.e., no **log_verbosity** is found in the configuration file, the verbosity will default to `quiet`.

Then, on the Amplia configuration file:

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

## Veja também

* [Amplia - Configuração de Key Stores](index.md)
* [Amplia - Armazenamento de chaves em banco de dados](database.md)
<!-- [Amplia - Armazenamento de chaves no store nativo](native.md) -->
* [Amplia - Armazenamento de chaves via CAPI](capi.md)
* [Amplia - Armazenamento de chaves via CNG](cng.md)
* [Amplia - Armazenamento de chaves em Azure Key Vault](azure.md)
* [Amplia on premises](../index.md)
