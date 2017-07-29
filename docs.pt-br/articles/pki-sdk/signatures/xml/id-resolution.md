# Resolução de IDs

Para assinatura de um elemento do XML, é necessário que este elemento possua um atributo ID único no documento. Caso o
XML defina um nome diferente para o atributo ID, será necessário a definição de uma resolução de ID.

A resolução de ID pode ser definida tanto globalmente, caso a mudança no atributo ID seja aplicada no XML inteiro,
quanto definida localmente, caso a mudança no atributo ID seja aplicado apenas em um elemento.

Para os exemplos abaixo, iremos assinar o seguinte XML, que possui o atributo Id alterado para `licenseId`.

```xml
<license xmlns="http://www.lacunasoftware.com/">
    <licenseInfo licenseId=":9e2e5bbc-b4a0-41dc-a342-98f1554f32a3">
        <domain>www.contoso.com</domain>
        <domain>www.contoso.com</domain>
        <expiration>2016-03-23</expiration>
    </licenseInfo>
</license>
```

## Definindo uma tabela de resolução de ID's global

Caso a alteração seja válida globalmente, o código para assinatura deve ser:

```cs
// Create ID resolution table for whole XML
var idResolutionTable = new XmlIdResolutionTable();
idResolutionTable.AddGlobalIdAttribute("licenseId");

var signer = new XmlElementSigner();
signer.SetXml(xml);
signer.SetSigningCertificate(cert);
signer.SetPolicy(policy);
signer.SetToSignElementId(":9e2e5bbc-b4a0-41dc-a342-98f1554f32a3");
signer.SetIdResolutionTable(idResolutionTable);                      // set ID resolution table
signer.ComputeSignature();
```

> [!NOTE]
> Caso o atributo possua um namespace específico, é possível passá-lo através do mesmo método
> @Lacuna.Pki.Xml.XmlIdResolutionTable.AddGlobalIdAttribute(System.String,System.String)

## Definindo uma tabela de resolução de ID's local

Para este exemplo, iremos definir que a alteração do ID deve ser aplicada apenas no elemento `<licenseInfo>`.

```cs
// Create ID resolution table for element name and namespace
var idResolutionTable = new XmlIdResolutionTable();
idResolutionTable.SetElementIdAttribute("licenseInfo", "http://www.lacunasoftware.com/", "licenseId");

var signer = new XmlElementSigner();
signer.SetXml(xml);
signer.SetSigningCertificate(cert);
signer.SetPolicy(policy);
signer.SetToSignElementId(":9e2e5bbc-b4a0-41dc-a342-98f1554f32a3");
signer.SetIdResolutionTable(idResolutionTable);                      // set ID resolution table
signer.ComputeSignature();
```

> [!NOTE]
> Caso o atributo possua um namespace específico, é possível passá-lo através do mesmo método
> @Lacuna.Pki.Xml.XmlIdResolutionTable.SetElementIdAttribute(System.String,System.String,System.String,System.String)

## Veja também

* @Lacuna.Pki.Xml.XmlIdResolutionTable
* @Lacuna.Pki.Xml.XmlElementSigner
