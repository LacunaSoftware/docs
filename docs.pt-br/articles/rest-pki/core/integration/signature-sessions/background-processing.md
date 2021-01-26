# Processamento em background - Sessões de assinatura

Por padrão, o Rest PKI Core fará com que o usuário aguarde que os documentos sejam processados antes de enviá-lo de volta à sua aplicação. Se você quiser oferecer
uma experiência mais ágil para seus usuários, habilite o processamento em background especificando `EnableBackgroundProcessing = true` na criação da sessão.

Em .NET:

[!include[Enable background processing in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-dotnet.md)]

Em PHP:

[!include[Enable background processing in PHP](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-php.md)]

Integração direta por API:

[!include[Enable background processing API](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-api.md)]

Nesse caso, o usuário será redirecionado de volta à sua aplicação assim que concluir as assinaturas, sem aguardar o processamento, Entretanto, o seu tratemento de
retorno precisa ser adequado para lidar com o caso de uma sessão de assinatura cujos documentos ainda não estão prontos para download.

> [!NOTE]
> Nenhuma adequação é necessária no caso do [Fluxo com webhook](index.md#webhook-flow), pois nesse caso não há tratamento de retorno

## Estados adicionais

Além dos estados `Completed` e `UserCancelled`, a sessão pode estar em dois outros estados quando o usuário chega de volta à sua aplicação: `Processing` e
`ProcessingError`.

Enquanto uma sessão estiver em `Processing`, alguns documentos estarão com estado `Processing` e não estarão disponíveis para download. Apenas quando a sessão
mudar de estado para `Completed` é que todos os documentos estarão prontos para download.

> [!NOTE]
> O estado `ProcessingError` é uma condição rara que ocorre apenas caso o certificado do usuário seja revogado na janela de tempo entre o início da sessão
> e a conclusão do processamento. É perfeitamente apropriado que a sua aplicação ignore essa condição ou apenas lance uma exceção caso isso ocorra.

## Adaptando o tratamento de retorno

Vamos adaptar nosso tratamento de retorno para lidar com essas mudanças.

Em .NET:

[!include[Callback with background processing in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet.md)]

Em PHP:

[!include[Callback with background processing in PHP](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-php.md)]

Note que agora também consideramos o estado `Processing` como normal. Com isso, podemos alterar a forma que os documentos serão mostrados.

Em .NET, alteraríamos a view de Razor da seguinte maneira:

[!include[Callback with background processing in dotnet - view](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet-view.md)]

Em PHP, alteraríamos o lado do cliente da seguinte maneira: 

[!include[Callback with background processing in PHP - view](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-php-view.md)]

Note que renderizamos cada item da lista de maneira diferente baseado no estado do documento.
