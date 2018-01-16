param($version)
$ErrorActionPreference = "Stop"

# By using a 1-byte encoding to read and write files, we preserve each file's original encoding
# as well as any BOM marks.
$encoding = [System.Text.Encoding]::GetEncoding(1252)

$versionRegex = '\d+\.\d+\.\d+'

if ([String]::IsNullOrEmpty($version)) {
	Write-Output ("Syntax: {0} <version>" -f $MyInvocation.MyCommand.Name)
	exit 1
}
if (-not ($version -match $versionRegex)) {
	Write-Output "Invalid version: $version"
	exit 2
}


$files = @(
	'linux\install-curl.md',
	'linux\install-wget.md',
	'linux\update-curl.md',
	'linux\update-wget.md',
	'windows\link-msi-64.md',
	'windows\link-msi-86.md',
	'windows\link-zip-64.md',
	'windows\link-zip-86.md',
	'windows\main-link.md'
)

$files | % {
	$path = '..\includes\pki-express\' + $_
	$f = Get-Item $path
	$f.Fullname
	$t = $encoding.GetString([System.IO.File]::ReadAllBytes($f.Fullname))
	$t2 = [regex]::Replace($t, $versionRegex, $version)
	[System.IO.File]::WriteAllBytes($f.Fullname, $encoding.GetBytes($t2))
}
