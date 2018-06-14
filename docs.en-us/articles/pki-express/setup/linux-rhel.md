# Install PKI Express on Red Hat Enterprise Linux

[!include[To install](includes/intro-prefix.md)] on Red Hat Enterprise Linux (RHEL) [!include[you will need](includes/intro-suffix.md)]

[!include[With the license file](includes/prereqs-reminder.md)]

## 1. Enable the Red Hat .NET channel

Before continuing, your system needs to be registered on the Red Hat Subscription Manager and the .NET Core channel needs to be enabled.
For more information, check out the [Red Hat documentation](https://access.redhat.com/documentation/en-us/net_core/2.1/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Install .NET Core

[!include[Install dotnet](../../../../includes/pki-express/rhel/install-dotnet.md)]

<a name="install" />
## 3. Install PKI Express

Download PKI Express and extract to the destination directory:

[!include[Install](../../../../includes/pki-express/linux/install-curl.md)]

Create a shortcut to run PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/rhel/create-shortcut.md)]

Create a folder to write log files and configure it on PKI Express:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Activate PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

[!include[If activation fails](includes/manual-activation.md)]

<a name="update" />
## Update

[!include[Update](includes/update-curl.md)]
