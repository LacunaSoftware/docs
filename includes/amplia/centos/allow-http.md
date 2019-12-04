<!-- https://linuxconfig.org/how-to-open-http-port-80-on-redhat-7-linux-using-firewall-cmd -->
```sh
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
sudo firewall-cmd --reload
```
