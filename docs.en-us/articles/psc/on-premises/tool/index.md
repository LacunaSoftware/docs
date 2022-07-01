# Lacuna PSC - Command-line tool

[On-premises instances](../index.md) of [Lacuna PSC](../../index.md) provide a command-line tool that can be
used to perform certain administrative tasks.

## Running a command

Open a terminal and navigate into the installation directory, which depends on the installation plataform
(the actual directory could be different if you chose a custom directory during the setup):

* Windows Server: `cd C:\inetpub\LacunaPsc`
* Linux: `cd /usr/share/lacuna-psc`

Then, run:

```sh
dotnet Lacuna.Psc.Site.dll [settings] -- command [command-options]
```

Or, on Docker, simply run the following on any directory:

```sh
docker run -i lacunasoftware/psc:1.0 [settings] -- command [command-options]
```

[!include[About settings](includes/about-settings.md)]

The `command-options` arguments depend on each command, see the command's specific documentation.

Available commands:

* [gen-enc-key](gen-enc-key.md)
* [hash-root-pass](hash-root-pass.md)
* [update-db](update-db.md)
* [test-email](test-email.md)

## See also

* [Lacuna PSC on-premises](../index.md)
