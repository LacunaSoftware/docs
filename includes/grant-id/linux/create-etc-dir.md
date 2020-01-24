```sh
mkdir /etc/grantid
cp config-templates/* /etc/grantid/
chown -R root:grantid /etc/grantid
chmod -R a=,u+rwX,go+rX /etc/grantid
```
