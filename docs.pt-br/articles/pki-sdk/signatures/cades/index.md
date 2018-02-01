# Assinaturas padrão CAdES

O padrão CAdES permite que se faça uma assinatura de qualquer arquivo binário. A classe @Lacuna.Pki.Cades.CadesSigner é
responsável pela criação, customização e montagem do pacote de assinatura CMS.

## Exemplo de assinatura básica

O código abaixo exemplifica uma assinatura CAdES básica com o objetivo de apresentar e exercitar os conceitos e
propriedades desse assinador.

```cs
// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new CadesSigner();

signer.SetSigningCertificate(signingCert);       // certificado do signatário com chave privada associada
signer.SetDataToSign(toSign);                    // bytes ou stream do documento a ser assinado
signer.SetPolicy(CadesPolicySpec.GetCadesBes()); // política de assinatura CAdES-BES com raízes do Windows como TrustArbitrator
signer.ComputeSignature();                       // cria atributos e colhe assinatura do signatário

var cadesSig = signer.GetSignature();            // monta o pacote de assinatura e retorna os bytes com encoding BER
```

## Exemplo de assinatura avançada

Abaixo exemplificamos uma assinatura CAdES com política de assinatura ICP-Brasil AD-RT (com carimbo de tempo) e em seguida
detalhamos cada método Set utilizado no assinador.

```cs
PKCertificateWithKey signingCert = ...
byte[] toSign = ...

// Política de assinatura ICP-Brasil AD-RT
var policy = BrazilCadesPolicySpec.GetAdrTempoV21();

// Criando requester de carimbo de tempo através da uri da carimbadora tsUri
var tsRequester = new TimestampRequester(tsUri);

// Instanciamos o objeto signer que é responsável por criar a assinatura
var signer = new CadesSigner();

signer.SetSigningCertificate(signingCert);  // certificado do signatário com chave privada associada
signer.SetDataToSign(toSign);               // bytes ou stream dos dados a serem assinados
signer.SetPolicy(policy);                   // política de assinatura
signer.SetTimestampRequester(tsRequester);  // requester do carimbo de tempo
signer.ComputeSignature();                  // cria atributos e colhe assinatura do signatário

var cadesSig = signer.GetSignature();       // monta o pacote de assinatura e retorna os bytes com encoding BER
```

* @Lacuna.Pki.Cades.CadesSigner.SetSigningCertificate(Lacuna.Pki.PKCertificateWithKey) -
  Usado para definir o certificado do signatário na assinatura. No exemplo é utilizado um certificado com chave privada
  associada. Para mais informações de como carregar um certificado com chave privada associada veja o artigo
  [Certificados com chave privada associada](../../certificates/certs-with-key.md).

* @Lacuna.Pki.Cades.CadesSigner.SetDataToSign(System.Byte[]) -
  Usado para definir os dados a serem assinados. O padrão CAdES permite que seja assinado qualquer tipo binário de arquivo
  ou dados.

* @Lacuna.Pki.Cades.CadesSigner.SetPolicy(Lacuna.Pki.Cades.CadesPolicySpec) -
  Define a política de assinatura. O SDK possui políticas já configuradas nos padrões de algumas PKIs, como a ICP-Brasil,
  e também permite que você crie ou customize uma política própria. No exemplo foi passada uma política já configurada no
  padrão ICP-Brasil AD-RT. Para mais informações sobre poíticas de assinatura veja o artigo 
  [Políticas de assinatura](../policies/index.md).

* @Lacuna.Pki.Cades.CadesSigner.SetTimestampRequester(Lacuna.Pki.ITimestampRequester) -
  Define um requester para solicitar carimbos de tempo a uma carimbadora. A política de assinatura utilizada no exemplo
  (ICP-Brasil AD-RT) requer o uso de carimbo de assinatura, portanto é necessário passar um requester de carimbo de tempo
  para o assinador.

## Assinatura remota

O assinador @Lacuna.Pki.Cades.CadesSigner também permite a criação de CAdES em que a assinatura é realizada remotamente,
por exemplo no browser do cliente. Para isso, o método a ser utilizado na definição do signatário não tem chave privada
associada: @Lacuna.Pki.Cades.CadesSigner.SetSigningCertificate(Lacuna.Pki.PKCertificate). Também serão utilizado os métodos
de gerar os dados a serem assinados pelo cliente
(<xref:Lacuna.Pki.Cades.CadesSigner.GenerateToSignBytes(Lacuna.Pki.SignatureAlgorithm@)>)
e o método de incluir os dados assinados no CAdES
(<xref:Lacuna.Pki.Cades.CadesSigner.SetPrecomputedSignature(System.Byte[])>).

Para mais informações sobre assinatura remota veja o artigo
[Assinatura com chave remota (assinatura no browser)](../web-remote.md).

## Validação de Assinaturas

Com o PKI SDK é possível validar o pacote inteiro de assinaturas de acordo com uma única política:

```cs
CadesSignature signature = ...

Dictionary<CadesSignerInfo,ValidationResults> validationResults = signature.ValidateAllSignatures(CadesPoliciesForValidation.GetCadesBasic());

foreach (var item in validationResults) {
	Console.WriteLine("Passed checks:");
	item.Value.PassedChecks.ForEach(vi => Console.WriteLine(vi.Detail)); // imprime todas as validações bem-sucedidas

	if (item.Value.HasErrors) { // caso tenha erros
		Console.WriteLine("Errors:");
		item.Value.Errors.ForEach(e => Console.WriteLine(e.Message)); //imprime o motivo pelo qual não passaram
	}
}
```

```cs

byte[] cadesSig = ...
CadesSignature cadesSig = CadesSignature.Open(cadesSig);

CadesSignature signature = CadesSignature.Open(cadesSig);
foreach (var signerInfo in signature.Signers) {
  ValidationResults result = signature.ValidateSignature(signerInfo, CadesPoliciesForValidation.GetCadesBasic());
  if (result.HasErrors) {
    result.Errors.ForEach(e => Console.WriteLine($"{e.Message} - {e.Detail}"));
  }
}
			
```


## Veja também

* @Lacuna.Pki.Cades.CadesSigner
* @Lacuna.Pki.PKCertificateWithKey
* @Lacuna.Pki.PKCertificate
* [Políticas de assinatura](../policies/index.md)
* [Assinatura com chave remota (assinatura no browser)](../web-remote.md)
