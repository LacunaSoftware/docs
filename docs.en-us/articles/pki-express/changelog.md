# PKI Express changelog

<a name="v1-34-0" />
### 1.34.0 (2025-03-17)

- Updata PKI SDK [2.18.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-18-0)
- Update target framework build
- Update dependency packages
- Add PAdES PKI-Brazil AD-RC and AD-RA signature policies support

<a name="v1-33-0" />
### 1.33.0 (2025-02-20)

- Add direct timestamping features: stamp-data and stamp-hash
- Add auto-retry timestamp requester configuration
- Improve PDF signatures listing when duplicated signature field name present
- Fix signature policy model conversion when policy ID only

<a name="v1-32-1" />
### 1.32.1 (2024-09-26)

- Updata PKI SDK [2.17.2](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-17-2)

<a name="v1-32-0" />
### 1.32.0 (2024-09-06)

- Updata PKI Trust Services package 1.7.0
- Improve error logging
- Add XMLDSig basic signature policy with SHA1 digest algorithm (for legacy signatures support ONLY)

<a name="v1-31-2" />
### 1.31.2 (2024-04-17)

- Updata PKI SDK [2.16.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-16-0)
- Improve activation call

<a name="v1-31-1" />
### 1.31.1 (2023-06-29)

- Update BrazilTrustServices package with proxy support

<a name="v1-31-0" />
### 1.31.0 (2023-01-04)

- Updata PKI SDK [2.13.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-13-0)
- Add support to P7B as Trust Arbitrator
- Linux single-file self-contained version

<a name="v1-29-0" />
### 1.29.0 (2022-11-16)

- Change linux build to .NET 6.0 for support to newer Ubuntu versions

<a name="v1-28-1" />
### 1.28.1 (2022-09-15)

- Fix behavior when a cloud certificate provider return more than one certificate with the same identifier by choosing one of these certificates

<a name="v1-28-0" />
### 1.28.0 (2022-08-25)

- Add support to start an authorization process in trust service provider without discover operation (command `start-service-auth`)
- Add support to retrieve the `customState` value before completing authorization in trust service provider(command `get-service-auth-custom-state`)

<a name="v1-27-1" />
### 1.27.1 (2022-07-10)

- Update PKI SDK [2.12.1](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-12-1)

<a name="v1-27-0" />
### 1.27.0 (2022-07-10)

- Add PDF signature fields: `signer-name` and `location`
- Add XML signature `classic-enveloped-transform` option
- Update PKI SDK [2.12.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-12-0)

<a name="v1-26-3" />
### 1.26.3 (2022-04-25)

- Add `trust-uncertified-signing-time` option to XML signature validation
- Add XAdES PKI-Brazil signature policy AD-RB with revocation values included
- Update PKI SDK [2.11.3](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-11-3)

<a name="v1-26-2" />
### 1.26.2 (2022-04-22)

- Update PKI SDK [2.11.2](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-11-2)

<a name="v1-26-1" />
### 1.26.0 (2022-04-19)

- Fix custom trust arbitrators propagation

<a name="v1-26-0" />
### 1.26.0 (2022-04-19)

- Add international PKI fields to certificate model: Argentina, Ecuador, Paraguay, Peru
- Add certificate policies field to certificate model
- Add XAdES PKI-Brazil signature policy AD-RC (Completa)
- Add CAdES PKI-Brazil signature policy AD-RA (Arquivamento)
- Add XML signature element insertion option: `sig-element-insertion`
- Update PKI SDK [2.11.1](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-11-1)

<a name="v1-25-4" />
### 1.25.4 (2022-02-02)

- Update PKI SDK [2.9.1](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-9-1)

<a name="v1-25-3" />
### 1.25.3 (2021-10-26)

- Add support to auto positioning direction of PAdES visual representation

<a name="v1-25-1" />
### 1.25.1 (2021-10-22)

- Fix command `open-xml` output when XML has full XML signature

<a name="v1-25-0" />
### 1.25.0 (2021-10-21)

