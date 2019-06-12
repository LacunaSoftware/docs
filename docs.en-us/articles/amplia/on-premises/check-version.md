# Checking the version of Amplia

In order to check the installed version of your [on premises instance](index.md) of [Amplia](../index.md),
access the following URL from a web browser:

```
https://your-amplia-address/api/system/info
```

Example: https://amplia.lacunasoftware.com/api/system/info

The system will return a JSON with the version, for instance:

```json
{"productName":"Lacuna Amplia","productVersion":"2.14.0"}
```

## See also

* [Updating Amplia on Windows Server](windows/update.md)
* [Updating Amplia on Azure App Services](azure/update.md)
