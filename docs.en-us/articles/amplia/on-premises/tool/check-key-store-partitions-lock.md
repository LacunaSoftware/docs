# Amplia command: **check-key-store-partitions-lock**

## Name

`check-key-store-partitions-lock` - Checks lock status of key store partitions

## Syntax

To the status of all partitions on their corresponding key stores:

```sh
dotnet Lacuna.Amplia.Site.dll -- check-key-store-partitions-lock --scan --output-path /path/to/results/file.csv
```

Or, on Docker:

```sh
docker run -v /path/on/host:/out lacunasoftware/amplia:4.20 -- check-key-store-partitions-lock --scan --output-path /out/results.csv
```

## Description

The `check-key-store-partitions-lock` checks the lock status of partitions against the corresponding physical partitions on the HSM.

## See also

* [Amplia command-line tool](index.md)
