# Amplia - Database Key Store

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

## Configuring Amplia to store keys on the database

Unlike other key stores, you don't need to add an entry to the **KeyStores** configuration section to use the database key store. Instead,
it can be enabled on the section **Amplia** of the configuration file:

* `DatabaseKeyStoreEnabled`: set this setting to `true` to enable the database key store, called *Database*

You can use the name of the store (*Database*) to configure the `DefaultKeyStore`. For instance:

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

* [Amplia - Key Stores](index.md)
* [Amplia - Native Key Stores](native.md)
* [Amplia - CAPI Key Stores](capi.md)
* [Amplia - CNG Key Stores](cng.md)
* [Amplia - PKCS #11 key stores](pkcs11.md)
* [Amplia - Azure Key Vault Key Stores](azure.md)
* [Amplia on premises](../index.md)
