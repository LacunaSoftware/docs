# Server signatures

A *server signature* is a [digital signature](signatures.md) performed with a private key located on the server, which
therefore can be performed entirely on the backend (as opposed to [web signatures](web-signatures/index.md) which must
necessarily involve at least one step performed on the frontend).

The way to implement server signatures depends on your programming language. Read one of the sections below accordingly:

## .NET applications

**The recommended way to implement server signatures on .NET applications is using the [PKI SDK](../pki-sdk/index.html).**

By importing the `.pfx` file of the certificate which will be used for signature to the operating system's certificate
store, the certificate will be available when loading certificates from the OS store. See article
[Certificates with private key](../pki-sdk/certificates/certs-with-key.md) for more information on how to load
certificates from the OS store, and article [Signatures](../pki-sdk/signatures.md) for information on how to perform
signatures.

## Other programming languages

**The recommended way to implement server signatures on all other programming languages is using [Rest PKI](../rest-pki/index.html).**

The Rest PKI samples that demonstrate how to implement this are called *PAdES server key** and **CAdES server key**.
Check the [Rest PKI samples availability per project](../rest-pki/samples-availability.md) to see on which samples projects
these samples are available.
