# Preparando o banco de dados para instalação do Rest PKI Core

Para instalar uma [instância *on premises*](index.md) do [Rest PKI Core](../index.md), você vai precisar de uma *connection string* para um dos seguintes SGBDs:

* [SQL Server](#sql-server)
* [PostgreSQL](#postgres)

<a name="sql-server" />

## SQL Server

Para usar o SQL Server, você precisará de um banco de dados com:

* Collation: `Latin1_General_100_CI_AI`
* Credenciais correspondentes a um usuário com papel `db_owner`

> [!NOTE]
> Se você preferir operar o Rest PKI Core sem conceder `db_owner` ao usuário da aplicação, siga as instruções [neste artigo](unprivileged-db-user.md)

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, siga os passos neste artigo.

> [!NOTE]
> Você não precisa seguir estas instruções especifícas. Se você desejar preparar o banco de dados,
> por exemplo usando recursos avançados como *log shipping* ou *mirroring*, você pode fazê-lo, desde que a *collation* e as permissões sejam observadas.

Para criar o banco de dados, use a seguinte consulta T-SQL (opcionalmente alterando o nome do banco de dados):

```sql
USE Master;
CREATE DATABASE RestPkiCore COLLATE Latin1_General_100_CI_AI;
GO
```

Crie um usuário e associe-o ao papel `db_owner`:

```sql
USE master;
CREATE LOGIN RestPkiCoreAdmin WITH PASSWORD = 'XXXXX';
GO

USE RestPkiCore;
CREATE USER RestPkiCoreAdmin FOR LOGIN RestPkiCoreAdmin;
EXEC sp_addrolemember 'db_owner', 'RestPkiCoreAdmin';
GO
```

A *connection string* seria, então:

```
Data Source=.;Initial Catalog=RestPkiCore;User ID=RestPkiCoreAdmin;Password=XXXXX
```

> [!NOTE]
> Essa *connection string* presume que o servidor do banco de dados esteja instalado no mesmo servidor que o aplicativo da web. Se este não for o caso,
> o valor após `Data Source=` deve ser alterado.

<a name="postgres" />

## PostgreSQL

A partir da [versão 1.12.0](../changelog.md#v1-12-0) do Rest PKI Core, também é suportado o uso de PostgreSQL. Qualquer uma das versões do PostgreSQL dentro do período
de suporte oficial também é suportada ([o que, no momento, significa versão 11 ou superior](https://www.postgresql.org/support/versioning/)).

Comece criando o banco de dados e um usuário para a aplicação (altere os nomes caso deseje):

```
postgres=# CREATE DATABASE restpkicore;
CREATE DATABASE
postgres=# CREATE USER restpkicore WITH PASSWORD 'XXXXX';
CREATE ROLE
```

Em seguida, conecte-se ao banco de dados recém-criado e configure as permissões ao *schema* `public`:

```
postgres=# \connect restpkicore
You are now connected to database "restpkicore" as user "postgres".
restpkicore=# REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE
restpkicore=# GRANT ALL ON SCHEMA public TO restpkicore;
GRANT
```

> [!NOTE]
> Por ora, é necessário utilizar um usuário com acesso pleno. Contate-nos se você precisar executar o Rest PKI Core usando um usuário com acesso limitado.

A *connection string* seria, então, a seguinte (assumindo que você não alterou os nomes do banco de dados e do usuário):

```
Host=localhost;Database=restpkicore;Username=restpkicore;Password=XXXXX
```

> [!NOTE]
> Essa *connection string* parte do pressuposto que o SGBD está instalado no mesmo servidor que a aplicação web. Se esso não for o caso, o valor
> depois de `Host=` acima teria que ser alterado.

## Veja também

* [Operando o Rest PKI Core sem ser *owner* do banco de dados](unprivileged-db-user.md) (apenas para SQL Server)
