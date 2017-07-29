# Mapeadores de política (Policy mappers)

Os mapeadores de políticas são utilizados para selecionar um tipo de política baseado em características do signatário.
O PKI SDK possui duas implementações de mapeadores, baseado em certificado e em SignerInfo. Caso sua aplicação
utilize diferentes políticas customizadas e seja necessário um mapeador para diferentes signatários, basta implementar
as interfaces @Lacuna.Pki.Cades.ICadesPolicyMapper ou @Lacuna.Pki.Cades.ICadesPolicyMapperBySignerInfo.

## Mapper por certificado

O mapper baseado em certificado pode ser usado tanto no momento da assinatura quanto na validação. É indicado em
cenários que políticas de assinaturas distintas, de versões ou padrões diferentes podem ser selecionadas através de
campos do certificado do signatário como emissor, política de certificação, entre outros.

O exemplo abaixo demonstra o uso de uma implementação da interface @Lacuna.Pki.Cades.ICadesPolicyMapper que seleciona,
baseado no certificado do signatário, uma versão da política de assinatura ICP-Brasil AD-RC entre as versões 1.0, 1.1,
2.0 e 2.1 configuradas na classe @Lacuna.Pki.Cades.BrazilCadesPolicySpec.

```cs
// Mapper ICP-Brasil com versões da política AD-RC
var mapper = BrazilCadesPolicyMappers.GetAdrCompleta();

var signer = new CadesSigner();        
signer.SetSigningCertificate(signingCert);
signer.SetDataToSign(toSign);  
signer.SetPolicy(mapper);                  // Define o mapper como política
signer.ComputeSignature();
```

Para mais informações sobre política ICP-Brasil no SDK veja o artigo [Políticas ICP-Brasil](pki-brazil.md).

## Mapper por SignerInfo

O mapper baseado em SignerInfo é utilizado na validação de assinaturas que têm política explícita, a política faz
parte dos atributos assinados, ou que possuem alguma outra característica específica nas informações do signatário
que seja possível recuperar a política de assinatura utilizada.

No exemplo abaixo demonstramos a validação de uma assinatura ICP-Brasil, que possui política explícita, utilizando
o mapper ICP-Brasil por SignerInfo. O mapper por signerInfo irá selecionar automaticamente a política de assinatura
com suas regras de validação através de informações para cada signatário dentro da assinatura.

```cs
byte[] cadesSigContent = ...

// Carregando assinatura
var cadesSig = CadesSignature.Open(cadesSigContent);

// Validação com Mapper por SignerInfo
var vrs = cadesSig.ValidateAllSignatures(BrazilCadesPolicyMappers.GetCadesSignerInfoPolicyMapper());
```

## Veja também

* [Políticas ICP-Brasil](pki-brazil.md)
* @Lacuna.Pki.Cades.ICadesPolicyMapper
* @Lacuna.Pki.Cades.ICadesPolicyMapperBySignerInfo
* @Lacuna.Pki.Cades.BrazilCadesPolicyMappers
* @Lacuna.Pki.Cades.BrazilCadesPolicySpec
