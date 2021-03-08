<!-- This article is intentionally excluded from the TOC -->
<!-- There are no plans to translate this article, therefore code snippets are in-file (instead of being stored elsewhere and referenced, to allow reuse) -->

# Requisitos adicionais de integração - RIB

A integração com o **Assinador Web** do **Registro de Imóveis do Brasil - RIB** possui alguns requisitos adicionais não mencionados no restante dessa documentação.

## Metadados obrigatórios

Ao criar [sessões de assinatura](signature-sessions/index.md), é necessário fornecer os seguintes [metadados](signature-sessions/document-metadata.md) obrigatórios:

* `cartorio`: Nome do cartório emitente (esse valor é exibido na página de validação do documento)
* `cns`: CNS (Código Nacional de Serventia) do cartório emitente

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

Em PHP:

```PHP
$request = new CreateSignatureSessionRequest();
...
$request->documentMetadata = [
	"cartorio" => "XXº Oficial de Registro de Imóveis do Município - UF",
	"cns" => "123456"
];
```
Em JAVA:

```java
HashMap<String, List<String>> mapMetaData = new HashMap<String, List<String>>();
List<String> firstElement = new ArrayList<>();
firstElement.add("XXº Oficial de Registro de Imóveis do Município - UF");		
mapMetaData.put("cartorio", firstElement);

List<String> secondElement = new ArrayList<>();
secondElement.add("123456");
mapMetaData.put("cns", secondElement);

CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
request.setDocumentMetadata(mapMetaData);
	
CreateSignatureSessionResponse sessionResponse = service.createSignatureSession(request);
```

Além dos metadados mencionados acima, todo documento no Assinador Web tem também o metadado `validade`, no formato `aaaa-mm-dd`, por exemplo *2021-04-01*
(1º de abril de 2021). Esse metadado é automaticamente atribuído aos documentos contando 30 dias a partir da data de assinatura e não pode ser especificado
na criação da sessão.
