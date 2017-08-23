# Lacuna Web PKI

The Lacuna Web PKI component enables web applications to interact with digital certificates through javascript.

> [!TIP]
> Web PKI is part of our line of products for PKI. We encourage you to read the article [PKI Solutions Guide](../pki-guide/index.md)
> to make sure this is the right product for your case.

The main features are:

* Displaying available certificates (either software- or hardware-based)
* Obtaining public properties of certificates (name, email address, etc.)
* Reading a certificate's binary encoding
* Signing data (or a pre-computed digest) with a certificate

The Web PKI component's main goal is to perform the client-side processing necessary for operations with digital certificates. An example would be performing digital signatures in a
[web remote signature](../pki-guide/web-signatures/remote.md) using a server-side SDK (*Software Development Kit*):

|   | Client-side (Lacuna Web PKI)                                                           | Server-side (SDK on server)                                                                                                                     |
| - | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | Retrieve the certificate's binary encoding and submit to the server                    | Prepare the signature, preparing the actual bytes that will serve as input to the signature algorithm ("to-sign-bytes" or "signed attributes")  |
| 2 | Sign the "to-sign-bytes" using a signature algorithm and send the output to the server | Assemble the signature package -- either a signed PDF, a CMS envelope (PKCS#7) or a XmlDSig node, depending on the kind of signature being done |

> [!NOTE]
> If you don't have a server-side SDK to perform the server-side processing, you can use the [Lacuna PKI SDK](../pki-sdk/index.md).
> [Contact us](https://www.lacunasoftware.com/en/home/purchase) for licensing information.

See the article [Get started](get-started.md) to start using Web PKI.
