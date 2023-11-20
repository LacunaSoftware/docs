# Rest PKI Core - Checking the system logs (Azure App Services)

The standard location on table of the system log is `AppLogs` of **Azure Storage** account, created for the system on the installation moment.

To check which account and table are being used, go to **App Services** &gt; (select the app service) &gt; **Configuration** and check the value of the settings `Serilog:WriteTo:0:Args:connectionString` and `Serilog:WriteTo:0:Args:storageTableName`.

> [!NOTE]
> Some errors, usually those that occur during system startup, may not be logged in the system log file.
> To diagnose such errors, see [Troubleshooting startup errors](startup-errors.md).