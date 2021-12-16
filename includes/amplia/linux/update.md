```sh
curl -O https://cdn.lacunasoftware.com/amplia/amplia-3.13.2.tar.gz
systemctl stop amplia
rm -fR /usr/share/amplia/*
tar xzf amplia-3.13.2.tar.gz -C /usr/share/amplia
chmod -R a=,u+rwX,go+rX /usr/share/amplia
systemctl start amplia
```
