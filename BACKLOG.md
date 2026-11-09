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

- [ ] **Sam reads the architecture doc for live online storage** · Changed · Sam · Ask this first when Sam starts his next session. Niels wrote a plan to move the site to Netlify, with shared lore in Netlify Blobs, table-only sign-in (email or Google), and players proposing changes that Sam approves as DM: https://claude.ai/artifact/GAzMi1qU52yxoCkHtLsWyW (Niels shares it with Sam; it only opens for people it's shared with). Ask Sam (1) whether he wants to read it now and (2) whether to make it available in GitHub, as an `ARCHITECTURE.md` in the repo root or as an issue. The doc's open questions need his answer before any building starts. Fleshes out **Live online storage** under Later.
- [ ] **Sam checks the place classifications** · Lore · Sam · Valarius and Orda as town or city, Valethorn as castle, the ravine as natural wonder, the Dead Valley and Summerwood as realms, the waystone as ancient tech. Questions are in PR #4.
- [ ] **Passive Perception for Katy and Hans** · Lore · Sam · Their papers don't list it, so the sheet shows 12 and 11 worked out from Wisdom (marked *). Put the real numbers under Senses.

## Next

- [ ] **People directory** · New · either · Needs Sam. A list of the people the crew has met (Gerda, Thorn, Pieter-Bas, Teenoog, Calysta...), next to Places. Each player keeps how they feel about them (−10 to +10) and a note, saved on their own device like sheet edits.
- [ ] **Richer place records** · New · either · Needs Sam. Add region and controlling faction to the places database (Order of the Seal for Orda and the Crow's Nest), and a "Mentioned in" list on each place: sessions, people and places that refer to it.

## Later

- [ ] **More in-engine cinematics** · New · either · Needs Sam for lines. The cinematic director's plan ranks the next ones: a dip to black on every story-to-board change, Elara's voice through Lúmeneth, the night ambush opening, a fight-intro for every battle, chapter cards, Overclock. The system (`t3cine`) is in; each one is a small PR.
- [ ] **Play-test the interlude fights for balance** · Changed · either · The four fights are balanced on paper only. Watch Katy's candle (3 points), the sleeper's 20 HP in Stig's fight, and Turn Undead in the shared fight.
- [ ] **An interlude before every session** · New · Sam · Needs Sam. The session 10 set is the first; write the next set from the session script (a memory, a dream, a talk with a patron), same engine.

- [ ] **Map beside the recap on desktop** · Changed · either · Put the recap text next to the globe instead of over it, as Craft does with its map.
- [ ] **Live online storage** · New · Sam and Niels · Needs Sam. Shared tags, notes and trackers for everyone at once through a hosted database (Firebase or Supabase), with sign-in limited to the table. Breaks two house rules (no new libraries, player data stays on the device), so only if both agree.

## Ideas parked

Not planned. Kept so nobody re-proposes them without a reason.

- **GM secrets in the site:** the repo is public, so players could read them.
- **Offline mode (service worker):** Sam chose to skip it (2026-11-01). It would add a second file to the one-file site and risks players seeing an old map.
- **Making the repo private:** GitHub Pages would stop on the free plan, and the table wants the site open to everyone with the link.

## Done

Newest first, with the PR that shipped it.

- [x] **Town names win over the small seals around them (Valarius over Gerda's inn)** · Fixed · Sam · PR #73
- [x] **Trackers panel:** Hans's tally in the Chronicle (crew HP and resources, sigils 2 of 4, places explored). Per region waits for a region on each place · New · Sam · PR #72
- [x] **Fight rules from the whole-app pass: exhaustion on saves, Sneak Attack with disadvantage, crits on the downed, stable then hit, one concentration save per attack, Uncanny Dodge, Heroic reroll; flat-board switch froze an open question; minis' shine after the first fight** · Fixed · Sam · PR #74
- [x] **The open sea is one flat colour up close:** fog with shape, engraved sea, swell and wave marks · Fixed · Sam · PR #69
- [x] **Interludes keep your place through a reload or a locked phone (story passage, or back to the fight)** · Changed · Sam · PR #71
- [x] **Fights on phones: tap twice to move (first tap previews the path), End turn asks once when an action is left** · Changed · Sam · PR #70
- [x] **Spell slots and resources as tappable dots** (slots, pact slots, Bardic Inspiration, Channel Divinity, Eyes of the Grave, exhaustion, short rest) · New · Sam · PR #68
- [x] **Rename the "Character sheets" panel title to "Characters"** · Changed · either · PR #66
- [x] **Long action names are cut off in the phone quick bar** · Fixed · Sam · PR #66
- [x] **Rock and root pillars no longer hide the acting mini (cavern wall on phones, Saphira's root pillars): they open up like a window** · Fixed · Sam · PR #65
- [x] **End of an interlude in Hans's voice, with a WhatsApp button to send the log to the DM** · Changed · Sam · PR #56
- [x] **Interludes run straight through: who you are → Round the Fire → your own interlude** · Changed · Sam · PR #55
- [x] **The shared interlude becomes the prologue *Round the Fire* (no votes, fight or Echo; the vote version kept in source/interludes/drafts/)** · New · Sam · PR #53
- [x] **Each player sees only their own interlude (shared fire interlude put away)** · Changed · Sam · PR #52
- [x] **Play opens the interludes only (session 10 demo hidden, `?demo` brings it back); Echoes reworded in rulebook style** · Changed · Sam · PR #51
- [x] **Send to Sam by message on the GitHub copy (WhatsApp, mail), until Netlify publishes again** · New · Sam · PR #50
- [x] **Claude sessions can see the proposals waiting for Sam** (public `open-proposals.json` on the mirror branch) · Changed · Niels · PR #49
- [x] **Interludes play without sign-in too (GitHub Pages or signed out): nothing is sent to Sam then** · Changed · Sam · PR #48
- [x] **Interludes before the table finishes session 10: a solo piece per player plus a shared one, each with a small fight, an Echo and Send to Sam** · New · Sam · PR #47
- [x] **Real numbered dice, a slower and weightier fight pace, a phone camera that follows the action, cleaner fight controls, Blight Heart cinematics** · Changed · Sam · PR #47
- [x] **Hardcore graphics for the 3D battle table: lighting, materials, post effects, minis, spell effects, phone layout** · Changed · Sam · PR #46
- [x] **The flying city looks crude up close:** rebuilt as a lit, painted miniature · Fixed · Niels · PR #44
- [x] **Get tag edits to everyone:** players propose tags and notes, Sam accepts with one tap · New · Niels · PR #43
- [x] **Play session 10 on a 3D table: lit dioramas, painted minis, a camera you can turn and zoom** · New · Sam · PR #41
- [x] **Play session 10: scenes, grid battles and the monsters from the script** · New · Sam · PR #37
- [x] **Smooth first on computers: auto quality aims for 60 fps by softening the 3D map a little, and sharpens again** · Changed · Sam · PR #40
- [x] **Faster globe, part 2: static noise baked at load, weather per vertex** · Changed · Sam · PR #39
- [x] **Faster globe, part 1: skip shader work that is never shown** · Changed · Sam · PR #38
- [x] **Frame-rate readout (`?fps`) and a visual test script (`tests/visual/check.js`)** · New · Sam · PR #36
- [x] **High-res world: 8k relief carved by erosion, rivers that follow the valleys** · New · Sam · PR #34
- [x] **Real relief: mountains stand up, sunlit slopes and shadows, tilted close-ups** · New · Sam · PR #33
- [x] **Lit planet: atmosphere, golden hour, glow and tilt-shift** · New · Sam · PR #32
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
