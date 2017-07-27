# Assinaturas

O PKI SDK permite a customização e criação de assinaturas de PDF no padrão PAdES
([ETSI TS 102 778](http://www.etsi.org/deliver/etsi_TS/102700_102799/10277801/01.01.01_60/ts_10277801v010101p.pdf)),
assinaturas PKCS#7/CMS no padrão CAdES
([ETSI TS 101 733](http://www.etsi.org/deliver/etsi_ts/101700_101799/101733/02.02.01_60/ts_101733v020201p.pdf))
e assinaturas [XmlDSig](https://www.w3.org/TR/2002/REC-xmldsig-core-20020212/) simples e também conforme padrão XAdES
([ETSI TS 101 903](http://www.etsi.org/deliver/etsi_ts/101900_101999/101903/01.04.01_60/ts_101903v010401p.pdf)).

No exemplo abaixo faremos uma assinatura CAdES básica com o objetivo de apresentar e exercitar os conceitos e
propriedades desse assinador:

```cs
// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new CadesSigner();

// Setamos os principais parâmetros
signer.SetSigningCertificate(signingCert);  // certificado do signatário com chave privada associada
signer.SetDataToSign(toSign);               // bytes ou stream do documento a ser assinado
signer.SetPolicy(policy);                   // política de assinatura
signer.ComputeSignature();                  // cria atributos e colhe assinatura do signatário

var cadesSig = signer.GetSignature();       // monta o pacote de assinatura e retorna os bytes com encoding DER
```

No exemplo abaixo faremos uma assinatura PAdES básica com o objetivo de apresentar e exercitar os conceitos e
propriedades desse assinador:

```cs
// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new PadesSigner();

// Setamos os principais parâmetros
signer.SetSigningCertificate(signingCert);  // certificado do signatário com chave privada associada
signer.SetPdfToSign(pdfBytes);              // bytes do PDF a ser assinado
signer.SetPolicy(policy);                   // política de assinatura
signer.ComputeSignature();                  // cria  colhe assinatura do signatário

var signedPdf = signer.GetPdfBytes();       // retorna os bytes do PDF assinado
```

## Veja também

* [Assinaturas padrão CAdES](cades/index.md)
* [Assinaturas padrão PAdES](pades/index.md)
* [Assinaturas padrão XML](xml/index.md)
* [Assinatura com chave remota (assinatura no browser)](web-remote.md)
* [Políticas de assinatura](policies/index.md)
