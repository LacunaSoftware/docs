# Certificate authentication

It is possible to authenticate users based on their X.509 public key certificates. This process is roughly outlined
below:

1. Generate a [cryptographic nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce)
1. Ask the user to perform a signature algorithm computation on the nonce using his private key
1. Verify the nonce signature with the user certificate's public key
1. Validate the user's certificate
1. If everything checks out, the application can trust that the user is indeed the subject of the certificate. Then,
   based on a key information on the certificate (e.g.: email address or ID number), locate the user on the database and
   complete the sign-in process

> [!NOTE]
> This is merely an overview. There are extra steps involved, such as validating that the nonce has never
> been used before in order to prevent replay attacks.

To implement this process, you need to perform operations on both the front- and backend:

The signature algorithm computation over the nonce must necessarily be done on the **frontend** because the user
certificate's private key might be on a cryptographic device that never allows exporting it. Moreover, even if the
private key is software-based, it is a bad practice to ask the user for it.

The generation of the nonce and all validations must be done on the **backend**, for obvious security reasons.

**The recommended way of implementing certificate authentication is using [Rest PKI](../rest-pki/index.md) together with [Web PKI](../web-pki/index.md)**.

## Recommended steps

1. Access the [Rest PKI documentation](../rest-pki/index.md)
1. Choose a programming language
1. Choose one of the samples projects for your programming language
1. Follow the steps to run the samples project
1. Once you get the project running, click on *Authentication with digital certificate*

The Rest PKI samples show the usage of Rest PKI together with Web PKI to implement certificate authentication.

## Alternative implementations

If your application is a .NET application (C#, VB.NET, C++.NET), you can also use the [PKI SDK](../pki-sdk/index.md).
See article [Certificate authentication](../pki-sdk/certificates/auth.md).

If you already have a 3rd party SDK for PKI operations or you wish to implement the backend code yourself, you can also use
[Web PKI](../web-pki/index.md) separately just for the frontend part.
