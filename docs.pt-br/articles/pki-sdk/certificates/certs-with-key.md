# Certificados com chave privada associada

A classe @Lacuna.Pki.PKCertificateWithKey detém informação de certificados que possuem chave privada associada e
permite operações seguras com esta chave.

As diferentes maneiras de se carregar certificados com chave privada são apresentadas nas seções seguintes.

## Carregando certificados pessoais do Windows Store

```cs
// Carregando certificados pessoais do Windows Store
var store = WindowsCertificateStore.LoadPersonalCurrentUser();

// Selecionando os certificados com chave privada associada
var certsWithKey = store.GetCertificatesWithKey();

// Exibindo informações dos certificados
certsWithKey.ForEach(c => Console.WriteLine(c.Certificate));
```

A classe `WindowsCertificateStore` além de carregar certificados pessoais do usuário, também permite
carregar certificados da máquina ou de um `StoreName` e `StoreLocation` passado.

Para mais informações de opções para carregar certificados do Windows Store, verifique os métodos de "Load" no guia
da API: @Lacuna.Pki.Stores.WindowsCertificateStore

## Carregando certificado de um PKCS#12

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

## Operações com chave

A classe @Lacuna.Pki.PKCertificateWithKey permite realizar as seguintes operações com a chave privada do certificado:

* Realização de algoritmo de assinatura (métodos @Lacuna.Pki.PKCertificateWithKey.SignData(Lacuna.Pki.SignatureAlgorithm,System.Byte[]) e @Lacuna.Pki.PKCertificateWithKey.SignHash(Lacuna.Pki.SignatureAlgorithm,System.Byte[]))
* Verificação de algoritmo de assinatura (métodos @Lacuna.Pki.PKCertificateWithKey.VerifyData(Lacuna.Pki.SignatureAlgorithm,System.Byte[],System.Byte[]) e @Lacuna.Pki.PKCertificateWithKey.VerifyHash(Lacuna.Pki.SignatureAlgorithm,System.Byte[],System.Byte[]))

Seu uso é exemplificado a seguir.

### Assinatura de dados

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

### Assinatura de hash

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

## Veja também

* @Lacuna.Pki.PKCertificateWithKey
* @Lacuna.Pki.Stores.WindowsCertificateStore
* @Lacuna.Pki.Stores.Pkcs12CertificateStore
