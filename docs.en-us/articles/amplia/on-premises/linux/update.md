# Updating Amplia on Linux

To update your [on-premises installation](../index.md) of [Amplia](../../index.md), follow the steps below:

[!include[Proceed as root](includes/su.md)]

```sh
curl -O https://cdn.lacunasoftware.com/amplia/amplia-2.15.2.tar.gz
systemctl stop amplia
tar xzf amplia-2.15.2.tar.gz -C /usr/share/amplia
chmod -R a=,u+rwX,go+rX /usr/share/amplia
systemctl start amplia
```

## See also

* [Setup on Linux](index.md)
* [Troubleshooting](troubleshoot/index.md)
