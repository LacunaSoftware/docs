﻿```sh
curl -O https://cdn.lacunasoftware.com/amplia/amplia-4.12.0-rc02.tar.gz
systemctl stop amplia
rm -fR /usr/share/amplia/*
tar xzf amplia-4.12.0-rc02.tar.gz -C /usr/share/amplia
chmod -R a=,u+rwX,go+rX /usr/share/amplia
systemctl start amplia
```
