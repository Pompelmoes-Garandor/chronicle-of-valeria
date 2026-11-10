# Sculpted minis

A crew mini can be a small 3D figure sculpted from a painting of the character, instead of the figure drawn in code. One file per character: `source/minis/<id>.glb` (`stig.glb`, `katy.glb`, `saphira.glb`). `build-site.py` copies every `.glb` here into the site's `minis/` folder, so the root `minis/` is generated: never edit it by hand.

The mini drawn in code stays. It stands in until the file has loaded, and for good when the file is missing, broken or the device can't draw it. A sculpted mini is used in fights and interludes on the 3D table, on Hans's bench in the workshop and as the portrait on the sheet.

## Adding one

1. Put the slimmed file in this folder as `<id>.glb`.
2. Add a line to `MINI3D` in `chronicle.html`: `stig:{src:"minis/stig.glb",h:.84,ry:0,rim:"#8fc8ff"}`.
   - `h`: height from soles to crown, in squares. The code-drawn crew stand about 0.7 (Katy) to 0.8 (Stig) tall.
   - `ry`: a turn about the upright axis, in radians, so the figure faces forward (towards +Z). Sculpts often come out turned a little.
   - `rim`: the colour of its edge light, usually the character's colour.
   - `sink` (optional): when the sculpt came with its own little base, the share of the model's height that is base, for example `.05`. That part goes down into the plinth, so the mini doesn't stand on a base on a base.
   - `tone` (optional, `.85` if left out): how bright the picture is painted on. A painting carries its own light, so at full brightness a sculpt looks pale next to the minis drawn in code. The page also darkens it a little toward the feet, as it does for them.
   - `rimK` (optional, `.45` if left out): strength of the edge light. A sculpt's surface is bumpy, so a strong edge light lies over all of it like a haze.
3. Rebuild and look at it: `?mini` opens the workshop, the character sheet shows the portrait, `?play` starts a fight.

The page centres the figure, puts its feet on the plinth and scales it to `h` by itself, so the model's own size and position don't matter.

## What the file must look like

The page reads the GLB itself, without a loader library, so the file has to be plain:

- one mesh with one primitive (triangles), y up
- positions, normals and one set of texture coordinates, float or quantized (`KHR_mesh_quantization`)
- one base colour picture embedded in the file, PNG, JPEG or WebP (`EXT_texture_webp`); `KHR_texture_transform` on it is fine
- no skin, no animation, no Draco or Meshopt compression, no second material
- aim for 15,000 triangles or fewer and a 1024 px WebP picture: about 300 to 600 KB per mini. Players load these on phones.

`slim.mjs` in this folder turns whatever the sculptor gives into that shape. How to run it is at the top of the file.

## How Stig was made (all free tools)

1. **Paint the reference.** One full figure, head to feet, standing straight, arms a little away from the body, seen from the front, on a plain light background with nothing else in the picture. Painted with FLUX.1 [schnell] in Draw Things on Sam's Mac, in the same look as the other paintings. Make two or three seeds and pick: the model likes to add signatures, extra people and elf ears.
2. **Sculpt.** TRELLIS (image to 3D, MIT licence) on the free Hugging Face Space `trellis-community/TRELLIS`: drop the picture in, generate, extract the GLB (mesh simplify 0.90 to 0.95, texture 1024 or 2048). One sculpt uses about two minutes of the free daily GPU time.
3. **Slim.** `node slim.mjs raw.glb stig.glb`.
4. **Look.** Front, side and back on the bench, next to the painting. The front is what TRELLIS saw; the back is its guess, so check it.

Don't use Hunyuan3D for this: its licence excludes the EU.

The repo is public. A reference painting and a mini show only what the players already know about a character, never unrevealed lore.
