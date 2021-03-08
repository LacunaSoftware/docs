# Document metadata - Sessões de assinatura

When creating a [signature session](index.md), you may specify a set of metadata to be associated to each document created during
the session. Metadata are specified by a *name* and have one or more *values*.

In .NET:

[!include[Specifying document metadata in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/document-metadata-dotnet.md)]

In PHP:

[!include[Specifying document metadata in PHP](../../../../../../includes/rest-pki/core/signature-sessions/document-metadata-php.md)]

In JAVA:

[!include[Specifying document metadata in Java](../../../../../../includes/rest-pki/core/signature-sessions/document-metadata-java.md)]

## Bounds and limits

* Metadata names can only contain letters, digits, hyphens (`-`), underscores (`_`) and spaces (we recommend using identifiers as names such
  as `some-info`, `SomeInfo` or `some_info`, instead of human-readable labels)
* Metadata names may have up to 50 characters
* Each metadata value may have up to 500 characters

> [!NOTE]
> On APIs to search documents by metadata, name matching is **case insensitive**
