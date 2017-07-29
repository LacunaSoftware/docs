# Assinaturas padrão PAdES

O padrão PAdES especifica regras para assinaturas de arquivos PDF. No SDK a classe @Lacuna.Pki.Pades.PadesSigner é o
objeto central responsável pela criação de assinaturas em PDF seguindo a especificação ETSI 102778-x.

## Exemplo de assinatura básica

O código abaixo exemplifica uma assinatura PAdES básica com o objetivo de apresentar e exercitar os conceitos e
propriedades desse assinador.

```cs
// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new PadesSigner();

signer.SetSigningCertificate(signingCert);    // certificado do signatário com chave privada associada
signer.SetPdfToSign(pdfBytes);                // bytes ou stream do documento PDF a ser assinado
signer.SetPolicy(PadesPolicySpec.GetBasic()); // política básica com raízes do Windows como TrustArbitrators
signer.ComputeSignature();                    // cria atributos e colhe assinatura do signatário

byte[] signedPdf = signer.GetPadesSignature();      // Retorna os bytes do PDF assinado
``` 
