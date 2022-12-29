# CRL Propagation - Amplia

> [!NOTE]
> This article is under construction. Sorry for the inconvenience.

Example (*.ini* or *.conf* configuration file):

```ini
[Amplia]
CrlPropagationBlobServices=AzureCrls,AwsCrls
CACertPropagationBlobServices=AzureCerts,AwsCerts

[BlobStorage:AzureCrls]
Type=Azure
ConnectionString=...
ContainerName=crls

[BlobStorage:AzureCerts]
Type=Azure
ConnectionString=...
ContainerName=certs

[BlobStorage:AwsCrls]
Type=AwsS3
Region=us-east-1
AccessKey=...
SecretKey=...
BucketName=crls

[BlobStorage:AwsCerts]
Type=AwsS3
Region=us-east-1
AccessKey=...
SecretKey=...
BucketName=certs
```

Example (environment variables):

```sh
Amplia__CrlPropagationBlobServices=AzureCrls,AwsCrls
Amplia__CACertPropagationBlobServices=AzureCerts,AwsCerts

BlobStorage__AzureCrls__Type=Azure
BlobStorage__AzureCrls__ConnectionString=...
BlobStorage__AzureCrls__ContainerName=crls

BlobStorage__AzureCerts__Type=Azure
BlobStorage__AzureCerts__ConnectionString=...
BlobStorage__AzureCerts__ContainerName=certs

BlobStorage__AwsCrls__Type=AwsS3
BlobStorage__AwsCrls__Region=us-east-1
BlobStorage__AwsCrls__AccessKey=...
BlobStorage__AwsCrls__SecretKey=...
BlobStorage__AwsCrls__BucketName=crls

BlobStorage__AwsCerts__Type=AwsS3
BlobStorage__AwsCerts__Region=us-east-1
BlobStorage__AwsCerts__AccessKey=...
BlobStorage__AwsCerts__SecretKey=...
BlobStorage__AwsCerts__BucketName=certs
```

Example (*.json* configuration file):

```json
	...
	"Amplia": {
		"CrlPropagationBlobServices": "AzureCrls,AwsCrls",
		"CACertPropagationBlobServices": "AzureCerts,AwsCerts",
		...
	},
	"BlobStorage": {
		"AzureCrls": {
			"Type": "Azure",
			"ConnectionString": "...",
			"ContainerName": "crls"
		},
		"AzureCerts": {
			"Type": "Azure",
			"ConnectionString": "...",
			"ContainerName": "certs"
		},
		"AwsCrls": {
			"Type": "AwsS3",
			"Region": "us-east-1",
			"AccessKey": "...",
			"SecretKey": "...",
			"ContainerName": "crls"
		},
		"AwsCerts": {
			"Type": "AwsS3",
			"Region": "us-east-1",
			"AccessKey": "...",
			"SecretKey": "...",
			"ContainerName": "certs"
		}
	},
	...
```
