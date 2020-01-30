```sh
openssl pkcs12 -export -in cert.pem -inkey key.pem | docker secret create grantid_issuer_cert -
```
