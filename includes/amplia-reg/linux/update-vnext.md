```sh
curl -O https://cdn.lacunasoftware.com/ampliareg/ampliareg-2.6.0-rc15.tar.gz
systemctl stop ampliareg
rm -fR /usr/share/ampliareg/*
tar xzf ampliareg-2.4.0-rc02.tar.gz -C /usr/share/ampliareg
chmod -R a=,u+rwX,go+rX /usr/share/ampliareg
systemctl start ampliareg
```
