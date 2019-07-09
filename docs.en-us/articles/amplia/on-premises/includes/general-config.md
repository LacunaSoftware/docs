### General settings

Under section **General**:

* **SiteUrl**: publicly accessible URL of the website (e.g.: `https://ca.patorum.com/`). This address is used to compose emails with links back to the website 
* **EncryptionKey**: 256-bit key used to encrypt temporary secrets issued by the site and keys [stored on the database](../key-stores/database.md). See below how to generate this key.
* **AutoUpdateDatabase**: by default, the application tries to perform model changes to the database after an update (when needed). Set to `false` if the application does not have owner permissions over the database.
* **SupportEmailAddress**: the support email address (used on the footer of outgoing emails)
