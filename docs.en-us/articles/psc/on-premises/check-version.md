# Checking the version of Lacuna PSC

In order to check the installed version of your [on premises instance](index.md) of [Lacuna PSC](../index.md),
access the following URL from a web browser:

```
https://your-psc-address/api/system/info
```

Example: https://psc.lacunasoftware.com/api/system/info

The system will return a JSON with the version, for instance:

```json
{"productName":"Lacuna PSC","productVersion":"1.x.x"}
```

## See also

<!-- [Updating Lacuna PSC on Windows Server](windows/update.md) -->
<!-- [Updating Lacuna PSC on Azure App Services](azure/update.md) -->
* [Updating Lacuna PSC on Linux](linux/update.md)
