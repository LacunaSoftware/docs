```nginx
server {
    listen        80;
    listen        443 ssl;

	# Public domain of the Auth Server
    server_name   patorumid.com;

	# Path of the SSL certificate and key in PEM format
    ssl_certificate      /etc/ssl/certs/grantid.pem;
    ssl_certificate_key  /etc/ssl/keys/grantid.key;

    location / {
        proxy_pass         http://localhost:5011;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_buffer_size       16k;
        proxy_busy_buffers_size 16k;
    }
}
```
