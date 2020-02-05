# Operando o Amplia sem ser *owner* do banco de dados

O [Amplia](../index.md) pode operar de duas maneiras em relação ao acesso do banco de dados:

1. Sendo *owner* do banco de dados e atualizar automaticamente o modelo do banco de dados após uma atualização quando necessário (padrão)
1. Ter privilégios apenas de leitura e escrita no banco de dados, exigindo que o modelo do banco de dados seja atualizado pelo administrador usando uma ferramenta de linha de comando

Operar com o usuário da aplicação sendo *owner* do aplicativo é mais simples, por isso essa é a opção sugerida na instalação padrão. Entretanto, conceder somente privilégios de leitura e escrita
garante ao administrador maior controle sobre o banco de dados. Se você preferir operar o Amplia sem privilégios de *owner* para o usuário da aplicação, siga os passos descritos nesse artigo.

## Criando credenciais de leitura e escrita

Ao invés de criar um usuário chamado *AmpliaAdm* e associá-lo ao papel `db_owner` conforme descrito no [artigo sobre preparação do banco de dados](prepare-database.md),
crie um usuário limitado chamado **AmpliaApp** e associe-o apenas aos papeis `db_datareader` e `db_datawriter`:

```sql
USE master;
CREATE LOGIN AmpliaApp WITH PASSWORD = 'XXXXXX';
GO

USE Amplia;
CREATE USER AmpliaApp FOR LOGIN AmpliaApp;
EXEC sp_addrolemember 'db_datareader', 'AmpliaApp';
EXEC sp_addrolemember 'db_datawriter', 'AmpliaApp';
GO
```

A *connection string* seria, então:

```
Data Source=.;Initial Catalog=Amplia;User ID=AmpliaApp;Password=XXXXX
```

## Desabilitando a atualização automática do banco de dados

Operar com o Amplia sem privilégios de *owner* sobre o banco de dados significa que a aplicação não será capaz de atualizar o banco por conta própria.
Por isso, é preciso desabilitar a atualização automática do banco de dados de modo a evitar erros.

Edite o arquivo JSON de configuração do Amplia (a localização do arquivo depende da plataforma onde a sua instância está instalada) e adicione:

* Seção **General**
  * **AutoUpdateDatabase**: atribua o valor `false`

## Veja também

* [Atualização do banco de dados](database-update.md)
