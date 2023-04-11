# Lacuna PSC command: **gen-cert**

## Name

`gen-cert` - Generates a self-signed certificate to sign OAuth tokens

## Syntax

```sh
dotnet Lacuna.Psc.Site.dll [settings] -- gen-cert <subject common name> <PFX file password> [<output PFX file path>] [<output CER file path>]
```

Or, on Docker:

```sh
docker run -i lacunasoftware/psc:1.1 [settings] -- gen-cert <subject common name> <PFX file password> [<output PFX file path>] [<output CER file path>]
```

[!include[About settings](includes/about-settings.md)]

## See also

* [Lacuna PSC command-line tool](index.md)
