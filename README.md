# Pengwei Zhang — Academic Homepage

Personal academic homepage for Pengwei Zhang, a Ph.D. student at the Institute
of Automation, Chinese Academy of Sciences (CASIA).

The site presents selected publications, research interests, academic
recognition, and a concise curriculum vitae.

## Website

[https://awilekong.github.io](https://awilekong.github.io)

## Research interests

- Robot Learning
- Contact-Rich Manipulation
- Force-Aware Imitation Learning
- Vision-Tactile Multimodal Learning
- Precision Assembly
- Embodied Intelligence

## Development

```bash
npm install
npm run dev
```

Run `GITHUB_ACTIONS=true npm run build:pages` to export the static site to `out/`.

GitHub Pages uses **Deploy from a branch**, with `gh-pages` and `/` as its
publishing source. To publish an update, copy the contents of `out/` into a
clean worktree of `gh-pages`, preserving its `.git` entry and `.nojekyll` file,
then commit and push that branch. GitHub's built-in Pages workflow deploys
these static files. Application source stays on `main`; a push to `main`
alone does not update the live site in this configuration.
