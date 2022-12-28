# Amplia on-premises

[Amplia](../index.md) can be used as a service (SaaS) or you can host your own instance.

## Supported platforms

Amplia is compatible with:

* [Windows Server](windows/index.md)
* [Linux](linux/index.md)
* [Docker](docker/index.md)
* [Azure App Services](azure/index.md)

Click on one of the platforms above for specific setup instructions.

<a name="planning" />
## Planning before installation

Before you start, you should plan ahead on where you intend to store your Certification Authority (CA) keys and where will your Certificate
Revocation Lists (CRLs) be published. Please read the sections below for details on each of these decisions.

<a name="key-storage" />
### Key storage

The keys for your Certification Authorities (CAs) can be stored on a variety of locations, called *key stores*. The choice of where to store
CA keys is one of the most important decisions when planning for a CA. See article [Key Store configuration](key-stores/index.md) for more information
on where you can store your CA keys and how to configure Amplia accordingly.

<a name="dashboard-domain" />
### Dashboard domain / SSL certificate

The application has a web interface called the *dashboard* to manage CAs, keys etc. You must choose a domain to access it, for instance `ca.patorum.com`.

The chosen domain should be created on the DNS server of the zone (either A or CNAME records) prior to the installation, pointing to the server on which
Amplia will be installed.

> [!NOTE]
> Using a virtual directory (subfolder) on a domain hosting another web application is not supported

It is also recommended that you have a **valid SSL certificate** for the chosen domain.

<a name="access-domains" />
### CRL publishing and OCSP access (*access domains*)

Certificates issued by Amplia include the X.509 *CRL Distribution Point* extension, which contains links to locations where a third party desiring to validate
the certificate should obtain the latest Certificate Revocation List (CRL) of the CA, required to determine the revocation status of the certificate.

These links have the following format: `http://your-ca-domain/crls/your-ca.crl`

The `your-ca-domain` part of the link is called on the Amplia configuration an *access domain*. You must choose at least one access domain, but
it is recommended to have two access domains, preferably independent of each other, for instance:

* *ca.patorum.com*
* *ca.patorum.net*

> [!TIP]
> One of the access domains may be the same domain on which the Amplia dashboard will be accessed.

> [!NOTE]
> Using a virtual directory (subfolder) on a domain hosting another web application is not supported

These domains should be chosen keeping in mind that they **will have to be maintained for a long time** (for the entire lifetime of the certificates
issued on your Amplia instance, which is typically several years).

The chosen access domains should be created on the DNS servers (either A or CNAME records) pointing to the server on which Amplia will be installed.

> [!TIP]
> You do not need an SSL certificate for your access domains. Since X.509 recommends that CRLs be distributed over HTTP instead of HTTPS, the
> certificates are issued with links using the HTTP protocol.

Similarly, certificates also include links for OCSP verification, in the format `http://your-ocsp-domain/ocsp/your-ca`

The `your-ocsp-domain` part of the link is called on the Amplia configuration an *OCSP domain*. If no OCSP domains are configured, the access domains
are used instead. If in intend to keep your Amplia instance on an intranet, it is important to choose differente OCSP domains that must point to publicly
accessible reverse proxies that will forward the OCSP requests to your Amplia instance. For instance:

* *ocsp.patorum.com*
* *ocsp.patorum.net*

## See also

* [Preparing a database for installation of Amplia](prepare-database.md)
* [Running Amplia without db_owner privileges](unprivileged-db-user.md)
* [Checking the version of Amplia](check-version.md)
* [Update Amplia from 2.16 to 3.0](update-30.md)
* [Changelog](../changelog.md)
