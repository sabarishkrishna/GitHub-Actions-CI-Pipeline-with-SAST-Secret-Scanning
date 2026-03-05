# simple-api

A minimal Node.js REST API with a GitHub Actions CI pipeline covering unit tests, secret scanning, and SAST.

---

## Pipeline Stages

### 1. Unit Tests
Runs `jest` to verify the API responds correctly. Fails the build if any test fails.

### 2. Secret Scanning — Gitleaks
Scans the full git history for accidentally committed secrets (API keys, passwords, tokens).  
Uses `fetch-depth: 0` so old commits aren't missed.  
**Build fails** if any secret is detected.

### 3. SAST — Semgrep
Runs static analysis against the OWASP Top 10 ruleset.  
**Build fails** if any high-severity finding is found.

---

## Branch Protection

`main` is protected — all three pipeline jobs must pass before a PR can be merged.  
Set up under **Settings → Branches → Branch protection rules → Require status checks**.

---

## Run Locally

```bash
npm install
npm start   # http://localhost:3000
npm test
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/users` | List users |
