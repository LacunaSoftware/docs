```sh
curl -O https://cdn.lacunasoftware.com/tsa/tsa-1.2.0.tar.gz
systemctl stop lacuna-tsa
rm -fR /usr/share/lacuna-tsa/*
tar xzf tsa-1.2.0.tar.gz -C /usr/share/lacuna-tsa
chmod -R a=,u+rwX,go+rX /usr/share/lacuna-tsa
systemctl start lacuna-tsa
```
