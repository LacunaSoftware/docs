We'll now install the **Auth Server** component.

> [!NOTE]
> Typically, the Auth Server does not need any additional configuration, so there's nothing to fill on */etc/grantid/auth-server.log*

Create the service, then enable and start it:

[!include[Create Auth Server daemon](../../../../../../includes/grant-id/linux/create-daemon-auth-server.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-auth-server.md)]

If necessary, restart the service: `systemctl restart grantid-auth-server`

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-daemon-auth-server.md)]

The source for an HTML document should be outputted.
