```plaintext
# Identity Service

...

    # Uncomment to enable SSL
    listen               443 ssl;
    ssl_certificate      /run/secrets/grantid_ssl_cert;
    ssl_certificate_key  /run/secrets/grantid_ssl_cert_key;

...

# Auth Server

...

    # Uncomment to enable SSL
    listen               443 ssl;
    ssl_certificate      /run/secrets/grantid_ssl_cert;
    ssl_certificate_key  /run/secrets/grantid_ssl_cert_key;

...

# Console

...

    # Uncomment to enable SSL
    listen               443 ssl;
    ssl_certificate      /run/secrets/grantid_ssl_cert;
    ssl_certificate_key  /run/secrets/grantid_ssl_cert_key;

...
```
