# Preparando o banco de dados para instalação do Amplia

Para [instalar o Amplia](install.md), você vai precisar de uma *connection string* para um **banco de dados do SQL Server** com:

* Collation: `Latin1_General_100_CI_AI`
* Credenciais correspondentes a um usuário com as seguintes funções do banco de dados:
    * Se o aplicativo deve ser *owner* do banco de dados: `db_owner`
    * Se o aplicativo deve ter apenas permissões de leitura e escrita: `db_datareader`e `db_datawriter`

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
CREATE DATABASE Amplia
COLLATE Latin1_General_100_CI_AI
GO
```

## Criando as credenciais 

Como mencionado acima, o Amplia pode operar de duas maneiras em relação ao acesso ao banco de dados:

1. Sendo *owner* do banco de dados e atualizar automaticamente o modelo do banco de dados após uma atualização (quando necessário)
1. Ter privilégios apenas de leitura e escrita no banco de dados, exigindo que o modelo do banco de dados seja atualizado pelo administrador (usando uma ferramenta de linha de comando)

Siga uma das seções abaixo de acordo com a opção que você escolher o modo de operação do banco de dados.

> [!NOTE]
> As *connection strings* mencionadas abaixo presumem que o servidor do banco de dados esteja instalado no mesmo servidor que o aplicativo da web. Se este não for o caso,
> o valor após `Data Source=` deve ser alterado.

### Aplicativo com privilégios de ser *owner* do banco de dados

Para criar uma credencial com privilégios de *owner* sobre o banco de dados (se você escolheu um nome diferente para o banco de dados quando criou o banco de dados, lembre-se de alterá-lo de acordo)

```sql
USE master;
CREATE LOGIN AmpliaAdm WITH PASSWORD = 'XXXXX';

USE Amplia;
CREATE USER AmpliaAdm FOR LOGIN AmpliaAdm;
EXEC sp_addrolemember 'db_owner', 'AmpliaAdm';
```

A *connection string* seria:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaAdm;Password=XXXXX
```

### Aplicativo com privilégios apenas para leitura e escrita

Para criar uma credencial com privilégios apenas para leitura e escrita no banco de dados:

```sql
USE master;
CREATE LOGIN AmpliaApp WITH PASSWORD = 'XXXXXX';

USE Amplia;
CREATE USER AmpliaApp FOR LOGIN AmpliaApp;
EXEC sp_addrolemember 'db_datareader', 'AmpliaApp';
EXEC sp_addrolemember 'db_datawriter', 'AmpliaApp';
```

A *connection string* seria:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaApp;Password=XXXXX
```

## See also

* [Instalando Amplia no Windows Server](install.md)
* [Resolução de problemas](troubleshoot/index.md)
