```sh
curl -O https://cdn.lacunasoftware.com/signer/signer-1.0.0.tar.gz
systemctl stop signer
rm -fR /usr/share/signer/*
tar xzf signer-1.0.0.tar.gz -C /usr/share/signer
chmod -R a=,u+rwX,go+rX /usr/share/signer
systemctl start signer
```
