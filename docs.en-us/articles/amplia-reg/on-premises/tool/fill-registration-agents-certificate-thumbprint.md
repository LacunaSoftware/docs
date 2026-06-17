# Amplia Reg command: **fill-registration-agents-certificate-thumbprint**

## Name

`fill-registration-agents-certificate-thumbprint` - Fills the certificate thumbprint for registration agents

## Syntax

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [settings] -- fill-registration-agents-certificate-thumbprint
```

Or, on Docker:

```sh
docker run -i lacunasoftware/ampliareg:x.y.z [settings] -- fill-registration-agents-certificate-thumbprint
```

> [!IMPORTANT]
> Replace `x.y.z` above with the version of Amplia Reg you are running

[!include[About settings](includes/about-settings.md)]

Options:

* `--batchsize <batch-size>`: Number of records to process per iteration. Default: 100
* `--logfrequency <log-frequency>`: Frequency of progress logging. Default: 100

## Description

The `fill-registration-agents-certificate-thumbprint` command reads the stored certificates from blob storage for registration
agents that have a certificate stored but no thumbprint recorded, calculates the thumbprint for each certificate, and persists it.

> [!IMPORTANT]
> This command must be run **once** after upgrading to the version that introduced certificate thumbprint validation.
> Failing to run it will cause registration agents with previously stored certificates to be unable to sign in
> until their certificate is re-uploaded.

## See also

* [Amplia Reg command-line tool](index.md)
