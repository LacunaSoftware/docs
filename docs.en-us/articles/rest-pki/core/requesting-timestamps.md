# Requesting timestamps to Rest PKI Core

You can use an instance of [Rest PKI Core](index.md) as a timestamp provider for requesting timestamps through the TSP protocol (*Timestamp Protocol* - RFC 3161)
or through a REST API.

1. Sign in to your Rest PKI Core dashboard (e.g.: *https://restpkicore.yourcompany.com*)
1. Click on **Applications** on the left menu, then on *Add*
1. Fill out a name and select a subscription (you most likely have a single subscription, so select it)
1. Mark the **Worker** role
1. Click on **Create**
1. Click on **Keys**, then on **Add**
1. Fill out some description and, on the *Expiration* field, choose **Never expires**
1. Click on **Create**
1. Copy the **API key** generated (this value cannot be retrieved later)

> [!NOTE]
> When requesting timestamps to the SaaS instance of Rest PKI Core, the dashboard URL is [https://core.pki.rest/](https://core.pki.rest/)

Then, use on of the following methods to request a timestamp.

## Timestamp Protocol

Use these parameters to request a timestamp through TSP protocol:

* Protocol: HTTPS
* Method: POST
* Url: `https://restpkicore.yourcompany.com/tsp`
* Authentication: HTTP header `Authorization: ApiKey YOUR_API_KEY`

> [!NOTE]
> If you need to specify a tier, the URL would then be `https://restpkicore.yourcompany.com/tsp/TIER`

When requesting timestamps to the SaaS instance of Rest PKI Core, it is necessary to specify one of the following tiers:

* PKI Brazil timestamp: `PkiBrazil` (or `a402df41-8559-47b2-a05c-be555bf66310`)
* Test timestamp: `LacunaTest`

## REST API

Use these parameters to request a timestamp through a REST API:

* Url: `https://restpkicore.yourcompany.com/api/tsp`
* Method: POST
* Request headers
  * `Authorization` : `ApiKey YOUR_API_KEY`
  * `Content-Type` : `application/json`
* Request
  * `algorithm` : algorithm name (see suported algoritm below)
  * `value` : hash value to be stamped, Base64 encoded **or**
  * `hexValue` : hash value to be stamped, encoded in hexadecimal (*case insensitive*)
* Response
  * `encodedValue` : timestamp, Base64 encoded
  * `info` : informations about the timestamp

> [!NOTE]
> The REST API URL is very similar to the TSP URL, with the difference being the `/api/` segment

Example request with SHA-256 algorithm and Base64 hash:

```json
{
	"algorithm": "SHA256",
	"value": "L80RIvFw2jwpiObzFQN+tuEQQ4E9qnGeYYYd+4DrM8M="
}
```

Example request with SHA-1 algorithm and hash in hex:

```json
{
	"algorithm": "SHA1",
	"hexValue": "3ade2832feafe081f246aa2fb89cb9c7929ac911"
}
```

## Supported Algorithms

Currently, the following algorithms are supported:

* SHA-1
  * TSP: 1.3.14.3.2.26
  * API: "SHA1"
* SHA-256
  * TSP: 2.16.840.1.101.3.4.2.1
  * API: "SHA256"
