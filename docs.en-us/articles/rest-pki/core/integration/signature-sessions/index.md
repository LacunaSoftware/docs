# Signature sessions - Rest PKI Core

> [!NOTE]
> This article currently only covers integration on .NET or through direct API calls. We'll soon have integration with PHP (Jan 2021) and Java (Feb 2021)

**Signature sessions** are a [Rest PKI Core](../../index.md) feature which enable your users to perform digital signatures without requiring you to implement a signature
web page on your app.

To create a signature session, your app specifies a `returnUrl` and receives back a `redirectUrl`. Your app then redirects the user to the `redirectUrl`, where he will 
digitally sign documents:

![Signature session start](../../../../../../images/rest-pki/signature-session-start.png)

Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session. A query parameter will be added
to the `returnUrl` containing the signature session ID (`?signatureSessionId=...`). Then, your app parses the signature session ID on the query string and uses it to
call APIs to fetch the documents signed by the user:

![Signature session end](../../../../../../images/rest-pki/signature-session-end.png)

## Creating a signature session

> [!TIP]
> From this point on we'll describe calls to Rest PKI Core. Make sure you've read the [Get Started](get-started.md) article to be able to keep up.

On .NET, call `IRestPkiService.CreateSignatureSessionAsync()` and use the `RedirectUrl` returned to redirect your user:

[!include[Create session in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/create-dotnet.md)]

If calling the API directly, do:

[!include[Create session API](../../../../../../includes/rest-pki/core/signature-sessions/create-api.md)]

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

[!include[Callback in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/callback-dotnet.md)]

Notice that check the `Status` of the session and send the user away to some default location if the status is not `Completed`.

> [!NOTE]
> When a user is redirected back to your app, the session will have one of two possible statuses: `Completed` or `UserCancelled`. You should always check the
> status, since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.

Now, the Razor view:

[!include[Callback in dotnet - view](../../../../../../includes/rest-pki/core/signature-sessions/callback-dotnet-view.md)]

## Disabling downloads

If you don't receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply
download the signed documents and don't bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been
signed. If you feel this is a problem for your case, you can disable the downloading of signed documents by passing `DisableDownloads = true`.

On .NET:

[!include[Disable downloads in dotnet](../../../../../../includes/rest-pki/core/signature-sessions/disable-downloads-dotnet.md)]

Direct API integration:

[!include[Disable downloads API](../../../../../../includes/rest-pki/core/signature-sessions/disable-downloads-api.md)]

Then, users will only be able to download documents through your app, and thus will be far less inclined to quit the process prematurely.

> [!NOTE]
> Another way of dealing with this issue is to opt for the **Webhook flow** instead (see next section)

<a name="webhook-flow" />

## Webhook flow

On the standard integration flow described above, your app detects that documents have been signed when the user is redirect back with the `signatureSessionId`
query parameter appended to the `returnUrl`.

An alternative flow is to instead be notified of signed documents through [webhook notifications](../webhook.md). In this case, the signature page can be instead
opened on a new tab, which is closed by the end of the process. Hence, the user is never redirected back, and there is no need to implement the callback handler
(instead, you'll implement the webhook handler).

This flow has the advantage of not requiring the user to stick around while they are redirected by to your app for it to take notice of signed files. Also,
enabling [background processing](background-processing.md), which greatly enhances the user's experience, is simpler in this flow.

To open the signature page on a new tab, omit the `returnUrl` parameter when creating the session. Furthermore, you must open the tab with an HTML anchor tag with
`target="_blank"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.

## Improving the user experience

You may use the following optional features to improve the user experience:

* [File validation](file-validation.md)
* [Background processing](background-processing.md)
