# Preparando o banco de dados para instalação do Rest PKI Core

Para instalar uma [instância *on premises*](index.md) do [Rest PKI Core](../index.md), você vai precisar de uma *connection string* para um **banco de dados do SQL Server** com:

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

## Criando o bando de dados

Para criar o banco de dados, use a seguinte consulta T-SQL (opcionalmente alterando o nome do banco de dados):

```sql
USE Master;
CREATE DATABASE RestPkiCore COLLATE Latin1_General_100_CI_AI;
GO
```

## Criando as credenciais 

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

## See also

* [Operando o Rest PKI Core sem ser *owner* do banco de dados](unprivileged-db-user.md)
