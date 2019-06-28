# Preparing a database for installation of Amplia

In order to [install Amplia](install.md), you will need a connection string for a **SQL Server database** having:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with the following database roles:
  * If the application should be owner of the database: `db_owner`
  * If the application should only have read and write permissions: `db_datareader` and `db_datawriter`

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, follow the steps in this article.

> [!NOTE]
> You do not need to follow these specific instructions. If you wish to prepare the database differently, for instance using advanced
> features such as log shipping or mirroring, you may do so, as long as the collation and role memberships are observed.

## Creating the database

To create the database, use the following T-SQL query (optionally changing the database name):

```sql
USE Master;
CREATE DATABASE Amplia
COLLATE Latin1_General_100_CI_AI
GO
```

## Creating the credentials

As mentioned above, Amplia can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update (when needed)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrador (using a command line tool)

Follow one of the sections below according to the option you choose for the database operation mode.

> [!NOTE]
> The connection strings mentioned below assume the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

### Application having owner privileges

To create a credential having owner privileges over the database (if you chose a different database name when creating the database, remember to change it accordingly):

```sql
USE master;
CREATE LOGIN AmpliaAdm WITH PASSWORD = 'XXXXX';

USE Amplia;
CREATE USER AmpliaAdm FOR LOGIN AmpliaAdm;
EXEC sp_addrolemember 'db_owner', 'AmpliaAdm';
```

The connection string would then be:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaAdm;Password=XXXXX
```

### Application having read and write privileges only

To create a credential having only read and write permissions over the database:

```sql
USE master;
CREATE LOGIN AmpliaApp WITH PASSWORD = 'XXXXXX';

USE Amplia;
CREATE USER AmpliaApp FOR LOGIN AmpliaApp;
EXEC sp_addrolemember 'db_datareader', 'AmpliaApp';
EXEC sp_addrolemember 'db_datawriter', 'AmpliaApp';
```

The connection string would then be:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaApp;Password=XXXXX
```

## See also

* [Installing Amplia on Windows Server](install.md)
* [Troubleshooting](troubleshoot/index.md)
