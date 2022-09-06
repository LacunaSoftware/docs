# Trusting in custom certificates

By default, PKI Express will only allow operations performed by valid Brazilian certificates emmited by ICP-Brasil organization. However, if you want to use another kind of the certificate, it's required to configure the [PkiExpressOperator](https://github.com/LacunaSoftware/PkiExpressPhp/blob/develop/src/PkiExpressOperator.php) class or **any class that inherits from it**.

## Using Lacuna's testing certificates
In case you are testing your aplication using our mock certificates (see [link](https://docs.lacunasoftware.com/articles/pki-guide/test-certs.html)), you have to set the `trustLacunaTestRoot` field to `true` to trust in these certificates: 

```php
$operator->trustLacunaTestRoot = true;
```

<!-- ## Using certificates emitted by Amplia
In case you are using a certificate emitted by [Amplia](https://docs.lacunasoftware.com/articles/amplia/index.html), you need to download the certificate root from [Amplia portal](https://amplia.lacunasoftware.com) and configure the operator in your aplication with the path of the root file.

TODO explain how get from Amplia

After downloading the certificate root file (`.cer` file), you need to provide the path to the file for it to be trusted by operator class:

```php
$operator->addTrustedRoot('/path/to/amplia-root.cer');
``` -->

## Using a custom certificate
In case you are using other kinds of certificates, you need to provide each certificate roots for the operator class.

```php
$operator->addTrustedRoot('/path/to/root1.cer');
$operator->addTrustedRoot('/path/to/root2.cer');
$operator->addTrustedRoot('/path/to/root3.cer');
```