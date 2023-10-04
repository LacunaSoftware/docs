# Add document types - Amplia Reg

To add custom holder file types, add a section to your configuration file named **HolderFileTypes** with entries following the syntax `Type=Name`, for instance:

Example (.ini/.conf file):

```ini
[HolderFileTypes]
CustomDoc1=My first custom document name
CustomDoc2=My second custom document name
```

Example (environment variables):

```sh
HolderFileTypes__CustomDoc1=My first custom document name
HolderFileTypes__CustomDoc2=My second custom document name
```

Types are case-sensitive and must have **at most 15 characters**. `PascalCase` is recommended.

> [!NOTE]
> When referencing custom types on the API, the type must be prefixed with `@`. For instance, to reference the custom type `CustomDoc1` on an
> API request you must send `@CustomDoc1`.
