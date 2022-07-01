# Lacuna PSC command: **hash-root-pass**

## Name

`hash-root-pass` - Computes a salted hash for a given root password

## Syntax

```sh
dotnet Lacuna.Psc.Site.dll -- hash-root-pass
```

Or, on Docker:

[!include[Hash root password with Docker](../../../../../includes/psc/docker/hash-root-pass-stdout.md)]

## Description

The `hash-root-pass` command is meant to be used with *root authentication mode*. Use it to compute a salted hash of the desired
root password, and then set the hash on the `General__RootPasswordHash` setting.

The password is read from the `stdin`.

## See also

* [Lacuna PSC command-line tool](index.md)
<!-- * Root authentication mode -->
