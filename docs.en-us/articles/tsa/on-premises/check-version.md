# Checking the version of Lacuna TSA

In order to check the installed version of your [on premises instance](index.md) of [Lacuna TSA](../index.md),
access the following URL from a web browser:

```
https://your-tsa-address/api/system/info
```

Example: https://tsa.lacunasoftware.com/api/system/info

The system will return a JSON with the version, for instance:

```json
{"productName":"Lacuna TSA","productVersion":"1.x.x"}
```

## See also

<!-- [Updating Lacuna TSA on Windows Server](windows/update.md) -->
<!-- [Updating Lacuna TSA on Azure App Services](azure/update.md) -->
* [Updating Lacuna TSA on Linux](linux/update.md)
