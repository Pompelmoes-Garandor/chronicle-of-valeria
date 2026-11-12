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

You're sitting with your back to the wall, as you always do. From here you can see the whole cave, both ways out, and everyone's hands.

Katy is kneeling by her father. Stig is getting up off his stone with his towel. Thorn is watching the tunnel. Hans is standing guard, perfectly still.

Ash comes down through the lamplight. It's been coming down all day. You've stopped noticing it on your sleeves.

One flake comes down past your face and lands in the eye on your cloak.

It lands right on the wet surface of the eye.

{sound: eye-open}

The eye blinks.

It has never blinked fast before. Usually it blinks slowly, if it bothers at all. This time it blinks twice, quick and hard. A tear comes out of the corner of it and runs down the cloth. It's black.

Then, very close to your ear, so close it's almost inside your hood, something says a word.

{sound: draconic}

@eye: "Hot."

It's Draconic. Old Draconic, older than anything you learned it from. It's rough as a cat's tongue.

The eye has never said anything. Not once.

→ Continue (go to H2)

## H2. Both

The ash stops.

It doesn't fall. It hangs in the lamplight like dust in a sunbeam. Every pair of hands stops where it is. Katy's, halfway to her father's. Stig's, on the towel. Hans's, at his sides, where they always are.

Nobody's moving except you. And the eye.

{sound: dagger-hum}

Then the dagger at your hip starts to hum. You know that hum.

{sound: elvish}

@patron: "Don't listen to it."

Elvish. The old kind, the court kind with all the long vowels. From the dagger, or from the dark behind it.

@eye: "Don't listen to her."

Draconic, from the hood.

You're the only one in this cave who speaks both. You've never wished you didn't before.

→ Continue (go to H3)

## H3. Early

The lamp's on its flat stone. Your shadow's on the wall behind you, where it always is when your back's to a wall.

You turn your head.

Your shadow's already turned its head.

You watch it. You lift your hand, slowly. Its hand goes up a heartbeat before yours, about the time it takes you to decide to move.

~Too slow.~

@eye: "I'll show you," it says. "Where I was. Before you. Hold still."

@patron: "It doesn't know where it was. Ask it what it ate."

@eye: "Hold still."

→ Hold still, and let it show you. (go to E0)

## E0. What it saw

The cave goes thin, like a stage curtain with a lamp behind it.

Behind it there are rooms, and they're the eye's. Everything's seen from a little high and to the left, from somebody's shoulder and the edges are dark and round.

You know where it sits. You can feel the shape of your own shoulder under you, in every one of them.

Three of them are close enough to walk into.

@eye: "Pick."

@patron: "Pick carefully."

→ A white tower, and a hook. (go to P1a)
→ A torn sky, and paper. (go to P2a)
→ The day the curse came off. (go to P3a)

*Hub: then go to S1*

## P1a. The hook {past}

{sound: tapping}

A tall, narrow room. White stone, smooth, cold enough you can see your breath. One slit of a window high up with the sea far below it. Orda. You know that white. You remember the anti-magic sensors on every corner and how much they itched.

This is the Crow's Nest. The prison. You've been in it. You got out.

Seen from up here, from the hook on the wall, it's a smaller room than you remember.

The eye is on the hook. In the cloak, on the hook, waiting. It's been waiting a long time. Dust on the shoulders.

Somewhere through the wall, someone is tapping on stone. Slow. Three, then two, then three. Then nothing for a long while. Then three, two, three.

The eye listens to it.

The door opens. It's you.

You don't remember looking like that. You did. Hair scraped back, blood on your knuckles, moving fast and low, like you were taught. You come in and see the cloak and stop.

The eye looks at you. You never knew it did. You thought it was asleep.

[SAM?: the eye's memory of the Crow's Nest, and the tapping]

→ Listen to the tapping. Work out the pattern. (go to P1b) +dread
→ Watch yourself take the cloak. (go to P1c) -flicker

## P1b. Three, two, three {past}

You leave yourself to it and listen to the wall.

Three. Two. Three.

It isn't cant. You'd know cant. It isn't any knock code you were taught. It's slow, like someone who has a lot of time and isn't sure anyone's there.

You put your hand on the white stone. You can't touch it here, but you do it anyway. You tap back. Three, two, three.

The tapping stops.

The eye has gone very still on your shoulder. In the memory, on the hook, it's still too. Both of them. Listening.

Then, through the wall, so faint you might be making it up: one tap. Just one.

