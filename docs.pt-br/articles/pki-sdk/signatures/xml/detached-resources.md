# Assinatura de conteúdo externo

O padrão de assinatura XML permite a criação de assinaturas cujo conteúdo a ser assinado é externo ao documento XML ou
assinatura de conteúdos quaisquer.

O PKI SDK oferece duas maneiras de realizar esta assinatura de conteúdo externo. O assinador
@Lacuna.Pki.Xml.DetachedResourceXmlSigner destina-se a assinaturas de conteúdos locais à aplicação. O assinador
@Lacuna.Pki.Xml.OnlineResourceXmlSigner destina-se a assinatura de conteúdos online, externos à aplicação.

Nesta modalidade de assinatura, há a possibilidade de não passar nenhum documento XML para o assinador. Assim, o
resultado retornado `signedXml` será um novo documento XML contento o nó de assinatura como nó raiz.

Caso seja passado um documento XML para o assinador (`signer.SetXml(xmlDocument)`), o nó de assinatura será incluído
no XML passado, seguindo o padrão de inclusão descrito no artigo [Modos de inclusão](insertion.md).

Veja abaixo os exemplos de cada assinador:

## Conteúdo externo local

```cs
var signer = new DetachedResourceXmlSigner();
signer.SetToSignDetachedResource(resource, "uri.to.resource");
signer.SetPolicy(policy);
signer.SetSigningCertificate(certWithKey);
signer.ComputeSignature();
var signedXml = signer.GetSignedXml();
```

## Conteúdo externo online

```cs
var signer = new OnlineResourceXmlSigner();
signer.SetToSignResourceUri(resourceUri);
signer.SetPolicy(policy);
signer.SetSigningCertificate(certWithKey);
signer.ComputeSignature();
var signedXml = signer.GetSignedXml();
```
