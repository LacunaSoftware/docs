# Lacuna PSC command: **test-email**

## Name

`test-email` - Tests the email sending

## Syntax

```sh
dotnet Lacuna.Psc.Site.dll [settings] -- test-email <to-address>
```

Or, on Docker:

```sh
docker run -i lacunasoftware/psc:1.2 [settings] -- test-email <to-address>
```

[!include[About settings](includes/about-settings.md)]

## Description

The `test-email` command tests the email configuration by attempting to send a test message to the given address.

## See also

* [Lacuna PSC command-line tool](index.md)
