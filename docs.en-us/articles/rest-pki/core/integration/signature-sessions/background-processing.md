﻿# Background processing - Signature sessions

By default, users are kept waiting while documents are processed before being redirected back to your application. If you want to provide your users with a faster
experience, turn on background processing by passing `EnableBackgroundProcessing = true` upon creation of the session.

On .NET:

[!include[Enable background processing in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-dotnet.md)]

On PHP:

[!include[Enable background processing in PHP](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-php.md)]

On Java:

[!include[Enable background processing in Java](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-java.md)]

Direct API integration:

[!include[Enable background processing API](../../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-api.md)]

In this case, users do not wait for documents to be processed. However, your callback implementation must be ready to handle the case of a signature session whose
documents are not yet available for download.

> [!NOTE]
> No changes are needed to your app if you opt for the [Webhook flow](index.md#webhook-flow), since in this case there's no callback handling

## Aditional statuses

In addition to the possible statuses `Completed` and `UserCancelled`, two additional statuses are possible when the user is redirected on your app: `Processing` and `ProcessingError`.

While a session is still `Processing`, some documents will be in status `Processing` and cannot be downloaded. Only when the session transitions to the `Complete`
status are all documents ready to be downloaded.

> [!NOTE]
> The status `ProcessingError` is a rare condition that occurrs only in corner cases such as the user's certificate being revoked during the time between the
> start of the session and the completion of the background processing. It is perfectly appropriate for your app to `throw` if this status is returned.

## Adapting callback

Let's change our callback implementation to deal with this.

On .NET:

[!include[Callback with background processing in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet.md)]

On PHP:

[!include[Callback with background processing in PHP](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-php.md)]

On Java:

[!include[Callback with background processing in java](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-java.md)]

Notice that now we also consider the status `Processing` to be normal. Now, let's change the view:

On .NET, the Razor view would be:

[!include[Callback with background processing in dotnet - view](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet-view.md)]

On PHP, the client side view would be:

[!include[Callback with background processing in PHP - view](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-php-view.md)]

On Java, the Thymeleaf view would be:

[!include[Callback with background processing in Java - view](../../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-java-view.md)]

Notice how we render each list item differently based on each document's status.
