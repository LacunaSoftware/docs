# Install PKI Express on Ubuntu or Mint

In order to install PKI Express on Ubuntu (either desktop or server) or on Linux Mint,
you will need a license file. If you don't have a license yet, [request a trial license](https://www.lacunasoftware.com/en/home/purchase).

With the license file (**LacunaPkiLicense.config**) at hand, follow the steps below:

## 1. Add the Microsoft package feed

Register the Microsoft Product key as trusted:

```sh
wget -qO - https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Add the Microsoft package feed

* Ubuntu 17.10

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/17.10/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

* Ubuntu 17.04

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/17.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

* Ubuntu 16.04 / Linux Mint 18

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

* Ubuntu 14.04 / Linux Mint 17

```sh
wget -qO - https://packages.microsoft.com/config/ubuntu/14.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list
```

## 2. Install .NET Core Runtime

> [!NOTE]
> Remove any previous preview versions of .NET Core from your system before continuing

```sh
sudo apt-get update
sudo apt-get install dotnet-runtime-2.0.3
```

## 3. Install PKI Express

Download PKI Express and extract to the destination directory:

```sh
wget https://files.lacunasoftware.com/pki-express/linux/pkie-1.1.0.tar.gz
sudo mkdir /usr/share/pkie
sudo tar xzf pkie-1.1.0.tar.gz -C /usr/share/pkie
sudo chmod 755 -R /usr/share/pkie
```

Create a shortcut to run PKI Express:

```sh
echo -e '#!/bin/bash\ndotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/local/bin/pkie
sudo chmod +x /usr/local/bin/pkie
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
