# Web remote signatures

A *remote signature* is a [digital signature](../signatures.md) performed with a private key that is not available
locally, that is, performing the signature algorithm computation remotely. Since the computation can depend on a
number of factors such as network latency and user interaction, the process of performing remote signatures is
inherently *asynchronous*, meaning that the process starts, waits for the computation, and later completes.

We call a *web remote signature* the special case of a remote signature on which a digital signature is being
performed on a web application with the backend controlling the signature process, but using the private key from
one of the user's certificates, available only on the client side.

**This is the recommended way of implementing digital signatures on web applications with our products** for
most cases (see [web signatures](index.md) for exceptions).

This process is roughly outlined below:

1. The backend initiates a remote signature process, yielding the bytes over which the signature algorithm computation
   with the user's private key must be performed (called the "to-sign-data")
1. The "to-sign-data" is transferred to the client side
1. The signature algorithm computation is performed on the frontend
1. The result of the signature algorithm is transferred back to the server
1. The backend completes the remote signature process

![Web remote signature sequence](../../../../images/pki-guide/web-remote-signature-sequence.png)

> [!NOTE]
> This is merely an overview. There are extra steps involved, such as reading the user certificate's
> encoding on the frontend and transferring it to the backend.

**The recommended way of implementing web remote signatures is using [Rest PKI](../../rest-pki/index.md)** together with [Web PKI](../../web-pki/index.md).

## Recommended steps

1. Access the [Rest PKI documentation](../../rest-pki/index.md)
1. Choose a programming language
1. Choose one of the samples projects for your programming language
1. Follow the steps to run the samples project
1. Once you get the project running, click on one of the signature examples

> [!TIP]
> Although the solution involves both Rest PKI and Web PKI (for the back- and frontend respectively), you should
> **focus on the Rest PKI documentation**, which shows the usage of both products integrated.

## Alternative implementations

If your application is a .NET application (C#, VB.NET, C++.NET), you can also use the [PKI SDK](../../pki-sdk/index.md)
on the backend with Web PKI on the frontend. See article [Web remote signatures](../../pki-sdk/signatures/web-remote.md)
on the PKI SDK documentation.

If you already own a 3rd party crypto SDK or if you wish to implement the backend code yourself, you can also use
[Web PKI](../../web-pki/index.md) just for the frontend part.
