# Chronicle of Valeria: design spec

Screenshots: `design-phone-*.png`, `design-desk-*.png`, `design-hans-face.png` in the same folder. (Google Fonts were blocked in headless, so the type you see in them is the fallback. The layout findings still hold.)

## 1. Verdict: the 5 biggest problems

1. **On the phone the recap card buries the map.** Card plus dock fill the bottom 45% (y 490 to 790 of 844). The camera still aims at screen centre, so the stop being narrated sits right at the card's top edge. The first stop is a wall of uppercase teal mono with 6 log lines, so the first thing a player reads is a terminal dump.
2. **The header is a 3-line stack with no backing.** On the phone the H1 wraps to 2 lines, the eyebrow wraps to 2 more, and the % line comes after that, about 100px of text sitting straight on the scene. In Table mode it lands on bright parchment and "CHART DECODED 3.6%", the one HUD number, can't be read.
3. **Map labels collide and get clipped.** Valarius and Gerda's inn overlap ("Valar●us"), labels clip at the screen edge ("Crash si", "Earth"), and the thick brass orrery ring cuts across the globe and the header on the phone. The serif labels have only a text shadow to separate them from the parchment.
4. **The sheets are generic dark slabs.** They are a flat #171b25 panel with a dated inset double border, no grab handle and no snap points. On desktop a 2-paragraph place card stretches to 640px tall, so 60% of it is empty. The Chronicle is a run of italic paragraphs with nothing to scan by.
5. **Table mode and the dock feel low-effort.** On desktop Table looks almost the same as Globe. On the phone it zooms in until the pins run into the header. The dock is plain 12–13px text tabs about 34px tall (below the 44px touch target), still shows Party, and has no icons.

## 2. Direction

**"A brass instrument reading an old map."** The world stays parchment and ink. Everything around it is one Valerian instrument: lacquered black housings with brass hairlines and corner brackets, and teal phosphor readouts that are Hans's view of the decoded data. Teal is used only for machine-voice text and decoded data, and brass only for physical frames. Mono type means the machine is speaking, serif type means the world is. No glass blur, no glows except on lenses, and no gradients except metal.

```css
--void:#0a0c10; --void-2:#11141a; --housing:#14171d; --housing-2:#1b1f27;
--hairline:#c9a35c40; --brass:#c9a35c; --brass-hi:#ecd08f; --brass-lo:#6e5428;
--parch:#ead9b4; --parch-dim:#b3a37f; --ink:#2b1f12; --wax:#b8402a;
--steward:#8fd3c8; --steward-lo:#8fd3c833; --ember:#e8743b; --mist:#8d97a5;
```

Type roles:
- **Display**: IM Fell English SC, for the title, place names and pins.
- **Body**: Alegreya, with Hans's narration in italic.
- **Label**: Alegreya Sans SC, for buttons, dock and eyebrows.
- **Mono**: IBM Plex Mono, only for HUD readouts, the % figure, session codes and Steward/box text.

## 3. Hans's face (`hans-face.html`)

The face is a front-on brass construct head inside a 64-unit circular **bezel**.

