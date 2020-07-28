```plaintext
...

    # Uncomment to enable SSL
    listen               443 ssl;
    ssl_certificate      /run/secrets/signer_ssl_cert;
    ssl_certificate_key  /run/secrets/signer_ssl_cert_key;

...
```
