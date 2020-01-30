# Enabling SSL on Docker - GrantID

Store the certificate and key files as secrets:

[!include[Create SSL certificate secrets](../../../../../includes/grant-id/docker/create-ssl-cert-secret.md)]

Edit the *grantid.yml* file (`nano grantid.yml`) and uncomment the following entries:

[!include[Enable SSL on compose file](../../../../../includes/grant-id/docker/compose-enable-ssl.md)]

Edit the *nginx.conf* file (`nano nginx.conf`) and uncomment the following entries:

(TODO)

## See also

* [Installing GrantID on Docker](index.md)
