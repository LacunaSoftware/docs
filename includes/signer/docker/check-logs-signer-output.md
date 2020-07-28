```plaintext
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Signer entrypoint invoked
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Building connection string
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Assuming SQL_HOST = sql
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Assuming SQL_PORT = default port (1433)
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Assuming SQL_USER = SA
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Assuming SQL_DATABASE = Signer
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Connection string: "Data Source=sql;Initial Catalog=Signer;User ID=SA;Password=REDACTED"
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | Starting application
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | warn: Microsoft.EntityFrameworkCore.Model.Validation[30000]
signer_signer.1.y56lfxi6rn0i@ubuntu1804    |       No type was specified for the decimal column 'Value' on entity type 'Invoice'. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values using 'HasColumnType()'.
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | warn: Microsoft.EntityFrameworkCore.Model.Validation[30000]
signer_signer.1.y56lfxi6rn0i@ubuntu1804    |       No type was specified for the decimal column 'BillingLimit' on entity type 'Subscription'. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values using 'HasColumnType()'.
signer_signer.1.y56lfxi6rn0i@ubuntu1804    | info: Lacuna.Signer.Site.Startup.RecurringJobsInit[0]
signer_signer.1.y56lfxi6rn0i@ubuntu1804    |       Initializing recurring jobs
```