- Add support for opening and validating XML signatures (command `open-xml`)
- Add support to PKI-Brazil archiving policy on XML signatures (policy `adra`)
- Fixed ValidationException output when `json` flag is set

<a name="v1-24-1" />
### 1.24.1 (2021-07-16)

- Fixed bug on trustServicesDiscoveryTimeout configuration
- Add flag `--guess-certificate` that select the newest certificate when multiple are found

<a name="v1-24-0" />
### 1.24.0 (2021-07-07)

- Add `--session-lifetime` option to `discover-services` and `pwd-auth`, enabling the configuration of the signature session duration, in seconds
- Improved culture settings

<a name="v1-23-2" />
### 1.23.2 (2021-06-04)

- Fixed bug on PAdES validation when there is missing required information

<a name="v1-23-1" />
### 1.23.1 (2021-05-14)

- Fixed bug on open PAdES when there is missing required information

<a name="v1-23-0" />
### 1.23.0 (2021-02-22)

- Add support to return the certificate's content on commands `open-pades` and `open-cades` with the option `--fill-cert-content`
- Add `--trust-uncertified-signing-time` option on commands `open-pades` and `open-cades`

<a name="v1-22-0" />
### 1.22.0 (2021-01-21)

- Add support to return the commitment type of CAdES signatures (command `open-cades`)
- Add support to return the certificate's content on command `open-cert` with the option `--fill-content`
- Add support to return the certificate's issuers on command `open-cert` with the option `--fill-issuer`

<a name="v1-21-0" />
### 1.21.0 (2020-11-05)

- Fix ValidationItemType conversion
- Improve certificate model to reaturn KeyUsage value
- Add support to return the program's current version (command `version`)

<a name="v1-20-0" />
### 1.20.0 (2020-10-05)

- Add support for PAdES validation according different policies with the option `--policy`
- Add support for setting the commitment type on `sign-cades` and `start-cades` commands with the option `--commitment-type`
- Add support for certificate decoding and validation (command `open-cert`)

<a name="v1-19-0" />
### 1.19.0 (2020-09-14)

