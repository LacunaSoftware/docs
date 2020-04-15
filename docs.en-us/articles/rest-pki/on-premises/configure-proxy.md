# Configure proxy - Rest PKI

To use a proxy for outbound communication with the internet on your [on-premises](index.md) instance of [Rest PKI](../index.md), fill the
settings below on the *AppSettings.config* file:

* **ProxyAddress**: proxy URL, e.g.: `http://10.1.1.111:8888/`
* **ProxyUsername** e **ProxyPassword**: fill these values if your proxy requires username/password authentication
* **ProxyUseDefaultCredentials**: set to `True` if your proxy uses integrated AD authentication (uncommon)
* **ProxyBypassOnlocal**: set to `True` if the proxy should be bypassed for local addresses

> [!NOTE]
> Rest PKI needs unrestricted outbound access to the internet since it needs to fetch the latest Certificate Revocation Lists (CRLs) issued by Certification Authorities
> to check the revocation status of certificates.
