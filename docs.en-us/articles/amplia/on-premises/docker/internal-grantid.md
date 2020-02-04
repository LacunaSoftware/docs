# Amplia on Docker - Using a stack with GrantID

The [standard Amplia stack](https://cdn.lacunasoftware.com/amplia/docker/amplia-stack.yml) depends on an external [GrantID](../../../index.md) service,
which provides OpenID Connect services for user login and registration.

If you wish to run GrantID internally on the same stack as Amplia, instead of the standard *amplia-stack.yml* file use the file
[https://cdn.lacunasoftware.com/amplia/docker/amplia-grantid-stack.yml]

Download the compose file and the configuration file templates:

```sh
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-grantid-stack.yml
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia.json
curl -O https://cdn.lacunasoftware.com/amplia/docker/amplia-proxy.conf
curl -O https://cdn.lacunasoftware.com/grantid/docker/grantid.json
curl -O https://cdn.lacunasoftware.com/grantid/docker/grantid-proxy.conf
```

Then, follow setup instructions for both [Amplia](index.md) and [GrantID](../../../grant-id/on-premises/docker/index.md), skipping
the first download steps since we've already download the appropriate (alternative) files.

> [!NOTE]
> Remember to replace occurrences of *amplia-stack.yml* and *grantid-stack.yml* on commands in both setup instructions with **amplia-grantid-stack.yml**

You will also need an additional step -- edit the stack file:

[!include[Edit compose file](../../../../../includes/amplia/docker/edit-compose-grantid.md)]

Under **services** &gt; **nginx** &gt; **networks** &gt; **default** &gt; **aliases**, add your
[base domain, login domain and API domain for GrantID](../../../grant-id/on-premises/index.md#planning).

## See also

* [Installing Amplia on Docker](index.md)
* [Enabling SSL on Docker](enable-ssl.md)
* [Using an external database on Docker](external-db.md)
* [Checking the system logs on Docker](check-logs.md)
* [Persistent data (backup considerations)](persistent-data.md)
