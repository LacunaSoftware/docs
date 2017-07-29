# LTV (Long Term Validation)

LTV é um mecanismo utilizado em assinaturas PAdES para torná-las válidas por um longo período. Funciona como uma espécie
de arquivamento em que as informações como certificados e estados de revogação são armazenadas em uma estrutura do PDF
chamada DSS. Ao final, é recomendado que seja adicionado um timestamp protegendo estas informações e podendo extender a
validade das assinaturas até mesmo após a expiração dos certificados das Autoridades Certificadoras.

O PKI SDK permite adicionar informações LTV tanto no momento da assinatura quanto em um segundo passo utilizando o
carimbador de tempo @Lacuna.Pki.Pades.PadesTimestamper. Note que, como explicado acima, a habilitação do LTV com carimbo
de tempo é o método mais robusto, pois também pode ser utilizado para extender a validade de assinaturas anteriores ou
também de carimbos de tempo anteriores. Abaixo demonstamos os dois métodos citados.

No primeiro exemplo abaixo, habilitamos o LTV no momento da assintura (sem carimbo de tempo):

```cs
// habilitando LTV na política de assinatura
var policy = PadesPolicySpec.GetBasic(TrustArbitrators.Windows);
policy.SignerSpecs.AttributeGeneration.EnableLtv = true;

var signer = new PadesSigner();
signer.SetSigningCertificate(signingCert);
signer.SetPdfToSign(pdfBytes);
signer.SetPolicy(policy);
signer.ComputeSignature();

byte[] signedPdf = signer.GetPadesSignature();  // Retorna os bytes do PDF assinado com LTV habilitado
```

Neste segundo exemplo habilitamos LTV em uma assinatura já existente utilizando o carimbador de PDF
@Lacuna.Pki.Pades.PadesTimestamper:

```cs
// PDF já assinado
byte[] signedPdf = ...

// a política padrão de carimbo já possui LTV habilitado,
// iremos habilitá-lo novamente apenas para demonstração de onde é localizada esta propriedade
var policy = PadesPolicySpec.GetBasic();
policy.StamperSpecs.EnableLtv = true;

// Instanciando carimbador de PDF com LTV
var stamper = new PadesTimestamper();
stamper.SetPdf(signedPdf);
stamper.SetPolicy(policy);
stamper.SetTimestampRequester(tsRequester);  // requester do carimbo de tempo
stamper.Stamp();

// Retornando PDF carimbado com LTV habilitado
byte[] signedPdfLtv = stamper.GetStampedSignature();
```

<!--A imagem abaixo demonstra o resultado da assinatura com LTV exibido na aba de assinaturas do Adobe Reader.-->

## Veja também

* @Lacuna.Pki.Pades.PadesTimestamper
* @Lacuna.Pki.Pades.PadesPolicySpec
