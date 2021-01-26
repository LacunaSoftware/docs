```php
<h2>Signed documents</h2>
<ul>
	<?php for ($i = 0; $i < count($session->documents); $i++) { 
		$document = $session->documents[$i]; ?>

		<li>
			<a href="<?= $document->signedFile->location ?>"><?= $document->signedFile->name ?></a>
		</li>
	<?php } ?>
</ul>
```