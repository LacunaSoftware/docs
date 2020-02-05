# Preparing a database for installation of Amplia

In order to install a [on-premises installation](index.md) of [Amplia](../index.md), you will need a connection string for a **SQL Server database** having:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with `db_owner` role

> [!NOTE]
> If you prefer to run Amplia without granting `db_owner` to the application user, see [this article](unprivileged-db-user.md)

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, follow the steps in this article.

> [!NOTE]
> You do not need to follow these specific instructions. If you wish to prepare the database differently, for instance using advanced
> features such as log shipping or mirroring, you may do so, as long as the collation and role memberships are observed.

## Creating the database

To create the database, use the following T-SQL query (optionally changing the database name):

```sql
USE master;
CREATE DATABASE Amplia COLLATE Latin1_General_100_CI_AI;
GO
```

## Creating the credentials

Create a user and grant it the `db_owner` role:

```sql
USE master;
CREATE LOGIN AmpliaAdm WITH PASSWORD = 'XXXXX';
GO

USE Amplia;
CREATE USER AmpliaAdm FOR LOGIN AmpliaAdm;
EXEC sp_addrolemember 'db_owner', 'AmpliaAdm';
GO
```

The connection string would then be:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaAdm;Password=XXXXX
```

> [!NOTE]
> This connection string assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

## See also

* [Database model update](database-update.md)
