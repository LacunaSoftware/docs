# Preparing a database for installation of Amplia

To [install Amplia](install.md), you will need a SQL Server database with collation **Latin1_General_100_CI_AI** and a connection string
for a user either having role *db_owner* or, in case you want to update the database model manually, roles *db_datareader* and *db_datawriter*.

If you need help preparing that database, follow the steps in this article.

## Creating the database

To create the database, you can use the following T-SQL query, optionally changing the database name:

```sql
USE Master;
CREATE DATABASE Amplia
COLLATE Latin1_General_100_CI_AI
GO
```

This is merely one of many ways to create the database. You may, for instance, elect to create the database using the *New Database...* wizard of
SQL Server Management Studio, which would be equally valid, as long as the collation is observed.

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with other collations will likely cause the installation to fail!

## Creating the credentials

As mentioned above, Amplia can operate in two ways regarding the access to the database:

* Having owner privileges over the database and automatically updating the database model after an update (if needed)
* Having only read and write privileges over the database, requiring the database model to be updated by the administrador using a command line tool

Follow the section below depending on the option you choose for the database operation mode.

### System having owner privileges

To create a credential having owner privileges over the database:

```sql
USE master;
CREATE LOGIN AmpliaAdm WITH PASSWORD = 'XXXXX';

USE Amplia;
CREATE USER AmpliaAdm FOR LOGIN AmpliaAdm;

EXEC sp_addrolemember 'db_owner', 'AmpliaAdm';
```

The connection string, in this case, would be:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaAdm;Password=XXXXX
```

> [!NOTE]
> The connection string above assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

### System having read and write privileges only

To create a credential having only read and write permissions over the database:

```sql
USE master;
CREATE LOGIN AmpliaApp WITH PASSWORD = 'XXXXXX';

USE Amplia;
CREATE USER AmpliaApp FOR LOGIN AmpliaApp;
EXEC sp_addrolemember 'db_datareader', 'AmpliaApp';
EXEC sp_addrolemember 'db_datawriter', 'AmpliaApp';
```

The connection string, in this case, would be:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaApp;Password=XXXXX
```

> [!NOTE]
> The connection string above assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

## See also

* [Installing Amplia on Windows Server](install.md)
* [Troubleshooting](troubleshoot/index.md)
