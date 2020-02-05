* SQL Server 2016 or newer (recommended edition Standard or better)
* PKI SDK license (in Base64 format)
* Web PKI license (Base64/binary format) -- only needed if users will issue certificates on their computers (web issuing procedure)
* DNS entries previously created for:
  * Dashboard access (see [Dashboard domain](../index.md#dashboard-domain))
  * CRL publishing (see [Access domains](../index.md#access-domains))
* (recommended) Valid SSL certificate for the dashboard domain

You will also need a connection string to a **database** previously created having:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with `db_owner` role

> [!NOTE]
> If you prefer to run Amplia without granting `db_owner` to the application user, see [this article](../unprivileged-db-user.md)

> [!WARNING]
> The collation of the database **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, [click here](../prepare-database.md).
