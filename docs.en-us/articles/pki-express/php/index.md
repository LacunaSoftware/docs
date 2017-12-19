# Using PKI Express on PHP

This article describes how to use [PKI Express](../index.md) on PHP

## Sample project

The sample project shows the usage of PKI Express together with the [Web PKI](../../web-pki/index.md) browser component
on a **PHP 5.5+** project (including 7.x). It is hosted on GitHub:

https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/PHP

> [!NOTE]
> If you are using a previous version of PHP, please [contact us](https://www.lacunasoftware.com/en/home/purchase).

### Running the project

1. [Install PKI Express](../setup/index.md)
1. [Download the project](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiExpressSamples.git)
1. In a command prompt, navigate to the folder `PHP` and run the command `composer install` to download the dependencies
   (if you don't have Composer installed, get it [here](https://getcomposer.org/))
1. Setup a website on your local HTTP server pointing to the `PHP` folder
1. Open the index.php file on the browser on the corresponding URL (depending on the previous step)

## Composer package

In order to use PKI Express on PHP you must include the composer package [lacuna/pki-express](https://packagist.org/packages/lacuna/pki-express)

To add it to your project, add the line below to your `composer.json` file:

```json
{
	"require": {
		"lacuna/pki-express": "^1.1.0"
	}
}
```

After that, do a `composer install`  to download the package and its dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/)).

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/PkiExpressPhp). Feel free to fork it if you need to make any customizations.
