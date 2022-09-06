# Armazenamento de chaves via PKCS #11

> [!NOTE]
> PKCS #11 são compatíveis apenas com as instalações do Windows Server e Linux. Para armazenar chaves em um HSM em uma instância do Amplia hospedada no Azure App Services,
> use o armazenamento [Azure Key Vault key store](azure.md).

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

## Configurações comuns de PKCS #11

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

## Comunicação com HSM Kryptus via PKCS #11

> [!TIP]
> Para armazenar chaves em um HSM Kryptus, é recomendado utilizar o key store [Kryptus](kryptus.md). Se por algum motivo você preferir
> realizar a comunicação com o HSM via PKCS #11, veja o restante desta seção.

Você precisará dos parâmetros abaixo referentes a um **VHSM** (*Virtual HSM*) e um **usuário comum** (que *não seja* um VCO) com autenticação por senha:

* **Endereço de IP** do VHSM
* **Porta HTTPS** do VHSM (*não* a porta TTLV)
* **Username** e **Senha** do usuário

Primeiramente, obtenha o arquivo mais recente *kNET-PKCS11-Linux-X.Y.Z.tar* da Kryptus ou da Lacuna. Em seguida, execute:

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

Cole o texto abaixo, substituindo os valores necessários (escritos abaixo em `CAIXA_ALTA`):

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

De acordo com a Kryptus, o campo **log_verbosity** pode ter um dos valores a seguir:

* `none`: Nada é logado
* `key_only`: Apenas operações com chaves e erros são logados
* `quiet`: *key_only* + operações com o HSM, erros e warnings
* `info`: *quiet* + operações PCKS #11 (nota: ignora a função `C_GetTokenInfo`)
* `verbose`: *info* + argumentos resumidos de operações PKCS #11
* `full`: loga tudo da maneira mais detalhada o possível

> [!NOTE]
> Se o nível de log não for definido a verbosidade padrão é `quiet`.

Em seguida, adicione ao arquivo de configuração do Amplia:

```json
"MyKryptusHsm": {
	"Type": "Pkcs11",
	"Module": "libkNETPKCS11.so",
	"Pin": "SOME_PASSWORD"
}
```

### Alta Disponibilidade

Para habilitar Alta Disponibilidade (HA - *High Availability*) é necessário configurar um array de endereços de IP e portas no arquivo de configuração do módulo PKCS #11,
conforme abaixo:

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

* [Configuração de Key Stores](index.md)
* [Amplia on premises](../index.md)
