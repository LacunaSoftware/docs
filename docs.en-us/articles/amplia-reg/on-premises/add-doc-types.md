# Add document types - Amplia Reg

To add custom holder file types, add a section to your configuration file named **HolderFileTypes** with entries like `Code=Your document type name`.

Example (.ini/.conf file):

```ini
[HolderFileTypes]
MyDoc1=My first custom document name
MyDoc2=My second custom document name
```

Example (environment variables):

```sh
HolderFileTypes__MyDoc1=My first custom document name
HolderFileTypes__MyDoc2=My second custom document name
```

Codes must have **at most 8 characters**.

> [!NOTE]
> When calling Amplia Reg through APIs, you must prefix custom document codes with `C_`. For instance, if you defined a custom document type
> with code `MyDoc1`, when referencing it on the API you must use the code `C_MyDoc1`.
