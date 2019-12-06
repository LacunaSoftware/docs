```sh
mkdir /etc/amplia
cp /usr/share/amplia/config-templates/appsettings.linux.json /etc/amplia/
chown -R root:amplia /etc/amplia
chmod -R a=,u+rwX,g+rX /etc/amplia
```
