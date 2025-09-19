﻿```sh
curl -O https://cdn.lacunasoftware.com/psc/psc-1.7.0-rc01.tar.gz
systemctl stop lacuna-psc
rm -fR /usr/share/lacuna-psc/*
tar xzf psc-1.7.0-rc01.tar.gz -C /usr/share/lacuna-psc
chmod -R a=,u+rwX,go+rX /usr/share/lacuna-psc
systemctl start lacuna-psc
```
