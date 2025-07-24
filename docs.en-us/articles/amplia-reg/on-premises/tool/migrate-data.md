# Amplia Reg command: **migrate-data**

## Name

`migrate-data` - Migrates application data to match a new schema version

## Syntax

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- migrate-data --to <to-version>
```

Or, on Docker:

```sh
docker run -i lacunasoftware/ampliareg:4.0 [settings] -- migrate-data --to <to-version>
```

[!include[About settings](includes/about-settings.md)]

Options:

* `--batchsize <batch-size>`: Number of records to update per iteration. Default: 100

## Description

The `migrate-data` command schedules a background job to update data to conform to the given target schema version.

After running the command, follow the steps below to monitor the update job:

1. Sign-in to your Amplia Reg instance
1. Click on your name on the top right corner, then on **Hangfire**
1. Click on **Jobs** on the top menu
1. Look for the job named `IDataMigrationJob.RunAsync` on the **Processing** job list
1. Wait until the job transitions to the **Succeeded** job list
1. Check the application logs to see if any error occurred

## See also

* [Amplia Reg command-line tool](index.md)