- Add support for data protection key generation (command `generate-data-protection-key`)
- Add support for data protection key configuration
- Update PKI SDK to [2.7.8](../pki-sdk/changelog.md#v2-7-8)

<a name="v1-18-0" />
### 1.18.0 (2020-08-20)

- Add support for using document hashes in CAdES signature detached
- Add support for visual representation with `visual-rep` in timestamps
- Improve command return when completing authentication with Brazilian PSCs
- Fix parse for sessionType field in command `discover-services`
- Update PKI SDK to [2.7.5](../pki-sdk/changelog.md#v2-7-5)

<a name="v1-17-0" />
### 1.17.0 (2020-07-30)

- Add support to signature using cloud certificates (integration with Brazilian PSCs)
- Improved CAdES signature merge to accept one signature file

<a name="v1-16-0" />
### 1.16.0 (2020-06-26)

- Add field "certificationLevel" in PAdES signature

<a name="v1-15-0" />
### 1.15.0 (2020-06-17)

- Add field "customSignatureFieldName" in PAdES signature
- Update PKI SDK to [2.7.2](../pki-sdk/changelog.md#v2-7-2)

<a name="v1-14-0" />
### 1.14.0 (2020-06-09)

- Add support for signature (CAdES, PAdES and XAdES) using key stored on Azure Key Vault
- Update PKI SDK to [2.7.0](../pki-sdk/changelog.md#v2-7-0)

<a name="v1-13-2" />
### 1.13.2 (2019-08-21)

- Update PKI SDK to [2.5.3](../pki-sdk/changelog.md#v2-5-3)

<a name="v1-13.1" />
### 1.13.1 (2019-07-31)

- Add the option of not showing the default visual representation on a PAdES signature with `--suppress-default-visual-rep` enabled

<a name="v1-13-0" />
### 1.13.0 (2019-07-19)

- Add integration with LAPP service
- Add support for signer's reason for a PAdES signature with `--reason` enabled
- Update PKI SDK to [2.5.1](../pki-sdk/changelog.md#v2-5-1)

<a name="v1-12-3" />
### 1.12.3 (2019-05-20)

- Compilation changes

<a name="v1-12-2" />
### 1.12.2 (2019-04-01)

- Add support to timeout configuration for CRLs and CA issuers download
- Add support to timeout configuration for timestamp request
- Update PKI SDK to [2.3.0](../pki-sdk/changelog.md#v2-3-0)

<a name="v1-12-0" />
### 1.12.0 (2019-02-05)

- Add support to PKI-Brazil policies on PAdES signatures (policies `adrb`, `adrb-ltv`, and `adrt`)
- Update PKI SDK to [2.2.7](../pki-sdk/changelog.md#v2-2-7)

<a name="v1-11-0" />
### 1.11.0 (2018-12-04)

- Add support for key generation (command `gen-key`)
- Add support for PKCS #12 certificate generation (command `create-pfx`)

<a name="v1-10-0" />
### 1.10.0 (2018-10-31)

- Add support for setting culture and timezone with `--culture` and `--timezone` enabled on the signatures
- Add support for setting date time format on PAdES visual representation
- Add support for listing available timezones on the system (command `list-timezones`)

<a name="v1-9-0" />
### 1.9.0 (2018-10-05)

- Add support for merging CMS/CAdES signatures (command `merge-cms`).
- Improve PAdES and CAdES signatures validation to support policies with timestamp.

<a name="v1-8-0" />
### 1.8.0 (2018-09-25)

- Add support for returning the signer certificate after a signature.
- Update PKI SDK to [2.1.3](../pki-sdk/changelog.md#v2-1-3)

<a name="v1-7-0" />
### 1.7.0 (2018-09-20)

- Add support for timestamping (command `stamp-pdf`) on PDF files.

<a name="v1-6-2" />
### 1.6.2 (2018-07-20)

- Fix bug on manual activation with new license
- Update PKI SDK to [2.1.0](../pki-sdk/changelog.md#v2-1-0)

<a name="v1-6-1" />
### 1.6.1 (2018-07-11)

- Fixed bug on activation that affected installation on Docker containers

<a name="v1-6-0" />
### 1.6.0 (2018-06-18)

- Add support for _Certificación de Origen Digital_ (COD) signature policy on XML signatures.

<a name="v1-5-0" />
### 1.5.0 (2018-05-18)

- Add support for choosing a signature policy with `--policy` enabled on the signatures
- Add support for performing signatures with timestamp (support for PAdES, CAdES and XAdES)
- Update PKI SDK to [1.20.16](../pki-sdk/changelog.md#v1-20-16), fixing certificate chain filling bug on PAdES

<a name="v1-4-1" />
### 1.4.1 (2018-05-14)

- Update PKI SDK to [1.20.15](../pki-sdk/changelog.md#v1-20-15)

<a name="v1-4-0" />
### 1.4.0 (2018-04-10)

- Add support for authentication with certificate (commands `start-auth` and `complete-auth`)

<a name="v1-3-0" />
### 1.3.0 (2018-03-02)

- Add support for opening and validating PAdES and CAdES signatures (commands `open-pades` and `open-cades`)
- Add support for editing PDFs (command `edit-pdf`), enabling generation of "printer-friendly versions"
- Add support for server signatures using PKCS #12 files (.pfx)
- Add support for [using a web proxy](config/proxy.md)
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

- Update PKI SDK to 2.0.3, fixing _PlatformNotSupportedException bug_ on certain Linux distributions

<a name="v1-0-2" />
### 1.0.2 (2017-11-07)

- First version released for both Linux and Windows
- Update PKI SDK to 2.0.2
- Add version information on `help` command

<a name="v1-0-1" />
### 1.0.1 (2017-10-27)

- Fixed bug on compilation which caused unnecessary files to be included on the package

_This version was only released for Linux_

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

_This version was only released for Linux_
