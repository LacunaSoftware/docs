Grant ID is composed of three components:

* **Identity Service**: contains the business logic and encapsulates access to the database
* **Auth Server**: accessed by end-users during logins, redirects and sign-ups
* **Console**: allows administrators to manage the system

We'll first do some initial setup, then we'll install each component.

### Initial setup

Create a temporary work directory, then download and extract the distribution package:

[!include[Download binaries](../../../../../../includes/grant-id/linux/download-package.md)]

Create a local user to run the components:

[!include[Create user](../../../../../../includes/grant-id/linux/create-user.md)]

Create the folder that will contain the binaries for each component and copy the binary files over:

[!include[Create bin directory](../../../../../../includes/grant-id/linux/create-bin-dir.md)]

> [!NOTE]
> Component binaries can be read by any user and can only be changed by root users. This means that the application user (*grantid*) can read but not change the files, which is intentional.

Create the folder that will contain the configuration files and copy over the configuration file templates:

[!include[Create etc directory](../../../../../../includes/grant-id/linux/create-etc-dir.md)]

> [!NOTE]
> Configuration files can only be read by members of the *grantid* group and can only be changed by the root user. This is important to protect sensitive data stored on the configuration files from unauthorized access.

Generate a self-signed certificate to sign the JSON Web Tokens. Provide the information below, pressing ENTER on the remaining questions. Avoid using diacritics ("accents" e.g. *á*, *ã*, *ç* etc).

* **Country Name**: enter the two-letter code of your country, e.g.: *BR*
* **State or Province Name**: enter the name of your organization's state, e.g.: *Sao Paulo*
* **Organization Name**: enter the name of your organization, e.g. *Patorum Inc*
* **Common Name**: enter the name of your Grant ID instance, e.g. *Patorum ID*

[!include[Generate certificate step 1](../../../../../../includes/grant-id/linux/gen-cert-step1.md)]

Merge the key and certificate into a single PFX file. When asked for a password, simply press ENTER twice.

[!include[Generate certificate step 2](../../../../../../includes/grant-id/linux/gen-cert-step2.md)]

Do some housekeeping:

[!include[Generate certificate step 3](../../../../../../includes/grant-id/linux/gen-cert-step3.md)]

Generate a key used to encrypt "tokens" sent on emails:

[!include[Generate temp token key](../../../../../../includes/grant-id/linux/gen-temp-token-key.md)]

Edit the common configuration file:

[!include[Edit common settings](../../../../../../includes/grant-id/linux/edit-settings-common.md)]

Fill the following settings:

* Section **Application**
  * **ProductName**: the name of your Grant ID instance, e.g. *Patorum ID*
  * **AuthServerUrl**: public URL of the Auth Server component, hosted on the [base domain](../../index.md#planning), e.g. *https://id.patorum.com*
  * **ConsoleUrl**: public URL of the Console component, hosted on the [console domain](../../index.md#planning), e.g. *https://console.id.patorum.com*
  * **UseSSL**: whether the public URLs will use HTTPS (fill according to the previous URLs)
* Section **PkiSuite**
  * **SdkLicense**: your license for the PKI SDK, in Base64 format
  * **WebLicense**: your license for the Web PKI component in binary (Base64) format. Required if you intend to enable login with X.509 certificates.

> [!NOTE]
> As mentioned on the [planning section](../../index.md#planning), you should ideally have a valid SSL certificate for the domains. If you
> don't have a certificate yet, use URLs with `http://` above and set **UseSSL** to `false`.
