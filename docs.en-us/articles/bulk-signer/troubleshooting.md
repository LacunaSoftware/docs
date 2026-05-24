# Bulk Signer - Troubleshooting

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

## Exit codes

| Code | Meaning |
| ---- | ------- |
| 0    | Graceful shutdown |
| 1    | Unexpected fatal error — see Serilog log + stderr |
| 2    | Configuration error — usually a missing required value or invalid value range |
| 3    | Database initialisation/migration error — check `Database:ConnectionString` and folder permissions for the SQLite file |
| 4    | Required folder creation/access error — check `Folders:*` paths and write permissions |
| 5    | Signing certificate initialisation error — bad PFX/PIN/HSM config, expired cert, missing license |

## Lacuna license errors

Symptom: `Lacuna.Pki.LicenseException: License file not found ...`

Cause: `Signing:License` is empty or invalid.

Fix:

* Paste a valid license into `appsettings.Development.json` under `Signing:License`, **or**
* Set the env var `Signing__License` (note double underscore, no quotes around the value in shell).

## "PFX password not set"

Symptom: startup logs `PFX password not set. Configure environment variable 'BULKSIGNER_PFX_PASSWORD'`.

Fix: export the env var, or set `Signing:PfxFile:DevelopmentPassword` in `appsettings.Development.json` (Development only).

## "A file with the same name is already waiting for processing"

Cause: REST upload or watcher saw a name collision in the Processing folder.

Fix: rename the file or wait for the in-flight job to clear. v1 does not auto-rename to avoid masking concurrency issues.

## REST upload returns `413 Payload Too Large`

Cause: the body exceeded `FileValidation:MaxFileSizeMb` (default 100 MB).

Fix: raise the limit and restart. Kestrel's `MaxRequestBodySize` is set automatically from this option.

## `/api/ready` returns 503

Inspect the JSON body — each subsystem reports `ok` or `fail: <reason>`. Common causes:

* `database`: SQLite file not writable or locked by another instance.
* `folders`: a configured folder is not writable.
* `certificate`: the configured cert can't be loaded (missing license, missing password, expired, wrong source for the OS).

## Watched folder isn't picking up files

* Check the file isn't named `.something`, `*.tmp`, or `*.part` (ignored by design).
* Check `FileValidation:AllowedExtensions` includes your extension.
* Inspect the rolling log for `Skipping <file>: extension <ext> not in AllowedExtensions`.
* If the FileSystemWatcher couldn't start (e.g. inside some Docker filesystems), the 30 s periodic rescan will still pick the file up — wait one cycle or hit `POST /api/input/rescan`.

## TSA fails the job

If TSA is enabled, a failed timestamp request fails the job. Disable timestamping (`Timestamping:Enabled = false`) for the queue to drain, then troubleshoot the TSA endpoint.

## Verification fails for signed output

If you're using a self-signed test certificate, signature verification will report chain failures. Either:

* Set `Signing:Verification:FailJobOnVerificationError = false` for dev/CI, or
* Sign with a chain whose root is trusted by your environment.

## Docker container starts then exits

Most common: `Signing__License` not set in the environment, so cert init fails (exit 5). Check `docker compose logs` for the exit code, then add the missing variable to your `.env` file.

## Database is locked

Running multiple instances against the same SQLite file is unsupported in v1. Stop the extra instances.
