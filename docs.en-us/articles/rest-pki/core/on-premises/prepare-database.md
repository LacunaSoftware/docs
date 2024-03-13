# Preparing a database for installation of Rest PKI Core

In order to install a [on-premises installation](index.md) of [Rest PKI Core](../index.md), you will need a connection string for one of the following database engines:

* [SQL Server](#sql-server)
* [PostgreSQL](#postgres)

<a name="sql-server" />

## SQL Server

To use SQL Server, you will need a database having:

* Collation: `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`
* Credentials corresponding to a user with `db_owner` role

> [!NOTE]
> If you prefer to run Rest PKI Core without granting `db_owner` to the application user, see [this article](unprivileged-db-user.md)

> [!WARNING]
> The collation of the database **must** be one of the collations specified above. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, follow the steps in this article.

> [!NOTE]
> You do not need to follow these specific instructions. If you wish to prepare the database differently, for instance using advanced
> features such as log shipping or mirroring, you may do so, as long as the collation and role memberships are observed.

To create the database, use the following T-SQL query (optionally changing the database name):

```sql
USE master;
CREATE DATABASE RestPkiCore COLLATE Latin1_General_100_CI_AI;
GO
```

Create a user and grant it the `db_owner` role:

```sql
USE master;
CREATE LOGIN RestPkiCoreAdmin WITH PASSWORD = 'XXXXX';
GO

USE RestPkiCore;
CREATE USER RestPkiCoreAdmin FOR LOGIN RestPkiCoreAdmin;
EXEC sp_addrolemember 'db_owner', 'RestPkiCoreAdmin';
GO
```

The connection string would then be:

```
Data Source=.;Initial Catalog=RestPkiCore;User ID=RestPkiCoreAdmin;Password=XXXXX
```

> [!NOTE]
> This connection string assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

<a name="postgres" />

## PostgreSQL

Starting on [version 1.12.0](../changelog.md#v1-12-0) of Rest PKI Core, PostgreSQL is also supported. Any version currently supported of PostgreSQL
is also supported ([which at the moment means version 11 or greater](https://www.postgresql.org/support/versioning/)).

Start by creating the database and a user for the application (optionally changing the names of the database and user):

```
postgres=# CREATE DATABASE restpkicore;
CREATE DATABASE
postgres=# CREATE USER restpkicore WITH PASSWORD 'XXXXX';
CREATE ROLE
```

Next, connect to the newly created database and set the permissions for the `public` schema:

```
postgres=# \connect restpkicore
You are now connected to database "restpkicore" as user "postgres".
restpkicore=# REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE
restpkicore=# GRANT ALL ON SCHEMA public TO restpkicore;
GRANT
restpkicore=# CREATE SCHEMA hangfire;
CREATE
restpkicore=# GRANT ALL ON SCHEMA hangfire TO restpkicore;
GRANT
```

> [!NOTE]
> For now, only using a user with full schema access is supported. Please contact us if you need to run Rest PKI Core with less privileges.

The connection string would then be (assuming you didn't change the database and user names):

```
Host=localhost;Database=restpkicore;Username=restpkicore;Password=XXXXX
```

> [!NOTE]
> This connection string assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Host=` would have to be changed.

## See also

* [Running RestPkiCore without db_owner privileges](unprivileged-db-user.md) (SQL Server only)
