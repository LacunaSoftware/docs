# Assinaturas padrão XML

O PKI SDK suporta os padrões de assinatura XmlDSig e XAdES. A assinatura em XML pode ser realizada sobre um documento
completo, sobre um elemento específico interno ao documento ou sobre um conteúdo externo. Para exemplos básicos, as
seções abaixo demonstram o assinador realizando assinaturas sobre um documento XML completo e sobre um elemento
específico de um XML.

## Assinatura de um documento XML

O código abaixo exemplifica uma assinatura XAdES básica de um documento XML completo.

```cs
// política de assinatura XAdES ICP-Brasil AD-RB
var policy = BrazilXmlPolicySpec.GetAdrBasicaV22(true);

// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new FullXmlSigner();

signer.SetSigningCertificate(cert);    // certificado do signatário com chave privada associada
signer.SetXml(xmlDocument);            // bytes ou objeto XmlDocument do documento XML a ser assinado
signer.SetPolicy(policy);              // Política de assinatura AD-RB
signer.ComputeSignature();             // Cria elemento de assinatura
var signedXml = signer.GetSignedXml(); // Retorna os bytes do documento XML assinado
```

Neste modo de assinatura, por padrão, a transformação do elemento assinado será enveloped e o elemento de assinatura
resultante será incluído como filho do elemento raiz no documento finalizado. Para mais ifnromações sobre a inclusão
do elemento de assinatura e modos de assintura XML, veja o artigo [Modos de inclusão](insertion.md).

## Assinatura de um elemento em um documento XML

O código abaixo exemplifica uma assinatura XAdES básica de um elemento específico pertencente a um documento XML.

> [!NOTE]
> Para assinatura de um elemento do XML é necessário que o elemento tenha um atributo ID único no XML.

```cs
// política de assinatura XAdES ICP-Brasil AD-RB
var policy = BrazilXmlPolicySpec.GetAdrBasicaV22(true);

// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new XmlElementSigner();

signer.SetSigningCertificate(cert);    // certificado do signatário com chave privada associada
signer.SetXml(xmlDocument);            // bytes ou objeto XmlDocument do documento XML que contém o elemento a ser assinado
signer.SetToSignElementId(id);         // define o ID do elemento que será assinado
signer.SetPolicy(policy);
signer.ComputeSignature();             // Cria elemento de assinatura
var signedXml = signer.GetSignedXml(); // Retorna os bytes do documento XML contendo o elemento de assinatura
```

Neste modo de assinatura, por padrão, é criada uma assinatura *detached* em que o elemento de assinatura é incluído
como irmão do elemento assinado. Para mais ifnromações sobre a inclusão do elemento de assinatura e modos de assintura
XML, veja o artigo [Modos de inclusão](insertion.md).

## Assinatura de Nota Fiscal eletrônica

O código abaixo exemplifica uma assinatura de Nota Fiscal eletrônica (NFe) no padrão nacional

```cs
// política de assinatura para NFe
var policy = BrazilXmlPolicySpecs.GetNFePadraoNacional();

// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new XmlElementSigner();

signer.SetSigningCertificate(cert);      // certificado do signatário com chave privada associada
signer.SetXml(xmlNFe);                   // bytes ou objeto XmlDocument da NFe a ser assinada
signer.SetToSignElementId("NFe0000001"); // define o ID da NFe a ser assinado
signer.SetPolicy(policy);
signer.ComputeSignature();               // Cria elemento de assinatura
var signedNFe = signer.GetSignedXml();   // Retorna os bytes da NFe assinada
```

## Veja também

* @Lacuna.Pki.Xml.XmlElementSigner
* @Lacuna.Pki.Xml.FullXmlSigner
