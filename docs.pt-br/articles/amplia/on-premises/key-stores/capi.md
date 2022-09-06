# Armazenamento de chaves via CAPI

> [!NOTE]
> Armazenamento de chaves via CAPI são compatíveis somente com instalações Windows Server.

O **Windows CryptoAPI (CAPI)** trabalha com o número dos Provedores de Serviço de Criptografia (CSPs) que fazem o trabalho real de fornecer vários "serviços criptográficos", como
armazenamento de chaves. Dispositivos como Hardware Security Modules (HSMs) e token criptográfico USB geralmente fornecem um CAPI CSP que pode ser usado para se comunicar com o
dispositivo.

<!--
> [!TIP]
> Embora o Windows Server tenha seu próprio CSP, que fornece acesso a seus armazenamentos de chaves nativos, para essa finalidade, você deve usar o
[Armazenamento de chaves no store nativo](native.md).
-->

Cada CAPI CSP é identificado por seu *nome* e *type*. Se estiver usando um HSM ou um token de criptografia, consulte a documentação do dispositivo para encontrar o nome e o tipo do CSP.

Para configurar o armazenamento de chaves via CAPI no Amplia, use as seguintes configurações:

* **Type**: `CAPI`
* **ProviderName**: nome do CSP
* **ProviderType**: tipo do CSP. Valores válidos são:
    * **PROV_RSA_FULL**
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
	* **PROV_RSA_AES**
* **ExportableKeys**: por padrão, as chaves são geradas marcadas como exportáveis. Para gerar chaves não exportáveis, configure isso como `false`.
* **UseMachineStore**: alguns CSPs têm o conceito de *armazenar chaves* na loja do usuário ou na *loja de máquinas* (principalmente o CSP nativo do Windows). Por padrão, o repositório de
usuários é usado. Defina esta configuração como `true` para usar o armazenamento da máquina.
* **Pin**: o PIN da loja, se necessário

<!--
TODO:
OverrideKeyPins: ?
RememberKeyPins: ?
-->

Configuração de amostra:

```json
"KeyStores": {
	...,
	"MyCapiKeyStore": {
		"Type": "Capi",
		"ProviderName": "...",
		"ProviderType": "PROV_RSA_FULL"
	},
	...
}
```

> [!TIP]
> Se a documentação HSM não estiver clara sobre o tipo do CSP, tente usar `PROV_RSA_FULL` ou `PROV_RSA_AES`

## Common armazenamento de chaves via CAPI

Safenet eToken criptográfico USB token:

```json
"CapiToken": {
	"Type": "Capi",
	"ProviderName": "eToken Base Cryptographic Provider",
	"ProviderType": "PROV_RSA_FULL",
	"Pin": "XXXX"
}
```

## Veja também

* [Armazenamento de chaves](index.md)
* [Amplia on premises](../index.md)
