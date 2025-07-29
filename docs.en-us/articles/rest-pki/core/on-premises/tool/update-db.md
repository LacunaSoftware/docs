# Rest PKI Core command: **update-db**

## Name

`update-db` - Updates the database model

## Syntax

```sh
dotnet Lacuna.RestPki.Site.dll [settings] -- update-db
```

Or, on Docker:

```sh
docker run -i lacunasoftware/restpkicore:3.1 [settings] -- update-db
```

[!include[About settings](includes/about-settings.md)]

## Description

The `update-db` command updates the database model by applying a series of *migrations*. It is meant to be used only when
[running Rest PKI Core without db_owner privileges](../unprivileged-db-user.md).

Since in this scenario Rest PKI Core's database credentials do not grant permissions to change the database model, you typically
will want to run this command passing a **privileged connection string**:

```sh
dotnet Lacuna.RestPki.Site.dll --ConnectionStrings:DefaultConnection="Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD" -- update-db
```

> [!TIP]
> On Linux, if your password contains the `!` character, use single quotes instead, e.g. `--ConnectionStrings:DefaultConnection='...'`, to avoid
> shell history expansions

## See also

* [Running Rest PKI Core without db_owner privileges](../unprivileged-db-user.md)
* [Rest PKI Core command-line tool](index.md)
