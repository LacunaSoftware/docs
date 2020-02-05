# Running Amplia without db_owner privileges

[Amplia](../index.md) can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update when needed (default)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrator using a command line tool

Granting owner privileges to the application is simpler, which is why this mode is the default for the standard installation. However, granting only read and
write privileges ensures you greater control over the database. If you prefer to run Amplia without owner privileges over the database, follow the
steps on this article.

## Create unprivileged credentials

Instead of creating a *AmpliaAdm* user and granting it the `db_owner` role as specified on the [Preparing a database article](prepare-database.md), create
a limited user **AmpliaApp** and grant it only the roles `db_datareader` and `db_datawriter`:

```sql
USE master;
CREATE LOGIN AmpliaApp WITH PASSWORD = 'XXXXXX';
GO

USE Amplia;
CREATE USER AmpliaApp FOR LOGIN AmpliaApp;
EXEC sp_addrolemember 'db_datareader', 'AmpliaApp';
EXEC sp_addrolemember 'db_datawriter', 'AmpliaApp';
GO
```

The connection string would then be:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaApp;Password=XXXXX
```

## Disable automatic database update

Running Amplia without owner privileges means that the application cannot update the database model on its own. Thus, you should disable
the automatic database model update to avoid errors.

Edit the Amplia JSON configuration file (depends on the platform you are using) and add:

* Section **General**
  * **AutoUpdateDatabase**: set to `false`

## See also

* [Database model update](database-update.md)
