# Assinatura com chave remota (assinatura no browser)

Pode ser necessário criar uma assinatura digital em situações em que a chave privada do signatário não está no mesmo ambiente
de execução do SDK, tornando necessária uma assinatura remota. Como exemplo, podemos descrever uma aplicação Web que cria
pacote de assinatura de documentos e requisita a assinatura a um usuário que possui sua chave privada em um smartcard ou
token conectado ao seu computador. A figura abaixo exemplifica o diagrama deste cenário.

![Remote signature diagram](../../../../images/pki-sdk/remote-signature-diagram.png)


A assinatura com chave remota pode ser feita em outras situações, por exemplo, em conjunto entre um servidor e uma aplicação
desktop que se comunica com o servidor via web service. Entretanto, o caso mais comum é realizá-la em aplicações web, fazendo
a parte *client-side* no browser. Para isso, utilize o componente [Web PKI](../../web-pki/index.md). As licenças de uso do
SDK geralmente acompanham licenças de uso para o componente. Se você ainda não possui uma licença de uso para o componente,
[solicite uma](https://www.lacunasoftware.com/pt/home/purchase).

O restante desse tópico trata da parte *server-side* da assinatura. Para detalhes sobre a parte *client-side*, veja a
[documentação do componente Web PKI](../../web-pki/index.md) ou baixe o
[projeto de exemplo](https://github.com/LacunaSoftware/PkiSdkSamples).

## Assinatura CAdES com chave remota

Abaixo temos um exemplo de uma assinatura CAdES com chave remota em que há representado dois momentos distintos no servidor,
antes e após a assinatura remota. O primeiro momento tem o objetivo de gerar os atributos assinados (bytes que serão
assinados pelo cliente), o segundo momento é responsável pela finalização com a assinatura pré-computada do cliente.

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

## Assinatura PAdES com chave remota

A assinatura PAdES é um objeto interno ao documento PDF assinado que também proteje sua integridade. Este objeto de
assinatura possui uma referência de tempo, portanto para não alterar parâmetros internos ao PDF, que invalidariam a
assinatura em respeito a integridade, é necessário armazenar uma estrutura de dados (*PadesTransferData*) temporariamente
entre as etapas de início e finalização.

Abaixo temos um exemplo de uma assinatura PAdES com chave remota em que há representado dois momentos distintos no servidor,
antes e após a assinatura remota:

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

byte[] signedPdf = signer.GetPdfBytes();
//-----------------------------------------------------------------------
```cs

## Veja também

* [Assinaturas padrão CAdES](cades/index.md)
* [Assinaturas padrão PAdES](pades/index.md)
* [Web PKI](../../web-pki/index.md)
