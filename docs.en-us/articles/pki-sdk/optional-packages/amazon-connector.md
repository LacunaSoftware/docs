# Amazon Connector

The optional package [Lacuna PKI Amazon Connector](https://www.nuget.org/packages/Lacuna.Pki.AmazonConnector/) enables
the following integrations between the PKI SDK and Amazon Web Services:

* Compress and decompress CAdES signatures storing the CRLs and certificates in
  an AWS S3 bucket
* Perform and validate CAdES signatures with revocation references but without
  revocation values (CAdES-X Type 1 or ICP-Brasil AD-RV) by storing the
  correspondent values in an AWS S3 bucket

## AWS Credentials

The first thing you'll need is to create an AWS S3 account (obviously)
and get access credentials. If haven't already done that, the following links
can guide you through the process:

* [Getting Your Access Key ID and Secret Access Key](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html)
* [Managing Access Keys for your AWS Account](http://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html)

By the end of that process you should have the following parameters:

* Access Key ID
* Secret Access Key
* Bucket name
* Bucket region

## AmazonS3Store

The @Lacuna.Pki.AmazonConnector.AmazonS3Store class implements the @Lacuna.Pki.Stores.ISimpleStore interface, which
is used by the SDK whenever a storage is needed to store and/or retrieve objects, for instance when compressing CAdES
signatures (for more information, see [Optional nuget packages](index.md)).

To use it, instantiate it passing the parameters mentioned in the previous section:

```cs
var store = AmazonS3Store.CreateFromAccessCredentials(accessKeyId, awsSecretAccessKey, RegionEndpoint.USEast1, bucketName);
```

You can optionally specify a `basePath`, which is a folder to store the objects:

```cs
var store = AmazonS3Store.CreateFromAccessCredentials(accessKeyId, awsSecretAccessKey, RegionEndpoint.USEast1, bucketName, "lacuna-pki-store");
```

That would prefix all keys with `lacuna-pki-store/`. If you don't specify a `basePath`, the objects will be created on
the root of the bucket.

Once you have an instance of the `AmazonS3Store` class you can, for instance, compress and decompress a CAdES
signature:

```cs
byte[] precomputedSignature = ...; // any CAdES signature, not necessarily generated with the SDK
var compressedSignature = CadesSignatureCompression.Compress(precomputedSignature, store);
var decompressedSignature = CadesSignatureCompression.Decompress(compressedSignature, store);
// precomputedSignature and decompressedSignature will be the same
```

## Dependency on the AWS SDK for .NET

In order to maximise compatibility, the package depends on an old version of the **AWSSDK** package, but we strongly
recommend that you install the latest version.

## Source code

The package is open source, hosted on [BitBucket](https://bitbucket.org/Lacunas/pkiamazonconnector). Feel free to fork
it if you need to make any customizations.
