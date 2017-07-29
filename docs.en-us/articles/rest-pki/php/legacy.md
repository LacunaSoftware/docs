# Using Rest PKI on PHP 5.3 and 5.4

We are still migrating the documentation to the new unified portal. For now, please[see this article on GitHub](https://github.com/LacunaSoftware/RestPkiSamples/tree/master/PHP#legacy-sample-for-php-53-and-54)## Client libFor PHP 5.3 and 5.4, use the file [RestPkiLegacy.php](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/PHP/legacy/RestPkiLegacy.php). It requires the
package [nategood/httpful](https://packagist.org/packages/nategood/httpful), which needs to be added to your `composer.json`:

```json
{
    "require": {
        "nategood/httpful": "*"
    }
}
```