@eye: "It never answered before."

@patron: "Leave that wall alone."

That's the first time she's said anything that wasn't clever.

→ Back (go to E0)

## P1c. Taking it {past}

You watch yourself take the cloak off the hook.

You were quick. You remember being quick. From up here you can see you weren't careful: you didn't check the collar, you didn't check the lining, you just grabbed it because it was good cloth and you were cold and you'd been inside for days.

The eye watches your hands come at it. Then it's on your shoulders, and the room swings, and you're out of the door.

As you go, the eye looks back at the hook and the wall. You never looked back.

Then it looks at you. Close, from your shoulder, for the first time. At the side of your face, the cut on your jaw, your ear.

@eye: "Small," it says. "You were small."

"I'm not small."

@eye: "Everything is."

→ Back (go to E0)

## P2a. Paper {past}

{sound: rift}

A sky that's torn like cloth, a long ragged split from one side to the other with something wrong showing through it. Grey ground. Pressure in your ears like deep water.

You've been here. You don't want to be here again.

Karthus is down. He's on his back on the grey ground with your blade in him and Katy's in him, and he's trying to say something, and it's taking him a while.

From your shoulder, the eye watches him. It watched him then too. You didn't know.

He's looking at you. You remember this.

"You were the strongest of us," he says.

Katy has the contract in her hands. The big one. Long as her arm. It has your mark on it, and it has her name on it, and it has a date that's long gone.

