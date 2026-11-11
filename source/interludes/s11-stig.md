# The Eleven Paces

**Player:** Stig (Astychon)
**When (for Sam, not shown to players):** inside one held breath at the end of Stig's first interlude, while he walks the eleven paces from his stone to Matthew. A flake of black ash lands on his sleeve and soaks through to the Water sigil inked into his skin. The sigil runs like a tide in both directions, and it pulls him under: the past on the ebb, the future on the flood. No table time passes. It changes nothing that happens next and never says what Stig tells Matthew. It works on its own for a player who skipped "The Watch in the Dark".
**What it sets up:** the choice Stig makes at the door of fire (W3) is saved and sent to Sam, like the other interludes.
**Reading time:** about 30 minutes along one path, plus the fight.
**Echo:** one, set by the last choice. One use; expiry as Sam rules for all Echoes.
**Same rules as the S10 interludes:** Matthew's time is never a number, a range or a comparison, and Matthew never appears in a future. No god speaks in words. Nothing from the booklet's last page. None of the afternoon's words appear (the list is in the DM notes). Every future here is a *maybe*.

**For the build (the parser skips everything above the first rule):**

*Look.* {past}: warm, faded, sepia, muffled. {future}: cold blue-white, ash in the air, glitching text. Untagged: the present, the cave under water, grey-green. {again}: the loop, the present played wrong (mirrored layout, text that rewinds, paces counting up). The colours drift into each other more as dread rises. Fever dream throughout: let lines repeat, smear, double.

*Figures.* Three, each with a voice style:
- **The boy** (Stig at nine, from under the floorboards): lines written `@boy: "..."`. Small, warm, matter-of-fact. Barefoot, too tall for his age, wet to the knees. Walks with Stig through the past and stays to the end.
- **The future self** (the Watcher; Stig, older, grey from fingertips to elbows, water running off him that never stops): lines written `@future: "..."`. Deep, wet, slightly out of sync, sometimes doubled (two takes of the same line laid over each other). Never fully seen before W2.
- **The keeper** (S1 only): never speaks.

*Whispers.* `~text~` is the future self's whisper bleeding into the passage. More are listed at the end, to scatter by dread.

*Ash.* `^^text^^` is text the black ash is eating: show it greying and crumbling away as the player reads.

*Conditions.* A paragraph starting `?flicker>=3:`, `?flicker<=1:`, `?dread>=3:` or `?seen P2c:` (any passage id) shows only when that holds; the prefix itself is never shown. Several can stack in a row. This is how earlier choices land in W2x and the endings.

*Hub lines.* `*Hub: then go to S1*` under a hub is for the engine, never shown.

*Cutscenes.* The `## Cutscene:` sections at the very end are shot lists, one `- ` line per shot. `- Stig: text`, `- @future: text` and `- @boy: text` are spoken; `A / B` in a @future line means the two voices over each other; anything else is a shot or a caption.

