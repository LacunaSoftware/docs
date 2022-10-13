```php
$authority = new TimestampAuthority("https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310");
$authority->setOAuthTokenAuthentication('<place_your_access_token>');
$operator->timestampAuthority = $authority;
```
