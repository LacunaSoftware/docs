# Web PKI API

## API Reference

<!-- Direct link to avoid DocFX warning -->
See the [API Reference](https://docs.lacunasoftware.com/en-us/content/typedocs/web-pki/modules/_lacuna_web_pki_d_.html) for detailed information about each method.

## API Versions

The WebPKI API changelog is based on the *jslib* ([lacuna-web-pki.js](https://get.webpkiplugin.com/Scripts/LacunaWebPKI/lacuna-web-pki-2.7.0.js)) features development. 
If you intend to use a specifc features set, check the usage of `requiredApiVersion` parameter on [`init`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) method. Thus, you can ensure that the users will have the minimum components required versions and will not cause any unecessary user update.

<a name="v1-4" />
### 1.4 (Beta)

- Add XML local signature features:
	- [`signFullXml`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signfullxml)
	- [`signXmlElement`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signxmlelement)
	- [`openXmlSignature`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openxmlsignature)
- Add autheticated request feature:
	- [`sendAuthenticatedRequest`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#sendauthenticatedrequest)
- Add user error message field on exception object:
	- [`userMessage`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#usermessage)


<a name="v1-3" />
### 1.3 (2017-11-10)

- Add improved error handler with exception model
	- [`fail`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#fail)


<a name="v1-2" />
### 1.2 (2017-06-19)

- Add local store and PKCS#11 certificate generation features:
	- [`generateSoftwareRsaKeyPair`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#generatesoftwarersakeypair)
	- [`importCertificate`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#importcertificate)
	- [`listTokens`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listtokens)
	- [`generateTokenRsaKeyPair`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#generatetokenrsakeypair)
	- [`importTokenCertificate`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#importtokencertificate)


<a name="v1-1" />
### 1.1 (2016-08-19)

- Add license v2
- Add local signature features:
	- [`showFileBrowser`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#showfilebrowser)
	- [`openFile`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openfile)
- Add PAdES local signature features:
	- [`signPdf`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signpdf)
	- [`openPdf`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openpdf)
- Add CAdES local signature features:
	- [`signCades`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signcades)
	- [`openCades`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#opencades)


<a name="v1-0" />
### 1.0 (2015-04-28)

- Add basic features:
	- [`init`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init)
	- [`listCertificates`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listcertificates)
	- [`readCertificate`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#readcertificate)
	- [`signHash`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signhash)
	- [`signData`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signdata)
	- [`redirectToInstallPage`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#redirecttoinstallpage)
- Add sign batch feature:
	- [`preauthorizeSignatures`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#preauthorizesignatures)
- Add downlad and directory selection features:
	- [`showFolderBrowser`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#showfolderbrowser)
	- [`downloadToFolder`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#downloadtofolder)
	- [`openFolder`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openfolder)
- Add RestPKI sign integration:
	- [`signWithRestPki`](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signwithrestpki)
