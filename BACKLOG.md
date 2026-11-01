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
- [ ] **Section headings show through behind the character picker** · cosmetic · Characters, phone and desktop · Scroll down a sheet: the heading of the section under the Katy · Saphira · Hans · Stig row stays faintly visible through it.
- [ ] **Map labels can sit under the header on phones** · cosmetic · Globe, phone · Open a place in the top part of the map (Fire Vault, Earth Vault): the camera flies there and its label can end up behind the title plate.

## Now

Top of the list is what to work on next.

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
- **Making the repo private:** GitHub Pages would stop on the free plan, and the table wants the site open to everyone with the link.

## Done

Newest first, with the PR that shipped it.

- [x] **Spider button: an assassin drops from the ceiling and slashes the screen** · New · Niels · PR #16
- [x] **Tags revised to a short fixed set (Sam and Niels to keep to it)** · Changed · Niels · PR #15
- [x] **Fraas-Den and Myratma, Stig's homeland; Grisshaven a harbour on the coast** · Lore · Niels · PR #11
- [x] **Grisshaven: a small rumoured continent with the Lighthouse tavern** · Lore · Niels · PR #10
- [x] **Character sheets as a classic D&D stat block** · Changed · Niels · PR #7
- [x] **Sheets button renamed to Characters** · Changed · Niels · PR #6
- [x] **Edit a place's tags from the Places list** · New · Niels · PR #5
- [x] **Places tab: searchable gazetteer with types and tags** · New · Niels · PR #4
