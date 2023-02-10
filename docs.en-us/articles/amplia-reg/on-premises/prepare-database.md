# Preparing a database for installation of Amplia Reg

In order to install a [on-premises installation](index.md) of [Amplia Reg](../index.md), you will need a connection string for one of the following database engines:

* [SQL Server](#sql-server)
* [PostgreSQL](#postgres)

<a name="sql-server" />

## SQL Server

To use SQL Server, you will need a database having:

* Collation: `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`
* Credentials corresponding to a user with `db_owner` role

> [!NOTE]
> If you prefer to run Amplia Reg without granting `db_owner` to the application user, see [this article](unprivileged-db-user.md)

> [!WARNING]
> The collation of the database **must** be one of the collations specified above. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, follow the steps in this article.

> [!NOTE]
> You do not need to follow these specific instructions. If you wish to prepare the database differently, for instance using advanced
> features such as log shipping or mirroring, you may do so, as long as the collation and role memberships are observed.

To create the database, use the following T-SQL query (optionally changing the database name):

```sql
USE master;
CREATE DATABASE AmpliaReg COLLATE Latin1_General_100_CI_AI;
GO
```

Create a user and grant it the `db_owner` role:

```sql
USE master;
CREATE LOGIN AmpliaRegAdm WITH PASSWORD = 'XXXXX';
GO

USE AmpliaReg;
CREATE USER AmpliaRegAdm FOR LOGIN AmpliaRegAdm;
EXEC sp_addrolemember 'db_owner', 'AmpliaRegAdm';
GO
```

The connection string would then be:

```
Data Source=.;Initial Catalog=AmpliaReg;User ID=AmpliaRegAdm;Password=XXXXX
```

> [!NOTE]
> This connection string assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Data Source=` would have to be changed.

<a name="postgres" />

## PostgreSQL

Starting on [version 1.6.0](../changelog.md#v1-6-0) of Amplia Reg, PostgreSQL is also supported. Any version currently supported of PostgreSQL
is also supported ([which at the moment means version 11 or greater](https://www.postgresql.org/support/versioning/)).

Start by creating the database and a user for the application (optionally changing the names of the database and user):

```
postgres=# CREATE DATABASE ampliareg;
CREATE DATABASE
postgres=# CREATE USER ampliareg WITH PASSWORD 'XXXXX';
CREATE ROLE
```

Next, connect to the newly created database and set the permissions for the `public` schema:

```
postgres=# \connect ampliareg
You are now connected to database "ampliareg" as user "postgres".
ampliareg=# REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE
ampliareg=# GRANT ALL ON SCHEMA public TO ampliareg;
GRANT
```

> [!NOTE]
> For now, only using a user with full schema access is supported. Please contact us if you need to run Amplia Reg with less privileges.

The connection string would then be (assuming you didn't change the database and user names):

```
Host=localhost;Database=ampliareg;Username=ampliareg;Password=XXXXX
```

> [!NOTE]
> This connection string assumes the database server is installed on the same server as the web app. If this is not true,
> the value after `Host=` would have to be changed.

## See also

* [Running Amplia Reg without db_owner privileges](unprivileged-db-user.md)
