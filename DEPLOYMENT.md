# NEXOVIRA AI Solution — Deployment Guide

This guide details two deployment paths:
1. **Containerized Production Deployment (Docker & Nginx)**
2. **Global Edge Deployment (Cloudflare Pages + Automated GitHub Actions CI/CD)**

---

## 1. Docker Deployment

The project includes an optimized multi-stage `Dockerfile` and a tuned `nginx.conf` designed specifically for Single Page Applications (SPA).

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed and running.

### Option A: Using Docker Compose (Recommended)
To build and start the container locally or on a VPS:
```bash
# Build and run in detached mode
docker compose up -d --build

# View logs
docker compose logs -f

# Stop the container
docker compose down
```
The website will be available at: **http://localhost:8080**

### Option B: Using Standard Docker Commands
```bash
# 1. Build the production image
docker build -t nexovira-ai-website .

# 2. Run container on port 8080
docker run -d -p 8080:80 --name nexovira-website nexovira-ai-website

# 3. View running container
docker ps

# 4. Stop container
docker stop nexovira-website && docker rm nexovira-website
```

### Key Features of this Docker Setup:
- **Multi-Stage Build**: Keeps the production image ultra-lightweight (less than ~30MB) using `nginx:alpine-slim`.
- **SPA Routing**: Configured with `try_files $uri $uri/ /index.html;` to ensure deep routes (`/contact`, `/services`, `/about-us`) never 404 on refresh.
- **Security Headers**: Includes `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, and `Referrer-Policy`.
- **Gzip Compression**: Compresses HTML, JS, CSS, JSON, and SVG assets on the fly.
- **Immutable Asset Caching**: 1-year cache control for hashed Vite static assets.

---

## 2. Cloudflare Pages Deployment & CI/CD

Cloudflare Pages provides global ultra-fast CDN edge hosting, free SSL, DDoS protection, and custom domain support.

### Files Prepared for Cloudflare:
- [`public/_redirects`](./public/_redirects): Ensures client-side SPA routes do not 404 on refresh.
- [`public/_headers`](./public/_headers): Applies edge security headers and asset caching rules.
- [`wrangler.jsonc`](./wrangler.jsonc): Cloudflare project configuration.
- [`.github/workflows/deploy-cloudflare.yml`](./.github/workflows/deploy-cloudflare.yml): Automated GitHub Actions CI/CD pipeline.

---

### Method A: Automated GitHub Actions CI/CD (Configured)

Whenever you push to `main` or `master`, GitHub Actions automatically lints, builds, and deploys your website to Cloudflare Pages.

#### Step 1: Get Cloudflare Credentials
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the right sidebar, copy your **Account ID**.
3. Go to **My Profile** -> **API Tokens** -> **Create Token**.
4. Use the **Cloudflare Pages** template (or create custom with `Account: Cloudflare Pages: Edit` permissions).
5. Copy the generated **API Token**.

#### Step 2: Add Secrets to Your GitHub Repository
1. Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**:
   - Name: `CLOUDFLARE_API_TOKEN`
     - Value: *(Your Cloudflare API Token)*
   - Name: `CLOUDFLARE_ACCOUNT_ID`
     - Value: *(Your Cloudflare Account ID)*
3. Save both secrets.

#### Step 3: Trigger Deployment
- Any commit pushed to `main` will automatically trigger the deployment workflow.
- You can also run it manually under the **Actions** tab by selecting **Deploy to Cloudflare Pages** -> **Run workflow**.

---

### Method B: Direct Cloudflare Pages Git Integration

If you prefer connecting your GitHub repository directly through Cloudflare's dashboard:

1. In Cloudflare Dashboard, go to **Compute (Workers & Pages)** -> **Create Application** -> **Pages** -> **Connect to Git**.
2. Select your repository `Nexovira-ai-website`.
3. Set the build parameters:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**:
     - `NODE_VERSION`: `22`
4. Click **Save and Deploy**.

---

### Useful Commands Reference
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start local Vite development server |
| `npm run build` | Compile optimized production build to `dist/` |
| `npm run lint` | Run TypeScript typechecking without emitting files |
| `npm run docker:build` | Build local Docker image |
| `npm run docker:run` | Run Docker container locally on port 8080 |
| `npm run deploy:cf` | Build and deploy directly to Cloudflare via Wrangler |
