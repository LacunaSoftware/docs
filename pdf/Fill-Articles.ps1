$encoding = [System.Text.Encoding]::Default
ls articles -R -filter *.md | % {
	$content = $encoding.GetString([System.IO.File]::ReadAllBytes($_.Fullname))
	if ($content.Contains('data-alt-locales')) {
		$_.Fullname
		$altPath = $_.Fullname.Replace('docs.pt-br', 'docs.en-us')
		$bkpPath = ('{0}.bkp' -f $_.Fullname)
		if (-not (Test-Path $bkpPath)) {
			Write-Host "Making backup"
			Copy-Item $_.Fullname $bkpPath
		}
		Copy-Item $altPath $_.Fullname -Force
	}
}
