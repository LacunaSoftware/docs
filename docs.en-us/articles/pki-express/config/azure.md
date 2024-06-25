# Azure Integration - PKI Express

PKI Express makes it possible to use certificates and keys stored in Azure Key Vaults to sign documents.

To use certificates or keys stored on a key vault, you will need the following parameters:

- **azureAppId**: the **Application ID** of an application registered on *Microsoft Entra ID*
- **azureAppSecret**: an authentication secret for the application, generated on *Certificates &amp; secrets*
- **azureKeyVaultEndpoint**: the `DnsName` of the key vault, as shown on the *Overview* menu on Azure Portal

To configure [PKI Express](../index.md) to use Azure's Key Vault:

```sh
pkie config --set azureAppId=<id>
pkie config --set azureAppSecret=<secret>
pkie config --set azureKeyVaultEndpoint=<endpoint>
```