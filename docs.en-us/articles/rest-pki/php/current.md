# PHP 5.5+ samples project

The **PHP 5.5+ samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a project using **PHP 5.5+** (including 7.x). It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/PHP/standard

> [!NOTE]
> For projects targeting earlier PHP versions, [click here](index.md).

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [PHP/standard/util.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/standard/util.php#L10-L14)
1. In a command prompt, navigate to the folder `PHP/standard` and run the command `composer install` to download the dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/))
1. Setup a website on your local HTTP server pointing to the `PHP/standard` folder
1. Open the index.php file on the browser on the corresponding URL (depending on the previous step)
