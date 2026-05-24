# Bulk Signer - Setup on Docker

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

The provided `Dockerfile` produces a Debian-slim image. **Alpine is intentionally not used** because Pkcs11Interop (used by `Lacuna.Pki.Pkcs11`) and most HSM `.so` libraries are not built for musl, and `System.Security.Cryptography.Xml` has historical quirks on musl that affect XAdES signing.

## Build

```bash
docker build -t lacuna-bulksigner:v2 .
```

## Run with docker compose

Create a `.env` next to the `docker-compose.yml`:

```env
BULKSIGNER_API_KEY=your-api-key
BULKSIGNER_PFX_PASSWORD=your-pfx-password
LACUNA_PKI_LICENSE=<lacuna-license-string>
# BULKSIGNER_HSM_PIN=...        # only if CertificateSource = Pkcs11
# BULKSIGNER_TSA_PASSWORD=...   # only if TSA needs auth
```

Then:

```bash
docker compose up -d --build
docker compose logs -f bulksigner
```

Host-side data lives in:

```text
docker-data/{input,processing,output,error,logs,db}
docker-config/certificates/   # mount your signer.pfx here, read-only
```

`./docker-data/` is `.gitignore`d. Drop a file into `docker-data/input/` to exercise the watcher.

## Volumes

The compose file maps each subfolder of `/var/bulksigner/` to a host path under `./docker-data/`, plus a read-only `certificates` mount. Customise as needed.

## Healthcheck

The container's healthcheck hits `http://localhost:8080/api/health` every 30 s. The endpoint is anonymous and cached for 5 s.

## Sizing

Sequential signing is the bottleneck; a single replica handles the configured workload. Don't run multiple replicas against the same folder/database — this is explicitly disallowed in v1.

## Production deployment

* Place the container behind a reverse proxy that terminates TLS (Nginx, Traefik, cloud LB). The app does not terminate TLS itself in v1.
* Mount real volumes (not bind mounts) for `output/`, `error/`, and `db/` in production.
* Set `Signing__License` and `BULKSIGNER_API_KEY` via the orchestrator's secret mechanism — never via `docker run -e`.

## See also

* [Configuration](configuration.md) — full env-var checklist
* [Troubleshooting](troubleshooting.md)
