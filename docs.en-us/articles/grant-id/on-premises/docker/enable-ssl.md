# Enabling SSL on Docker - GrantID

Stop the stack (if already running):

[!include[Remove stack](../../../../../includes/grant-id/docker/remove-stack.md)]

Store the certificate and key files as secrets (replace *grantid.pem* and *grantid.key* below with your certificate and key files):

[!include[Create SSL certificate secrets](../../../../../includes/grant-id/docker/create-ssl-cert-secret.md)]

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-compose.md)]

Uncomment the following entries:

[!include[Enable SSL on compose file](../../../../../includes/grant-id/docker/enable-ssl-docker-compose.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../includes/grant-id/docker/edit-nginx-config.md)]

Uncomment the following entries:

[!include[Enable SSL on Nginx config file](../../../../../includes/grant-id/docker/enable-ssl-nginx-config.md)]

Edit the GrantID configuration file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-grantid-config.md)]

Make the following changes:

* Section **Application**
  * **AuthServerUrl**: change the protocol of the URL to `https`, e.g. *https://id.patorum.com*
  * **ConsoleUrl**: change the protocol of the URL to `https`, e.g. *https://console.id.patorum.com*
  * **UseSSL**: change to `true`

Deploy the stack with the new configurations:

[!include[Deploy stack](../../../../../includes/grant-id/docker/deploy.md)]

## See also

* [Installing GrantID on Docker](index.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
