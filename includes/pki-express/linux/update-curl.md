```sh
curl -O https://cdn.lacunasoftware.com/pki-express/linux/pkie-1.29.0.tar.gz
sudo rm -R /usr/share/pkie/*
sudo tar xzf pkie-1.29.0.tar.gz -C /usr/share/pkie
sudo chmod -R a=r,a+X,u+w /usr/share/pkie
```
