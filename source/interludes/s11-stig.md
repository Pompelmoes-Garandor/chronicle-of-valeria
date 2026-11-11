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

It's eleven paces from your stone to where the old man lies. You count them, because counting is what you do on watch.

One.

The towel is still in your hand, wrung out. You brought it without thinking.

A flake of ash comes down out of the dark and lands on your sleeve. You leave it there. You've had worse on you.

Two.

It's wet. Ash isn't wet. You look down, and the flake has gone dark and spread, like a drop of ink on a page, and through the cloth something under your skin answers it. The sigil. The Water sigil, inked into you in a vault deep under a monastery, the thing you carry that nobody asked you to carry.

It has never hurt before. It doesn't hurt now. It *pulls*. Not one way. Both ways at once, like standing in the surf where the wave going out meets the wave coming in.

{sound: heartbeat-two}

You hear your heart. Then you hear it again, a half-beat late, from somewhere outside you.

You set your foot down for the third pace, and the floor isn't there.

→ Continue (go to H2)

## H2. Salt

Water. Cold, to the shin, and getting colder. Salt on your lips.

{sound: drip}

The cave is still here, sort of. The lamp burns on its flat stone, very far off, as if you're looking at it from the bottom of a well. The dead Heart ticks. Katy's voice is low and slow and doesn't finish its word. It's been not finishing it for a long time. Everyone is where they were. Nobody has moved. Nobody can see you.

At the far end, where the old man lies, someone is standing in the water. Tall. Still. Only a shape against the lamplight, the way a man looks at the end of a pier at dusk. Water is running off him in sheets and never running out.

He's standing between you and the old man.

You can't be frightened. That's always been true; it's written on you somewhere, along with everything else. But this isn't fear. Fear runs. This stays. There's an older word for it, the one sailors use for a ship nobody will sail on twice. Haunted.

~Count again.~

→ Continue (go to H3)

## H3. Someone small

"You're the big one."

There's a boy sitting on a rock beside you with his feet in the water. Nine, maybe ten. Barefoot. Too tall for his age, all knees and wrists, in a shirt that was somebody else's first. He looks at you without much interest, the way children look at weather.

@boy: "It's going out. You'd better hold on to me or you'll get lost. Everybody gets lost the first time."

You don't know him. You'd swear you don't know him. But your hand knows the size of his before you take it.

The tide starts to pull. Backwards. Down.

{sound: surf-reverse}

@boy: "Don't let go. And don't look at *him*. He always wants you to look."

→ Hold the boy's hand. Let the ebb take you both. (go to E0)

## E0. The ebb

The water is going out, and as it goes it uncovers things. Not shells. Not weed. Days. The ones you buried and thought were too deep to come up again.

Three of them lie bare on the wet sand in front of you. The boy is nine again; he always is, back here. He squats down to look at them, the way he'd look at crabs.

@boy: "That one's mine. That one's yours. That one's *both*."

The shape at the far end of the water hasn't moved. You're almost sure he hasn't moved.

*Hub: then go to S1*

→ A crack of lamplight between floorboards. (go to P1a)
→ Wind chimes, and a boy on a quay. (go to P2a)
→ A ravine in the rain. (go to P3a)

## P1a. Overhead {past}

{sound: boards}

A narrow room with a low ceiling. Cheap scent, old wine, and under them the sea, always the sea, coming up through the planks from the bad end of the city. Someone singing badly two rooms over. Doors. Laughing. A house that never sleeps.

Madame Rosa's. You'd forgotten it smelled like that. You'd made yourself forget.

The boy lets go of your hand. He walks to the middle of the floor, lifts a loose board as if he's done it a thousand times, and slides underneath it, flat as a letter going under a door. The board settles back.

@boy: "This is where I go."

His voice comes from under your feet.

You stand there, too big for the room, your head nearly touching the beams. Water is running off you. You look down. Your boots are bare feet now, grey and wet, and there are wet footprints across the floor behind you, big ones, and they lead straight to where you're standing. Right over the crack where the lamplight falls.

Downstairs, Rosa's voice, bright and hard, says there's no boy here, love, there's never been any boy here, have a drink.

And you understand, slowly, the way you understand a cold coming on. You remember this night from underneath. Something stood over you. Something wet and big and patient that never said a word.

It was you. It was always going to be you.

{sound: heartbeat-two}

Through the crack, very close, an eye is looking up at you. Blue. Your eyes are blue.

→ Kneel down. Tell him it's all right. (go to P1b) -flicker
→ Step back, out of the light, so he never sees your face. (go to P1c) +dread

## P1b. Kneeling {past}

You kneel. The boards creak under your knees. You put your mouth near the crack and say it, low, the way you'd say it to any frightened child on any bad night:

"It's all right. Nobody's coming for you. I'll sit up."

Under the floor, the boy breathes out. A long breath, longer than a child should have in him. You know that breath. You've let it out after every bad day of your life, and now you know where you learned it.

You stay kneeling there till the singing stops two rooms away. You keep watch. It's what you do.

When you get up, there's someone standing in the doorway behind you, grey to the elbows, dripping. He isn't looking at you. He's looking at the floor where the boy is, and his face is in shadow, and his voice comes out wet and doubled, two takes of the same words laid over each other:

@future: "Stop what you're doing."

You don't know what he means. You were only being kind.

The doorway is empty.

→ Back (go to E0)

## P1c. Out of the light {past}

