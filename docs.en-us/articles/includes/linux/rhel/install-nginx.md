[!include[If you prefer Apache](../apache-instead.md)]

Install Nginx (if not already installed):

[!include[Install nginx](../../../../../includes/linux/rhel/install-nginx.md)]

[!include[Test nginx](../test-nginx.md)]

Edit the Nginx configuration:

[!include[Edit nginx config](../../../../../includes/linux/rhel/edit-nginx-config.md)]

Delete or comment-out (with `#`s) the entire `server` section, shown below:

[!include[Section of nginx config to delete](../../../../../includes/linux/rhel/nginx-config-to-delete.md)]