```yml
...

secrets:
  ...
  # Uncomment to enable SSL
  amplia_ssl_cert:
    external: true
  amplia_ssl_cert_key:
    external: true

...

services:
  
  ...

  nginx:
    ...
    # Uncomment to enable SSL
    secrets:
      - amplia_ssl_cert
      - amplia_ssl_cert_key
    ports:
      - "80:80"
      # Uncomment to enable SSL
      - "443:443"

...
```
