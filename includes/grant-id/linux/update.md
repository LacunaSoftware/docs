```sh
systemctl stop grantid-console
systemctl stop grantid-auth-server
systemctl stop grantid-identity-service

tar xzf identity-service.tar.gz -C /usr/share/grantid/identity-service
tar xzf auth-server.tar.gz -C /usr/share/grantid/auth-server
tar xzf console.tar.gz -C /usr/share/grantid/console

chmod -R a=,u+rwX,go+rX /usr/share/grantid

systemctl start grantid-identity-service
systemctl start grantid-auth-server
systemctl start grantid-console
```
