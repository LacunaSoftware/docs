# Configuration for usage in iframes - GrantID

Your [GrantID instance](index.md) requires additional configuration to allow implicit flow authentications to be displayed inside `iframe`s.

On the **Auth Server configuration**, under section **Application**, the following settings must be set:

* **SameSiteNoneOnAntiforgeryTokens**: must be set to `true`
* **AllowedIFrameDomains**: must be set to a list of [sources](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors#sources)
  allowed to load implicit flow authentication pages on iframes, for instance `["https://my-app.com"]`. Specify only the scheme (`http://` or `https://`), the hostname
  (domain or IP) and optionally the port -- ***not*** the path, e.g. ~~/login.php~~

Example (*.json* configuration file):

```json
{
	"Application": {
		"SameSiteNoneOnAntiforgeryTokens": true,
		"AllowedIFrameDomains": ["http://localhost:3000", "https://my-app.com"]
	}
}
```

Example (environment variables):

```sh
Application__SameSiteNoneOnAntiforgeryTokens=True
Application__AllowedIFrameDomains__0=http://localhost:3000
Application__AllowedIFrameDomains__1=https://my-app.com
```
