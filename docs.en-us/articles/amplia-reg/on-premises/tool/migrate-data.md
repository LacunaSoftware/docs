# Amplia Reg command: **migrate-data**

## Name

`migrate-data` - Migrates application data to match a new schema version

## Syntax

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- migrate-data --to <to-version>
```

Or, on Docker:

```sh
docker run -i lacunasoftware/ampliareg:4.0 [settings] -- migrate-data --to <to-version>
```

[!include[About settings](includes/about-settings.md)]

Options:

* `--batchsize <batch-size>`: Number of records to update per iteration. Default: 100

## Description

The `migrate-data` command updates data to conform to a target schema version.

## See also

* [Amplia Reg command-line tool](index.md)