You step back, out of the stripe of lamplight, and you hold still. You were always good at that. It's the first thing you ever learned to do well: be nothing, under the floor or over it.

The eye at the crack searches for you. It doesn't find you. After a long time it closes.

So that's why. Your whole childhood, something stood over you and never let you see its face, and you never knew if it meant you harm or meant to keep you. Now you know: it didn't know either.

Behind you, a voice, wet and doubled:

@future: "Stop what you're doing."

You turn. The doorway is empty. There are wet prints on the threshold, coming in. None going out.

~Nobody's coming for the big one.~

→ Back (go to E0)

## P2a. Letters and wind {past}

{sound: chimes-slow}

Wind chimes. Hundreds of them, glass and shell and bent copper, hung along the cloister of the Monastery of the Great Winds, all talking at once, slowed down, deep as a ship's hull. You used to think the priests could understand them. Maybe they could.

The boy is at the bench. Older now, twelve, too tall for it, a reed pen in his fist. A priest with ink on every finger is guiding his hand: the dip, the slow downstroke. The first letter of his name. Of your name. It comes out crooked, and a blot runs off the end of it like a tear.

The priest doesn't scold. She says, *Again,* and he does it again, and again, until his wrist aches and the letter stands up straight on the page like it belongs there.

You still hold a pen the way she held his hand.

You look over the boy's shoulder at the page. Row after row of that one letter, getting straighter. And at the bottom of the page, where he hasn't written yet, the letters are already there, and already going grey: ^^A A A A A^^

@boy: "Why does it keep going away?"

You don't have an answer. You never had one for him.

Down the hill, past the window, the masts in the harbour sway like reeds.

→ Continue (go to P2b)

## P2b. Two boys on the quay {past}

{sound: timbers}

Then you're on the quay, and the boy is fourteen and nearly a man's size, and the wind smells of tar.

Thorias is there. Of course he is. Small and quick and grinning, half the boy's height, as halflings are, a sea-bag over his shoulder like he's already gone. Behind him a ship is taking on cargo, and a mate is shouting names off a list, and one of them is *Hennos's crew, aboard, aboard!* [SAM?: Captain Hennos is still unexplained; only his crew is named, no face, no ship's name]

"Come with me," Thorias says to the boy. "You're the size of two men. They'll pay you for two."

You've thought about this quay for years and you've never been able to remember what you said to him. Now you're standing right behind yourself, close enough to see the back of your own neck, and you still can't hear it. The boy's mouth moves. The chimes from the hill drown it out.

Thorias looks at the ship and looks at the boy. Then, for a second, he looks past the boy. At you.

→ Reach past the boy and grab Thorias's collar. Hold him back. (go to P2c) +dread
→ Put your hand on the boy's shoulder. Let Thorias go. (go to P2d) +flicker

## P2c. Holding on {past}

You reach past your own shoulder and take Thorias by the collar, the way you'd grab a child about to step off a pier in the dark. Your hand is big enough to close round the whole thing.

He doesn't fight. He looks at your hand, and then up at you, and he's still smiling, but it's gone sad at the edges.

"You can't hold everybody, Stig."

Then your hand is empty and he's on the gangplank and he's gone. It always goes the same way. It's a memory. You can grab it as hard as you like.

Later, at the flooded docks, by a stone gargoyle with the water up to its chin, and later still at the edge of a ravine, you couldn't hold him either.

On the deck of the ship, as it pulls away, a tall figure stands at the rail, grey to the elbows, dripping. He raises one hand to you. Not a wave. The flat hand you'd hold up to stop a cart.

~You can carry it. You always could.~

→ Back (go to E0)

## P2d. Letting go {past}

You put your hand on the boy's shoulder. He's shaking. You hadn't known you were shaking, that day.

Thorias laughs and waves and runs up the gangplank like it's the best day of his life. Maybe it was. The boy waves back. You feel his shoulder go still under your hand.

You stand on the quay together until the ship is a scrap of sail. Then the boy turns and walks back up the hill to his letters, because somebody has to, and you go with him.

It's a good memory. It's the last good one of Thorias. You keep it the way you'd keep a smooth stone in your pocket.

At the very end of the quay, the water is lapping over the boards, and someone is standing in it, watching the same ship go. As you turn away he flickers, once, like a reflection in a puddle when the wind crosses it. Then he's back.

→ Back (go to E0)

## P3a. The edge {past}

{sound: rain}

Rain. A ravine in the rain, and the long fall of it below you: wet black rock, and white water at the bottom.

You know where you are. You've told it round fires like a story, and it's a good story: the cleric got pushed and the cleric survived. The cleric is strong.

It isn't a story from here. From here it's a hand in the middle of your back, small and hard, and Thorias's voice in your ear, breaking: *They took my wife and children.*

The boy is on the other side of the ravine, too far away to help, watching. He has his hands over his mouth.

Your heel is over the edge. The rock is slick. Far below, in the white water, something tall stands quite still and looks up.

→ Hold on to the moment (Wisdom save DC 15: go to P3b / P3bx)

## P3b. His face {past}

You hold. Not the rock: the moment. You hold it still the way you'd hold a struggling man for the surgeon, and you turn your head, and you *look*.

You never saw his face. The first time, you were falling. This time you see it.

He's crying. He's pushing you off a cliff and he's crying, and his mouth is still moving, saying it over and over: *my wife, my children, they took them, they took them.* He's not looking at you at all. He's looking at his own hands, as if they belong to someone else.

