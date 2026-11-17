# Personal app showcase

A static Astro site with an app catalogue, shared privacy policy, and FAQs. Plain CSS, self-hosted fonts, and no client-side framework.

## Run locally

Requires Node.js 22.23.4 or newer (Node 24 recommended).

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. Run `npm run build` for type/content checks and a production build; `npm run preview` serves that build.

## Update content

- `src/data/site.ts`: display name, headline, and introduction.
- `src/content/apps/*.md`: one file per app. The Markdown body is its brief description.
- `public/images/`: add your featured images here.
- `src/content/privacy.md`: replace the placeholder with your shared policy.
- `src/content/faq.md`: edit questions and answers.

The four sample apps are explicitly labeled. Replace or delete their files when adding your real apps.

### Add an app

Create `src/content/apps/my-app.md`:

```yaml
---
name: "My App"
order: 1
image: "images/my-app.webp"
imageAlt: "My App showing its main screen"
links:
  ios: "https://apps.apple.com/app/YOUR-APP-ID"
  android: "https://play.google.com/store/apps/details?id=YOUR.PACKAGE"
  iosBeta: "https://testflight.apple.com/join/YOUR-CODE"
  androidBeta: "https://play.google.com/apps/testing/YOUR.PACKAGE"
---

Write a brief description of your app here.
```

Only include links that actually exist; omit unavailable fields rather than leaving empty strings. Images are optional while drafting. Image paths are relative to `public/`; do not include `public/` in the path. Use approximately 4:3 images (e.g. 1200 × 900). Cards crop images to fill that ratio. Lower `order` values appear first.

Set `sample: true` only for demonstration entries. Real entries omit it.

## Publish to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. For a personal root site, name the repository `YOUR-USERNAME.github.io`. Another repository name produces a project site under that repository's path.
3. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Run the **Deploy to GitHub Pages** workflow, or push a change to `main`.

The workflow gets the URL and base path from GitHub Pages and supports both root and project sites. No username is hardcoded. For a custom domain, configure it in the repository's Pages settings.

For a local production build matching a project site's path, set `SITE_URL` and `BASE_PATH` before building. PowerShell example:

```powershell
$env:SITE_URL = 'https://YOUR-USERNAME.github.io'
$env:BASE_PATH = '/YOUR-REPOSITORY'
npm run build
npm run preview
```

Replace the owner name, sample apps, privacy placeholder, and sample FAQ answers before publishing. No repository has been initialized or published by this setup.


