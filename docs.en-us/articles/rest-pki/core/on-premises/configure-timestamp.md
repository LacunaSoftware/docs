# Timestamping configuration

> [!NOTE]
> If you are using a 1.x version of Rest PKI Core, see [section below](#legacy-config)

<a name="new-config" /> 

## Migrating from 1.x to 2.x

To migrating without breaking request history, you need to use the **Aliases** field.

1.x Configuration

```ini
[Timestamp]
MaxAutoRetryCount=2
RetryDelayInMilliseconds=500

[Timestamp:Timestampers:0]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationType=OAuthBearerToken
BearerToken=YOURTOKEN
Tiers=PkiBrazil

[Timestamp:Timestampers:1]
Url=https://tsp.patorum.com/timestamp
AuthenticationType=BasicAuthentication
Username=SOMEUSER
Password=SOMEPASS
```

2,x Configuration

```ini
[Timestamp]
MaxAutoRetryCount=2
RetryDelayInMilliseconds=500

[Timestamp:Providers:Lacuna]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationType=OAuthBearerToken
BearerToken=YOURTOKEN
Tiers=PkiBrazil
Aliases=Provider0

[Timestamp:Providers:Alternative]
Url=https://tsp.patorum.com/timestamp
AuthenticationType=BasicAuthentication
Username=SOMEUSER
Password=SOMEPASS
Aliases=Provider1
```

In the 2.x configuration, the **Aliases** field must be filled with the name of provider on 1.x configuration, which is based on the provider's position in the timestampers list.

## Configuration

The application obtains X.509 timestamps when needed through the Time-Stamp Protocol (RFC 3161) from compliant timestamp providers.

The **Timestamp** configuration section holds the configuration for fetching timestamps. Available settings:

* **Providers**: providers dictionary (see below)
* **Tiers**: tiers dictionary (see below)
* **RetryDelayMilliseconds**: if all providers fail, time to wait in milliseconds before retrying (defaults to `1500`)
* **MaxAutoRetryCount**: number of times to try interating the list of providers until a timestamp is acquired (defaults to `3`)
* **LacunaTestTimestamperEnabled**: whether Lacuna's test timestamper will be used when using tier `LacunaTest` (defaults to `True`)

The **Providers** dictionary holds the configuration for each individual timestamp provider. The available settings for each item are:

* **Url**: the full URL to send the timstamp requests (e.g.: `https://pki.rest/tsp`)
* **Aliases**: comma-separated list of past provider identifiers (useful for renaming providers without breaking apart the request history)
* **DisplayName**: display name for the provider
* **AuthenticationMethod**: the authentication mode required by the timestamp provider (see supported methods below)
* **DefaultPolicy**: OID of the default policy to be used by the TSA when requesting a timestamp. This will only be applied if a `tsaPolicyId` is not provided in the request
* **Priority**: Specifies the usage priority. The closer to zero the higher the priority (default to `1.000.000`)
* **DangerousAcceptAnyServerCertificate**: whether to bypass the verification of the provider's certificate. Use with caution as this can expose the application to security risks (default to `false`)
* **ServerCertificateThumbprint**: SHA thumbprint of the server's certificate. This is used to ensure that the connection is made to the correct server by verifying the server's certificate (supported SHA-1, SHA-256, SHA-384 and SHA-512)
* **StoreRawResponse**: store the raw timestamp response .tsr file (default to `false`)
* **Tiers**: a comma-separated list of the timestamp tiers for which this timestamper can be used. If omitted, this timestamper will be used for all tiers. May contain the tier IDs or names (e.g.: `PkiBrazil,LacunaTest`)

Depending on the authentication mode required by the timestamp provider, additional settings are required:

* `None`: no additional settings are required
* `BasicAuthentication`: fill **Username** and **Password**
* `OAuthBearerToken`: fill **BearerToken**
* `MutualSSL`
  * If the client certificate is stored on a PFX (PKCS#12) file containing the client certificate, fill:
    * **PfxPath** with the path to file or **PfxContent** with the Base64 content of the file
    * **PfxPassword** with the password to the PFX file
  * If the client certificate is on the operating system's certificate repository, fill:
    * **CertificateThumbprint** with the SHA-1 thumbprint of the certificate in hex (either lowercase or uppercase)
    * **CertificateStore** (optional): set to `LocalMachine` to use the computer store (defaults to `CurrentUser`)
* `ApiKey`: fill **ApiKey**
* `CustomAuthorizationHeader`: fill **AuthorizationHeader** with the value of the authorization header, typically in the form of a scheme
  followed by a value (e.g.: `ApiKey SOME_VALUE`)

### Provider selection and priority

When a timestamp is requested for a specific tier, all providers for that tier are selected and ordered by priority. The priority is determined by the value of the **Priority** field. The lower the value, the higher the priority (default is `1.000.000`).

If multiple providers have the same priority, a round-robin algorithm is used to select the provider. This ensures that the load is evenly distributed among providers with the same priority.

### Examples
Typical example (*.ini* or *.conf* configuration file):

```ini
[Timestamp:Providers:Lacuna]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationMethod=OAuthBearerToken
BearerToken=YOURTOKEN
```

Typical example (environment variables):

```bash
Timestamp__Providers__Lacuna__Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
Timestamp__Providers__Lacuna__AuthenticationMethod=OAuthBearerToken
Timestamp__Providers__Lacuna__BearerToken=YOURTOKEN
```

Example with 2 providers and advanced settings (*.ini* or *.conf* configuration file):

```ini
[Timestamp]
MaxAutoRetryCount=2
RetryDelayMilliseconds=500

[Timestamp:Providers:Lacuna]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationMethod=OAuthBearerToken
BearerToken=YOURTOKEN
Priority=0

[Timestamp:Providers:Alternative]
Url=https://tsp.patorum.com/timestamp
AuthenticationMethod=BasicAuthentication
Username=SOMEUSER
Password=SOMEPASS
```

Example with 2 providers and advanced settings (environment variables):

```bash
Timestamp__MaxAutoRetryCount=2
Timestamp__RetryDelayMilliseconds=500

Timestamp__Providers__Lacuna__Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
Timestamp__Providers__Lacuna__AuthenticationMethod=OAuthBearerToken
Timestamp__Providers__Lacuna__BearerToken=YOURTOKEN
Timestamp__Providers__Lacuna__Priority=0

Timestamp__Providers__Alternative__Url=https://tsp.patorum.com/timestamp
Timestamp__Providers__Alternative__AuthenticationMethod=BasicAuthentication
Timestamp__Providers__Alternative__Username=SOMEUSER
Timestamp__Providers__Alternative__Password=SOMEPASS
```

## Timestamp tiers

It is possible to restrict the usage of each provider to a list of timestamp tiers. To do this, fill the `Tiers` section of each provider, for instance:

```bash
[Timestamp:Providers:Lacuna]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationMethod=OAuthBearerToken
BearerToken=YOURTOKEN
Tiers=PkiBrazil
```

Additionaly, in the **Timestamp** section you may fill the **Tiers** dictionary to define display names for timestamp tiers, as well as aliases (useful for renaming tiers without
breaking apart the request history). The available settings for each item are:

* **DisplayName**: display name for the tier
* **Aliases**: comma-separated list of past tier identifiers

Example:

```ini
[Timestamp:Tiers:PkiBrazil]
DisplayName=ICP-Brasil (production only!)

[Timestamp:Tiers:Test]
DisplayName=Tests (development only!)
Aliases=TestTier,Tests

[Timestamp:Providers:Lacuna]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationMethod=OAuthBearerToken
BearerToken=YOURTOKEN
Tiers=PkiBrazil

[Timestamp:Providers:Free]
Url=https://somefreeprovider.com/tsp
Tiers=Test
```

<a name="legacy-config" />

## Configuration in 1.x versions

On 1.x versions, only a now deprecated syntax for configuring timestamping was available.

> [!NOTE]
> The old syntax is still supported, so if you're updating from 1.x you are not required to change your configuration 

The **Timestamp** configuration section holds the configuration for fetching timestamps. Available settings:

* **Timestampers**: list of timestamp providers (see below)
* **RetryDelayInMilliseconds**: if all providers fail, time to wait in milliseconds before retrying (defaults to `1500`)
* **MaxAutoRetryCount**: number of times to try interating the list of providers until a timestamp is acquired (defaults to `3`)
* **LacunaTestTimestamperEnabled**: whether Lacuna's test timestamper will be used when using tier `LacunaTest` (defaults to `True`)

The **Timestampers** list holds the configuration for each individual timestamp provider. The available settings are:

* **Url**: the full URL to send the timstamp requests (e.g.: `https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310`)
* **AuthenticationType**: the authentication mode required by the timestamp provider. Supported modes are `None`, `BasicAuthentication` and `OAuthBearerToken` (see below).
* **Tiers**: a comma-separated list of the timestamp tiers for which this timestamper can be used. If omitted, this timestamper will be used for all tiers. May contain the tier IDs or names (e.g.: `PkiBrazil,LacunaTest`)

Depending on the authentication mode required by the timestamp provider, additional settings are required:

* `None`: no additional settings are required
* `BasicAuthentication`: fill **Username** and **Password**
* `OAuthBearerToken`: fill **BearerToken**

Typical example (*.ini* or *.conf* configuration file):

```ini
[Timestamp:Timestampers:0]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationType=OAuthBearerToken
BearerToken=YOURTOKEN
Tiers=PkiBrazil
```

Typical example (environment variables):

```bash
Timestamp__Timestampers__0__Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
Timestamp__Timestampers__0__AuthenticationType=OAuthBearerToken
Timestamp__Timestampers__0__BearerToken=YOURTOKEN
Timestamp__Timestampers__0__Tiers=PkiBrazil
```

More advanced example (*.ini* or *.conf* configuration file):

```ini
[Timestamp]
MaxAutoRetryCount=2
RetryDelayInMilliseconds=500

[Timestamp:Timestampers:0]
Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
AuthenticationType=OAuthBearerToken
BearerToken=YOURTOKEN
Tiers=PkiBrazil

[Timestamp:Timestampers:1]
Url=https://tsp.patorum.com/timestamp
AuthenticationType=BasicAuthentication
Username=SOMEUSER
Password=SOMEPASS
```

More advanced example (environment variables):

```bash
Timestamp__MaxAutoRetryCount=2
Timestamp__RetryDelayInMilliseconds=500

Timestamp__Timestampers__0__Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
Timestamp__Timestampers__0__AuthenticationType=OAuthBearerToken
Timestamp__Timestampers__0__BearerToken=YOURTOKEN
Timestamp__Timestampers__0__Tiers=PkiBrazil

Timestamp__Timestampers__1__Url=https://tsp.patorum.com/timestamp
Timestamp__Timestampers__1__AuthenticationType=BasicAuthentication
Timestamp__Timestampers__1__Username=SOMEUSER
Timestamp__Timestampers__1__Password=SOMEPASS
```

