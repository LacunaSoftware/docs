```sh
mkdir /etc/signer
cp /usr/share/signer/config-templates/appsettings.linux.json /etc/signer/
chown -R root:signer /etc/signer
chmod -R a=,u+rwX,g+rX /etc/signer
```
