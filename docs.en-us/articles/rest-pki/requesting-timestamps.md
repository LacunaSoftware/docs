# Requesting timestamps to Rest PKI

You can use [Rest PKI](index.md) as an ICP-Brasil timestamp provider through the TSP protocol (*Timestamp Protocol* - RFC 3161) or API REST.

To do this, follow the steps below to get access credentials:

1. Login to Rest PKI website (https://pki.rest/)
1. In Control Panel, click the **Generate new access token** button
1. Copy the generated value

Then use one of the ways below to communicate with Rest PKI.

## Communication by *Timestamp Protocol*

Use the settings to communicate with Rest PKI by TSP:

* Protocol: HTTPS
* Method: POST
* Url: `https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310`
* Authentication: by HTTP header as below:
    * `Authorization` : `Bearer <token de acesso ao Rest PKI>`

## Communcation API REST

Use the settings to communicate with Rest PKI by TSP:

* Url: `https://pki.rest/Api/TimestampPlans/a402df41-8559-47b2-a05c-be555bf66310/Issue`
* Method: POST
* Request headers
  * `Authorization` : `Bearer <token de acesso ao Rest PKI>`
  * `Content-Type` : `application/json`
* Request
  * `algorithm` : algorithm name (see suported algoritm below)
  * `value` : hash value to be stamped, Base64 encoded **or**
  * `hexValue` : hash value to be stamped, encoded in hexadecimal (*case insensitive*)
* Response
  * `encodedValue` : timestamp, Base64 encoded
  * `info` : informations about the timestamp

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
