# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Source for [docs.lacunasoftware.com](https://docs.lacunasoftware.com), the Lacuna Software documentation portal. It is **not an application** — it is a DocFX site whose content lives almost entirely in Markdown. Most edits are to `.md` files; PowerShell, C#, and JavaScript appear only in supporting tooling.

## Build

The site is built with [DocFX](https://dotnet.github.io/docfx/) (the legacy v2 line — note the `.zip` xref and `net45` metadata target). DocFX is **not** installed by this repo; install it separately and have `docfx.exe` on PATH.

- Build English site: `cd docs.en-us; docfx.exe docfx.json` → outputs to `_site/en-us/`
- Build Portuguese site: `cd docs.pt-br; docfx.exe docfx.json` → outputs to `_site/pt-br/`
- The `metadata` step in each `docfx.json` expects sibling repositories two levels up (`../../RestClient`, `../../PKI`, `../../RestPkiClient`, `../../PkiNLogConnector`, `../../PkiEntityFrameworkConnector`, `../../PkiAmazonConnector`, `../../PkiAzureConnector`) to generate the .NET API reference into `/api/`. If you don't have those checkouts, the `build` step still works — generated `/api/**.yml` is consumed if present and skipped otherwise (and `/api/` is gitignored).

PDF generation (Portuguese only) is described in `pdf/README.md`. It is a manual workflow run from `C:\AppData\DocsBuild\docs-pre\docs.pt-br` against `docs.pt-br/docfx-pdf.json`, using `pdf/Fill-Articles.ps1` to backfill articles that exist only in English (those whose pt-br file is a `data-alt-locales` stub).

## The .sln and .csproj files are folder stubs

`docs.sln` exists so the repo opens cleanly in Visual Studio. The `docs.en-us`, `docs.pt-br`, `template`, and `includes` projects all use `<Compile Remove="**" />` — they compile nothing and exist only so the folders appear in Solution Explorer. **Do not** try to "build the solution" to build the docs; use `docfx.exe` as above.

The one real project is `snippets/snippets.csproj` (`net45`, `win7-x86`, references `Lacuna.Pki` 1.16.9). It's a console runner that reflects over its own assembly and lets you pick a snippet class to execute interactively — used to verify that documented C# code actually compiles and runs.

## Content architecture

This is the part that requires reading multiple files to understand:

**Two parallel content trees, one set of shared resources.** `docs.en-us/articles/` and `docs.pt-br/articles/` mirror each other folder-for-folder and (mostly) file-for-file. The build produces two completely separate sites. Both `docfx.json` files reach **up one directory** (`cwd: ".."`) to pull from the **shared** top-level folders:

- `images/` — all screenshots, diagrams, logos. Reference from articles with `../../../images/...`.
- `content/` — large binary resources (zips, javadocs, typedocs output).
- `fonts/` — site fonts.
- `includes/` — Markdown fragments shared between languages and across articles. Reference from articles with `[!include[...](../../../includes/...)]`. Organized by product (`signer/`, `pki-express/`, `rest-pki/`, etc.) and by deployment target subfolders (`linux/`, `windows/`, `docker/`, `centos/`, `rhel/`, `ubuntu/`).
- `api/` — DocFX-generated .NET API metadata (gitignored).
- `typedocs/` — TypeScript declaration source for the Web PKI API reference; build emits into `content/typedocs/web-pki/` (see `typedocs/README.md`).
- `template/` — the custom DocFX template (liquid partials, mustache `.tmpl`, CSS/JS) used by both languages.

**Article-local images** live in `docs.{lang}/articles/<product>/images/` and are pulled in by the second resource glob in `docfx.json`. Use these for one-off images; use the shared `/images/` tree for anything reusable.

**Cross-language stub articles.** When only one language has content, the other language's file is a stub that points at its counterpart:

```md
# Article title

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>
```

The PDF build (`pdf/Fill-Articles.ps1`) overwrites these stubs with the English version (backing up first) so the PDF is complete in one language.

## Authoring rules to remember

These are the non-obvious ones — full markdown reference is in `docs.en-us/articles/welcome/contributing.md`.

- **Always create new articles in both `docs.en-us/articles/` and `docs.pt-br/articles/`**, and add the entry to **both** `articles/toc.md` files. Use UTF-8 **with BOM** — the easiest way to get this right is to copy an existing article rather than creating a fresh file.
- **Horizontal rule is `***`, not `---`.** `---` is YAML front-matter to DocFX and will break the page.
- **Anchors:** if the article is English and the section title slugged (lowercase, spaces→hyphens) matches the desired anchor, no anchor declaration is needed. Otherwise declare `<a name="anchor-name" />` right above the heading. Portuguese articles always need explicit anchors.
- **API cross-references:** `@Lacuna.RestPki.Client.RestPkiClient` works for most cases. If the UID contains `#` (e.g. constructors), use `<xref:Lacuna.Pki.LinkedTrustArbitrator.%23ctor(Lacuna.Pki.ITrustArbitrator[])>`. Find exact UIDs in the generated `/api/*.yml` after a metadata build.
- **API doc overwrite files** in `docs.{lang}/apidoc/*.md` (e.g. `Lacuna.Pki.Cades.CadesSignatureCompression.md`) augment auto-generated API pages — they're picked up via the `overwrite` section in `docfx.json`, not the regular `content` section.
- **Ordered lists:** prefer `1.` on every item; DocFX re-numbers on render and this makes reordering trivial.

## Scripts

- `scripts/Update-PkieVersion.ps1 <x.y.z>` — bulk-replaces the PKI Express version string in the install/update/link include files under `includes/pki-express/{linux,windows}/`. Uses Windows-1252 byte-level read/write to preserve each file's original encoding and BOM. Run from the `scripts/` folder.
- `pdf/Fill-Articles.ps1` — see PDF section above. Run from a `docs.pt-br` working copy, not from this repo's `pdf/` folder.

## Conventions that aren't obvious from a single file

- **Signer release flow** (visible in `git log`): one branch per Signer version (`signer/x.y.z`), commits land changelog → binaries references → settings, then the branch is merged. When updating Signer docs for a new release, expect to touch `docs.{lang}/articles/signer/changelog.md`, version-bearing files under `includes/signer/`, and the corresponding settings article — in both languages.
- **`_disableContribution: true`** in front-matter (see `docs.en-us/index.md`) hides the "Edit on GitHub" link on landing pages.
- The custom template's strings come from `template/token.json` — edit there, not in the `.tmpl` files, to retitle sections like "Inheritance", "Examples", etc.
