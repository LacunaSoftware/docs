﻿# Enabling SSL on Docker Swarm - Amplia

Stop the stack (if already running):

[!include[Remove stack](../../../../../../includes/amplia/docker/remove-stack.md)]

Store the certificate and key files as secrets (replace *amplia.pem* and *amplia.key* below with your certificate and key files):

[!include[Create SSL certificate secrets](../../../../../../includes/amplia/docker/create-ssl-cert-secret.md)]

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../../includes/amplia/docker/edit-compose.md)]

Uncomment the following entries:

[!include[Enable SSL on compose file](../../../../../../includes/amplia/docker/enable-ssl-docker-compose.md)]

Edit the Nginx configuration file:

[!include[Edit Nginx config](../../../../../../includes/amplia/docker/edit-nginx-config.md)]

Uncomment the following entries:

[!include[Enable SSL on Nginx config file](../../../../../../includes/amplia/docker/enable-ssl-nginx-config.md)]

Edit the Amplia configuration file:

[!include[Edit config file](../../../../../../includes/amplia/docker/edit-amplia-config.md)]

Make the following changes:

* Section **Bindings**
  * **HttpsMode**: change to `RedirectPages` to redirect to HTTPS users accessing the dashboard on HTTP
* Section **General**
  * **SiteUrl**: change the protocol of the URL to `https`, e.g. *https://ca.patorum.com*

Deploy the stack with the new configurations:

[!include[Deploy stack](../../../../../../includes/amplia/docker/deploy.md)]

## See also

* [Installing Amplia on Docker Swarm](index.md)
* [Using an external database](external-db.md)
* [Checking the system logs](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
