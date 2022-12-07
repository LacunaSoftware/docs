# Referencing files - Amplia Reg

There are multiple ways to reference files when calling [Amplia Reg](../index.md)'s APIs, for instance when
[creating a preapproved order](preapproved-orders.md).

## .NET

You can reference a file by its path:

[!include[Reference by path in dotnet](../../../../includes/amplia-reg/file-reference-path-dotnet.md)]

By a `FileInfo` containing the file's path:

[!include[Reference by FileInfo in dotnet](../../../../includes/amplia-reg/file-reference-fileinfo-dotnet.md)]

By the file's bytes, in which case you must also give its filename:

[!include[Reference by content in dotnet](../../../../includes/amplia-reg/file-reference-content-dotnet.md)]

By a stream. Like when referencing by the file's bytes, the filename must also be given:

[!include[Reference by bytes in dotnet](../../../../includes/amplia-reg/file-reference-stream-dotnet.md)]

<!--

By absolute URL. In this case, the API backend will download the file from your application's backend. The URL must be publicly accessible with the `GET`
http method. Any authorization arguments must be embedded withing the URL itself:

[!include[Reference by URL in dotnet](../../../../includes/amplia-reg/file-reference-url-dotnet.md)]

-->

<!--

## Direct API integration

> [!NOTE]
> The samples here show file referencing during the [creation of a preapproved order](preapproved-orders.md), but the same applies for any API
> that accepts files as input.

You can reference a file by including its contents directly on the request, encoded in Base64, in which case you must also give its filename:

[!include[Reference by content API](../../../../includes/amplia-reg/file-reference-content-api.md)]

Also by absolute URL. In this case, the API backend will download the file from your application's backend. The URL must be publicly accessible with the `GET`
http method. Any authorization arguments must be embedded withing the URL itself:

[!include[Reference by URL API](../../../../includes/amplia-reg/file-reference-url-api.md)]

-->
