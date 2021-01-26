```php
<h2>Signed documents</h2>
<ul>
	<?php for ($i = 0; $i < count($session->documents); $i++) { 
		$document = $session->documents[$i]; ?>

		<li>
			<?php if ($document->status == SignatureSessionStatus::COMPLETED { ?>
				<a href="<?= $document->signedFile->location ?>"><?= $document->signedFile->name ?></a>
			<?php } else { ?>
				<?= $document->originalFile.Name ?>
				<text> (processing)</text>
			<?php } ?>
		</li>
	<?php } ?>
</ul>
```