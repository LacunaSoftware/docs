```java
// Get an instance of the PadesSignatureStarter class, responsible for receiving the signature elements
// and start the signature process.
PadesSignatureStarter signatureStarter = new PadesSignatureStarter(Util.getPkiExpressConfig());

// Set PKI default options (see Util.java)
Util.setPkiDefaults(signatureStarter);

// Set PDF to be signed.
signatureStarter.setPdfToSign(fileToSign);

// Set Base64-encoded certificate's content to signature starter.
signatureStarter.setCertificateBase64(certContent);
```