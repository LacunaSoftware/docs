# Certificates with private key

The class @Lacuna.Pki.PKCertificateWithKey holds information about certificates that have an associated private key and allows secure operations with this key.

The different ways to upload private key certificates are presented in the following sections.

## Loading personal certificates from the Windows Store

```cs
// Carregando certificados pessoais do Windows Store
var store = WindowsCertificateStore.LoadPersonalCurrentUser();

// Selecionando os certificados com chave privada associada
var certsWithKey = store.GetCertificatesWithKey();

// Exibindo informações dos certificados
certsWithKey.ForEach(c => Console.WriteLine(c.Certificate));
```

The class `WindowsCertificateStore` In addition to uploading user's personal certificates, it also allows you to upload certificates from the machine or from a `StoreName` and past `StoreLocation`.

For more information on options for loading Windows Store certificates, check the "Load" methods in the API guide:  @Lacuna.Pki.Stores.WindowsCertificateStore

## Loading certificate from a PKCS#12

```cs
// PKCS#12 bytes e password
byte[] pkcs12Content = ...
string password = ...

// Carregando um PKCS#12
var p12 = Pkcs12CertificateStore.Load(pkcs12Content, password);

// Selecionando os certificados com chave privada associada
var certsWithKey = p12.GetCertificatesWithKey();

// Exibindo informações dos certificados
certsWithKey.ForEach(c => Console.WriteLine(c.Certificate));
```

## Key Operations

The class @Lacuna.Pki.PKCertificateWithKey allows you to perform the following operations with the certificate private key:

* Signature algorithm realization (methods @Lacuna.Pki.PKCertificateWithKey.SignData(Lacuna.Pki.SignatureAlgorithm,System.Byte[]) and <xref:Lacuna.Pki.PKCertificateWithKey.SignHash(Lacuna.Pki.SignatureAlgorithm,System.Byte[])>))
* Signature Algorithm Verification (methods @Lacuna.Pki.PKCertificateWithKey.VerifyData(Lacuna.Pki.SignatureAlgorithm,System.Byte[],System.Byte[]) e <xref:Lacuna.Pki.PKCertificateWithKey.VerifyHash(Lacuna.Pki.SignatureAlgorithm,System.Byte[],System.Byte[])>))

Its use is exemplified below.

### Data Signature

```cs
PKCertificateWithKey certWithKey = ...

// Definindo algoritmo de digest
var digestAlgorithm = DigestAlgorithm.SHA256;

// Definindo bytes a serem assinados
var toSign = System.Text.Encoding.ASCII.GetBytes("hello pki");

// Assinando com certificado
var signature = certWithKey.SignData(digestAlgorithm, toSign);

// Verificando assinatura
Console.WriteLine(certWithKey.VerifyData(digestAlgorithm, toSign, signature));
```

### Hash signature

```cs
PKCertificateWithKey certWithKey = ...

// Definindo algoritmo de digest
var digestAlgorithm = DigestAlgorithm.SHA256;

// Computando hash a ser assinado
var toSignHash = digestAlgorithm.ComputeHash(System.Text.Encoding.ASCII.GetBytes("hello pki"));

// Assinando com certificado
var signature = certWithKey.SignHash(digestAlgorithm, toSignHash);

// Verificando assinatura
Console.WriteLine(certWithKey.VerifyHash(digestAlgorithm, toSignHash, signature));
```

## See too

* @Lacuna.Pki.PKCertificateWithKey
* @Lacuna.Pki.Stores.WindowsCertificateStore
* @Lacuna.Pki.Stores.Pkcs12CertificateStore