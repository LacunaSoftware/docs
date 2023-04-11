# Lacuna PSC command: **update-db**

## Name

`update-db` - Updates the database model

## Syntax

```sh
dotnet Lacuna.Psc.Site.dll [settings] -- update-db
```

Or, on Docker:

```sh
docker run -i lacunasoftware/psc:1.1 [settings] -- update-db
```

[!include[About settings](includes/about-settings.md)]

## Description

The `update-db` command updates the database model by applying a series of *migrations*. It is meant to be used only when
[running Lacuna PSC without db_owner privileges](../unprivileged-db-user.md).

Since in this scenario Lacuna PSC's database credentials do not grant permissions to change the database model, you typically
will want to run this command passing a **privileged connection string**:

```sh
dotnet Lacuna.Psc.Site.dll --ConnectionStrings:DefaultConnection="Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD" -- update-db
```

> [!TIP]
> On Linux, if your password contains the `!` character, use single quotes instead, e.g. `--ConnectionStrings:DefaultConnection='...'`, to avoid
> shell history expansions

## See also

* [Lacuna PSC command-line tool](index.md)
* [Running Lacuna PSC without db_owner privileges](../unprivileged-db-user.md)
