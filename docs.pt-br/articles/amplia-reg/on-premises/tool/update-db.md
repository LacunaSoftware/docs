# Comando do Amplia Reg: **update-db**

## Nome

`update-db` - Atualiza o modelo do banco de dados

## Sintaxe

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- update-db
```

Ou, no Docker:

```sh
docker run -i lacunasoftware/ampliareg:3.0 [settings] -- update-db
```

[!include[About settings](includes/about-settings.md)]

## Descrição

O comando `update-db` atualiza o modelo do banco de dados aplicando uma série de *migrações*. Ele deve ser usado apenas quando
[o Amplia Reg é executado sem privilégios db_owner](../unprivileged-db-user.md).

Nesse cenário, as credenciais do banco de dados do Amplia Reg não concedem permissões para alterar o modelo do banco de dados, portanto normalmente
você precisará executar este comando passando uma **string de conexão privilegiada**:

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll --ConnectionStrings:DefaultConnection="Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD" -- update-db
```

> [!TIP]
> No Linux, se sua senha contiver o caractere `!`, use aspas simples, por exemplo `--ConnectionStrings:DefaultConnection='...'`, para evitar
> expansões do histórico do shell

## Veja também

* [Utilitário de linha de comando do Amplia Reg](index.md)
* [Executando o Amplia Reg sem privilégios db_owner](../unprivileged-db-user.md)