[SAM?: none; this is played at the table, from the eye's side]

→ Look at Karthus. (go to P2c) +dread
→ Look at Katy and the paper. (go to P2d) +flicker

## P2c. Karthus {past}

You look at him. You make yourself.

He's not looking at Katy. Only at you. There's no hate in it, which is worse. It's a look you've seen on old men watching a fight they used to win.

His mouth moves. You missed this the first time. You were watching the paper.

He says it in cant. Barely. A twist of the lip and one finger, moved on the grey ground.

*Still ours.*

The eye sees it. It looks at you, close.

@eye: "True?"

You don't answer it.

@patron: "He's dead," she says, in Elvish. "The dead say what they like."

?dread>=3: Your hand has gone to the dagger without you. You take it away.

→ Back (go to E0)

## P2d. Torn {past}

You look at Katy.

She's holding the contract out between you, one end each. She's been crying and she's stopped. Her hands are steady.

You remember this. You remember what it felt like. You don't remember what you looked like.

From the eye you can see your own face. You look terrified. You'd have bet money you didn't.

{sound: paper-tear}

You pull your end. She pulls hers. The contract tears in two.

It takes longer than you'd think. Good paper does. Halfway through it sticks on the seal and Katy says something rude and you both pull harder.

The two halves go up in the wind out of the torn sky and away. The eye watches them go until they're nothing.

@eye: "Good," it says.

→ Back (go to E0)

## P3a. The lining {past}

Your room at the inn. Night. Valarius. The cloak's on the bed, spread out, and the crew are round it, and the curse is coming off.

You remember the noise, mostly. Something like a sigh out of a whole building.

From the eye, it's different. It's not a noise. It's a weight going. Everything goes clear and sharp and too bright, all at once. Every face round the bed.

It looks at all of them, one after the other, fast, like you'd look round a room for the exits.

Hans. Stig. Katy. You.

It stops on you.

Under it, in the lining, there are marks. You never saw them. Old script, sharp, in lines. They come up in the cloth like goosebumps for one breath, then sink back.

@eye: "Awake," it says. Then, after a bit: "Why awake?"

[SAM?: the old script in the lining]

→ Read the marks before they go. (go to P3b) +dread
→ Leave the marks. Answer its question. (go to P3c) -flicker

## P3b. The marks {past}

You lean in and read.

You can read Draconic. You can read old Valerian, mostly. This is older than both. It's what Valerian grew out of. Every line goes the long way round.

You get three words before they sink.

*Kept.*

*Not given.*

And a third you don't know. The shape of it is like a door with a bar across it.

The eye watches you read it. It doesn't say anything.

@patron: "Clever," says the dagger. "Too clever by half."

→ Back (go to E0)

## P3c. Why {past}

"Why awake?"

You answer it. Out loud, in Draconic, in a room where nobody else can hear because it's already happened.

"Because we took the curse off. That's all. You were in the way."

The eye looks at you a long time.

@eye: "In the way," it says, trying out the words. It sounds pleased with them.

Then: "Not cursed. Not asleep. In the way."

→ Back (go to E0)

## S1. The oldest one {past}

{sound: drip}

@eye: "One more," it says. "The first. Hold still."

@patron: "No."

The rooms go. There's dark, a lot of it. Not cave-dark. The dark at the bottom of a well, where it's been dark for so long the dark has a smell.

One lamp. Burning on nothing you can see.

And in front of the lamp, close, so close it fills everything, someone is looking straight at the eye. A woman in a long robe. Her hands are up, near her face, and they're covered in tattoos, and the tattoos are moving, slowly, like ink settling in water.

Her face is right there. In the light. The only time you've ever had a chance to see it.

The eye shuts.

The eye does it, not you. In the memory it shuts tight, and you see nothing, and you hear her say something in Elvish too low to catch.

Then light, and grey gloves. Hands in grey gloves, a lot of them, folding cloth. Hot wax. A seal pressed down hard, right next to you, so close you feel the heat.

{sound: seal}

Then the hook, and the white room, and the tapping, for a very long time.

@eye: "That's all," it says. "That's the first."

@patron: "That's enough."

[SAM?: the eye has seen the patron's face; the Order's grey gloves sealed it into the cloak. Nothing says who she is or whose eye it is]

→ Continue (go to S2)

## S2. Swapped

{sound: silence}

Nothing moves for a moment. The lamp, the ash, the dagger. The eye on your shoulder is shut tight, like a child pretending to be asleep.

Then you hear her laugh. Low. Not happy.

@patron: "It doesn't remember my face," she says. "It shut its eye. Ask it why."

You ask it. In Draconic.

The eye doesn't open.

@eye: "Didn't want to know," it says, from behind the lid. "Didn't want to have to tell."

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

You're back with your back to the wall.

Ash goes up past your face. Up. Off your sleeves and away into the dark, dry, like it never came down.

The eye blinks the black tear back in.

@patron: "Hot."

In Draconic. Her voice, from the dagger, in the eye's language.

@eye: "Don't listen to her."

In Elvish. Old court Elvish, all long vowels, from your hood.

The voices are the wrong way round: the patron is speaking Draconic and the eye is speaking Elvish. You're fluent in both and for a moment you can't tell who's talking.

The lamp's on the wrong side of the cave. Katy takes her hand back from her father's. Stig sits down. Hans is humming his beat backwards.

Your shadow is on the wall. It lifts its hand. Then you lift yours. Then it puts it down. Then you put yours down.

~Too slow. Too slow.~

You can't remember which tongue you think in. You always thought it was Common.

→ Let it go round. (go to F0)

## F0. Ahead

{sound: eye-open}

The eye opens again. It looks ahead this time, not back.

Your shadow goes off the wall and onto the floor in front of you and starts walking, and you follow it. It's always a step ahead. You never catch it up.

These rooms aren't the eye's. They're yours. They haven't happened. They might not. Every one of them is lit from behind, so your shadow goes in first.

@eye: "Don't know these," it says. "Never been."

@patron: "I have."

Three of them are close enough to walk into.

→ A white room, and wax. (go to Q1a)
→ A small table, and cards. (go to Q2a)
→ A campfire, years on. (go to Q3a)

*Hub: then go to W1*

## Q1a. Wax {future}

{sound: seal}

The white room again. Orda, the tower, the slit window. Same hook.

There's a woman at the table pressing a seal into hot wax on the collar of a cloak. Grey gloves. Silver hair, cut short. She's good at it. You can tell from the wrist.

It's you.

It's an older you. She's quiet, and she looks like someone who's paid well and sleeps fine. There's a ring on your hand with the Order's mark.

On the cloak in front of you there's something in the cloth, half open, under the wax. Watching you.

You don't look at it. You're good at not looking at things.

[SAM?: a maybe]

→ Knock the seal out of your own hand. (go to Q1c) +flicker
→ Let her finish. It's a job. (go to Q1d) +dread -flicker

## Q1c. Knocked {future}

You knock the seal out of your hand.

You can't touch anything here. It goes anyway. It clatters on the white floor and the wax is only half pressed, a smear with no mark in it.

The older you looks at her empty glove for a long time.

Then she looks at the cloth. At the thing in it. It looks back.

She takes the glove off. Then the other. Her hands underneath are yours, scarred across the knuckles, a thief's hands.

She picks the cloak up off the table, hangs it on the hook, and leaves the door open on her way out.

@eye: "Better," it says, from your shoulder.

→ Back (go to F0)

## Q1d. A job {future}

You let her finish. The seal comes down, clean. The mark sits in the wax, perfect.

The thing in the cloth shuts.

She hangs the cloak on the hook, takes off the gloves, and goes to get her dinner.

Somewhere through the wall, after a while, the tapping starts. Three, two, three.

The older you, at the door, stops. Then goes on.

On your shoulder the eye is pressed so tight shut that the cloth round it creases.

^^You'd have been good at it.^^

→ Back (go to F0)

## Q2a. Cards {future}

{sound: cards}

A small table in a dark room. One lamp, burning on nothing. Two chairs.

You're in one of them. Older. Silver hair long again, loose, a bit of grey. A glass of wine you're not drinking.

In the other chair there's nobody. Only shadow, the shape of a woman in a long robe. Tattooed hands, dealing cards. The tattoos move while she deals.

You've played her a lot, by the look of you. There's a pile of something on your side. Not coins. Little bits of shadow, folded up like notes.

You're winning.

@patron: "Again?" she says, in Elvish. Her voice is fond. You've never heard her fond.

"Again," says the older you. In Elvish too. Easy, like you've said it a thousand times.

On the older you's cloak, there's no eye. Only a flat patch of cloth where it used to be.

[SAM?: a maybe]

→ Look at the patron's face. She's right there. (go to Q2c) +dread
→ Look for where the eye went. (go to Q2d) +flicker

## Q2c. Her face {future}

You lean round the lamp. Here, in this one, she's not hiding. She's just sitting. The light falls where it falls.

You look.

And your shoulder goes cold, all at once, as the eye on your own cloak, the one with you now, shuts. Tight. It pulls your hood over your face with it. Cloth over your eyes.

You can't see anything. You could pull it off. Your hands are right there.

@eye: "Don't," it says, very small. "Please."

It's never said please. You didn't think it knew the word.

You hear her deal another card.

@patron: "Pity," she says.

→ Back (go to F0)

## Q2d. Where it went {future}

You look at the older you's cloak, at the flat patch where the eye was.

Then you look at the patron's hands. At the cards.

On the back of every card, in ink, there's an eye. Shut.

The older you sees you looking. She can't see you. She looks anyway, right at where you're standing, the way you look at a dark corner.

"Don't," she says. In Draconic.

Then she picks up her cards.

→ Back (go to F0)

## Q3a. A fire {future}

{sound: fire-crackle}

A campfire, at night, in the open. Low hills you don't know. Stars.

The crew are all older. Stig's gone grey and wide and he's arguing with Hans about how long to leave the pot on. Katy's got a streak of grey at the front of her hair. Thorn is there, at the edge of the light.

An older you is sitting a bit apart, with her back to a rock, as always.

You're talking. Quietly, steady, not stopping. Into your hood.

In Draconic.

Katy's watching you across the fire. She's been watching you a while.

"Saph," she says. "Who are you talking to?"

The older you doesn't hear her. Or does, and doesn't look up.

"Saph."

→ Make her answer in Common. (go to Q3c) +flicker
→ Let her finish what she's saying first. (go to Q3d) +dread -flicker

## Q3c. Common {future}

You put your hand on your own shoulder and squeeze, hard.

The older you stops mid-word. She blinks. She looks round, at the fire and the faces, like she's been somewhere else.

"Sorry," she says. In Common. It comes out stiff, like a door that hasn't been opened in a while. "Sorry. What?"

"Who were you talking to?"

The older you looks at her hood. Then back at Katy.

"It was telling me about you lot," she says. "When you're asleep."

Stig laughs. Katy doesn't. Then she does, a bit.

"Tell it to mind its own business."

"It doesn't have any," says the older you. "That's the problem."

→ Back (go to F0)

## Q3d. Finishing {future}

You let her finish.

She talks for a long time. You can understand every word. It's nothing much. What the weather's doing. That Stig's put too much salt in. That Katy's got a new song and hasn't played it to anyone. That Hans is pretending to be asleep.

When she's done she looks up. The fire's burned down. Everyone else has gone to bed.

Katy's blanket is next to the fire, empty. She went to bed without saying goodnight.

The older you looks at it for a while. Then she goes back to talking. In Draconic. Quietly.

~They'll stop asking.~

→ Back (go to F0)

## W1. The last blink

{sound: eye-open}

The eye blinks. Slow. That's the last one. You can feel it, the way you can feel the last coin in a purse.

The cave comes back, but wrong. Grey. The walls have gone smooth and white, like the tower. There's wax on the floor, in drips, old and new. A slit of white light high up.

Your shadow is in front of you. Close. Standing up off the floor, the right way up, between you and the light. Its back to you.

It's still a heartbeat ahead. When you breathe in it's already breathing out.

@patron: "Don't turn it round," says the dagger.

@eye: "Turn it round," says the hood.

They've never both wanted something from you at once before. Not this much.

~Too slow.~

→ Turn it round. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

You put your hand on its shoulder. It's cold and it's solid. It turns round.

It's you.

It's an older you. Her silver hair is loose. The cut on your jaw has healed to a white line. She has your mouth, your nose and your right eye.

The left one isn't yours.

It's the eye. The one from your cloak. In your face, where your own eye should be. It's wide open. It's looking at you, and through you, and a step past you at something you can't see yet.

On your shoulder, the eye in your hood goes very still.

@future: "Keep it shut," she says.

"Keep what shut?"

@future: "Everything." She touches the side of her face, under the eye. "You keep it, it keeps you. It sees everything. It sees what's coming before you've finished breathing in. You never get surprised again. Not by anyone. Shut, it's just a cloak. Nobody comes for a cloak."

"That sounds all right."

@future: "That's what I said."

She looks past you. At the dark, where the dagger's voice comes from.

@future: "And she wants it back, and she'll wait. She's very good at waiting. She'll wait until you're tired."

"So what do I do?"

She opens her mouth. When it comes it's two voices, Elvish and Draconic, at the same time, and they don't say the same thing.

@future: "Give it back. / Keep me."

The eye on her face blinks. The eye on your shoulder blinks with it, exactly in time.

@future: "I don't know which one of those is me."

She reaches for your hood, gently. She wants to pull it shut over the eye before it can see any more.

→ Stop her hand. (go to @seal)

## W2x. The face, and the gloves

{sound: heartbeat-two}

You put your hand on its shoulder and it turns round.

It's you, older, with your silver hair loose, and the eye from the cloak in your face where your left eye should be.

@future: "Keep it shut."

And then the gloves come. Up out of the wax on the floor, grey, empty, with seal rings on, a lot of them, reaching for your hood.

?seen Q1d: Your gloves. You know the wrist.

?seen Q2c: The eye shut when you went to look at her. It asked you please.

?seen Q3d: The empty blanket by the fire.

?seen P2c: *Still ours*, in cant, on grey ground.

?seen P1b: Through the wall, one tap.

?dread>=4: All of them. Every one of them yours.

@future: "See? It's better shut."

She reaches for your hood. The gloves come with her.

→ Stop her hand. (go to @seal)

## W3. Open

{sound: heartbeat-one}

She goes down on one knee in the wax. She isn't hurt. She's out of breath, like after a long run over rooftops.

?flicker>=3: She's barely there. You can see the white light through her, and the eye in her face is only a smudge.

?flicker<=1: She's solid, heavy. The wax under her knee is pressed flat, like a seal.

The gloves have dropped. Empty, on the floor.

She looks up at you. Both of her eyes. Yours and the other.

@future: "It's yours," she says. "Not mine yet."

On your shoulder the eye in your hood is open. It's looking at you. It's waiting for you to say something. You've never felt it wait like this. Not even in the dark with the patron's offer.

The dagger at your hip has gone quiet. Listening.

You know, the way you know things in a dream, that whatever you say now is going to stay said.

→ Hold it out to the dark where she is. Let her have it, if she'll take it. (go to End 1)
→ Pull your hood up over it. It stays with you, and that's that. (go to End 2)
→ Ask it, in Draconic, what it wants. Then do that. (go to End 3)

## W3x. Shut

The eye shuts.

On your shoulder, all at once, the lid comes down. And the world gets smaller. You'd never noticed how much bigger it had been with the eye open. You'd taken it for your own.

You're on your knees in the wax and you don't remember going down. There's a glove on your hood. It's pressing.

Your shadow is kneeling in front of you. Her hand is over the eye too, over the glove, gently.

@future: "There," she says. "No more surprises."

It is quiet. You can't hear the dagger. You can't hear the eye. You can't hear anything over your own breath.

Then something under the cloth, under her hand, under the glove, very small, taps. Three. Two. Three.

She takes her hand away.

@future: "Huh," she says.

The glove falls off. The eye opens. It's looking at you.

→ Hold it out to the dark where she is. Let her have it, if she'll take it. (go to End 1)
→ Pull your hood up over it. It stays with you, and that's that. (go to End 2)
→ Ask it, in Draconic, what it wants. Then do that. (go to End 3)

---

## End 1. Held Out

You unpin the cloak. You take it off your shoulders and hold it out in both hands, eye up, to the dark where the voice comes from.

@patron: "Oh," she says.

That's all, for a long moment.

The eye doesn't look at the dark. It looks at you. It doesn't say anything. It doesn't ask you not to.

You hold it out. Your arms start to ache.

Nothing takes it.

@patron: "Not like this," she says at last. Quieter than you've ever heard her. "Not out of a dream, with you half asleep. When you mean it, in the daylight, I'll come for it." Then, after a bit: "Put it back on. You'll catch cold."

Your shadow, on her knee in the wax, closes both her eyes.

{sound: silence}

The eye blinks, slow. The cave's back: lamp, ash, every pair of hands.

You're standing with your back to the wall and your cloak in your hands, held out to nothing. Nobody saw. You put it back on.

The eye is half open, heavy. It's not looking at you. It's not looking at anything.

?seen P1b: Under your hand, through the cloth, very faint: one tap.

> **Echo: Held Out.** Before you roll a Charisma (Deception or Persuasion) check while you are offering someone a deal, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the eye showed her, see below] At the end: she held the eye out to the patron. The patron didn't take it: "Not like this. When you mean it, in the daylight." Hans logged: the guest with the eye-cloak took her cloak off and held it out to the dark for some time. Then she put it back on. I have no category for this. I have made one. It is called "nearly". [SAM?: an offer on record, nothing given; the eye stays her Book of Shadows]

