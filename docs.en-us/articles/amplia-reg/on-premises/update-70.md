# Update Amplia Reg from Version 6.x to 7.0

## 1. Before Updating (Brazil Only)

This command populates the `CertificateThumbprint` column in the `RegistrationAgent` table.

## 2. Update Amplia Reg

Update AmpliaRegNg to version `7.0.0`. Earlier versions **must not** be used. Later versions are **not recommended**.

## 3. Migrate Data

Follow the steps described in [fill-registration-agents-certificate-thumbprint](tool/fill-registration-agents-certificate-thumbprint.md).

On Linux:

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll -- fill-registration-agents-certificate-thumbprint
```

On Docker:

```sh
docker run -i lacunasoftware/ampliareg:7.0.0 -- fill-registration-agents-certificate-thumbprint
```

Make sure to follow the steps described in the referenced article to ensure that no errors occurred during the data migration process.
