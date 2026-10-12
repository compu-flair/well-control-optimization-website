# well-control-optimization-website

Static website, served by GitHub Pages from the root of the `main` branch.

```
index.html            home page (single-page site)
case-study.html       full Norne case study
assets/css/style.css  all styles (colour tokens at the top; light and dark mode)
assets/figures/       case-study charts
assets/favicon.svg
.nojekyll             tells GitHub Pages to serve the files as they are
```

All links are relative, so the site works both at
`https://compu-flair.github.io/well-control-optimization-website/` and on a custom domain.

## Placeholders to fill in

Search both HTML files for these and replace them:
`[Company]`, `[Name]`, `[Title]`, `[Background]`, `[Email]`, `[Phone]`, `[LinkedIn]`, `[City]`, `[Country]`, `[Year]`.

## Preview locally

```
python3 -m http.server 8000
```
then open http://localhost:8000.
