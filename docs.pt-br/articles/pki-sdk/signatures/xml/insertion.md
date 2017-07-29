# Modos de inclusão

O processo de assinatura de um documento XML produz um elemento `<Signature>` contendo as informações daquela
assinatura. Este elemento é incluído no XML seguindo o padrão descrito na tabela abaixo. Também é possível
determinar um local de inclusão customizado, como exemplifica a seção
[Definindo local para inclusão do elemento de assinatura](#custom-location).

## Padrão de inclusão do nó de assinatura

Assinador                                 | Padrão                     | Padrão sem um documento XML passado
----------------------------------------- | -------------------------- | -----------------------------------
@Lacuna.Pki.Xml.FullXmlSigner             | Filho do elemento raiz     | (Não se aplica)
@Lacuna.Pki.Xml.XmlElementSigner          | Irmão do elemento assinado | (Não se aplica)
@Lacuna.Pki.Xml.OnlineResourceXmlSigner   | Filho do elemento raiz     | Elemento raiz
@Lacuna.Pki.Xml.DetachedResourceXmlSigner | Filho do elemento raiz     | Elemento raiz

> [!NOTE]
> Nos assinadores @Lacuna.Pki.Xml.FullXmlSigner e @Lacuna.Pki.Xml.XmlElementSigner é obrigatório passar um documento
XML, portanto não se aplica a coluna *Padrão sem um documento XML passado*

Caso se queira definir um local customizado para a inclusão do elemento de assinatura, verifique a seção seguinte.

## Definindo local para inclusão do elemento de assinatura

No PKI SDK, é possível customizar o local de inclusão do elemento de assinatura através do método
@Lacuna.Pki.Xml.XmlSigner.SetSignatureElementLocation(System.String,Lacuna.Pki.Xml.NamespaceManager,Lacuna.Pki.Xml.XmlInsertionOptions)
nos assinadores.

Como exemplo, iremos fazer uma assinatura do documetno XML inteiro abaixo:

```xml
<invoice xmlns="http://www.lacunasoftware.com/sample">
  <issuer>
    <name>Lacuna Software Ltda EPP</name>
    <fiscalCode>20658903000171</fiscalCode>
  </issuer>
  <customer>
    <name>Banco do Brasil SA</name>
    <fiscalCode>00000000000191</fiscalCode>
  </customer>
  <items>
    <item>
      <productCode>10201</productCode>
      <description>Philips screws</description>
      <quantity>100</quantity>
    </item>
  </items>
  <signaturePlaceholder>
  <!--  We want the signature to be inserted here  -->
  </signaturePlaceholder>
</invoice>
```

Queremos, então, assinar o documento acima e incluir o elemento de assinatura dentro do elemento `<signaturePlaceholder>`.
O código abaixo demonstra como fazê-lo.

```cs
// Create a namespace manager with the necessary namespaces to 
// get to the target element for the signature insertion
var nsm = new NamespaceManager();
nsm.AddNamespace("ls", "http://www.lacunasoftware.com/sample");

string xpath = "//ls:signaturePlaceholder";  // XPath to the target element

var signer = new FullXmlSigner();
signer.SetXml(lacunaInvoiceXmlBytes);    // Set the XML document bytes
signer.SetPolicy(policy);                // Set the signature policy
signer.SetSigningCertificate(cert);      // Set the certificate with key

// Set the signature element location
signer.SetSignatureElementLocation(xpath, nsm, XmlInsertionOptions.AppendChild);
signer.ComputeSignature();

var signedXml = signer.GetSignedXml();   // Return signed XML
```

O resultado do XML assinado terá o elemento de assinatura inserido como filho do elemento `<signaturePlaceholder>`.

```xml
<invoice xmlns="http://www.lacunasoftware.com/sample">            
  ...
  <signaturePlaceholder>
  <!--  We want the signature to be inserted here  -->
    <Signature xmlns="http://www.w3.org/2000/09/xmldsig#" Id="xmldsig-fce02462-f2bd-4b7f-8def-f9c23b6672a2">
      ...
    </Signature>
  </signaturePlaceholder>
</invoice>
```

> [!NOTE]
> Em relação ao parâmetro `string xpath` do métedo
> @Lacuna.Pki.Xml.XmlSigner.SetSignatureElementLocation(System.String,Lacuna.Pki.Xml.NamespaceManager,Lacuna.Pki.Xml.XmlInsertionOptions)
> no assinador @Lacuna.Pki.Xml.XmlElementSigner, o xpath é executado a partir do elemento escolhido para assinatura,
enquanto nos outros assinadores é executado a partir do elemento raiz do XML.
