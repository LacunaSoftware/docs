```php
$sessionId = $_GET['signatureSessionId'];

$session = $session->getSignatureSession($sessionId);
if ($session->status != SignatureSessionStatus::COMPLETED && $session->status != SignatureSessionStatus::PROCESSING) {
	header("Location: http://localhost:8000/");
}
```