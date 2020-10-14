# Web remote signatures

It may be necessary to create a digital signature in situations where a signer's 
private key is not in the same environment in which the SDK is running, allowing 
for a remote signature. As an example, we can describe a web application that 
creates a document signature package and requests the signature from a user who 
has his private key on a smartcard or token connected to his computer. The 
figure below exemplifies the diagram of this scenario.

![Remote signature diagram](../../../../images/pki-sdk/remote-signature-diagram.png)

Signing with a remote key can be done in other situations, for example, between 
a server and a desktop application that communicates with the server via the web 
service. However, the most common case is to perform it in web applications, 
doing the client-side part in the browser. To do this, use the component [Web PKI](../../web-pki/index.md). SDK usage licenses usually accompany usage 
licenses for the component. If you do not already have a license to use the 
component, [request a](https://www.lacunasoftware.com/pt/home/purchase).

The rest of this topic deals with the server-side part of the subscription. For details on the client-side part, see the [Web PKI component documentation](../../web-pki/index.md) or see the
[example project](https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/dotnet), which shows the use of the SDK in conjunction with the Web PKI.

## CAdES signature with remote key

Below is an example of a CAdES signature with a remote key in which there are two distinct moments on the server,
before and after the remote subscription. The first step has the objective of generating the signed attributes (bytes that will be
signed by the customer), the second moment is responsible for finalizing the customer's pre-computed signature.

```cs
// Certificado do signatário (sem chave privada associada)
PKCertificate signingCert = ...

//-----------------------------------------------------------------------
// Servidor (Início da assinatura)

var signer = new CadesSigner();
signer.SetSigningCertificate(signingCert);
signer.SetDataToSign(documentBytes);
signer.SetPolicy(policy);

SignatureAlgorithm signatureAlg;
byte[] toSign = signer.GenerateToSignBytes(out signatureAlg);   // Gera os bytes a serem assinados pelo cliente remotamente

// Enviar os bytes toSign e algoritmo de assinatura ao cliente
//-----------------------------------------------------------------------

// Assinatura no cliente

//-----------------------------------------------------------------------
// Servidor (Finalização da assinatura)

// Recebendo os bytes assinados
byte[] signature = ...

var signer = new CadesSigner();
signer.SetSigningCertificate(signingCert);
signer.SetDataToSign(documentBytes);
signer.SetPolicy(policy);
signer.SetPrecomputedSignature(signature, toSign);   // Define a assinatura remota
signer.ComputeSignature();

byte[] cadesSig = signer.GetSignature();
// ----------------------------------------------------------------------
```

## PAdES signature with remote key

The PAdES signature is an object internal to the signed PDF document that also protects its integrity. This object of
signature has a time reference, so as not to change parameters internal to the PDF, which would invalidate the
signature with respect to integrity, it is necessary to store a data structure (*PadesTransferData*) temporarily
between the start and end stages.

Below is an example of a PAdES signature with a remote key in which there are two distinct moments on the server,
before and after remote signing:

```cs
// Certificado do signatário (sem chave privada associada)
PKCertificate signingCert = ...

//-----------------------------------------------------------------------
// Servidor (Início da assinatura)

var signer = new PadesSigner();
signer.SetPdfToSign(pdfBytes);
signer.SetSigningCertificate(signingCert);
signer.SetPolicy(policy);

SignatureAlgorithm sigAlgorithm;
byte[] transData;
// Retorna os bytes a serem assinados pelo cliente remotamente e os dados a serem armazenados entre as etapas de início/finalização
byte[] toSign = signer.GetToSignBytes(out sigAlgorithm, out transData);

// Armazenar a estrutura transData
// Enviar os bytes toSign e algoritmo de assinatura ao cliente
//-----------------------------------------------------------------------

// Assinatura no cliente

//-----------------------------------------------------------------------
// Servidor (Finalização da assinatura)

// Recebendo os bytes assinados
byte[] signature = ...

var signer = new PadesSigner();
signer.SetPreComputedSignature(signature, transData);  // Define a assinatura remota
signer.SetPolicy(policy);
signer.ComputeSignature();

byte[] signedPdf = signer.GetPadesSignature();
//-----------------------------------------------------------------------
```

## See too

* [CAdES signatures ](cades/index.md)
* [PAdES signatures](pades/index.md)
* [Web PKI](../../web-pki/index.md)