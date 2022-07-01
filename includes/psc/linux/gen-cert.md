```sh
dotnet /usr/share/lacuna-psc/Lacuna.Psc.Site.dll -- gen-cert "Patorum PSC" "" /etc/lacuna-psc/issuer.pfx
chown -R root:lacuna-psc /etc/lacuna-psc && chmod -R a=,u+rwX,g+rX /etc/lacuna-psc
```
