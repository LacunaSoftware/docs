export default LacunaWebPKI;

export declare class LacunaWebPKI {

	/**************************************************************
	 * Instatiates a new Lacuna Web PKI object.
	 * @param license The license for the component. May be a string or an object (see [Licensing](http://docs.lacunasoftware.com/articles/web-pki/licensing)).
	 * In order for the component to work, you must set a valid purchased license that matches the URL of the site running the code.
	 * If no licesnse is set, the component will work in localhost only, so you can test as much as you want in development before deciding to license it.
	 *
	 * @returns
	 *
	 * Binary license sample
	 * ```javascript
	 * // Here, we use the binary format of our license. This is preferred if you want to hide the details of your license
	 * // (expiration date and allowed domains). Please note that the details are not encrypted, just encoded in Base64.
	 * var pki = new LacunaWebPKI('ASYAanNmaWRkbGUubmV0LHdlYnBraS5sYWN1bmFzb2Z0d2FyZS5jb20AAAABClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ==');
	 * ```
	 *
	 * JSON license sample
	 * ```javascript
	 * // Here, we use the JSON format of our license. If you don't mind having the details of your license (expiration
	 * // date and allowed domains) in the source code of your page, this option is preferred because it makes it
	 * // easier to diagnose problems such as an expired license.
	 * var pki = new LacunaWebPKI( {
	 *     "format": 1,
	 *     "allowedDomains": [
	 *         "webpki.lacunasoftware.com",
	 *         "jsfiddle.net"
	 *     ],
	 *     "expiration": null,
	 *     "signature": "ClKvO1J22vAD+YmfANiKQLbcLE1lNraPKCel6tRM+ZxR+h6M/crtJYRRVGGz7hrdbM0Y0mfTu15RMYGqQMi1QNZS6GrT4vNzIayv552Fl0EFWQA7jWlctUwfYoHRHVEnCNx9YGXDiA9+yDoGlVwgTR7fjzNeS3Fen1MVIyKBF464gN0JvdiCRJMI47JGVDkPmKjcrYIvJs6y5Lg25RW4ZnBKVruS+HR2s3k8ZrV4y4RCQE4UYMKbukF9vsF+JqAEifRlPq2xLcrNdxBveVDSXS/LRHAcrZrMM+Iw4A79jl0ngWPcy+CwinAhT+3dxVo5ZWMRQFpmTkylEMDvTjV9wQ=="
	 * });
	 * ```
	 */
	constructor(license?: string | Object);

	readonly standardTrustArbitrators: {
		pkiBrazil: TrustArbitrator,
		pkiItaly: TrustArbitrator,
		windows: TrustArbitrator
	};

	/**************************************************************
	 * Web PKI standard PKCS#11 modules. Useful presets for `pkcs11Modules` argument of [[listTokens]], [[generateTokenRsaKeyPair]] and [[importTokenCertificate]] methods.
	 */
	readonly pkcs11Modules: {
		/** SafeSign PKCS#11 lib modules. */
		safeSign: Pkcs11Module,
		/** SafeNet PKCS#11 lib modules. */
		safeNet: Pkcs11Module
	}

	// /**************************************************************
	//  * Preset filters for [[listCertificates.filters]]
	//  */
	// readonly filters: {
	// 	isPkiBrazilPessoaFisica: Filter,
	// 	hasPkiBrazilCpf: Filter,
	// 	hasPkiBrazilCnpj: Filter,
	// 	pkiBrazilCpfEquals(cpf: string): Filter,
	// 	pkiBrazilCnpjEquals(cnpj: string): Filter,
	// 	hasPkiItalyCodiceFiscale: Filter,
	// 	pkiItalyCodiceFiscaleEquals(cf: string): Filter,
	// 	isWithinValidity: Filter,
	// 	all(filters: Filter[]): Filter,
	// 	all(...filters: Filter[]): Filter,
	// 	any(filters: Filter[]): Filter,
	// 	any(...filters: Filter[]): Filter
	// };

	/**************************************************************
	 * Object with CAdES acceptable policies preset
	 */
	readonly cadesAcceptablePolicies: {
		/** Any PKI Brazil acceptable policies */
		pkiBrazil: LacunaWebPKI.CadesPolicies[]
	}

	/**************************************************************
	 * Object with XAdES acceptable policies preset
	 */
	readonly xmlAcceptablePolicies: {
		/** Any PKI Brazil acceptable policies */
		pkiBrazil: LacunaWebPKI.XmlPolicies[]
	}

	/**************************************************************
	 * Initializes the instance of the LacunaWebPKI object. This method must be called before calling any other methods.
	 *
	 * @returns
	 *
	 * Simple `ready` example
	 * ```javascript
	 * // This is the simplest way to call the method, in case you don't wish to register a default error callback nor
	 * // define a custom behavior for when the component is not installed/outdated.
	 * pki.init({ ready: onWebPkiReady });
	 * 
	 * // The ready callback receives no arguments
	 * function onWebPkiReady() {
	 *     // start using the component
	 * }
	 * ```
	 * 
	 * Complete example
	 * ```javascript
	 * // If you wish to pass any other argument, you must use the extended version of the method:
	 * pki.init({
	 *     ready: onWebPkiReady,
	 *     notInstalled: onWebPkiNotInstalled,
	 *     defaultFail: onWebPkiFail
	 * });
	 * 
	 * function onWebPkiReady() {
	 *     // start using the component
	 * }
	 * 
	 * // The notInstalled callback
	 * function onWebPkiNotInstalled(status, message) {
	 *     alert(message + '\n\nYou will be redirected to the installation page');
	 *     pki.redirectToInstallPage();
	 * }
	 * 
	 * // The default fail callback
	 * function onWebPkiFail(ex) {
	 *     alert(ex.userMessage);
	 *     console.log('Web PKI error from ' + ex.origin + ': ' + ex.error + ' (' + ex.code + ')');
	 * }
	 * ```
	 *
	 * JSFiddle live example: [init method full example](https://jsfiddle.net/LacunaSoftware/apak22ba/)
	 */
	init(args: {
		/** A function to be called when the component is ready to be used. The function receives no arguments. */
		ready: () => any,

		/** The license for the component, if not already set when instantiating the object. */
		license?: string | Object,
		
		/** If you intend to use a specifc features set, pass the equivalent API version required parameter, so you can ensure that the users will have the minimum components required versions and will not force any unecessary update. See the [API changelog](http://docs.lacunasoftware.com/articles/web-pki/changelog) for more information. */
		requiredApiVersion?: LacunaWebPKI.ApiVersions,
		
		/** A function to be called if the component's installation is not OK (component not installed, outdated or user is using an unsupported browser). If no callback is given, the user is automatically redirected to the installation website and will be redirected back once the installation is completed. If you do pass a callback to override the default behavior, use the [[redirectToInstallPage]] method to redirect the user to the installation page whenever you think it's convenient. */
		notInstalled?: (
			/** The reason for the failed verification */
			status: LacunaWebPKI.InstallationStates,
			/** A user-friendly message describing the reason for the failure. */
			message: string
		) => any,
		
		/** The default callback to be called when an error occurrs (please refer to examples below for the exact function signature). */
		defaultFail?: FailCallback,
		
		/** If your webpage uses AngularJS, you can pass here a reference to your $scope, which will then be used to call the callback functions properly, relieving you of doing a `$scope.$apply(function() { ... });` on every callback. The calls are actually wrapped around a "safe $apply", as described in [coderwall](https://coderwall.com/p/ngisma/safe-apply-in-angular-js). */
		angularScope?: Object,
		
		/** If your webpage uses Angular2+ technologies, you can pass a [NgZone](https://angular.io/api/core/NgZone) reference, so the page can properly detect elements changes on the callback functions. */
		ngZone?: Object,
		
		/** The brand name for customized install page, if license covered. */
		brand?: string,
		
		/** The *on premises* Rest PKI URL. For *on premises* Rest PKI clients integration only. */
		restPkiUrl?: string
	}): Promise<Object>;

