# Signature sessions - Rest PKI Core

> [!NOTE]
> This article currently only covers integration on .NET or through direct API calls. We'll soon have integration with PHP (Jan 2021) and Java (Feb 2021)

**Signature sessions** are a [Rest PKI Core](../index.md) feature which enable your users to perform digital signatures without requiring you to implement a signature
web page on your app.

To create a signature session, your app specifies a `returnUrl` and receives back a `redirectUrl`. Your app then redirects the user to the `redirectUrl`, where he will 
digitally sign documents:

![Signature session start](../../../../../images/rest-pki/signature-session-start.png)

Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session. A query parameter will be added
to the `returnUrl` containing the signature session ID (`?signatureSessionId=...`). Then, your app parses the signature session ID on the query string and uses it to
call APIs to fetch the documents signed by the user:

![Signature session end](../../../../../images/rest-pki/signature-session-end.png)

## Creating a signature session

> [!TIP]
> From this point on we'll describe calls to Rest PKI Core. Make sure you've read the [Get Started](get-started.md) article to be able to keep up.

On .NET, call `IRestPkiService.CreateSignatureSessionAsync()` and use the `RedirectUrl` returned to redirect your user:

[!include[Create session in dotnet](../../../../../includes/rest-pki/core/signature-sessions/create-dotnet.md)]

If calling the API directly, do:

[!include[Create session API](../../../../../includes/rest-pki/core/signature-sessions/create-api.md)]

Let's drill down on the `returnUrl` used on the code snippets above:

```plaintext
http://localhost:8080/SessionCallback
^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^
Your app's URL        Route to the callback handler
```

When adapting to your case, you must change the first portion to your own application's address and also to the route of your own "callback handler" (see next section).

## Implementing the callback handler

The `returnUrl` is the location to which Rest PKI Core will redirect the user back upon completion of the session.

> [!NOTE]
> So far, we've used `/SessionCallback` as the relative URL of the callback handler, but feel free to use whatever makes sense for your app

On .NET, the implementation would look like this:

[!include[Callback in dotnet](../../../../../includes/rest-pki/core/signature-sessions/callback-dotnet.md)]

Notice that check the `Status` of the session and send the user away to some default location if the status is not `Completed`.

> [!NOTE]
> When a user is redirected back to your app, the session will have one of two possible statuses: `Completed` or `UserCancelled`. You should always check the
> status, since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.

Now, the Razor view:

[!include[Callback in dotnet - view](../../../../../includes/rest-pki/core/signature-sessions/callback-dotnet-view.md)]

## Showing the signature page on a new tab

The default behavior is for your app to provide a `returnUrl`, and then redirect the user to the `redirectUrl` returned by this API with a HTTP redirection response
(e.g. *303 See Other*) or with a `location.href = ...` call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single
browser tab.

Alternatively, you may want to display the signature page on a new tab. In this case, omit the `returnUrl` parameter when creating the session. Furthermore, you must
open the tab with an HTML anchor tag with `target="_blank"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.

<!-- TODO: document Javascript polling (RPNG-45) -->

## Background processing

By default, users are kept waiting while documents are processed before being redirected back to your application. If you want to provide your users with a faster
experience, turn on background processing by passing `EnableBackgroundProcessing = true` upon creation of the session.

On .NET:

[!include[Enable background processing in dotnet](../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-dotnet.md)]

Direct API integration:

[!include[Enable background processing API](../../../../../includes/rest-pki/core/signature-sessions/enable-background-processing-api.md)]

In this case, users do not wait for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are
not yet available for download. In addition to the possible statuses `Completed` and `UserCancelled`, two additional statuses are possible when the user
is redirected on your app: `Processing` and `ProcessingError`.

While a session is still `Processing`, some documents will be in status `Processing` and cannot be downloaded. Only when the session transitions to the `Complete`
status are all documents ready to be downloaded.

> [!NOTE]
> The status `ProcessingError` is a rare condition that occurrs only in corner cases such as the user's certificate being revoked during the time between the
> start of the session and the completion of the background processing. It is perfectly appropriate for your app to `throw` if this status is returned.

Let's change our callback implementation to deal with this.

On .NET:

[!include[Callback with background processing in dotnet](../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet.md)]

Notice that now we also consider the status `Processing` to be normal. Now, let's change the view:

[!include[Callback with background processing in dotnet - view](../../../../../includes/rest-pki/core/signature-sessions/callback-background-processing-dotnet-view.md)]

Notice how we render each list item differently based on each document's status.

## Webhooks

You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don't
need to rely on users landing back on your page to detect that documents have been signed.

## Disabling downloads

If you don't receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply
download the signed documents and don't bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been
signed. If you feel this is a problem for your case, you can disable the downloading of signed documents by passing `DisableDownloads = true`.

On .NET:

[!include[Disable downloads in dotnet](../../../../../includes/rest-pki/core/signature-sessions/disable-downloads-dotnet.md)]

Direct API integration:

[!include[Disable downloads API](../../../../../includes/rest-pki/core/signature-sessions/disable-downloads-api.md)]

Then, users will only be able to download documents through your app, and thus will be far less inclined to quit the process prematurely.

## File name validation

If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription's
configuration to a regular expression conforming to your rules.

You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file's name and
MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).
