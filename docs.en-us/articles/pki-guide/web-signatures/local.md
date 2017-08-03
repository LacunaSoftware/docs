# Web local signatures

A *local signature* is a [digital signature](../signatures.md) performed with a private key that is available
locally and therefore can be performed in a *synchronous* matter (as opposed to remote signatures, which must
be performed asynchronously). For instance, a digital signature performed on a desktop application using one
of the certificates on the user's machine is a local signature.

We call a *web local signature* the special case of a local signature performed on a web page.

As outlined on the article [web signatures](index.md), this approach to implement web signatures should
be considered with care, because performing a digital signature is a complex process that requires network access
to acquire revocation artifacs (Certificate Revocation Lists), which might fail on some users' computers.

Because of this, on most cases we recommend the [web remote signatures](remote.md) approach to implement web signatures.

However, in cases on which no files can be uploaded to the server under any circumstances, signing locally
on the frontend can be the only option. For such cases, use the **local signature extension of
[Web PKI](../../web-pki/index.md)**. [Contact us](https://www.lacunasoftware.com/en/home/purchase) for details.
