# Preparando o banco de dados para instalação do Amplia

Para instalar uma [instância *on premises*](index.md) do [Amplia](../index.md), você vai precisar de uma *connection string* para um dos seguintes SGBDs:

* [SQL Server](#sql-server)
* [PostgreSQL](#postgres)

<a name="sql-server" />

## SQL Server

Para usar SQL Server, você vai precisar de um banco de dados com:

* Collation: `Latin1_General_100_CI_AI`
* Credenciais correspondentes a um usuário com papel `db_owner`

> [!NOTE]
> Se você preferir operar o Amplia sem conceder `db_owner` ao usuário da aplicação, siga as instruções [neste artigo](unprivileged-db-user.md)

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, siga os passos neste artigo.

> [!NOTE]
> Você não precisa seguir estas instruções especifícas. Se você desejar preparar o banco de dados,
> por exemplo usando recursos avançados como *log shipping* ou *mirroring*, você pode fazê-lo, desde que a *collation* e as permissões sejam observadas.

Para criar o banco de dados, use a seguinte consulta T-SQL (opcionalmente alterando o nome do banco de dados):

```sql
USE Master;
CREATE DATABASE Amplia COLLATE Latin1_General_100_CI_AI;
GO
```

Crie um usuário e associe-o ao papel `db_owner`:

```sql
USE master;
CREATE LOGIN AmpliaAdm WITH PASSWORD = 'XXXXX';
GO

USE Amplia;
CREATE USER AmpliaAdm FOR LOGIN AmpliaAdm;
EXEC sp_addrolemember 'db_owner', 'AmpliaAdm';
GO
```

A *connection string* seria, então:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaAdm;Password=XXXXX
```

> [!NOTE]
> Essa *connection string* presume que o servidor do banco de dados esteja instalado no mesmo servidor que o aplicativo da web. Se este não for o caso,
> o valor após `Data Source=` deve ser alterado.

<a name="postgres" />

## PostgreSQL

A partir da [versão 4.1.0](../changelog.md#v4-1-0) do Amplia, também é suportado o uso de PostgreSQL. Qualquer uma das versões do PostgreSQL dentro do período
de suporte oficial também é suportada ([o que, no momento, significa versão 11 ou superior](https://www.postgresql.org/support/versioning/)).

Comece criando o banco de dados e um usuário para a aplicação (altere os nomes caso deseje):

```
postgres=# CREATE DATABASE amplia;
CREATE DATABASE
postgres=# CREATE USER amplia WITH PASSWORD 'XXXXX';
CREATE ROLE
```

Em seguida, conecte-se ao banco de dados recém-criado e configure as permissões ao *schema* `public`:

```
postgres=# \connect amplia
You are now connected to database "amplia" as user "postgres".
amplia=# REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE
amplia=# GRANT ALL ON SCHEMA public TO amplia;
GRANT
```

> [!NOTE]
> Por ora, é necessário utilizar um usuário com acesso pleno. Contate-nos se você precisar executar o Amplia usando um usuário com acesso limitado.

A *connection string* seria, então, a seguinte (assumindo que você não alterou os nomes do banco de dados e do usuário):

```
Host=localhost;Database=amplia;Username=amplia;Password=XXXXX
```

> [!NOTE]
> Essa *connection string* parte do pressuposto que o SGBD está instalado no mesmo servidor que a aplicação web. Se esso não for o caso, o valor
> depois de `Host=` acima teria que ser alterado.

## See also

* [Operando o Amplia sem ser *owner* do banco de dados](unprivileged-db-user.md)
