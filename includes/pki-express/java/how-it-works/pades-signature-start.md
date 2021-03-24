```java
// Start the signature process. Receive as response a SignatureStartResult instance containing the
// following fields:
// - toSignHash: The hash to be signed.
// - digestAlgorithm: The digest algorithm that will inform the Web PKI component to compute the signature.
// - transferFile: A temporary file to be passed to "complete" step.
SignatureStartResult result = signatureStarter.start();
```