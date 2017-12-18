# Install PKI Express on Red Hat Linux

In order to install PKI Express on Red Hat Enterprise Linux (RHEL),
you will need a license file. If you don't have a license yet, [request a trial license](https://www.lacunasoftware.com/en/home/purchase).

With the license file (**LacunaPkiLicense.config**) at hand, follow the steps below:

## 1. Enable the Red Hat .NET channel, available under your RHEL 7 subscription

Before continuing, your system needs to be registered on the Red Hat Subscription Manager and the .NET Core channel needs to be enabled.
For more information, check out the [Red Hat documentation](https://access.redhat.com/documentation/en-us/net_core/2.0/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Install .NET Core

```sh
sudo yum install rh-dotnet20 -y
```

## 2. Install .NET Core Runtime

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
echo -e '#!/bin/bash\nscl enable rh-dotnet20 -- dotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/bin/pkie
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
