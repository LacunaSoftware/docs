# Signatures

The PKI SDK allows customization and creation of PDF signatures in the PAdES 
standard ([ETSI TS 102 778](http://www.etsi.org/deliver/etsi_TS/102700_102799/10277801/01.01.01_60/ts_10277801v010101p.pdf)), signatures PKCS#7/CMS in the standard CADES
([ETSI TS 101 733](http://www.etsi.org/deliver/etsi_ts/101700_101799/101733/02.02.01_60/ts_101733v020201p.pdf)) and simple signatures [XmlDSig](https://www.w3.org/TR/2002/REC-xmldsig-core-20020212/) and also as standard 
XADES ([ETSI TS 101 903](http://www.etsi.org/deliver/etsi_ts/101900_101999/101903/01.04.01_60/ts_101903v010401p.pdf)).

In the example below we will make a basic CAdES siganture in order to present and exercise the concepts and
properties of this subscriber:

```cs
// We instantiate the signer object that is responsible for creating the signature
var signer = new CadesSigner();

// We set the main parameters
signer.SetSigningCertificate(signingCert);  // signer certificate with associated private key
signer.SetDataToSign(toSign);               // bytes or stream of the document to be signed
signer.SetPolicy(policy);                   // sigantures policy
signer.ComputeSignature();                  // creates attributes and reaps signature from signatory

var cadesSig = signer.GetSignature();       // assembles the signature package and returns the bytes with DER encoding
```

In the example below we will make a basic PAdES signature in order to present and exercise the concepts and
properties of this subscriber:

```cs
// We instantiate the signer object that is responsible for creating the signature
var signer = new PadesSigner();

// We set the main parameters
signer.SetSigningCertificate(signingCert);  // signer certificate with associated private key
signer.SetPdfToSign(pdfBytes);              // PDF bytes to be signed
signer.SetPolicy(policy);                   // signatures policy
signer.ComputeSignature();                  // creates reaps signature of signatory

var signedPdf = signer.GetPdfBytes();       // returns the bytes of the signed PDF
```

## See too

* [CAdES Sigantures](cades/index.md)
* [PAdES Sigantures](pades/index.md)
* [XML Signatures](xml/index.md)
* [Remote key signature (browser signature)](web-remote.md)
* [Signature policies](policies/index.md)