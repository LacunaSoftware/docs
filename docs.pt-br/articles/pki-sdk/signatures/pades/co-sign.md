# Assinaturas em série

A assinatura em série é o mecanismo para multi-assinaturas no padrão PAdES. Após uma primeira assinatura do documento PDF,
o fluxo da assinatura em série deve passar para o próximo signatário, que assina não somente o documento, mas o documento
contendo também a assinatura anterior e assim por diante.

Para realizar uma assinatura PAdES em série no SDK não há nenhuma mudança, basta passar um PDF já assinado para o objeto
assinador do próximo signatário. O exemplo a seguir demonstra uma assinatura em série com um PDF já assinado:

```cs
// Documento PDF já assinado
byte[] signedPdf1 = ...

// Certificado do signatário 2
PKCertificateWithKey signingCert2 = ...

var signer2 = new PadesSigner();
signer2.SetPdfToSign(signedPdf1);               // PDF assinado 1
signer2.SetSigningCertificate(signingCert2);
signer2.SetPolicy(policy);
signer2.ComputeSignature();
byte[] signedPdf2 = signer2.GetPadesSignature());     // Retornando PDF assinado contendo 2 assinaturas
```

## Veja também

* @Lacuna.Pki.Pades.PadesSigner
