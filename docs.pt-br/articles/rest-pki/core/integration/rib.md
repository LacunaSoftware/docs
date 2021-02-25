<!-- This article is intentionally excluded from the TOC -->
<!-- There are no plans to translate this article, therefore code snippets are in-file (instead of being stored elsewhere and referenced, to allow reuse) -->

# Requisitos adicionais de integração - RIB

A integração com o **Assinador Web** do **Registro de Imóveis do Brasil - RIB** possui alguns requisitos adicionais não mencionados no restante dessa documentação.

## Metadados obrigatórios

Ao criar [sessões de assinatura](signature-sessions/index.md), é necessário fornecer, no campo `documentMetadata`, o nome e o CNS (Código Nacional de Serventia) do cartório em questão.

O CNS pode ser informado em qualquer uma das formas abaixo:

* `1234` (apenas dígitos)
* `001234` (com zeros à esquerda)
* `00.123-4` (formatação completa)

Em .NET:

```cs
var response = await restPkiService.CreateSignatureSessionAsync(new CreateSignatureSessionRequest() {
	...
}, documentMetadata: new NameValueCollection {
	["cartorio"] = "XXº Oficial de Registro de Imóveis do Município - UF",
	["cns"] = "123456",
});
```

> [!NOTE]
> Instruções para PHP e Java serão documentadas em breve
