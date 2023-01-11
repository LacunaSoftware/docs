```sh
curl -O https://cdn.lacunasoftware.com/ampliareg/ampliareg-1.4.1.tar.gz
systemctl stop ampliareg
rm -fR /usr/share/ampliareg/*
tar xzf ampliareg-1.4.1.tar.gz -C /usr/share/ampliareg
chmod -R a=,u+rwX,go+rX /usr/share/ampliareg
systemctl start ampliareg
```
