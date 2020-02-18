# Amplia command: **update-db**

## Name

`update-db` - Updates the database model

## Syntax

```sh
dotnet Lacuna.Amplia.Site.dll [settings] -- update-db
```

Or, on Docker:

```sh
docker run -i lacunasoftware/amplia:3.1.0-rc1 [settings] -- update-db
```

[!include[About settings](includes/about-settings.md)]

## Description

The `update-db` command updates the database model by applying a series of *migrations*. It is meant to be used only when
[running Amplia without db_owner privileges](../unprivileged-db-user.md).

Since in this scenario Amplia's database credentials do not grant permissions to change the database model, you typically
will want to run this command passing a **privileged connection string**:

```sh
dotnet Lacuna.Amplia.Site.dll --ConnectionStrings:DefaultConnection="Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD" -- update-db
```

> [!TIP]
> On Linux, if your password contains the `!` character, use single quotes instead, e.g. `--ConnectionStrings:DefaultConnection='...'`, to avoid
> shell history expansions

## See also

* [Amplia command-line tool](index.md)
* [Running Amplia without db_owner privileges](../unprivileged-db-user.md)
