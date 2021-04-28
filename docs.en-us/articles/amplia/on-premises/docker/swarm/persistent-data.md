# Amplia on Docker Swarm - Persistent data (backup considerations)

The [standard Docker compose file for Amplia](https://cdn.lacunasoftware.com/amplia/docker/amplia-stack.yml) uses two volumes:

* **sql**: database files
* **files**: files stored outside of the database (to keep the database tidy)

> [!NOTE]
> The *sql* and *files* volumes will probably be mapped by your container orchestrator to the automatically
> created volumes **amplia_sql** and **amplia_files**

Feel free to alter these volumes according to your infrastructure, for instance mapping them to folders on the host.

The stack also uses two secrets, generated manually during the setup:

* **amplia_sql_password**: SQL server SA password
* **amplia_encryption_key**: encrypts the CA keys stored on the database

These **two volumes and two secrets** contain all data needed to recreate the Amplia stack. No additional data is persisted inside the
containers, and the stack may be recreated freely at any time.

> [!CAUTION]
> On a production environment, make sure you take the necessary steps to backup these resources!

## See also

* [Installing Amplia on Docker Swarm](index.md)
* [Using an external database](external-db.md)
* [Enabling SSL](enable-ssl.md)
* [Checking the system logs](check-logs.md)
* [Using a stack with GrantID](internal-grantid.md)