And past his shoulder, out over the drop, you see the other one. You. Grey to the elbows, standing on the air over the drop as if it were a floor, water pouring off him into the ravine. He isn't looking at Thorias. He's looking at you, and his mouth is moving too.

@future: "Stop. Stop. Stop what you're—"

Then the push lands, and you go, and you let yourself go.

Falling, you think the thing you've never let yourself think. *Did anyone go looking for them?* [SAM?: a question Stig asks himself, nothing more. What happened to Thorias's family is Sam's; this can be cut]

~Who's missing?~

→ Continue (go to P3c)

## P3bx. Under {past}

The rock goes out from under your heel and you fall.

You don't hit the rocks. You hit water, deep and black and far too cold, and it closes over your head. You kick for the light. Something takes hold of your ankle.

A hand. As big as yours. Not pulling you down, exactly. Just holding on. Holding on the way you hold on to everything, with no thought at all of ever letting go.

{sound: heartbeat-two}

Under the water, a voice, right against your ear, bubbling:

@future: "I could keep you here. I could keep you safe down here. You'd never have to get to the door."

You stay down there a long time. Long enough to think about how easy it would be. Long enough to be ashamed of thinking it.

Then the hand opens, all at once, as if it had only wanted you to know it could. You come up into the rain, gasping. On the far side of the ravine, the boy is crying.

→ Continue (go to P3c)

## P3c. The grave in the north {past}

{sound: spade}

The rain stops. The ravine folds away like a map.

Cold ground. A spade in your hands, its blade worn bright. You're in the north, and you're digging, and you know whose grave this is: the old elf woman with her ears cut off. Doloris. You laid her in it yourself and said the words over her. Whatever anyone says she'd done, nobody deserves that.

You dig, and the hole fills with water from the bottom as fast as you dig it.

You keep digging. Of course you do.

@boy: "Who's that one for?"

"An old woman. Somebody had to."

@boy: "And that one?"

He's pointing past you. There's another grave beside this one, one you don't remember digging. And another past that. A whole row of them, running off into the trees, every one open a little at the bottom where the water comes in. You've dug too many. They're all still here.

At the end of the row, someone else is digging. Grey to the elbows, keeping time with you, stroke for stroke. He's digging the last one. It's bigger than the others.

On the wooden marker at its head, someone has started to carve a name. The first letter is crooked, with a blot running off it like a tear. ^^The rest has been eaten.^^

→ Back (go to E0)

## S1. Slack water {past}

{sound: breath-reverse}

The ebb goes out further than any tide you've ever seen. Further than the ravine, further than the city, further than your own name.

The boy holds your hand very tight.

It leaves you standing on the floor of a hall. Not a cave: a hall, cut square and smooth by hands, with pillars carved like waves frozen at the top of their curl. Old. Older than anything you've ever stood in. Valerian, you think, though nobody told you. You know it the way you know salt.

You've stood here before. The crew stood here, in what's left of it. A voice spoke in this place, deep under the monastery, and said that the vaults delay the end, but do not prevent it.

It isn't left of anything yet. It's whole. There's water in it, a great still sheet, and under the water, at the bottom, black sand. It isn't lying still. It moves the way a sleeper moves, turning over, pushing at the water from underneath.

A woman in a long robe stands knee-deep in the middle of it with both hands flat on the surface, pressing down. Just pressing, like you'd hold the lid on a pot that wants to boil over. On the back of one hand, dark as if it were inked this morning, is your sigil. The same lines. The same water. [SAM?: see DM notes]

Her arms shake. Her hands are going clear, like glass, like ice in spring, so that you can see the black sand through them. She has been doing this a very long time. She's nearly done. Not finished. *Done.* Worn through.

She's breathing with the water. In as it pushes up, out as she presses it down, slow and long, the way the sea breathes on a beach. It's the breath you let out after every bad day of your life. You'd know it anywhere. Hers is wearing thin.

She looks up. Not at the hall. At you. At your arm. At the sigil there.

She doesn't speak. Maybe she can't any more. But her face, when she sees the mark on you, does what a sailor's face does at the end of a long watch when they hear the next man's boots on the ladder.

Relief.

@boy: "She's tired."

"I know."

Behind her, at the edge of the hall, a tall shape stands in the water. Grey to the elbows. He isn't looking at you. He's watching her hands, the way you'd watch someone do a job you know you'll have to learn, and he's holding his own hands out in front of him, flat, pressing on nothing, copying her.

→ Continue (go to S2)

## S2. The turn

{sound: silence}

For a moment nothing moves. Not the water, not the sand, not the woman, not you. Slack water, the sailors call it: the still minute at the bottom of the tide, when it's done going out and hasn't started coming in. You used to love it. It always felt like the sea taking a breath.

Then it turns.

{sound: surf}

You feel it in the sigil before you feel it in your legs: the pull goes the other way. The water starts coming back. Not the past now. The other thing. The days that haven't come yet, rolling in out of the dark, one wave at a time.

After every ebb comes a flood. You've said it your whole life. You've never once thought about what the flood brings in.

The boy pulls at your hand.

@boy: "We've done this before."

"Done what?"

@boy: "This bit. Watch."

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

It's eleven paces from your stone to where the old man lies. You count them, because counting is what you do on watch.

Eleven. Ten. Nine.

That's wrong. You count again.

