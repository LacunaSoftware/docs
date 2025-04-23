# Vulnerability checks - Rest PKI Core

The [Rest PKI Core](../index.md) Docker image is checked periodically for known vulnerabilities using [Docker Scout](https://docs.docker.com/scout/). This page reports
the vulnerabilities found with medium or higher severity and the actions performed to mitigate.

> [!NOTE]
> A vulnerability detection does not necessarily mean the application is vulnerable, only that it *might* be. Further investigation is required to determine
> whether a given vulnerability actually poses a threat to the application.

Our policy is to keep the application free of critical and high severity vulnerabilities and keep medium severities at a minimum. If a critical or high vulnerability
cannot be fixed, further investigation must be performed and documented here to ensure it does not pose an actual threat to the application.

<a name="check-2025-04" />

## Vulnerability check 2025-04 

Period: between 2025-04-22 and 2025-04-23

Version checked: [2.5.0](../changelog.md#v2-5-0)

Vulnerabilities found:

* Critical severity: 0
* High severity: **4**
  * [CVE-2024-0056](https://scout.docker.com/vulnerabilities/id/CVE-2024-0056/org/lacunasoftware?s=github&n=System.Data.SqlClient&t=nuget&vr=%3C4.8.6&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2025-27363](https://scout.docker.com/v/CVE-2025-27363?s=debian&n=freetype&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.10.4%2Bdfsg-1%2Bdeb11u2&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2024-32655](https://scout.docker.com/v/CVE-2024-32655?s=github&n=Npgsql&t=nuget&vr=%3E%3D6.0.0%2C%3C6.0.11&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2023-2603](https://scout.docker.com/v/CVE-2023-2603?s=debian&n=libcap2&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.44-1%2Bdeb11u1&utm_source=hub&utm_medium=ExternalLink)
* Medium severity: 6
  * [CVE-2025-1390](https://scout.docker.com/v/CVE-2025-1390?s=debian&n=libcap2&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.44-1%2Bdeb11u1&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2025-3576](https://scout.docker.com/v/CVE-2025-3576?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1.18.3-6%2Bdeb11u5&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2022-41064](https://scout.docker.com/v/CVE-2022-41064?s=github&n=System.Data.SqlClient&t=nuget&vr=%3C%3D4.8.4&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2024-12243](https://scout.docker.com/v/CVE-2024-12243?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=11&vr=%3C3.7.1-5%2Bdeb11u7&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2024-12133](https://scout.docker.com/v/CVE-2024-12133?s=debian&n=libtasn1-6&ns=debian&t=deb&osn=debian&osv=11&vr=%3C4.16.0-2%2Bdeb11u2&utm_source=hub&utm_medium=ExternalLink)
  * [CVE-2023-4641](https://scout.docker.com/v/CVE-2023-4641?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A4.8.1-1%2Bdeb11u1&utm_source=hub&utm_medium=ExternalLink)

Steps taken to mitigate:

* Updated to ASP.NET Core 8.0
* Updated several dependencies
* Removed dependency on OS package `libgdiplus`

Vulnerabilities after mitigation:

* Critical severity: 0
* High severity: 0
* Medium severity: 1
  * [CVE-2025-3576](https://scout.docker.com/v/CVE-2025-3576?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3E%3D1.20.1-2%2Bdeb12u2&utm_source=hub&utm_medium=ExternalLink) (recently discovered, no fix available at the time)

Mitigated version: [3.0.0](../changelog.md#v3-0-0)

## See also

* [Checking the version of Rest PKI Core](check-version.md)
* [Changelog](../changelog.md)
