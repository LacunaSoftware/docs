# PKI Express changelog

<a name="v1-1-0" />
### 1.1.0 (2017-12-06)

- Add activation mechanism, relieving applications from passing the license file on every call
- Improve logging
- Add "config" command
- Update PKI SDK to 2.0.7, fixing CRL cache bug on Linux


<a name="v1-0-3" />
### 1.0.3 (2017-11-15)

- Update PKI SDK to 2.0.3, fixing "PlatformNotSupportedException bug" on certain Linux distributions


<a name="v1-0-2" />
### 1.0.2 (2017-11-07)

- First version released for both Linux and Windows
- Update PKI SDK to 2.0.2
- Add version information on help command


<a name="v1-0-1" />
### 1.0.1 (2017-10-27)

- Fixed bug on compilation which caused unnecessary files to be included on the package

*This version was only released for Linux*


<a name="v1-0-0" />
### 1.0.0 (2017-10-26)

- First version released publicly
- Commands available on this version:
  - list-certs
  - read-cert
  - import-pfx
  - sign-data
  - sign-hash
  - sign-cades
  - sign-pades
  - sign-xml
  - start-cades
  - start-pades
  - start-xml
  - complete-sig
  - help

*This version was only released for Linux*
