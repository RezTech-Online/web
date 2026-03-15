In-progress project. Coming soon.

---

## Deploy to Spaceship (FTP)

Pushes to `main` trigger an automatic deploy to your host. The workflow lives in **`.github/workflows/deploy-to-spaceship.yml`** (GitHub only runs workflows from that path).

### What gets copied to the server

All **site files** are uploaded to your `FTP_REMOTE_PATH` (e.g. `/` or `public_html`):

- **`index.html`** → root of the site
- **`assets/`** → images, logo, etc.

These are **not** uploaded (dev/repo-only):

- `.git/`, `.github/`, `workflows/`
- `node_modules/`, `package.json`, `package-lock.json`
- `README.md`, `LICENSE`

### Where to set credentials

**GitHub → this repo → Settings → Secrets and variables → Actions**, or **Environments → prod** if you use the prod environment.

Add these secrets (in the repo or in the **prod** environment):

| Secret             | Description |
|--------------------|-------------|
| `FTP_SERVER`       | FTP hostname (e.g. `ftp.example.com`) |
| `FTP_USERNAME`     | FTP username |
| `FTP_PASSWORD`     | FTP password |
| `FTP_REMOTE_PATH`  | Use `/` for site root, or e.g. `public_html` |

Then push to `main`; the **Actions** tab will show the deploy run.

---
