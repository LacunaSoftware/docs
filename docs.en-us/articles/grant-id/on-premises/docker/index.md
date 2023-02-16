# GrantID - Setup on Docker

To install an [on-premises](../index.md) instance of [GrantID](../../index.md) on Docker, follow the steps below. For other platforms, [click here](../index.md#platforms).

For Docker-based setup the following image is provided on Docker Hub:

<br />
<center>
**[GrantID Docker Image](https://hub.docker.com/r/lacunasoftware/grantid)**
</center>
<br />

The currently recommended image is `lacunasoftware/grantid:4.2`

Available moving tags:

* Tag `4.2` points to the latest 4.2.x image **(currently recommended)**
* Tag `4` points to the lastest 4.x image
* Tag `stable` points to the latest stable image

This image requires: 

* **Blob storage** shared between all containers running the image -- see [Blob Storage configuration](../blob-storage.md)
* **Volume** shared between all containers running the image mounted on `/var/keys`, used to store data protection keys. Files on this volume are few, seldom written to and read only during container
  startup, therefore this can be any low-performing shared volume provided by whatever orchestrator you use.

[!include[Common prerequisites](../includes/common-requisites.md)]

## Configuration

The container for this image is configured using environment variables. Get the [**sample environment file**](https://cdn.lacunasoftware.com/grantid/docker/grantid.env) for a
template to fill in the image's settings.

To fill the `Application__TempTokenPassword` setting, generate a 256-bit key to encrypt sensitive data:

```sh
docker run lacunasoftware/psc:1 -- gen-enc-key
```

To fill the `Application__SigningCertificatePfxContent` and `Application__SigningCertificatePfxPassword` settings, generate a PFX file containing a self-signed certificate to sign OAuth tokens:

```sh
docker run lacunasoftware/psc:1 -- gen-cert "Your GrantID Name" SOME_PASSWORD
```

The output will be similar to:

```plaintext
$ docker run lacunasoftware/psc:1 -- gen-cert "Patorum ID" "1234"
PSC entrypoint invoked
Starting application

#
# PFX
#
MIIPwQ...AAA=

#
# Certificate
#
-----BEGIN CERTIFICATE-----
MIIE...
.......
...AAA=
-----END CERTIFICATE-----

#
# Thumbprint
#
0123...CDEF
```

Copy the entire contents of the **PFX** section (all as a single line) over to the `Application__SigningCertificatePfxContent` setting (in the example above, `MIIPwQ...AAA=`, in reality this would be
close to 5000 characters) and fill the `Application__SigningCertificatePfxPassword` setting with the same password you used on the generation command.

Additional settings can be found at the [GrantID Settings page](../settings.md).

## Installation

Pull the latest stable image, get the sample configuration file, the required environment variables and run the container. 

> [!WARNING]
> Start with **only one container** as in the first startup, the database tables will be created (more containers could create a race condition). 
> Once the initial startup is complete, you may run as many containers as you want.

## Exposed ports

GrantID is composed of three services which the image exposes in a single container, listening on the following ports:

Service          | Default Port | Environment variable to customize
---------------- | ------------ | ---------------------------------
Identity Service | 5010         | GRANTID_IDENTITY_SERVICE_PORT
Auth Server      | 5011         | GRANTID_AUTH_SERVER_PORT
Console          | 5012         | GRANTID_CONSOLE_PORT

> [!NOTE]
> If you need one image per service for fine-grained control of your containers contact us.

<a name="routing" />
## Routing

Your environment configuration must direct traffic from the [application domains](../index.md#planning) to the container ports in the following way:

Domain type | Example                    | Destination container port
----------- | -------------------------- | --------------------------
Base domain | id.yourcompany.com         | 5011 (Auth Server)
Login       | login.id.yourcompany.com   | 5011 (Auth Server)
Console     | console.id.yourcompany.com | 5012 (Console)
API         | api.id.yourcompany.com     | 5010 (Identity Service)

## Example

In a production environment you would typically use a Docker orchestrator to handle issues such as routing and a dedicated database server (or a IaaS database offering), but for testing
purposes you can run an instance of GrantID with an instance of PostgreSQL with Docker alone and emulate the routing by setting the DNS resolution of app domains to the loopback interface.

Start by appending the entries below to your OS's hosts file (on Windows *C:\Windows\System32\drivers\etc\hosts*, on Linux */etc/hosts*) to map the app domains back to the loopback interface
(replace the domains with domains of your choice):

```plaintext
127.0.0.1 id.yourcompany.com
127.0.0.1 login.id.yourcompany.com
127.0.0.1 console.id.yourcompany.com
127.0.0.1 api.id.yourcompany.com
```

Create a volume for the database server:

```sh
docker volume create grantid_sql
```

Start it with a password of your choice (replace `SOME_PASS` below):

```sh
docker run --name grantid_sql -v grantid_sql:/var/lib/postgresql/data -p 5432:5432 -e "POSTGRES_PASSWORD=SOME_PASS" -d postgres
```

Check the container logs for any errors:

```sh
docker logs -f grantid_sql
```

This can take a few minutes. Once the database server is up and running, hit CTRL+C to exit the logs.

Create a volume to use as blob storage and another one to store data protection keys:

```sh
docker volume create grantid_data
docker volume create grantid_keys
```

Then, download the [sample environment file](https://cdn.lacunasoftware.com/grantid/docker/grantid.env), save it with name *grantid.env*
and fill it out.

On the connection string configuration, use the value below replacing `HOST_IP` with the IP address of the host and `SOME_PASS` with the
password you chose for PostgreSQL:

```sh
ConnectionStrings__DefaultConnection=Host=HOST_IP;Database=grantid;Username=postgres;Password=SOME_PASS
ConnectionStrings__DefaultConnection_ProviderName=Postgres
```

Set the URL settings as follows (replace the auth server URL with the domain of your choice):

```sh
Application__AuthServerUrl=http://id.yourcomany.com/
Application__ConsoleUrl=http://localhost:8080/
Application__UseSsl=False
```

Now, let's run the container with the configuration file, mounting the volumes `grantid_data` on `/var/app` and `grantid_keys` on `/var/keys` and exposing the
container's auth server port (5011) on the host's port 80 and the container's console port (5012) on the host's port 8080:

```sh
docker run --name grantid --env-file grantid.env -v grantid_data:/var/app -v grantid_keys:/var/keys -p 80:5011 8080:5012 -d lacunasoftware/grantid:4.2
```

> [!TIP]
> If given a credential with enough privileges, GrantID will attempt to create the target database on the server (which is what will happen in this case)

Check the container logs for any configuration errors:

```sh
docker logs -f grantid
```

If everything is configured correctly, you should be able to access the GrantID console on [localhost:8080](http://localhost:8080/)

## See also

* [Docker Swarm](./docker-swarm/index.md)
