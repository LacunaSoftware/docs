# Enabling SSL on Docker - GrantID

Store the certificate and key files as secrets:

[!include[Create SSL certificate secrets](../../../../../includes/grant-id/docker/create-ssl-cert-secret.md)]

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-compose.md)]

Uncomment the following entries:

[!include[Enable SSL on compose file](../../../../../includes/grant-id/docker/compose-enable-ssl.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../includes/grant-id/docker/edit-nginx-config.md)]

Uncomment the following entries:

(TODO)

Edit the GrantID configuration file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-grantid-config.md)]

Make the following changes:

* Section **Application**
  * **AuthServerUrl**: change the protocol of the URL to `https`, e.g. *https://id.patorum.com*
  * **ConsoleUrl**: change the protocol of the URL to `https`, e.g. *https://console.id.patorum.com*
  * **UseSSL**: change to `true`

## See also

* [Installing GrantID on Docker](index.md)