	/**************************************************************
	 * Lists the user available certificates in OS certificate store or connected crypto devices
	 * 
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives an array of [[CertificateModel]]
	 *
	 * Usage example (JavaScript)
	 * ```javascript
	 * pki.listCertificates().success(function (certs) {
	 *     // Use certificate list "certs"
	 * });
	 * ```
	 * JSFiddle live example: [Listing Certificates](https://jsfiddle.net/LacunaSoftware/ezg6hz7n/)
	 */
	listCertificates(args?: {
		/** A html `<select>` (dropdown) element `id` to be automatically populated with the available certificates. You can also pass the `selectOptionFormatter` function argument for formatting the populated options text. If no formatter function is passed, the default text formatting for a certificate `c` is "`c.subjectName` (issued by `c.issuerName`)" */
		selectId?: string,

		/** An `<option>` text formatter for the passed `selectId`. The formatter function must return a desired text for each [[CertificateModel]]. */
		selectOptionFormatter?: (c: CertificateModel) => string
	}): Promise<CertificateModel[]>;

	/**************************************************************
	 * Gets a certificate content
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives the (Base64 encoded) certificate DER bytes.
	 *
	 * Usage example (JavaScript)
	 * ```javascript
	 * pki.readCertificate({
	 *     thumbprint: $('#certificateSelect').val()
	 * }).success(function (content) {
	 *     // Use certificate content
	 * });
	 * ```
	 *
	 * JSFiddle live example: [Listing and reading certificates](https://jsfiddle.net/LacunaSoftware/ezg6hz7n/)
	 */
	readCertificate(args: {
		/** The certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		thumbprint: string
	}): Promise<string>;

	/**************************************************************
	 * Signs a hash with signer certificate private key.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives the (Base64 encoded) signature bytes.
	 *
	 * Usage example (JavaScript)
	 * ```javascript
	 * var hashToSign = 'f4OxZX/x/FO5LcGBSKHWXfwtSx+j1ncoSt3SABJtkGk='; // Base64 encoded SHA-256 of 'Hello World!'
	 *
	 * pki.signHash({
	 *     thumbprint: $('#certificateSelect').val(),
	 *     hash: hashToSign,
	 *     digestAlgorithm: 'SHA-256'
	 * }).success(function (signature) {
	 *     // Use signature
	 * });
	 * ```
	 *
	 * JSFiddle live example: [Operates with selected certificate](https://jsfiddle.net/LacunaSoftware/4ayksync/)
	 */
	signHash(args: {
		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		thumbprint: string,
		/** The Base64 encoded hash to be signed. */
		hash: string,
		/** The digest algorithm identifier of the `hash` parameter. It can be the algorithm name or OID (i.e. `'SHA-256'` or `'2.16.840.1.101.3.4.2.1'`). */
		digestAlgorithm: string
	}): Promise<string>;

	/**********************************************************
	 * Signs data with signer certificate private key.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives the (Base64 encoded) signature bytes.
	 *
	 * Usage example (JavaScript)
	 * ```javascript
	 * var dataToSign = 'SGVsbG8gV29ybGQh'; // 'Hello World!' Base64 encoded
	 *
	 * pki.signData({
	 *     thumbprint: $('#certificateSelect').val(),
	 *     data: dataToSign,
	 *     digestAlgorithm: 'SHA-256'
	 * }).success(function (signature) {                                     
	 *     // Use signature
	 * });
	 * ```
	 *
	 * JSFiddle live example: [Operates with selected certificate](https://jsfiddle.net/LacunaSoftware/4ayksync/)
	 */
	signData(args: {
		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		thumbprint: string,
		/** The Base64 encoded data to be signed. */
		data: string,
		/** The digest algorithm identifier to be used in the signature algorithm. It can be the algorithm name or OID (i.e. `'SHA-256'` or `'2.16.840.1.101.3.4.2.1'`). */
		digestAlgorithm: string
	}): Promise<string>;

	/**************************************************************
	 * Signs a batch of hashes with signer certificate private key.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives the (Base64 encoded) signature bytes array.
	 *
	 * Usage example (JavaScript)
	 * ```javascript
	 * var batch = [
	 *     'f4OxZX/x/FO5LcGBSKHWXfwtSx+j1ncoSt3SABJtkGk=', // Base64 encoded SHA-256 of 'Hello World!'
	 *     'f4OxZX/x/FO5LcGBSKHWXfwtSx+j1ncoSt3SABJtkGk=',
	 *     'f4OxZX/x/FO5LcGBSKHWXfwtSx+j1ncoSt3SABJtkGk='
	 * ];
	 *
	 * pki.signHashBatch({
	 *     thumbprint: $('#certificateSelect').val(),
	 *     batch: batch,
	 *     digestAlgorithm: 'SHA-256'
	 * }).success(function (signatures) {
	 *     // Use signatures array
	 * });
	 * ```
	 *
	 */
	signHashBatch(args: {
		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		thumbprint: string,
		/** The Array of Base64 encoded hashes to be signed. */
		batch: string[],
		/** The digest algorithm identifier of the hashes on `batch` parameter. It can be the algorithm name or OID (i.e. `'SHA-256'` or `'2.16.840.1.101.3.4.2.1'`). */
		digestAlgorithm: string
	}): Promise<string>;

	/**************************************************************
	 * Executes a document signature with Rest PKI (server-side) integration. See [Rest PKI documentation](https://docs.lacunasoftware.com/articles/rest-pki/) for more informations.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives the current signature process `token`.
	 */
	signWithRestPki(args: {
		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		thumbprint: string,
		/** The token returned by Rest PKI signature start process. See [Rest PKI documentation](https://docs.lacunasoftware.com/articles/rest-pki/) for more informations. */
		token: string
	}): Promise<string>;

	/**************************************************************
	 * Pre authorizes a number of signatures. Useful for cases in which a significant number of signatures will be performed and the user wants to authorize and enter its PIN only once for the whole signature batch.
	 *
	 * @return A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes.
	 *
	 * Usage example (JavaScript)
	 * ```javascript
	 * var batch = [
	 *     'SGVsbG8gV29ybGQh',      // 'Hello World!'  Base64 encoded
	 *     'SGVsbG8gV2ViUEtJIQ==',  // 'Hello WebPKI!' Base64 encoded
	 *     'SGVsbG8gQmF0Y2gh',      // 'Hello Batch!'  Base64 encoded
	 *     'SGVMbE8gd09yTGQh',      // 'HeLlO wOrLd!'  Base64 encoded
	 *     'SGVsbG8gQ3J5cHRvIQ=='   // 'Hello Crypto!' Base64 encoded
	 * ];
	 *
	 * pki.preauthorizeSignatures({
	 *     certificateThumbprint: $('#certificateSelect').val(),
	 *     signatureCount: batch.length
	 * }).success(function () {
	 *     signBatchItem(0); // start batch signatures
	 * });
	 *
	 * function signBatchItem(i) {
	 *     if (i >= batch.length) {
	 *          console.log('Batch finished');
	 *          return;
	 *     }
	 *
	 *     pki.signData({
	 *         thumbprint: $('#certificateSelect').val(),
	 *         data: batch[i],
	 *         digestAlgorithm: 'SHA-256'
	 *
	 *     }).success(function (signature) {
	 *         console.log('Signature ' + i + ': ' + signature);
	 *         signBatchItem(++i); // signs next item of batch
	 *     });
	 * }
	 *```
	 *
	 * JSFiddle live example: [Sign Batch Example](https://jsfiddle.net/LacunaSoftware/xxnkoouc/)
	 */
	preauthorizeSignatures(args: {
		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		certificateThumbprint: string,
		/** The number of signatures to be pre authorized. */
		signatureCount: number
	}): Promise<void>;

	/**************************************************************
	 * Shows the OS directory browser. Used for commands which the user needs to choose a directory.
	 *
	 * IMPORTANT
	 *
	 * In order to comply to user privacy policies, user paths are **never** returned to the page. All paths are handled inside extension or addon logic and an `Id` is returned instead.
	 * Later, the developer can refeer to the selected directory by using the returned [[ShowFolderBrowserResponse.folderId]].
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[ShowFolderBrowserResponse]] object.
	 */
	showFolderBrowser(args?: {
		/** A message title for the browser dialog. */
		message?: string
	}): Promise<ShowFolderBrowserResponse>;

	/**************************************************************
	 * Shows the OS file browser. Used for commands which the user needs to choose a file.
	 *
	 * IMPORTANT
	 *
	 * In order to comply to user privacy policies, user paths are **never** returned to the page. All paths are handled inside extension or addon logic and an `Id` is returned instead.
	 * Later, the developer can refeer to the selected file by using the returned [[FileModel.id]].
	 * 
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[ShowFileBrowserResponse]] object.
	 */
	showFileBrowser(args?: {
		/** Whether the user can select multiple files or not. */
		multiselect?: boolean,

		/** Any file extension filter for the browser dialog. */
		filters?: FileFilterModel[],

		/** The file browser dialog title */
		dialogTitle?: string
	}): Promise<ShowFileBrowserResponse>;

	/**************************************************************
	 * Downloads a specific content to a selected directory.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[DownloadToFolderResponse]] object
	 */
	downloadToFolder(args: {
		/** The content URL */
		url: string,

		/** The selected [[ShowFolderBrowserResponse.folderId]], as returned by [[showFolderBrowser]] method. */
		folderId: string,

		/** The file name of the content to be saved. */
		filename?: string
	}): Promise<DownloadToFolderResponse>;

	/**********************************************************
	 * Opens the selected folder in OS directory explorer.
	 * 
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a *boolean* argument with the success result.
	 */
	openFolder(args: {
		/** The selected [[ShowFolderBrowserResponse.folderId]], as returned by [[showFolderBrowser]] method. */
		folderId: string
	}): Promise<boolean>;

	/**************************************************************
	 * Opens a file with the OS default registered program for the file type. If the file type is not in the Web PKI whitelist, the file directory will be opened instead.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a *boolean* argument with the success result.
	 */
	openFile(args: {
		/** The selected [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		fileId: string
	}): Promise<boolean>;


	/**********************************************************
	 * Redirects the user to the install page, with the appropriate url arguments so as to make the user be redirected back to the original page once the
	 * installation completes successfully.
	 *
	 * For an example of the proper way to call this method, see the complete example code at [[init]] method documentation.
	 */
	redirectToInstallPage(): void;


	//-------------Web PKI local signature methods

	/**************************************************************
	 * Signs a PDF document.
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[PdfSignResult]] obejct.
	 */
	signPdf(args: {
		/** The selected PDF [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		fileId: string,

		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		certificateThumbprint: string,

		/** The signed PDF output options. */
		output: Output,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. */
		clearPolicyTrustArbitrators?: boolean,

		/** The PDF visual representation for the signer. */
		visualRepresentation?: VisualRepresentation,

		/** The PDF page marks. */
		pdfMarks?: PdfMark[],

		/** If `true`, will not apply the `pdfMarks` in case PDF already has a signature. If `false`, any previous signature will be removed before the marks be applied. */
		bypassMarksIfSigned?: boolean,

		/** The PDF signature policy. */
		policy: LacunaWebPKI.PadesPolicies
	}): Promise<PdfSignResult>;

	/**************************************************************
	 * Signs a document with CAdES standard, generates a P7S.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[CadesSignResult]] object.
	 */
	signCades(args: {
		/** The selected document [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		fileId?: string,

		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		certificateThumbprint: string,

		/** The CAdES signature file (.p7s) output options. */
		output: Output,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. */
		clearPolicyTrustArbitrators?: boolean,

		/** If you already have a CAdES file and a co-signature is intended, pass this argument instead of `fileId`. Optionally, you can use the `fileId` for CAdES signature file and enable the `autoDetectCosign`. */
		cmsToCosignFileId?: string,

		/** Whether or not to auto-detect a co-signature intention if the `fileId` passed is a CAdES signature file.  */
		autoDetectCosign?: boolean,

		/** Whether or not to include the encapsulated content (the original document) in the resulting CAdES signature file. */
		includeEncapsulatedContent?: boolean,

		/** The CAdES signature policy. */
		policy: LacunaWebPKI.CadesPolicies
	}): Promise<CadesSignResult>;

	/**************************************************************
	 * Fully signs a XML.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[XmlSignResult]] object.
	 */
	signFullXml(args: {
		/** The selected XML [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		fileId?: string,

		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		certificateThumbprint: string,

		/** The XML signature file output options. */
		output: Output,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. */
		clearPolicyTrustArbitrators?: boolean,

		/** A XML content (UTF-8 string or Base64 encoded bytes) to sign can be passed optionally to `filedId`. */
		content?: string,

		/** The XML signature policy. */
		policy: LacunaWebPKI.XmlPolicies,

		/** The signature element Id. If not set, a random Id will be generated. */
		signatureElementId?: string,

		/** The signature element include location on the resulting XML. If not set, the default is [[LacunaWebPKI.XmlInsertionOptions.AppendChild]] relative to the root element. */
		signatureElementLocation?: XmlSignatureElementLocation,

		/** Any required namespace for xpath resolvings. */
		namespaces?: NamespaceModel[]
	}): Promise<XmlSignResult>;

	/**************************************************************
	 * Signs an element, or elements, of a XML.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[XmlSignResult]] object.
	 */
	signXmlElement(args: {
		/** The XML element to sign Id. */
		toSignElementId?: string,

		/** Optionally to a single `toSignElementId`, multiple elements to sign Ids on the same XML.  */
		toSignElementsIds?: string[],

		/** Optionally to a single `toSignElementId`, multiple elements to sign Ids on the same XML, selected by a xpath. Also check if any `namespace` argument for xpath resolution is needed.  */
		toSignElementsXPath?: string,

		/** An Id resolution table. Needed in case the `toSignElementId` Id attribute name is not the default. */
		idResolutionTable?: XmlIdResolutionTableModel

		/** The selected XML [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		fileId: string,

		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		certificateThumbprint: string,

		/** The XML signature file output options. */
		output: Output,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. */
		clearPolicyTrustArbitrators?: boolean,

		/** A XML content (UTF-8 string or Base64 encoded) to sign can be passed optionally to `filedId`.  */
		content?: string,

		/** The XML signature policy. */
		policy: LacunaWebPKI.XmlPolicies,

		/** The signature element Id. If not set, a random Id will be generated. */
		signatureElementId?: string,

		/** The signature element include location on the resulting XML. If not set, the default is [[LacunaWebPKI.XmlInsertionOptions.AppendSibling]] relative to the selected `toSignElement`. */
		signatureElementLocation?: XmlSignatureElementLocation,

		/** Any required namespace for xpath resolvings. */
		namespaces?: NamespaceModel[]
	}): Promise<XmlSignResult>;

	/**************************************************************
	 * Opens a PDF signature.
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[PadesSignatureModel]] obejct.
	 */
	openPades(args: {
		/** The signed PDF [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		signatureFileId: string,

		/** Whether or not to validate the PDF sinatures. */
		validate: boolean,

		/** An external trusted date reference for the signature validation. If not set, the current date time will be used. */
		dateReference?: Date,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. Only applies if `validate` argument is `true`. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. Only applies if `validate` argument is `true`. */
		clearPolicyTrustArbitrators?: boolean,

		/** A PDF signature policy for the signature validation. Only applies if `validate` argument is `true`. */
		specificPolicy: LacunaWebPKI.PadesPolicies
	}): Promise<PadesSignatureModel>;

	/**************************************************************
	 * Opens a CAdES (.p7s) signature.
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives [[CadesSignatureModel]] object.
	 */
	openCades(args: {
		/** The signed document (.p7s) [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		signatureFileId: string,

		/** The original file. Only applies if the passed `signatureFileId` does not have the encapsulated content. */
		originalFileId?: string,

		/** Whether or not to validate the CAdES sinatures. */
		validate: boolean,

		/** An external trusted date reference for the signature validation. If not set, the current date time will be used. */
		dateReference?: Date,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. Only applies if `validate` argument is `true`. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. Only applies if `validate` argument is `true`. */
		clearPolicyTrustArbitrators?: boolean,

		/** A CAdES signature policy for the signature validation. Only applies if `validate` argument is `true`. */
		specificPolicy?: LacunaWebPKI.CadesPolicies,

		/** A collection of acceptables signature policies. The policies *must* be explicit policies (signed-attributes must have a signature policy Id). Se useful presets [[cadesAcceptablePolicies]]. Only applies if `validate` argument is `true`. */
		acceptablePolicies?: LacunaWebPKI.CadesPolicies[]
	}): Promise<CadesSignatureModel>;

	/**************************************************************
	 * Opens a XML signature.
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives [[XmlSignatureModel]] obejct.
	 */
	openXmlSignature(args: {
		/** The signed XML [[FileModel.id]], as returned by [[showFileBrowser]] method. */
		signatureFileId?: string,

		/** A signed XML content (UTF-8 string or Base64 encoded bytes) can be passed optionally to `signatureFileId`. */
		signatureContent?: string,

		/** Whether or not to validate the CAdES sinatures. */
		validate: boolean,

		/** An external trusted date reference for the signature validation. If not set, the current date time will be used. */
		dateReference?: Date,

		/** An Id resolution table. Needed in case the `toSignElementId` Id attribute name is not the default. */
		idResolutionTable?: XmlIdResolutionTableModel,

		/** The trust arbitrators for the signer certificate validation. Not required if the `policy` already has a default one. Only applies if `validate` argument is `true`. */
		trustArbitrators?: TrustArbitrator[],

		/** Whether or not to remove the `policy` default trust arbitrator. If `true`, you must pass the `trustArbitrators` argument. Only applies if `validate` argument is `true`. */
		clearPolicyTrustArbitrators?: boolean,

		/** A XML signature policy for the signature validation. Only applies if `validate` argument is `true`. */
		specificPolicy?: LacunaWebPKI.XmlPolicies,

		/** A collection of acceptables signature policies. The policies *must* be explicit policies (signed-attributes must have a signature policy Id). Se useful presets [[cadesAcceptablePolicies]]. Only applies if `validate` argument is `true`. */
		acceptablePolicies?: LacunaWebPKI.XmlPolicies[]
	}): Promise<XmlSignatureModel>;

	/**************************************************************
	 * Lists the user connected crypto devices
	 * 
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives an array of [[TokenModel]].
	 *
	 * Usage sample (JavaScript)
	 * ```javascript
	 * pki.listTokens({
	 *     pkcs11Modules: [pki.pkcs11Modules.safeSign, pki.pkcs11Modules.safeNet]
	 * }).success(function (tokens) {
	 *     // Use token list "tokens"
	 * });
	 * ```
	 *
	 * Lacuna Live Example: [List Tokens Example](https://www.lacunasoftware.com/DemoWebPKI/recoverTokens)
	 */
	listTokens(args: {
		/** The PKCS#11 modules to use for crypto devices communication. See standard supported [[pkcs11Modules]] */
		pkcs11Modules?: Pkcs11Module[]
	}): Promise<TokenModel[]>;

	/**************************************************************
	 * Generates a RSA key pair in the user selected crypto device and returns a CSR (PKCS#10 Certificate Signing Request).
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[GenerateTokenKeyPairResponse]] object.
	 */
	generateTokenRsaKeyPair(args: {
		/** The PKCS#11 modules to use for crypto devices communication. See standard supported [[pkcs11Modules]] */
		pkcs11Modules?: Pkcs11Module[],
		/** A subject name (DN) string for the generated CSR. E.g. `'CN=My Name, O=ACME Inc., C=BR'` */
		subjectName?: string,
		/** The selected token serial number, available in [[TokenModel.serialNumber]] as returned by [[listTokens]] method. */
		tokenSerialNumber: string,
		/** A label for the generated keys objects in the token. If not set, a random Id is used. */
		keyLabel?: string,
		/** The RSA keys size to be genarated. Be sure that the selected device supports the requested key size on [[TokenModel.mechanisms]]. */
		keySize: number
	}): Promise<GenerateTokenKeyPairResponse>;

	/**************************************************************
	 * Generates a RSA key pair in the user computer, or OS certificate store, and returns a CSR (PKCS#10 Certificate Signing Request).
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[GenerateKeyPairResponse]] object.
	 */
	generateSoftwareRsaKeyPair(args: {
		/** A subject name (DN) string for the generated CSR. E.g. `'CN=My Name, O=ACME Inc., C=BR'` */
		subjectName?: string,
		/** The RSA keys size to be genarated. */
		keySize: number
	}): Promise<GenerateKeyPairResponse>;

	/**************************************************************
	 * Imports a digital certificate into the user crypto device. The device must be the one holding the private key of the certificate being imported.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[ImportTokenCertificateResponse]] object.
	 */
	importTokenCertificate(args: {
		/** The PKCS#11 modules to use for crypto devices communication. See standard supported [[pkcs11Modules]] */
		pkcs11Modules?: Pkcs11Module[],
		/** The selected token serial number, available in [[TokenModel.serialNumber]] as returned by [[listTokens]] method. */
		tokenSerialNumber: string,
		/** The digital certificate content (PEM or Base64 encoded DER bytes formats). */
		certificateContent: string,
		/** A label for the imported certificate object in the token. If not set, the same key Id is used. */
		certificateLabel?: string
	}): Promise<ImportTokenCertificateResponse>;

	/**************************************************************
	 * Imports a digital certificate into the user computer, or OS certificate store. The computer must be the one holding the private key of the certificate being imported.
	 * The command can result with the certificate available for usage and also with a PFX (PKCS#12) backup copy, in this last case, see arguments `savePkcs12`, `passwordMinLength` and `passwordPolicies`.
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[ImportSoftwareCertificateResponse]] object.
	 */
	importCertificate(args: {
		/** The digital certificate content (PEM or Base64 encoded DER bytes formats). */
		certificateContent: string,
		/** A password secure level policy for the PFX file backup. Applies only if `savePkcs12` is `true`. */
		passwordPolicies?: LacunaWebPKI.PasswordPolicies,
		/** A password required minimum length for the PFX file backup. Applies only if `savePkcs12` is `true`. */
		passwordMinLength?: number
		/** Whether or not to also create a PFX (PKCS#12) file backup for the imported certificate and keys. */
		savePkcs12: boolean
	}): Promise<ImportSoftwareCertificateResponse>;

	/**************************************************************
	 * Sends an authenticated Web request (Web request with mutual SSL/TLS authentication).
	 *
	 * @returns A promise object that can register [[fail]] and [[success]] callbacks to be called when the operation completes. The [[success]] callback for this promise receives a [[HttpResponseModel]] object.
	 */
	sendAuthenticatedRequest(args: {
		/** The signer certificate thumbprint. Available in [[CertificateModel.thumbprint]] property returned by [[listCertificates]] method. */
		certificateThumbprint: string,

		/** The URL to send the request to or a relative route, if it is in the same domain. It must have a HTTPS scheme. */
		url: string,

		/** The request method. */
		method: LacunaWebPKI.HttpMethods,

		/** The request headers object-map. E.g.
		 * ```javascript
		 * {
		 *     "Content-Type": "application/json; charset=utf-8",
		 *     "Accept-Encoding": "gzip, deflate"
		 * }
		 * ```
		 */
		headers?: Object,
		
		/** A request body content. If set, consider also to pass the Content-Type charset of the body encoding in the `headers` map. If not header charset is present, the Web PKI will, by default, attempt to decode as a Base64 string and, if fails, will get the UTF-8 bytes. */
		body?: string,
		
		/** A request timeout in milliseconds. If not set, default is `60000` (1 min). */
		timeout?: number
	}): Promise<HttpResponseModel>;

}

// USABLE ENUMS

export namespace LacunaWebPKI {

	export const enum InstallationStates {
		INSTALLED = 0,
		NOT_INSTALLED = 1,
		OUTDATED = 2,
		BROWSER_NOT_SUPPORTED = 3
	}

	export const enum ApiVersions {
		v1_0 = '1.0',
		v1_1 = '1.1',
		v1_2 = '1.2',
		v1_3 = '1.3',
		v1_4 = '1.4',
		v1_4_1 = '1.4.1',
		v1_5 = '1.5'
	}

	export const enum HttpMethods {
		Get = 'get',
		Post = 'post'
	}

	//-------------Pki Options
	export const enum PadesPolicies {
		/** PAdES-BES policy */
		Basic = 'basic',
		/** ICP-Brasil AD-RB policy */
		BrazilAdrBasica = 'brazilAdrBasica'
	}

	export const enum CadesPolicies {
		/** CAdES-BES policy */
		Bes = 'cadesBes',
		/** ICP-Brasil AD-RB policy */
		BrazilAdrBasica = 'brazilAdrBasica'
	}

	export const enum XmlPolicies {
		/** XML D-Sign policy */
		XmlDSig = 'xmlDSig',
		/** XAdES-BES policy */
		XadesBes = 'xadesBes',
		/** Brazil national NFe policy */
		BrazilNFe = 'brazilNFe',
		/** ICP-Brasil AD-RB policy */
		BrazilAdrBasica = 'brazilAdrBasica',
	}

	export const enum XmlSignedEntityTypes {
		FullXml = 'fullXml',        
		XmlElement = 'xmlElement'
		//DetachedResource = 'detachedResource'
	}

	export const enum OutputModes {
		/** Shows a save file dialog so the user can select where and which name to save the output file. */
		ShowSaveFileDialog = 'showSaveFileDialog',
		/** Saves the output file in a pre-selected folder. The output file name will be the original file name plus a suffix. Make sure to pass the required arguments [[Output.folderId]] and [[Output.fileNameSuffix]]. */
		SaveInFolder = 'saveInFolder',
		/** Saves the output file in the same directory of the original file. The output file name will be the original file name plus a suffix. Make sure to pass the required arguments [[Output.fileNameSuffix]]. */
		AutoSave = 'autoSave',
		/** Returns to the page the output file content Base64 encoded bytes. IMPORTANT, when working with Web PKI on web-extensions technologies (i.e. Chrome, Firefox), the maximum response length is limited up to 1MB. If exceeded, an [[ErrorCodes.IO_ERROR]] is returned. */
		ReturnContent = 'returnContent'
	}

	export const enum TrustArbitratorTypes {
		TrustedRoot = 'trustedRoot',
		Tsl = 'tsl',
		Standard = 'standard'
	}

	export const enum StandardArbitrators {
		PkiBrazil = 'pkiBrazil',
		PkiItaly = 'pkiItaly',
		Windows = 'windows'
	}

	export const enum CertificateTypes {
		A1 = 'A1',
		A2 = 'A2',
		A3 = 'A3',
		A4 = 'A4',
		S1 = 'S1',
		S2 = 'S2',
		S3 = 'S3',
		S4 = 'S4',
		T3 = 'T3',
		T4 = 'T4',
		Unknown = 'Unknown'
	}

	export const enum XmlInsertionOptions{
		AppendChild = 'appendChild',
		PrependChild = 'prependChild',
		AppendSibling = 'appendSibling',
		PrependSibling = 'prependSibling'
	}

	export const enum CmsContentTypes {
		Data              = 'Data',
		SignedData        = 'SignedData',
		EnvelopedData     = 'EnvelopedData',
		DigestedData      = 'DigestedData',
		EncryptedData     = 'EncryptedData',
		AuthenticatedData = 'AuthenticatedData',
		TstInfo           = 'TstInfo',
	}

	// visual representation
	export const enum PadesPaperSizes {
		Custom = 'custom',
		A0 = 'a0',
		A1 = 'a1',
		A2 = 'a2',
		A3 = 'a3',
		A4 = 'a4',
		A5 = 'a5',
		A6 = 'a6',
		A7 = 'a7',
		A8 = 'a8',
		Letter = 'letter',
		Legal = 'legal',
		Ledger = 'ledger'
	}

	export const enum PadesHorizontalAlign {
		Left = 'left',
		Center = 'center',
		Rigth = 'rigth'
	}

	export const enum PadesVerticalAlign {
		Top = 'top',
		Center = 'center',
		Bottom = 'bottom'
	}

	export const enum PadesMeasurementUnits {
		Centimeters = 'centimeters',
		PdfPoints = 'pdfPoints'
	}

	export const enum PadesPageOrientations {
		Auto = 'auto',
		Portrait = 'portrait',
		Landscape = 'landscape'
	}

	// pdf mark
	export const enum PdfElementTypes {
		Text = 'text',
		Image = 'image'
	}

	export const enum PdfTextStyles {
		Normal = 'normal',
		Bold = 'bold',
		Italic = 'italic'
	}

	// password policies
	export const enum PasswordPolicies {
		LettersAndNumbers = 1,
		UpperAndLowerCase = 2,
		SpecialCharacters = 4
	}

	/**************************************************************
	 * Web PKI error codes.
	 */
	export const enum ErrorCodes {
		/** Undefined error. */
		UNDEFINED                      = 'undefined',
		/** Internal error. */
		INTERNAL                       = 'internal',
		/** User cancelled the operation. */
		USER_CANCELLED                 = 'user_cancelled',
		/** The user Operating System is not supported */
		OS_NOT_SUPPORTED               = 'os_not_supported',
		/** The Internet Explorer Addon did not respond */
		ADDON_TIMEOUT                  = 'addon_timeout',
		/** The Internet Explorer Addon was not detected. It is not installed or not working well. */
		ADDON_NOT_DETECTED             = 'addon_not_detected',
		/** The Internet Explorer Addon failed to send command to the native component. */
		ADDON_SEND_COMMAND_FAILURE     = 'addon_send_command_failure',
		/** The selected certificate was not found on user store or crypto device. If a crypto device use is intended, check is drivers or PKCS#11 configuratin is setup properly. */
		CERTIFICATE_NOT_FOUND          = 'certificate_not_found',
		/** The request command is unknown. */
		COMMAND_UNKNOWN                = 'command_unknown',
		/** The request command is not supported on the user Operating System. */
		COMMAND_NOT_SUPPORTED          = 'command_not_supported',
		/** A mandatory command parameter is missing in the request. */
		COMMAND_PARAMETER_NOT_SET      = 'command_parameter_not_set',
		/** A command parameter is not valid. */
		COMMAND_INVALID_PARAMETER      = 'command_invalid_parameter',
		/** The web extension failed to connect to native component. */
		NATIVE_CONNECT_FAILURE         = 'native_connect_failure',
		/** The native component disconnected from web extension. */
		NATIVE_DISCONNECTED            = 'native_disconnected',
		/** The web extension did not receive a response from native component. */
		NATIVE_NO_RESPONSE             = 'native_no_response',
		/** Error while getting pending signature on [[signWithRestPki]] method. */
		REST_PKI_GET_PENDING_SIGNATURE = 'rest_pki_get_pending_signature',
		/** Error while sending signature on [[signWithRestPki]] method. */
		REST_PKI_POST_SIGNATURE        = 'rest_pki_post_signature',
		/** The Rest PKI did not accept the selected certificate. */
		REST_PKI_INVALID_CERTIFICATE   = 'rest_pki_invalid_certificate',
		/** A license is required and was not set. See [[constructor]]. */
		LICENSE_NOT_SET                = 'license_not_set',
		/** The license passed is not valid. */
		LICENSE_INVALID                = 'license_invalid',
		/** The license passed does not allow the requested command. */
		LICENSE_RESTRICTED             = 'license_restricted',
		/** The license passed has expired. */
		LICENSE_EXPIRED                = 'license_expired',
		/** The license passed does not allow the domain being used. */
		LICENSE_DOMAIN_NOT_ALLOWED     = 'license_domain_not_allowed',
		/** Validation error. */
		VALIDATION_ERROR               = 'validation_error',
		/** Error on PKCS#11 communication. */
		P11_ERROR                      = 'p11_error',
		/** The selected device was not found. Disconnected or PKCS#11 not being recognized. */
		P11_TOKEN_NOT_FOUND            = 'p11_token_not_found',
		/** The device does not support the PKCS#11 requested operation. */
		P11_NOT_SUPPORTED              = 'p11_not_supported',
		/** The private key was not found for the selected certificate. */
		KEYSET_NOT_FOUND               = 'keyset_not_found',
		ALGORITHM_NOT_SUPPORTED        = 'algorithm_not_supported',
		SIGNED_PDF_TO_MARK             = 'signed_pdf_to_mark',
		JSON_ERROR                     = 'json_error',
		IO_ERROR                       = 'io_error',
		KEYCHAIN_ERROR                 = 'keychain_error',
		KEYCHAIN_SIGN_ERROR            = 'keychain_sign_error',
		DECODE_ERROR                   = 'decode_error',
		/** Certificate key not found. Please check if the selected certificate smart-card or USB token is connected to your computer or remove and insert it again. */
		CSP_KEYSET_NOT_DEFINED         = 'csp_keyset_not_defined',
		CSP_INVALID_ALGORITHM          = 'csp_invalid_algorithm',
		CSP_INVALID_PROVIDER_TYPE      = 'csp_invalid_provider_type',
		MOBILE_TIMEOUT                 = 'mobile_timeout',
		MOBILE_NOT_AUTHORIZED          = 'mobile_not_authorized',
		MOBILE_SEND_MESSAGE            = 'mobile_send_message',
		COMMAND_DECRYPT_ERROR          = 'command_decrypt_error',
		BLOCKED_DOMAIN                 = 'blocked_domain'
	}

}


/**************************************************************
 * An object that represents a promise to be fulfilled, through which the programmer can register callbacks for when the promise is fulfilled successfully or for when an error occurrs. 
 * All asyncronous methods from the [[LacunaWebPKI]] class return an instance of this object.

 * For instance, the method [[listCertificates]] returns a promise which is fulfilled when the list of certificates is finally available. 
 * You could register a callback for when that happens, and another one for if an error occurs, in the following manner:
 *
 *```js
 * pki.listCertificates()
 * .success(function(certs) {
 *     // Every success callback receives a single argument. Its type (either string, array or object) and meaning depend on the method that returned the promise.
 *     $scope.certificates = certs;
 * })
 * .fail(function (ex) {
 * 	   // The fail callback always receives an ExceptionModel object.
 *     alert('pki error from ' + ex.origin + ': ' + ex.message);
 *     console.log('pki error', ex);
 * });
 * ```
 */
export interface Promise<T> {
	success(callback: SuccessCallback<T>): Promise<T>;
	//error(callback: ErrorCallback): Promise<T>;
	fail(callback: FailCallback): Promise<T>;
}

/**************************************************************
 * Object that holds the exception information.
 */
export interface ExceptionModel {
	/** An i18n, when possible, user-friendly message describing the problem. */
	userMessage: string,
	/** A message describing the error that occurred. */
	message: string,
	/** A detailed string containing as much information about the error as possible, for instance the stack trace. This is a good value to be logged, not to be shown to the user. */
	error: string,
	/** A string denoting where the error originated. This should also not be shown to the user, but rather logged for diagnostic purposes. */
	origin: string,
	/** The error code */
	code: LacunaWebPKI.ErrorCodes
}

/**************************************************************
 * Object that holds an output option.
 */
export interface Output {
	/** The output mode */
	mode: LacunaWebPKI.OutputModes,
	/** The selected [[ShowFolderBrowserResponse.folderId]], as returned by [[showFolderBrowser]] method. Argument mandatory if [[Output.mode]] is [[LacunaWebPKI.OutputModes.SaveInFolder]]. */
	folderId?: string,
	/** A title for the save file dialog. Applies if [[Output.mode]] is [[LacunaWebPKI.OutputModes.ShowSaveFileDialog]]. */
	dialogTitle?: string,
	/** A output file name suffix to be added to the original file name. Argument mandatory if [[Output.mode]] is [[LacunaWebPKI.OutputModes.SaveInFolder]] or [[LacunaWebPKI.OutputModes.AutoSave]] */
	fileNameSuffix?: string
}

/**************************************************************
 * Object that holds a trust arbitrator information.
 */
export interface TrustArbitrator {
	/** The trust arbitrator type. */
	type: LacunaWebPKI.TrustArbitratorTypes,
	/** A standard trust arbitrator. Argument mandatory if [[TrustArbitrator.type]] is [[LacunaWebPKI.TrustArbitratorTypes.Standard]]. */
	standardArbitrator?: LacunaWebPKI.StandardArbitrators,
	/** A trusted root certificate content (PEM or Base64 encoded DER bytes). Argument mandatory if [[TrustArbitrator.type]] is [[LacunaWebPKI.TrustArbitratorTypes.TrustedRoot]]. */
	trustedRoot?: string,
	/** A TSL URL. Argument mandatory if [[TrustArbitrator.type]] is [[LacunaWebPKI.TrustArbitratorTypes.Tsl]]. */
	tslUrl?: string,
	/** The TSL signer certificate root content (PEM or Base64 encoded DER bytes). Argument mandatory if [[TrustArbitrator.type]] is [[LacunaWebPKI.TrustArbitratorTypes.Tsl]]. */
	tslRoot?: string
}

/**************************************************************
 * Object with PKCS#11 lib module name or path for each Operating System supported.
 */
export interface Pkcs11Module {
	/** The PKCS#11 `.dll` lib name or path for Windows. */
	win: string,
	/** The PKCS#11 `.so` lib name or path for Linux. */
	linux: string,
	/** The PKCS#11 `.dylib` lib name or path for Mac OS. */
	mac: string
}

/**************************************************************
 * Object with returned certificate informations.
 *
 * Each property on the [[PkiBrazilModel]] and [[PkiItalyModel]] objects may be null, but the objects themselves (`cert.pkiBrazil` or `cert.pkiItaly`) are **never** null.
 */
export interface CertificateModel {
	/** The Common Name (CN) part of the certificate's subject name field. */
	subjectName: string,
	/** The Common Name (CN) part of the certificate's issuer name field. */
	issuerName: string,
	/** `true` if the certificate is stored on Web PKI mobile app. `null` or `false` otherwise. */
	isRemote?: boolean,
	/** The subject e-mail address. */
	email: string,
	/** The SHA-256 thumbprint (Base64 encoded) of the certificate's DER encoding. Used to reference the certificate on subsequent calls. */
	thumbprint: string,
	/** Object with boolean properties indicating wether each possible key usage is set on the certificate. */
	keyUsage: KeyUsagesModel,
	/** Object with Brazil-specific fields. */
	pkiBrazil: PkiBrazilModel,
	/** Object with Italy-specific fields. */
	pkiItaly: PkiItalyModel,
	/** The not before field of the certificate. */
	validityStart: Date,
	/** The not after field of the certificate. */
	validityEnd: Date
}

export interface DigestModel {
	digestAlgorithmOid: string,
	digestAlgorithmName: string,
	digestValue: string
}

export interface FileModel {
	/** An Id handle for future references to this file. In order to comply to user privacy policies, user paths are **never** returned to the page. All paths are handled inside extension or addon logic and this `id` is returned instead. */
	id: string,
	/** The file name. */
	name: string,
	/** The file length in bytes. */
	length: number
}

export interface FileFilterModel {
	/** The file type description. E.g `'PDF files'`. */
	description: string,
	/** The file type extension (with '.'). E.g `'.pdf'` */
	extension: string
}

export interface KeyUsagesModel {
	crlSign: boolean,
	dataEncipherment: boolean,
	decipherOnly: boolean,
	digitalSignature: boolean,
	encipherOnly: boolean,
	keyAgreement: boolean,
	keyCertSign: boolean,
	keyEncipherment: boolean,
	nonRepudiation: boolean
}

/**************************************************************
 * Object with PKI Brazil specific fields.
 *
 */
export interface PkiBrazilModel {
	/** Certificate holder's CPF (CPF do titular/responsável). */
	cpf: string,
	/** Company's CNPJ. */
	cnpj: string,
	/** Name of the certificate's holder (nome do titular/responsável). */
	responsavel: string,
	/** Date of birth of the certificate's holder (time as midnight in the current machine's time zone). */
	dateOfBirth: Date,
	/** The ICP-Brasil certificate type. */
	certificateType: LacunaWebPKI.CertificateTypes,
	/** Whether the certificate is an application certificate. */
	isAplicacao: boolean,
	/** Whether the certificate is a personal certificate (pessoa física). */
	isPessoaFisica: boolean,
	/** Whether the certificate is a company certificate (pessoa jurídica). */
	isPessoaJuridica: boolean,
	/** The responsible company name if it is an ICP-Brasil application certificate. The subject's common name without end id numbers if it is an ICP-Brasil company certificate. Null otherwise. */
	companyName: string,
	/** The certificate holder's "Número de Identificação Social - NIS (PIS, PASEP ou CI)". Returns value without leading zeroes. Returns null if information is not present. */
	nis: string,
	/** Certificate holder's ID number (número do RG do titular/responsável) without leading zeroes. */
	rgNumero: string,
	/** Issuing entity of the certificate holder's ID (órgão emissor do RG do titular/responsável). */
	rgEmissor: string,
	/** State code of the issuing entity of the certificate holder's ID (UF do órgão emissor do RG do titular/responsável). */
	rgEmissorUF: string,
	/** OAB's Número de Inscrição junto a Seccional (without leading zeroes). */
	oabNumero: string,
	/** OAB's sigla do Estado da Seccional. */
	oabUF: string
}

/**************************************************************
 * Object with PKI Italy specific fields.
 */
export interface PkiItalyModel {
	/** Subject's codice fiscale. */
	codiceFiscale: string
}

export interface SignatureInfo {
	signerCertificate: CertificateModel,
	messageDigest?: DigestModel,
	file?: FileModel,
	signingTime?: Date
}

export interface XmlSignatureInfo extends SignatureInfo {
	content?: string
}

export interface ValidationResults {
	passedChecks: ValidationItem[],
	warnings: ValidationItem[],
	errors: ValidationItem[]
}

export interface ValidationItem {
	type: string,
	message: string,
	detail: string,
	innerValidationResults: ValidationResults
}

export interface SignResult {
	isValid: boolean,
	signatureInfo: SignatureInfo,
	signingCertificateValidationResults?: ValidationResults
}

export interface PdfSignResult extends SignResult {
	pagesCount: number
}

export interface CadesSignResult extends SignResult {
	// For now, CadesSignResult has only the same properties as BaseSignResult
}

export interface XmlSignResult extends SignResult {
	signatureInfo: XmlSignatureInfo
}

export interface SignatureAlgorithmModel {
	signatureValue: string,
	signatureAlgorithmOid: string,
	signatureAlgorithmName: string, 
	digestAlgorithmOid: string, 
	digestAlgorithmName: string 
}

export interface SignaturePolicyIdentifierModel {
	digest: DigestModel,
	oid: string,
	uri: string
} 

export interface SignerModel {
	signature: SignatureAlgorithmModel,
	signaturePolicy?: SignaturePolicyIdentifierModel,
	certificate: CertificateModel,
	signingTime?: Date
	certifiedDateReference?: Date 
	timestamps?: CadesTimestampModel[],
	isValid?: boolean,
	validationResults?: ValidationResults
}

export interface CadesSignerModel extends SignerModel {
	messageDigest: DigestModel,
}

export interface PadesSignerModel extends SignerModel {
	messageDigest: DigestModel,
	isDocumentTimestamp: boolean,
	signatureFieldName: string
}

export interface XmlSignerModel extends SignerModel {
	signatureElementId : string,
	type : LacunaWebPKI.XmlSignedEntityTypes,
	signedElement : XmlElementModel 
}

export interface CadesSignatureModel {
	encapsulatedContentType: LacunaWebPKI.CmsContentTypes,
	hasEncapsulatedContent: boolean,
	signers: CadesSignerModel[]
}

export interface PadesSignatureModel {
	signers: PadesSignerModel[]
}

export interface XmlSignatureModel {
	signers: XmlSignerModel[]
}

export interface CadesTimestampModel extends CadesSignatureModel {
	genTime: Date,
	serialNumber: string,
	messageImprint: DigestModel
}

export interface XmlElementModel {
	localName: string,
	attributes: XmlAttributeModel[],
	namespaceUri: string 
}

export interface XmlAttributeModel {
	localName: string,
	value: string,
	namespaceUri: string 
}

export interface XmlIdResolutionTableModel {
	includeXmlIdAttribute: boolean,
	elementIdAttributes: XmlIdAttributeModel[],
	globalIdAttributes: XmlNodeNameModel[]
}

export interface XmlIdAttributeModel {
	element: XmlNodeNameModel,
	attribute: XmlNodeNameModel
}

export interface XmlNodeNameModel {
	localName: string,
	namespace: string
}

export interface XmlSignatureElementLocation {
	/** A xpath to select the element on which the [[XmlSignatureElementLocation.insertionOption]] will be applied relative to. */
	xpath: string, 
	/** The insertion option relative to the element selected by the [[XmlSignatureElementLocation.xpath]]. */
	insertionOption: LacunaWebPKI.XmlInsertionOptions
}

export interface NamespaceModel {
	prefix: string,
	uri: string
}

export interface MechanismsModel {
	/** Whether or not the token supports RSA key generation. */
	rsaGenerateKeyPair: boolean,
	/** The minimum key size supported, if RSA key generation supported. */
	rsaMinKeySize: number,
	/** The maximum key size supported, if RSA key generation supported. */
	rsaMaxKeySize: number
}

export interface TokenModel {
	slotDescription: string,
	slotManufacturer: string,
	label: string,
	manufacturer: string,
	model: string,
	serialNumber: string,
	/** Whether or not the token is initialized, operable, already with a user PIN and PUK. */
	initialized: boolean,
	mechanisms: MechanismsModel
}

export interface HttpResponseModel {
	content: string,
	headers: Object,
	statusCode: number,
	status: string
}

export interface GenerateKeyPairResponse {
	/** The CSR (PKCS#10 Certificate Signing Request) relative to the generated key pair. */
	csr: string
}

export interface GenerateTokenKeyPairResponse extends GenerateKeyPairResponse {
}

export interface ImportCertificateResponse {
	/** Whether or not the certificate was imported. */
	imported: boolean
}

export interface ImportSoftwareCertificateResponse  extends ImportCertificateResponse {
	/** Whether or not a PFX (PKCS#12) file was saved by the user. */
	pkcs12Saved: boolean
}

export interface ImportTokenCertificateResponse extends ImportCertificateResponse {
	// For now, ImportTokenCertificateResponse has only the same properties as ImportCertificateResponse
}

export interface DownloadToFolderResponse {
	filename: string,
	length: number
}

export interface ShowFileBrowserResponse {
	userCancelled: boolean,
	files: FileModel[]
}

export interface ShowFolderBrowserResponse {
	userCancelled: boolean,
	/** An Id handle for future references to the selected folder. In order to comply to user privacy policies, user paths are **never** returned to the page. All paths are handled inside extension or addon logic and this `Id` is returned instead. */
	folderId: string
}

// Visual Representation Types

export interface VisualRepresentation {
	text?: PadesVisualText,
	image?: PadesVisualImage,
	position?: PadesVisualPositioning
}

export interface PadesVisualText {
	text?: string,
	includeSigningTime?: boolean,
	container?: PadesVisualRectangle,
	horizontalAlign?: LacunaWebPKI.PadesHorizontalAlign, 
	fontSize?: number
}

export interface PadesVisualImage {
	resource: ResourceContentOrReference,
	opacity?: number,
	horizontalAlign?: LacunaWebPKI.PadesHorizontalAlign,
	verticalAlign?: LacunaWebPKI.PadesVerticalAlign
}

export interface PadesVisualPositioning {
	pageNumber: number,
	measurementUnits: LacunaWebPKI.PadesMeasurementUnits,
	pageOptimization?: PadesPageOptimization,
	auto?: PadesVisualAutoPositioning,
	manual?: PadesVisualRectangle
}

export interface ResourceContentOrReference {
	url?: string,
	content?: string,
	mimeType?: string
}

export interface PadesVisualRectangle {
	bottom?: number,
	top?: number,
	left?: number,
	right?: number,
	width?: number,
	height?: number
}

export interface PadesVisualAutoPositioning {
	container: PadesVisualRectangle,
	signatureRectangleSize: PadesSize,
	rowSpacing: number
}

export interface PadesSize {
	width: number,
	height: number
}

export interface PdfMark {
	measurementUnits: LacunaWebPKI.PadesMeasurementUnits, 
	container: PadesVisualRectangle,
	borderWidth?: number,
	backgroundColor?: string,
	borderColor?: string,
	pageOptimization: PadesPageOptimization,
	elements: PdfMarkElement[]
}

export interface PdfMarkElement {
	elementType: LacunaWebPKI.PdfElementTypes, 
	relativeContainer: PadesVisualRectangle,
	rotation?: number,
	textSections?: PdfTextSection,
	image?: PdfMarkImage
}

export interface PdfTextSection {
	style: LacunaWebPKI.PdfTextStyles,
	text: string,
	color?: string,
	fontSize?: number
}

export interface PdfMarkImage {
	opacity?: number,
	resource: ResourceContentOrReference
}

export interface PadesPageOptimization {
	paperSize: LacunaWebPKI.PadesPaperSizes,
	customPaperSize: PadesSize,
	pageOrientation: LacunaWebPKI.PadesPageOrientations
}

// Common Functions

export interface SuccessCallback<T> {
	(arg: T) : void;
}

export interface FailCallback {
	(ex: ExceptionModel) : void;
}

//export interface ErrorCallback {
//	(message: string, error: string, origin: string, code: string) : void;
//}

export interface Filter {
	(cert: CertificateModel) : boolean;
}
