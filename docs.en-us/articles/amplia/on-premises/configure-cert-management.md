# Configure cloud certificate management - Amplia

[Amplia](../index.md) can be used to host end-user certificates with their corresponding private keys, which are commonly known *cloud* certificates.
This is typically done together with [Lacuna PSC](../../psc/index.md).

This feature is configured through the **CertificateManagement** section, having the following settings:

* **KeyStore**: name of the [key store](key-stores/index.md) that will be used to generate and store the certificate keys
* **IssuingService**: see [issuing service](#issuing-service) below
* **PukGenerationLength**: length of auto-generated PUKs. Defaults to `8`
* **IssueSessionTimeoutMinutes**: maximum duration in minutes of an issue session. Accepts decimals, defaults to `15`
* **AuthenticationSessionTimeout**: maximum duration in minutes of an authentication session. Accepts decimals, defaults to `15`
* **OperationSessionTimeoutMinutes**: maximum duration in minutes of an operation session. Accepts decimals, defaults to `15`
* **PinAuth**: PIN authentication options
  * **MaxFailedAttempts**: maximum failed attempts before PIN authentication is locked out. Defaults to `5`
  * **LockPermanently**: whether the PIN lockout should be permanent. Defaults to `True`
  * **InitialLockPeriodMinutes**: if the lockout is not permanent, defines the duration of the first lockout period, in minutes (each subsequent lockout lasts twice as long as the previous lockout). No default, must be set if **LockPermanently** is set to `False`.
* **PukAuth**: PUK authentication options
  * **MaxFailedAttempts**: maximum failed attempts before PUK authentication is locked out. Defaults to `5`
  * **LockPermanently**: whether the PUK lockout should be permanent. Defaults to `True`
  * **InitialLockPeriodMinutes**: if the lockout is not permanent, defines the duration of the first lockout period, in minutes (each subsequent lockout lasts twice as long as the previous lockout). No default, must be set if **LockPermanently** is set to `False`.
* **OtpAuth**: OTP authentication options
  * **MaxFailedAttempts**: maximum failed attempts before OTP authentication is locked out. Defaults to `5`
  * **LockPermanently**: whether the OTP lockout should be permanent. Defaults to `False`
  * **InitialLockPeriodMinutes**: if the lockout is not permanent, defines the duration of the first lockout period, in minutes (each subsequent lockout lasts twice as long as the previous lockout). Defaults to `1`
* **SmsAuth**: SMS authentication options
  * **MaxFailedAttempts**: maximum failed attempts before SMS authentication is locked out. Defaults to `5`
  * **LockPermanently**: whether the SMS lockout should be permanent. Defaults to `False`
  * **InitialLockPeriodMinutes**: if the lockout is not permanent, defines the duration of the first lockout period, in minutes (each subsequent lockout lasts twice as long as the previous lockout). Defaults to `1`
  * **CodeSize**: size of verification codes. Defaults to `6`
* **PukPolicy**: minimum requirements for user-defined PUKs
  * **MinLength**: minimum length, defaults to `8`
  * **MinUppercaseLetters**: minimum number of uppercase letters, defaults to `0`
  * **MinLowercaseLetters**: minimum number of lowercase letters, defaults to `0`
  * **MinDigits**: minimum number of digits, defaults to `0`
  * **MinSpecialCaracters**: minimum number of special characters, defaults to `0`

> [!NOTE]
> Regardless of the value of the setting **LockPermanently** of the subsection **PinAuth**, a successful PUK authentication always unlocks the PIN authentication

The PIN policy is not configured on the *CertificateManagement* section, but rather on the **PinPolicy** subsection of the key store configuration. If the key
store is an HSM, the PIN policy must match the user password policy configured on the HSM.

> [!TIP]
> All settings have meaningful default values, except for the **KeyStore** setting and the **PinPolicy** subsection of the key store configuration, which
> must be filled. Otherwise, only fill the settings you have a good reason to change the default value of.

Example (*.ini* or *.conf* configuration file):

```ini
[CertificateManagement]
KeyStore=MyHSM

[CertificateManagement:SmsAuth]
InitialLockPeriodMinutes=2.5
CodeSize=7

[CertificateManagement:PukPolicy]
MinUppercaseLetters=1
MinLowercaseLetters=1
MinDigits=1

[KeyStores:MyHSM:PinPolicy]
MinDigits=6
```

Example (environment variables):

```sh
CertificateManagement__KeyStore=MyHSM
CertificateManagement__SmsAuth__InitialLockPeriodMinutes=2.5
CertificateManagement__SmsAuth__CodeSize=7
CertificateManagement__PukPolicy__MinUppercaseLetters=1
CertificateManagement__PukPolicy__MinLowercaseLetters=1
CertificateManagement__PukPolicy__MinDigits=1
KeyStores__MyHSM__PinPolicy__MinDigits=6
```

Example (*.json* configuration file):

```json
{
	...,
	"CertificateManagement": {
		"KeyStore": "MyHSM",
		"SmsAuth": {
			"InitialLockPeriodMinutes": 2.5,
			"CodeSize": 7
		},
		"PukPolicy": {
			"MinUppercaseLetters": 1,
			"MinLowercaseLetters": 1,
			"MinDigits": 1
		}
	},
	"KeyStores": {
		"MyHSM": {
			...,
			"PinPolicy": {
				"MinDigits": 6
			}
		}
	},
	...
}
```

<a name="issuing-service" />

## Issuing service

The setting **IssuingService** controls what issuing service will be used to issue the certificates hosted on Amplia:

* `Local`: Amplia itself will issue the certificates (default)
* `AmpliaReg`: an instance of [Amplia Reg](../../amplia-reg/index.md) will issue the certificates
* `PMCert`: an instance of PMCert will issue the certificates

### Local issuing service

To use Amplia itself to issue the certificates, merely omit the **IssuingService** setting.

> [!WARNING]
> The local issuing service is experimental and is not suited for production environments.

### Amplia Reg issuing service

To use an instance of [Amplia Reg](../../index.md) to issue the certificates, you must create an application on your existing Amplia Reg instance representing
the Amplia instance and generate an API key for it:

1. Sign in to your Amplia Reg instance
1. Click on your name on the top right corner, then on **Sys Admin**
1. Click on **Applications** on the left menu, then on *Add*
1. Fill out a name
1. Mark the **Contributor** role
1. Click on *Create*
1. Click on **Keys**, then on *Add*
1. Fill out some description and, on the *Expiration* field, choose "Never expires"
1. Click on *Create*
1. Copy the **API key** generated (this value cannot be retrieved later)

Then, set the **IssuingService** to `AmpliaReg` and fill out the **AmpliaReg** section with the **Endpoint** and **ApiKey**.

Example (*.ini* or *.conf* file):

```ini
[CertificateManagement]
IssuingService=AmpliaReg

[AmpliaReg]
Endpoint=https://your-amplia-reg-instance.com/
ApiKey=YOUR_API_KEY
```

Example (environment variables):

```sh
CertificateManagement__IssuingService=AmpliaReg
AmpliaReg__Endpoint=https://your-amplia-reg-instance.com/
AmpliaReg__ApiKey=YOUR_API_KEY
```

Example (JSON configuration):

```json
	...,
	"CertificateManagement": {
		"IssuingService": "AmpliaReg",
		...
	},
	"AmpliaReg": {
		"Endpoint": "https://your-amplia-reg-instance.com/",
		"ApiKey": "YOUR_API_KEY"
	}
	...
```

### PMCert issuing service

To use an instance of **PMCert** to issue the certificates, set the **IssuingService** to `PMCert` and fill out the **PMCert** section with the **Endpoint**.

Example (*.ini* or *.conf* file):

```sh
[CertificateManagement]
IssuingService=PMCert

[PMCert]
Endpoint=https://your-pm-cert-instance.com/
```

Example (environment variables):

```sh
CertificateManagement__IssuingService=PMCert
PMCert__Endpoint=https://your-pm-cert-instance.com/
```

Example (JSON configuration):

```json
	...,
	"CertificateManagement": {
		"IssuingService": "PMCert",
		...
	},
	"PMCert": {
		"Endpoint": "https://your-pm-cert-instance.com/"
	}
	...
```
