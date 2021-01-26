```php
$request = new CreateSignatureSessionRequest();
$request->enableBackgroundProcessing = true;

$response = $service->createSignatureSession($request);

header("Location: {$response->redirectUrl}");
```