# Referenciando arquivos - Amplia Reg

Existem diferentes maneiras de referenciar arquivos em chamadas à APIs do [Amplia Reg](../index.md), por exemplo ao
[criar um pedido de certificado pré-aprovado](preapproved-orders.md).

## .NET

Você pode referenciar um arquivo por seu *path*:

[!include[Reference by path in dotnet](../../../../includes/amplia-reg/file-reference-path-dotnet.md)]

Por um objeto `FileInfo` contendo o *path* do arquivo:

[!include[Reference by FileInfo in dotnet](../../../../includes/amplia-reg/file-reference-fileinfo-dotnet.md)]

Pelo conteúdo do arquivo, passando um array de bytes, nesse caso é preciso também informar o nome do arquivo:

[!include[Reference by content in dotnet](../../../../includes/amplia-reg/file-reference-content-dotnet.md)]

Por uma `stream`. Assim como em referências pelo conteúdo do arquivo, é preciso fornecer o nome do arquivo:

[!include[Reference by stream in dotnet](../../../../includes/amplia-reg/file-reference-stream-dotnet.md)]

<!--

Por URL absoluta. Nesse caso, o servidor da API irá baixar o arquivo do servidor da sua aplicação. A URL precisa ser
acessível publicamente com método `GET`. Quaisquer argumentos de autorização devem estar embutidos na própria URL:

[!include[Reference by URL in dotnet](../../../../includes/amplia-reg/file-reference-url-dotnet.md)]

-->

<!--

## Direct API integration

> [!NOTE]
> Os exemplos nessa seção exemplificam o referenciamento de arquivos numa [criação de pedido pré-aprovado](preapproved-orders.md),
> entretanto o mesmo se aplica a qualquer API que receba arquivos.

Você pode referenciar um arquivo incluindo seu conteúdo diretamente no request, codificado em Base64, nesse caso é preciso também fornecer o nome do arquivo:

[!include[Reference by content API](../../../../includes/amplia-reg/file-reference-content-api.md)]

Também por URL absoluta. Nesse caso, o servidor da API irá baixar o arquivo do servidor da sua aplicação. A URL precisa ser
acessível publicamente com método `GET`. Quaisquer argumentos de autorização devem estar embutidos na própria URL:

[!include[Reference by URL API](../../../../includes/amplia-reg/file-reference-url-api.md)]

-->
