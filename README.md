# [My portfolio](https://ferranjs.github.io/portfolio/) ⬅

Features:

<!-- - Complex starting and hover animations
- Only **800kB bundle size** including images
- **Responsive** design
- **SEO** friendly
- Optimized images using **Avif** and **WebP** formats
- Pre-commit Hooks with Husky & Lint-staged for a Prettier write -->

<!-- Perfect [Google PageSpeed Insights Score]() -->

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ferranJS/portfolio)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ferranJS/portfolio)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ferranJS/portfolio?devcontainer_path=.devcontainer/basics/devcontainer.json)

<p float="left">
  <a href="https://ferranjs.github.io/portfolio">
    <img src="https://github.com/ferranJS/portfolio/blob/main/public/landing-screenshot-2.jpg" width="197px" alt="desktop view of ferranjs landing page screenshot">
  </a>
  <a href="https://ferranjs.github.io/portfolio">
    <img src="https://github.com/ferranJS/portfolio/blob/main/public/landing-screenshot.jpg" width="627px" alt="mobile view of ferranjs landing page screenshot">
  </a>
</p>

This landing was made in a few days with [Tailwind](https://tailwindcss.com/) as an improvement for faster CSS coding and [Astro](https://astro.build/) for good performance (packs with [Vite](https://vitejs.dev/)) and comfortable web development.

## Setup roadmap

>     npm create astro@latest
>     npx astro add tailwind
>     npm i -D prettier prettier-plugin-astro prettier-plugin-tailwindcss husky lint-staged
>     npm run prepare (husky install)
>     npx husky add .husky/pre-commit "npx lint-staged --concurrent false"

- Set up Github Actions in settings and add _.github/workflows/_[_deploy.yml_ configuration](https://github.com/ferranJS/portfolio/blob/main/.github/workflows/deploy.yml) to the root of the project.

- Configure _astro.config.mjs_ following the [official docs](https://docs.astro.build/en/guides/deploy/github/) and add the base to all src in the project.
