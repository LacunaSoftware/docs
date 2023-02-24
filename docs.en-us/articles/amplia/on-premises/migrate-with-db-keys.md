# Migrate Amplia instance having database keys

When migrating an [on-premises](index.md) instance of [Amplia](../index.md) to a different environment, if the instance has CA keys
stored on the [Database Key Store](key-stores/database.md), additional care must be taken for such keys to be usable on the new environment.

If you are experiencing errors when issuing certificates or with certificates being refused due to "unknown revocation status" after migrating
your Amplia instance, or if your application log contains the exception below, you likely need to perform the steps described in the next section.

```
System.Security.Cryptography.CryptographicException: The payload was invalid.
```

## Migration Procedure

1. Make sure the Amplia instance on the origin environment is running at least version [3.13.2](../changelog.md), and that the version you are
   installing on the destination environment is the same as the version on the origin environemnt (or newer)
1. Log on the management dashboard **on the origin**
1. Click on your name on the upper right corner of the screen, then click on **Administration**
1. On the left menu, click on **About**
1. Take note of the value of the **App Discriminator** property
1. When installing the new instance, use that same value on setting `AppDiscriminator` of the `General` section (see below)

Example (*.ini* or *.conf* configuration file):

```ini
[General]
AppDiscriminator=PASTE_VALUE_HERE
```

Example (environment variables):

```sh
General__AppDiscriminator=PASTE_VALUE_HERE
```

Example (*.json* configuration file):

```json
	...,
	"General": {
		"AppDiscriminator": "PASTE_VALUE_HERE"
	},
	...
```
