# Configure CA certificate templates - Amplia

To customize the profile of CA certificates issued by your [on-premises](index.md) instance of [Amplia](../index.md), configure the section
`CACertificateTemplates` of the configuration file. Inside it, add a subsection named `RootCA` or `IntermediateCA` depending on whether you wish
to customize root or intermediate CAs. In each subsection, the following settings are recognized:

* **IncludeSubjectKeyId**: whether to include the *SubjectKeyIdentifier* extension -- `True` (default) or `False`
* **IncludeAuthorityKeyId**: whether to include the *AuthorityKeyIdentifier* extension -- `True` (default) or `False`
* **KeyUsages**: comma-separated list of the following key usages -- default is `KeyCertSign,CrlSign`
  * `CrlSign`
  * `DataEncipherment`
  * `DecipherOnly`
  * `DigitalSignature`
  * `EncipherOnly`
  * `KeyAgreement`
  * `KeyCertSign`
  * `KeyEncipherment`
  * `NonRepudiation`
* **ExtendedKeyUsages**: comma-separated list of the following extended key usages -- default is none
  * `ClientAuth`
  * `ServerAuth`
  * `CodeSigning`
  * `EmailProtection`
  * `TimeStamping`
  * `OcspSigning`
  * `IpsecEndSystem`
  * `IpsecTunnel`
  * `IpsecUser`
  * `Any`
* * **RandomSerialNumber**: whether to use a random serial number -- `True` or `False` (default)

Example (*.ini* or *.conf* configuration file):

```ini
[CACertificateTemplates:IntermediateCA]
KeyUsages=KeyCertSign,CrlSign,DigitalSignature
RandomSerialNumber=True
```

Example (environment variables):

```bash
CACertificateTemplates__IntermediateCA__KeyUsages=KeyCertSign,CrlSign,DigitalSignature
CACertificateTemplates__IntermediateCA__RandomSerialNumber=True
```

## Certificate Policies

Under each subsection (`RootCA` or `IntermediateCA`), there can be N subsections named `Policies:0`, `Policies:1` and so on, with the following settings:

* **Oid**: policy OID
* **StatementUrl**: policy statement URL

Under each policy section there can be a subsection named `UserNotices` with values `0`, `1` and so on, each one with a user notice.

Example (*.ini* or *.conf* configuration file):

```ini
[CACertificateTemplates:IntermediateCA:Policies:0]
Oid=1.2.3.4
StatementUrl=https://ca.patorum.com/ca-certificate-policy.pdf

[CACertificateTemplates:IntermediateCA:Policies:0:UserNotices]
0=This CA certificate is for test purposes
1=No end-user certificates should be accepted under this CA
```

Example (environment variables):

```bash
CACertificateTemplates__IntermediateCA__Policies__0__Oid=1234
CACertificateTemplates__IntermediateCA__Policies__0__StatementUrl=https://ca.patorum.com/ca-certificate-policy.pdf
CACertificateTemplates__IntermediateCA__Policies__0__UserNotices__0=This CA certificate is for test purposes
CACertificateTemplates__IntermediateCA__Policies__0__UserNotices__1=No end-user certificates should be accepted under this CA
```

## Legacy configuration

The **CACertificateTemplates** configuration section described above was introduced on Amplia version [4.22.0](../changelog.md#v4-22-0). The
previous configuration section, **CACertificateTemplate** (singular) is still supported, which affects both root and intermediate CA certificates.

The syntax is slightly different from the syntax described above, particularly for the **KeyUsages** and **ExtendedKeyUsages** settings. See examples below.

Example (*.ini* or *.conf* configuration file):

```ini
[CACertificateTemplates]
RandomSerialNumber=True

[CACertificateTemplates:KeyUsages]
0=KeyCertSign
1=CrlSign
2=DigitalSignature
```

Example (environment variables):

```bash
CACertificateTemplates__RandomSerialNumber=True
CACertificateTemplates__KeyUsages__0=KeyCertSign
CACertificateTemplates__KeyUsages__1=CrlSign
CACertificateTemplates__KeyUsages__2=DigitalSignature
```
