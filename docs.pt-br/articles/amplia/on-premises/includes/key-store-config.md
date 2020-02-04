### Configuração Key store

Na seção **KeyStores**, cada chave é o nome de um armazenamento de chaves, tendo como valor uma seção com a configuração do armazenamento de chaves. Por exemplo:

```json
...
"KeyStores": {
  "Store1": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "..."
  },
  "Store2": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "...",
    "Setting3": "..."
  },
}
...
```

A configuração **Type** em cada configuração de armazenamento de chaves define o tipo de armazenamento de chaves e as configurações restantes dependem do provedor escolhido. Veja este artigo [Configuração de Key Store](../key-stores/index.md) para detalhes.