## End 2. Hood Up

You pull your hood up. Over your hair, over the eye. Snug.

The eye doesn't fight it. You feel it settle against the side of your head, warm, like a cat on a lap.

@patron: "Hm," she says, from the dagger. That's all. But you can hear she's put it away somewhere to think about later. She's good at waiting.

Your shadow gets up off her knee. She looks at you a while. Then she pulls her own hood up, the same, and steps back onto the wall, and lies down flat on it.

When you breathe in, she breathes in. Exactly. Not a heartbeat early.

{sound: silence}

The eye blinks, slow. The cave's back: lamp, ash, every pair of hands.

You've got your hood up. Your back's to the wall.

Inside the hood, against your ear, very low, in Draconic:

@eye: "Warm."

> **Echo: Hood Up.** Before you roll a Dexterity (Stealth) check, or a Wisdom (Perception) check to notice someone coming, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the eye showed her] At the end: she pulled her hood up over the eye and kept it. Her shadow is on time again. Hans logged: the guest with the eye-cloak put her hood up indoors. I have pointed out that it is indoors. She did not take it down. Her shadow is on time. I check.

## End 3. Asked

You turn your head so you can see it. It's looking at you already.

You ask it. In Draconic. Plain. The way the language is meant for: what do you want.

It takes a long time to answer.

