﻿# Configure HTTPS redirection - Amplia

If you have a valid SSL certificate for your [Amplia](../index.md) [on-premises instance](index.md)
and have enabled SSL, you may want to redirect users reaching your instance through HTTP to the HTTPS endpoint.

To enable HTTPS redirection, change the section **Bindings** of the configuration file:

* **HttpsMode**: set to `RedirectPages`
* **SslPort**: if your HTTPS endpoint is not on port 443, set the port here

## See also

* [Amplia on-premises](index.md)
