# Using an external database on Docker - Signer

The [standard Docker compose file for Signer](https://cdn.lacunasoftware.com/signer/docker/signer-stack.yml) includes an internal service for the database
(Microsoft SQL Server).

For production environments, there may be [concerns about running the database on Docker](https://vsupalov.com/database-in-docker/). If you prefer,
follow the steps on this article to use an external database.

Stop the stack:

[!include[Remove stack](../../../../../includes/signer/docker/remove-stack.md)]

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/signer/docker/edit-compose.md)]

Make the following changes:

* Section **volumes**: remove item **sql**
* Section **services**:
  * Remove entire service **sql**
  * Service **signer**
    * On section **environment**, add the following items:
      * **SQL_HOST**: hostname of the database server
      * **SQL_PORT** (optional): port of the database server (if omitted port 1433 is assumed)
      * **SQL_DATABASE**: name of the database to use
      * **SQL_USER**: username to authenticate on the database server
	* Remove section **depends_on**

The password should be added as the secret *signer_sql_password*:

[!include[Create SQL password secret](../../../../../includes/signer/docker/create-sql-password-secret.md)]

Deploy the stack with the new configurations:

[!include[Deploy stack](../../../../../includes/signer/docker/deploy.md)]

## Custom connection string

The method above uses the provided host, database, user and password file to build a connection string with the following format:

```plaintext
Data Source=HOST;Initial Catalog=DATABASE;User ID=USER;Password=PASSWORD
```

On certain scenarios the connection string might be more complex, for instance if the database is mirrored. On such cases, follow
the steps below to use a custom connection string.

Edit the Docker compose file:

[!include[Edit docker compose file](../../../../../includes/signer/docker/edit-compose.md)]

Make the following changes:

* Section **volumes**: remove item **sql**
* Section **secrets**: remove item **signer_sql_password**
* Section **services**:
  * Remove entire service **sql**
  * Service **signer**
    * On section **secrets**, remove item **signer_sql_password**
    * On section **environment**, remove all items starting with **SQL_**
	* Remove section **depends_on**

Edit the Signer configuration file:

[!include[Edit docker compose file](../../../../../includes/signer/docker/edit-signer-config.md)]

Add the **ConnectionStrings** section to the file, with a single item named `DefaultConnection`:

[!include[Edit docker compose file](../../../../../includes/signer/docker/connection-string.md)]

## See also

* [Installing Signer on Docker](index.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
