# Amplia - Native Key Stores

> [!NOTE]
> Native Key Stores are compatible with Windows Server and Linux installations only. On Azure App Services, use an [Azure Key Vault key store](azure.md) instead.

Keys can be stored on the operating system's **native key store**, which is actually an abstract concept with different
meanings depending on the platform on which Amplia is running.

In this abstraction, two key stores are defined:

* The **user store** is a key store dedicated to the application user and does not require the application to have administrative privileges
* The **machine store** is a key store shared among all applications running on the same machine, and requires administrative privileges to be accessed

> [!TIP]
> Since using the machine store requires elevating the application user, it is generally preferrable to use the **user store**.

Native key stores have the following advantages:

* Keys are stored with no additional cost
* Keys can be backed up (unless you opt to generate non-exportable keys)

However, they also have disadvantages:

* Since the keys are usually stored on files on the server file system, it can be difficult to restrict access to them
* Since each web server has its own native stores, deployments with multiple web servers (either for failover or load balacing) cannot use native stores

See the sections below to understand the actual meaning of native key stores on each of the supported platforms, how to backup keys and how to configure
Amplia to use native key stores.

## Windows Server native key stores

On Windows Server, keys stored on native key stores are actually persisted as self-signed certificates with an associated private key on either
the current user or local machine's *Personal* certificate stores (also called the store *My*):

![Windows Native Key Store](../../../../../images/amplia/windows-native-store.png)

> [!WARNING]
> In order to use native key stores on Windows Server, you should [configure Amplia to use a local user account](../windows/configure-app-user.md)

To backup keys stores on the *user store*:

1. On *Windows Explorer*, navigate to the folder *C:\Windows\System32* and locate the executable **mmc.exe**
1. **Hold the SHIFT key and right-click the file**, then click on **Run as different user**
1. Enter the username and password of the local account created for Amplia
1. Click *File* and then *Add/Remove Snap-in...*
1. Select the **Certificates** snap-in and click *Add &gt;*
1. Choose the **My user account** option, and then *Finish*, and *OK* on the previous dialog
1. Expand the item *Certificates - Current User*, and the folder *Personal* under it
1. Click the folder *Certificates*
1. Right-click the certificate corresponding to the key you want to backup, select *All Tasls*, then **Export...**
1. Choose **Yes, export the key**
1. Leave the default options on the next step (*Export File Format*)
1. Enter a strong password to protect the .PFX file
1. Enter a location for the .PFX file

To use the machine machine key store on Windows Server, you must first [configure Amplia to use a local user account](../windows/configure-app-user.md) and
then [add the application user to the local *Administrators* user group](../windows/configure-app-user.md#grant-admin).

To backup keys stored on the *machine store*, repeat the process above but, on **step 6**, choose **Computer account** instead.

## Linux native key store

On Linux, keys stored on the native user store are stored as PFX files containing a self-signed certificate with the corresponding key,
stored on the directory */var/amplia/.dotnet/corefx/cryptography/x509stores/my*.

> [!NOTE]
> The native machine key store is not supported on Linux.

The PFX files are stored without a password, so the keys are essencially in plain text. Therefore, it is essencial to restrict access to the directory.
That is why, during the installation, a `sudo chmod -R a=,g=rX,u=rwX /var/amplia` is performed, removing all access from "others" (except members of the
*amplia* group and sudo users).

To backup the keys, simply backup the directory mentioned above (sudo required).

## Configuring Amplia to use native key stores

The native key stores are enabled on the section **Amplia** of the configuration file:

* `NativeUserKeyStoreEnabled`: set this setting to `true` to enable the native user store
* `NativeMachineKeyStoreEnabled`: set this setting to `true` to enable the native machine store (not available on Linux)

For instance:

```json
	...,
	"Amplia": {
		...,
		"NativeUserKeyStoreEnabled": true,
		...
	},
	...
```

### Generating non-exportable keys

```json
	...,
	"KeyStores": {
		...,
		"NativeUserStore": {
			"Type": "Native",
			"ExportableKeys": true
		}
		...
	},
	...
```

## See also

* [Amplia - Key Stores](index.md)
* [Amplia - CNG Key Stores](cng.md)
* [Amplia - PKCS #11 key stores](pkcs11.md)
* [Amplia - Azure Key Vault Key Stores](azure.md)
* [Amplia on premises](../index.md)
