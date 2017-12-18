# PKI Express Logging

This article describes how to configure the location on which PKI Express writes its log
files and the minimum log level under which logs are ignored.

## Log directory

By default, PKI Express writes logs to:

* On Windows: `%TEMP%\pkie-<username>`
* On Linux: `/var/log/pkie`

The log file name is `<username>.log`, or a slight variation if log file rolling kicks in (log files are limited to 4MB each and at most 64 files are kept).

To change the log directory:

```
pkie config --set logDir=path
```

The directory should be writeable by your user and also by the user used to run the web application (on Linux, this usually is the `www-data` user).

## Minimum level

Logs are categorized in an increasing level of severity:

1. **Verbose** - tracing information and debugging minutiae; generally only switched on in unusual situations
1. **Debug** - internal control flow and diagnostic state dumps to facilitate pinpointing of recognised problems
1. **Information** - events of interest or that have relevance to outside observers
1. **Warning** - indicators of possible issues or service/functionality degradation **(default)**
1. **Error** - indicating a failure within the application or connected system
1. **Fatal** - critical errors causing complete failure of the application

The minimum log level defines the minimum severity which is written to the log file. The default minimum log level
for PKI Express is **Warning**.

To change the minimum log level:

```sh
pkie config --set logLevel=LEVEL
```

The `LEVEL` above may be the level name or number. For instance, to change the minimum level to Information:

```sh
pkie config --set logLevel=Information
```

or

```sh
pkie config --set logLevel=3
```
