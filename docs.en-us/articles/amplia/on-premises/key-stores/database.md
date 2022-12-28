# Database Key Store - Amplia

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

## Configuring Amplia to store keys on the database

Unlike other key stores, you don't need to add an entry to the **KeyStores** configuration section to use the database key store. Instead,
it can be enabled on the section **Amplia** of the configuration file:

* `DatabaseKeyStoreEnabled`: set this setting to `true` to enable the database key store, called *Database*

You can use the name of the store (*Database*) to configure the `DefaultKeyStore`.

Example (*.ini* or *.conf* configuration file):

```ini
[Amplia]
DatabaseKeyStoreEnabled=True
DefaultKeyStore=Database
```

Example (environment variables):

```sh
Amplia__DatabaseKeyStoreEnabled=True
Amplia__DefaultKeyStore=Database
```

Example (*.json* configuration file):

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

* [Key Stores](index.md)
* [Amplia on premises](../index.md)
