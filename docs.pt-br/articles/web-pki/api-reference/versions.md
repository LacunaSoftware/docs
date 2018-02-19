# Versões da API

O Web PKI oferece a possiblilidade de o desenvolvedor definir qual a versão da API deseja exigir, baseando-se no conjunto de funcionalidades que deseja utilizar.
Para isso, utilize o parâmetro `requiredApiVersion` no método [`init()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init):

```js
pki.init({
    ready: onWebPkiReady,
    requiredApiVersion: pki.apiVersions.v1_2
});
```

No exemplo acima, definimos que iremos utilizar funcionalidades introduzidas na [API 1.2](#v1-2). Desta forma, a atualização dos componentes do Web PKI só será exigida aos usuários com versões inferiores às definidas pela [API 1.2](#v1-2).
Nenhuma atualização desnecessária será exigida de usuários com versões suficientes, ainda que não sejam a mais recente.


<a name="changelog" />
## Histórico de versões da API

<a name="v1-4" />
### 1.4 BETA (2018-02-17)

- Adiciona funcionalidades de assinatura local de XML:
	- [`signFullXml`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signfullxml)&ast;
	- [`signXmlElement`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signxmlelement)&ast;
	- [`openXmlSignature`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openxmlsignature)&ast;
- Adiciona funcionalidades de requisição Web autenticada:
	- [`sendAuthenticatedRequest`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#sendauthenticatedrequest)&ast;
- Adiciona mensagem de erro de usuário no objeto de exceção:
	- [`userMessage`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.exceptionmodel.html#usermessage)


<a name="v1-3" />
### 1.3 (2017-11-10)

- Adiciona gerenciador de erro com objeto de exceção mais detalhado:
	- [`fail`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html#fail)


<a name="v1-2" />
### 1.2 (2017-06-19)

- Adiciona funcionalidades para emissão de certificado digital em repositório local e via PKCS#11:
	- [`generateSoftwareRsaKeyPair`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#generatesoftwarersakeypair)
	- [`importCertificate`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#importcertificate)
	- [`listTokens`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listtokens)
	- [`generateTokenRsaKeyPair`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#generatetokenrsakeypair)
	- [`importTokenCertificate`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#importtokencertificate)


<a name="v1-1" />
### 1.1 (2016-08-19)

- Adiciona licença v2
- Adiciona funcionalidades para assinatura local:
	- [`showFileBrowser`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#showfilebrowser)&ast;
	- [`openFile`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openfile)&ast;
- Adiciona funcionalidades de assinatura local PAdES:
	- [`signPdf`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signpdf)&ast;
	- [`openPades`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openpades)&ast;
- Adiciona funcionalidades de assinatura local CAdES:
	- [`signCades`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signcades)&ast;
	- [`openCades`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#opencades)&ast;


<a name="v1-0" />
### 1.0 (2015-04-28)

- Adiciona funcionalidades básicas:
	- [`init`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init)
	- [`listCertificates`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listcertificates)
	- [`readCertificate`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#readcertificate)
	- [`signHash`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signhash)
	- [`signData`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signdata)
	- [`redirectToInstallPage`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#redirecttoinstallpage)
- Adiciona funcionalidade para assinatura em lote:
	- [`preauthorizeSignatures`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#preauthorizesignatures)
- Adiciona funcionalidade de download e seleção de diretório:
	- [`showFolderBrowser`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#showfolderbrowser)
	- [`downloadToFolder`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#downloadtofolder)
	- [`openFolder`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#openfolder)
- Adiciona integração de assinatura com RestPKI:
	- [`signWithRestPki`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#signwithrestpki)


&ast; Métodos suportados apenas em Windows. Para mais informações veja o artigo [Assinaturas web](../../pki-guide/web-signatures/index.md).