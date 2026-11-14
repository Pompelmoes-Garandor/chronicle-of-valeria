# Two Tongues

**Player:** Saphira
**When (for Sam, not shown to players):** the same held breath in the cave as Stig's "The Eleven Paces" and Katy's "Four Notes". Saphira has her back to the wall, as always. A flake of black ash lands in the eye on her cloak. The eye blinks it out, black, and for the first time it speaks. Only in Draconic. The dagger at her hip answers in old Elvish, and that is the patron. Saphira is the only one in the cave who understands both, and they don't tell her the same thing. No table time passes. It works on its own for a player who skipped "What Stays", and it never undoes that interlude's ending.
**What it sets up:** the choice Saphira makes at the end (W3) is saved and sent to Sam, like the other interludes.
**Reading time:** about 25 minutes along one path, plus the fight.
**Echo:** one, set by the last choice. One use; expiry as Sam rules for all Echoes.
**Same rules as the other interludes:** the patron says nothing true about Saphira's past and never tries to charm her, and never shows her face. Nothing is said about who the patron is or where the eye came from; the eye and the patron clearly know each other and neither says how. No brothers, no Elaris, nothing about where Saphira grew up. Nobody gives the eye away for good: it is her Book of Shadows from level 6, as Sam ruled. None of the afternoon's words appear (the list is in the DM notes). Every future here is a *maybe*.
**New lore in here, all marked [SAM?]:** the eye's memories of the Crow's Nest (a sealed room, grey gloves), the eye having once seen the patron's face, and the eye's very old Draconic (the kind Old Valerian grew out of). Sam keeps, changes or cuts them before Claire sees this (SA11_ON).
**Rules:** Saphira is level 6 on the 2014 rules (Rogue 3 Assassin / Warlock 3 Hexblade, Pact of the Tome, Shadow Blade).

**For the build (the parser skips everything above the first rule):**

*Look.* {past}: what the eye remembers, seen from a little above and to the side (it sits on her shoulder): cold, grey-violet, edges vignetted like a lens. {future}: cold blue-white, ash in the air, glitching text. Untagged: the present, the cave, lamp and ash. {again}: the loop, the present played wrong (mirrored, the two tongues swapped).

