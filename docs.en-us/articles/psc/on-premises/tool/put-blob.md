# Lacuna PSC command: **put-blob**

## Name

`put-blob` - copies a file to the configured Blob Storage

## Syntax

This command can be used for copying a single file or multiple files.

> [!WARNING]
> If there are existing files in the Blob Storage with the same name as the files copied they will be overwritten.

### Single file

```sh
dotnet Lacuna.Psc.Site.dll [settings] -- put-blob <local file path> <blob storage folder> [<blob name>]
```

Or, on Docker:

```sh
docker run -i lacunasoftware/psc:1.2 [settings] -- put-blob <local file path> <blob storage folder> [<blob name>]
```

The blob name parameter is optional and, if not specified, will preserve the original file name.

### Multiple files

```sh
dotnet Lacuna.Psc.Site.dll [settings] -- put-blob -t <blob storage folder> <local file 1 path> <local file 2 path> ...
```

Or, on Docker:

```sh
docker run -i lacunasoftware/psc:1.2 [settings] -- put-blob -t <blob storage folder> <local file 1 path> <local file 2 path> ...
```

Usage of wildcards when specifying local file paths is supported. Example:

```sh
put-blob -t assets /usr/temp/*.pdf
```

* Moves all PDF files inside the `/usr/temp` directory to the `assets` Blob Storage folder.


[!include[About settings](includes/about-settings.md)]

## See also

* [Lacuna PSC command-line tool](index.md)
