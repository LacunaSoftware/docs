# Serilog Configuration

Defines one or multiple sinks to where the logs should be directed to.

## File

Provided by the [Serilog File Sink](https://github.com/serilog/serilog-sinks-file) package.

Example:

```sh
Serilog__WriteTo__0__Name=File
Serilog__WriteTo__0__Args__path=/var/logs/myapp.log
Serilog__WriteTo__0__Args__outputTemplate={Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}
```

## Azure Table Storage

Provided by the [Serilog.Sinks.AzureTableStorage](https://github.com/serilog/serilog-sinks-azuretablestorage) package.

Example:

```sh
Serilog__WriteTo__0__Name=AzureTableStorageWithProperties
Serilog__WriteTo__0__Args__storageTableName=MyAppLogTable
Serilog__WriteTo__0__Args__connectionString=DefaultEndpointsProtocol=https;AccountName=myaccountname;AccountKey=myaccountkey;EndpointSuffix=core.windows.net
Serilog__WriteTo__0__Args__keyGenerator=Lacuna.Spa.Engine.AzureTableKeyGenerator, Lacuna.Spa.Engine
```

* The **keyGenerator** parameter must be set as it is shown in the example (with value `Lacuna.Spa.Engine.AzureTableKeyGenerator, Lacuna.Spa.Engine`).

## Amazon S3

Provided by the [Serilog.Sinks.AmazonS3](https://github.com/SeppPenner/Serilog.Sinks.AmazonS3) package.

Example:

```sh
Serilog__WriteTo__0__Name=AmazonS3
Serilog__WriteTo__0__Args__path=myapplog.txt
Serilog__WriteTo__0__Args__bucketName=myappbucket
Serilog__WriteTo__0__Args__bucketPath=logs
Serilog__WriteTo__0__Args__serviceUrl=https://s3.us-east-1.amazonaws.com
Serilog__WriteTo__0__Args__awsAccessKeyId=MYACCESSKEYID
Serilog__WriteTo__0__Args__awsSecretAccessKey=MYSECRETACCESSKEY
Serilog__WriteTo__0__Args__autoUploadEvents=true
```

## New Relic Logs

Provided by the [serilog-sinks-newrelic-logs](https://github.com/ThiagoBarradas/serilog-sinks-newrelic-logs) package.

Example:

```sh
Serilog__Enrich__3=WithNewRelicLogsInContext
Serilog__WriteTo__0__Name=NewRelicLogs
Serilog__WriteTo__0__Args__applicationName=myappname
Serilog__WriteTo__0__Args__licenseKey=MYLICENSE
```