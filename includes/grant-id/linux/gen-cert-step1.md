```sh
openssl genrsa -out key.pem 2048
openssl req -x509 -new -days 36500 -key key.pem -out cert.pem
```
<!-- Then "openssl req" command takes input from stdin, therefore it must be the last command on this block! -->
