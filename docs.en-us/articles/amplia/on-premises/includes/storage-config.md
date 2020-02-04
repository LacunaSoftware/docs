### File storage

In order to keep the database tidy, Amplia stores files outside of the database. Files may be stored in different *providers*.

The section **Storage** configures the file storage. The setting **Type** defines which provider should be used, and the remaining settings depend on the provider chosen:

* File system
  * **Type**: set this setting to `FileSystem` to store files on the local file system
  * **Path**: set the path of the folder on which to store files. Make sure the application has access to the folder
* [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
  * **Type**: set this setting to `Azure` to store files on an Azure Storage account
  * **ConnectionString**: provide a connection string to the account
  * **ContainerName**: the name of the blob container on which to store files <!-- TODO: Azure container name restrictions -->
* Amazon S3 (coming soon, contact us if you need it)
