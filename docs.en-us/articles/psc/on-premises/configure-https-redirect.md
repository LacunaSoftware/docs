# Configure HTTPS redirection - Lacuna PSC

If you have a valid SSL certificate for your [Lacuna PSC](../index.md) [on-premises instance](index.md)
and have enabled SSL, you may want to redirect users reaching your instance through HTTP to the HTTPS endpoint.

To enable HTTPS redirection, change the section **Bindings** of the JSON configuration file:

* **HttpsMode**: set to `RedirectPages`
* **SslPort**: if your HTTPS endpoint is not on port 443, set the port here

Example (*.ini* or *.conf* file):

```ini
[Bindings]
HttpsMode=RedirectPages
SslPort=8443
```

Example (environment variables):

```bash
Bindings__HttpsMode=RedirectPages
Bindings__SslPort=8443
```

## See also

* [Lacuna PSC on-premises](index.md)
