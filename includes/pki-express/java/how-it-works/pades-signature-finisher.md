```java
// Get an instance of the SignatureFinisher class, responsible for completing the signature process.
SignatureFinisher signatureFinisher = new SignatureFinisher(Util.getPkiExpressConfig());

// Set PKI default options (see Util.java)
Util.setPkiDefaults(signatureFinisher);

// Set PDF to be signed. It's the same file we used on "start" step.
signatureFinisher.setFileToSign(fileToSign);

// Set transfer file.
signatureFinisher.setTransferFilePath(transferFile);

// Set the signature value.
signatureFinisher.setSignature(signature);
```