@eye: "Don't know," it says. "Never asked."

"I'm asking."

It thinks. You can feel it think. The cloth round it moves.

@eye: "See," it says. "Just see. Not for her. Not for gloves. For me."

It looks past you at your shadow, at the dark where the dagger's voice is, at the white light. And past that, at something you can't see from here. A long way off: a doorway full of fire that doesn't move, and people standing in front of it. It looks for a long time.

@eye: "With you," it says, as if it had just found the word. "See with you. Not for you."

Your shadow on her knee laughs. It's your laugh. You don't laugh much.

@future: "I never asked it," she says. "Not once."

@patron: "Clever," says the dagger, in Elvish, and for once she doesn't sound like she's laughing at anyone.

{sound: silence}

The eye blinks, slow. The cave's back: lamp, ash, every pair of hands.

The eye is open. Not wide. Just open. It's looking where you're looking. Katy, by her father. Stig, with the towel. When you look away, it looks away.

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
- In step. Exactly.
- @eye: Warm.

## Cutscene: end 3

- You turn your head to look at it. It's already looking at you.
- Saphira: What do you want?
- @eye: See with you.
- Far off, past the light: a doorway of fire, and the crew in front of it.
- Your shadow laughs, your laugh.
- When you look at Katy, it looks at Katy.
