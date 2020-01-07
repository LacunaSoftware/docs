# Certificates

The class @Lacuna.Pki.PKCertificate provides viewing and manipulation of X509 certificate information. The class supports the loading of certificates with BER, DER, Base64 or PEM encoding.

```cs
// Para certificados com encoded bytes em BER, DER, Base64 ou PEM
PKCertificate PKCertificate.Decode(byte[] certContent);

// Para certificados com encoding Base64 ou PEM
PKCertificate PKCertificate.Decode(string certContent);
```

For more examples of how to upload a certificate and start using it in our SDK, check out the following topic:
[Decoding certificates](decoding.md)

## See too

* @Lacuna.Pki.PKCertificate