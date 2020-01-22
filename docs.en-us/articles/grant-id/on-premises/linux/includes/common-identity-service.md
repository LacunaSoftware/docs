We'll now install the **Identity Service** component. First, copy the binaries:

[!include[Copy Identity Service files](../../../../../../includes/grant-id/linux/copy-files-identity-service.md)]

Create the configuration file from the given template and edit it:

[!include[Create Identity Service settings](../../../../../../includes/grant-id/linux/create-settings-identity-service.md)]

Fill the following settings:

* Section **ConnectionStrings**
  * **DefaultConnection**: ?
* Section **Logging**:
* Section **Serilog**
* Section **Application**
  * **AuthenticatorIssuer**: ?
  * **TempTokenPassword**: ?
  * **InternalTokenValidityMiliseconds**: ?
  * **EnableAudit**: ?
  * **PasswordHashIterationCount**: ?
  * **PasswordTokenValidityMinutes**: ?
* Section **BlobStorage**
* Section **PkiSuite**
* Section **TrustArbitrator**
* Section **Geolocation**
* Section **SMS**
* Section **Email**
* Section **ExternalValidation**
* Section **ApplicationInsights**

Create the service definition file:

[!include[Create Identity Service daemon](../../../../../../includes/grant-id/linux/create-daemon-identity-service.md)]

Enter the following:

[!include[Identity Service daemon definition](../../../../../../includes/grant-id/linux/daemon-definition-identity-service.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/grant-id/linux/start-identity-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-identity-service.md)]

If necessary, restart the service: `systemctl restart grantid-identity-service`

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-daemon-identity-service.md)]

The version of the component should be outputted.
