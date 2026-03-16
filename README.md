# Nature Seychelles ARM App - Cousin Island

GitHub Pages hosted download page and PWA for the Cousin Island ARM (Adaptive Resource Management) field work app.

## Structure

- `index.html` — Redirects to download page
- `download-admin.html` — Password-protected download page for Android APK, iOS IPA, and Desktop PWA
- `app/` — PWA build output (deployed via `build_pwa.sh` in the cousin-island-field-work2 repo)

## Deployment

The PWA is built and deployed from the main project:

```bash
cd ~/Projects/cousin-island-field-work2
./build_pwa.sh
```

This builds the Angular app with the GitHub Pages base-href and copies it to the `app/` folder here.

## Setup

1. Create this repo on GitHub: `jessicanasica/nature-seychelles-arm-app`
2. Enable GitHub Pages (Settings → Pages → Source: main branch)
3. The download page will be available at: `https://jessicanasica.github.io/nature-seychelles-arm-app/`
4. The PWA will be available at: `https://jessicanasica.github.io/nature-seychelles-arm-app/app/`
