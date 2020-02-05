# GrantID on Docker - Persistent data (backup considerations)

The [standard Docker compose file for GrantID](https://cdn.lacunasoftware.com/grantid/docker/grantid-stack.yml) uses two volumes:

* **sql**: database files
* **files**: files stored outside of the database (to keep the database tidy)

> [!NOTE]
> The *sql* and *files* volumes will probably be mapped by your container orchestrator to the automatically
> created volumes **grantid_sql** and **grantid_files**

Feel free to alter these volumes according to your infrastructure, for instance mapping them to folders on the host.

The stack also uses two secrets, generated manually during the setup:

* **grantid_sql_password**: SQL server SA password
* **grantid_issuer_cert**: self-signed certificate used to sign the JSON Web Tokens
* **grantid_temp_token_key**: key used to encrypt "tokens" sent on emails

These **two volumes and three secrets** contain all data needed to recreate the GrantID stack. No additional data is persisted inside the
containers, and the stack may be recreated freely at any time.

> [!CAUTION]
> On a production environment, make sure you take the necessary steps to backup these resources!

## See also

* [Installing GrantID on Docker](index.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
