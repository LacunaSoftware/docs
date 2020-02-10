# Amplia - `update-db` command

## Name

`update-db` - Updates the database model

## Syntax

```bash
dotnet Lacuna.Amplia.Site.dll [settings] -- update-db
```

Or, on Docker:

```bash
docker run lacunasoftware/amplia:3.0.0 [settings] -- update-db
```

[!include[About settings](includes/about-settings.md)]

## Description

The `update-db` command updates the database model by applying a series of *migrations*. It is meant to be used only when
[running Amplia without db_owner privileges](../unprivileged-db-user.md).

Since in this scenario Amplia's database credentials do not grant permissions to change the database model, you typically
will want to run this command passing a **privileged connection string**:

```bash
dotnet Lacuna.Amplia.Site.dkk --ConnectionStrings:DefaultConnection='Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD' -- update-db
```

## See also

* [Amplia command-line tool](index.md)
* [Running Amplia without db_owner privileges](unprivileged-db-user.md)
