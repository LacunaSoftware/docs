* **[Amplia](../../../amplia/index.md)** instance
* **[GrantID](../../../grant-id/index.md)** instance
* **[PKI SDK](../../../pki-sdk/index.md)** license (in Base64 format)
<!-- **[Web PKI](../../../web-pki/index.md)** license (Base64/binary format) -->
* **DNS entry** previously created for the app
* Connection string to a **SQL Server** (version 2016 or newer) database previously created having:
  * Collation: `Latin1_General_100_CI_AI` or `Latin1_General_CI_AI`
  * Credentials corresponding to a user with `db_owner` role

> [!NOTE]
> If you prefer to run Lacuna PSC without granting `db_owner` to the application user, see [this article](../unprivileged-db-user.md)

> [!WARNING]
> The collation of the database **must** be one of the collations specified above. Creating the database with a different collation will likely cause the installation to fail!

If you need help preparing the database, [click here](../prepare-database.md).
