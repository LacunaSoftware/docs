# Timestamping configuration

The application obtains X.509 timestamps when needed through the Time-Stamp Protocol (RFC 3161) from compliant timestamp providers.
The **Timestamp** configuration section holds the configuration for fetching timestamps. Available settings:

* **Timestampers**: list of timestamp providers (see below)
* **RetryDelayInMilliseconds**: if all providers fail, time to wait in milliseconds before retrying (defaults to `1500`)
* **MaxAutoRetryCount**: number of times to try interating the list of providers until a timestamp is acquired (defaults to `3`)

The **Timestampers** list holds the configuration for each individual timestamp provider. The available settings are:

* **Url**: the full URL to send the timstamp requests (e.g.: `https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310`)
* **AuthenticationType**: the authentication mode required by the timestamp provider. Supported modes are `None`, `BasicAuthentication` and `OAuthBearerToken` (see below).

Depending on the authentication mode required by the timestamp provider, additional settings are required:

* `None`: no additional settings are required
* `BasicAuthentication`: fill **Username** and **Password**
* `OAuthBearerToken`: fill **BearerToken**

Example (environment variables):

```bash
Timestamp__MaxAutoRetryCount=2
Timestamp__RetryDelayInMilliseconds=500
Timestamp__Timestampers__0__Url=https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310
Timestamp__Timestampers__0__AuthenticationType=OAuthBearerToken
Timestamp__Timestampers__0__OAuthBearerToken=YOURTOKEN
Timestamp__Timestampers__1__Url=https://tsp.patorum.com/timestamp
Timestamp__Timestampers__1__AuthenticationType=BasicAuthentication
Timestamp__Timestampers__1__Username=SOMEUSER
Timestamp__Timestampers__1__Password=SOMEPASS
```

Example (JSON configuration):

```json
{
	...,
	"Timestamp": {
		"MaxAutoRetryCount": 2,
		"RetryDelayInMilliseconds": 500,
		"Timestampers": [
			{
				"Url": "https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310",
				"AuthenticationType": "OAuthBearerToken",
				"OAuthBearerToken": "YOURTOKEN"
			},
			{
				"Url": "https://tsp.patorum.com/timestamp",
				"AuthenticationType": "BasicAuthentication",
				"Username": "SOMEUSER",
				"Password": "SOMEPASS"
			}
		]
	},
	...
}
```
