# Sessões de assinatura - Rest PKI Core

> [!NOTE]
> Por ora, esse artigo só cobre integração com .NET ou direta por API. Em breve estará disponível integração usando PHP (Jan/2021) e Java (Fev/2021)

**Sessões de assinatura** são uma funcionalidade do [Rest PKI Core](../index.md) que permitem que seus usuários assinem documentos digitalmente sem que você
precise implementar uma página de assinatura digital na sua aplicação.

Para criar uma sessão de assinatura, sua aplicação especifica um `returnUrl` e recebe de volta um `redirectUrl`. Sua aplicação então redireciona o usuário para o
`redirectUrl`, local onde ele irá realizar as assinaturas digitais:

![Signature session start](../../../../../images/rest-pki/signature-session-start.png)

Uma vez que o processo seja finalizado, o usuário será redirecionado de volta à sua aplicação no endereço `returnUrl` especificado durante a criação da sessão. Um
*query parameter* será adicionado à URL contendo o ID da sessão de assinatura (`?signatureSessionId=...`). Usando esse ID, a sua aplicação chama o Rest PKI Core para
obter os documentos assinados pelo usuário:

![Signature session end](../../../../../images/rest-pki/signature-session-end.png)

## Criando a sessão de assinatura

> [!TIP]
> Desse ponto em diante estaremos descrevendo chamadas ao Rest PKI Core. Para conseguir acompanhar, certifique-se de que já fez os [Primeiros passos](get-started.md).

Em .NET, chame `IRestPkiService.CreateSignatureSessionAsync()` e use o `RedirectUrl` retornado para redirecionar o usuário:

[!include[Create session in dotnet](../../../../../includes/rest-pki/core/signature-sessions/create-dotnet.md)]

Caso esteja chamando a API diretamente:

[!include[Create session API](../../../../../includes/rest-pki/core/signature-sessions/create-api.md)]

Vamos analisar o `returnUrl` utilizado nos exemplos acima:

```plaintext
http://localhost:8080/SessionCallback
^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^
Endereço da sua app   Rota para o tratamento do retorno
```

Ao adaptar os exemplos para a sua aplicação, você precisa alterar a primeira porção para o endereço da sua própria aplicação e também a rota para o tratamento do
retorno na sua aplicação (veja a seção abaixo).

## Implementando o tratamento do retorno

O `returnUrl` é o endereço para no qual o Rest PKI Core enviará o seu usuário de volta para a sua aplicação uma vez que o processo de assinatura seja concluído.

> [!NOTE]
> Até aqui, estamos usando `/SessionCallback` como URL relativa do tratamento de retorno, porém sinta-se à vontade para usar a URL relativa mais adequada à sua
> aplicação

Em .NET, a implementação do tratamento de retorno seria algo como:

[!include[Callback in dotnet](../../../../../includes/rest-pki/core/signature-sessions/callback-dotnet.md)]

Note que verificamos o `Status` da sessão e enviamos o usuário para um local padrão caso o estado não seja `Completed`.

> [!NOTE]
> Quando um usuário é redirecionado de volta à sua aplicação, a sessão terá um de dois possíveis estados: `Completed` ou `UserCancelled`, esse último ocorrendo quando a
> sessão é cancelada pelo usuário. Seu código deve sempre checar esse estado, pois é perfeitamente normal um usuário ser direcionado ao endereço de tratamento de
> retorno porque cancelou a sessão.

Agora, a view de Razor:

[!include[Callback in dotnet - view](../../../../../includes/rest-pki/core/signature-sessions/callback-dotnet-view.md)]

## Abrindo a página de assinatura em outra aba

O comportamento padrão é a sua aplicação fornecer um `returnUrl`, redirecionar o usuário para o `redirectUrl` retornado pelo Rest PKI Core com uma resposta de
redirecionamento de HTTP (por exemplo *303 See Other*) ou com uma chamada de Javascript `location.href = ...`. Ao final do processo, o usuário é redirecionado
de volta à sua aplicação, tudo em uma mesma aba do navegador.

