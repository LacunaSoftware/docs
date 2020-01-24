```sh
openssl rand -base64 -out /etc/grantid/temp-token-key 32
chown root:grantid /etc/grantid/temp-token-key
chmod 640 /etc/grantid/temp-token-key
```
