# Checking the version of Rest PKI Core

In order to check the installed version of your [on premises instance](index.md) of [Rest PKI Core](../index.md),
access the following URL from a web browser:

```
https://your-restpki-core-address/api/system/info
```

Example: https://core.pki.rest/api/system/info

The system will return a JSON with the version, for instance:

```json
{"productName":"Lacuna Rest PKI Core","productVersion":"1.*.* RTM","spaVersion":"2.*.0","timestamp":"..."}
```
