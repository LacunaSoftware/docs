# Amplia - Setup on Docker

> [!WARNING]
> This article is a draft, Docker support on Amplia will be added on the upcoming version 3.0

To run [Amplia](../../index.md) on Docker, follow the steps below.

Download the compose file and the environment file template:

```sh
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-mssql.yml
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia.env
```

Generate the encryption key and SQL password and store as Docker secrets:

```sh
openssl rand -hex 32 | docker secret create amplia_encryption_key -
openssl rand -base64 24 | docker secret create amplia_sql_password -
```

> [!NOTE]
> You can instead run `echo 'mypass' | docker secret create amplia_sql_password -` to use a SQL password of your choice

Edit the environment file:

```sh
nano amplia.env
```

Fill the settings accordingly. <!-- TODO: expand this section -->

Deploy the stack:

```sh
docker stack deploy -c amplia-mssql.yml amplia
```

Check that the *amplia_app* service is up and running:

```sh
docker service logs amplia_app
```

## Volumes

The compose file `amplia-mssql.yml` defines two volumes: **sql** and **files**, which if left unchanged will probably be created
automatically with the names **amplia_sql** and **amplia_files**. These volumes contain all data needed to recreate the Amplia
stack. Feel free to alter these volumes according to your infrastructure, for instance mapping them to folders on the host.

> [!NOTE]
> If on a production environment, make sure you take the necessary steps to backup these volumes!

## External database

The compose file *amplia-mssql.yml* includes a service for the database (Microsoft SQL Server Express edition).
If you prefer to run the database out of the stack, use the compose file *amplia-extdb.yml* instead:

```sh
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-extdb.yml
```

In this case, you must provide the connection string on the file *amplia.env*:

```
# Amplia service configuration

# Uncomment and fill the line below if you are using an external database
ConnectionStrings__DefaultConnection=Data Source=SERVER;Initial Catalog=DATABASE;User ID=USER;Password=PASSWORD
```

Remember to deploy using the alternative compose file:

```sh
docker stack deploy -c amplia-extdb.yml amplia
```
