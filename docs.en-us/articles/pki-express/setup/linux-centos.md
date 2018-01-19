# Install PKI Express on CentOS or Oracle Linux

[!include[To install](includes/intro-prefix.md)] on CentOS or Oracle Linux [!include[you will need](includes/intro-suffix.md)]

[!include[With the license file](includes/prereqs-reminder.md)]

## 1. Add the Microsoft package feed

[!include[Add Microsoft feed](../../../../includes/pki-express/centos/add-feed.md)]

## 2. Install .NET Core Runtime

[!include[Remove previews](includes/remove-previews.md)]

[!include[Install dotnet](../../../../includes/pki-express/centos/install-dotnet.md)]

## 3. Install PKI Express

Download PKI Express and extract to the destination directory:

[!include[Install](../../../../includes/pki-express/linux/install-curl.md)]

Create a shortcut to run PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/centos/create-shortcut.md)]

Create a folder to write log files and configure it on PKI Express:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Activate PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

[!include[If activation fails](includes/manual-activation.md)]

<a name="update" />
## Update

[!include[Update](includes/update-curl.md)]
