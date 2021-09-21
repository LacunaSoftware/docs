# Referencing files - Rest PKI Core

There are multiple ways to reference files when calling [Rest PKI Core](../index.md)'s APIs, for instance when
[creating a signature session with predefined documents](signature-sessions/index.md#predefined-documents).

## .NET

You can reference a file by its path:

[!include[Reference by path in dotnet](../../../../../includes/rest-pki/core/file-reference-path-dotnet.md)]

By a `FileInfo` containing the file's path:

[!include[Reference by FileInfo in dotnet](../../../../../includes/rest-pki/core/file-reference-fileinfo-dotnet.md)]

By the file's bytes, in which case you must also give its filename:

[!include[Reference by content in dotnet](../../../../../includes/rest-pki/core/file-reference-content-dotnet.md)]

By a stream. Like when referencing by the file's bytes, the filename must also be given:

[!include[Reference by bytes in dotnet](../../../../../includes/rest-pki/core/file-reference-stream-dotnet.md)]

By absolute URL. In this case, the API backend will download the file from your application's backend. The URL must be publicly accessible with the `GET`
http method. Any authorization arguments must be embedded withing the URL itself:

[!include[Reference by URL in dotnet](../../../../../includes/rest-pki/core/file-reference-url-dotnet.md)]

## Java

You can reference a file by its path:

[!include[Reference by path in java](../../../../../includes/rest-pki/core/file-reference-path-java.md)]

By a `FileInfo` containing the file's path:

[!include[Reference by FileInfo in java](../../../../../includes/rest-pki/core/file-reference-file-java.md)]

By the file's bytes, in which case you must also give its filename:

[!include[Reference by content in java](../../../../../includes/rest-pki/core/file-reference-content-java.md)]

By a stream. Like when referencing by the file's bytes, the filename must also be given:

[!include[Reference by bytes in java](../../../../../includes/rest-pki/core/file-reference-stream-java.md)]

By absolute URL. In this case, the API backend will download the file from your application's backend. The URL must be publicly accessible with the `GET`
http method. Any authorization arguments must be embedded withing the URL itself:

[!include[Reference by URL in java](../../../../../includes/rest-pki/core/file-reference-url-java.md)]

## Direct API integration

> [!NOTE]
> The samples here show file referencing during the creation of a [signature session](signature-sessions/index.md), but the same applies for any API
> that accepts files as input.

You can reference a file by including its contents directly on the request, encoded in Base64, in which case you must also give its filename:

[!include[Reference by content API](../../../../../includes/rest-pki/core/file-reference-content-api.md)]

Also by absolute URL. In this case, the API backend will download the file from your application's backend. The URL must be publicly accessible with the `GET`
http method. Any authorization arguments must be embedded withing the URL itself:

[!include[Reference by URL API](../../../../../includes/rest-pki/core/file-reference-url-api.md)]
