### Key store configuration

On the section **KeyStores**, each key is the name of a key store, having as value a section with the key store's configuration. For instance:

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

The setting **Type** on each key store configuration defines the type of the key store, and the remaining settings depend on the provider chosen. See article [Key Store configuration](../key-stores/index.md) for details.
