# Signer on Docker - Persistent data (backup considerations)

The [standard Docker compose file for Signer](https://cdn.lacunasoftware.com/signer/docker/signer-stack.yml) uses two volumes:

* **sql**: database files
* **files**: files stored outside of the database (to keep the database tidy)

> [!NOTE]
> The *sql* and *files* volumes will probably be mapped by your container orchestrator to the automatically
> created volumes **signer_sql** and **signer_files**

Feel free to alter these volumes according to your infrastructure, for instance mapping them to folders on the host.

The stack also uses two secrets, generated manually during the setup:

* **signer_sql_password**: SQL server SA password
* **signer_encryption_key**: encrypts secrets such as session states

These **two volumes and two secrets** contain all data needed to recreate the Signer stack. No additional data is persisted inside the
containers, and the stack may be recreated freely at any time.

> [!CAUTION]
> On a production environment, make sure you take the necessary steps to backup these resources!

## See also

* [Installing Signer on Docker](index.md)
* [Using an external database on Docker](external-db.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Checking the system logs on Docker](check-logs.md)
* [Using a stack with GrantID](internal-grantid.md)
