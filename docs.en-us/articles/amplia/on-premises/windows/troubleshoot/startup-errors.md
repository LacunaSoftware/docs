# Troubleshooting startup errors (Windows Server)

Some errors that occur during application startup prevent Amplia's logging framework from working. In such cases, attempt one of the
solutions below to diagnose the problem.

## 1. Application Event Log

1. Open the Start menu, search for **Event Viewer**, and then select the **Event Viewer** app.
1. In **Event Viewer**, open the **Windows Logs** node.
1. Select **Application** to open the Application Event Log.
1. Search for errors associated with the failing app. Errors have a value of *IIS AspNetCore Module* or *IIS Express AspNetCore Module* in the *Source* column.

## 2. Enable the ASP.NET Core stdout log

> [!IMPORTANT]
> Disable stdout logging when troubleshooting is complete.

To enable ASP.NET Core stdout log:

1. Navigate to the site's deployment folder on the hosting system.
1. If the *logs* folder isn't present, create the folder.
1. Edit the *web.config* file. Set **stdoutLogEnabled** to `true` and change the **stdoutLogFile** path to point to the *logs* folder (for example, `.\logs\stdout`). `stdout` in the path is the log file name prefix. A timestamp, process id, and file extension are added automatically when the log is created. Using `stdout` as the file name prefix, a typical log file is named *stdout_20180205184032_5412.log*.
1. Ensure your application pool's identity has write permissions to the *logs* folder.
1. Save the updated *web.config* file.
1. Make a request to the app.
1. Navigate to the *logs* folder. Find and open the most recent stdout log.
1. Study the log for errors.

To disable it after troubleshooting is complete:

1. Edit the *web.config* file.
1. Set **stdoutLogEnabled** to `false`.
1. Save the file.

> [!WARNING]
> Failure to disable the stdout log can lead to app or server failure. There's no limit on log file size or the number of log files created.

## See also

* [Troubleshoot ASP.NET Core on IIS](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/troubleshoot?view=aspnetcore-2.2)
