# Checking the version of Rest PKI

In order to check the installed version of your [on premises instance](index.md) of [Rest PKI](../index.md),
access the following URL from a web browser:

```
https://your-restpki-address/api/system/info
```

Example: https://pki.rest/api/system/info

The system will return an XML with the version, for instance:

```xml
<SystemInfo xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/Lacuna.RestPki.Api.System">
  <ProductName>Lacuna Rest PKI</ProductName>
  <ProductVersion>1.17.1</ProductVersion>
</SystemInfo>
```

To update your instance of Rest PKI, see article [Updating Rest PKI on Windows Server](windows-setup/update.md)
