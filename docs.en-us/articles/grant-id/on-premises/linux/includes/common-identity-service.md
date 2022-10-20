We'll now install the **Identity Service** component. Edit the configuration file:

[!include[Edit Identity Service settings](../../../../../../includes/grant-id/linux/edit-settings-identity-service.md)]

Fill the following settings:

* Section **ConnectionStrings**
  * **DefaultConnection**: Database connection string (see how to [prepare the database](../../prepare-database.md))

[!include[SMS config](../../includes/sms-config.md)]

[!include[Email config](../../includes/email-config.md)]

Create the service, then enable and start it:

[!include[Create Identity Service daemon](../../../../../../includes/grant-id/linux/create-daemon-identity-service.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-identity-service.md)]

If necessary, restart the service: `systemctl restart grantid-identity-service`. If something seems wrong, check the logs: `journalctl -u grantid-identity-service`

> [!NOTE]
> If the logs show an exception stating that *an error occurred during the pre-login handshake* or that *the remote certificate was rejected*,
> add `;TrustServerCertificate=True` to your connection string on the file `/etc/grantid/identity-service.json` as a workaround

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-daemon-identity-service.md)]

The version of the component should be outputted.
