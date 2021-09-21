# Referenciando arquivos - Rest PKI Core

Existem diferentes maneiras de referenciar arquivos em chamadas à APIs do [Rest PKI Core](../index.md), por exemplo ao
[criar uma sessão de assinatura com documentos pré-definidos](signature-sessions/index.md#predefined-documents).

## .NET

Você pode referenciar um arquivo por seu *path*:

[!include[Reference by path in dotnet](../../../../../includes/rest-pki/core/file-reference-path-dotnet.md)]

Por um objeto `FileInfo` contendo o *path* do arquivo:

[!include[Reference by FileInfo in dotnet](../../../../../includes/rest-pki/core/file-reference-fileinfo-dotnet.md)]

Pelo conteúdo do arquivo, passando um array de bytes, nesse caso é preciso também informar o nome do arquivo:

[!include[Reference by content in dotnet](../../../../../includes/rest-pki/core/file-reference-content-dotnet.md)]

Por uma `stream`. Assim como em referências pelo conteúdo do arquivo, é preciso fornecer o nome do arquivo:

[!include[Reference by stream in dotnet](../../../../../includes/rest-pki/core/file-reference-stream-dotnet.md)]

Por URL absoluta. Nesse caso, o servidor da API irá baixar o arquivo do servidor da sua aplicação. A URL precisa ser
acessível publicamente com método `GET`. Quaisquer argumentos de autorização devem estar embutidos na própria URL:

[!include[Reference by URL in dotnet](../../../../../includes/rest-pki/core/file-reference-url-dotnet.md)]

## Java

Você pode referenciar um arquivo por seu *path*:

[!include[Reference by path in java](../../../../../includes/rest-pki/core/file-reference-path-java.md)]

Por um objeto `FileInfo` contendo o *path* do arquivo:

[!include[Reference by FileInfo in java](../../../../../includes/rest-pki/core/file-reference-file-java.md)]

Pelo conteúdo do arquivo, passando um array de bytes, nesse caso é preciso também informar o nome do arquivo:

[!include[Reference by content in java](../../../../../includes/rest-pki/core/file-reference-content-java.md)]

Por uma `stream`. Assim como em referências pelo conteúdo do arquivo, é preciso fornecer o nome do arquivo:

[!include[Reference by stream in java](../../../../../includes/rest-pki/core/file-reference-stream-java.md)]

Por URL absoluta. Nesse caso, o servidor da API irá baixar o arquivo do servidor da sua aplicação. A URL precisa ser
acessível publicamente com método `GET`. Quaisquer argumentos de autorização devem estar embutidos na própria URL:

[!include[Reference by URL in java](../../../../../includes/rest-pki/core/file-reference-url-java.md)]

## Direct API integration

> [!NOTE]
> Os exemplos nessa seção exemplificam o referenciamento de arquivos numa criação de [sessão de assinatura](signature-sessions/index.md),
> entretanto o mesmo se aplica a qualquer API que receba arquivos.

Você pode referenciar um arquivo incluindo seu conteúdo diretamente no request, codificado em Base64, nesse caso é preciso também fornecer o nome do arquivo:

[!include[Reference by content API](../../../../../includes/rest-pki/core/file-reference-content-api.md)]

Também por URL absoluta. Nesse caso, o servidor da API irá baixar o arquivo do servidor da sua aplicação. A URL precisa ser
acessível publicamente com método `GET`. Quaisquer argumentos de autorização devem estar embutidos na própria URL:

[!include[Reference by URL API](../../../../../includes/rest-pki/core/file-reference-url-api.md)]
