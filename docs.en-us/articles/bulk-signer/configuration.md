# Bulk Signer - Configuration

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

All settings live in `appsettings.json` with environment overrides in `appsettings.{Development,Production,Docker}.json`. Any value can be overridden via environment variables using the standard `Section__Subsection__Key` pattern. Secrets are read **only** from environment variables (never logged).

## Folders

```json
"Folders": {
  "Input": "data/input",
  "Processing": "data/processing",
  "Output": "data/output",
  "Error": "data/error",
  "Logs": "data/logs"
}
```

All five folders are created at startup and write-probed. Failure exits with code 4. In Docker the defaults are absolute paths under `/var/bulksigner/`.

## Database

```json
"Database": { "Provider": "Sqlite", "ConnectionString": "Data Source=data/bulksigner.db" }
```

EF Core runs all pending migrations at startup. Failure exits with code 3.

## Security

```json
"Security": {
  "ApiKeyHeaderName": "X-API-Key",
  "ApiKeyEnvironmentVariable": "BULKSIGNER_API_KEY",
  "DashboardCookieExpirationHours": 8
}
```

The API key is read from the env var. In Development, you may also set `Security:DevelopmentApiKey`. Production fails fast with code 2 if no key is present.

## File validation

```json
"FileValidation": {
  "AllowedExtensions": [".pdf", ".xml", ".txt", ".csv", ".zip"],
  "MaxFileSizeMb": 100,
  "ReadinessPollIntervalMilliseconds": 1000,
  "ReadinessTimeoutSeconds": 300
}
```

REST uploads exceeding `MaxFileSizeMb` return `413 Payload Too Large`. Watched-folder files exceeding the limit become `Rejected` jobs and move to Error.

## Signing

```json
"Signing": {
  "License": "<lacuna-license-string>",
  "CertificateSource": "PfxFile|Pkcs11|WindowsStore",
  "DefaultSignatureFormat": "Cades|Xades|Pades",
  "Verification": { "Enabled": true, "FailJobOnVerificationError": true },
  "PfxFile": {
    "Path": "certificates/signer.pfx",
    "PasswordEnvironmentVariable": "BULKSIGNER_PFX_PASSWORD"
  },
  "Pkcs11": {
    "LibraryPath": "/usr/local/lib/libpkcs11.so",
    "TokenLabel": "", "TokenSerialNumber": "", "SlotNumber": null,
    "CertificateLabel": "", "CertificateId": "",
    "PinEnvironmentVariable": "BULKSIGNER_HSM_PIN"
  },
  "WindowsStore": { "StoreName": "My", "StoreLocation": "CurrentUser", "Thumbprint": "" }
}
```

* The Lacuna PKI SDK requires a valid license to load or sign anything. Set `Signing:License` (or the env var `Signing__License`). The provided dev license string MUST NOT be committed if it is licensed to a specific machine/customer.
* `CertificateSource = WindowsStore` is rejected at startup on non-Windows hosts. Exit code 5.
* For PKCS#11, the HSM PIN is read only from the env var. Integration depends on a vendor-provided `.so` / `.dll` PKCS#11 library — these are almost never built for musl, so the Docker image uses Debian-slim.

## Timestamping (TSA)

```json
"Timestamping": {
  "Enabled": false,
  "TsaUrl": "",
  "Username": "",
  "PasswordEnvironmentVariable": "BULKSIGNER_TSA_PASSWORD",
  "TimeoutSeconds": 30
}
```

When enabled, signing jobs fail (rather than silently degrading) if the TSA request fails.

## Encryption

```json
"Encryption": {
  "Enabled": false,
  "RecipientCertificatePath": "certificates/recipient.cer",
  "ContentEncryptionAlgorithm": "AES-256-GCM",
  "KeyProtectionFormat": "PKCS7-CMS-EnvelopedData"
}
```

v1 implements AES-256-CBC inside PKCS#7 EnvelopedData (the spec mentions GCM; CBC is broadly portable across .NET on Windows and Linux and can be swapped without API changes). The recipient certificate must contain a usable RSA public key.

## Retention

```json
"Retention": { "Enabled": true, "RetentionDays": 30, "CleanupIntervalHours": 24 }
```

Terminal jobs (Completed/Failed/Rejected/Canceled) older than `RetentionDays` are physically deleted, along with their `SigningJobEvent`s, output files, and error files. Manual trigger: `POST /api/cleanup/run` or the Dashboard.

## Dashboard

```json
"Dashboard": { "HomeRefreshSeconds": 5, "JobsRefreshSeconds": 10, "JobDetailsRefreshSeconds": 5 }
```

Job-details auto-refresh stops once the job hits a terminal status.

## Rate limiting and miscellany

```json
"RateLimiting": { "Enabled": true, "RequestsPerMinutePerIp": 60 },
"Metrics": { "Enabled": true, "RequireApiKey": true },
"Health": { "CacheSeconds": 5 },
"Swagger": { "EnabledInProduction": false }
```

`Swagger:EnabledInProduction = true` enables the Scalar UI in Production (still gated by API key when relevant). In Development it's always on.

## Secrets — env-var checklist

| Variable                  | Used by                     | Required when |
| ------------------------- | --------------------------- | ------------- |
| `BULKSIGNER_API_KEY`      | REST API + dashboard login  | Production always |
| `BULKSIGNER_PFX_PASSWORD` | PFX certificate source      | `CertificateSource = PfxFile` |
| `BULKSIGNER_HSM_PIN`      | PKCS#11 source              | `CertificateSource = Pkcs11` |
| `BULKSIGNER_TSA_PASSWORD` | TSA timestamping            | `Timestamping:Enabled = true` and TSA needs auth |
| `Signing__License`        | Lacuna PKI SDK              | Production always |

Secrets are never logged; their **presence** is logged with safe metadata only (cert subject/issuer/thumbprint/expiry).
