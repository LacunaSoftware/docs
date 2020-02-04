### Bindings

Under section **Bindings**:

* **HttpsMode**: by default, both the dashboard and the REST APIs can only be accessed through HTTPS, which is the recommended behavior if you have a valid SSL certificate.
  * If you do not have a valid SSL certificate, set this setting to `Optional`. Users accessing the dashboard will not be redirected to HTTPS and REST APIs will be accessible through HTTP.
  * If you have a valid SSL certificate but some legacy client applications do not recognize it, set this setting to `RedirectPages`. REST APIs will still be accessible through HTTP (like in `Optional` mode), but users accessing the dashboard will be redirected to HTTPS.
* **SslPort**: by default, users accessing the dashboard through HTTP are redirected to HTTPS on the standard TCP port 443. If the site is using HTTPS on a non-standard port, set it here.
