# Bulk Signer - Dashboard

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

The dashboard is a Blazor Server + MudBlazor UI hosted in the same .NET process as the API.

## Login

Navigate to `/login` and enter the configured API key. A cookie session is issued for the value of `Security:DashboardCookieExpirationHours` (default 8 h). Logout via `/logout`.

The dashboard cookie scheme is separate from the API-key scheme; the API continues to require `X-API-Key`.

## Pages

* **Home (`/`)** — operational status, queue size, totals, storage paths. Auto-refreshes every `Dashboard:HomeRefreshSeconds` (default 5 s).
* **Jobs (`/jobs`)** — paged, filterable table. Includes `Rescan input` and `Run cleanup now` buttons. Auto-refreshes every `Dashboard:JobsRefreshSeconds` (default 10 s).
* **Job details (`/jobs/{id}`)** — full metadata, event timeline, output download button for `Completed` jobs. Auto-refresh stops once the job hits a terminal status (`Completed`, `Failed`, `Rejected`, `Canceled`).
* **Statistics (`/statistics`)** — counts by status, source, and signature format.

Polling intervals are configurable. Auto-refresh stops automatically for terminal statuses. There is no custom SignalR or push messaging in v1 — Blazor's circuit transport handles UI updates.

## Operational actions

The Jobs page includes:

* **Rescan input** — scans the configured Input folder for new files (same handler as `POST /api/input/rescan`).
* **Run cleanup now** — applies retention immediately (same handler as `POST /api/cleanup/run`).

No file upload from the dashboard in v1 — REST API only.

## Secret hygiene

The dashboard never displays:

* API key
* PFX password
* HSM PIN
* TSA password

Only safe certificate metadata (subject, issuer, thumbprint, expiry) is shown.
