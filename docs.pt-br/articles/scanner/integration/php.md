# Guia de Integração em PHP

Para integrar a sua aplicação web em PHP ao [Lacuna Scanner Service](../index.md), siga os passos descritos neste artigo.

[!include[See overview](includes/see-overview.md)]

Primeiramente, adicione o pacote [lacuna/scanner-client](https://packagist.org/packages/lacuna/scanner-client) ao seu projeto.

De posse do **endpoint** e da **API Key**, instancie um `ScannerClient`:

```php
$options = new ScannerOptions();
$options->endpoint = '...';
$options->apiKey = '...';
$scanner = new ScannerClient($options);
```

Utilize o método `createScanSession($returnUrl)` passando o **returnUrl** para iniciar uma sessão:

```php
$createResponse = $scanner->createScanSession("https://your-return-url/");
```

Utilize o valor retornado no campo `redirectUrl` para redirecionar o usuário no frontend:

```js
location.href = '<?= $createResponse->redirectUrl ?>';
```

Quando detectar que o usuário voltou ao seu site (procure pelo argumento `scanSessionId` na URL), utilize o método `getScanSession($scanSessionId)` para obter os documentos digitalizados:

```php
$scanSession = $scanner->getScanSession($scanSessionId);
if ($scanSession->result == ScanSessionResults::SUCCESS) {
    $document = $scanSession->documents[0];
    
    $stream = $document->openRead();
    file_put_contents('...', $stream);
    $stream->close();
}
```

## Sessões *multifile*

Você pode permitir que o usuário digitalize múltiplos documentos. Para isso, passe o segundo parâmetro `multifile` como `true` ao criar a sessão:

```php
$response = $scanner->createScanSession("https://your-return-url/", true);
```

Ao final do processo, ao invés de levar em consideração apenas o primeiro documento, itere a lista de documentos digitalizados:

```php
$scanSession = $scanner->getScanSession($scanSessionId);
if ($scanSession->result == ScanSessionResults::SUCCESS) {
	foreach ($scanSession->documents as $document) {
		// ...
	}
}
```