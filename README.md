# Little Learners Printables

A colorful, mobile-friendly static website for free printable learning resources.

## Preview locally

Because this is a static site (no build step), you can preview it in either way:

- Open `/home/runner/work/little-learners-printables/little-learners-printables/index.html` directly in your browser, or
- Serve the folder with a simple local server (example):

```bash
cd /home/runner/work/little-learners-printables/little-learners-printables
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

Deploy as a static site on any host (for example GitHub Pages, Netlify, or Cloudflare Pages) by publishing the repository root files:

- `index.html`
- `styles.css`
- `script.js`

## Add real printable PDF links later

Printable cards are defined in `/home/runner/work/little-learners-printables/little-learners-printables/script.js` inside `printableCatalog`.

For each card, replace `pdfUrl: ""` with a real file path or URL, for example:

```js
pdfUrl: "./printables/preschool/english-letter-sounds.pdf"
```

When `pdfUrl` is empty, the button intentionally shows a labeled sample placeholder action instead of pretending a real worksheet is available.
