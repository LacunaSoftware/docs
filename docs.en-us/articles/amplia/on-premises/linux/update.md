# Updating Amplia on Linux

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

```sh
wget https://cdn.lacunasoftware.com/amplia/amplia-2.15.0.tar.gz
sudo systemctl stop amplia
sudo tar xzf amplia-2.15.0.tar.gz -C /usr/share/amplia
sudo chmod -R a=rX,u+w /usr/share/amplia
sudo systemctl start amplia
```

> [!TIP]
> If the first command fails because your system lacks *wget*, use curl instead: `curl -O https://cdn.lacunasoftware.com/amplia/amplia-2.15.0.tar.gz`

## See also

* [Setup on Linux](index.md)
* [Troubleshooting](troubleshoot/index.md)
