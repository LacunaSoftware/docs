```sh
curl -O https://cdn.lacunasoftware.com/amplia/amplia-2.15.2.tar.gz
systemctl stop amplia
tar xzf amplia-2.15.2.tar.gz -C /usr/share/amplia
chmod -R a=,u+rwX,go+rX /usr/share/amplia
systemctl start amplia
```
