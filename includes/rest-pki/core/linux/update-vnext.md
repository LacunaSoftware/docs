```sh
curl -O https://cdn.lacunasoftware.com/restpkicore/restpkicore-3.0.0-rc01.tar.gz
systemctl stop restpkicore
rm -fR /usr/share/restpkicore/*
tar xzf restpkicore-3.0.0-rc01.tar.gz -C /usr/share/restpkicore
chmod -R a=,u+rwX,go+rX /usr/share/restpkicore
systemctl start restpkicore
```
