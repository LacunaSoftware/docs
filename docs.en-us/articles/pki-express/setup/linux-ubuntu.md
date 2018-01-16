# Install PKI Express on Ubuntu or Mint

[!include[To install](includes/intro-prefix.md)] on Ubuntu (either desktop or server) or on Linux Mint [!include[you will need](includes/intro-suffix.md)]

[!include[With the license file](includes/prereqs-reminder.md)]

## 1. Add the Microsoft package feed

Register the Microsoft Product key as trusted:

[!include[Add product key](../../../../includes/pki-express/ubuntu/add-key.md)]

Add the Microsoft package feed

[!include[Add Microsoft feed](../../../../includes/pki-express/ubuntu/add-feed.md)]

## 2. Install .NET Core Runtime

[!include[Remove previews](includes/remove-previews.md)]

[!include[Install dotnet](../../../../includes/pki-express/ubuntu/install-dotnet.md)]

## 3. Install PKI Express

Download PKI Express and extract to the destination directory:

[!include[Install](../../../../includes/pki-express/linux/install-wget.md)]

Create a shortcut to run PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/ubuntu/create-shortcut.md)]

Create a folder to write log files and configure it on PKI Express:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Activate PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Update

[!include[Update](includes/update-wget.md)]
