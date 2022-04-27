# Amplia Reg command: **hash-root-pass**

## Name

`hash-root-pass` - Computes a salted hash for a given root password

## Syntax

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll -- hash-root-pass
```

Or, on Docker:

[!include[Hash root password with Docker](../../../../../includes/amplia-reg/docker/hash-root-pass-stdout.md)]

## Description

The `hash-root-pass` command is meant to be used with *root authentication mode*. Use it to compute a salted hash of the desired
root password, and then set the hash on the `General__RootPasswordHash` setting.

The password is read from the `stdin`.

## See also

* [Amplia Reg command-line tool](index.md)
<!-- * Root authentication mode -->
