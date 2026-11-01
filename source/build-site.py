#!/usr/bin/env python3
"""Build the free, no-Claude website for the Chronicle of Valeria (GitHub Pages).

    python3 build-site.py chronicle.html site --base https://USERNAME.github.io/chronicle-of-valeria/ --assets assets

chronicle.html is the Claude artifact source. It has no <html>/<head>/<body> because claude.ai wraps
it at publish time, so this adds a real document head, link-preview tags (WhatsApp, iMessage,
Discord), home-screen icons and a manifest. The images in --assets (og.jpg and the icon PNGs) are
rendered by render-assets.js. Run it again after every session update and push the folder.
"""
import argparse, html, json, os, re, shutil

ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("out")
ap.add_argument("--base", required=True, help="public URL of the site, ending in /")
ap.add_argument("--assets", help="folder with og.jpg and the icon PNGs")
ap.add_argument("--sealed", action="store_true", help="link preview says the black box is sealed (before the crew opens it at the table)")
ap.add_argument("--open", nargs="?", const=True, default=None, help="version.json tells every open copy to open the seal (the remote unlock); --open now skips the plate game")
ap.add_argument("--netlify", action="store_true", help="the Netlify edition: players can sign in, and the online mode runs on /api (netlify/functions)")
a = ap.parse_args()

base = a.base.rstrip("/") + "/"
src = open(a.src, encoding="utf-8").read()
as_of = re.search(r"const AS_OF = (\d+), NEXT = (\d+)", src).group(1)

cut = src.index('<div id="stage"')
head, body = src[:cut], src[cut:]
head = re.sub(r"<title>.*?</title>\s*", "", head, flags=re.S)
head = re.sub(r'<meta name="claude:[^>]*>\s*', "", head)

TITLE = "The Chronicle of Valeria"
DESC = f"Hans has decoded more of the black box. The map of Valeria and the story so far, up to session {as_of}."
if a.sealed:
    DESC = "The black box is sealed. Hans cannot open it alone. Bring your crew."
esc = lambda s: html.escape(s, quote=True)
OGT = "Sealed" if a.sealed else f"Session {as_of}"
img = f"{base}og.jpg?v=s{as_of}"

doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{TITLE}</title>
<meta name="description" content="{esc(DESC)}">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="theme-color" content="#0b0d12">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{TITLE}">
<meta property="og:title" content="{TITLE} · {OGT}">
<meta property="og:description" content="{esc(DESC)}">
<meta property="og:url" content="{base}">
<meta property="og:image" content="{img}">
<meta property="og:image:secure_url" content="{img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Hans, the android with blue headphones, beside the fog-covered globe of Valeria">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{TITLE} · {OGT}">
<meta name="twitter:description" content="{esc(DESC)}">
<meta name="twitter:image" content="{img}">
<link rel="icon" type="image/png" sizes="32x32" href="icon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="manifest" href="manifest.webmanifest">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Valeria">
{"<script>window.CHRON_NETLIFY=1</script>" if a.netlify else ""}
{head.strip()}
<style>html,body{{margin:0}}</style>
</head>
<body>
{body.strip()}
</body>
</html>
"""

os.makedirs(a.out, exist_ok=True)
with open(os.path.join(a.out, "index.html"), "w", encoding="utf-8") as f:
    f.write(doc)

manifest = {
    "name": TITLE, "short_name": "Valeria", "id": "./", "start_url": "./", "scope": "./",
    "display": "standalone", "background_color": "#0b0d12", "theme_color": "#0b0d12",
    "description": DESC,
    "icons": [
        {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
}
with open(os.path.join(a.out, "manifest.webmanifest"), "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=1)
# A file every session can poll to notice a newer recap (see the update check in the app).
with open(os.path.join(a.out, "version.json"), "w", encoding="utf-8") as f:
    json.dump({"session": int(as_of), **({"open": a.open} if a.open else {})}, f)
open(os.path.join(a.out, ".nojekyll"), "w").close()
with open(os.path.join(a.out, "README.md"), "w", encoding="utf-8") as f:
    f.write(f"""# {TITLE}

The campaign map and recap for Sam's D&D table, decoded by Hans from the black box.
Open it here: {base}

Spoilers for our campaign, so please keep the link within the table.
The map is updated after each session.
""")
if a.assets:
    from PIL import Image
    shutil.copy(os.path.join(a.assets, "og.jpg"), os.path.join(a.out, "og.jpg"))
    icon = Image.open(os.path.join(a.assets, "icon-512.png")).convert("RGB")
    for n, px in [("icon-512.png", 512), ("icon-192.png", 192), ("apple-touch-icon.png", 180), ("icon-32.png", 32)]:
        icon.resize((px, px), Image.LANCZOS).save(os.path.join(a.out, n), optimize=True)
print("built", a.out, "session", as_of, "base", base)
