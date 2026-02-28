# Backend Portfolio (Astro)

This is a single-page backend engineer portfolio built with Astro.

## 1. Prerequisites

- Node.js 20 or newer
- npm (comes with Node.js)
- GitHub repository for deployment

Check versions:

```bash
node -v
npm -v
```

## 2. Install Dependencies

From project root:

```bash
npm install
```

## 3. Run Locally (Development)

```bash
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:4321`).

## 4. Build for Production

```bash
npm run build
```

Preview production build locall:y

```bash
npm run preview
```

## 5. Project Structure

- `src/pages/index.astro`: Main portfolio page
- `src/data/profile.ts`: All editable profile/content data
- `public/resume.pdf`: Downloadable resume file
- `.github/workflows/deploy.yml`: GitHub Pages deploy workflow
- `astro.config.mjs`: `site` and `base` settings for Pages

## 6. Update Your Content

Edit:

- `src/data/profile.ts`

Main fields:

- `name`, `title`, `intro`
- `email`, `location`, `github`, `linkedin`
- `resumePath`
- `projects`
- `skillLogos`

## 7. Contact Form Setup (Formspree)

1. Create a form in Formspree.
2. Copy your endpoint (example: `https://formspree.io/f/abcxyzpq`).
3. Update `contactFormAction` in `src/data/profile.ts`.

## 8. Resume Setup

Replace:

- `public/resume.pdf`

Keep the same file name so the button keeps working.

## 9. GitHub Pages Configuration

### 9.1 Update Astro config

Open `astro.config.mjs` and set:

- `site`: `https://<your-username>.github.io`
- `base`:
  - `"/"` if repo is `<your-username>.github.io`
  - `"/<repo-name>"` for a project repo

Example for repo `portfolio`:

```js
export default defineConfig({
  site: "https://your-username.github.io",
  base: "/portfolio"
});
```

### 9.2 Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### 9.3 Enable Pages

In GitHub repo settings:

1. Go to `Settings -> Pages`
2. Set source to `GitHub Actions`

The workflow in `.github/workflows/deploy.yml` will deploy automatically on push to `main`.

## 10. Common Commands

```bash
npm run dev      # local development
npm run build    # production build
npm run preview  # preview production build
```

## 11. Troubleshooting

- `npm: command not found`:
  - Install Node.js from nodejs.org, then reopen terminal.
- Contact form not working:
  - Verify `contactFormAction` is a valid Formspree endpoint.
- Resume button downloads wrong file:
  - Ensure resume is exactly at `public/resume.pdf`.
- Broken links on GitHub Pages:
  - Check `base` in `astro.config.mjs`.
