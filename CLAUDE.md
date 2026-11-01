# Working on the Chronicle of Valeria

Read this first. It is how Sam and Niels (and each of their Claudes) work on this repo together without overwriting each other.

## Start every session with the backlog

`BACKLOG.md` is the leading list of features, changes and fixes. At the start of each session:

1. Read `BACKLOG.md` (and glance at open PRs and issues) before doing anything else.
2. Open with one question built on it: name the top one to three open items under **Now**, say which needs Sam, and ask which to pick up today. If the person already came with a task, do that, and say where it sits in the backlog (or offer to add it).
3. When a PR ships an item, move it to **Done** with the PR number in the same PR. New requests that are not done today go into the backlog, in the section Sam or Niels chooses.

## What this repo is

- A static GitHub Pages site: the campaign map and recap for Sam's D&D table. Pages publishes the repo root of `main`.
- The repo is public. Players open the live site, so everything here is a spoiler risk.
- People: **Sam** (GitHub `garandor-cyber`, the DM) and **Niels** (GitHub `Pompelmoes`) run the site together as equals. Either of them can review, merge and publish.

## The one rule: edit the source, never the build

- All app code and lore live in `source/chronicle.html`. That is the only file you edit to change the app.
- `index.html`, `manifest.webmanifest`, `version.json`, `README.md` and the icon PNGs in the root are **generated** by `source/build-site.py`. Never hand-edit them. A hand edit is lost on the next build.
- `CHANGELOG.md` holds the patch notes. It is hand-written, not generated.
- `BACKLOG.md` holds what is still to do. It is hand-written, not generated.
- After editing the source, rebuild so the root matches (see "Build" below) and commit the source and the rebuilt files together.

## Workflow

1. Start from the latest `main`: `git fetch origin main && git checkout -b <name>/<short-topic> origin/main` (for example `niels/hp-tracker-fix`).
2. Make one focused change. Unrelated changes go in separate branches.
3. Rebuild, then check the page (see "Check").
4. Add a line to `CHANGELOG.md` under **Unreleased** (tag **New**, **Changed**, **Fixed** or **Lore**, plus your name). Write it for the players, not in code terms.
5. Open a pull request to `main`. Fill in the template. Never push to `main` directly, never force-push `main`, Sam or Niels merges. Ask the other to review when the change is big or touches lore; for small fixes either may merge their own PR.
6. If `main` moved while your PR was open, rebase on it and rebuild. If you conflict in a generated file, take `main`'s version and rebuild, never merge by hand.

Before starting something larger than a small fix, open a GitHub issue first (or check open issues and PRs) so two people don't build the same thing.

## Build

From the repo root, with Python 3 and Pillow (`pip install pillow`):

```
python3 source/build-site.py source/chronicle.html . --sealed --base https://pompelmoes-garandor.github.io/chronicle-of-valeria/ --assets source/assets
```

- `--sealed`: the link preview says the black box is sealed. The live site uses it today. Sam or Niels decides when to drop it.
- `--open`: writes the remote unlock into `version.json`, which opens the seal on every player's device. **Only Sam or Niels does this, on purpose, at the table.** A Claude never adds it on its own.
- The session number comes from `const AS_OF = …, NEXT = …, SKEY = …` in `chronicle.html`. Bumping it tells every open copy a new recap is out, so only bump it as part of a session update Sam or Niels asked for.

Without `--assets`, the icons are not regenerated. That is fine for code-only changes. Only regenerate `og.jpg` and icons (`source/render-assets.js`, needs Playwright and a local Three.js) when the look of Hans or the preview should change.

## Check

- Open the built `index.html` through a local server (`python3 -m http.server` in the root, then http://localhost:8000/) on a phone-sized and a desktop viewport.
- No console errors. The map renders, the dock works, the sheets open.
- Follow `source/design-spec.md` for anything visual (colours, type roles, layout).
- Dependencies: Three.js 0.160.0 from jsDelivr and Google Fonts only. Don't add libraries, a bundler or npm without Sam and Niels agreeing first. Keep it one self-contained HTML file.

## Lore and secrets

- Lore (places, the recap, the Chronicle, character sheets) comes from the table. Sam is the DM, so a Claude doesn't invent new canon on its own. If something is missing or unclear, ask in the PR or an issue and mark it as a question. Fixing typos and obvious contradictions is fine; say so in the PR.
- Never write future plot, unrevealed twists or DM notes into this repo. It is public and players read it.
- Never commit unlock words, passphrases, keys or tokens, in code, comments, commit messages or PR text. If you come across one, don't repeat it; tell Sam or Niels.
- Don't add trackers, analytics or anything that sends player data off the device. Player state stays in `localStorage`.

## Pull request description

Say what changed and why, how you checked it (viewports, console), and any lore questions. Keep PRs small enough to review on a phone.
