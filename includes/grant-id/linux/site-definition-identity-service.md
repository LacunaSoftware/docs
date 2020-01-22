```nginx
server {
    listen        80;
    listen        443 ssl;
    server_name   api.patorumid.com;

    ssl_certificate      /etc/grantid/grantid.cer;
    ssl_certificate_key  /etc/grantid/grantid.key;

    location / {
        proxy_pass         http://localhost:5010;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```
