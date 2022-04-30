<!--

There is no support planned for 22.04, more info at:
* https://github.com/dotnet/core/issues/7038#issuecomment-1110377345
* https://docs.microsoft.com/en-us/dotnet/core/install/linux#ubuntu
* https://devblogs.microsoft.com/dotnet/april-2022-updates/

The `.deb` file *does* exist but `apt-get install aspnetcore-runtime-3.1` fails.

### Ubuntu 22.04 (LTS)

```bash
curl -O https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

```bash
apt-get update
apt-get install apt-transport-https
apt-get update
apt-get install aspnetcore-runtime-3.1
```

-->

### Ubuntu 21.10

```bash
curl -O https://packages.microsoft.com/config/ubuntu/21.10/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

```bash
apt-get update
apt-get install apt-transport-https
apt-get update
apt-get install aspnetcore-runtime-3.1
```

### Ubuntu 20.04 (LTS)

```bash
curl -O https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

```bash
apt-get update
apt-get install apt-transport-https
apt-get update
apt-get install aspnetcore-runtime-3.1
```

### Ubuntu 18.04 (LTS)

```bash
curl -O https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

```bash
add-apt-repository universe
apt-get update
apt-get install apt-transport-https
apt-get update
apt-get install aspnetcore-runtime-3.1
```

### Ubuntu 16.04 (LTS)

```bash
curl -O https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

```bash
apt-get update
apt-get install apt-transport-https
apt-get update
apt-get install aspnetcore-runtime-3.1
```
