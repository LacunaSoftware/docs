# Preparing a database for installation of Signer

To install a [instance *on premises*](index.md) from [Signer](../index.md), you will need a *connection string* for a **SQL Server database** with:

* Collation: `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`
* Credentials corresponding to a user with role `db_owner`

<!--
> [!NOTE]
> If you prefer to operate the Signer without giving `db_owner` to the application user, follow the instructions [in this article](unprivileged-db-user.md)
-->

> [!WARNING]
> The *collation* of the database **MUST BE** `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`. Creating the database with a different *collation* will likely cause the installation to fail!

If you need help preparing your database, follow the steps in this article.

> [!NOTE]
> You do not need to follow these specific instructions. If you want to prepare the database,
> for example using advanced features like *log shipping* or *mirroring*, you can do this, as long as *collation* and permissions are observed.

## Creating the database

To create the database, use the following T-SQL query (optionally changing the name of the database):

```sql
USE Master;
CREATE DATABASE Signer COLLATE Latin1_General_100_CI_AI;
GO
```

## Creating the credentials

Create a user and associate it with the `db_owner` role:

```sql
USE master;
CREATE LOGIN SignerAdm WITH PASSWORD = 'XXXXX';
GO

USE Signer;
CREATE USER SignerAdm FOR LOGIN SignerAdm;
EXEC sp_addrolemember 'db_owner', 'SignerAdm';
GO
```

The *connection string* would then be:

```
Data Source=.;Initial Catalog=Signer;User ID=SignerAdm;Password=XXXXX
```

> [!NOTE]
> This *connection string* assumes that the database server is installed on the same server as the web application. If this is not the case,
> the value after `Data Source =` must be changed.

<!--
## See also
[Operating the Signer without being an * owner * of the database](unprivileged-db-user.md)
-->
