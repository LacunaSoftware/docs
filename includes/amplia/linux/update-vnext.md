```sh
curl -O https://cdn.lacunasoftware.com/amplia/amplia-4.4.0-rc07.tar.gz
systemctl stop amplia
rm -fR /usr/share/amplia/*
tar xzf amplia-4.4.0-rc07.tar.gz -C /usr/share/amplia
chmod -R a=,u+rwX,go+rX /usr/share/amplia
systemctl start amplia
```
