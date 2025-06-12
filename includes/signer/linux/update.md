﻿```sh
curl -O https://cdn.lacunasoftware.com/signer/signer-2.1.0.tar.gz
systemctl stop lacuna-signer
rm -fR /usr/share/lacuna-signer/*
tar xzf signer-2.1.0.tar.gz -C /usr/share/lacuna-signer
chmod -R a=,u+rwX,go+rX /usr/share/lacuna-signer
systemctl start lacuna-signer
```
