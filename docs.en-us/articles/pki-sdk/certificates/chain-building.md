# Augmenting certificate chain build

When uploading a certificate using the methods @Lacuna.Pki.PKCertificate.Decode(System.Byte[]) or
@Lacuna.Pki.PKCertificate.Decode(System.String), the PKI SDK will automatically attempt to assemble the certificate 
chain through online resources such as AuthorityInformationAccess, OCSP requests, Certificate Store of internal SDK 
ACs, among others. It is essential to have a complete chain for the validation of a certificate, as this validation 
is also performed on its issuers recursively. The CA certificates found online are stored in the SDK's internal 
Certificate Store, offering great performance for future operations.

When using certificates that have online information from issuers or certificates that follow known standards, there 
will hardly be a need to assist in the process of completing certificate certificates.

If the user wants to use certificates with different characteristics or private standards that make it impossible to 
complete the chains automatically, the SDK offers some solutions to assist this action, detailed in the following 
sections.

## Including ACs in the Windows Store

If the set of CAs intermediate to the certificates has a limited cardinality, it is possible to include them in the 
**Intermediate Certification Authorities> Certificates** directory in the current user's Certificate Manager or 
Local Computer. The SDK will use this local store as a source to complete the certificate chain.

For more details on how to import certificates in the Microsoft Management Console (MMC) see the topic **How to set up intermediate certificates** in the Microsoft article [How to configure intermediate certificates on a computer that is running IIS for server authentication](https://support.microsoft.com/pt-br/help/954755)

## Parameter ICertificateStore

The library offers the use of a certificate store in memory (<xref:Lacuna.Pki.Stores.MemoryCertificateStore>) and 
also the possibility for the user to create their own interface implementation @Lacuna.Pki.Stores.ICertificateStore if you want to use a more complex and 
communicable structure with other systems such as database, cache, among others.

The parameter can be passed either when the certificate is loaded (methods <xref:Lacuna.Pki.PKCertificate.Decode(System.Byte[],Lacuna.Pki.Stores.ICertificateStore)>
or
<xref:Lacuna.Pki.PKCertificate.Decode(System.String,Lacuna.Pki.Stores.ICertificateStore)>)
how much on the property @Lacuna.Pki.CertificateValidationOptions.CertificateStore validation options (<xref:Lacuna.Pki.CertificateValidationOptions>).

Example of use in cargo:

```cs
// Bytes do certificado a ser carregado
byte[] certContent;

// Lista de certificados ou ACs privadas
List<PKCertificate> certList;

// Certificate store
var certStore = new MemoryCertificateStore(certList);

// Carregando certificado e completando cadeia
var cert = PKCertificate.Decode(certContent, certStore);
```

Example of use in validation options:

```cs
// Certificado carregado
var cert = ...

// Lista de certificados ou ACs privadas
List<PKCertificate> certList;

// Certificate store
var certStore = new MemoryCertificateStore(certList);

// Opções de validação com raízes do Windows confiáveis e certStore do usuário
var options = new CertificateValidationOptions(TrustArbitrors.Windows);
options.CertificateStore = certStore;

// A cadeia será completada durante a validação
cert.Validate(options);
```

## See too

* @Lacuna.Pki.Stores.ICertificateStore
* @Lacuna.Pki.Stores.MemoryCertificateStore
* @Lacuna.Pki.PKCertificateWithKey
* [How to configure intermediate certificates on a computer that is running IIS for server authentication](https://support.microsoft.com/pt-br/help/954755)