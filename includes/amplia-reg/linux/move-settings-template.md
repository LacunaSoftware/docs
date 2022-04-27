```sh
mkdir /etc/ampliareg
cp /usr/share/ampliareg/config-templates/appsettings.linux.json /etc/ampliareg/
chown -R root:ampliareg /etc/ampliareg
chmod -R a=,u+rwX,g+rX /etc/ampliareg
```
