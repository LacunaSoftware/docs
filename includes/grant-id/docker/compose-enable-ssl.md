```yml
...

secrets:
  ...
  # Uncomment to enable SSL
  grantid_ssl_cert:
    external: true
  grantid_ssl_cert_key:
    external: true

...

services:
  
  ...

  nginx:
    ...
    secrets:
      # Uncomment to enable SSL
      - grantid_ssl_cert
      - grantid_ssl_cert_key
    ports:
      - "80:80"
      # Uncomment to enable SSL
      - "443:443"

...
```
