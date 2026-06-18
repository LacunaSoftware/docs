# Troubleshooting startup errors (Azure App Services)

Upon starting up your [on-premises instance](../../index.md) of [Rest PKI Core](../../../index.md) hosted on [Azure App Services](../index.md), you might encounter one
of the following errors:

* *HTTP Error 500.30 - ANCM In-Process Start Failure*
* *HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure*

In either case, follow the steps below to enable the startup logs.

## Enabling startup logs

Access the App Service's files through FTP, navigate to the folder */site/wwwroot* and and copy the *web.config* file over to your computer.

Then, change the `aspNetCore` element, setting the `stdoutLogEnabled` attribute to `true`.

For instance, suppose the `aspNetCore` element is initially as follows:

```xml
<aspNetCore processPath="dotnet" arguments=".\Lacuna.RestPki.Site.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout" hostingModel="inprocess" />
```

After changing the `stdoutLogEnabled` attribute to `true`, it would then look like:

```xml
<aspNetCore processPath="dotnet" arguments=".\Lacuna.RestPki.Site.dll" stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" hostingModel="inprocess" />
```

Also confirm that the attribute `stdoutLogFile` has the value `.\logs\stdout` as above.

Copy the *web.config* file back to the App Service's folder */site/wwwroot*, replacing the old file.

Wait a few seconds and attempt to access the site again, then refresh the App Service's files on your FTP access. There should be a new folder called *logs*. Navigate
into it and inspect the files. They should reveal the cause of the error.

> [!WARNING]
> Remember to set the `stdoutLogEnabled` attribute back to `false` once your diagnostic is complete, since this will generate a large amount of log data and might
> impair performance.

## See also

* [Troubleshooting issues on your Rest PKI Core instance](index.md)