- **Head:** a faceted cranium plate (chamfered octagon) with a vertical crest seam and a horizontal brow seam, plus angled cheek-plate seams. It has 8 rivets, each with a highlight catching the light from the top left.
- **Visor:** one recessed black visor slit holds **two teal lens eyes** (#8fd3c8) with soft glow. A teal scan band sweeps across the visor (2.8s), and the eye-light breathes (3.2s).
- **Mouth:** a dark grille with 5 bronze bars. In `.is-speaking` the bars become a staggered voice waveform.
- **Collar:** a small black box with a teal LED that **beeps every 2s**, which is the box inside him.
- **Bezel:** a dark socket and a brass hairline ring with 8 ticks that turn slowly. A **teal arc shows the decode %** (`--decoded`). `.is-decoding` spins the ticks faster.
- **`.is-steward`:** Hans's eyes dim to 18% and a teal trace runs through the visor, so the box is speaking *through* him. Use this as the narrator mark for the Steward stops instead of the generic ring.
- **Reduced motion:** with `prefers-reduced-motion` all animation stops and the static states stay readable.
- **Usage:** `hansFace({size:44, decoded:.036})` in the header and `hansFace({size:32, state:"is-speaking"})` in the caption. The helper gives each copy unique SVG ids.

## 4. Layout

**HUD plate (top left).**
- Position: `top: safe-top + 10px`, `left: 12px`.
- Box: height 56px, padding 6px 14px 6px 6px, radius 14px, `--housing` at 92% opacity, 1px `--hairline`, 8px brass corner brackets.
- Contents: avatar 44px, gap 10px, then a column:
  - Title: "The Chronicle of Valeria", 18px display on one line (`white-space:nowrap`).
  - Readout: "S09 · DECODED 3.6%" in mono 11px `--steward`, with a 2px × 96px decode bar under it.
- **Hide on ≤700px:** the "DECODED FROM THE BLACK BOX · AS OF SESSION 9" line (move it into the Chronicle intro).
- Desktop: avatar 52px, title 26px, the eyebrow line is shown, plate height 72px, `top/left: 20px`.

**Globe/Table toggle.**
- Top right, centred vertically on the HUD plate.
- Phone: two 40×40 icon buttons (globe, unrolled scroll) with text labels visually hidden.
- Desktop: icon plus label.
- Same housing as the HUD plate, and the thumb slides between the two.

**Dock.**
- Phone: `left/right: 12px`, `bottom: safe-bottom + 10px`, height 60px, radius 16px, housing style. Items share the width equally (`flex:1`), each a 20px line icon over an 11px label. Minimum target is 44×52.
- Desktop: auto width, centred, items 88px.
- Items:
  - **Recap** (with an ember dot until it has been watched).
  - **Chronicle**.
  - **Missed something?**, labelled "Missed?" on ≤430px, with a quill+ icon.
  - **DM**, ember, owner only.
- The active item gets a 2px brass bar on top that slides between items.

**Sheet.**
- **Phone (≤700px):** a bottom sheet with `left/right: 8px` and its bottom 8px above the dock top. Top radius 18px, bottom radius 12px.
  - Grab handle 36×4px, 8px from the top.
  - Two snap points: **46vh** (default for place cards) and **86vh** (default for the Chronicle, or reached by dragging up).
  - Swipe down past 25% to close.
  - Head: padding 16px 20px 8px, title 22px.
- **Desktop:** `right: 20px`, `top: 104px`, width 400px, `height: auto`, `max-height: calc(100vh - 104px - 104px)`, so it hugs its content.
- Both: replace `::before` (the double border) with 4 corner brackets.
- Place card header order: eyebrow in mono (`HANS · S06–09`), then name, then a state chip.

**Recap card.**
- **Phone:** above the dock, `left/right: 8px`, `max-height: 36vh`.
  - Header row: 32px avatar, eyebrow in mono 10px ("S09 · 3/8"), place name 20px.
  - Body: 16px/1.5 italic, clamped to 5 lines with internal scroll.
  - The progress shows as a 2px segmented bar along the card's **top edge**.
  - Controls: "Skip" as a text link on the left, **Next** as a 44px brass circle with an arrow on the right. Tapping the body also advances.
  - **Camera:** frame each stop at 30% from the top (`camera.setViewOffset` shifted by `+0.18·h`).
  - Shorten the opening box stop to 3 lines: `SIGNAL: BEEP.` / `RECORD: PARTIAL` / `REPLAYING S09`.
- **Desktop:** bottom left, `left: 24px`, `bottom: 104px`, width 440px, so the globe stays clear.

## 5. Motion

1. **Decode scramble.** Applies to the place name in the caption and the sheet `h2`. Characters cycle through `░▒▚▞01ᚠᚦ` and resolve left to right at 18ms per character, 450ms at most. It happens once per open, never on re-render.
2. **Sheet.**
   - Phone: `translateY(100%)→0`, 320ms `cubic-bezier(.2,.8,.2,1)`.
   - Desktop: `translateX(16px)` and opacity 0→1, 240ms.
   - Close: 180ms ease-in.
   - Children stagger 30ms each (opacity, 4px rise).
3. **Recap stop change.** The text cross-fades (out 160ms, in 240ms) while the camera flies. Hans's avatar is `.is-speaking` for about 2.5s after each stop appears. Steward stops type out in mono at 12ms per character, and a tap completes the text.
4. **Pins.**
   - Hover: the seal scales to 1.15 (140ms ease-out) and the label gets a `--housing` plate that fades in.
   - Press: scale .92.
   - Selected: four brass corner brackets snap in (180ms) and one teal ring ripple plays (700ms).
5. **Decode counter.** On load, count the % from the old value to the new one over 1.2s easeOutCubic, with the avatar `.is-decoding` and the bezel arc filling.
6. **Fog reveal.** Newly decoded regions get a teal edge line that sweeps outward once (900ms) as `reveal.goal` animates, using a shader uniform for the band width.
7. **Dock.** The active bar slides between items (220ms `cubic-bezier(.3,.7,.2,1)`), and the Recap dot pulses at 1.6s until the recap has been seen.
8. **Projection toggle.** The thumb slides (200ms), and a mono toast "PROJECTION · FLAT" or "PROJECTION · SPHERE" shows for 1.2s under the HUD.

With `prefers-reduced-motion: reduce`, items 1, 3 (typing), 5 and 6 jump straight to their end state, and transitions drop to 0.01ms.

## 6. Change list (about 1 hour)

**P1**
- `nav.dock`: delete `[data-tab=party]` and its handler branch. Rename the Journal button to "Missed something?" (with a `.short` span "Missed?" for ≤430px). Make the buttons `flex:1; min-height:52px; flex-direction:column; gap:4px`, add inline SVG icons, and stretch the dock with `left/right:12px` on phone.
- `header.top .brand`: wrap it in the HUD plate (styles above), insert `hansFace({size:44})` before the h1, use `h1{font-size:18px;white-space:nowrap}`, and `#asof{display:none}` on ≤700px. Merge `#restore` into one mono line plus a bar, and set the `--decoded` variable from the `pctEl` update.
- `#caption`: phone `max-height:36vh`, `.mark` → `hansFace({size:32,state})` with `is-speaking`/`is-steward`, `.progress` moved to the top edge, Next as a round button. On desktop, anchor it bottom left.
- Camera recap framing: offset the target so the stop sits at 30% from the top on the phone.
- `aside#sheet` (phone): add a grab handle, top radius 18, two heights (46vh/86vh via a class), and a slide-up transition. Desktop: `height:auto` (drop `bottom`, use `max-height`).

**P2**
- Shorten the boot/box caption text to 3 lines.
- `.pin .lbl`: add a 2px 6px `--housing`/85% label plate with radius 3. Hide `.minor` labels at globe zoom-out, and nudge the Gerda's inn pin so it does not overlap Valarius.
- `.seg`: swap to icon buttons on phone, give it the same housing as the HUD plate, and add the sliding thumb.
- Brass rings: on ≤700px set ring opacity to 0.35 and line width to half.
- Replace the double borders with corner brackets (`.sheet-head`, `#caption`, `.dock`) using four `linear-gradient` background corners.
- Decode scramble on `#sheet-title` and `#caption .place`.

**P3**
- Pin hover and selected brackets, fog-reveal teal sweep, % count-up, and the projection toast.
- Make Table mode clearer: a stronger tilt (55°), hide the rings, and on the phone fit the decoded bounds to the space between the HUD and the dock.
- Chronicle list: give each session row a mono "S04" code in teal, the title in display type, and the italic summary clamped to 2 lines with tap to expand.
