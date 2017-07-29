# Using Rest PKI on PHP

We are still migrating the documentation to the new unified portal. For now, please[see this article on GitHub](https://github.com/LacunaSoftware/RestPkiSamples/tree/master/PHP)
## Earlier versions of PHP

This article refers to usage on PHP **5.5+**. For earlier versions, see articles:

* [PHP 5.3 and 5.4](legacy.md)
* [PHP 5.2](legacy52.md)

## Client lib

The client lib for PHP consists of the package [lacuna/restpki-client](https://packagist.org/packages/lacuna/restpki-client), which is compatible with PHP 5.5+
(for earlier PHP versions, see section below).

To add it to your project, put this on your `composer.json` file:

```json
{
	"require": {
		"lacuna/restpki-client": "^2.2.1"
	}
}
```

After that, do a `composer install` to download the package and its dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/)).

### Source code

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/RestPkiPhpClient)
