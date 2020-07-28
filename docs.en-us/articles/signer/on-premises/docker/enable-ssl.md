# Enabling SSL on Docker - Signer

Stop the stack (if already running):

[!include[Remove stack](../../../../../includes/signer/docker/remove-stack.md)]

Store the certificate and key files as secrets (replace *signer.pem* and *signer.key* below with your certificate and key files):

[!include[Create SSL certificate secrets](../../../../../includes/signer/docker/create-ssl-cert-secret.md)]

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/signer/docker/edit-compose.md)]

Uncomment the following entries:

[!include[Enable SSL on compose file](../../../../../includes/signer/docker/enable-ssl-docker-compose.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../includes/signer/docker/edit-nginx-config.md)]

Uncomment the following entries:

[!include[Enable SSL on Nginx config file](../../../../../includes/signer/docker/enable-ssl-nginx-config.md)]

Edit the Signer configuration file:

[!include[Edit config file](../../../../../includes/signer/docker/edit-signer-config.md)]

Make the following changes:

* Section **Bindings**
  * **HttpsMode**: change to `RedirectPages` to redirect to HTTPS users accessing the dashboard on HTTP
* Section **General**
  * **SiteUrl**: change the protocol of the URL to `https`, e.g. *https://signer.patorum.com*

Deploy the stack with the new configurations:

[!include[Deploy stack](../../../../../includes/signer/docker/deploy.md)]

## See also

* [Installing Signer on Docker](index.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