*Sound.* `{sound: name}` on its own line starts a cue at that point. Cue list:
- `drip`: single slow drips in a big space.
- `surf-reverse`: surf played backwards, the sea pulling out (the ebb).
- `surf`: surf forward, coming in (the flood).
- `boards`: an old house creaking; wet footsteps on planks overhead.
- `chimes-slow`: hundreds of wind chimes, slowed down and pitched low, smeared.
- `timbers`: ship timbers groaning, a line creaking taut.
- `rain`: rain on rock, a long drop below.
- `spade`: a spade into wet earth, water filling the hole.
- `breath-reverse`: one long, slow breath, like surf, played backwards; very tired.
- `breath`: the same breath forward, easing out. Used once, in End 3 only.
- `heartbeat-two`: two heartbeats, out of step (his and his future self's).
- `heartbeat-one`: the two fall into step.
- `chalk`: chalk scratching tally marks, faster and faster.
- `toast`: cups clinking in a room, then nothing at all.
- `dirge`: Hans's techno slowed right down into a funeral drone.
- `fire-still`: a roar that doesn't move, like a breaking wave frozen at the top.
- `rewind`: a warble, everything spun backwards (the loop).
- `count`: Stig's own voice counting under his breath, layered, out of time.
- `silence`: everything cuts out for one beat.

*Meters.* `+dread` (0-5) as before: more whispers, more ash, harder saves, a third Hand in the fight. `+flicker` / `-flicker` (0-5, start at 2): how faint the future self is. High flicker, he stutters and goes see-through like a bad lantern (the hand in the old photograph); low flicker, he's solid as stone. Show it on him in W2, the fight and W3.

*Hubs.* E0 offers three past visions and F0 three futures, any order, greyed once done; when all three are done, E0 goes on to S1 and F0 goes on to W1. Each vision ends with "Back". The boy appears in every past vision whatever the order.

*Paces.* Eleven wet footprints, as "paces left". H1 walks two (9 left). Each of the seven visions (three past, S1, three futures) takes one. In L1 they rewind back up to 11 and then snap back. W1 takes one more (1 left). W2 is 0. The endings say "Three": the floor comes back at the third pace, where it went.

*Fight @undertow.* Win goes to W3, loss goes to W3x. Stat blocks below.

*Paintings.* (1) a boy lying under floorboards, lamplight through the cracks, water seeping in, a big wet foot above; (2) a monastery cloister hung with hundreds of wind chimes over a harbour; (3) a ravine edge in rain, a small figure pushing a big one; (4) a drowned stone hall with wave-carved pillars, a robed woman knee-deep pressing water down over black sand, her hands going clear as glass; (5) a schoolroom with water on the floor and blank slates; (6) a small harbour at night, a tavern window blinking on the quay, a ship with grey-green lanterns; (7) a long table, older friends raising cups to an empty chair with a blue-striped tea towel folded on it; (8) a door of fire in a black mountain, a big grey-haired man before it holding a barefoot boy's hand; (9) the future self: a tall grey-haired man waist-deep in black water, grey to the elbows, steam and water running off him, face in shadow. No text, no real faces.

**Fight: The Undertow.** Stig alone, level 5 (HP 38, AC 18). The floor is the mountain's black stone under a hand's depth of water. The door of fire roars at one end. Stig starts at the other, the boy behind him (not a target, can't be hurt). The future self stands between Stig and the door. He is not trying to kill Stig. He is trying to *hold him back*.
- *The future self.* Medium undead (a haunting in Stig's shape), so Turn Undead and Sear Undead work on him. AC 13, HP 45, speed 30. Str 16 Dex 10 Con 14 Int 10 Wis 19 Cha 10. Immune to cold and Frightened. Initiative +0. *Multiattack:* two Holds. *Hold:* +5 to hit, reach 5 ft, 1d8+3 cold; a hit grapples Stig (escape DC 13). *Undertow:* at the start of his turn, a creature he is grappling takes 1d6 cold. *You Can't Hold Everybody (once, when first bloodied):* he says it, in Thorias's words, and every Ash Hand moves up to its speed at once. *Flicker:* at flicker 4 or more he has disadvantage on his first Hold each turn; at flicker 1 or less, Undertow is 2d6.
- *Ash Hand* (two; three at dread 3+). Small undead, grey, crumbling. AC 12, HP 11, speed 20 (swim 30). Initiative +1. *Clutch:* +4 to hit, 1d6+2 cold. They rise from under the door of fire, from the black sand.
- *Hazard: the tide comes in.* At the start of each round the black water spreads one square in every direction from the door. Water squares are difficult terrain. At dread 4+ it starts one square wider.
- Stig's Grave cleric tools all apply (Spare the Dying, Turn Undead, Sear Undead, Toll the Dead, Path to the Grave). He is immune to Frightened, and the script says so. All foe damage is cold on purpose: Stig resists necrotic and is immune to fire. Turn Undead only incapacitates the future self (he can't be frightened either); Sear Undead's radiant damage works as normal.
- Future self at 0 HP: win, go to W3. Stig at 0 HP: no game over; he is held under and comes up gasping, go to W3x. Both lead to the same last choice.

---

## H1. The flake

Eleven paces from your stone to the old man. You counted them on the way over.

One.

You've still got the towel in your fist. You don't remember picking it up.

A bit of ash comes down and lands on your sleeve. You leave it. It's been coming down all day.

Two.

The ash is wet.

Your arm knows that's wrong before you do. Under the cloth the sigil goes cold, then tight. The Water sigil. They inked it into you down in the vault under the monastery, and nobody asked.

It pulls. Out and in at once, like standing in the shallows where one wave is going back and the next is already coming.

{sound: heartbeat-two}

Your heart thumps. Then it thumps again, half a beat late, somewhere outside your chest.

Your foot comes down for the third pace and there's no floor under it.

→ Continue (go to H2)

## H2. Salt

Water to the shin. Cold. Salt on your lips, and you're nowhere near the sea.

{sound: drip}

The cave is still there, sort of. The lamp's on its flat stone, small and far off, like looking up out of a well. The dead Heart ticks. Katy is halfway through a word and stays halfway through it. Nobody moves. Nobody looks at you.

Down at the far end, where the old man lies, somebody is standing in the water. Tall. Back to the lamp, so all you get is the outline. Water is coming off him, more than any man could hold, and it doesn't stop coming.

He's standing between you and the old man.

You can't be frightened. Not since they marked you. So this isn't fear. It's what the old hands meant when they wouldn't sleep aboard a ship that came back empty.

Haunted.

~Count again.~

→ Continue (go to H3)

## H3. Someone small

"You're the big one."

There's a boy on a rock next to you with his feet in the water. Nine, ten. Barefoot. All elbows and knees, in a shirt somebody else wore out first. He looks at you like you're weather.

@boy: "It's going out. Hold on to me or you'll get lost. Everyone does, first time."

You've never seen him before. Your hand knows how big his is before you take it, though.

The water starts pulling. Backwards, and down.

{sound: surf-reverse}

@boy: "Don't let go. And don't look at him. He likes it when you look."

→ Take the boy's hand and let the tide take you both. (go to E0)

## E0. The ebb

The water goes out, and it leaves things behind on the sand. Not shells. Days. The ones you put down deep so they'd stay there.

Three of them, still wet. The boy is nine again; he always is, back here. He squats down and pokes at them like they're crabs.

@boy: "That one's mine. That one's yours. That one's both of ours."

The one at the far end of the water hasn't moved. You'd swear to it.

*Hub: then go to S1*

→ A crack of lamplight between floorboards. (go to P1a)
→ Wind chimes, and a boy on a quay. (go to P2a)
→ A ravine in the rain. (go to P3a)

## P1a. Overhead {past}

{sound: boards}

Rosa's. You'd know it blind. Cheap rosewater over spilled wine, and under both of them the harbour, because the bad end of the city always stank of the harbour. Two doors down somebody is murdering a sea shanty. The ceiling is so low you have to stoop.

The boy lets go of your hand. He kneels, gets his fingernails under a loose board, and lifts it like he's done it a thousand times. He slides under and pulls it shut over himself.

@boy: "This is where I go."

His voice comes up from under your feet.

You look down. You're barefoot too, now. Your feet are grey and wet, and there's a trail of big wet prints across the floor behind you. They stop where you're standing. Right on top of his board.

Downstairs Rosa is telling somebody there's no boy here, love, never has been, have a drink.

You remember this from underneath. Lying in the dust with your nose to the crack, and something heavy and wet standing over you for hours. Not moving. Not saying anything.

{sound: heartbeat-two}

An eye at the crack. Blue.

→ Kneel down and tell him it's all right. (go to P1b) -flicker
→ Back off, out of the light, so he never sees your face. (go to P1c) +dread

## P1b. Kneeling {past}

You get down on your knees. The board creaks. You put your mouth close to the crack and keep your voice low.

"It's all right. Nobody's coming. I'll sit up."

Under the floor he lets out a breath. A long one. Too long for a boy that size. You've let that same breath out at the end of every bad day you've had, and you never knew where you picked it up. Now you do.

You stay there on your knees until the shanty two doors down gives up.

When you get to your feet, there's a man in the doorway. Grey to the elbows. Dripping on Rosa's floor. He isn't looking at you, he's looking at the board where the boy is, and his voice comes out wet and doubled, like two men saying it a half-beat apart:

@future: "Stop what you're doing."

You were only being kind.

The doorway's empty.

→ Back (go to E0)

## P1c. Out of the light {past}

You step back out of the stripe of light and hold still. You were always good at that. Making yourself into nothing, under a floor or on top of it.

The eye at the crack hunts for you. Doesn't find you. After a long while it closes.

All those nights you lay there wondering what it wanted.

Turns out it didn't know either.

Behind you, wet and doubled:

@future: "Stop what you're doing."

You turn round. Nobody. There are wet prints on the threshold, coming in. None going out.

~Nobody's coming for the big one.~

→ Back (go to E0)

## P2a. Letters and wind {past}

{sound: chimes-slow}

Wind chimes. Hundreds of them along the cloister of the Monastery of the Great Winds: glass, shell, bent copper, all going at once. Slowed down, they sound like a ship's hull groaning. When you were small you thought the priests could understand them. Maybe they could.

The boy is at the long bench. Twelve now, already too tall for it, a reed pen in his fist. A priest with ink up to her wrists has her hand over his. Dip. Downstroke. The first letter of his name. Yours. It comes out crooked, and the ink runs off the end in a fat drop.

She doesn't tell him off. She says, *Again.* He does it again. And again, till his wrist hurts and the letter stands up straight.

You still hold a pen like she taught him.

You lean over his shoulder. Rows of that one letter, getting better as they go down the page. At the bottom, where he hasn't got to yet, the letters are already there, and already going grey: ^^A A A A A^^

@boy: "Why does it keep going?"

You don't know. You didn't know then either.

Out of the window, down the hill, the masts in the harbour sway.

→ Continue (go to P2b)

## P2b. Two boys on the quay {past}

{sound: timbers}

Then it's the quay, and the boy is fourteen and nearly a man's size, and the wind stinks of tar.

Thorias is there. Course he is. Quick, grinning, half the boy's height, as halflings are, sea-bag on his shoulder like he's already gone. A ship's taking on cargo behind him and a mate is yelling names off a list. *Hennos's crew! Aboard, aboard!* [SAM?: Captain Hennos is still unexplained; only his crew is named, no face, no ship's name]

"Come with me," Thorias says to the boy. "You're the size of two men. They'll pay you for two."

You've gone over this quay a hundred times and you've never been able to remember what you said to him. Now you're standing right behind yourself, close enough to see the sunburn on the back of your own neck, and you still can't hear it. The boy's mouth moves. The chimes up the hill drown it out.

Thorias looks at the ship. Looks at the boy. Then, just for a second, he looks past him. At you.

→ Reach past the boy and grab Thorias by the collar. (go to P2c) +dread
→ Put a hand on the boy's shoulder and let Thorias go. (go to P2d) +flicker

## P2c. Holding on {past}

You reach past your own shoulder and grab Thorias by the collar. Your fist closes round the whole thing.

He doesn't fight. He looks at your hand, then up at you. Still smiling. Gone a bit sad round the edges.

"You can't hold everybody, Stig."

Then your hand's empty, and he's up the gangplank, and he's gone. It's a memory. You can grab it as hard as you like. It goes the same way every time.

You couldn't hold him at the flooded docks either, by the stone gargoyle with water up to its chin. Or at the ravine.

The ship pulls out. At the rail stands a tall man, grey to the elbows, dripping on the deck. He lifts one hand at you. Not a wave. Flat, palm out. The way you'd stop a cart.

~You can carry it. You always could.~

→ Back (go to E0)

## P2d. Letting go {past}

You put your hand on the boy's shoulder. He's shaking. You didn't know you'd been shaking that day.

Thorias laughs and waves and runs up the gangplank like it's the best day of his life. Maybe it was. The boy waves back. Under your hand his shoulder goes still.

The two of you stand on the quay till the ship's a scrap of sail. Then the boy turns and goes back up the hill to his letters, and you go with him.

It's the last good one you've got of him.

At the far end of the quay, where the water's slopping over the boards, somebody is standing and watching the same ship go. When you turn away, he shivers out of true, like a reflection when wind crosses a puddle. Then he's back.

→ Back (go to E0)

## P3a. The edge {past}

{sound: rain}

Rain. A ravine in the rain. Wet black rock all the way down, and white water at the bottom.

You know this one. You've told it round the fire a few times. The cleric got pushed, the cleric lived, the cleric is hard to kill. People laugh at that bit.

Nobody's laughing here. Here it's a hand in the small of your back, small and hard, and Thorias's voice in your ear, cracking: *They took my wife and children.*

The boy is on the far side of the ravine, too far to do anything. He's got both hands over his mouth.

Your heel is over the edge. The rock's slick. Way down in the white water, somebody tall is standing still, looking up.

→ Hold the moment (Wisdom save DC 15: go to P3b / P3bx)

## P3b. His face {past}

You hold it. The rain hangs where it is. You turn your head and you look.

You never saw his face. Last time you were already falling. This time you see it.

He's crying. He's shoving you off a cliff with tears running down into his collar, and his mouth's still going, *my wife, my children, they took them, they took them.* He isn't even looking at you. He's looking at his own hands, like they belong to someone else.

Past his shoulder, out over the drop, there's the other one. You. Grey to the elbows, standing on thin air like it's a deck, water pouring off him down into the ravine. He's not watching Thorias. He's watching you, and he's saying something too.

@future: "Stop. Stop. Stop what you're—"

The push lands. You go. You let yourself go.

On the way down you think the thing you've never let yourself think. *Did anyone ever go looking for them?* [SAM?: a question Stig asks himself, nothing more. What happened to Thorias's family is Sam's; this can be cut]

~Who's missing?~

→ Continue (go to P3c)

## P3bx. Under {past}

Your heel slips and you're falling.

You don't hit rock. You hit water, deep and black and much too cold, and it shuts over your head. You kick for the light. Something takes hold of your ankle.

A hand. Big as yours. Not dragging you down. Just holding on, with no idea in it of ever letting go. You know that grip.

{sound: heartbeat-two}

A voice right up against your ear, bubbling:

@future: "I could keep you down here. You'd be safe. You'd never have to get to the door."

You stay down a long time. Long enough to think how easy it'd be. Long enough to be ashamed of thinking it.

Then the hand opens, all at once, like it only wanted you to know it could. You come up into the rain, coughing. Across the ravine the boy is crying.

→ Continue (go to P3c)

## P3c. The grave in the north {past}

{sound: spade}

The rain stops. The ravine folds up like a chart.

Cold ground. A spade in your hands, the edge worn bright. You're up north, digging, and you know whose grave it is. The old elf woman with her ears cut off. Doloris. You put her in it yourself and said the words. Whatever she was supposed to have done, nobody deserves that.

The hole fills with water from the bottom as fast as you dig it out.

You keep digging.

@boy: "Who's that one for?"

"Old woman. Somebody had to."

@boy: "And that one?"

He's pointing past you. There's another grave next to hers, one you don't remember. Another past that. A whole row, running off into the trees, every one with water seeping in at the bottom. You've dug too many. They're all still here.

At the end of the row somebody else is digging. Grey to the elbows. Stroke for stroke with you. He's on the last one, and it's bigger than the rest.

There's a wooden marker at the head of it. Somebody's started carving a name. The first letter's crooked, with a blot running off the end. ^^The rest has been eaten away.^^

→ Back (go to E0)

## S1. Slack water {past}

{sound: breath-reverse}

The ebb keeps going. Further out than any tide you've seen. In a real harbour the boats would be lying on their sides in the mud by now.

The boy is gripping your hand hard enough to hurt.

When it stops, you're standing in a hall. Not a cave, a hall: square, smooth, cut by people who knew what they were doing. The pillars are carved like waves caught right at the top before they break. Valerian. Nobody tells you. You just know.

You've been here. The crew came down here, into what's left of it, under the monastery, and a voice in the dark said the vaults delay the end but don't stop it.

Except nothing's left-over yet. It's whole. It's full of water, one big still sheet of it, and at the bottom there's black sand. The sand isn't lying flat. It shifts like somebody turning over in their sleep, shoving up at the water from underneath.

A woman in a long robe is standing knee-deep in the middle of it with both hands flat on the surface, pushing down. Just pushing, like you'd lean on a pot lid to stop it boiling over. On the back of one hand, dark and fresh, is your sigil. Same lines. Same water. [SAM?: see DM notes]

Her arms are shaking. Her hands have gone clear as glass from the fingertips back; you can see the sand through them. She's been at this a long, long time. She's nearly worn through.

She's breathing with the water. In when it heaves up. Out when she pushes it down. Slow and long. You know that breath. Hers is getting thin.

She looks up. Not round the hall. At you. At your arm.

She doesn't speak. Maybe she can't any more. But her face, when she sees the mark on you, goes the way a sailor's face goes at four in the morning when he hears the next man's boots on the ladder.

@boy: "She's tired."

"I know."

Over at the edge of the hall the tall one is standing in the water, grey to the elbows. He's not looking at you. He's watching her hands like an apprentice. He's holding his own hands out flat in front of him and pushing down on nothing. Copying her.

→ Continue (go to S2)

## S2. The turn

{sound: silence}

Nothing moves for a moment. Not the water, not the sand, not her, not you. Slack water, the old hands call it. The dead minute at the bottom of the tide, after it's gone out and before it comes back. You always liked it.

Then it turns.

{sound: surf}

You feel it in the sigil first, then in your shins. The pull's gone the other way. The water's coming back in, and it isn't the past any more. It's what hasn't happened yet, rolling in out of the dark a wave at a time.

After every ebb comes a flood. You've said it at a lot of gravesides. You meant it kindly.

The boy tugs your hand.

@boy: "We've done this before."

"Done what?"

@boy: "This bit. Watch."

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

Eleven paces from your stone to the old man. You counted them on the way over.

Eleven. Ten. Nine.

Wrong way. Again.

One. Two. The bit of ash lifts *off* your sleeve and floats up into the dark, dry, like it never landed.

The lamp's on the wrong side of the cave. Katy finishes her word, then says it again backwards. Saphira has her back to the wall like always, only it's the other wall. Hans is humming that beat of his, slowed down so far it isn't a beat any more.

{sound: dirge}

You look down. You're sitting on your stone. You haven't got up yet. The old man is still waiting for an answer.

Then you're standing, three paces in.

Then you're sitting.

@boy: "Told you. It goes round. You'll get used to it."

He thinks about it.

@boy: "You won't, actually."

~Eleven. Ten. Nine.~

There are wet footprints by your stone. Big ones. They come from the old man's end of the cave, all eleven paces, and stop exactly where your boots are. Somebody's already walked it. Walked it backwards.

The water's coming in fast now.

→ Let the flood come in. (go to F0)

## F0. The flood

It comes in carrying things. Days again, only these haven't happened yet. Some you've hoped for, some you've lain awake over. The water can't tell them apart.

None of it's happened. Maybe none of it will. It's still cold.

The boy's still with you, still holding on. He isn't getting any older. You are. You can feel it in your knuckles, in your knees.

*Hub: then go to W1*

→ A schoolroom, with slates. (go to Q1a)
→ A window blinking over a harbour. (go to Q2a)
→ A long table, and an empty chair. (go to Q3a)

## Q1a. Slates {future}

Low roof, big window, benches. Children on the benches, a dozen and more, all sizes, the way you get them when nobody's picking. Slates on their knees. Chalk dust hanging in the light.

Your school. You've never seen it and you'd know it anywhere. Fraas-Den, from the light; the sea's right out there, grey-green and close. You always pictured it by the sea.

You're up the front with a stick of chalk, and you're greyer. On the board behind you, in your best hand, is the line you've given them to copy:

*After every ebb comes a flood.*

One lad's too tall for his bench. There's always one. His letters come out crooked.

"Again," you tell him. He does it again.

It takes you a second to see it's the boy you came in with. He's sitting between two kids like he's always been there, and nobody notices him but you.

This is it, then. The thing you've wanted. You let yourself stand in it for a minute, because it's warm, and it smells of chalk and bread and wet wool.

Then you notice the floor's wet.

→ Continue (go to Q1b)

## Q1b. The back desk {future}

{sound: chalk}

A finger's depth of water, spreading from the back of the room. The children don't notice. They lift their feet a bit and carry on writing.

You look at the slates. Blank. Every one. They're writing, chalk scratching, heads down, and none of it stays. It runs off like rain off a window. On the board behind you your line is going too: After every ebb comes a ^^flood^^.

In the back corner, at the last desk, knees jammed up past the top of it, sits the one from the water. Grey to the elbows. Bent over a slate of his own. His is the only writing that stays. Tally marks. A row of them, and one more off at the end on its own.

He lifts his head. Still can't see his face. You hear him, though, wet and doubled:

@future: "Stop what you're doing."

"What am I doing?"

@future: "Teaching them that."

He points at the board. At the word going grey.

@future: "It isn't true. Not for the one who stays."

The water's at the children's ankles.

→ Get them out. All of them. Now. (go to Q1c) +flicker
→ Keep teaching. Write it up again so they don't see you're scared. (go to Q1d) +dread -flicker

## Q1c. Out {future}

You don't think about it. You're across the room with your arms out like you're herding geese, *out, out, all of you, leave the slates*, and they go, giggling, splashing, out the door into the light. You count them as they pass. You always count them.

Twelve. Thirteen. All out.

The boy you came in with hasn't moved off his bench.

@boy: "You didn't count me."

You turn round. The room's empty except for the water, the boy, and the back desk with its slate. The one who sat there is gone. Or nearly. He's at the corner of your eye, there and not there.

You count the marks on his slate. You can't help yourself.

Thirteen. And one more off at the end, a little apart, like whoever made it wasn't sure it belonged.

→ Back (go to F0)

## Q1d. Again {future}

You turn to the board and write it again, slow and careful. *After every ebb comes a flood.* You keep your voice easy. You tell the tall lad *again* and he does it again, and the water's at their knees, and you say *again*.

They trust you. They see a big man who isn't worried, so they don't worry, and the chalk scratches, and nothing stays on the slates.

At the back desk he's nodding along every time you say it. He's very solid now. You can hear the water coming off him onto the floorboards, steady as a bilge pump.

~Wring it out. Again.~

→ Back (go to F0)

## Q2a. Long, short, short, long {future}

{sound: surf}

Night, and a little harbour. A few fishing boats knocking together. Houses with their backs to the wind. Too small a town for anyone to bother with. Grisshaven, says the part of you that knows this coast. Myratma's shore.

At the end of the quay there's a tavern with a lamp in the window, and the lamp is blinking out to sea. Long. Short. Short. Long. Over and over. The sign over the door says THE LIGHTHOUSE, and for the first time it crosses your mind that maybe it was never a joke.

You're standing on the quay. Your hands have got old. The boy's sat on a bollard next to you, swinging his feet. He hasn't changed.

@boy: "It's calling someone."

Out in the dark a ship is answering the lamp. You can't see her yet. You can hear her: timbers working, a sail slapping, somebody on deck calling the depth. Sailors' voices. You'd know them in your sleep.

→ Continue (go to Q2b)

## Q2b. The quay {future}

{sound: timbers}

She comes alongside. You still can't make her out properly; she's all shadow and lantern-light, and the lanterns are the wrong colour, the grey-green of deep water.

A line comes snaking out of the dark and drops at your feet. Somebody wants you to make her fast.

Somebody on deck calls your name. Not *Stig*. Your real one. *Astychon.* Nobody round here calls you that. Nobody has in years. [SAM?: who calls is deliberately unknown, see DM notes]

At the rail, tall and dead still, is the one from the water, holding the other end of the line. And right beside him, the same man again, holding the same line. Two of him, half a beat apart.

One of them says:

@future: "Make it fast."

The other says:

@future: "Don't. Stop what you're doing. Don't."

They say it at the same time. You can't tell which mouth is which.

@boy: "He doesn't know either."

→ Pick up the line and make it fast. (go to Q2c) +dread -flicker
→ Leave it lying there. You answer to Stig, or to nothing. (go to Q2d) +flicker

## Q2c. Made fast {future}

You pick it up. Your hands do it before you've decided. A line comes to you, you make it fast. Round the bollard, cross, cross, hitch. You could do it asleep.

The line goes tight. The ship settles against the quay with a long groan, like a dog lying down.

Then it keeps pulling. Not hard. Steady. The ship's going back out, and it's taking the quay with it, and the town, and you, because you made it fast, and you've never once in your life cast off a line you made fast.

At the rail there's only one of him now. Solid. He lifts his hand: come aboard. Plenty of room.

You stand there with your feet braced, holding on, while the boards creak under you and the boy pulls at your sleeve.

→ Back (go to F0)

## Q2d. Unanswered {future}

You leave it. The line lies on the wet stones like a sleeping snake.

They call your name again. *Astychon.* Both voices. Patient. Like they know you'll come down to this quay again someday, and again after that.

You don't answer. Your name's Stig. It's done you this long.

At the rail the two of him blur into each other like lanterns seen through rain, and for a second neither of them's really there.

The ship lies off the quay a long time. Then the window blinks *long, short, short, long*, and she backs off into the dark the way she came, and the line slithers after her into the water.

You don't know if that was brave or just stubborn. With you it's usually hard to say.

→ Back (go to F0)

## Q3a. The toast {future}

{sound: toast}

A long table in a warm room. Candles. Bread torn, not cut. Your kind of night.

The crew are round it, older, all of them. Katy with grey coming in at her temples and the ukulele propped against her chair. Saphira with her back to the wall where she can see the door. Hans at the end, too big for his chair, chest plate warm. Thorn by the door with his bow in reach. More faces past the candlelight, laughing at something.

None of them look at you. None of them can.

There's one empty chair. On the seat lies a tea towel, folded. Blue stripes. The one you've wrung out a hundred times. Somebody's folded it the way you fold it.

Katy stands up and lifts her cup to the empty chair. Everyone lifts theirs. Nobody says a name. Nobody needs to.

Hans speaks up, flat and careful as ever:

"He would have hated this. He would have offered to wash the cups."

They all laugh. Then they stop.

{sound: dirge}

Katy starts singing something. Gets one line in. Sits back down.

@boy: "Whose chair is that?"

Behind the empty chair, one grey hand on the back of it, stands the one from the water. Watching them. He's dry here, for once. He stands like a man outside a window, looking in at a house he's not allowed back into.

→ Continue (go to Q3b)

## Q3b. Whose chair {future}

You know whose chair it is. You knew when you saw the towel.

They're older, and they're all right. A warm room, bread, each other. Whatever got paid for this, it bought this.

You'd take that deal. You've taken worse.

Behind the chair, he turns his head toward you. Slowly. Like an old man with a stiff neck.

@future: "Stop what you're doing."

"I'm not doing anything."

@future: "You're agreeing."

→ Sit down in the empty chair. Just for a minute. (go to Q3c) +dread -flicker
→ Fold the towel again, properly, and leave it where it is. (go to Q3d) +flicker

## Q3c. The chair {future}

You sit. Nobody sees. The chair's just the right height.

From here you can see every face. Katy wiping her eyes on her wrist. Saphira watching the door. Hans not looking at the chair. Very carefully not looking at it.

The one behind you puts his grey hand on your shoulder. Heavy, wet, cold right through. You know that weight. You've put that hand on a lot of shoulders.

@future: "There. That's what it's like. Every night."

You can see the candles. You can't feel them.

→ Back (go to F0)

## Q3d. The towel {future}

You pick up the towel. Shake it out. In half, then in three, like always, and you lay it back on the seat square with the edge.

Hans looks at the chair. His head tips a fraction.

"The towel has moved," he says.

"No, it hasn't," says Saphira.

"It has been refolded," says Hans. "Correctly."

Nobody says anything after that. Katy reaches out and touches the towel with one finger, then pulls her hand back.

Behind the chair the one from the water shudders, like something seen through a breaking wave, and for a second you can see the far wall through his chest.

→ Back (go to F0)

## W1. One pace

{sound: fire-still}

The flood's all the way in. The cave, the lamp, the old man at the far end: all of it wobbling under a grey-green skin of water, like you're lying on the bottom looking up.

One pace left.

Then the water isn't water any more. It's heat. The cave falls away and you're inside a mountain, black rock, dark as the inside of a fist. In the middle of it there's a door made of fire. It isn't burning. It *is* the fire, standing up in a black stone frame, roaring without moving, like a wave that's stopped at the top and can't come down. [SAM?: the door of fire, see DM notes]

The crew are here. Katy with ash in her hair. Saphira with her back to the rock. Hans behind you, chest plate warm, humming low. Thorn at the edge of the light with his bow. And more faces than the light reaches.

Nobody's told you how the door works. You know anyway, like you know things in dreams. It opens one way. Somebody goes in and stays on the other side. Then it shuts behind them and everyone else gets to walk on.

The boy has hold of your hand. Hard.

Nobody says anything. Thorn looks at his bowstring.

You're big. You can carry a lot. You've always said so.

And between you and the door, waist-deep in black water that's got no business being here, back to you, head down, is the one who's been at the edge of everything tonight. The water coming off him hisses into steam in the heat. Under the surface he's got something in both hands. Holding it down or holding it up, you can't tell.

Those shoulders. That stance: feet wide, braced, like a man on deck in a blow.

~Who's missing?~

→ Turn him round. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

You put your hand on his shoulder and he turns round.

It's you.

Older. Or just more tired. Grey in the skin as well as the hair, grey from the fingertips to the elbows, the same grey as the old man's arm. Water's running out of his sleeves and his collar and the corners of his eyes, and it doesn't stop. Blue eyes. Red round the rims. They haven't shut in a long time.

He looks at the boy first. His face does something you've never seen your own face do.

@future: "Stop what you're doing."

"What am I doing?"

@future: "What you always do. Somebody's got to carry it, so you grab it before anyone else can get a hand on it. Every grave. Every kid. Every time you said *put it on me*."

"What's through there?"

@future: "A post. You stand it."

He holds his hands up. The fingertips have gone clear, like the woman's in the old hall, like pond ice. You can see the fire through them.

@future: "You don't die. I thought you would. You just stand there holding it down, and you don't sleep, and nobody comes to take over. No ebb in there. It's always slack water."

"Then why come back?"

He opens his mouth. Shuts it. When it comes, it's two voices again, and this time they don't agree.

@future: "To stop you."

@future: "To see who'd come."

@future: "Every time, I hope it'll be someone else at the door. It's always you."

@boy: "He's lying."

@boy: "No he isn't. Neither of him is."

@future: "And I'm only one tide. In there you can see all of them. I can only ever come back down this one."

The door roars without moving. The crew stand there waiting for someone to step up. Behind the door there's nobody. You can feel it from here, like a grave dug and left open.

@future: "If you go in, somebody's on watch. If you don't, nobody is, and it all comes up. The sand, the ash, all of it. It's been coming up since the last one walked off."

He's shaking.

@future: "I can't tell you which. I've had longer than anyone to think about it, and I still can't tell you."

He reaches for you. Not to hurt you. To hold you back, like you'd have held Thorias.

→ Break his grip. (go to @undertow)

## W2x. The face, and all of them

{sound: heartbeat-two}

You put your hand on his shoulder and he turns round.

It's you. Grey from the fingertips to the elbows, like the old man's arm. Water pouring off his sleeves, hissing into steam. Blue eyes, red-rimmed. They haven't shut in years.

@future: "Stop what you're doing."

And you get it, all at once.

?seen P1c: You backed out of the light so the boy would never see your face.

?seen P2c: You grabbed Thorias by the collar.

?seen P3bx: You let the water hold you, and thought how easy it would be.

?seen Q1d: You wrote the line up again so the kids wouldn't be scared.

?seen Q2c: You made the line fast.

?seen Q3c: You sat down in the chair.

Every time the water came tonight, you held on, and he got a bit heavier. There's hardly a pace left between you.

@future: "Stop. Please. Or don't. I don't know. I've had longer than anyone to think about it and I still don't know."

The water goes black. Small grey hands come up out of it all round you, crumbling, grabbing.

He reaches too. To hold you back, like you'd have held Thorias.

→ Break his grip. (go to @undertow)

## W3. Slack

He goes down on his knees in the black water. Slowly, like a big man with bad knees. You know how that feels.

He isn't gone. Things like him don't go. He kneels there with his grey arms across his thighs, looking up at you, and the water runs out of him into the water.

@future: "You always could break a grip. Never could let go of one, mind."

{sound: silence}

The door roars without moving. The crew wait. The boy still has your hand. Behind the fire, the empty post waits too.

Nobody's going to choose for you. You'd have hated it if they did.

{sound: heartbeat-two}

→ Step forward. If somebody has to stay, let it be you. (go to End 1)
→ Step back. Do what he came all this way to ask. (go to End 2)
→ Count heads. All of them, this time. (go to End 3)

## W3x. Held

He holds you under. Black water, cold all the way down, his grey hands on your shoulders, gentle, like you'd hold a man still for the surgeon.

@future: "See? I could've kept you."

You could stay. It'd be dead easy to stay.

Then you're up and gasping, on your hands and knees in a hand's depth of water. He's kneeling across from you with his grey arms on his thighs, watching you get your breath back. He let you go. He always does, in the end.

The door roars without moving. The crew wait. The boy's got your sleeve in both fists.

{sound: heartbeat-two}

→ Step forward. If somebody has to stay, let it be you. (go to End 1)
→ Step back. Do what he came all this way to ask. (go to End 2)
→ Count heads. All of them, this time. (go to End 3)

---

## End 1. The Keeper

You let go of the boy's hand. Hardest thing you've done all night. He doesn't cry. He just looks at you like you're weather.

You step forward.

Nobody stops you. You were too quick for them. You made sure of that.

The fire closes over you, and it isn't hot. It's bright, and all at once you can see a very long way.

The crew on the other side of the door, already turning to go, Katy with her hand over her mouth. The Hills, bare and wet where the ice used to be. Black sand shifting in its sleep under every vault there is. And the woman in the old hall, way down under the monastery, still pushing, nearly worn through. She lifts her head like she felt you come on watch, and nods to you across the whole world.

Your body stands in the flame like a rock in a stream. The rest of you spreads out thin and wide through the fire. The sand pushes up against it. The fire's you now, so you push back. It's not that bad. You're big. You can carry a lot.

{sound: drip}

You watch. You don't sleep. Nobody comes to take over.

After a while (there's no ebb in here to tell the time by) your fingertips start going grey. Once, just once, you have to stop and think what your name is. You look out through the fire. Far off and tiny, like looking up out of a well, there's a cave with a lamp on a flat stone, and a big man walking across it, counting his paces, with a bit of ash on his sleeve.

You know what you'll say to him. *Stop.* You don't know yet if you'll mean it.

?flicker<=1: It doesn't take you long to get used to it. You had all night to practise.

?flicker>=3: Even so, there's a part of him that kept flickering, and it's still out there on the other side of the fire, yelling *stop* at a man who can't hear him yet.

?seen P1b: Somewhere a boy is lying under a floor, and you told him you'd sit up. You will. From in here you can see every floor there is.

{sound: heartbeat-one}

Three.

Your foot comes down on stone. The cave's back: ash, lamp, the dead Heart ticking. The other eight are just paces, and you walk them. Your hands are cold to the elbow and they'll stay cold a while. You put one on the old man's shoulder anyway and leave it there.

The sigil's gone quiet under your sleeve. Quiet, not done. The tide turns. It doesn't finish.

> **Echo: Hold the Line.** Before you roll a Constitution check, or a Strength (Athletics) check to swim, climb or keep your grip, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the water showed him, see below] At the door of fire: he stepped forward. He let go of the boy's hand to do it. Hans noted: the cleric stopped between one step and the next. Two heartbeats, then one. His hands are cold to the elbow. He told me it was nothing. He has never lied to me before. I have logged it as weather.

## End 2. Another Way

You take one step back.

It's about the smallest thing you've ever done, and every bit of you argues with it. Every grave, every kid, every *put it on me*, all of it hauling you forward like a rip current. You plant your feet and step back anyway.

He looks up at you from his knees.

He flickers. Hard. Like a lantern swinging in a gale.

?flicker>=3: He goes easily. Almost glad, like he's been waiting all night for someone to let him.

?flicker<=1: He doesn't go easily. He's been solid a long time; you saw to that. He hangs on.

His hand, held up between you, goes thin. You can see the fire through his fingers, then through his wrist, and then the grey drains out of it and it's just a hand. Brown, scarred. Yours.

@future: "Thank you."

@future: "What have you done?"

Both at once, half a beat apart. Then he's gone, and there's just water where he was, settling.

The door roars without moving. Nobody goes through it. Way down under the monastery, in the old hall, the woman's breathing gets thinner. It doesn't stop.

The boy lets go of your hand. He doesn't look scared. He looks like you did at twelve with a pen in your fist.

@boy: "So there's another way. There has to be. I'll go and look."

He runs off into the dark of the mountain, barefoot, splashing. You let him go.

?seen Q2d: Somewhere a ship backs out of a little harbour, and nobody on board calls your name again.

{sound: heartbeat-one}

Three.

Your foot comes down on stone. The cave's back: ash, lamp, the dead Heart ticking. There were wet footprints by your stone, eleven paces of them, coming the other way. You look back. Gone. The floor's dry. You don't know what that means yet. You walk the other eight paces and crouch down by the old man, and your hands are warm.

The sigil's gone quiet under your sleeve. Quiet, not done. The tide turns. It doesn't finish.

> **Echo: Another Way.** Before you roll an Intelligence (Arcana or Investigation) check to find a way out, a way through or a way round, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the water showed him] At the door of fire: he stopped. He stepped back, and his future self faded. Hans noted: the cleric stopped between one step and the next. Two heartbeats, then one. Afterwards he looked at the floor by his stone for a long time. It was dry. It had always been dry. I checked. I checked twice.

## End 3. And Me

You count heads. You've done it at the end of every watch you ever stood.

{sound: count}

Katy. Saphira. Hans. Thorn. The faces past the light, one at a time. The boy. The man on his knees in the water.

One short.

You count again. Still one short. So this time, instead of looking along the line, you look down. At your own hands. Your own boots in the black water.

You put your hand flat on your chest, like the woman pushing on the water, and you say it out loud for the first time in your life.

"And me."

?seen Q1c: Fourteen marks for thirteen kids. One off on its own.

?seen P1b: The boy looks up at you, same as he did through the crack in the floor.

On his knees in the water, he goes very still.

Then you do something you've never done. You turn round to the crew, and you don't step forward. You hold your hand out.

Katy takes it first. Then Saphira, after a second, like it costs her. Then Hans, his big hand warm round all of yours. Then Thorn, without a word. Then the faces past the light. The boy slaps his little hand on top of the pile.

All of you together put your hands flat on the door.

It doesn't open. Nobody asked it to. But it stops roaring. For the first time, it listens.

?seen Q3d: Hans looks at your hand on the door, then at the towel over your shoulder. "Correctly," he says, to nobody.

{sound: breath}

And behind it, for one breath, the empty post doesn't feel so empty. Nobody's gone in. Maybe it can be stood from this side, in turns, like any other watch. Nobody's ever tried. Way down in the old hall, you could swear, the woman with the clear hands lets out a long breath and doesn't rush the next one.

He's sitting by the rock wall now, out of the water, a little apart, rubbing his bad knee.

@future: "So that's how."

He scratches his jaw.

@future: "Huh."

{sound: heartbeat-one}

Three.

Your foot comes down on stone. The cave's back: ash, lamp, the dead Heart ticking. You walk the other eight paces. Before you crouch down by the old man you look back once at your stone, then along the faces. Five. Six, with you.

The sigil's gone quiet under your sleeve. Quiet, not done. The tide turns. It doesn't finish.

> **Echo: Count Yourself In.** Before you roll a Wisdom (Perception) check while you are keeping watch or looking out for your companions, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the water showed him] At the door of fire: he counted himself in and asked the crew to carry it with him. Hans noted: the cleric stopped between one step and the next and counted under his breath. He counted to six. There are five of us in this cave, plus him. I have recounted. He is correct. He has never counted himself before. I have been keeping track.

## What the water showed him (first lines of every "Sent to Sam", one per passage reached)

- **The floorboards, knelt (P1b):** Hans noted: as a boy the cleric hid under the floor at Madame Rosa's, and something stood over him every night. He has found out what it was. He knelt down and told it it was all right.
- **The floorboards, stepped back (P1c):** Hans noted: as a boy the cleric hid under the floor at Madame Rosa's, and something stood over him every night. He has found out what it was. He stepped out of the light.
- **The quay, held on (P2c):** Hans noted: he tried to hold Thorias back on the quay. Memory does not allow edits. I have tried.
- **The quay, let go (P2d):** Hans noted: he let Thorias go on the quay, with a hand on his own younger shoulder. He keeps that one like a stone in his pocket.
- **The ravine, saw his face (P3b):** Hans noted: he saw Thorias's face at the ravine for the first time. Thorias was crying. He is asking himself whether anybody went looking for Thorias's family. [SAM?: a hook only if Sam wants it]
- **The ravine, went under (P3bx):** Hans noted: at the ravine he went under, and something held his ankle, and offered to keep him there, and let go.
- **The grave (P3c):** Hans noted: he dug the old woman's grave again. There was a row of them. The last one had a crooked letter on it.
- **The old hall (S1):** Hans noted: he stood in the Water Vault before it was a ruin. A woman with his sigil on her hand was holding black sand down under the water, and her hands were going clear. She looked at him like the next watch. [SAM?]
- **The loop (L1):** Hans noted: for a moment the cleric counted his paces backwards. My clock agrees with him. My clock is not supposed to agree with him.
- **The school, got them out (Q1c):** Hans noted: in his school, when the water came, he got the children out first. He counted fourteen marks for thirteen children.
- **The school, wrote it again (Q1d):** Hans noted: in his school, when the water came, he wrote "After every ebb comes a flood" on the board again so they would not be afraid. Someone told him it is not true for the one who stays.
- **The harbour, made it fast (Q2c):** Hans noted: at a harbour with a blinking window, someone called him Astychon and threw him a line. He made it fast. [SAM?]
- **The harbour, left it lying (Q2d):** Hans noted: at a harbour with a blinking window, someone called him Astychon. He did not answer to it. [SAM?]
- **The toast, sat down (Q3c):** Hans noted: he saw us, older, raising our cups to his empty chair. He sat in it. I said he would have offered to wash the cups. I would say that. I have saved the line.
- **The toast, folded the towel (Q3d):** Hans noted: he saw us, older, raising our cups to his empty chair. He refolded the towel on it. Correctly. I noticed. Apparently I will notice.
- **Went down in the fight (W3x):** Hans noted: at the door, his future self held him under, and let him go.

**Never sent:** why the sigil answers the ash, what the old man's blood told him, whether he keeps the secret, who called his name on the quay, or what is really behind the door.

## Whispers (the future self's voice, scattered by the game as the dread grows)

- Count again.
- Who's missing?
- Stop what you're doing.
- You can carry it. You always could.
- Put it on me.
- Eleven. Ten. Nine.
- Hold the line, boy.
- Nobody's coming for the big one.
- After every ebb.
- Don't look up.
- Wring it out. Again.
- It's always slack water.
- I can't tell you which.
- Don't stop.

## Cutscene: flake

- The cave, gone still. Ash hangs in the lamplight and doesn't come down.
- A bit of ash lands on your sleeve.
- It goes dark and spreads, like ink. Under the cloth, the sigil wakes up.
- Stig: Two.
- Two heartbeats. Not in step.
- Your foot comes down for the third pace. There's no floor.
- Down. The lamp shrinks to a coin, then a star.
- @future: Count again.
- The Eleven Paces

## Cutscene: face

- A door of fire, roaring and not moving. Steam where the water hits the heat.
- A broad grey back, head down, waist-deep. Water pouring off him and never running out.
- You put your hand on his shoulder.
- He turns round. Slow, like a man with a stiff neck.
- It's you. Grey to the elbow. Blue eyes, red round the rims.
- The boy grips your hand harder.
- @future: Stop what you're doing.
- @future: Stop. / Don't.
- He reaches for you. Not to hit. To hold.

## Cutscene: door 1

- You let go of the boy's hand. He doesn't cry.
- One step. The crew turn round, too late.
- The fire shuts over you and goes white.
- From in here you can see all of them, already turning to go.
- Your fingertips start going grey.
- Far off: a cave, a lamp, a big man with ash on his sleeve.
- @future: Stop.
- Stig: Three.

## Cutscene: door 2

- One step back. Everything in you argues.
- On his knees, he flickers like a lantern in a gale.
- His hand goes clear. The grey drains out. It's just a hand.
- @future: Thank you. / What have you done?
- He's gone. The water settles where he was.
- The boy lets go and runs off into the dark.
- @boy: There's another way. I'll go and look.
- The cave again. The floor by your stone is dry.
- Stig: Three.

## Cutscene: door 3

- You count heads, face by face.
- Stig: ...and me.
- You turn your back on the door and hold your hand out.
- Katy's hand. Saphira's. Hans's, warm round the lot. Thorn's. The boy's on top.
- All of you, flat on the fire. It stops roaring. It listens.
- Far below, the woman with clear hands lets out a long breath.
- He sits down by the wall, a little apart.
- @future: So that's how. Huh.
- Stig: Three.
