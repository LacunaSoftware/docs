## Creating the database

Follow the steps below to create a database for the system (you must have a *SQL Server* previously created):

1. Under **SQL databases**, click **+ Create**
1. On the first tab (*Basics*), fill in the fields according to your infrastructure (following the region chosen for the system)
1. Click the **Additional settings** tab
1. Under **Collation**, enter `Latin1_General_100_CI_AI`
1. Click **Review + create**
1. Click **Create**

> [!WARNING]
> The database *collation* **MUST BE** `Latin1_General_100_CI_AI`. Creating the database with a different *collation* will likely cause the installation to fail!

Once the database has been created, click **Go to resource**. Then obtain the *connection string*:

1. Click **Connection strings**
1. Take note of the connection string shown under the **ADO.NET (SQL authentication)** section

> [!NOTE]
> In the copied connection string, replace the `{your_password}` placeholder with the database password
