# LAPP Integration - PKI Express

This article describes how to configure the use of LAPP - Artifact Provider Proxy for PKI

LAPP enables a single domain (*.lacunasoftware.com) to request PKI resources, such as CRLs and CA Certificates. The requests are then redirected to worldwide servers to execute them simultaneously. It simplifies network and infrastructure managing and creates high availability connections.

We recommend the LAPP when:
- the server doesn't have access to the network;
- the firewall blocks access to external URL;
- the URL containing the CRL and CA certificates suffers from instabilities.

By default, the integration is disabled. To enable it, you need the following command:

```sh
pkie config --set lappEnabled=true
```

[!NOTE] Besides the activation, you need to contact our support team at lacuna.help, to authorize your access to the LAPP.