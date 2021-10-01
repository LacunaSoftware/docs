# Digiploma Settings

###  *General* Settings

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website (e.g.: `https://digiploma.patorum.com/`). This address is used to compose emails with links back to the website.
* **AutoUpdateDatabase**: by default, the application tries to perform model changes to the database after an update (when needed). Set to `false` if the application does not have owner permissions over the database.
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails).

* **SignerUrl**: the URL of the Signer that will be used to create degrees.
* **UploadsPerRequest** (default: `50`): number of files per document create request to Signer.

* **DisableCertificateLevelRequirementToSign** (v1.6.0): if `true`, disables the requirement that all certificates used to sign degrees are A3.
* **DisableRecaptcha** (v1.6.0): if `true`, disables the Recaptcha.

###  *Batches* Settings (v1.6.0)

Under section **Batches**:

* **MaxDegreesInBatch** (default: `50000`): the maximum number of degrees in a batch.
* **MaxItemsRetrievedFromDatabase** (default: `10000`): the maximum number of retrieved degrees per retrieval round while processing a batch.

###  *Recaptcha* Settings (v1.6.0)

Under section **Recaptcha**:

* **SiteKey**: the Captcha site key.
* **SecretKey**: the Captcha secret key.
