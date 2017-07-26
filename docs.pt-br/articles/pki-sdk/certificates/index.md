# Certificados

A classe @Lacuna.Pki.PKCertificate provê visualização e manipulação de informações de certificados X509. A classe
suporta o carregamento de certificados com encoding BER, DER, Base64 ou PEM.

```cs
// Para certificados com encoded bytes em BER, DER, Base64 ou PEM
PKCertificate PKCertificate.Decode(byte[] certContent);

// Para certificados com encoding Base64 ou PEM
PKCertificate PKCertificate.Decode(string certContent);
```

Para mais exemplos de como carregar um certificado e iniciar o uso em nosso SDK, verifique o tópico seguinte:
[Carregando certificados](decoding.md)

## Veja também

* @Lacuna.Pki.PKCertificate