One. Two. A flake of ash comes *up* off your sleeve and floats away into the dark, dry, as if it never landed.

The lamp is on the wrong side of the cave. Katy's voice finishes her word, and then says it again, backwards. Saphira is sitting with her back to the wall, the way she always picks, but the wall is on her other side. Hans hums, low, a beat he's always humming, slowed right down until it's not a beat at all.

{sound: dirge}

You look down. You're sitting on your stone. You haven't stood up yet. You haven't walked a pace. The old man is waiting for your answer.

Then you're standing. Three paces gone.

Then you're sitting.

@boy: "Told you. It goes round. You'll get used to it."

He considers.

@boy: "You won't get used to it."

~Eleven. Ten. Nine.~

There are wet footprints by your stone. Big ones. They come from the old man's side of the cave, all eleven paces, and they stop exactly where your feet are. Somebody has walked this already. Somebody walked it back.

The water is coming in. Fast now.

→ Let the flood come. (go to F0)

## F0. The flood

The water is coming in, and it brings things with it. Not wreckage, not yet. Days that might be. Ones you've hoped for, and ones you've lain awake over, and the water doesn't seem to know the difference.

None of this has happened. Maybe none of it will. That doesn't make it any less cold.

The boy is still with you. He's still holding your hand. He hasn't grown at all; it's you who's getting older. Your knuckles. Your knees.

*Hub: then go to W1*

→ A schoolroom, with slates. (go to Q1a)
→ A window blinking on a harbour. (go to Q2a)
→ A long table, and an empty chair. (go to Q3a)

## Q1a. Slates {future}

A room with a low roof and a big window. Benches. Children on them, a dozen, more, every size, the way children come when nobody's choosing them. Slates on their knees. Chalk dust in the light.

Your school. You'd know it anywhere, though you've never seen it. Somewhere on Fraas-Den, by the light through the window, with the sea out there grey-green and close. You always pictured it near the sea.

You're at the front, chalk in your hand, greyer. On the board behind you, in your own careful hand, is the line you've set them to copy:

*After every ebb comes a flood.*

One boy is too tall for his bench. Of course there is. His letters come out crooked.

"Again," you tell him, gently. And he does it again.

It takes you a moment to see it's the boy who came with you. He's sitting between two children as if he's always been there, and nobody notices him but you.

This is the thing. This is the whole of what you've wanted. You stand in it and let it be warm, because it is warm, and it smells of chalk and bread and wet wool.

Then you notice the floor is wet.

→ Continue (go to Q1b)

## Q1b. The back desk {future}

{sound: chalk}

Water, a finger deep, spreading from the back of the room. The children don't notice. They lift their feet a little and keep writing.

You look at the slates. They're blank. Every one. The children are writing, chalk scratching, heads bent, and nothing stays. It runs off like rain off a window. On the board behind you, the line you wrote is going too: After every ebb comes a ^^flood^^.

At the back of the room, at the last desk, much too big for it, knees up past the top, sits the one from the water. Grey to the elbows. Head bowed over a slate of his own. His is the only writing that stays. Tally marks. A row of small upright marks, the way you'd count heads, or graves, or days, and one more off on its own at the end, a little apart.

He lifts his head. You still can't see his face. But you hear him, wet and doubled, two voices a half-beat apart:

@future: "Stop what you're doing."

"What am I doing?"

@future: "Teaching them that."

He points at the board, at the line, at the word being eaten.

@future: "It isn't true. Not for the one who stays."

The water is at the children's ankles.

→ Get them out. All of them. Now. (go to Q1c) +flicker
→ Keep teaching. Write the line again. Don't let them see you're afraid. (go to Q1d) +dread -flicker

## Q1c. Out {future}

You don't think. You're across the room with your arms out like a man herding geese, saying *out, out, out, all of you, leave the slates,* and they go, giggling and splashing, out of the door into the light, and you count them as they pass. You always count them.

Twelve. Thirteen. All out.

The boy who came with you is still sitting on the bench. He hasn't moved.

@boy: "You didn't count me."

You turn back to the room. It's empty now except for the water, the boy, and the desk at the back with its slate. The one who sat there is gone. He's flickering somewhere at the edge of your eye like a face in water when a stone goes in, there and not there.

You count the marks on his slate. You can't help it.

Thirteen. And one more, off on its own at the end of the row, a little apart, as if whoever made it wasn't sure it belonged.

→ Back (go to F0)

## Q1d. Again {future}

You turn back to the board and write the line again, slow and careful. *After every ebb comes a flood.* You make your voice warm. You say *again* to the tall boy and he does it again, and the water is at their knees, and you say *again*.

They trust you. That's the worst of it. They look at you and see a big man who isn't worried, so they aren't worried either, and the chalk scratches, and nothing stays.

At the back desk, he's nodding along with you, slowly, every time you say *again*. He's very solid now. You can hear the water running off him onto the floor, steady as a pump. He nods the way a man nods when he has heard himself say a thing so often he no longer hears it.

~Wring it out. Again.~

→ Back (go to F0)

## Q2a. Long, short, short, long {future}

{sound: surf}

Night, and a small harbour. A quay with a few fishing boats knocking together. Houses with their backs to the wind. A town too small to bother anybody. Grisshaven, says something in you that knows this coast, on Myratma's shore.

There's a tavern at the end of the quay with a lamp in its window, and the lamp is blinking out to sea. Long. Short. Short. Long. Over and over. The sign over the door says it's called the Lighthouse, and for the first time you wonder whether that was ever only a joke.

