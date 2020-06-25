# Amplia command: **gen-enc-key**

## Name

`gen-enc-key` - Generates a random encryption key (to encrypt sensitive database columns)

## Syntax

```sh
dotnet Lacuna.Amplia.Site.dll -- gen-enc-key
```

Or, on Docker:

```sh
docker run -i lacunasoftware/amplia:3.8 -- gen-enc-key
```

## Description

The `gen-enc-key` generates a 256-bit encryption key to be used on the setting `General:EncryptionKey`, which is used by Amplia to encrypt sensitive data
stored on the database.

## See also

* [Amplia command-line tool](index.md)
