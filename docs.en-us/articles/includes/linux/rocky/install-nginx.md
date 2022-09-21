[!include[If you prefer Apache](../apache-instead.md)]

Install Nginx (if not already installed):

[!include[Install nginx](../../../../../includes/linux/rocky/install-nginx.md)]

[!include[Test nginx](../test-nginx.md)]

Edit the Nginx configuration:

[!include[Edit nginx config](../../../../../includes/linux/rocky/edit-nginx-config.md)]

Delete or comment out (with `#`s) the entire `server` section, located right below the clause `include /etc/nginx/conf.d/*.conf;`. After
commenting out the section, the configuration file should look similar to this:

[!include[Section of nginx config to delete](../../../../../includes/linux/rocky/nginx-config-after.md)]
