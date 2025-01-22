# Amplia Reg command: **test-email**

## Name

`test-email` - Tests the email sending

## Syntax

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- test-email <to-address>
```

Or, on Docker:

```sh
docker run -i lacunasoftware/ampliareg:3.0 [settings] -- test-email <to-address>
```

[!include[About settings](includes/about-settings.md)]

## Description

The `test-email` command tests the email configuration by attempting to send a test message to the given address.

## See also

* [Amplia Reg command-line tool](index.md)
