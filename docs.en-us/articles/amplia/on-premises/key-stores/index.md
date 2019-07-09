# Amplia - Key Stores

The keys for your Certification Authorities (CAs) can be stored on a variety of locations, called *key stores*. The choice of where to store
CA keys is one of the most important decisions when planning for a CA or a Public Key Infrastructure (PKI).

Some of the locations where you may store keys are:

* A *Hardware Security Module* (HSM)
* A cryptographic USB token
* The operating system's native key store
* An [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)

Each option has its advantages and disadvantages.

From a security and reliability standpoint, perhaps the best option is to store keys on an **HSM**. Such devices allow keys to be
generated inside a crypto-protected environment in such a way that keys can never leave the confinement of such environment,
but at the same time can be backed up (usually with two HSMs). The downside is the cost, which usually ranges from
a few to several thousands of dollars per unit, depending on the manufacturer and capabilities of the device chosen. Maintaining
HSMs can also be expensive, since it usually requires specialized personnel.

A **cryptographic USB token** is far cheaper, costing roughly 10 dollars per unit, and can also generate keys inside a crypto-protected
environment never being able to leave such environment. However, keys generated inside crypto tokens usually cannot be backed up,
leaving the CA vulnerable to key loss, which is a severe event for a CA.

Keys stored on the **operating system's native key store** have virtually no cost and can be backed up, but their access is hard
to control, since the keys are stored on files on the OS's file system.

One option that gathers the best from HSM key stores with relatively low cost is **[Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)**,
which can be thought of as a cloud HSM. Keys are stored on FIPS 140-2 Level 2 validated HSMs for a relatively low cost of ~5 dollars
per month per key. This service from Microsoft has enabled the employment of HSMs on projects which otherwise would not have the necessary
budget.

> [!TIP]
> Lacuna Software's cloud-based Amplia instance (SaaS offering) stores all CA keys on Azure Key Vault, and we highly recommend it
> for instances installed both on the cloud or on local servers.

## Key Store types

Regardless of your option on where to store keys, key stores typically support one or more communication protocols. Amplia interfaces
with key stores through such protocols. The communication protocols define the **key store types** supported by Amplia.

The supported key store types are:

* [Database](database.md)
* [Native](native.md)
* [PKCS #11](pkcs11.md)
* [Windows CryptoAPI (CAPI)](capi.md)
* [Windows Cryptography API - Next Generation (CNG)](cng.md)
* [Azure Key Vault](azure.md)

## Key Store configuration

On the section **KeyStores** of the configuration file, each key is the name of a key store, having as value a section with the key store's configuration. For instance:

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

The setting **Type** on each key store configuration defines the type of the key store, and the remaining settings depend on the provider chosen.

See the article for each key store type for configuration instructions (links above).
