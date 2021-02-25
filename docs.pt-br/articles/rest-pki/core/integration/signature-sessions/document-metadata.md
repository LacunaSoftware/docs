# Metadados de documentos - Sessões de assinatura

Ao criar uma [sessão de assinatura](index.md), é possível especificar uma coleção de metadados a serem associados aos documentos
criados durante a sessão. Metadados são especificados por um *nome* e uma coleção de *valores*.

Em .NET:

[!include[Specifying document metadata in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/document-metadata-dotnet.md)]

> [!NOTE]
> Instruções para PHP e Java serão documentadas em breve

## Regras e limites

* Nomes de metadados podem conter apenas letras, dígitos, hífens e espaços (recomenda-se o uso de identificadores como `some-info`, `SomeInfo` ou `some_info` ao invés de textos legíveis)
* Nomes de metadados podem ter no máximo 50 caracteres
* Cada valor de metadado pode ter no máximo 500 caracteres

> [!NOTE]
> Nas APIs de busca de documentos por metadado o batimento de nomes é ***case insensitive*** (não há diferenciação entre maiúsculas e minúsculas)
