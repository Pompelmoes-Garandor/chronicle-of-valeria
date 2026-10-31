# Source for the Chronicle of Valeria

The site in the repo root is built from this folder. Edit the files here, not `index.html`, or the next build overwrites your change.

- `chronicle.html`: the whole app (map, recap, lore, character sheets) in one file. All lore lives here.
- `build-site.py`: wraps `chronicle.html` into the site (`index.html`, manifest, `version.json`, icons, README).
- `render-assets.js`: renders `assets/og.jpg` and `assets/icon-512.png` from a built site (needs Playwright and a local copy of Three.js).
- `design-spec.md`: the design rules for the app.

Outside dependencies at runtime: Three.js 0.160.0 from jsDelivr and Google Fonts. Nothing else, no npm install for the site itself.

## Rebuild the site

From the repo root, with Python 3 and Pillow:

```
python3 source/build-site.py source/chronicle.html . --sealed --base https://garandor-cyber.github.io/chronicle-of-valeria/ --assets source/assets
```

`--sealed` is what the live site uses today. Drop it once the crew has opened the black box at the table. `--open` sets the remote unlock in `version.json`.

The session number comes from `const AS_OF` in `chronicle.html`. Change it there when you add a session.

## Working together

Make changes on a branch and open a pull request, so Sam sees them before they go live. Pages publishes whatever is on `main`.
