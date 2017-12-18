# Temp directory - PKI Express

PKI Express uses a temporary directory to cache Certificate Revocation Lists (CRLs), Certification Authoriry (CA) certificates, among other artifacts.

By default, the temporary directory used by PKI Express is:

* On Windows: `%TEMP%`
* On Linux: `/tmp`

To change the temporary directory:

```sh
pkie config --set tempDir=path
```

The directory should be writeable by your user and also by the user used to run the web application (on Linux, this usually is the `www-data` user).
