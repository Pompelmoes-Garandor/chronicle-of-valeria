#!/usr/bin/env python3
"""Bake the high-res world: relief carved by rain, and the rivers that drain it.

    python3 source/world/make-world.py            (from the repo root; needs Node + Playwright, a C compiler, numpy and Pillow)

1. bake-heights.js renders the land's height and relief from the shaders in chronicle.html (so the coasts match the page).
2. erode.c lets rain wear valleys into the relief and finds the rivers.
3. This writes relief-8k.webp (computers) and relief-4k.webp (phones, small GPUs) next to it, lossless RGB:
   R+G = relief (same 16-bit packing as the page's live relief bake), B = rivers (128 = on a river's edge, below = inside it).
build-site.py copies them into the site's world/ folder. Run it again only when the shape of the world (HEIGHT) or the
relief formula (RELIEF_BAKE) changes. The page falls back to its live bake when the files are missing.
"""
import os, subprocess, sys, tempfile
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "chronicle.html")
W, ITER, K, DEPTH, RAD = 8192, 12, 0.3, 0.6, 3.0

def run(*a):
    print("+", " ".join(a)); subprocess.run(a, check=True)

with tempfile.TemporaryDirectory() as tmp:
    hf, ef, exe = os.path.join(tmp, "h.f32"), os.path.join(tmp, "e.f32"), os.path.join(tmp, "erode")
    run("node", os.path.join(HERE, "bake-heights.js"), SRC, str(W), hf)
    run("cc", "-O2", "-o", exe, os.path.join(HERE, "erode.c"), "-lm")
    run(exe, hf, str(W), str(ITER), ef, str(K * 4096 / W), str(DEPTH))   # K is set for 4096 wide; finer cells cut faster
    H = W // 2
    e = np.fromfile(ef, dtype=np.float32).reshape(H, W, 4)
    h = np.fromfile(hf, dtype=np.float32).reshape(H, W, 2)[..., 0]

def pack(e, h, w):
    f = W // w
    z = e[..., 0].reshape(H // f, f, w, f).mean(axis=(1, 3))
    land = h.reshape(H // f, f, w, f).max(axis=(1, 3)) > 0
    d = e[..., 2].reshape(H // f, f, w, f).min(axis=(1, 3)) / f          # river distance in this size's texels
    s = e[..., 3].reshape(H // f, f, w, f).max(axis=(1, 3))
    width = (0.35 + 1.4 * s) / f ** 0.5                                 # big rivers wider; the smaller set keeps them a little thinner
    v = np.clip(z / 1.6, 0, 1) * 255.0
    hi = np.floor(np.minimum(v, 254.999)); lo = np.round((v - hi) * 15.0) * 17.0   # 4 bits of fraction is plenty and packs small
    riv = np.where(land & (d < 50), np.clip(128 + (d - width) / RAD * 127, 0, 255), 255)
    img = np.dstack([hi, lo, riv]).astype(np.uint8)[::-1]             # image row 0 = north
    return Image.fromarray(img, "RGB")

for w, name in ((8192, "relief-8k.webp"), (4096, "relief-4k.webp")):
    out = os.path.join(HERE, name)
    pack(e, h, w).save(out, "WEBP", lossless=True, quality=100, method=6)
    print(f"wrote {name}: {os.path.getsize(out)/1e6:.1f} MB")
