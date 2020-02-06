# Amplia on Docker - Using a stack with GrantID

The [standard Amplia stack](https://cdn.lacunasoftware.com/amplia/docker/amplia-stack.yml) depends on an external [GrantID](../../../grant-id/index.md) service,
which provides OpenID Connect services for user login and registration.

If you wish to run GrantID internally on the same stack as Amplia, instead of the standard *amplia-stack.yml* file use the file
[amplia-grantid-stack.yml](https://cdn.lacunasoftware.com/amplia/docker/amplia-grantid-stack.yml)

Download the compose file and the configuration file templates:

```sh
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-grantid-stack.yml
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia.json
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-proxy.conf
curl -O https://cdn.lacunasoftware.com/grantid/docker/grantid.json
curl -O https://cdn.lacunasoftware.com/grantid/docker/grantid-proxy.conf
```

Edit the stack file:

[!include[Edit compose file](../../../../../includes/amplia/docker/edit-compose-grantid.md)]

Under **services** &gt; **nginx** &gt; **networks** &gt; **default** &gt; **aliases**, add your
[base domain, login domain and API domain for GrantID](../../../grant-id/on-premises/index.md#planning).

Then, follow setup instructions for both [Amplia](index.md) and [GrantID](../../../grant-id/on-premises/docker/index.md), skipping
the initial download steps since we've already downloaded the appropriate files.

> [!NOTE]
> Remember to replace occurrences of `amplia-stack.yml` and `grantid-stack.yml` on commands in both setup instructions with `amplia-grantid-stack.yml`

## See also

* [Installing Amplia on Docker](index.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
