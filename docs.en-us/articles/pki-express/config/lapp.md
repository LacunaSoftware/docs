# LAPP Integration - PKI Express

This article describes how to configure the use of LAPP - Artifact Provider Proxy for PKI

Lapp enables a single domain (*.lacunasoftware.com) to request PKI resources, such as CRLs and CA Certificates. The requests are then redirected to worldwide servers to execute them simultaneously. It simplifies network and infrastructure managing and creates high availability connections.

By default, the integration is disabled. To enable it, you need the following command:

```sh
pkie config --set lappEnabled=true
```
