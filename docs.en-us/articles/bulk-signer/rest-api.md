# Bulk Signer - REST API

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

Base URL: `http://localhost:8080` (default). All `/api/*` endpoints require the `X-API-Key` header except those listed as anonymous. Errors use RFC 7807 `ProblemDetails`.

## Authentication

Send your API key in the `X-API-Key` header:

```http
GET /api/jobs HTTP/1.1
X-API-Key: your-api-key
```

Missing or invalid key returns `401 Unauthorized`.

## Endpoints

### `POST /api/files` — submit a file for signing

`multipart/form-data` with:

* `file` — exactly one file (required)
* `signatureFormat` — `Auto` | `Cades` | `Xades` | `Pades` (optional; default `Auto`)
* `encryptionEnabled` — `true` | `false` (optional; defaults to config)
* `externalReference` — free-form string (optional)

Responses:

* `202 Accepted` with `{ "jobId", "statusUrl", "outputUrl" }`
* `400 Bad Request` — invalid filename, empty file, unsupported extension
* `409 Conflict` — a file with the same name is already in the Processing folder
* `413 Payload Too Large` — exceeds `FileValidation:MaxFileSizeMb`

Example:

```bash
curl -F "file=@contract.pdf" \
     -F "encryptionEnabled=false" \
     -H "X-API-Key: $BULKSIGNER_API_KEY" \
     http://localhost:8080/api/files
```

### `GET /api/jobs` — list jobs (paged, filterable)

Query parameters: `page`, `pageSize` (max 200), `status`, `source`, `signatureFormat`, `encryptionEnabled`, `filenameContains`, `externalReferenceContains`, `createdFromUtc`, `createdToUtc`. Default sort is `CreatedAtUtc desc`. Response shape:

```json
{
  "total": 312,
  "page": 1,
  "pageSize": 25,
  "items": [ { "id": "…", "status": "Completed", "source": "RestApi" } ]
}
```

### `GET /api/jobs/{jobId}` — full job detail and timeline

Returns a job with its events ordered by `CreatedAtUtc`. `404 Not Found` if the id is unknown.

### `GET /api/jobs/{jobId}/output` — download signed/encrypted output

* `200 OK` — streams the file with `Content-Disposition: attachment` and the actual generated filename.
* `404 Not Found` — unknown job.
* `409 Conflict` — job is not in `Completed` status.
* `410 Gone` — output file was removed by retention cleanup.

### `POST /api/jobs/{jobId}/retry` — retry a failed job

Allowed only when:

* The job is `Failed`.
* The original file is still in the Error folder.
* No file with the same name exists in the Processing folder.

Response: `202 Accepted` with `{ "jobId": "<new-id>", "retryOf": "<original-id>" }`. The new job links back via `OriginalJobId`.

### `POST /api/input/rescan` — trigger a watched-folder rescan

Returns `200 OK` with `{ "enqueued": <count> }`.

### `POST /api/cleanup/run` — run retention cleanup immediately

Returns `200 OK` with `{ "jobsDeleted", "outputFilesDeleted", "errorFilesDeleted", "operationalEventsDeleted", "filesMissing", "errors" }`.

### `GET /api/health` — anonymous liveness

Returns `200 OK` with `{ "healthy": true, "status": "OK" }`. Cached 5 s.

### `GET /api/ready` — anonymous deep readiness

Checks database, folder write probes, signing certificate, optional TSA, optional encryption certificate. Returns `200 OK` when ready or `503 Service Unavailable` with the failing checks. Cached 5 s.

### `GET /metrics` — counters (API key by default)

```json
{
  "totalJobs": 1234,
  "pendingJobs": 2,
  "processingJobs": 0,
  "completedJobs": 1100,
  "failedJobs": 80,
  "rejectedJobs": 52,
  "jobsBySource": { "WatchedFolder": 700, "RestApi": 534 },
  "jobsBySignatureFormat": { "Cades": 800, "Pades": 380, "Xades": 54 },
  "averageProcessingMs": 1287.5,
  "lastSuccessfulUtc": "2026-05-23T18:45:00Z",
  "lastFailedUtc": "2026-05-22T08:11:30Z"
}
```

Set `Metrics:RequireApiKey = false` to expose anonymously.

## Rate limiting

Default 60 requests/min per remote IP. Exceeded requests get `429 Too Many Requests` with a `ProblemDetails` body. Background workers are not rate-limited.

## OpenAPI / Scalar

Visit `/scalar/v1` (Development always; Production only when `Swagger:EnabledInProduction = true`) for an interactive contract.
