# Backlog

The leading list for the Chronicle of Valeria. Every working day starts here: pick from **Now**, finish it, move it to **Done**.

Sam and Niels own this file together. A Claude may add, reorder and tick off items when one of them asks, and moves an item to **Done** when its PR is merged. Hand-written, never generated.

## How to read an item

`- [ ] **Title** · Type · owner · notes`

- **Type** matches the patch notes: New, Changed, Fixed or Lore.
- **Owner**: Sam, Niels or "either". Lore items are Sam's call (he is the DM).
- **Needs Sam**: the item touches lore or the house rules, so Sam agrees before it is built.
- Keep each item one PR big. Split anything larger.

## Known bugs

Things that are wrong on the live site today. Check this list before **Now**: a bug that breaks play at the table jumps the queue.

`- [ ] **What goes wrong** · severity · where (device, screen) · how to see it`

- **Severity**: **blocker** (the table can't use the site), **annoying** (works, but gets in the way), **cosmetic** (looks off).
- Anyone at the table can report a bug to Sam or Niels; whoever hears it adds it here. Fixing one is a **Fixed** line in the patch notes, and the bug moves to **Done**.

- [ ] **Saphira's Passive Perception doesn't add up** · cosmetic · Characters, Saphira · Her paper says Passive Perception 15, but her Perception skill is +4, which gives 14. The sheet shows the paper's 15. Lore question for Sam: which number is right?

## Now

Top of the list is what to work on next.

- [ ] **Real relief: mountains that stand up** · New · either · Sam said yes (2026-11-01). Lift the terrain from the baked height, a dense patch under the camera on phones and computers, and terrain shadows that move with the living sky. Step 2 of the graphics leap: https://claude.ai/artifact/Lg6JpjRdU6fBjsX9268jno
- [ ] **High-res world: an 8k eroded map** · New · either · Sam said yes (2026-11-01) to a folder of texture files next to the page (bends the one-file rule). Bake height, rivers and colour offline at 8k with erosion, plus a 4k set for phones and close-up detail textures. Step 3 of the graphics leap.
- [ ] **Sam reads the architecture doc for live online storage** · Changed · Sam · Ask this first when Sam starts his next session. Niels wrote a plan to move the site to Netlify, with shared lore in Netlify Blobs, table-only sign-in (email or Google), and players proposing changes that Sam approves as DM: https://claude.ai/artifact/GAzMi1qU52yxoCkHtLsWyW (Niels shares it with Sam; it only opens for people it's shared with). Ask Sam (1) whether he wants to read it now and (2) whether to make it available in GitHub, as an `ARCHITECTURE.md` in the repo root or as an issue. The doc's open questions need his answer before any building starts. Fleshes out **Live online storage** under Later.
- [ ] **Sam checks the place classifications** · Lore · Sam · Valarius and Orda as town or city, Valethorn as castle, the ravine as natural wonder, the Dead Valley and Summerwood as realms, the waystone as ancient tech. Questions are in PR #4.
- [ ] **Passive Perception for Katy and Hans** · Lore · Sam · Their papers don't list it, so the sheet shows 12 and 11 worked out from Wisdom (marked *). Put the real numbers under Senses.
- [ ] **Rename the "Character sheets" panel title to "Characters"** · Changed · either · Matches the dock button.
- [ ] **Trackers panel** · New · either · Needs Sam for the counters. Places explored per region (Hans's chart: 13 of 23), Sigils claimed 2/4, and a party strip with everyone's HP at a glance. Idea from Craft RPG's trackers.

## Next

- [ ] **People directory** · New · either · Needs Sam. A list of the people the crew has met (Gerda, Thorn, Pieter-Bas, Teenoog, Calysta...), next to Places. Each player keeps how they feel about them (−10 to +10) and a note, saved on their own device like sheet edits.
- [ ] **Get tag edits to everyone** · New · either · Start with a "Send to Sam" button that opens a GitHub issue or copies the edits for the group chat. Sam or Niels folds them into the places database.
- [ ] **Richer place records** · New · either · Needs Sam. Add region and controlling faction to the places database (Order of the Seal for Orda and the Crow's Nest), and a "Mentioned in" list on each place: sessions, people and places that refer to it.
- [ ] **Spell slots and resources as tappable dots** · New · either · On the character sheets: slots per level, sorcery points, Bardic Inspiration, plus an exhaustion counter. Saved on the device like HP.

## Later

- [ ] **Map beside the recap on desktop** · Changed · either · Put the recap text next to the globe instead of over it, as Craft does with its map.
- [ ] **Live online storage** · New · Sam and Niels · Needs Sam. Shared tags, notes and trackers for everyone at once through a hosted database (Firebase or Supabase), with sign-in limited to the table. Breaks two house rules (no new libraries, player data stays on the device), so only if both agree.

## Ideas parked

Not planned. Kept so nobody re-proposes them without a reason.

- **GM secrets in the site:** the repo is public, so players could read them.
- **Grid battle maps with tokens:** needs artwork for every scene.
- **Offline mode (service worker):** Sam chose to skip it (2026-11-01). It would add a second file to the one-file site and risks players seeing an old map.
- **Making the repo private:** GitHub Pages would stop on the free plan, and the table wants the site open to everyone with the link.

## Done

Newest first, with the PR that shipped it.

- [x] **Calmer map: one tools button bottom left, Hans only animates while he talks or decodes** · Changed · Sam · PR #29
- [x] **Section headings no longer show through behind the character picker** · Fixed · Sam · PR #29
- [x] **Map labels make room for each other and stay clear of the header, dock and cards** · Fixed · Sam · PR #29
- [x] **"Missed something?" has room in the dock on desktop** · Fixed · Sam · PR #29
- [x] **Sign in on the Netlify edition and share the table data (GitHub Pages unchanged)** · New · Niels · PR #14
- [x] **Netlify builds the site too, with deploy previews** · Changed · Niels · PR #13
- [x] **The Wind Vault's flying city casts a shadow that moves with the sun** · New · Sam · PR #26
- [x] **Hand-painted globe on computers** · Changed · Sam · PR #25
- [x] **Recap as chapters, and place cards that unfold** · Changed · Sam · PR #24
- [x] **Fly the route: camera follows a session's road** · New · Sam · PR #23
- [x] **Tap to roll from the sheet: 3D dice for skills, abilities, saves and attacks** · New · Sam · PR #22
- [x] **Living sky: day and night, town lamps, weather and lightning** · New · Sam · PR #22
- [x] **Sound of the world, and Hans reads aloud** · New · Sam · PR #21
- [x] **Fog that burns away, screen stays awake in Table mode, Postcard from Hans** · New · Sam · PR #21
- [x] **Replay the journey: rewind the chart session by session, route drawn live** · New · Sam · PR #19
- [x] **Spider button: an assassin drops from the ceiling and slashes the screen** · New · Niels · PR #16
- [x] **Tags revised to a short fixed set (Sam and Niels to keep to it)** · Changed · Niels · PR #15
- [x] **Fraas-Den and Myratma, Stig's homeland; Grisshaven a harbour on the coast** · Lore · Niels · PR #11
- [x] **Grisshaven: a small rumoured continent with the Lighthouse tavern** · Lore · Niels · PR #10
- [x] **Character sheets as a classic D&D stat block** · Changed · Niels · PR #7
- [x] **Sheets button renamed to Characters** · Changed · Niels · PR #6
- [x] **Edit a place's tags from the Places list** · New · Niels · PR #5
- [x] **Places tab: searchable gazetteer with types and tags** · New · Niels · PR #4