You're standing on the quay. Your hands are old. The boy is sitting on a bollard beside you, swinging his feet, unchanged.

@boy: "It's calling somebody."

Out in the dark a ship is answering the lamp. You can't see her, only hear her: timbers creaking, sail slapping, a voice on deck calling soundings. Sailors' voices. You'd know them in your sleep.

→ Continue (go to Q2b)

## Q2b. The quay {future}

{sound: timbers}

The ship comes alongside. You still can't see her properly; she's all shadow and lantern-glow, and the lanterns are the wrong colour, the grey-green of deep water.

A line comes snaking out of the dark and lands at your feet. Somebody wants you to make it fast.

A voice from the deck calls your name. Not *Stig*. Your real name. *Astychon.* Nobody here calls you that. Nobody has in years. [SAM?: who calls is deliberately unknown, see DM notes]

At the rail, very tall and very still, stands the one from the water, holding the other end of the line. And then, from right beside him, in the same voice, a second figure the same as the first, holding the same line, so that for a moment there are two of him, a half-beat apart, like a picture taken twice.

One says:

@future: "Make it fast."

The other says:

@future: "Don't. Stop what you're doing. Don't."

They say it at the same time. You can't tell which mouth is which.

@boy: "He doesn't know either."

→ Pick up the line and make it fast. (go to Q2c) +dread -flicker
→ Leave it lying. Answer to Stig, or to nothing. (go to Q2d) +flicker

## Q2c. Made fast {future}

You pick it up. Your hands do it before you've decided; a line comes to you, you make it fast. Round the bollard, cross, cross, hitch. You could do it blind.

The line goes tight. The ship settles against the quay with a long, satisfied groan, like an animal lying down.

Then it keeps pulling. Not hard. Steadily. The ship is going back out, and it's taking the quay with it, and the town, and you, because you've made it fast and you don't untie things you've made fast. You have never in your life untied a thing you made fast.

At the rail there's only one of him now. Solid. Sure. He lifts his hand: *come aboard*. Plenty of room.

You stand there with your feet braced, holding, while the boards creak under you and the boy tugs at your sleeve.

→ Back (go to F0)

## Q2d. Unanswered {future}

You leave it lying. The line lies on the wet stones like a sleeping snake.

The voice calls your name again. *Astychon.* Both voices. Patient. As if they know you'll come down to the quay again someday, and again after that.

You say nothing. Your name is Stig. That's what the people who know you call you, and you'd rather be known than named.

At the rail the two of him flicker against each other like a lantern seen through rain, and for a moment neither of them is quite there.

The ship lies off the quay a long time. Then the window blinks *long, short, short, long*, and the ship backs into the dark the way it came, and the line goes slithering after it into the water.

You don't know if you were brave or only stubborn. With you it's hard to tell.

→ Back (go to F0)

## Q3a. The toast {future}

{sound: toast}

A long table in a warm room. Candles. Bread torn rather than cut. The kind of night you'd have liked.

Your crew are round it. Older, all of them. Katy, with grey threaded into her hair, the ukulele propped against her chair. Saphira, back to the wall, where she can see everyone; she always picks that spot. Hans at the end of the table, too big for his chair, his chest plate warm. Thorn by the door, bow within reach, the way he always sits. More faces past the candlelight, laughing at something.

Nobody looks at you. Nobody can see you.

There's one empty chair. A tea towel lies folded on the seat, blue-striped, the one you've wrung out a hundred times. Somebody has folded it carefully, the way you fold it.

Katy stands up. She raises her cup to the empty chair. Everybody raises theirs. Nobody says a name. They don't need to.

Hans says, in his flat, careful voice:

"He would have disliked this. He would have offered to wash the cups."

Everybody laughs, and then nobody does.

{sound: dirge}

Katy starts to sing something, and stops after one line, and sits down.

@boy: "Whose chair is that?"

Standing behind the empty chair, one grey hand on its back, is the one from the water. Watching them. He's not dripping here. He's dry, for once, and very still, the way a man stands at a window looking in at a house he's not allowed back into.

→ Continue (go to Q3b)

## Q3b. Whose chair {future}

You know whose chair it is. You've known since you saw the towel.

They're all right. That's the thing that cracks something in you. They're older and they're all right. They've a warm room and bread and each other. Whatever was paid for this, it bought *this*.

You could live with that. You could die with that.

The one behind the chair turns his head toward you, very slowly, the way an old man turns when his neck is bad.

@future: "Stop what you're doing."

"I'm not doing anything."

@future: "You're agreeing."

→ Sit down in the empty chair. Just for a moment. (go to Q3c) +dread -flicker
→ Fold the towel again, properly, and leave it where it is. (go to Q3d) +flicker

## Q3c. The chair {future}

You sit. Nobody sees you do it. The chair is the right height. Of course it is.

From here you can see all their faces. Katy wiping her eyes with the back of her wrist. Saphira watching the door. Hans, not looking at the chair, very carefully not looking at it, the way he doesn't look at things he has decided to remember.

The one behind you puts his grey hand on your shoulder. It's heavy and wet and cold to the bone, and it's the most familiar thing you've ever felt.

@future: "There. That's how it feels. Every night."

You can't feel the candles from here. You can see them, but you can't feel them.

→ Back (go to F0)

## Q3d. The towel {future}

