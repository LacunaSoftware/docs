# Install PKI Express on CentOS or Oracle Linux

In order to install PKI Express on CentOS or Oracle Linux,
you will need a license file. If you don't have a license yet, [request a trial license](https://www.lacunasoftware.com/en/home/purchase).

With the license file (**LacunaPkiLicense.config**) at hand, follow the steps below:

## 1. Add the Microsoft package feed

[!include[Add Microsoft feed](../../../../includes/pki-express/centos/add-feed.md)]

## 2. Install .NET Core Runtime

> [!NOTE]
> Remove any previous preview versions of .NET Core from your system before continuing

[!include[Install dotnet](../../../../includes/pki-express/centos/install-dotnet.md)]

## 3. Install PKI Express

Download PKI Express and extract to the destination directory:

[!include[Download and extract](../../../../includes/pki-express/linux/download-extract-curl.md)]

Create a shortcut to run PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/centos/create-shortcut.md)]

Create a folder to write log files and configure it on PKI Express:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Activate PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Update

[!include[Update](../../../../includes/pki-express/linux/update-en.md)]
