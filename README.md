# Arindam Portfolio

A responsive React portfolio built with Vite. It highlights web design and development capabilities across React, JavaScript, HTML5, CSS3, Tailwind CSS, WordPress, Wix, and e-commerce.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Publish with GitHub Pages

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`.

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository settings, open **Pages** and choose **GitHub Actions** as the build and deployment source.
3. The workflow will publish the site and show its address in the Actions run and Pages settings.

The Vite build uses relative asset paths, so it works for a repository-based Pages URL.

## Personalize before sharing

Update the name and copy in `src/App.jsx` and `index.html`, replace the sample photography with images you have permission to use, and set the recipient in the contact link in `src/App.jsx` to your email address. The contact link currently opens a new email draft without a recipient.
