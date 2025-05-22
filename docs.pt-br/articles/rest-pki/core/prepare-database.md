# Preparando um banco de dados para instalação do Rest PKI Core

Para instalar uma [instalação *on premises*](on-premises/index.md) do [Rest PKI Core](../index.md), você precisará de uma string de conexão para um dos seguintes motores de banco de dados:

* [SQL Server](#sql-server)
* [PostgreSQL](#postgres)

<a name="sql-server" />

## SQL Server

Para usar SQL Server, você precisará de um banco de dados com:

* Collation: `Latin1_General_100_CI_AI` ou `Latin1_General_CI_AI`
* Credenciais correspondentes a um usuário com a função `db_owner`

> [!NOTE]
> Se você preferir executar o Rest PKI Core sem conceder `db_owner` ao usuário da aplicação, consulte [este artigo](unprivileged-db-user.md)

> [!WARNING]
> A collation do banco de dados **deve** ser uma das collations especificadas acima. Criar o banco de dados com uma collation diferente provavelmente causará falha na instalação!

Se você precisar de ajuda para preparar o banco de dados, siga as etapas neste artigo.

> [!NOTE]
> Você não precisa seguir estas instruções específicas. Se desejar preparar o banco de dados de forma diferente, por exemplo, usando recursos
> avançados como log shipping ou mirroring, você pode fazer isso, desde que a collation e as associações de funções sejam observadas.

Para criar o banco de dados, use a seguinte consulta T-SQL (opcionalmente alterando o nome do banco de dados):

```sql
USE master;
CREATE DATABASE RestPkiCore COLLATE Latin1_General_100_CI_AI;
GO
```

Crie um usuário e conceda a ele a função `db_owner`:

```sql
USE master;
CREATE LOGIN RestPkiCoreAdmin WITH PASSWORD = 'XXXXX';
GO

USE RestPkiCore;
CREATE USER RestPkiCoreAdmin FOR LOGIN RestPkiCoreAdmin;
EXEC sp_addrolemember 'db_owner', 'RestPkiCoreAdmin';
GO
```

A string de conexão seria então:

```
Data Source=.;Initial Catalog=RestPkiCore;User ID=RestPkiCoreAdmin;Password=XXXXX
```

> [!NOTE]
> Esta string de conexão assume que o servidor de banco de dados está instalado no mesmo servidor da aplicação web. Se este não for o caso,
> o valor após `Data Source=` precisará ser alterado.

<a name="postgres" />

## PostgreSQL

A partir da [versão 1.12.0](../changelog.md#v1-12-0) do Rest PKI Core, o PostgreSQL também é suportado. Qualquer versão atualmente suportada do PostgreSQL
também é suportada ([que atualmente significa versão 11 ou superior](https://www.postgresql.org/support/versioning/)).

Comece criando o banco de dados e um usuário para a aplicação (opcionalmente alterando os nomes do banco de dados e do usuário):

```
postgres=# CREATE DATABASE restpkicore;
CREATE DATABASE
postgres=# CREATE USER restpkicore WITH PASSWORD 'XXXXX';
CREATE ROLE
```

Em seguida, conecte-se ao banco de dados recém-criado e defina as permissões para o schema `public`:

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
> Por enquanto, apenas o uso de um usuário com acesso total ao schema é suportado. Entre em contato conosco se precisar executar o Rest PKI Core com menos privilégios.

A string de conexão seria então (assumindo que você não alterou os nomes do banco de dados e do usuário):

```
Host=localhost;Database=restpkicore;Username=restpkicore;Password=XXXXX
```

> [!NOTE]
> Esta string de conexão assume que o servidor de banco de dados está instalado no mesmo servidor da aplicação web. Se este não for o caso,
> o valor após `Host=` precisará ser alterado.

## Veja também

* [Executando o RestPkiCore sem privilégios de db_owner](unprivileged-db-user.md) (apenas SQL Server)
