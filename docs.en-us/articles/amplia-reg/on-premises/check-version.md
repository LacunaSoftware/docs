# Checking the version of Amplia Reg

In order to check the installed version of your [on premises instance](index.md) of [Amplia Reg](../index.md),
access the following URL from a web browser:

```
https://your-ampliareg-address/api/system/info
```

Example: https://cert.lacunasoftware.com/api/system/info

The system will return a JSON with the version, for instance:

```json
{"productName":"Lacuna Amplia Reg","productVersion":"1.x.x"}
```

## See also

<!-- [Updating Amplia Reg on Windows Server](windows/update.md) -->
<!-- [Updating Amplia Reg on Azure App Services](azure/update.md) -->
* [Updating Amplia on Linux](linux/update.md)
