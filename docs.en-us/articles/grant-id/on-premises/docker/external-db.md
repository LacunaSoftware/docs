# Using an external database on Docker - GrantID

The [standard Docker compose file for GrantID](https://cdn.lacunasoftware.com/grantid/docker/grantid-stack.yml) includes an internal service for the database
(Microsoft SQL Server).

For production environments, there may be [concerns about running the database on Docker](https://vsupalov.com/database-in-docker/). If you prefer,
follow the steps on this article to use an external database.

Stop the stack:

[!include[Remove stack](../../../../../includes/grant-id/docker/remove-stack.md)]

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-compose.md)]

Make the following changes:

* Section **volumes**: remove item **sql**
* Section **services**:
  * Remove entire service **sql**
  * Service **grantid**
    * On section **environment**, add the following items:
      * **SQL_HOST**: hostname of the database server
      * **SQL_PORT** (optional): port of the database server (if omitted port 1433 is assumed)
      * **SQL_DATABASE**: name of the database to use
      * **SQL_USER**: username to authenticate on the database server

The password should be added as the secret *grantid_sql_password*:

[!include[Create SQL password secret](../../../../../includes/grant-id/docker/create-sql-password-secret.md)]

Deploy the stack with the new configurations:

[!include[Deploy stack](../../../../../includes/grant-id/docker/deploy.md)]

## Custom connection string

The method above uses the provided host, database, user and password file to build a connection string with the following format:

```plaintext
Data Source=HOST;Initial Catalog=DATABASE;User ID=USER;Password=PASSWORD
```

On certain scenarios the connection string might be more complex, for instance if the database is mirrored. On such cases, follow
the steps below to use a custom connection string.

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-compose.md)]

Make the following changes:

* Section **volumes**: remove item **sql**
* Section **secrets**: remove item **grantid_sql_password**
* Section **services**:
  * Remove entire service **sql**
  * Service **grantid**
    * On section **secrets**, remove item **grantid_sql_password**
    * On section **environment**, remove item **SQL_PASS_FILE**

Edit the GrantID configuration file:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/edit-grantid-config.md)]

Add the **ConnectionStrings** section to the file, with a single item named `DefaultConnection`:

[!include[Edit docker compose file](../../../../../includes/grant-id/docker/connection-string.md)]

## See also

* [Installing GrantID on Docker](index.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Checking the system logs on Docker](check-logs.md)
