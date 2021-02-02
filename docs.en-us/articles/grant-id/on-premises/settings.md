# GrantID Settings

###  *Aplication* Settings

Under section **Aplication**:

* **ProductName**: the name of the application.
* **IdentityServiceUrl**: the URL of the IdentityService service.
* **ConsoleUrl**: the URL of the Console service.
* **AuthServerUrl**: the URL of the AuthServer service.
* **UseReverseProxy**: set as `true` if the container will be executed behind a reverse proxy or load balancer. It can be omitted otherwise.
* **TempTokenPassword**: key to generate temporary tokens.
* **AuthenticatorIssuer**: name of the issuer of OTP tokens.

* **X509StoreLocation**: for instances whose OS provide a Certificate Store (Windows) you may specify the Store location. Use `CurrentUser` for
Azure Windows App Service or `LocalMachine` for Windows Server.
* **SigningCertificateThumbprint**: if you've specified a store location, provide the thumbprint of the certificate that will be used to issue tokens.
* **SigningCertificatePfxPath**: for instances whose OS does not provide a Certificate Store. Filesystem path to the certificate that will be used to issue tokens.
* **SigningCertificatePfxPassword**: for instances whose OS does not provide a Certificate Store. The password of the certificate that will be used to issue tokens.
* **ProtectorKeyStorePath**: filesystem path to save data protection keys.

* **DisableSignUp**: disables signup during application login of all subscriptions.
* **DisableCertificateSignUp**: disables digital certificate signup during application login of all subscriptions.
* **DisableConsoleSignUp**: disables signup during console login.

* **RequireEmailVerification** (default: `true`, v3.25.0): defines if console users need to verify their emails after signup.
* **RequirePhoneVerification** (default: `true`, v3.25.0): defines if console users need to verify their phone numbers after signup.

###  *Geolocation* Settings

Under section **Geolocation**. Credentials for the [MaxMind GeoIP service](https://www.maxmind.com/en/geoip2-services-and-databases):

* **MaxMindUserId**: MaxMind user ID.
* **MaxMindLicenseKey**: MaxMind license key.

###  *SMS* Settings

Under section **SMS**. Credentials for the [Twilio SMS Messaging Service](https://www.twilio.com/)

* **MessageFrom**: your twilio number. e.g: `+15165312774`
* **TwilioUrl**: your twilio message API URL. e.g: `https://api.twilio.com/2010-04-01/Accounts/ACCOUNTSID/Messages.json`
* **TwilioBasicCredential**: your twilio Account Sid and Auth Token separated by `:`. e.g: `ACCOUNTSID:AUTHTOKEN` 

###  *Caching* Settings

Under section **Caching**:

* **IdentityResources**: duration in seconds of the caching of Identity Resources.
* **ApiResources**: duration in seconds of the caching of Api Resources.
* **ApplicationContext**: duration in seconds of the caching of Application contexts.
* **SubscriptionContext**: duration in seconds of the caching of Subscription contexts.
* **Clients**: duration in seconds of the caching of Clients information.
* **Saml2Settings**: duration in seconds of the caching of SAML2 settings.