Uma alternativa a esse fluxo é exibir a página de assinatura em uma nova aba. Para isso, omita o parâmetro `returnUrl` ao criar a sessão. Além disso, é preciso
que a aba seja aberta com uma tag `<a>` de HTML com `target="_blank"`, ou com uma chamada ao `window.open()` em Javascript. Nesse caso, a aba será fechada pelo
Rest PKI Core ao final do processo.

<!-- TODO: document Javascript polling (RPNG-45) -->

## Processamento em background

Por padrão, o Rest PKI Core fará com que o usuário aguarde que os documentos sejam processados antes de enviá-lo de volta à sua aplicação. Se você quiser oferecer
uma experiência mais ágil para seus usuários, habilite o processamento em background especificando `EnableBackgroundProcessing = true` na criação da sessão.

Em .NET:

[!include[Enable background processing in dotnet](../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-dotnet.md)]

Integração direta por API:

[!include[Enable background processing API](../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-api.md)]

Nesse caso, o usuário será redirecionado de volta à sua aplicação assim que concluir as assinaturas, sem aguardar o processamento, Entretanto, a sua aplicação
precisa ser adequada para lidar com o caso de uma sessão de assinatura cujos documentos ainda não estão prontos para download. Além dos estados `Completed`
e `UserCancelled`, a sessão pode estar em dois outros estados quando o usuário chega de volta à sua aplicação: `Processing` e `ProcessingError`.

Enquanto uma sessão estiver em `Processing`, alguns documentos estarão com estado `Processing` e não estarão disponíveis para download. Apenas quando a sessão
mudar de estado para `Completed` é que todos os documentos estarão prontos para download.

> [!NOTE]
> O estado `ProcessingError` é uma condição rara que ocorre apenas caso o certificado do usuário seja revogado na janela de tempo entre o início da sessão
> e a conclusão do processamento. É perfeitamente apropriado que a sua aplicação ignore essa condição ou apenas lance uma exceção caso isso ocorra.

Vamos adaptar nosso tratamento de retorno para lidar com essas mudanças.

Em .NET:

[!include[Callback with background processing in dotnet](../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet.md)]

Note que agora também consideramos o estado `Processing` como normal. Vamos alterar a view:

[!include[Callback with background processing in dotnet - view](../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet-view.md)]

Note que renderizamos cada item da lista de maneira diferente baseado no estado do documento.

## Webhooks

Você pode configurar sua conta no Rest PKI Core de modo que sua aplicação seja informada quando documentos forem assinados em sessões de assinatura criadas por ela.
Dessa forma, você não precisa depender dos usuários retornarem à sua aplicação para tomar ciência dos documentos assinados.

## Desabilitando downloads

Se você não receber notificações via webhook de documentos assinados, é possível que fique com a impressão que o processo de assinatura com a funcionalidade de
sessões de assinatura não está funcionando de maneira confiável porque alguns usuários, ao invés de concluirem a sessão e retornarem à sua aplicação, simplesmente
fazem o download dos arquivos assinados e fecham a aba do navegador, de modo que a sua aplicação não chega a tomar conhecimento dos documentos.

Caso isso seja um problema para o seu caso específico, você pode desabilitar a função de download dos arquivos assinados durante a sessão de assinatura especificando
`DisableDownloads = true` ao criar a sessão.

Em .NET:

[!include[Disable downloads in dotnet](../../../../../includes/rest-pki/core/signature-sessions/disable-downloads-dotnet.md)]

Integração direta por API:

[!include[Disable downloads API](../../../../../includes/rest-pki/core/signature-sessions/disable-downloads-api.md)]

Nesse caso, os usuários só conseguirão baixar os arquivos assinados na sua aplicação e, portanto, ficarão muito menos inclinados a interromper o processo
prematuramente fechando a aba do navegador.

## Validação de arquivos

Caso você tenha uma regra de formação para os nomes de arquivos que são aceitos, voc6e pode configurar sua conta do Rest PKI Core com um *padrão aceito de nomes de
arquivos* com uma expressão regular que represente as suas regras.

Também é possível configurar uma API de validação de arquivos, implementada pela sua aplicação, a ser chamada pelo Rest PKI Core para validar cada arquivo escolhido
pelo usuário. A sua aplicação recebe o nome do arquivo (além de outras informações como *MIME type* e tamanho) e retorna se o arquivo deve ou não ser aceito (e, caso
negativo, o motivo da rejeição).
