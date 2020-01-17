# Amplia - Setup on Docker

> [!WARNING]
> This article is a draft, Docker support on Amplia will be added on the upcoming version 3.0

To run [Amplia](../../index.md) on a Docker, follow the steps below.

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
> If you prefer, you can instead set a SQL password of your choice with `echo 'mypass' | docker secret create amplia_sql_password -`

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

## External database

The compose file *amplia-mssql.yml* defines a stack containing a service for the database (Microsoft SQL Server Express edition).
If you prefer to run the database out of the stack, use the compose file *amplia-extdb.yml* instead:

```sh
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-extdb.yml
```

In this case, you must provide the connection string on the file *amplia.env*:

```
# Amplia service configuration

# Uncomment and fill the line below if you are using an external database (leave commented if using amplia-mssql.yml)
ConnectionStrings__DefaultConnection=Data Source=SERVER;Initial Catalog=DATABASE;User ID=USER;Password=PASSWORD
```

Remember to deploy using the alternative compose file:

```sh
docker stack deploy -c amplia-extdb.yml amplia
```
