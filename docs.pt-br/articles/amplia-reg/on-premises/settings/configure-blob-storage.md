# Configuração de storage - Amplia Reg

A seção de configuração **BlobStorage** define como a aplicação armazena e recupera arquivos.

## Sistema de arquivos

Armazena arquivos no sistema de arquivos. Configurações disponíveis:

* **Path**: o caminho onde os arquivos serão armazenados.

Exemplo (variáveis de ambiente):

```bash
BlobStorage__Type=FileSystem
BlobStorage__Path=/var/files/myapp
```

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[BlobStorage]
Type=FileSystem
Path=/var/files/myapp
```

Exemplo (configuração JSON):

```json
{
	...,
	"BlobStorage": {
		"Type": "FileSystem",
		"Path": "/var/files/myapp"
	},
	...
}
```

## Azure Storage Account

Armazena arquivos em um container de Azure Storage Account. Configurações disponíveis:

* **ConnectionString**: a string de conexão da conta de armazenamento.
* **ContainerName**: o nome do container onde os arquivos serão armazenados.

Exemplo (variáveis de ambiente):

```bash
BlobStorage__Type=Azure
BlobStorage__ConnectionString=DefaultEndpointsProtocol=https;AccountName=myaccountname;AccountKey=myaccountkey;EndpointSuffix=core.windows.net
BlobStorage__ContainerName=myapp-container
```

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[BlobStorage]
Type=Azure
ConnectionString="DefaultEndpointsProtocol=https;AccountName=myaccountname;AccountKey=myaccountkey;EndpointSuffix=core.windows.net"
ContainerName=myapp-container
```

Exemplo (configuração JSON):

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

Armazena arquivos em um S3 Bucket. Configurações disponíveis:

* **Region**: a região do bucket.
* **BucketName**: o nome do bucket onde os arquivos serão armazenados.
* **AccessKey**: o ID da chave de acesso de um usuário IAM com acesso ao bucket.
* **SecretKey**: a chave de acesso secreta de um usuário IAM com acesso ao bucket.

Exemplo (variáveis de ambiente):

```bash
BlobStorage__Type=AwsS3
BlobStorage__Region=us-east-1
BlobStorage__BucketName=myappbucket
BlobStorage__AccessKey=MYACCESSKEYID
BlobStorage__SecretKey=MYSECRETACCESSKEY
```

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[BlobStorage]
Type=AwsS3
Region=us-east-1
BucketName=myappbucket
AccessKey=MYACCESSKEYID
SecretKey=MYSECRETACCESSKEY
```

Exemplo (configuração JSON):

```json
{
	...
	"BlobStorage": {
		"Type": "AwsS3",
		"Region": "us-east-1",
		"BucketName": "myappbucket",
		"AccessKey": "MYACCESSKEYID",
		"SecretKey": "MYSECRETACCESSKEY"
	},
	...
}
```

### Armazenamento de objetos compatível com S3

Um serviço de armazenamento de objetos compatível com S3 auto-hospedado, também conhecido como "clone do S3", também pode ser utilizado, por exemplo o [minIO](https://min.io/). Nesse caso, em vez da *Region*, especifique o **Endpoint**.

Exemplo (variáveis de ambiente):

```bash
BlobStorage__Type=AwsS3
BlobStorage__Endpoint=http://localhost:9000
BlobStorage__BucketName=myappbucket
BlobStorage__AccessKey=MYACCESSKEYID
BlobStorage__SecretKey=MYSECRETACCESSKEY
```

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[BlobStorage]
Type=AwsS3
Endpoint=http://localhost:9000
BucketName=myappbucket
AccessKey=MYACCESSKEYID
SecretKey=MYSECRETACCESSKEY
```

Exemplo (configuração JSON):

```json
{
	...
	"BlobStorage": {
		"Type": "AwsS3",
		"Endpoint": "http://localhost:9000",
		"BucketName": "myappbucket",
		"AccessKey": "MYACCESSKEYID",
		"SecretKey": "MYSECRETACCESSKEY"
	},
	...
}
```

Por padrão, o endereçamento no estilo de caminho é utilizado quando um armazenamento compatível com S3 é configurado, em vez do endereçamento padrão no estilo de host virtual usado com um bucket AWS S3 padrão. Isso pode ser alterado com a configuração **ForcePathStyle** (`true` ou `false`). Para mais informações sobre endereçamento S3, consulte [Virtual hosting of buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).

## Google Cloud Storage

Armazena arquivos em um bucket do Google Cloud Storage. Você precisará de uma conta de serviço com a função Storage Object Admin. Configurações disponíveis:

* **BucketName**: o nome do bucket onde os arquivos serão armazenados.
* **ProjectId**: o ID do projeto no Google Cloud.
* **PrivateKeyId**: o ID da chave privada da conta de serviço.
* **PrivateKey**: a chave privada da conta de serviço.
* **ClientEmail**: o e-mail da conta de serviço.

Exemplo (variáveis de ambiente):

```bash
BlobStorage__Type=Gcp
BlobStorage__BucketName=myappbucket
BlobStorage__ProjecId=my-app-project-id
BlobStorage__PrivateKeyId=MYPRIVATEKEYID
BlobStorage__PrivateKey=MYPRIVATEKEY
BlobStorage__ClientEmail=myserviceaccountemail@my-app-project-id.iam.gserviceaccount.com
```

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[BlobStorage]
Type=Gcp
BucketName=myappbucket
ProjecId=my-app-project-id
PrivateKeyId=MYPRIVATEKEYID
PrivateKey=MYPRIVATEKEY
ClientEmail=myserviceaccountemail@my-app-project-id.iam.gserviceaccount.com
```

Exemplo (configuração JSON):

```json
{
	...
	"BlobStorage": {
		"Type": "Gcp",
		"BucketName": "myappbucket",
		"ProjecId": "my-app-project-id",
		"PrivateKeyId": "MYPRIVATEKEYID",
		"PrivateKey": "MYPRIVATEKEY",
		"ClientEmail": "myserviceaccountemail@my-app-project-id.iam.gserviceaccount.com"
	},
	...
}
```
