# Comando do Amplia Reg: **migrate-data**

## Nome

`migrate-data` - Migra dados da aplicação para corresponder a uma nova versão do esquema

## Sintaxe

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- migrate-data --to <to-version>
```

Ou, no Docker:

```sh
docker run -i lacunasoftware/ampliareg:x.y.z [settings] -- migrate-data --to <to-version>
```

> [!IMPORTANT]
> Substitua `x.y.z` acima pela versão indicada no procedimento de atualização

[!include[About settings](includes/about-settings.md)]

Opções:

* `--batchsize <batch-size>`: número de registros a atualizar por iteração. Padrão: 100

## Descrição

O comando `migrate-data` agenda um job em segundo plano para atualizar os dados conforme a versão alvo do esquema fornecida.

Após executar o comando, siga os passos abaixo para monitorar o job de atualização:

1. Autentique-se na sua instância do Amplia Reg
1. Clique no seu nome no canto superior direito, em seguida em **Hangfire**
1. Clique em **Jobs** no menu superior
1. Procure o job chamado `IDataMigrationJob.RunAsync` na lista de jobs **Processing**
1. Aguarde até que o job transite para a lista de jobs **Succeeded**
1. Verifique os logs da aplicação para verificar se ocorreu algum erro

## Veja também

* [Utilitário de linha de comando do Amplia Reg](index.md)
