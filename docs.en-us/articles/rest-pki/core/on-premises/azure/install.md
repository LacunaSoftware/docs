# Installing Rest PKI Core on Azure App Services

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

To install an [on-premises](../index.md) instance of [Rest PKI Core](../../index.md) on an [Azure App Service](https://docs.microsoft.com/azure/app-service/overview),
follow the steps below. For other platforms, [click here](../index.md#platforms).

> [!TIP]
> To be able to use the free SSL certificates provided by *App Service Managed Certificates*, we suggest not choosing "naked domains",
> that is, domains without a subdomain portion, for example ~~patorum.com~~. Prefer, for instance, `restpki.patorum.com`.

## Preparation

The instructions below assume that you already have the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed locally and that you
already have the following resources created on your Azure account:

* A *SQL Server* (creating the *SQL database* is covered by this article)
* An *App Service Plan* with the **Linux** operating system (creating the App Service is covered by this article)
* A DNS zone for the domain used to access Rest PKI Core

During the installation, some resources will be created:

* A *Container Registry*
* A database (*SQL database*)
* A *storage account*
* An App Service

[!include[Recommendations](../../../../includes/azure/prep-recommendations.md)]

[!include[Create the Container registry](../../../../includes/azure/create-acr.md)]

Once the *container registry* has been created, replicate the system's Docker image to it (replace `MY_ACR_NAME` with the name chosen
in the previous step):

```sh
az login
```

> [!NOTE]
> If you have access to more than one Azure account, you may need to pass the `--tenant YOUR_TENANT` argument

```sh
az acr login --name MY_ACR_NAME
az acr import --name MY_ACR_NAME --source docker.io/lacunasoftware/restpkicore:4.2.5 --image restpkicore:4.2.5
```

> [!TIP]
> Replace `4.2.5` with the currently recommended version (see the [Docker setup](../docker.md))

[!include[Create the database](../../../../includes/azure/create-database.md)]

[!include[Create a storage account](../../../../includes/azure/create-storage.md)]

[!include[Create the App Service](../../../../includes/azure/create-webapp-docker.md)]

## Domain configuration

Create the DNS record for the domain used to access Rest PKI Core:

[!include[Create the DNS record](../../../../includes/azure/create-dns-record.md)]

After creating the record, add the domain to the *App Service*:

[!include[Add the domain](../../../../includes/azure/add-custom-domain.md)]

## Rest PKI Core configuration

On the App Service side menu, under the *Development Tools* section, click **SSH**, then **Go &rarr;**. You will be taken to a terminal. Navigate
to the `/app` folder:

```bash
cd /app
```

> [!TIP]
> Even though the terminal appears to start in the `/app` folder, the command above **is necessary** due to an Azure bug

Run the command below to generate the cryptographic key used to encrypt sensitive values stored in the database:

```cmd
dotnet Lacuna.RestPki.Site.dll -- gen-enc-key
```

Take note of the generated value.

Choose a strong password to protect *root* access to the dashboard, and compute the hash of that password with the command below:

```cmd
dotnet Lacuna.RestPki.Site.dll -- hash-root-pass
```

Again, take note of the generated value.

Close the terminal, returning to the Azure portal. On the App Service, go to **Configuration** and add the following settings:

* `General__AppDiscriminator`: see the [App discriminator](#app-discriminator) section below
* `General__EncryptionKey`: the cryptographic key generated above
* `General__RootPasswordHash`: the *root* password hash computed above
* `General__SiteUrl`: the public URL of the site (e.g.: `https://restpki.patorum.com/`)
* `General__SiteName` (optional): the name of your Rest PKI Core instance (defaults to *Rest PKI Core*)
* `Oidc__Enabled`: `False` (disables the [OpenID Connect integration](../configure-oidc.md), for now)

> [!NOTE]
> If you want to enable user management through OpenID Connect, leave the `General__RootPasswordHash` setting blank and follow the steps on
> [Configure OpenID Connect](../configure-oidc.md).

Also add the settings described in the sections below.

<a name="app-discriminator" />

### App discriminator

The `General__AppDiscriminator` setting identifies the instance and is used to derive the system's data protection keys.

> [!WARNING]
> This setting is **required** on Azure App Services. If it is not set explicitly, a value is derived automatically and may
> **change when the container is recreated**, which prevents the decryption of sensitive data already stored, causing **data loss**. Choose a
> stable value (for example `RestPkiCore`) and **never change it** after installation. For more details, see the *Set an explicit AppDiscriminator*
> section of the article [Update from 2.x to 3.0](../update-30.md#2-set-an-explicit-appdiscriminator).

* `General__AppDiscriminator`: a stable value identifying the instance, e.g.: `RestPkiCore`

### PKI Suite

PKI Suite settings:

* `PkiSuite__SdkLicense`: your license for the PKI SDK, in Base64 format (**required**)
* `PkiSuite__WebLicense`: your license for the Web PKI component in binary (Base64) format. Only required if users will sign documents with certificates on their computers (in-browser signature via Web PKI)

### Blob Storage

*storage account* configuration (the storage type and container name already come preconfigured for the Azure environment):

* `BlobStorage__ConnectionString`: the *connection string* of the *storage account* created earlier
* `BlobStorage__ContainerName` (optional): the name of the *container* used to store files. If omitted, a container named *restpki* is used.

### Logging

Log configuration (the Azure Table log *sink* already comes preconfigured for the Azure environment):

* `Serilog__WriteTo__0__Args__connectionString`: the *connection string* of the *storage account* created earlier
* `Serilog__WriteTo__0__Args__storageTableName` (optional): the name of the table used to store the logs. If omitted, a table named *RestPkiCoreLog* is used.

### Connection string

In the *Connection strings* section (at the bottom of the settings page), click **+ New connection string** and fill in:

* **Name**: `DefaultConnection`
* **Value**: the connection string value obtained while creating the database
* **Type**: choose **SQLAzure**

> [!TIP]
> Rest PKI Core is also compatible with PostgreSQL. If you want to use an Azure Database for PostgreSQL database, please contact support for more
> information. For details on the supported databases, see [Preparing a database](../prepare-database.md).

Save the settings made so far by clicking **Save**.

> [!NOTE]
> Whenever the documentation mentions something like "in the **Sec** section, set the **Conf** setting to ...", on Azure App Services you must
> compose the setting name from the section and setting names separated by `__` (**two** underscores), that is, in the example above: `Sec__Conf`

## Starting the App Service

Finally, remove the `STANDBY` setting from the App Service and save the settings. Then access the public URL of the site (the first access may take a few moments).

Authenticate with the *root* password chosen during configuration. You will then have access to the dashboard.

To start using the system, create a [subscription](../create-sub.md) and add an administrative user to it.

## See also

* [Creating a subscription on Rest PKI Core](../create-sub.md)
* [Updating Rest PKI Core on Azure App Services](update.md)
