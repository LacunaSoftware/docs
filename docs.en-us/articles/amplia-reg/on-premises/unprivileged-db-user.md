# Running Amplia Reg without db_owner privileges

[Amplia Reg](../index.md) can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update when needed (default)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrator using a command line tool

Granting owner privileges to the application is simpler, which is why this mode is the default for the standard installation. However, granting only read and
write privileges ensures you greater control over the database. If you prefer to run Amplia Reg without owner privileges over the database, follow the
steps on this article.

## Create unprivileged credentials

Create the database normally as specified on the [Preparing a database article](prepare-database.md).

Then, instead of creating the *AmpliaRegAdm* user and granting it the `db_owner` role, create a limited user **AmpliaRegApp** and grant it only the roles `db_datareader` and `db_datawriter`:

```sql
USE master;
CREATE LOGIN AmpliaRegApp WITH PASSWORD = 'XXXXXX';
GO

USE AmpliaReg;
CREATE USER AmpliaRegApp FOR LOGIN AmpliaRegApp;
EXEC sp_addrolemember 'db_datareader', 'AmpliaRegApp';
EXEC sp_addrolemember 'db_datawriter', 'AmpliaRegApp';
GO
```

The connection string would then be:

```
Data Source=.;Initial Catalog=AmpliaReg;User ID=AmpliaRegApp;Password=XXXXX
```

> [!NOTE]
> This connection string assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

## Disable automatic database update

Running Amplia Reg without owner privileges means that the application cannot update the database model on its own. Thus, you should disable
the automatic database model update to avoid errors.

Edit the Amplia Reg JSON configuration file (depends on the platform you are using) and add:

* Section **General**
  * **AutoUpdateDatabase**: set to `false`

## See also

* [`update-db` command](tool/update-db.md)
* [Preparing a database for installation of Amplia Reg](prepare-database.md)
