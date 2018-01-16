# Install PKI Express on Red Hat Linux

In order to install PKI Express on Red Hat Enterprise Linux (RHEL),
you will need a license file. If you don't have a license yet, [request a trial license](https://www.lacunasoftware.com/en/home/purchase).

With the license file (**LacunaPkiLicense.config**) at hand, follow the steps below:

## 1. Enable the Red Hat .NET channel

Before continuing, your system needs to be registered on the Red Hat Subscription Manager and the .NET Core channel needs to be enabled.
For more information, check out the [Red Hat documentation](https://access.redhat.com/documentation/en-us/net_core/2.0/html/getting_started_guide/gs_install_dotnet#install_register_rehel).

## 2. Install .NET Core

[!include[Install dotnet](../../../../includes/pki-express/redhat/install-dotnet.md)]

## 2. Install .NET Core Runtime

Download PKI Express and extract to the destination directory:

[!include[Download and extract](../../../../includes/pki-express/linux/download-extract-curl.md)]

Create a shortcut to run PKI Express:

[!include[Create shortcut](../../../../includes/pki-express/redhat/create-shortcut.md)]

Create a folder to write log files and configure it on PKI Express:

[!include[Configure log](../../../../includes/pki-express/linux/config-log.md)]

Activate PKI Express:

[!include[Activate](../../../../includes/pki-express/linux/activate.md)]

<a name="update" />
## Update

[!include[Update](../../../../includes/pki-express/linux/update-en.md)]
