# Rest PKI client lib for PHP

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

## Source code

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/RestPkiPhpClient)

## Earlier versions of PHP

We also support PHP versions 5.2, 5.3 and 5.4.

### PHP 5.3 and 5.4

For PHP 5.3 and 5.4, use the file [RestPkiLegacy.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy/RestPkiLegacy.php). It requires the
package [nategood/httpful](nategood/httpful), which needs to be added to your `composer.json`:

```json
{
    "require": {
        "nategood/httpful": "*"
    }
}
```

### PHP 5.2

For PHP 5.2, use the file [RestPkiLegacy52.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy52/RestPkiLegacy52.php). It requires the
package [educoder/pest](https://packagist.org/packages/educoder/pest), which needs to be added to your `composer.json`:

```json
{
    "require": {
        "educoder/pest": "1.0.0"
    }
}
```
