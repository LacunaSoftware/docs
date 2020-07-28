```yml
...

secrets:
  ...
  # Uncomment to enable SSL
  signer_ssl_cert:
    external: true
  signer_ssl_cert_key:
    external: true

...

services:
  
  ...

  nginx:
    ...
    # Uncomment to enable SSL
    secrets:
      - signer_ssl_cert
      - signer_ssl_cert_key
    ports:
      - "80:80"
      # Uncomment to enable SSL
      - "443:443"

...
```
