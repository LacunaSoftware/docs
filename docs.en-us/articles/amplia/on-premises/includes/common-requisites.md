* **PKI SDK license** (in Base64 format)
* **Web PKI license** (Base64/binary format) -- only needed if users will issue certificates on their computers (web issuing procedure)
* **DNS entries** previously created for:
  * Dashboard access (see [Dashboard domain](../index.md#dashboard-domain))
  * CRL publishing and OCSP access (see [Access domains](../index.md#access-domains))
* **Connection string** to a SQL Server (version 2016 or newer) database previously created having:
  * Collation: `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`
  * Credentials corresponding to a user with `db_owner` role

> [!NOTE]
> If you prefer to run Amplia without granting `db_owner` to the application user, see [this article](../unprivileged-db-user.md)

> [!WARNING]
> The collation of the database **must** be one of the collations specified above. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, [click here](../prepare-database.md).
