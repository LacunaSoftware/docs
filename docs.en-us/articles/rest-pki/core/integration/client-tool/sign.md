# Client tool command: **sign**

## Name

`sign` - Signs a document with one of the user's certificates

## Syntax

```sh
rpkitool sign <file> [--output-file <output file>|--overwrite] [--cert-cpf <cpf> | --cert-thumb <thumbnail>]
```

The command takes a single argument, the path of the file to be signed.

The signed file can be either written to a different path, specified with the `--output-file` parameter, or the file being signed can be overwritten
by passing the `--overwrite` parameter.

The certificate to be used can either be specified by the user's CPF with the `--cert-cpf` parameter or by the certificate's thumbprint. It the latter case,
the application would first call the [list-certs](list-certs.md) command to get a list of the available certificates, show this list to the user and pass the
thumbprint of the chosen certificate on the `--cert-thumb` parameter.
