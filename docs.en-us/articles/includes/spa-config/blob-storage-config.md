# Blob Storage Configuration

The **BlobStorage** configuration section defines how an application stores and retrieves files.

## File System

Stores files in the file system. Available settings:

* **Path**: the path to where the files will be stored.

Example (environment variables):

```bash
BlobStorage__Type=FileSystem
BlobStorage__Path=/var/files/myapp
```

Example (*.ini* or *.conf* file):

```ini
[BlobStorage]
Type=FileSystem
Path=/var/files/myapp
```

Example (JSON configuration):

```json
{
	...,
	"BlobStorage": {
		"Type": "FileSystem"
		"Path": "/var/files/myapp"
	},
	...
}
```

## Azure Storage Account

Stores files in an Azure Storage Account Container. Available settings:

* **ConnectionString**: the connection string for the Storage account.
* **ContainerName**: the name of the container where the files will be stored.

Example (environment variables):

```bash
BlobStorage__Type=Azure
BlobStorage__ConnectionString=DefaultEndpointsProtocol=https;AccountName=myaccountname;AccountKey=myaccountkey;EndpointSuffix=core.windows.net
BlobStorage__ContainerName=myapp-container
```

Example (*.ini* or *.conf* file):

```ini
[BlobStorage]
Type=Azure
ConnectionString="DefaultEndpointsProtocol=https;AccountName=myaccountname;AccountKey=myaccountkey;EndpointSuffix=core.windows.net"
ContainerName=myapp-container
```

Example (JSON configuration):

```json
{
	...
	"BlobStorage": {
		"Type": "Azure",
		"ConnectionString": "DefaultEndpointsProtocol=https;AccountName=myaccountname;AccountKey=myaccountkey;EndpointSuffix=core.windows.net",
		"ContainerName": "myapp-container"
	},
	...
}
```

## AWS S3 (Simple Storage Service)

Stores files in an S3 Bucket. Available settings:

* **BucketName**: the name of the Bucket where the files will be stored.
* **Region**: the region of the bucket.
* **AccessKey**: the access key ID of an IAM user that has access to the bucket. 
* **SecretKey**: the secret access key of an IAM user that has access to the bucket. 

Example (environment variables):

```bash
BlobStorage__Type=AwsS3
BlobStorage__BucketName=myappbucket
BlobStorage__Region=us-east-1
BlobStorage__AccessKey=MYACCESSKEYID
BlobStorage__SecretKey=MYSECRETACCESSKEY
```

Example (*.ini* or *.conf* file):

```ini
[BlobStorage]
Type=AwsS3
BucketName=myappbucket
Region=us-east-1
AccessKey=MYACCESSKEYID
SecretKey=MYSECRETACCESSKEY
```

Example (JSON configuration):

```json
{
	...
	"BlobStorage": {
		"Type": "AwsS3",
		"BucketName": "myappbucket",
		"Region": "us-east-1",
		"AccessKey": "MYACCESSKEYID",
		"SecretKey": "MYSECRETACCESSKEY"
	},
	...
}
```
