# Rest PKI Core command: **test-email**

## Name

`test-email` - Tests the email sending

## Syntax

```sh
dotnet Lacuna.RestPki.Site.dll [settings] -- test-email <to-address>
```

Or, on Docker:

```sh
docker run -i lacunasoftware/restpkicore:1.12 [settings] -- test-email <to-address>
```

[!include[About settings](includes/about-settings.md)]

## Description

The `test-email` command tests the email configuration by attempting to send a test message to the given address.

## See also

* [Rest PKI Core command-line tool](index.md)
