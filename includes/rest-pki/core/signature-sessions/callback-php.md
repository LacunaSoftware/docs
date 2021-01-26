```php
$sessionId = $_GET['signatureSessionId'];

$session = $session->getSignatureSession($sessionId);
if ($session->status != SignatureSessionStatus::COMPLETED) {
	header("Location: http://localhost:8000/");
}
```