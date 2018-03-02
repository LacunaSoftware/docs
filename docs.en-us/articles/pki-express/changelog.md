# PKI Express changelog

<a name="v1-3-0" />
### 1.3.0 (2018-03-02)

- Add support for opening and validating PAdES and CAdES signatures (commands `open-pades` and `open-cades`)
- Add support for editing PDFs (command `edit-pdf`), enabling generation of "printer-friendly versions"
- Add support for server signatures using PKCS #12 files (.pfx)
- Add support for using a web proxy
- Update PKI SDK to 2.0.13


<a name="v1-2-1" />
### 1.2.1 (2018-01-18)

- Update PKI SDK to 2.0.11, thus fixing bug that caused network delays even with `--offline` enabled


<a name="v1-2-0" />
### 1.2.0 (2018-01-17)

- Add global flag `--offline` to allow offline operations
- Fix bug that caused activation to be required for `help` command
- Update PKI SDK to 2.0.10


<a name="v1-1-0" />
### 1.1.0 (2017-12-06)

- Add activation mechanism, relieving applications from passing the license file on every call
- Improve logging
- Add `config` command
- Update PKI SDK to 2.0.7, fixing CRL cache bug on Linux


<a name="v1-0-3" />
### 1.0.3 (2017-11-15)

- Update PKI SDK to 2.0.3, fixing *PlatformNotSupportedException bug* on certain Linux distributions


<a name="v1-0-2" />
### 1.0.2 (2017-11-07)

- First version released for both Linux and Windows
- Update PKI SDK to 2.0.2
- Add version information on `help` command


<a name="v1-0-1" />
### 1.0.1 (2017-10-27)

- Fixed bug on compilation which caused unnecessary files to be included on the package

*This version was only released for Linux*


<a name="v1-0-0" />
### 1.0.0 (2017-10-26)

- First version released publicly
- Commands available on this version:
  - `list-certs`
  - `read-cert`
  - `import-pfx`
  - `sign-data`
  - `sign-hash`
  - `sign-cades`
  - `sign-pades`
  - `sign-xml`
  - `start-cades`
  - `start-pades`
  - `start-xml`
  - `complete-sig`
  - `help`

*This version was only released for Linux*