You pick up the towel. You shake it out, fold it in half, then in thirds, the way you always do, and you lay it back on the seat, square to the edge.

Hans looks at the chair. His head tilts, a very small amount.

"The towel has moved," he says.

"No it hasn't," says Saphira.

"It has been refolded," says Hans. "Correctly."

Nobody says anything after that. Katy reaches out and touches the towel with one finger, and then takes her hand back.

Behind the chair, the one from the water flickers hard, like a face seen through a breaking wave, and for a moment you can see the far wall through his chest.

→ Back (go to F0)

## W1. One pace

{sound: fire-still}

The flood is in. Everything is water: the cave, the lamp, the old man lying at the end of it, all wavering under a grey-green surface, as if you're looking up at them from the bottom of the sea.

One pace left.

And then the water isn't water. It's heat. The cave folds open like a book and you're standing inside a mountain, black stone, dark as the inside of a fist. In the heart of it is a door of fire. Not a door that's burning. A door that *is* fire, upright in a frame of black stone, roaring without moving, like a wave that stopped at the top of its curl and can't come down. [SAM?: the door of fire, see DM notes]

Your crew is here. Katy with ash in her hair. Saphira with her back to the wall. Hans behind you, his chest plate warm, humming very low. Thorn at the edge of the light, bow in hand. And more faces than the light reaches.

You know, the way you know things in a dream, how the door works. It opens one way only: if somebody goes in and stays on the other side. Then it closes behind them, and everyone else can go on.

The boy has hold of your hand. He's holding it very hard.

Nobody is talking. Everybody is thinking it. You can see them all thinking it.

You're big. You can carry a lot.

And between you and the door, waist-deep in black water that shouldn't be here, his back to you, head bowed, stands the one who's been at the edge of everything. Water runs off him and turns to steam where it meets the heat. Under the water, he's holding something with both hands. Holding it down, or holding it up. You can't tell which.

You know his shoulders. You know the way he stands, feet wide, braced, like a man on a deck in weather.

~Who's missing?~

→ Turn him round. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

You put your hand on his shoulder, and he turns.

It's you.

Of course it's you. Older. Or only tireder. Grey not just in the hair but in the skin, grey from the fingertips to the elbows, the same grey as the old man's arm. Water runs out of his sleeves and his collar and the corners of his eyes and never runs out. The eyes are blue and red-rimmed and they haven't closed in a very long time, because somebody had to keep the watch.

He looks at the boy, and his face does something you've never seen your own face do.

@future: "Stop what you're doing."

"*What* am I doing?"

@future: "Walking to the door. You've been walking to it your whole life. Every grave. Every child. Every time you said *put it on me*. Every pace."

"Then what's on the other side?"

@future: "Nothing. Everything. A post."

He holds up his own hands. They're going clear at the fingertips, like the woman's in the old hall, and through them you can see the fire, faintly, like looking at a forge through ice.

@future: "You don't die. That's what nobody tells you. You *stay*. You keep the watch from inside it, and you don't sleep, and you don't stop. There's no ebb in there. It's always slack water."

"Then why come back?"

He opens his mouth. Closes it. When he speaks again it's two voices, a half-beat apart, and they don't say the same thing.

@future: "To stop you."

@future: "To see who'd come."

@future: "Every time, I hope it'll be somebody else at the door. It's always you."

@boy: "He's lying."

A pause.

@boy: "No he isn't. Both of them aren't."

@future: "And I'm only one tide. In there you can see them all. I can only ever come back down this one."

The door roars without moving. Behind you the crew stand very still, waiting for someone to step forward. And behind the door there is nobody at all. You can feel it the way you feel an empty bunk on a night watch: a post that somebody walked away from, and nobody has stood since.

@future: "If you go through, somebody's on watch. If you don't, nobody is, and then it all comes up, the sand, the ash, all of it, the way it's been coming up since the last one walked off."

He's shaking.

@future: "I can't tell you which. I've had longer than anyone to think about it, and I still can't tell you."

He reaches for you. Not to hurt you. To hold you back. The way you'd have reached for Thorias.

→ Break free. (go to @undertow)

## W2x. The face, and all of them

{sound: heartbeat-two}

You put your hand on his shoulder, and he turns.

It's you. Grey from the fingertips to the elbows, the same grey as the old man's arm, water pouring from his sleeves and turning to steam. The eyes are blue and red-rimmed and they haven't closed in years.

@future: "Stop what you're doing."

And you understand all at once.

?seen P1c: You stepped back out of the light, so the boy would never see your face.

?seen P2c: You grabbed for Thorias's collar.

?seen P3bx: You let the water hold you, and thought how easy it would be.

?seen Q1d: You wrote the line again so the children wouldn't be afraid.

?seen Q2c: You made the line fast.

?seen Q3c: You sat down in the chair.

Every time the water came tonight, you held on, and every time you held on he got more solid. He isn't waiting for you any more. You've been walking toward him your whole life, and he's been walking back toward you, and you've nearly met.

@future: "Stop. Please. Or don't. I don't know. I've had longer than anyone to think about it, and I still don't know."

The water goes black. Small grey hands come up out of it all round you, crumbling, reaching, the way you've reached for everyone.

He reaches too. To hold you back. The way you'd have reached for Thorias.

→ Break free. (go to @undertow)

## W3. Slack

He goes down on his knees in the black water, slowly, the way a big man kneels when his knees are bad. You know exactly how that feels.