*Figures.* Three voices:
- **The eye** (the eye in her cloak): lines written `@eye: "..."`, always in Draconic; the page shows them as Saphira hears them, translated, with the tongue named. Short words. It doesn't know how to be polite.
- **The patron**: lines written `@patron: "..."`, always in old Elvish, from the dark or from the dagger. Never seen.
- **Her shadow** (Saphira, older; one of her own eyes is the cloak's eye): lines written `@future: "..."`. Two voices at once when it matters, one Elvish, one Draconic. A heartbeat ahead of Saphira in everything. Never seen from the front before W2.

*Whispers.* `~text~` is the shadow's voice bleeding into the passage.

*Conditions.* A paragraph starting `?flicker>=3:`, `?dread>=3:` or `?seen P2c:` shows only when that holds.

*Blinks.* Instead of paces: the eye's blinks. Eleven, like a slow pulse, shown as a strip of lids. H1 is the first. Each of the seven visions (three past, S1, three futures) takes one. L1 runs them backwards. W1 is the last one. W2 the eye stays open. The endings say whether it closes.

*Meters.* `+dread` (0-5): how much ash is in the eye; more whispers, more ash, a third Glove in the fight. `+flicker` / `-flicker` (0-5, start at 2): how faint the shadow is. High, it lags and goes thin; low, it's ahead of her and solid.

*Sound.* Cue list:
- `eye-open`: a wet, small sound, very close, and the hush of a big room breathing in.
- `draconic`: a low, rough voice, more felt than heard, with a dry crackle under it, like a fire in a grate.
- `elvish`: a woman's voice a long way off, clear and cold, with a little echo, like a voice down a well.
- `dagger-hum`: the dagger humming in its sheath.
- `tapping`: tapping on stone through a wall, slow, patient, a pattern you almost recognise.
- `seal`: hot wax pressed, then a stamp, then quiet.
- `rift`: wind through a tear in the world, pressure in the ears.
- `paper-tear`: thick paper ripping, slowly.
- `cards`: cards dealt on a wooden table in a quiet room.
- `fire-crackle`: a campfire, close, people not talking.
- `heartbeat-two`, `heartbeat-one`, `silence`, `rewind`, `drip`: as in "The Eleven Paces".

*Hubs.* E0 offers three past visions and F0 three futures, any order, greyed once done; when all three are done, E0 goes on to S1 and F0 goes on to W1. Each vision ends with "Back".

*Fight @seal.* Win goes to W3, loss goes to W3x. Stat blocks below.

*Paintings.* (1) a tall narrow room in a white stone tower, a dark cloak hung on a hook, grey-gloved hands pressing a wax seal onto its collar, a slit window; (2) a torn sky over a grey plain, two women with blades over a fallen man, a long contract torn in half drifting in the wind; (3) the inside of a cloak's hood from close by, the lining covered in old angular script, an eye half open in the cloth; (4) a dark space, one lamp, a robed woman seen from behind, tattooed hands, her face turned away; (5) a sealed room again, but a silver-haired woman in grey gloves at the table, pressing wax; (6) a small table in a dark room, two chairs, cards laid out, one player only shadow; (7) a campfire at night, a crew of four older faces in the firelight, a silver-haired woman sitting a little apart, talking to her cloak; (8) a silver-haired woman's shadow standing up off a cave wall, one eye bright. No text, no real faces.

**Fight: The Seal.** Saphira alone, level 6 (2014 rules). A grey room that is the inside of the eye's oldest memory: smooth walls, a slit of white light high up, wax on the floor. Her shadow stands between her and the light. It isn't trying to kill her. It's trying to *seal the eye shut*, so it can't see what comes next. Grey gloves come up out of the wax to help it.
- *Her shadow* (the one who kept it). Medium undead (a haunting in Saphira's shape). AC 14, HP 32, speed 30. Str 10 Dex 16 Con 12 Int 14 Wis 12 Cha 16. Immune to Charmed (like her). Resists necrotic. Initiative +3. One Shade Cut a turn (two when the flicker is 1 or less). *Shade Cut:* +5 to hit, 1d6+3 cold. *A Heartbeat Ahead:* once per round, when Saphira hits it, it can halve the damage (it saw it coming). *Old Words:* once per fight, when first bloodied, it speaks in both tongues at once and every Glove moves up to its speed. *Flicker:* at flicker 4 or more, A Heartbeat Ahead doesn't work; at flicker 1 or less, Shade Cut is 2d6+3.
- *Grey Glove* (two; three at dread 3+). Small construct, an empty grey glove with a seal ring. AC 13, HP 9, speed 30 (hover). Initiative +2. *Press:* +4 to hit, 1d4+2 bludgeoning, and the eye takes a seal.
- *The eye:* while it has fewer than 3 seals, once per round it warns Saphira: the first attack against her each round has disadvantage. At 3 seals it's shut, and the warning stops until she spends an action to tear one seal off (it then opens again at 2).
- Her tools all apply (2014 rules): Sneak Attack 2d6, Cunning Action, Assassinate in the first round, Hexblade's Curse, Eldritch Blast with Agonizing, Shadow Blade, Shield, Hex, Misty Step. All foe damage is cold or bludgeoning.
- Shadow at 0 HP: win, go to W3. Saphira at 0 HP: no game over; the eye shuts and she is alone in the dark for a moment, go to W3x. Both lead to the same last choice. Balanced with the fight sim: a careful Saphira wins about 15 in 16 (11 in 12 at dread 3).

---

## H1. A flake

You're sitting with your back to the wall, as you always do. From here you can see the whole cave, both ways out and everyone's hands.

Katy is kneeling by her father. Stig is getting up off his stone with the towel. Thorn is watching the tunnel. Hans is on guard and hasn't moved.

Ash has been coming down through the lamplight all day, and you've stopped noticing it on your sleeves. One flake drops past your face and lands in the eye on your cloak, right on its wet surface.

{sound: eye-open}

The eye has never blinked fast before. It usually blinks slowly, when it bothers. Now it blinks twice, quick and hard. A black tear squeezes out of the corner and runs down the cloth.

Then a voice says one word, right inside your hood.

{sound: draconic}

@eye: "Hot."

That was Draconic, older than the kind you were taught, and rough as a cat's tongue. The eye has never spoken before.

→ Continue (go to H2)

## H2. Both

The ash stops and hangs in the lamplight.

Every pair of hands has stopped where it was. Katy's are halfway to her father's. Stig's are on the towel, and Hans's are at his sides, where he keeps them. Only you and the eye can still move.

{sound: dagger-hum}

The dagger at your hip starts to hum. You know that hum.

{sound: elvish}

@patron: "Don't listen to it."

That was Elvish, the old court kind with the long vowels, from the dagger or from the dark behind it.

@eye: "Don't listen to her."

Draconic again, from the hood. You're the only one in this cave who speaks both, and you have never wished you didn't until now.

→ Continue (go to H3)

## H3. Early

The lamp is on its flat stone, so your shadow is on the wall behind you. You turn your head to look at it, and it has already turned its head.

You lift your hand slowly. The shadow's hand goes up a heartbeat before yours, about the time it takes you to decide to move.

~Too slow.~

@eye: "I'll show you. Where I was. Before you. Hold still."

@patron: "It doesn't know where it was. Ask it what it ate."

@eye: "Hold still."

→ Hold still, and let it show you. (go to E0)

## E0. What it saw

The cave goes thin, like a stage curtain with a lamp behind it, and there are rooms on the other side.

The rooms are the eye's. You see each one from a little high and to the left, with dark rounded edges, and in every one you can feel your own shoulder under you.

Three are close enough to walk into.

@eye: "Pick."

@patron: "Pick carefully."

→ A white tower, and a hook. (go to P1a)
→ A torn sky, and paper. (go to P2a)
→ The day the curse came off. (go to P3a)

*Hub: then go to S1*

## P1a. The hook {past}

{sound: tapping}

A tall, narrow room of smooth white stone, cold enough to show your breath, with one slit window high up and the sea far below. You know that white. This is Orda, where the anti-magic sensors on every corner made you itch.

It's the Crow's Nest, the prison. You've been in it, and you got out.

You're seeing it from a hook on the wall, and it looks smaller than you remember. The cloak hangs on the hook with the eye in it, waiting. It has been waiting a long time, and there is dust on the shoulders.

Someone is tapping on stone on the far side of the wall. Three, then two, then three. After a long gap it comes again. The eye is listening.

The door opens and you come in. Your hair is scraped back and there's blood on your knuckles. You move fast and low, as you were taught, until you see the cloak and stop. You don't remember looking like that.

The eye is looking at you. That day you thought it was asleep.

[SAM?: the eye's memory of the Crow's Nest, and the tapping]

→ Listen to the tapping. Work out the pattern. (go to P1b) +dread
→ Watch yourself take the cloak. (go to P1c) -flicker

## P1b. Three, two, three {past}

You leave yourself to it and listen to the wall.

Three, two, three. It isn't cant or any knock code you were taught. It's slow, like someone who has a lot of time and isn't sure anyone's there.

You can't touch anything in here. You put your hand on the white stone anyway and tap back: three, two, three.

The tapping stops. The eye on your shoulder holds still, and so does the one on the hook.

Then one tap comes back through the wall, so faint you couldn't swear to it.

@eye: "It never answered before."

@patron: "Leave that wall alone."

That's the first time she's said anything that wasn't clever.

→ Back (go to E0)

## P1c. Taking it {past}

You watch yourself take the cloak off the hook.

You were quick. From up here you can see you weren't careful. You didn't check the collar or the lining. It was good cloth, you were cold and you'd been inside for days, so you grabbed it.

The eye watches your hands come at it. Then it's on your shoulders, the room swings, and you're out of the door. The eye looks back at the hook and the wall. You didn't.

Then it looks at you, close, for the first time: your ear, and the cut on your jaw.

@eye: "Small. You were small."

"I'm not small."

@eye: "Everything is."

→ Back (go to E0)

## P2a. Paper {past}

{sound: rift}

The sky is torn from one side to the other, and something wrong shows through the split. The ground is grey. Your ears hurt, as they do deep under water.

You've been here, and you didn't want to come back.

Karthus is on his back on the grey ground with your blade in him and Katy's. He's trying to speak and it's taking him a while. The eye watches him from your shoulder. It watched him then too, and you didn't know.

He's looking at you. "You were the strongest of us," he says. That you remember.

Katy has the contract in her hands, the big one, as long as her arm. It has your mark on it, her name, and a date long past.

[SAM?: none; this is played at the table, from the eye's side]

→ Look at Karthus. (go to P2c) +dread
→ Look at Katy and the paper. (go to P2d) +flicker

## P2c. Karthus {past}

You make yourself look at him.

He isn't looking at Katy, only at you. There's no hate in his face. Old men look like that at a fight they used to be able to win.

His mouth moves. You missed this the first time, because you were watching the paper. He says it in cant, and only just, with a twist of the lip and one finger moved on the grey ground.

*Still ours.*

The eye saw it too. It turns and looks at you, close.

@eye: "True?"

You don't answer it.

@patron: "He's dead," she says, in Elvish. "The dead say what they like."

?dread>=3: Your hand has gone to the dagger. You take it away.

→ Back (go to E0)

## P2d. Torn {past}

You look at Katy.

She's holding the contract out between you, and you have the other end. She has been crying and has stopped. Her hands are steady.

You never saw how you looked that day. The eye did, and you looked terrified. You'd have bet money that you didn't.

{sound: paper-tear}

You pull your end and she pulls hers. Good paper tears slowly. Halfway across it catches on the seal, Katy says a rude word, you both pull harder, and it comes apart.

The wind out of the torn sky takes both halves up and away. The eye watches until they're too small to see.

@eye: "Good."

→ Back (go to E0)

## P3a. The lining {past}

Your room at the inn in Valarius, at night. The cloak is spread on the bed with the crew round it, and the curse is coming off.

You remember a noise, the whole building letting out a breath. The eye remembers a weight coming off, and then everything sharp and far too bright, with faces all round the bed.

It goes round them fast, as you would check a room for exits. Hans, Stig, Katy, you. It stops on you.

Under it, in the lining, are marks you never saw: old script, sharp-cornered, in lines. They stand up in the cloth for one breath and sink back.

@eye: "Awake." Then, after a while: "Why awake?"

[SAM?: the old script in the lining]

→ Read the marks before they go. (go to P3b) +dread
→ Leave the marks. Answer its question. (go to P3c) -flicker

## P3b. The marks {past}

You lean in and read.

You can read Draconic, and most old Valerian. This is older than both, the script Valerian grew out of, and every line goes the long way round. You get three words before the marks sink.

*Kept.*

*Not given.*

The third you don't know. It's shaped like a door with a bar across it.

The eye watches you read and says nothing.

@patron: "Clever. Too clever by half."

→ Back (go to E0)

## P3c. Why {past}

"Why awake?"

You answer out loud, in Draconic. Nobody round the bed hears, because for them this has already happened.

"Because we took the curse off. That's all. You were in the way."

The eye looks at you for a long time.

@eye: "In the way." It tries the words out and sounds pleased with them. "Not cursed. Not asleep. In the way."

→ Back (go to E0)

## S1. The oldest one {past}

{sound: drip}

@eye: "One more. The first. Hold still."

@patron: "No."

The rooms go, and what's left is the dark at the bottom of a well, old enough to have a smell. One lamp burns, on nothing you can see.

In front of the lamp, close enough to fill the view, a woman in a long robe is looking straight into the eye. Her hands are up by her face, covered in tattoos that move slowly over the skin. Her face is in the light. You have never had this chance before.

The eye in the memory squeezes itself shut, and you see nothing. You hear her say a few words in Elvish, too low to catch.

Then there's light again, and many hands in grey gloves, folding cloth. There's hot wax. A seal comes down hard right beside you, close enough to feel the heat.

{sound: seal}

After that it's the hook in the white room, and the tapping, for a very long time.

@eye: "That's all. That's the first."

@patron: "That's enough."

[SAM?: the eye has seen the patron's face; the Order's grey gloves sealed it into the cloak. Nothing says who she is or whose eye it is]

→ Continue (go to S2)

## S2. Swapped

{sound: silence}

The lamp flame, the ash and the dagger are all still. On your shoulder the eye is screwed shut, like a child pretending to sleep.

She laughs, low, and not happily.

@patron: "It doesn't remember my face. It shut its eye. Ask it why."

You ask it, in Draconic. The eye stays shut.

@eye: "Didn't want to know." It says it from behind the lid. "Didn't want to have to tell."

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

You're back against the wall. Ash goes up past your face. It lifts off your sleeves into the dark and leaves them clean. The eye blinks, and the black tear runs back up the cloth and into it.

@patron: "Hot."

That was her voice, from the dagger, in Draconic.

@eye: "Don't listen to her."

That was the eye, from your hood, in old court Elvish.

They have swapped tongues. You're fluent in both, and for a few breaths you can't tell which of them is talking.

The lamp is on the wrong side of the cave. Katy takes her hand back from her father's. Stig sits down. Hans is humming his beat backwards. Your shadow on the wall lifts its hand and you lift yours after it. It puts its hand down, and then you do.

~Too slow. Too slow.~

You can't remember which tongue you think in. You'd always assumed Common.

→ Let it go round. (go to F0)

## F0. Ahead

{sound: eye-open}

The eye opens again, and this time it looks ahead.

Your shadow comes down off the wall onto the floor in front of you and starts walking. You follow, and it stays a step ahead whatever you do.

These rooms are yours, not the eye's. None of them has happened, and they might never. Each is lit from behind, so your shadow goes in first.

@eye: "Don't know these. Never been."

@patron: "I have."

Three are close enough to walk into.

→ A white room, and wax. (go to Q1a)
→ A small table, and cards. (go to Q2a)
→ A campfire, years on. (go to Q3a)

*Hub: then go to W1*

## Q1a. Wax {future}

{sound: seal}

The white room in the tower at Orda again, with the slit window and the same hook.

A woman at the table is pressing a seal into hot wax on the collar of a cloak. She wears grey gloves and a ring with the Order's mark, and her silver hair is cut short. You can tell from the wrist that she's good at the work.

She is you, older. She is quiet, and she looks well paid and well rested.

Under the wax there's something in the cloth, half open, watching her. She doesn't look at it. She's good at not looking at things.

[SAM?: a maybe]

→ Knock the seal out of your own hand. (go to Q1c) +flicker
→ Let her finish. It's a job. (go to Q1d) +dread -flicker

## Q1c. Knocked {future}

You knock the seal out of her hand.

You can't touch anything here, and the seal goes anyway. It clatters on the white floor. The wax is left half pressed, a smear with no mark in it.

The older you looks at her empty glove for a long time. Then she looks at the cloth, at the thing in it, and it looks back.

She takes off one glove, then the other. The hands under them are yours, a thief's hands, scarred across the knuckles. She hangs the cloak on the hook and leaves the door open on her way out.

@eye: "Better," it says, from your shoulder.

→ Back (go to F0)

## Q1d. A job {future}

You let her finish. The seal comes down clean and leaves a perfect mark in the wax, and the thing in the cloth shuts.

She hangs the cloak on the hook, takes off her gloves and goes to get her dinner.

After a while the tapping starts on the far side of the wall. Three, two, three. The older you stops at the door, and then goes on through it.

On your shoulder the eye has shut so hard that the cloth round it is creased.

^^You'd have been good at it.^^

→ Back (go to F0)

## Q2a. Cards {future}

{sound: cards}

A small table in a dark room, with two chairs and one lamp burning on nothing.

You're in one chair, older. Your silver hair is long again and loose, with some grey in it. There's a glass of wine by your hand that you aren't drinking.

The other chair holds only a shadow in the shape of a woman in a long robe. Her tattooed hands are dealing cards, and the tattoos move while she deals.

You've played her many times, by the look of you, and you're winning. The pile on your side of the table isn't coins. It's small pieces of shadow, folded like notes.

@patron: "Again?"

She sounds fond. You have never heard her fond.

"Again," says the older you, in Elvish too, and it comes easily to her.

There's no eye on the older you's cloak. Where it was, the cloth is flat.

[SAM?: a maybe]

→ Look at the patron's face. She's right there. (go to Q2c) +dread
→ Look for where the eye went. (go to Q2d) +flicker

## Q2c. Her face {future}

You lean round the lamp. In this room she isn't hiding. She is sitting at a table and the light falls on her as it would on anyone. You look.

Your shoulder goes cold. The eye on your own cloak, the one that came here with you, has shut, and it drags your hood down over your face. You have cloth over both eyes. Your hands are free, and you could pull the hood off.

@eye: "Don't." Its voice is very small. "Please."

It has never said please. You didn't think it knew the word.

You hear her deal another card.

@patron: "Pity."

→ Back (go to F0)

## Q2d. Where it went {future}

You look at the flat patch on the older you's cloak. Then you look at the patron's hands and the cards in them. There's an eye inked on the back of every card, and every one is shut.

The older you can't see you. She looks straight at the spot where you're standing all the same, as you'd look at a dark corner you didn't trust.

"Don't," she says, in Draconic. Then she picks up her cards.

→ Back (go to F0)

## Q3a. A fire {future}

{sound: fire-crackle}

A campfire at night, in the open, under stars. You don't know these low hills.

The crew are all older. Stig has gone grey and wide, and he's arguing with Hans about how long the pot stays on. Katy has a streak of grey at the front of her hair. Thorn is at the edge of the firelight.

The older you sits a little apart with her back to a rock, as always. She is talking into her hood in Draconic, quietly and without a break.

Katy has been watching her across the fire for some time.

"Saph," she says. "Who are you talking to?"

The older you doesn't hear her, or hears and doesn't look up.

"Saph."

→ Make her answer in Common. (go to Q3c) +flicker
→ Let her finish what she's saying first. (go to Q3d) +dread -flicker

## Q3c. Common {future}

You put your hand on your own shoulder and squeeze, hard.

She stops in the middle of a word, blinks, and looks round at the fire and the faces as if she's been somewhere else.

"Sorry," she says, in Common. It comes out stiff, like a door that hasn't been opened in a while. "Sorry. What?"

"Who were you talking to?"

The older you looks at her hood, then back at Katy.

"It was telling me about you lot," she says. "When you're asleep."

Stig laughs. Katy doesn't, and then she does, a little.

"Tell it to mind its own business."

"It doesn't have any," says the older you. "That's the problem."

→ Back (go to F0)

## Q3d. Finishing {future}

You let her finish.

It takes a long time, and you understand every word. None of it matters much. She tells the hood about the weather, and that Stig has put in too much salt. Katy has a new song and hasn't played it to anyone. Hans is pretending to be asleep.

When she's done she looks up. The fire has burned low and everyone else has gone to bed. Katy's blanket by the fire is empty. She went without saying goodnight.

The older you looks at the blanket for a while. Then she goes back to talking, quietly, in Draconic.

~They'll stop asking.~

→ Back (go to F0)

## W1. The last blink

{sound: eye-open}

The eye blinks, slowly. That was the last one. You can tell, as you can with the last coin in a purse.

The cave comes back wrong. It's grey, and the walls have gone smooth and white, as in the tower. Old wax and fresh wax have dripped on the floor. High up there's a slit of white light.

Your shadow is standing upright in front of you, between you and the light, within arm's reach, with its back to you. It's still a heartbeat ahead. When you breathe in, it's already breathing out.

@patron: "Don't turn it round."

@eye: "Turn it round."

Until now they have never both wanted something from you at the same time, and never this much.

~Too slow.~

→ Turn it round. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

You put your hand on its shoulder, which is cold and solid, and it turns round.

It's you, older. Her silver hair is loose, and the cut on your jaw has healed to a white line. She has your mouth and nose, and your right eye. The left eye is the one from your cloak, set in your face and wide open. It looks at you, and through you, and a step past you, at a thing you can't see yet.

On your shoulder, the eye in your hood has gone still.

@future: "Keep it shut."

"Keep what shut?"

@future: "Everything." She touches her face, under the eye. "You keep it, it keeps you. It sees everything. It sees what's coming before you've finished breathing in. You never get surprised again. Not by anyone. Shut, it's just a cloak. Nobody comes for a cloak."

"That sounds all right."

@future: "That's what I said."

She looks past you, into the dark where the dagger's voice comes from.

@future: "And she wants it back, and she'll wait. She's very good at waiting. She'll wait until you're tired."

"So what do I do?"

She opens her mouth and two voices come out together, one in Elvish and one in Draconic, saying different things.

@future: "Give it back. / Keep me."

The eye in her face blinks. The eye on your shoulder blinks with it, exactly in time.

@future: "I don't know which one of those is me."

She reaches for your hood, gently, to pull it shut over the eye before it sees any more.

→ Stop her hand. (go to @seal)

## W2x. The face, and the gloves

{sound: heartbeat-two}

You put your hand on its shoulder and it turns round.

It's you, older, with your silver hair loose. Where your left eye should be, she has the eye from your cloak.

@future: "Keep it shut."

Then the gloves come up out of the wax on the floor. They're grey and empty, each with a seal ring on it, and there are a great many of them. They reach for your hood.

?seen Q1d: You know those gloves by the wrist. They're yours.

?seen Q2c: The eye shut when you went to look at her face. It said please.

?seen Q3d: Katy's blanket by the fire was empty.

?seen P2c: Karthus said it in cant, with one finger on the grey ground. *Still ours.*

?seen P1b: One tap came back through the wall.

?dread>=4: All of them are yours, every one.

@future: "See? It's better shut."

She reaches for your hood, and the gloves reach with her.

→ Stop her hand. (go to @seal)

## W3. Open

{sound: heartbeat-one}

She goes down on one knee in the wax. She isn't hurt, only out of breath, as you are after a long run over rooftops.

?flicker>=3: There's hardly any of her left. You can see the white light through her, and the eye in her face is a smudge.

?flicker<=1: She is solid and heavy. The wax under her knee is pressed as flat as a seal.

The gloves have dropped and lie empty on the floor.

She looks up at you with both eyes, yours and the other.

@future: "It's yours. Not mine yet."

On your shoulder the eye in your hood is open and looking at you, waiting for you to speak. You have never felt it wait like this, even in the dark with the patron's offer.

The dagger at your hip has gone quiet. It's listening too.

Whatever you say now will stay said. You know that as you know things in a dream.

→ Hold it out to the dark where she is. Let her have it, if she'll take it. (go to End 1)
→ Pull your hood up over it. It stays with you, and that's that. (go to End 2)
→ Ask it, in Draconic, what it wants. Then do that. (go to End 3)

## W3x. Shut

The eye shuts. The lid comes down on your shoulder and the world gets smaller. You had never noticed how much bigger the world was with the eye open. You'd taken that for your own.

You're on your knees in the wax, and you don't remember going down. There's a glove on your hood, pressing. Your shadow kneels in front of you with her hand over the glove, over the eye, gently.

@future: "There. No more surprises."

It's quiet. You can't hear the dagger or the eye, only your own breathing.

Then, under her hand and the glove and the cloth, there's a very faint tapping. Three. Two. Three.

She takes her hand away.

@future: "Huh."

The glove falls off. The eye opens, and it's looking at you.

→ Hold it out to the dark where she is. Let her have it, if she'll take it. (go to End 1)
→ Pull your hood up over it. It stays with you, and that's that. (go to End 2)
→ Ask it, in Draconic, what it wants. Then do that. (go to End 3)

---

## End 1. Held Out

You unpin the cloak, take it off, and hold it out in both hands, eye up, toward the dark where her voice comes from.

@patron: "Oh."

For a long while that's all she says. The eye doesn't look at the dark. It looks at you. It says nothing, and it doesn't ask you to stop.

You hold the cloak out until your arms start to ache. Nothing takes it.

@patron: "Not like this." She is quieter than you've ever heard her. "Not out of a dream, with you half asleep. When you mean it, in the daylight, I'll come for it." Then, after a while: "Put it back on. You'll catch cold."

Your shadow, on one knee in the wax, closes both her eyes.

{sound: silence}

The eye blinks, slowly, and the cave is back, with the lamp, the ash and every pair of hands.

You're standing with your back to the wall, holding your cloak out to nobody. No one saw. You put it back on.

The eye is half open and heavy. It isn't looking at you, or at anything.

?seen P1b: Under your hand, through the cloth, you feel one faint tap.

> **Echo: Held Out.** Before you roll a Charisma (Deception or Persuasion) check while you are offering someone a deal, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the eye showed her, see below] At the end: she held the eye out to the patron. The patron didn't take it: "Not like this. When you mean it, in the daylight." Hans logged: the guest with the eye-cloak took her cloak off and held it out to the dark for some time. Then she put it back on. I have no category for this. I have made one. It is called "nearly". [SAM?: an offer on record, nothing given; the eye stays her Book of Shadows]

## End 2. Hood Up

You pull your hood up over your hair and over the eye, and tug it snug.

The eye doesn't fight. It settles against the side of your head, warm.

@patron: "Hm."

That's all she says, from the dagger. You can hear she's put it away somewhere to think about later. She's good at waiting.

Your shadow gets up off her knee and looks at you for a while. Then she pulls up her own hood, steps back onto the wall and lies flat against it. When you breathe in, she breathes in with you, and no longer a heartbeat early.

{sound: silence}

The eye blinks, slowly, and the cave is back, with the lamp, the ash and every pair of hands.

Your hood is up and your back is to the wall.

Inside the hood, against your ear, very low and in Draconic:

@eye: "Warm."

> **Echo: Hood Up.** Before you roll a Dexterity (Stealth) check, or a Wisdom (Perception) check to notice someone coming, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the eye showed her] At the end: she pulled her hood up over the eye and kept it. Her shadow is on time again. Hans logged: the guest with the eye-cloak put her hood up indoors. I have pointed out that it is indoors. She did not take it down. Her shadow is on time. I check.

## End 3. Asked

You turn your head until you can see it. It's already looking at you.

You ask it in Draconic, which suits a plain question. What do you want?

It takes a long time to answer.

@eye: "Don't know. Never asked."

"I'm asking."

It thinks. The cloth round it moves while it does.

@eye: "See. Just see. Not for her. Not for gloves. For me."

It looks past you at your shadow, at the dark where the dagger's voice is, and at the white light. Then it looks farther. A long way off there's a doorway full of fire that doesn't move, with people standing in front of it. The eye looks at that for a long time.

@eye: "With you," it says, as if it had just found the word. "See with you. Not for you."

Your shadow, on her knee, laughs. It's your laugh, and you don't laugh much.

@future: "I never asked it. Not once."

@patron: "Clever."

She says it in Elvish, from the dagger, and for once she doesn't sound as if she's laughing at anybody.

{sound: silence}

The eye blinks, slowly, and the cave is back, with the lamp, the ash and every pair of hands.

The eye is open, though not wide. It's looking where you're looking, at Katy by her father and then at Stig with the towel. When you look away, so does it.

> **Echo: See With Me.** When you or a creature you can see within 30 feet makes a Wisdom (Perception) or Intelligence (Investigation) check, you can spend this Echo to give that check advantage.

**Sent to Sam:** [what the eye showed her] At the end: she asked the eye what it wants. It said "See with you. Not for you." Hans logged: the guest with the eye-cloak and her cloak looked at the same thing at the same time for one hour and twelve minutes. I counted. I am not sure what I was counting.

## What the eye showed her (first lines of every "Sent to Sam", one per passage reached)

- **The hook, the tapping (P1b):** Hans logged: she saw where her cloak hung before her: the Crow's Nest in Orda. Someone was tapping through the wall. She tapped back. Something tapped once. [SAM?]
- **The hook, taking it (P1c):** Hans logged: she saw herself steal her cloak in the Crow's Nest, from the cloak's side. It thought she was small. [SAM?]
- **The torn sky, Karthus (P2c):** Hans logged: she saw Karthus die again, and this time she saw what he said with his hand. She did not tell me what it was.
- **The torn sky, the paper (P2d):** Hans logged: she saw the contract torn again, from her shoulder. She looked frightened. She says she was not.
- **The lining, read (P3b):** Hans logged: when the curse came off her cloak there was old writing in the lining. She read three words. [SAM?]
- **The lining, answered (P3c):** Hans logged: when the curse came off her cloak, the eye asked her why it was awake. She told it. It liked the answer.
- **The oldest one (S1):** Hans logged: the eye remembers being looked at by a woman with tattooed hands, from very close. It shut itself. Then grey gloves sealed it into cloth. [SAM?]
- **The loop (L1):** Hans logged: for a moment, the cloak spoke Elvish and the dagger spoke Draconic. She says this is wrong. I agree. I do not know why I agree.
- **Wax, knocked (Q1c):** Hans logged: she saw herself older, sealing an eye into a cloak for the Order. She knocked the seal out of her own hand.
- **Wax, let her (Q1d):** Hans logged: she saw herself older, sealing an eye into a cloak for the Order. She let herself finish.
- **Cards, her face (Q2c):** Hans logged: she saw herself older, playing cards with her patron, and went to look at the patron's face. The eye stopped her. It said please.
- **Cards, the eye (Q2d):** Hans logged: she saw herself older, playing cards with her patron, with no eye on her cloak. Every card had one on the back.
- **The fire, Common (Q3c):** Hans logged: she saw us older, round a fire, and herself talking to her cloak in Draconic. She made herself answer Katy.
- **The fire, finished (Q3d):** Hans logged: she saw us older, round a fire, and herself talking to her cloak in Draconic all night. Katy went to bed without saying goodnight.
- **Went down in the fight (W3x):** Hans logged: in the fight the eye was sealed shut, and the world got smaller. Then something tapped.

**Never sent:** who the patron is, whose eye it is, what the patron looks like, who is tapping in the Crow's Nest, or what the third word in the lining means.

## Whispers (the shadow's voice, scattered by the game as the dread grows)

- Too slow.
- Keep it shut.
- She's very good at waiting.
- Three, two, three.
- Don't turn round.
- You never get surprised again.
- Still ours.
- Who are you talking to?
- Hot.
- Give it back.
- Keep me.
- Too slow.

## Cutscene: flake

- The cave, gone still. Ash hangs in the lamplight and doesn't come down.
- One flake drifts past your face.
- It lands in the eye on your cloak. Right on the wet.
- The eye blinks, hard. A black tear runs down the cloth.
- @eye: Hot.
- Your shadow on the wall turns its head before you do.
- @patron: Don't listen to it.
- Two Tongues

## Cutscene: face

- White walls, wax on the floor, a slit of light.
- A silver-haired back, close. A heartbeat ahead of you.
- You put your hand on its shoulder.
- She turns round.
- Your face. And the eye from your cloak, where your left eye should be.
- @future: Keep it shut.
- @future: Give it back. / Keep me.
- She reaches for your hood.

## Cutscene: end 1

- You take the cloak off and hold it out to the dark, eye up.
- Your arms ache. Nothing takes it.
- @patron: Not like this.
- Your shadow closes both her eyes.
- You put the cloak back on.

## Cutscene: end 2

- You pull your hood up over the eye.
- Your shadow pulls hers up too, and lies back down on the wall.
- She breathes in when you do.
- @eye: Warm.

## Cutscene: end 3

- You turn your head to look at it. It's already looking at you.
- Saphira: What do you want?
- @eye: See with you.
- Far off, past the light: a doorway of fire, and the crew in front of it.
- Your shadow laughs, your laugh.
- When you look at Katy, it looks at Katy.
