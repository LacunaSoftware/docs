# Amplia - Checking the system logs on Docker Swarm

The Docker image for [Amplia](../../index.md) sends its logs to the standard output, which in turn gets registered
by Docker as service logs. To check the *amplia* service logs:

[!include[Check Amplia logs](../../../../../../includes/amplia/docker/check-logs-amplia.md)]

> [!NOTE]
> On the commands shown on this article, the leftmost `amplia` is the name of the stack, while the rightmost part is the name
> of the service (in the case above, the *amplia* service). If you deployed your stack with another name, say *patorumca*, you
> would need to replace the leftmost `amplia` on the commands shown here with the name of your stack (e.g. *patorumca_amplia*).

You can also check the SQL Server logs:

[!include[Check SQL logs](../../../../../../includes/amplia/docker/check-logs-sql.md)]

And also the Nginx logs:

[!include[Check Nginx logs](../../../../../../includes/amplia/docker/check-logs-nginx.md)]

## See also

* [Installing Amplia on Docker Swarm](index.md)
* [Enabling SSL](enable-ssl.md)
* [Using an external database](external-db.md)
* [Persistent data (backup considerations)](persistent-data.md)
* [Using a stack with GrantID](internal-grantid.md)