He isn't gone. Things like this don't go. He kneels there, flickering, or solid, his grey arms across his thighs, looking up at you. Water runs out of him into the water.

@future: "You always could break a grip. I never could make myself let go."

{sound: silence}

The door roars without moving. The crew wait. The boy is still holding your hand. Behind the fire, the empty post waits too.

Nobody can choose this for you. Not the one who's been there, not the one who hid under the floor. It's yours.

{sound: heartbeat-two}

→ Step forward. If somebody has to stay, let it be you. (go to End 1)
→ Stop. Take one step back. Do what he came all this way to ask. (go to End 2)
→ Count heads. Count all of them, this time. (go to End 3)

## W3x. Held

He holds you under. Black water, cold, all the way to the bottom, his grey hands on your shoulders, gently, the way you'd hold a man down for the surgeon.

@future: "I held you. You see? I could always hold you. I just never could hold me."

You could stay. It would be very easy to stay.

Then you come up gasping, on your hands and knees in a hand's depth of water. He's kneeling across from you, flickering, or solid, his grey arms across his thighs, watching you breathe. He let you go. He always lets you go, in the end.

The door roars without moving. The crew wait. The boy has hold of your sleeve with both fists.

{sound: heartbeat-two}

→ Step forward. If somebody has to stay, let it be you. (go to End 1)
→ Stop. Take one step back. Do what he came all this way to ask. (go to End 2)
→ Count heads. Count all of them, this time. (go to End 3)

---

## End 1. The Keeper

You let go of the boy's hand. It's the hardest thing you've done. He doesn't cry. He just looks at you, the way he looked at the weather.

You step forward.

Nobody stops you. That's what turns your stomach, after. Not that they wouldn't have tried. That you're so quick about it, they never get the chance.

The fire closes over you, and it isn't hot. It's *bright*. Not light to see by: light to see *with*. All at once you can see everything the fire can see, and the fire can see a great deal.

The crew on the far side of the door, already turning to go, Katy's hand over her mouth. The Hills, bare and wet where the ice used to be. The black sand stirring under every vault, turning over in its sleep. The woman in the old hall, far down in the dark under the monastery, pressing, worn nearly through; she lifts her head as if she felt you come on watch, and nods to you across the whole of the world, one keeper to another.

Your body stands in the flame like a stone in a stream. The rest of you spreads out into the fire, thin and wide. And under you, the sand pushes up against it, and the fire is you now, and you push back. It's not so bad. You're big. You can carry a lot.

{sound: drip}

You watch. You don't sleep. You don't look away. You don't get to stop.

After a while (you don't know how long; there's no ebb in here to tell the time by) your hands begin to go grey, from the fingertips up, and once, just once, you have to stop and think to remember your own name. You look out through the fire. Far off, very small, as if seen from the bottom of a well, there's a cave with a lamp on a flat stone. And a big man walking across it, counting his paces, with a flake of ash on his sleeve.

You know what you'll say to him. You'll say *stop*. You don't know yet if you'll mean it.

?flicker<=1: He was right there all night, and you made him solid, one choice at a time. Now you know why he looked relieved.

?flicker>=3: Even so, some part of him, the part that kept flickering, is still out there on the other side of the fire, shouting *stop* at a man who can't hear him yet.

?seen P1b: Somewhere a boy is lying under a floor, and you said you'd sit up. You will. From here you can see every floor there is.

{sound: heartbeat-one}

Three.

Your foot comes down on stone. The cave comes back, ash and lamp and the dead Heart ticking. The other eight are only paces, and you walk them. Your hands are cold to the elbow, and they'll stay cold a while. You put one on the old man's shoulder anyway, and you keep it there.

The sigil under your sleeve is quiet now. Not finished. The tide doesn't finish. It only turns.

> **Echo: Hold the Line.** Before you roll a Constitution check, or a Strength (Athletics) check to swim, climb or keep your grip, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the water showed him, see below] At the door of fire: he stepped forward. He let go of the boy's hand to do it. Hans noted: the cleric stopped between one step and the next. Two heartbeats, then one. His hands are cold to the elbow. He told me it was nothing. He has never lied to me before. I have logged it as weather.

## End 2. Another Way

You take one step back.

It's the smallest thing you've ever done. Your whole body argues with it. Every grave, every child, every *put it on me*, all of it pulling you forward like a current, and you stand in it with your feet wide, braced, and step back anyway.

The future you looks up from his knees.

He flickers. Hard. Like a lantern swung in a gale.

?flicker>=3: He goes easily, almost gratefully, as if he's been waiting all night to be allowed.

?flicker<=1: He doesn't go easily. He's been solid a long time; you made sure of it. He holds on to being here the way you hold on to everything.

His hand, held up between you, goes thin, and you can see the door's fire through his fingers, and then through his wrist, and then the grey goes out of it and it's just a hand, tanned and scarred, like yours.

@future: "Thank you."

@future: "What have you done?"

Both at once. A half-beat apart. And then he's gone, and there's just the water where he was, settling.

The door roars without moving. Nobody steps through it. Far under the monastery, in the old hall, the woman's breath goes thinner. It doesn't stop.

The boy lets go of your hand. He doesn't look frightened. He looks the way you looked at twelve with a pen in your fist.

@boy: "There's another way, then. There has to be. I'll go and look."

He runs off into the dark of the mountain, barefoot, splashing, and you let him, because that's what you do with children who want to find something out.

