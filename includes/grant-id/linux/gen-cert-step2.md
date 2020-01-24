```sh
openssl pkcs12 -export -in cert.pem -inkey key.pem -out /etc/grantid/issuer.pfx
```
<!-- Then "openssl pkcs12" command takes input from stdin, therefore it must be the last command on this block! -->
