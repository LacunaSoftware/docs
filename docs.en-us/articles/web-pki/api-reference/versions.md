# API Versions

The Web PKI provides an API version requirement parameter, in case the developer intends to use a specific feature set and avoid any unecessary update on the user Web PKI components.
In order to do so, use the `requiredApiVersion` parameter on [`init()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) method, e.g.:

```js
pki.init({
    ready: onWebPkiReady,
    requiredApiVersion: pki.apiVersions.v1_2
});
```

In the example above, we defined that we are going to use the feature set of [API 1.2](#v1-2) (and lower), thus any Web PKI component update will only the be required for users with lower versions than the ones defined by [API 1.2](#v1-2).
No unecessary update will be required for users with satisfying versions, even though it is not the latest one.

<a name="changelog" />
## API changelog

<a name="v1-4" />
### 1.4 (2018-02-17)

- Add XML local signature features:
	- [`signFullXml`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signfullxml)
	- [`signXmlElement`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signxmlelement)
	- [`openXmlSignature`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openxmlsignature)
- Add autheticated request feature:
	- [`sendAuthenticatedRequest`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#sendauthenticatedrequest)
- Add user error message field on exception object:
	- [`userMessage`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.exceptionmodel.html#usermessage)


<a name="v1-3" />
### 1.3 (2017-11-10)

- Add improved error handler with exception model
	- [`fail`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html#fail)


<a name="v1-2" />
### 1.2 (2017-06-19)

- Add local store and PKCS#11 certificate generation features:
	- [`generateSoftwareRsaKeyPair`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#generatesoftwarersakeypair)
	- [`importCertificate`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#importcertificate)
	- [`listTokens`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listtokens)
	- [`generateTokenRsaKeyPair`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#generatetokenrsakeypair)
	- [`importTokenCertificate`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#importtokencertificate)


<a name="v1-1" />
### 1.1 (2016-08-19)

- Add license v2
- Add local signature features:
	- [`showFileBrowser`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#showfilebrowser)
	- [`openFile`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openfile)
- Add PAdES local signature features:
	- [`signPdf`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signpdf)
	- [`openPades`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openpades)
- Add CAdES local signature features:
	- [`signCades`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signcades)
	- [`openCades`]&ast;(https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#opencades)


<a name="v1-0" />
### 1.0 (2015-04-28)

- Add basic features:
	- [`init`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init)
	- [`listCertificates`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listcertificates)
	- [`readCertificate`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#readcertificate)
	- [`signHash`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signhash)
	- [`signData`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signdata)
	- [`redirectToInstallPage`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#redirecttoinstallpage)
- Add sign batch feature:
	- [`preauthorizeSignatures`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#preauthorizesignatures)
- Add downlad and directory selection features:
	- [`showFolderBrowser`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#showfolderbrowser)
	- [`downloadToFolder`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#downloadtofolder)
	- [`openFolder`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openfolder)
- Add RestPKI sign integration:
	- [`signWithRestPki`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signwithrestpki)


 &ast; Methods supported only on Windows. For more informations see [Web signatures](../../pki-guide/web-signatures/index.md) article.