# Signer - Checking the system logs on Docker

The Docker image for [Signer](../index.md) sends its logs to the standard output, which in turn gets registered
by Docker as service logs. To check the *signer* service logs:

[!include[Check Signer logs](../../../../../includes/signer/docker/check-logs-signer.md)]

> [!NOTE]
> On the commands shown on this article, the leftmost `signer` is the name of the stack, while the rightmost part is the name
> of the service (in the case above, the *signer* service). If you deployed your stack with another name, say *dropsigner*, you
> would need to replace the leftmost `signer` on the commands shown here with the name of your stack (e.g. *dropsigner_signer*).

You can also check the SQL Server logs:

[!include[Check SQL logs](../../../../../includes/signer/docker/check-logs-sql.md)]

And also the Nginx logs:

[!include[Check Nginx logs](../../../../../includes/signer/docker/check-logs-nginx.md)]

## See also

* [Installing Signer on Docker](index.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
