# Signature sessions - Webhook flow

You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don't
need to rely on users landing back on your page to detect that documents have been signed.

## Showing the signature page on a new tab

The default behavior is for your app to provide a `returnUrl`, and then redirect the user to the `redirectUrl` returned by this API with a HTTP redirection response
(e.g. *303 See Other*) or with a `location.href = ...` call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single
browser tab.

Alternatively, you may want to display the signature page on a new tab. In this case, omit the `returnUrl` parameter when creating the session. Furthermore, you must
open the tab with an HTML anchor tag with `target="_blank"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.
