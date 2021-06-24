# PKI Express Configuration

You can manage the following settings:

* [Logging](log.md)
* [Temporary directory](temp-dir.md)
* [Proxy](proxy.md)
* [LAPP Integration](lapp.md)
* [Azure Integration](azure.md)
* [Trust Services](trust-services.md)

The configuration of PKI Express is managed with the command `pkie config`. To learn more about this command, read on.

## Command *pkie config*

To view the command syntax:

```sh
pkie help config
```

To view the current configuration:

```sh
pkie config
```

To set a configuration:

```sh
pkie config --set name=value
```

For instance:

```sh
pkie config --set logLevel=3
```

## Effective configuration

PKI Express may ignore a configuration value because it is invalid. For instance, if you set
the `tempDir` configuration to an invalid path or to a directory which is not writeable,
PKI Express will use the temporary directory from the `TEMP` environment variable instead.
This is called the *effective* value of a configuration, that is, the configuration that
PKI Express is actually using, which might differ from the configuration that was set
manually.

When trying to diagnose configuration problems, it may be useful to view the effective
configuration of PKI Express:

```sh
pkie config --effective
```
