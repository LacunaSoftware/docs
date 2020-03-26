# Armazenamento de chaves em banco de dados

> [!NOTE]
> A documentação para este sistema está atualmente em construção. Pedimos desculpas por qualquer inconveniente que isso possa causar. Por favor, entre em contato conosco se houver alguma
informação que você precise que não esteja documentada no momento.

### Configurando o Amplia para armazenar chaves no banco de dados

Ao contrário de outros armazenamentos de chave, você não precisa adicionar uma entrada à seção de configuração do **KeyStores** para usar o armazenamento de chaves do banco de dados. Em vez
disso,pode ser ativado na seção **Amplia** do arquivo de configuração:

* `DatabaseKeyStoreEnabled`: defina esta configuração como `true` para ativar o armazenamento de chaves do banco de dados, chamado *Database*

Você pode usar o nome do armazenamento (banco de dados) para configurar o `DefaultKeyStore`. Por exemplo:

```json
	...,
	"Amplia": {
		...,
		"DatabaseKeyStoreEnabled": true,
		"DefaultKeyStore": "Database",
		...
	},
	...
```

## See also

* [Amplia - Configuração de Key Stores](index.md)
<!-- [Amplia - Armazenamento de chaves de store nativo](native.md) -->
* [Amplia - Armazenamento de chaves via CAPI](capi.md)
* [Amplia - Armazenamento de chaves via CNG](cng.md)
* [Amplia - Armazenamento de chaves via PKCS #11](pkcs11.md)
* [Amplia - Armazenamento de chaves em Azure Key Vault](azure.md)
* [Amplia on premises](../index.md)
