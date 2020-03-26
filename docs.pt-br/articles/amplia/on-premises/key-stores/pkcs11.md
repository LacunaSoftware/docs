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

<!-- TODO: add Thales nCipher configuration -->

## Veja também

* [Amplia - Configuração de Key Stores](index.md)
* [Amplia - Armazenamento de chaves em banco de dados](database.md)
<!-- [Amplia - Armazenamento de chaves no store nativo](native.md) -->
* [Amplia - Armazenamento de chaves via CAPI](capi.md)
* [Amplia - Armazenamento de chaves via CNG](cng.md)
* [Amplia - Armazenamento de chaves em Azure Key Vault](azure.md)
* [Amplia on premises](../index.md)
