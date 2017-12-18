# Install PKI Express on CentOS or Oracle Linux

In order to install PKI Express on CentOS or Oracle Linux,
you will need a license file. If you don't have a license yet, [request a trial license](https://www.lacunasoftware.com/en/home/purchase).

With the license file (**LacunaPkiLicense.config**) at hand, follow the steps below:

## 1. Add the Microsoft package feed

```sh
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e '[packages-microsoft-com-prod]\nname=packages-microsoft-com-prod \nbaseurl=https://packages.microsoft.com/yumrepos/microsoft-rhel7.3-prod\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc' | sudo tee /etc/yum.repos.d/dotnetdev.repo
```

## 2. Install .NET Core Runtime

> [!NOTE]
> Remove any previous preview versions of .NET Core from your system before continuing

```sh
sudo yum update
sudo yum install libunwind libicu
sudo yum install dotnet-runtime-2.0.3
```

## 3. Install PKI Express

Install `wget` if you haven't installed it previously:

```sh
sudo yum install wget
```

Download PKI Express and extract to the destination directory:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.1.0.tar.gz
sudo mkdir /usr/share/pkie
sudo tar xzf pkie-1.1.0.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

Create a shortcut to run PKI Express:

```sh
echo -e '#!/bin/bash\ndotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/bin/pkie
sudo chmod +x /usr/bin/pkie
```

Create a folder to write log files and configure it on PKI Express:

```sh
sudo mkdir /var/log/pkie
sudo chmod 777 /var/log/pkie
sudo pkie config --set logdir=/var/log/pkie
```

Activate PKI Express:

```sh
sudo pkie activate LacunaPkiLicense.config
```

<a name="update" />
## Update

To update PKI Express, simply download the new package and extract to the destination folder:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.1.0.tar.gz
sudo rm -R /usr/share/pkie/*
sudo tar xzf pkie-1.1.0.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

> [!NOTE]
> If you are updating from a version 1.0.x, you will need to configure the log folder and activate PKI Express (see instructions above)
