```php
$metadata = [
	"organization" => "Patorum Inc.",
	"priority" => "10"
];

// Multi-valued metadata also supported
$metadata["categories"] = ["Document", "Forms"];

$request = new CreateSignatureSessionRequest();
...
$request->documentMetadata = $metadata;
```
