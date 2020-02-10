# Amplia - Command-line tool

[On premises instances](../index.md) of [Amplia](../../index.md), provide a command-line tool that can be
used to perform certain administrative tasks.

## Running the command on Windows or Linux

Open a terminal and navigate into the installation directory, which depends on the installation plataform
(the actual directory could be different if you chose a custom directory during the setup):

* Windows Server: `cd C:\inetpub\Amplia`
* Linux: `cd /usr/share/amplia`

> [!NOTE]
> For Docker, see [section below](#docker)

Then, run:

```bash
dotnet Lacuna.Amplia.Site.dll [settings] -- command [command-options]
```

[!include[About settings](includes/about-settings.md)]

The `command-options` arguments depend on each command, see the command's specific documentation.

Available commands:

* [`update-db`](update-db.md)
* [`hash-root-pass`](hash-root-pass.md)

<a name="docker" />
## Running the command on Docker

Simply run:

```bash
docker run lacunasoftware/amplia:3.0.0 [settings] -- command [command-options]
```

## See also

* [Amplia on-premises](../index.md)
