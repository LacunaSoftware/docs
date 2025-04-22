```sh
curl -O https://cdn.lacunasoftware.com/signer/signer-1.80.1.tar.gz
systemctl stop lacuna-signer
rm -fR /usr/share/lacuna-signer/*
tar xzf signer-1.80.1.tar.gz -C /usr/share/lacuna-signer
chmod -R a=,u+rwX,go+rX /usr/share/lacuna-signer
systemctl start lacuna-signer
```
