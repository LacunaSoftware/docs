# Co-assinatura

O PKI SDK permite que diferentes signatários que assinam um mesmo documento possam ser agrupados em um mesmo pacote de
assinatura. Esta modalidade de assinaturas em paralelo se chama co-assinatura e é prevista pelo padrão CAdES.

O exemplo abaixo demostra uma co-assinatura básica:

```cs
// Assinatura CAdES básica prévea
byte[] cadesSig1 = ...

// Co-assinando a assinatura cadesSig1
PKCertificateWithKey signingCert2 = ...
var signer2 = new CadesSigner();        
signer2.SetSigningCertificate(signingCert2);
signer2.SetDataToSign(toSign);
signer2.SetPolicy(policy); 

// Definindo a assinatura prévea para co-assinatura
signer2.SetSignatureToCoSign(cadesSig1); 

signer2.ComputeSignature();

byte[] cadesCoSig = signer2.GetSignature();
```

> [!NOTE]
> Caso a assinatura cadesSig1 já tenha o documento assinado no encapsulated-content, não é necessária a chamada do método
> @Lacuna.Pki.Cades.CadesSigner.SetDataToSign(System.Byte[]) na co-assinatura.

Caso se tenha assinaturas paralelas de um mesmo documento, sem que se tenha utilizado o método
@Lacuna.Pki.Cades.CadesSigner.SetSignatureToCoSign(System.Byte[]), também é possivel fundir as assinaturas em uma
co-assinatura através do método
@Lacuna.Pki.Cades.CadesSignatureEditor.MergeSignatures(System.Collections.Generic.IEnumerable{Lacuna.Pki.Cades.CadesSignature})
da classe @Lacuna.Pki.Cades.CadesSignatureEditor.

## Veja também

* @Lacuna.Pki.Cades.CadesSigner
* @Lacuna.Pki.Cades.CadesSignatureEditor