?seen Q2d: Somewhere a ship backs out of a small harbour, and nobody on it calls your name again.

{sound: heartbeat-one}

Three.

Your foot comes down on stone. The cave comes back, ash and lamp and the dead Heart ticking. By your stone there were wet footprints, eleven paces of them, coming the other way. You look back. They're gone. The floor is dry. You don't know what that means yet. You walk the other eight paces and crouch beside the old man, and your hands are warm.

The sigil under your sleeve is quiet now. Not finished. The tide doesn't finish. It only turns.

> **Echo: Another Way.** Before you roll an Intelligence (Arcana or Investigation) check to find a way out, a way through or a way round, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the water showed him] At the door of fire: he stopped. He stepped back, and his future self faded. Hans noted: the cleric stopped between one step and the next. Two heartbeats, then one. Afterwards he looked at the floor by his stone for a long time. It was dry. It had always been dry. I checked. I checked twice.

## End 3. And Me

You count heads. On a ship, the watch counts heads. You never lost the habit.

{sound: count}

Katy. Saphira. Hans. Thorn. The faces past the light, one by one. The boy. The man on his knees in the water.

You come up one short.

You count again. One short. And this time, instead of looking along the line, you look down. At your own hands. At your own boots in the black water.

You put your hand flat on your own chest, the way the woman in the old hall pressed down on the sand, and you say it out loud for the first time in your life.

"And me."

?seen Q1c: Fourteen marks for thirteen children. One a little apart.

?seen P1b: The boy looks up at you the way he looked up through the crack in the floor.

The future you looks up at you from the water as if you've said a word in a language he forgot.

Then you do what you've never done. You turn round to the crew, and you don't step forward. You hold out your hand.

Katy takes it first. Then Saphira, after a moment, as if it costs her something. Then Hans, his big hand warm round all of yours. Then Thorn, without a word. Then the faces past the light. The boy puts his small hand on top of the pile.

Together, all of you, you put your hands flat on the door.

It doesn't open. Nobody asked it to. But it stops roaring. For the first time, it listens.

?seen Q3d: Hans looks at your hand on the door, and then at the towel over your shoulder. "Correctly," he says, to nobody.

{sound: breath}

And behind it, for one breath, the empty post doesn't feel so empty. Nobody has gone in. Maybe nobody has to. Maybe it can be stood from this side, together, the way a crew stands a watch: one sleeps, one wakes, the tide goes out, the tide comes in. You don't know if that's true. It's the first time anyone has tried it. Far down in the old hall, you could swear, a woman with clear hands lets out a long breath and doesn't hurry the next one in.

The future you is sitting by the wall now, out of the water, a little apart, the way the last tally mark sat on the slate. Neither solid nor faint. Just tired. Just there.

@future: "So that's how."

He says it to himself, the way you'd say it when a knot you've fought for an hour comes loose.

@future: "Huh."

{sound: heartbeat-one}

Three.

Your foot comes down on stone. The cave comes back, ash and lamp and the dead Heart ticking. You walk the other eight paces. Before you crouch beside the old man you look back once at your stone, the way you'd look at a bunk you'll be sleeping in again. Somebody keeps the watch. Tonight, for once, somebody's keeping you.

The sigil under your sleeve is quiet now. Not finished. The tide doesn't finish. It only turns.

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

- The cave, held still. Ash hangs in the lamplight like snow that forgot to fall.
- One flake comes down and settles on your sleeve.
- It darkens and spreads like ink on a page. Under the cloth, the sigil wakes.
- Stig: Two.
- Two heartbeats, out of step.
- Your foot comes down for the third pace, and the floor isn't there.
- Down. The lamp shrinks to a coin, then a star.
- @future: Count again.
- The Eleven Paces

## Cutscene: face

- A door of fire, roaring without moving. Steam where the water meets the heat.
- A broad grey back, head bowed, waist-deep. Water running off him, never running out.
- You put your hand on his shoulder.
- He turns. Slowly, the way a man with a bad neck turns.
- It's you. Grey to the elbow. Blue eyes, red at the rims.
- The boy's hand tightens on yours.
- @future: Stop what you're doing.
- @future: Stop. / Don't.
- He reaches out. Not to strike. To hold.

## Cutscene: door 1

- You let go of the boy's hand. He doesn't cry.
- One step. The crew turn, too late.
- The fire closes over you, and goes white.
- From inside, you can see everything: the crew, the Hills, the sand turning in its sleep.
- Your fingertips begin to go grey.
- Far off: a cave, a lamp, a big man with ash on his sleeve.
- @future: Stop.
- Stig: Three.

## Cutscene: door 2

- One step back. Your whole body argues with it.
- On his knees, he flickers like a lantern in a gale.
- His hand goes clear. The grey drains out of it. It's just a hand.
- @future: Thank you. / What have you done?
- He's gone. The water settles where he was.
- The boy lets go of your hand and runs off into the dark.
- @boy: There's another way. I'll go and look.
- The cave again. The floor by your stone is dry.
- Stig: Three.

## Cutscene: door 3

- You count heads. Face by face.
- Stig: ...and me.
- You turn from the door and hold out your hand.
- Katy's hand. Saphira's. Hans's, warm round all of them. Thorn's. The boy's on top.
- Together, flat on the fire. It stops roaring. It listens.
- Far below, a woman with clear hands lets out a long breath.
- He sits down by the wall, a little apart.
- @future: So that's how. Huh.
- Stig: Three.
