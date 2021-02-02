# GrantID - Setup on Docker

For Docker-based setup the following image is provided on DockerHub:

<br />
<center>
**[GrantID Docker Image](https://hub.docker.com/r/lacunasoftware/grantid)**
</center>
<br />

This image requires: 

* A SQL Server Database connection: the database collation must be Latin1_General_100_CI_AI or Latin1_General_CI_AI. 
* Storage (shared between all instances of the image): see BlobStorage settings bellow for further information.
* A certificate to issue tokens. See [GrantID Linux Installation](../linux/index.md) for instructions to generate this certificate using openssl.
* A key to generate temporary tokens sent on emails. See [GrantID Linux Installation](../linux/index.md) for instructions to generate this key using openssl.

GrantID is composed of three services (see [GrantID Overview](../index.md)), the image exposes all three services in different ports that can be configured using environment
variables:

* **GRANTID_IDENTITY_SERVICE_PORT**: default `5010`.
* **GRANTID_AUTH_SERVER_PORT**: default `5011`.
* **GRANTID_CONSOLE_PORT**: default `5012`.

If you need one image per service for fine-grained control of your containers contact us.


