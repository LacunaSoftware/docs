```php
$request = new CreateSignatureSessionRequest();
$request->returnUrl = null;
$request->enableBackgroundProcessing = true;

$response = $service->createSignatureSession($request);

header("Location: {$response->redirectUrl}");
```