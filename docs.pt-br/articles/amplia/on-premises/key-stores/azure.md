# Armazenamento de chaves em Azure Key Vault

> [!NOTE]
> Armazenamentos de chaves em Azure Key Vault são compatíveis com todas as plataformas suportadas.

[Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) pode ser pensado como uma nuvem HSM. As chaves são armazenadas no FIPS 140-2 Nível 2 validadas HSMs por um preço
relativamente baixo de ~5 doláres por mês por chave. Este serviço da Microsoft permitiu o emprego de HSMs em projetos, que de outra forma, não teriam o orçamento necessário.

> [!TIP]
> A nuvem base da Lacuna Software na instância do Amplia (oferencendo SaaS) armazena todas chaves AC no Azure Key Vault, e nós altamente recomendamos isto para instâncias instaldas tanto
na nuvem quanto em servidores locais.

Para configurar um armazenamento em Azure Key Vault no Amplia, use as seguintes configurações:

* **Type**: `AzureKeyVault`
* **Endpoint**: Nome DNS da *key vault* (mostrado na guia *Overview* do key vault) -- ex.: https://my-pki.vault.azure.net/
* **AppId**: Aplicação ID para ser usada para autenticar com Azure
* **AppKey**: Aplicação de chave secreta para ser usada para autenticar com Azure (para segurança adicional, omita esse valor e especifique o `CertThumb`)
* **CertThumb**: impressão digital do certificado para ser usada para autenticar com Azure (ex codificado, conforme fornecido pelo Azure Portal)
* **UseHsm**: por padrão, [HSM-protected](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) chaves são criadas. Para usar chaves de "software", defina este valor para `false`

Configuração de amostra:

```json
"KeyStores": {
	...,
	"MyKeyVault": {
		"Type": "AzureKeyVault",
		"Endpoint": "https://xxx.vault.azure.net/",
		"AppId": "00000000-0000-0000-0000-000000000000",
		"AppKey": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
	},
	...
}
```

## Veja também

* [Amplia - Armazenamento de chaves](index.md)
* [Amplia - Armazenamento de chaves do banco de dados](database.md)
* [Amplia - Armazenamento de chaves nativo](native.md)
* [Amplia - Armazenamento de chaves em CAPI](capi.md)
* [Amplia - Armazenamento de chaves em CNG](cng.md)
* [Amplia - Armazenamento de chaves em PKCS #11](pkcs11.md)
* [Amplia on premises](../index.md)
