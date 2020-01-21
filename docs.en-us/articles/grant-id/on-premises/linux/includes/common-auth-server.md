We'll now install the **Auth Server** component. First, copy the binaries:

[!include[Copy Auth Server files](../../../../../../includes/grant-id/linux/copy-files-auth-server.md)]

Create the configuration file from the given template and edit it:

[!include[Create Auth Server settings](../../../../../../includes/grant-id/linux/create-settings-auth-server.md)]

Fill the following settings:

* Section **Logging**
* Section **Serilog**
* Section **Application**
  * **WebPkiLicense**: your license for the Web PKI component in binary (Base64) format. Required if you intend to enable login with X.509 certificates
  * **DisableSignUp**: whether user sign-up should be disabled (in which case users can only be created by applications through API integration)
* Section **ActiveDirectory**

Create the service definition file:

[!include[Create Auth Server daemon](../../../../../../includes/grant-id/linux/create-daemon-auth-server.md)]

Enter the following:

[!include[Auth Server daemon definition](../../../../../../includes/grant-id/linux/daemon-definition-auth-server.md)]

Save the file, then enable the service and start it:

[!include[Start service](../../../../../../includes/grant-id/linux/start-auth-server.md)]

The expected output is similar to:

[!include[Expected output](../../../../../../includes/grant-id/linux/start-output-auth-server.md)]

If necessary, restart the service: `systemctl restart grantid-auth-server`

To test that the service is running, run:

[!include[Test service](../../../../../../includes/grant-id/linux/test-auth-server.md)]

The source for an HTML document should be outputted.
