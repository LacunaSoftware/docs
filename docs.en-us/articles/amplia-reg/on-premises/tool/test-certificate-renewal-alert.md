# Amplia Reg command: **test-cert-renewal-alert**

## Name

`test-cert-renewal-alert` - Tests the certificate renewal alert email

## Syntax

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- test-cert-renewal-alert <order number> <simulated days before expiration>
```

Or, on Docker:

```sh
docker run -i lacunasoftware/ampliareg:2.5 [settings] -- test-cert-renewal-alert <order number> <simulated days before expiration>
```

[!include[About settings](includes/about-settings.md)]

## Description

The `test-cert-renewal-alert` command tests the email template configured by sending a email alert to the holder's email address associated with the order. The given order must be issued. Use negative days to test expired template.

## See also

* [Amplia Reg command-line tool](index.md)
