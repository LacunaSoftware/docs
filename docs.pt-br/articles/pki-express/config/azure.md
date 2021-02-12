# Integração com o Azure - PKI Express

O PKI Express possibilita utilizar certificados e chaves armazenadas em Azure Key Vaults para assinar documentos.

Para utilizar certificados ou chaves armazenados em um key vault, você precisará dos seguintes parâmetros:

- **azureAppId**: campo **Application ID** de uma aplicação registrada no *Azure Active Directory*
- **azureAppSecret**: segredo da aplicação, gerado na área *Certificates &amp; secrets* da aplicação
- **azureKeyVaultEndpoint**:campo `DnsName` do key vault, pode ser obtido na área *Overview* do vault

Para configurar o uso do Key Vault:

```sh
pkie config --set azureAppId=<id>
pkie config --set azureAppSecret=<secret>
pkie config --set azureKeyVaultEndpoint=<endpoint>
```