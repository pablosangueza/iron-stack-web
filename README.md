# IronStack Tactical Software Solutions (Astro + Tailwind)

Static marketing website for **IronStack Tactical Software Solutions**, built with Astro, TypeScript, and Tailwind CSS, and configured for GitHub Pages deployment via GitHub Actions.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS
- Node 20

## Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build production output:
   ```bash
   npm run build
   ```
4. Preview build:
   ```bash
   npm run preview
   ```

## GitHub Pages Configuration

Update placeholders in `astro.config.mjs`:

- `site: "https://<GITHUB_USER>.github.io"`
- `base: "/<REPO_NAME>/"`

These values control canonical URLs and routing when hosted under a GitHub Pages project site.

## Deployment Workflow

GitHub Actions workflow is defined at `.github/workflows/deploy.yml` and will:

- Run on pushes to `main`
- Use Node 20
- Run `npm ci`
- Run `npm run build`
- Upload `dist/`
- Deploy with official GitHub Pages actions

## Site Pages

- `/` Home
- `/capabilities`
- `/solutions`
- `/about`
- `/contact`

## Notes

- Contact form is static UI only and includes TODO comments for future backend integration.
- SEO defaults (meta + OG), sitemap generation, and `robots.txt` are included.
