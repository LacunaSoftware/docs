# Client tool command: **sign**

## Name

`sign` - Signs a document with one of the user's certificates

## Syntax

[!include[Sign syntax](../../../../../../includes/rest-pki/core/client-tool/sign-syntax.md)]

The command takes a single argument, the path of the file to be signed.

Options:

* `--cert-cpf <cert-cpf>`: CPF of the certificate to be used to sign the document
* `--cert-thumb <cert-thumb>`: Thumbprint of the certificate to be used to sign the document
* `--output-file <output-file>`: Output file
* `--document-key <document-key>`: Document key
* `--overwrite`: Overwrite input file

The signed file can be either written to a different path, specified with the `--output-file` parameter, or the file being signed can be overwritten
by passing the `--overwrite` parameter.

The certificate to be used can either be specified by the user's CPF with the `--cert-cpf` parameter or by the certificate's thumbprint. It the latter case,
the application would first call the [list-certs](list-certs.md) command to get a list of the available certificates, show this list to the user and pass the
thumbprint of the chosen certificate on the `--cert-thumb` parameter.

## Samples

To sign a file `document.pdf` with any certificate having CPF `11111111111`, overwriting the input file with the signed file:

[!include[Sign sample 1](../../../../../../includes/rest-pki/core/client-tool/sign-sample-cpf-overwrite.md)]

To sign the same file but now with a specific certificate, determined by its thumbprint (chosen by the user among the options returned by the
[list-certs](list-certs.md) command), writing the signed file with the filename `signed.pdf`:

[!include[Sign sample 2](../../../../../../includes/rest-pki/core/client-tool/sign-sample-thumb-output.md)]

## Output

The `documentId` is outputted to `stdout`, which can be used to reference this document later.
