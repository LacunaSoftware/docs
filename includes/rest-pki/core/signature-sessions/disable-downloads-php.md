```php
$request = new CreateSignatureSessionRequest();
$request->returnUrl = "http://localhost:8080/session-callback";
$request->disableDownloads = true;

$response = $service->createSignatureSession($request);

header("Location: {$response->redirectUrl}");
```