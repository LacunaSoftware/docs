# Políticas ICP-Brasil

A Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil) é uma cadeia hierárquica e de confiança que regula a emissão
de certificados digitais no Brasil. Também estabelece requisitos e normas para políticas de assianturas digitais
descritas no documento
[DOC-ICP-15.03](http://www.iti.gov.br/images/twiki/URL/pub/Certificacao/DocIcp/docs13082012/DOC-ICP-15.03_-_Versao_6.1_2.pdf)
que devem ser utilizadas de maneira explícita nas assinaturas.

O PKI SDK possui objetos de política de assinatura já configurados nas normais ICP-Brasil que podem ser facilmente
acessados através das classes:

* @Lacuna.Pki.Cades.BrazilCadesPolicySpec (Para assinaturas CAdES)
* Pades. (Em desenvolvimento e aguardando decisão do Comitê Gestor da ICP-Brasil)

```cs
var signer = new CadesSigner();

// Define política de assinatura AD-RT v2.1
signer.SetPolicy(BrazilCadesPolicySpec.GetAdrTempoV21())
```

Ou também através dos mapeadores de políticas @Lacuna.Pki.Cades.BrazilCadesPolicyMappers.

```cs
var signer = new CadesSigner();
signer.SetPolicy(BrazilCadesPolicyMappers.GetAdrTempo())
```

## Veja também

* [Mapeadores de política (Policy mappers)](mappers.md)
* @Lacuna.Pki.Cades.BrazilCadesPolicySpec
* @Lacuna.Pki.Cades.BrazilCadesPolicyMappers
