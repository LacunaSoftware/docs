# WebPKI API Changelog

The WebPKI API changelog is based on the *jslib* ([lacuna-web-pki.js](https://get.webpkiplugin.com/Scripts/LacunaWebPKI/lacuna-web-pki-2.7.0.js)) features development. 
If you intend to use a specifc features set, check the usage of `requiredApiVersion` parameter on `init` method. Thus, you can ensure that the users will have the minimum components
required versions and will not force any unecessary user update.

<a name="v1-4" />
### 1.4 (2018-01-31)

- Add XML local signature features:
	- `signFullXml`
	- `signXmlElement`
	- `openXades`
- Add autheticated request feature:
	- `sendAuthenticatedRequest`
- Add user error message filed on exception object:
	- `userMessage`
- Add not mandatory native update option


<a name="v1-3" />
### 1.3 (2017-11-10)

- Add improved error handler with exception model
	- `fail`


<a name="v1-2" />
### 1.2 (2017-06-19)

- Add local store and PKCS#11 certificate generation features:
	- `generateSoftwareRsaKeyPair`
	- `importCertificate`
	- `listTokens`
	- `generateTokenRsaKeyPair`
	- `importTokenCertificate`


<a name="v1-1" />
### 1.1 (2016-08-19)

- Add license v2
- Add local signature features:
	- `saveFile`
	- `showFileBrowser`
	- `openFile`
- Add PAdES local signature features:
	- `signPdf`
	- `openPdf`
- Add CAdES local signature features:
	- `signCades`
	- `openCades`


<a name="v1-0" />
### 1.0 (2015-04-28)

- Add basic features:
	- `init`
	- `listCertificates`
	- `readCertificate`
	- `signHash`
	- `signData`
	- `redirectToInstallPage`
- Add sign batch feature:
	- `preauthorizeSignatures`
- Add downlad and directory selection features:
	- `showFolderBrowser`
	- `downloadToFolder`
	- `openFolder`
- Add RestPKI sign integration:
	- `signWithRestPki`