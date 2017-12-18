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

* **Verbose** - tracing information and debugging minutiae; generally only switched on in unusual situations
* **Debug** - internal control flow and diagnostic state dumps to facilitate pinpointing of recognised problems
* **Information** - events of interest or that have relevance to outside observers
* **Warning** - indicators of possible issues or service/functionality degradation **(default)**
* **Error** - indicating a failure within the application or connected system
* **Fatal** - critical errors causing complete failure of the application

The minimum log level defines the minimum severity which is written to the log file. The default minimum log level
for PKI Express is **Warning**.

To change the minimum log level:

```sh
pkie config --set logLevel=LEVEL
```

For instance, to change the minimum level to Information:

```sh
pkie config --set logLevel=Information
```

You can also use the following integers as the value of the configuration:

* 0 = Verbose
* 1 = Debug
* 2 = Information
* 3 = Warning
* 4 = Error
* 5 = Fatal

For instance, to change the minimum level to Information:

```sh
pkie config --set logLevel=2
```
