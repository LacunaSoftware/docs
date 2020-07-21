# Certificates on Azure Key Vault

[Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) can be thought of as a cloud HSM. Keys are stored on FIPS 140-2 Level 2
validated HSMs for a relatively low cost of ~5 dollars per month per key. This service from Microsoft has enabled the employment of HSMs on
projects which otherwise would not have the necessary budget.

This article discusses the steps involved in [obtaining](#issue) and [using](#use) certificates stored on Azure Key Vaults to digitally sign documents, such as PDFs.

The steps below assume you already have an [Azure Subscription](https://azure.microsoft.com/en-us/free/) and that you have access to the [Azure Portal](https://portal.azure.com).

They also assume you have already created a key vault. If you haven't, sign in to the [Azure Portal](https://portal.azure.com) and follow the steps below:

1. In the option **Key Vaults**, click on **Add**
1. Fill in the data according to your infrastructure
1. If you'd like to use HSM-backed keys (recommended for production), choose **Premium** in the *Pricing tier* option
1. Click on **Review + create**
1. Click on **Create**

<a href="issue" />
## Obtaining a certificate stored on Azure Key Vault

Certificates can either be **imported** to a key vault or be **generated** inside of it. This is an important distiction, since the best security
is achieved by keeping the certificate key stored safely on the key vault at all times, since its creation.

> [NOTE]
> If you already have a certificate and want to import it to a key vault, this is a trivial task covered by Azure's documentation [here](https://docs.microsoft.com/en-us/azure/key-vault/certificates/tutorial-import-certificate).

This section is focused on the use case of obtaining a certificate with a key that is generated inside of a key vault. This involves three steps:

1. Generate a key on the key vault
1. Acquire a public key X.509 certificate corresponding to the generated key
1. Submit the certificate to the key vault

To generate the key pair, follow the steps below:

1. From the Azure portal, click on **Key vaults**
1. **Select the key vault** on which in indent to store the certificate
1. Click on **Certificates**
1. Click on **Generate/Import** and fill the following values:
   * On *Method of Certificate Creation*, select **Generate**
   * On *Certificate Name*, choose a name to identity this certificate
   * On *Type of Certificate Authority (CA)*, choose **Certificate issued by a non-integrated CA**
   * On *Subject*, fill the common name (`CN=`), organization (`O=`) and country (`C=`) that you want on the certificate, e.g.: `CN=Patorum Solutions,O=Patorum Inc.,C=US`
   * Leave *DNS names* empty
   * Do not change the *Validity Period* field (it is not actually used)
   * On *Content Type*, choose **PEM**
   * Fill *Lifetime Action Type* and *Percentage Lifetime* as you prefer
   * Click on *Advanced Policy Configuration* and leave the default values, except for:
     * On *X.509 Key Usage Flags*, mark **Non-repudiation**
     * On *Exportable Private Key*, choose **No**
     * On *Key Type*, choose **RSA-HSM** to use an HSM-backed key (recommended for production)
     * On *Enable Certificate Transparency, choose **No**
1. Click on **Create**

After a few seconds, the certificate will appear on the *In progress, failed or cancelled* subsection of the certificate list.

1. Click on the certificate
1. Click on **Certificate Operation**
1. Click on **Download CSR**





In order to obtain a certificate, you will need to request it to Certification Authority (CA) such as
[DigiCert](https://www.digicert.com/) or [GlobalSign](https://www.globalsign.com). Depending on the kind of certificate you intend to acquire,
different levels of data verification will be employed by the CA, such as requiring you to scan an official ID or having you visit a local representative (in person).













<a href="use" />
## Using certificates stored on Azure Key Vault

