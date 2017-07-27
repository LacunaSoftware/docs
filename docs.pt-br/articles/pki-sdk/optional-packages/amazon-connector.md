# Amazon Connector

O pacote opcional [Lacuna PKI Amazon Connector](https://www.nuget.org/packages/Lacuna.Pki.AmazonConnector/) possibilita
as seguintes integrações entre o SDK e o Amazon Web Services (AWS):

* Compressão e descompressão de assinaturas CAdES armazenando as LCRs e certificados em um bucket do Amazon S3
* Criação e validação de assinaturas CAdES com referência de revogação porém sem valores de revogação armazenando os valores em um bucket do Amazon S3

## Credenciais do AWS

A primeira coisa que você precisará é criar uma conta no AWS S3 e obter credenciais de acesso. Se você ainda não tiver
feito isso, os links abaixo podem auxiliá-lo nesse processo:

* [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html)
* [Managing Access Keys for your AWS Account](http://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html)

Ao final desse processo, você deve ter os seguintes parâmetros:

* Access Key ID
* Secret Access Key
* Bucket name
* Bucket region

## Utilizando o armazenamento no Amazon S3

A classe @Lacuna.Pki.AmazonConnector.AmazonS3Store, incluída no pacote opcional, implementa a interface
@Lacuna.Pki.Stores.ISimpleStore, utilizada pelo SDK quando um storage externo é necessário (para mais informações, veja
[Pacotes nuget opcionais](index.md)).

Para usá-la, basta instanciá-la com os parâmetros mencionados na seção anterior:

```cs
var store = AmazonS3Store.CreateFromAccessCredentials(accessKeyId, awsSecretAccessKey, RegionEndpoint.USEast1, bucketName);
```

Você pode opcionalmente especificar um basePath, uma pasta dentro do bucket na qual armazenar os objetos:

```cs
var store = AmazonS3Store.CreateFromAccessCredentials(accessKeyId, awsSecretAccessKey, RegionEndpoint.USEast1, bucketName, "lacuna-pki-store");
```

Isso adicionaria o prefixo `lacuna-pki-store/` a todas as chaves de objetos. Se não for especificado um `basePath`, os
objetos serão criados na raiz do bucket.

Tendo uma instância da classe `AmazonS3Store` associada à sua conta do Amazon S3, você pode utilizá-la em qualquer
lugar que o SDK exija um `ISimpleStore`, por exemplo para comprimir e descomprimir assinaturas CAdES:

```cs
byte[] precomputedSignature = ...; // qualquer assinatura CAdES, não necessariamente feita com o SDK
var compressedSignature = CadesSignatureCompression.Compress(precomputedSignature, store);
var decompressedSignature = CadesSignatureCompression.Decompress(compressedSignature, store);
```

## Dependência do pacote AWS SDK for .NET

Para maximizar a compatibilidade, o pacote Lacuna PKI Amazon Connector depende de uma versão antiga do pacote
**AWSSDK**. Entretanto, recomendamos fortemente que seja utilizado versão mais atual do pacote.

## Código-fonte

O código-fonte do pacote Lacuna PKI Amazon Connector é aberto, ficando hospedado no
[BitBucket](https://bitbucket.org/Lacunas/pkiamazonconnector). Caso queira customizá-lo, você pode fazer um fork do
projeto e utilizar a sua versão customizada ao invés do pacote opcional.
