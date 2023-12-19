# OCSP configuration - Amplia

Certificates issued by [Amplia](../index.md) can include links for OCSP verification in the format `http://your-ocsp-domain/ocsp/your-ca`

The `your-ocsp-domain` part of the link is called on the Amplia configuration an **OCSP domain**. This configuration is optional and is normally not filled,
in which case certificates are issued without OCSP verification links.

In order to include OCSP verification links on certificates, you must choose an OCSP domain, for instance `ocsp.yourcompany.com`.

This domain should be chosen keeping in mind that it **will have to be maintained for a long time** (for the entire lifetime of the certificates
issued on your Amplia instance, which is typically several years).

> [!NOTE]
> If your Amplia instance will be publicly-accessible, the OCSP domain may be the same domain on which the Amplia dashboard will be accessed.
> If you are unsure whether your instance will be publicly-acessible or not, choose an OCSP domain that is different from the dashboard domain.

The chosen OCSP domain should be created on the DNS servers (either A or CNAME records) pointing to the server on which Amplia will be installed or,
if your instance will not be publicly-accessible, to a public server with a reverse proxy that forwards OCSP requests to your Amplia instance.

> [!TIP]
> You do not need an SSL certificate for your OCSP domain, since X.509 recommends that OCSP requests be sent over HTTP instead of HTTPS

## Configuring Amplia to use the chosen OCSP domain

Once you have followed the steps above to setup an OCSP domain, fill `Amplia` section of configuration file as follows:

Example (*.ini* or *.conf* configuration file):

```ini
[Amplia]
OcspEnabled=True
OcspDomains=ocsp.yourcompany.com
```

Example (environment variables):

```bash
Amplia__OcspEnabled=True
Amplia__OcspDomains=ocsp.yourcompany.com
```

Example (*.json* configuration file):

```json
    ...,
    "Amplia": {
        "OcspEnabled": true,
        "OcspDomains": "ocsp.yourcompany.com",
        ...
    },
    ...
```

The setting `OcspDomains` is a comma-separated list, so you can have multiple OCSP domains.
