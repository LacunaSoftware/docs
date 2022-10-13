```php
// Performing a PAdES signature with timestamp
function configureTimestamp($operator) {
    $authority = new TimestampAuthority("https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310");
    $authority->setOAuthTokenAuthentication('<place_your_access_token>');
    $operator->timestampAuthority = $authority;
}


// Starting signature
$signatureStarter = new PadesSignatureStarter();
configureTimestamp($signatureStarter);
$signatureStarter->signaturePolicy(StandardSignaturePolicies::PADES_T); // A policy that requires timestamp
...
$signatureStarter->start();


// Completing signature
$signatureFinisher = new SignatureFinisher();
configureTimestamp($signatureFinisher);
...
$signatureFinisher->complete();
```
