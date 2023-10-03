# Add document types - Amplia Reg

To add custom holder file types, add a section to your configuration file named **HolderFileTypes** with entries following the syntax `CODE=Name`, for instance:

Example (.ini/.conf file):

```ini
[HolderFileTypes]
MY_DOC_1=My first custom document name
MY_DOC_2=My second custom document name
```

Example (environment variables):

```sh
HolderFileTypes__MY_DOC_1=My first custom document name
HolderFileTypes__MY_DOC_2=My second custom document name
```

> [!NOTE]
> Codes are case-insensitive and must have **at most 16 characters**
