# Certificados de Atributo

Um certificado de atributo é uma estrutura similar a um certificado de chave pública, com a diferença que o certificado
de atributo não contém chave. Um certificado de atributo pode conter atributos que especificam participação em grupos,
papéis, autorizações de segurança ou outras informações de autorização associadas ao titular (*holder*) do certificado.

O PKI SDK é capaz de decodificar e validar certificados de atributo através da classe @Lacuna.Pki.AttributeCertificate,
bem como emitir certificados de atributo, com a classe @Lacuna.Pki.AttributeCertificateGenerator.

## Hierarquia de classes

Como um certificado de atributo é similar a um certificado de chave pública, as classes que representam tais estruturas
no SDK estão relacionadas, possuindo um ancestral comum:

![Certificate classes](../../../../images/pki-sdk/certificate-classes.png)

> [!NOTE]
> O diagrama acima está incompleto, mostrando apenas algumas das propriedades e métodos de cada classe

Observe que algumas propriedades presentes na classe @Lacuna.Pki.PKCertificate são, na verdade, da classe
@Lacuna.Pki.Certificate, ancestral comum com a classe @Lacuna.Pki.AttributeCertificate. Portanto, muitas das operações
que são possíveis com certificados de chave pública funcionam da mesma forma para certificados de atributo,
especialmente a propriedade @Lacuna.Pki.Certificate.Issuer e o método
@Lacuna.Pki.Certificate.Validate(Lacuna.Pki.ITrustArbitrator).

As informações do titular, no entando, não ficam na classe ancestral, mas sim nas classes filhas. Isso porque, no caso
de certificados de chave pública, o titular (*subject*) é um @Lacuna.Pki.Name, enquanto que em certificados de atributo
o titular (*holder*) pode ser um @Lacuna.Pki.GeneralNames ou mesmo um certificado de chave pública. Esses dois valores
possíveis são acessíveis pelas propriedades @Lacuna.Pki.AttributeCertificate.HolderName e
@Lacuna.Pki.AttributeCertificate.HolderPKCertificate. A propriedade @Lacuna.Pki.Certificate.SubjectDisplayName é um
mero auxílio visual para tratar certificados de chave pública e de atributo como uma entidade comum, mas esse é
justamente um aspecto no qual eles diferem.

## Decodificando e validando certificados de atributo

Por causa da hierarquia comum com a classe @Lacuna.Pki.PKCertificate, as operações de decodificação e validação de
certificados de atributo são muito similares às mesmas operações com certificados de chave pública:

```cs
byte[] acContent = ...;
AttributeCertificate ac = AttributeCertificate.Decode(acContent);
ValidationResults vr = ac.Validate(TrustArbitrators.Windows);
if (!vr.IsValid) {
	// ...
}
```

## Decodificando atributos

Uma dificuldade adicional no tratamento de certificados de atributo é decodificar os atributos contidos no certificado,
cuja codificação muitas vezes é proprietária. A classe @Lacuna.Pki.Asn1.Asn1Util oferece métodos para codificar e
decodificar objetos ASN.1, que é a codificação geralmente utilizada para os atributos.

Para utilizar os métodos de codificação e decodificação, é necessário fazer classes que representem as estruturas que
se deseja codificar e decodificar e denotar com atributos a sintaxe ASN.1 das estruturas, como abaixo:

```cs
// MembershipIdAttribute ::= SEQUENCE {
//     memberId INTEGER,
//     memberNickname UTF8String
// }

[Asn1Sequence]
public class MembershipIdAttribute {

    [Asn1SequenceElement(0, Asn1PrimitiveTypes.Integer)]
    public int MemberId { get; set; }

    [Asn1SequenceElement(1, Asn1PrimitiveTypes.UTF8String)]
    public string MemberNickname { get; set; }
}

public class Program {

    public static void Main(string[] args) {

        MembershipIdAttribute memberAttribute = new MembershipIdAttribute() {
            MemberId = 12345,
            MemberNickname = "Mr. Bison"
        };

        // Encode in DER
        byte[] encodedAttribute = Asn1Util.DerEncode(memberAttribute);

        // Decode from DER/BER
        MembershipIdAttribute decodedAttribute = Asn1Util.DecodeAs<MembershipIdAttribute>(encodedAttribute);

    }
}
```

Uma vez tendo as classes representando os atributos e decoradas com as indicações de sintaxe ASN.1, é possível obter os
atributos da seguinte forma:

```cs
byte[] acContent = ...;

// Decodificamos o certificado
AttributeCertificate ac = AttributeCertificate.Decode(acContent);

// Buscamos um atributo pelo seu OID
X509Attribute attributeObj = ac.Attributes["1.2.3.4"];

// Podem haver múltiplos valores para um mesmo OID, digamos que nesse caso estamos interessados apenas no primeiro valor
byte[] encodedAttribute = attributeObj.EncodedValues[0];

// Decodificamos o atributo
MembershipIdAttribute memberAttribute = Asn1Util.DecodeAs<MembershipIdAttribute>(encodedAttribute);
```

O método @Lacuna.Pki.X509Attributes.GetAndDecodeValueAs``1(System.String,System.Boolean) permite buscar um atributo e
decodificar seu primeiro valor diretamente:

```cs
byte[] acContent = ...;

// Decodificamos o certificado
AttributeCertificate ac = AttributeCertificate.Decode(acContent);

// Buscamos e decodificamos o primeiro valor de um atributo pelo seu OID
MembershipIdAttribute memberAttribute = ac.Attributes.GetAndDecodeValueAs<MembershipIdAttribute>("1.2.3.4");
```

## Veja também

* @Lacuna.Pki.Certificate
* @Lacuna.Pki.AttributeCertificate
* @Lacuna.Pki.AttributeCertificateGenerator
* @Lacuna.Pki.Asn1.Asn1Util
