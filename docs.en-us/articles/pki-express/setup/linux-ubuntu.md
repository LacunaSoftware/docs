# Install PKI Express on Ubuntu or Mint

In order to install PKI Express on Ubuntu (either desktop or server) or on Linux Mint,
you will need a license file. If you don't have a license yet, [request a trial license](https://www.lacunasoftware.com/en/home/purchase).

With the license file (**LacunaPkiLicense.config**) at hand, follow the steps below:

## 1. Add the Microsoft package feed

Register the Microsoft Product key as trusted:

[!include[Add product key](../../../../includes/pki-express/ubuntu/add-key.md)]

Add the Microsoft package feed

[!include[Add Microsoft feed](../../../../includes/pki-express/ubuntu/add-feed.md)]

## 2. Install .NET Core Runtime

> [!NOTE]
> Remove any previous preview versions of .NET Core from your system before continuing

[!include[Install dotnet](../../../../includes/pki-express/ubuntu/install-dotnet.md)]

## 3. Install PKI Express

Download PKI Express and extract to the destination directory:

[!include[Download and extract](../../../../includes/pki-express/linux/download-extract-wget.md)]

Create a shortcut to run PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/ubuntu/create-shortcut.md)]

Create a folder to write log files and configure it on PKI Express:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Activate PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Update

[!include[Update](../../../../includes/pki-express/linux/update-en.md)]
