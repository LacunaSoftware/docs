# Using Rest PKI on PHP

Rest PKI can be used on PHP applications using a wide range of PHP versions.
To get started, choose one of the available samples projects:

* [PHP 5.5+](current.md) (including PHP 7.x)
* [PHP 5.3/5.4](legacy.md)
* [PHP 5.2](legacy52.md)

## Client libraries

The usage of Rest PKI on PHP applications depends on the PHP version. See the section below corresponding to your case.

### For PHP 5.5+

To use Rest PKI on PHP 5.5+ (including 7.x), you should use the composer package [lacuna/restpki-client](https://packagist.org/packages/lacuna/restpki-client).

To add it to your project, put this on your `composer.json` file:

```json
{
	"require": {
		"lacuna/restpki-client": "^2.3.1"
	}
}
```

After that, do a `composer install` to download the package and its dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/)).

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/RestPkiPhpClient). Feel free to fork
it if you need to make any customizations.

### For PHP 5.3 and 5.4

To use Rest PKI on PHP 5.3 and 5.4, you should use the compoeser package [lacuna/restpki-client-legacy](https://packagist.org/packages/lacuna/restpki-client-legacy).

To add it to your project, put this on your `composer.json` file:

```json
{
    "require": {
        "lacuna/restpki-client-legacy": "^1.0.0"
    }
}
```

After that, do a `composer install` to download the package and its dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/)).

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/RestPkiPhpClientLegacy). Feel free to fork
it if you need to make any customizations.

### For PHP 5.2

To use Rest PKI on PHP 5.2, use the file [RestPkiLegacy52.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/RestPkiLegacy52.php). It requires the
package [educoder/pest](https://packagist.org/packages/educoder/pest), which needs to be added to your `composer.json`:

```json
{
    "require": {
        "educoder/pest": "1.0.0"
    }
}
```

After that, do a `composer install` to download the package and its dependencies (if you don't have Composer installed, get it [here](https://getcomposer.org/)).

