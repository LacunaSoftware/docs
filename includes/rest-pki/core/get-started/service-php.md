```php
use Lacuna\RestPki\RestPkiOptions;
use Lacuna\RestPki\RestPkiCoreClient;
use Lacuna\RestPki\RestPkiService;

$options = new RestPkiOptions('RestPkiEndpoint', 'RestPkiApiKey');
$client = new RestPkiCoreClient($options);
$service = new RestPkiService($client);
```