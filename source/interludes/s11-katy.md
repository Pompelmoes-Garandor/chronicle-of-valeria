# Four Notes

**Player:** Katy Berry
**When (for Sam, not shown to players):** the same held breath in the cave as Stig's "The Eleven Paces", while Matthew waits for Stig's answer. Katy is kneeling by her father. She puts the bronze ukulele across his knees and he tries to play the first four notes of the lullaby. He gets three. She plays the fourth, the E, and black ash on the string carries her down into his memory. No table time passes. It changes nothing that happens next. It works on its own for a player who skipped "The Song Before Sleep".
**What it sets up:** the choice Katy makes at the end (W3) is saved and sent to Sam, like the other interludes.
**Reading time:** about 25 minutes along one path, plus the fight.
**Echo:** one, set by the last choice. One use; expiry as Sam rules for all Echoes.
**Same rules as the other interludes:** Matthew's time is never a number, a range or a comparison, and Matthew never appears in a future. No god speaks in words. None of the afternoon's words appear (the list is in the DM notes). Every future here is a *maybe*. Elodie's third verse is not written here; that stays the crew's.
**New lore in here, all marked [SAM?]:** Matthew busking young, how he got Bluefoot, the river where he met Elodie, the year after (seen from far off, no words heard), and Bluefoot on the sill of Katy's room at court. These are Claude's fills on top of the table's canon. Sam keeps, changes or cuts them before Katy's player sees this (K11_ON).

**For the build (the parser skips everything above the first rule):**

*Look.* {past}: warm, faded, summer light, sepia at the edges. {future}: cold blue-white, ash in the air, glitching text. Untagged: the present, the cave, lamp and ash. {again}: the loop, the present played wrong (mirrored, the four notes running backwards).

*Figures.* Two, each with a voice style:
- **Bluefoot** (Matthew's falcon, made of ash, with bright blue legs): never speaks. She leads Katy through the past and is there in every past vision.
- **The one walking away** (Katy, older; ash grey from her fingertips to her elbows, like her father; a lute case on her back): lines written `@future: "..."`. Low, worn, a singer's voice with nothing left in it, sometimes doubled. Never seen from the front before W2.

*Whispers.* `~text~` is the older Katy's voice bleeding into the passage.

*Ash.* `^^text^^` is text the black ash is eating.

*Conditions.* A paragraph starting `?flicker>=3:`, `?dread>=3:` or `?seen P2c:` shows only when that holds.

*Ring.* Instead of paces, the E string: still ringing from H1, shown as a fading line of sound. H1 strikes it. Each of the seven visions (three past, S1, three futures) takes some of the ring. L1 rings it back up, then it drops again. W1 is the last of it. W2 is silent. The endings say whether the E rings out or stops.

*Meters.* `+dread` (0-5): how much the ash has got into the song; more whispers, more ash, a third Hush in the fight. `+flicker` / `-flicker` (0-5, start at 2): how faint the older Katy is. High, she stutters and goes see-through; low, she's solid.

*Sound.* Cue list:
- `string-e`: one ukulele E string, plucked and left to ring, far too long.
- `notes-four`: the lullaby's first four notes, A D F E, on the bronze ukulele.
- `notes-back`: the same four notes backwards, E F D A, smeared.
- `rain`: rain on stone and water (the bridge).
- `river`: a shallow river over stones, summer insects.
- `wind-trees`: wind high up in big trees, a lot of leaves.
- `wings`: a falcon's wings, close, then a short sharp call.
- `street-song`: children singing a tune in a street, out of time, some words wrong.
- `tavern`: a full room, cups, talk, going quiet.
- `cart`: cart wheels on a dirt track at dawn, a horse blowing.
- `heartbeat-two`, `heartbeat-one`, `silence`, `rewind`, `drip`: as in "The Eleven Paces".

*Hubs.* E0 offers three past visions and F0 three futures, any order, greyed once done; when all three are done, E0 goes on to S1 and F0 goes on to W1. Each vision ends with "Back".

*Fight @hush.* Win goes to W3, loss goes to W3x. Stat blocks below.

*Paintings.* (1) a stone bridge in the rain at dusk, a young man with a lute under a wide hat busking to nobody, a small falcon chick in the upturned hat; (2) a shallow river in a summer wood, foxgloves on the bank, a young elf woman sitting on a rock with her feet in the water, a man playing to her from the other bank; (3) the edge of a dark wood in autumn, a hooded figure with a bow blocking a narrow track, a man with a lute case walking away; (4) a narrow attic window at night under a slate roof, a small falcon with blue legs on the sill, candlelight inside; (5) a narrow city street, children in a ring singing; (6) a full tavern from the back, a woman on a little stage with a ukulele, her face in shadow; (7) a cart on a dirt track at dawn, a small sleeping shape under a blanket in the back, a lute case on the seat; (8) a woman walking away into ash with a lute case on her back, grey to the elbows. No text, no real faces.

**Fight: The Hush.** Katy alone, level 5 (HP 34, AC 14). A pale floor of packed ash under the cave's lamp, the dead Heart at one end. The ash is full of voices singing her song back wrong. Matthew sits by his stone with the ukulele across his knees (not a target, can't be hurt). He keeps the E ringing as long as the song is held. The older Katy stands between Katy and her father, lute case on her back. She is not trying to kill Katy. She is trying to make her *stop playing*.
- *The one walking away* (older Katy). Medium undead (a haunting in Katy's shape). AC 13, HP 30, speed 30. Str 10 Dex 14 Con 14 Int 12 Wis 12 Cha 18. Immune to Charmed and Frightened. Initiative +2. One Hush a turn (two when the flicker is 1 or less). *Hush:* +5 to hit, reach 5 ft, 1d8+2 cold; a hit means Katy can't speak or sing until the start of her next turn unless she makes a DC 13 Constitution save (no verbal spells while hushed). *Old Song:* once per fight, when first bloodied, she sings the lullaby back wrong, and every Hush shape moves up to its speed at once. *Flicker:* at flicker 4 or more she has disadvantage on her first Hush each turn; at flicker 1 or less, her Hush is 2d8+2.
- *Hush* (two; three at dread 3+). Small undead, ash shapes with open mouths and no faces. AC 11, HP 8, speed 30. Initiative +2. *Mouth:* +3 to hit, 1d6+1 cold.
- *The song:* Katy keeps the E ringing (from 3). Each round she sings it (bonus action) or casts a spell with a slot, or it fades one step. At 0 the song breaks and the fight is lost. While it is at 2 or more, Matthew plays A, D, F under it at the top of each round: Katy gets 5 temporary HP (3 when it is at 2). Balanced with the fight sim: a careful Katy wins about 19 in 20.
- Katy's bard tools all apply: Vicious Mockery, Dissonant Whispers, Thunderwave, Shatter, Slow, Silvery Barbs, Cutting Words, Healing Word. All foe damage is cold.
- Older Katy at 0 HP: win, go to W3. Katy at 0 HP or the song breaks: no game over; the E stops and she hears nothing at all for a moment, go to W3x. Both lead to the same last choice.

---

## H1. Three of four

He tries.

You put the ukulele across his knees and he looks at it a long while before he touches it. Bronze. Worn bright where your thumb goes. It was his before it was yours.

His left hand finds the neck. The fingers are grey to the second knuckle and they don't bend all the way any more. He gets them onto the strings anyway.

A.

{sound: notes-four}

D.

F.

His hand stops. He hasn't forgotten; you can see in his face he knows exactly where the next one is. The fingers just won't go there.

There's ash on the strings. There's ash on everything down here. You've stopped brushing it off.

You reach across him and play the E.

It's the fourth note. The one your mother sang on. You've played it a thousand times.

{sound: string-e}

It doesn't stop ringing.

→ Continue (go to H2)

## H2. Ringing

You put your palm on the string to damp it. The E keeps going. You can feel it under your hand, buzzing, like a bee in a cupped hand.

{sound: drip}

The cave has gone still. The lamp on its flat stone doesn't flicker. Stig is half up off his stone with that towel in his fist. Saphira's hand is on her dagger. Hans has his head on one side, the way he does when he's listening to his own chest. Nobody moves.

Your father doesn't move either. His eyes are still on the strings.

The ash in the air has stopped coming down. It just hangs.

Down at the far end of the cave, past the Heart, somebody is walking away from you. A woman, with a long case on her back. You can't see her face. She doesn't look round. She doesn't get any further away either, however long you watch.

~Put it down.~

→ Continue (go to H3)

## H3. Blue legs

Something lands on the neck of the ukulele, right by your father's grey fingers.

A falcon. A small one, the size of your two hands together. She's made of ash, the whole of her, wings and beak and the little hooks of her claws, grey and soft at the edges like it might all blow off. Except the legs. The legs are bright blue, blue as a kingfisher.

You've seen her before. Once. On a windowsill, dying, with a letter on her leg.

{sound: wings}

She looks at you with one eye, then the other. Birds do that.

Then she hops down off the ukulele onto your father's wrist, and his skin under her feet isn't grey any more. It's brown. Young. There's a callus on the side of his thumb.

She looks at you again. Come on, then.

→ Put your hand on his wrist, next to her feet. (go to E0)

## E0. His

The cave goes out like a lamp, and you're standing in a lot of other places at once, none of them quite yet.

They're his. You know it the way you know your own handwriting. Every one of them smells a bit of him: lamp oil, wet wool, the tin he keeps his spare strings in.

You've wanted these for twenty-six years.

Three of them come up clear enough to step into. Bluefoot hops along your arm to your shoulder, light as nothing. She waits.

→ A bridge, and rain. (go to P1a)
→ A river in summer. (go to P2a)
→ The edge of a wood, a year later. (go to P3a)

*Hub: then go to S1*

## P1a. The bridge {past}

{sound: rain}

Rain. Proper rain, the kind that gets inside your boots.

A stone bridge over a brown river, dusk, a town at one end you don't know. Not elvish. Too many chimneys. People are hurrying across with their collars up and their heads down.

In the middle of the bridge a young man is playing a lute to all of them. Nobody stops. He's maybe nineteen. Wide hat, gone soft with the wet. Water runs off the brim in a string. He's playing well, too well for a bridge in the rain, and he knows it, and he's a bit cross about it.

His hat's on the ground in front of him for coins. There aren't any coins in it.

There's a bird in it. A falcon chick, all fluff and beak, sitting in the dry inside of the hat as if she'd paid for it.

You know his hands. You've never seen them before and you know them. The thumb sits wrong on the neck, flat, like yours did before your teacher at court smacked it with a ruler.

He finishes. Nobody claps. He looks down at the hat.

"Well," he says to the chick. "You're no good. You're meant to be a coin."

The chick opens her beak at him. The legs on her are blue.

[SAM?: Matthew busking young, and how he got Bluefoot]

→ Drop a coin in the hat. (go to P1b) -flicker
→ Stay where you are and just listen to him. (go to P1c) +dread

## P1b. A coin {past}

You've got coins. You've always got coins, it's the one thing a charlatan never runs out of. You walk up through the rain and drop one in the hat, by the chick.

It doesn't make a sound. It doesn't land. It just isn't there any more.

But he looks up.

Not at you. Past you, at the place you're standing, the way people look at a door when they think they heard a knock. Rain runs off his hat.

"Huh," he says.

Then he grins, at nobody, and starts another tune. A quicker one, a drinking song, the one about the miller's three wives. Badly, on purpose. A woman going by with a basket snorts. He bows to her.

The chick climbs out of the hat and sits on his boot.

Bluefoot on your shoulder digs her claws in a little.

?flicker<=1: Somewhere at the far end of everything, the woman with the case on her back has stopped walking. Just for a moment.

→ Back (go to E0)

## P1c. Listening {past}

You stand in the rain and listen. You don't try to be seen. People keep walking through you and you let them.

He plays the slow one after that. You don't know it. It has a turn in the middle you'd never have thought of, a place where it goes down when you're sure it's going up.

You want to stop him and ask him how he did that. You'd have been about four lines into the asking before he'd have told you to shut up and listen. You can tell that from his face.

The ash starts coming down with the rain. Grey in it. The song goes thin, like a cup with a crack.

You hold on to the tune with everything you've got. When it finishes you've got the turn in the middle. You think you've got it.

^^You'll play it for him later, and he'll know it.^^

→ Back (go to E0)

## P2a. Foxgloves {past}

{sound: river}

Summer. A shallow river in a big wood, brown water going clear over stones. The bank is thick with foxgloves, purple and white, taller than a child. The air hums.

{sound: wind-trees}

You know this place. You've never been. Your mother talked about it once, in the dark, when she thought you were asleep. The water's colder than you'd think, she said. Even in summer.

She's here.

She's sitting on a flat rock with her boots off and her feet in the water, and she's so young it hurts to look at her. Younger than you are now. Her hair's up any old how. Her shortbow is lying on the rock next to her, strung.

On the far bank a young man with a lute is trying to get across without getting wet. He's on his third stepping stone and it's going badly.

"You could just walk," she calls. "It's not deep."

"I'm a musician," he says. "We don't walk through rivers. We go round them."

"There isn't a round."

"Then I'll stay here and play to you from a safe distance."

And he does. He sits down on his stone in the middle of the river, with his boots dry and the lute on his knee, and plays.

A. D. F.

He stops. He frowns. He hasn't got the fourth one yet.

Your mother leans back on her hands, and without thinking about it at all, she sings it. The E. Just the one note, low.

He looks at her like she'd pulled him out of the river.

Bluefoot, young and fluffy, is sitting on the lute case on the far bank, watching them both.

[SAM?: the river in the Foxglove Woods where Matthew and Elodie met, and the four notes starting there]

→ Step out of the trees so they can see you. (go to P2c) +dread
→ Stay in the foxgloves and let it be theirs. (go to P2d) +flicker

## P2c. Seen {past}

You step out of the foxgloves onto the bank.

Your mother turns her head.

She looks right at you. For one breath she sees something; you can tell from the way her shoulders go. She's a wood elf, and she was a ranger before she was anything at court. She knows when someone's in the trees.

"Matthew," she says, very quietly. "There's somebody there."

He looks. He can't see you. He looks straight through you to the foxgloves behind, and shrugs, and goes back to his stone.

She keeps looking. Her hand has gone to the bow without her asking it to.

Then the ash comes down over the river, grey on the water, grey on the foxgloves, and she turns away and laughs at something he said, and you didn't hear what.

You'd have liked to hear what.

→ Back (go to E0)

## P2d. Theirs {past}

You stay where you are, in the foxgloves, with bees going in and out of the flowers beside your head.

They don't know you're there. Good.

He plays the four notes again, and this time he gets the E himself. She claps, slow, three times, to be annoying. He bows from his stone, and the stone tips, and he goes into the river up to his waist with the lute held up over his head.

She laughs so hard she has to lie down on the rock.

You laugh too. You didn't mean to. It just comes out, and it's her laugh. You never knew that. People at court said you had her eyes. Nobody ever said you had her laugh.

Bluefoot pecks your ear, gently, to say: time.

→ Back (go to E0)

## P3a. The edge of the wood {past}

{sound: wind-trees}

Autumn. The same big trees, gone red and gold, leaves coming down in handfuls. A narrow track goes in under them, into the dark.

He's a year older. He's walking fast up the track with the lute case on his back and his hat in his hand, and he's got a face on him like a boy on the first day of the holidays. He's practising something under his breath. You catch some of it.

"Elodie. I came back. I know. I know, I said I'd write. Elodie, I came back."

On his shoulder Bluefoot is grown now. Sleek. Blue legs.

Where the track goes in under the trees, somebody is standing in the way. Hooded. A bow across his back. You can't see his face and you can't hear what he says. The wind's too loud up here, all those leaves.

You can see your father's face, though. You watch it while the hooded one talks.

It goes from that boy's face to something you don't have a word for. Then to nothing. Polite. The face you put on at court when someone tells you the queen is busy.

He nods. He says something short. He puts his hat back on.

He turns round and walks back down the track, past you, close enough to touch.

[SAM?: the year after, seen from far off; Thorn is never named or heard here]

→ Go after him. (go to P3b) +dread
→ Go up the track to the hooded one. (go to P3c) -flicker

## P3b. After him {past}

You go after him. Down the track, out of the trees, onto open heath with the wind flattening the grass.

He walks fast for a long time. Then he stops, all at once, like something ran out.

He sits down on the heath with his back to the wood. He takes the lute out of the case. He doesn't play it. He holds it.

After a while he takes Bluefoot off his shoulder and holds her up in front of his face, and talks to her. You can hear him now. He talks to her the way you talk to a horse, low and steady.

"You go and look," he says. "Don't let them see you. Just look. Then come back and tell me."

Bluefoot looks at him with one eye, then the other.

"I'll be here," he says. "Or I'll be somewhere."

She goes up off his hand, fast, into the wind, back over the trees. He watches her until she's gone.

He doesn't know about you. You can see it in him. He's sending a bird to look at a woman. He hasn't got the first idea there's a baby.

~Nobody comes back for a song.~

→ Back (go to E0)

## P3c. The hooded one {past}

You walk up the track into the trees, to the one with the bow.

He's still standing there, watching your father go. You get right up to him. Close enough to see his hands. Long fingers, a bowman's calluses, a green stain on the side of one thumb from working bark.

He's shaking. Not much. You'd only see it this close.

You can't see his face in the hood, and you don't try. You stand next to him and watch your father walk away down the track, the way he's watching.

He doesn't move until your father is out of sight. Then he lets out a long breath, and sits down where he is with his back against a tree, and puts his face in his hands.

?flicker<=1: You know who he is. You've been angry with him for weeks. It's harder, standing here.

→ Back (go to E0)

## S1. The sill {past}

{sound: wings}

Bluefoot goes up off your shoulder, and you follow her without walking.

Night. Slate roofs, wet. A lot of them, going down and down in steps, and a palace above them with lamps in every window. Valethorn. You'd know those roofs blind. You climbed every one of them before you were ten.

Bluefoot lands on a sill. A narrow attic window, right under the eaves of the servants' wing. There's candlelight inside.

You know that window. It's yours.

Through it, small and blurred by old glass, there's a girl sitting up in a narrow bed. Seven, maybe. Red hair everywhere. She's got a crust of bread in her fist that she's been saving.

She sees the bird. She goes very still, so as not to scare it. Then she slides out of bed, pads across, lifts the latch an inch, and puts the crust on the sill.

Bluefoot looks at the bread. She looks at the girl. One eye, then the other.

She doesn't eat it. She just looks, a long time. Then she goes up into the dark again.

You remember. You'd forgotten and now you remember. The blue-legged bird. It came three summers running. You told your mother and she said that was nice, and she went to the window and looked out at the roofs for a long time, and didn't say anything else.

He was looking. All that time. He sent a bird to look at you.

[SAM?: Bluefoot visiting Katy at court; fits "after Doloris he only sent Bluefoot to check Katy was alive", but this is earlier]

→ Continue (go to S2)

## S2. The letter {past}

{sound: silence}

Then it's a different window, years on. Grey morning. Valarius, the inn, the room you've got with the crack in the ceiling.

Bluefoot comes down onto the sill hard, the way a bird lands when it's spent everything it had to get there.

You're there. You were there. You remember this one. You've tried not to.

There's a letter on her leg. Her feathers are coming out. There's black ash in the down at her throat, not on it. In it. Her blue legs have gone a dirty grey up to the knee.

You take the letter. Your hands do it. They did it then.

^^It is your enemy who wears the crown, and she knows you are coming.^^

The ash on the paper eats the end of it, the way it did. It goes grey and comes apart in your fingers.

Bluefoot puts her head down on the sill. She looks at you with one eye. She doesn't do the other one.

This Bluefoot, the ash one, is on your shoulder. She watches herself die.

{sound: drip}

Then she pushes her head against your cheek, once, light as a moth, and the window and the inn and the morning go grey and run like wet paint.

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

He tries.

You put the ukulele across his knees and he looks at it a long while.

E.

{sound: notes-back}

F. D. A.

Wrong way. The notes are going backwards. His fingers are lifting off the strings instead of pressing them.

The lamp is on the wrong side of the cave. Stig sits back down on his stone, then stands up, then sits down. Hans is humming his beat backwards. It sounds like someone breathing in for too long.

You look at your hands. You haven't reached across him yet. You're about to. You always are.

Then you have, and the E is ringing, and it's never going to stop.

Then you haven't.

~Put it down. Put it down. Put it down.~

There's ash on the ukulele in the shape of fingers. Smaller than his. Somebody else has played this E before you. A lot of times.

The ring goes up, and up, and up, until it's the only sound in the world.

→ Let it carry you on. (go to F0)

## F0. Not yet

{sound: string-e}

The ring comes back down, but different. Thin. Cold, the way a note sounds across water at night.

Bluefoot isn't on your shoulder. She doesn't come out here. You look for her and the air's empty.

These ones aren't his. They're yours. They haven't happened. They might not. They come in out of the ash like faces at a window, and every one of them has the four notes in it somewhere.

Three of them come up clear enough to step into.

→ A street, and children singing. (go to Q1a)
→ A full room, and a little stage. (go to Q2a)
→ A cart, at first light. (go to Q3a)

*Hub: then go to W1*

## Q1a. The street {future}

{sound: street-song}

A narrow street you don't know, cobbles, washing strung across between the windows. Morning. Somebody's frying onions.

Kids, six or seven of them, holding hands in a ring in the middle of the street. They're singing.

It takes you a moment.

It's your song. The one from the court square. The one you sang the day after your mother died, the one that started all of it. They've got the tune nearly right. They've got the words all wrong. Half of them are about a goat.

They don't know who wrote it. You can tell. They think it's just a song, like the miller's three wives. Something that's always been there.

An older girl leans out of a window and shouts at them to shut up, people are sleeping. They sing louder.

Then a man comes round the corner in a uniform you don't know, and the ring breaks up, fast, kids going every way like sparrows. One small boy is too slow. The man stops in front of him.

[SAM?: a maybe; no place named]

→ Go and stand next to the boy and sing it with him, the right words. (go to Q1c) +flicker
→ Stay back. It's not your street. They need to learn to run. (go to Q1d) +dread -flicker

## Q1c. The right words {future}

You go and stand next to the boy. He can't see you. You sing anyway.

The right words. All of them. The ones about the queen's door and the ones about your mother's hands. Your voice is older here. It's lower than you're used to, and rougher. It still carries.

The boy doesn't hear you. But he stops looking at his feet. He looks up at the man in the uniform and, very quietly, sings the next line. The goat line.

The man looks at him a long moment. He says something you can't hear, short, and walks off.

The boy runs.

You stand in the empty street with the onions frying. Somebody up in a window starts humming it.

→ Back (go to F0)

## Q1d. Not your street {future}

You stay where you are. You're good at that, at the edge of a crowd with your hood up, working out the ways out.

The man says something to the boy. The boy says something back. Then the boy runs, and the man lets him.

So that was all right.

You stand there a while. Your hands are cold. You put them in your pockets and find ash in both of them, and you don't know where from.

Up in a window somebody starts humming the song, then stops halfway, as if they'd remembered they weren't supposed to.

^^It's not your song any more.^^

→ Back (go to F0)

## Q2a. The stage {future}

{sound: tavern}

A full room. Low beams, a fire at one end, smoke. Every table taken, people standing at the back with their cups held up out of the way.

There's a little stage. Two crates and a board. There's a woman on it with a ukulele, tuning.

It's you. You know it from the back of the room, before you see her face. It's the way she stands. One hip out. Pretending she doesn't care if anyone listens.

She's older, though not old. Her hair's got grey in it at the front, a streak, like ash got in and stayed. She looks good. She looks tired.

She plays the four notes. A, D, F, E.

The whole room goes quiet. All of it, at once. Even the people at the back stop drinking.

She looks out at them. And her eyes go to the front table, right in the middle, where there's one chair that nobody's sitting in. A good chair. Somebody's put a cup in front of it.

She looks at it for a long moment. Then she starts the song.

→ Look at who's at the back of the room. (go to Q2b)

## Q2b. The back of the room {future}

At the back, by the door, there's a girl about fourteen, with a cheap ukulele on a string round her neck. She's mouthing the words. All of them. Getting the fingering on her own strings, silent, a beat behind.

She's not anyone you know. She's got a split lip and boots too big for her. She looks like she came in out of the cold and she's not sure she's allowed to be here.

On the stage, you haven't seen her. You're looking at the empty chair.

→ Make the you on the stage look up. (go to Q2c) +flicker
→ Leave it. Let her look at the chair. (go to Q2d) +dread -flicker

## Q2c. Look up {future}

You can't touch anything here. You try anyway. You put your hand on the you on the stage, on her shoulder, and push.

She looks up. Right up, to the back of the room. She sees the girl with the ukulele.

She stops in the middle of the line. The room waits.

"You," she says, to the back of the room. "With the instrument. Come here."

The girl goes red to the ears. Everyone turns round. She comes up through the tables like she's walking into the sea.

"Do you know the E?" you hear yourself say.

The girl nods.

"Play it, then. I'm tired of being the only one."

→ Back (go to F0)

## Q2d. The chair {future}

You leave her. She sings the whole song to the empty chair.

It's beautiful. You know it is. You can hear every place where she's got it right, and the turn in the middle that goes down when you think it's going up.

When she finishes, the room claps and stamps and bangs the tables. She doesn't look at them. She drinks the cup that was in front of the empty chair, and gets down off the crates.

At the back, the girl with the ukulele has gone.

→ Back (go to F0)

## Q3a. First light {future}

{sound: cart}

A dirt track, dawn, mist lying in the low fields. A cart, one horse, going slowly.

You're driving it. Older. The streak of grey at the front of your hair.

Your hands on the reins are grey to the second knuckle.

In the back of the cart, under a blanket, something small is asleep. You can see a bit of hair sticking out. Red.

[SAM?: a maybe; whose child is never said]

The cart stops at a gate. A farmhouse, lamps lit, someone already up. You get down. You stand at the back of the cart and look at the blanket for a long time.

Your lute case is on the seat. Packed. Ready.

~Somebody has to hold it.~

→ Wake her up and tell her why. (go to Q3c) +flicker
→ Leave the ukulele under the blanket with her, and go. (go to Q3d) +dread -flicker

## Q3c. Tell her {future}

You put your grey hand on the blanket and say her name. You don't hear what it is. The mist takes it.

She wakes up cross, the way kids do, all at once. She looks at your hands.

You tell her. You tell her where you're going, and that it's because of the thing in your hands, and that you'll come back if you can. You tell her you don't know if you can. You don't make it sound better than it is.

She listens. She doesn't cry. She's angry. She hits you on the arm, hard, and it doesn't hurt because of the grey.

"You could have just gone," she says. "You could have just left a note."

"I know."

"Why didn't you?"

You don't have an answer for that one that would fit in a cart.

→ Back (go to F0)

## Q3d. Under the blanket {future}

You take the bronze ukulele out of the case. You tuck it in under the blanket, next to her, where she'll find it when she wakes.

Then you get back up on the seat and take the reins in your grey hands and go, before anyone at the farmhouse comes out.

You don't look back. You're good at that.

The cart goes on into the mist. You watch it go from the gate.

From under the blanket, very faintly, someone half asleep plucks one string.

E.

~That's how it's done. That's how he did it.~

→ Back (go to F0)

## W1. The last of it

{sound: string-e}

The E is almost gone. You can hardly hear it. You can feel it in your teeth, that's all.

The cave comes back, but wrong. Pale. The floor's all ash, packed flat like snow on a path. The lamp is on its stone and the light from it doesn't reach anything.

Your father is sitting where he was, by his stone, with the ukulele across his knees. He's not moving. His hand is still on the neck. His eyes are on the strings.

The ash around you is full of mouths. You can't see them, but you can hear them, under the ring. They're singing your song. The lullaby. Every word wrong, slowed down, one beat behind you, like an echo in a big empty hall where the walls are too far off.

And between you and him, close now, close enough to touch, is the one who's been walking away from you all night. Her back to you. The case on her back. Grey to the elbows.

She's standing there like she's waiting for a cart.

You know that back. You know the way she stands, one hip out.

~Put it down.~

→ Turn her round. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

You put your hand on her shoulder and she turns round.

It's you.

Older. Grey in the hair at the front, the streak. Grey in the skin too, the same grey as your father's hand, from the fingertips up past the elbow. There's ash in the creases round her eyes. Her mouth is your mother's mouth. You never saw that in a mirror. You can see it on her.

She looks past you, at him, first. Her face does something you'd never let yours do in front of people.

@future: "Put it down."

"Put what down?"

@future: "That." She nods at your hand. You're holding the ukulele. You don't remember picking it up off his knees. "You'll play it until it eats you. Same as him. That's what it's for, in the end. Holding something back with your hands until there's nothing left of your hands."

"He's alive because he played it."

@future: "He's alive. Look at him."

You don't want to. You do. Grey to the elbow. Still. Eyes on the strings.

@future: "I went looking for him for twenty years. You know what I found? A song. That's all anybody ever leaves you. A song and a bird."

"Then why are you here?"

She opens her mouth. When it comes it's two voices, and they don't agree.

@future: "To stop you."

@future: "To hear it once more."

She holds up her hands. Grey. The fingertips have gone smooth, no calluses, no lines, as if they'd been worn down by strings until there was nothing left to wear.

@future: "I can't tell you if it works. Playing. Holding it back. I never got to see the end of it."

The mouths in the ash sing the next line wrong.

@future: "Give it to me. I'll put it down for you. Then you can just go and sit with him."

She reaches for the ukulele. She isn't trying to hurt you. She wants to take it off you, gently, like taking a knife off a child.

→ Keep hold of it. (go to @hush)

## W2x. The face, and the voices

{sound: heartbeat-two}

You put your hand on her shoulder and she turns round.

It's you. The streak of grey. Grey to the elbows, like him. Your mother's mouth.

@future: "Put it down."

And then you hear it. The mouths in the ash. They aren't strangers. Every one of them is singing in your voice.

?seen Q1d: The kids in the street, singing it wrong because nobody stood next to them.

?seen Q2d: The empty chair, and the girl at the back who left.

?seen Q3d: The ukulele under a blanket, and a cart going off into the mist.

?seen P1c: A young man on a bridge, and you only ever listened.

?seen P2c: Your mother turning her head, and not seeing you.

?dread>=4: All of them. Every one of them yours.

@future: "See? It's all the same song. Put it down."

She reaches for it. The mouths come up out of the ash.

→ Keep hold of it. (go to @hush)

## W3. The E

{sound: heartbeat-one}

She goes down on her knees in the ash. She isn't hurt. She's tired, the tiredest you've ever seen anybody.

?flicker>=3: She's hardly there. You can see the lamp through her.

?flicker<=1: She's solid. Heavy. The ash under her knees is pressed flat.

The mouths have gone quiet. The E is still ringing, just. Thin as a hair.

She looks up at you.

@future: "Well. Go on, then. You've still got it."

Your father hasn't moved. His hand is on the neck of the ukulele where you put it back. His eyes are on the strings.

You've got the E. You've got about one breath of it left. You know, the way you know things in dreams, that what you do with it is going to stay done.

→ Play the song through. All of it, to the end. (go to End 1)
→ Put your palm flat on the string and stop it. Then just sit with him. (go to End 2)
→ Hum the next note, and wait for someone else to pick it up. (go to End 3)

## W3x. Quiet

The E stops.

It doesn't fade out. It just stops, and everything goes with it. No ring, no voices, no lamp-hiss, nothing. You've never heard nothing before. Musicians don't. There's always something.

You're on your knees in the ash and you don't remember going down.

She's kneeling in front of you. She's got her grey hand over your mouth, gently. She takes it away.

@future: "There. That's what it's like. Now you know."

She sits back on her heels.

@future: "I'm sorry. I didn't want you to find out like that. Nobody told me either."

Then, very faint, so faint you might be making it up, the E. It starts again. Coming from the ukulele on your father's knees. His finger is on it. He didn't move his hand. He just pressed.

@future: "Huh," she says.

You've got the E. You've got about one breath of it.

→ Play the song through. All of it, to the end. (go to End 1)
→ Put your palm flat on the string and stop it. Then just sit with him. (go to End 2)
→ Hum the next note, and wait for someone else to pick it up. (go to End 3)

---

## End 1. The Whole Song

You play it.

All of it. The four notes, and the line after, and the turn in the middle that goes down when you think it's going up. You didn't know you knew that bit. You learned it on a bridge in the rain.

The mouths in the ash try to sing along wrong and you don't let them. You play over them. You've played over drunks and courtiers and a queen's guard banging on a door. You can play over ash.

She listens, on her knees. Her lips move with it.

When you get to the end, where you always stop, you don't stop. There's more. There's always been more; you just never had anyone to play it to. You make it up as you go and it's right.

She smiles. You've never seen your face do that.

@future: "That's it. That's how it goes."

Then she gets up, and puts the lute case back on her back, and walks off into the ash. She doesn't look round. You don't think she's going anywhere bad. She's walking like someone with somewhere to be.

Far off in the ash, where she's going, there's a doorway. There's fire in it, and the fire doesn't move.

?seen P1b: On the way, she passes a young man on a bridge, and drops a coin in his hat.

{sound: notes-four}

The cave comes back. The lamp flickers. The ash comes down again. The E is still ringing, an ordinary E, the kind that stops on its own in a few breaths.

Your father looks up from the strings. At you.

"Where'd you get that turn in the middle?" he says.

"Somewhere," you say.

Your fingertips are cold. They'll warm up.

> **Echo: The Whole Song.** Before you roll a Charisma (Performance) check, or a saving throw to keep your concentration on a spell, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the ash showed her, see below] At the end: she played the whole song, past where it usually stops. Hans logged: the bard played a song that is longer than the one she normally plays. I have the normal one on file. I have filed the new part separately. Her father asked where she got it. She did not say. I also did not say.

## End 2. Just Sit

You put your palm flat on the string.

It stops. Just like that, the way a string stops when you tell it to. You've done it ten thousand times.

The mouths in the ash go quiet.

She's still on her knees. She looks at your hand on the strings like she's never seen anyone do that before.

@future: "Oh," she says.

She looks at her own hands. The grey is going out of them, slowly, from the fingertips back, the way frost goes off a window. Under it they're just hands. A singer's hands, with calluses, and a split nail on the thumb.

@future: "Well, I'll be."

She doesn't say thank you. You wouldn't have either. She gets up and walks off into the ash, without the case. She left it on the ground.

Far off behind her there's a doorway with fire in it that doesn't move. She doesn't look at it once.

You don't play anything. You put the ukulele down, on the floor, out of the way. You sit down next to him, in the ash, with your shoulder against his.

{sound: silence}

The cave comes back. The lamp flickers. The ash comes down again.

You're sitting next to your father. Not playing anything. You don't think you've ever done this. Sat next to someone and not been the music.

He looks at you, a bit surprised. Then he leans, just a bit, so his shoulder's against yours.

He doesn't say anything. Neither do you.

?seen S1: After a while he says, very quietly, "There was a bird." And you say, "I know. I fed it."

> **Echo: Just Listen.** Before you roll a Wisdom (Insight) check to understand what someone means, or what they aren't saying, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the ash showed her] At the end: she stopped the string and sat with him without playing. Hans logged: the bard sat down next to her father and did not play anything for some time. I have checked. Her hands were fine. She just did not play. This is new. I have made a new category.

## End 3. Everybody Knows It

You hum the next note. The one after the E. Just hum it, low, not even using the strings.

And you wait.

It's the hardest thing. Musicians don't wait. You've spent your whole life filling every silence in every room before anyone else can.

Nothing.

She watches you from her knees.

Then, from somewhere behind you, someone hums it back. Badly. Low as a cellar. Stig, who can't sing to save his life. You know it's him without looking.

Then someone else. Hans, with a beep in it. Then Saphira, so quiet you nearly miss it, and she's got it right, every note. You didn't know she'd been listening.

She's crying. The older you. You've never seen yourself cry. It's not pretty.

@future: "I never asked," she says. "Not once. Twenty years."

Then she's laughing, the laugh, your mother's laugh, and she gets up and walks off into the ash, humming the next line.

Far ahead of her there's a doorway full of fire that doesn't move. Somebody big is sitting by it with a towel over one knee. He picks the tune up. Badly.

{sound: notes-four}

The cave comes back. The lamp flickers. The ash comes down again.

The E has stopped. Nobody's humming anything. Stig is sitting on his stone with the towel. Saphira is looking at the wall.

But your father's head comes up. He's looking round the cave, at all of them, puzzled.

"Did somebody just...?" he says.

Nobody owns up.

> **Echo: Everybody Knows It.** When you give a creature a Bardic Inspiration die, you can spend this Echo: that creature also has advantage on the next ability check it makes before the end of its next turn.

**Sent to Sam:** [what the ash showed her] At the end: she hummed the next note and waited for the crew to pick it up. Hans logged: the bard stopped in the middle of a song and waited. She has never waited in a song before. I have the records. Somebody hummed. It was possibly me. I have not logged who.

## What the ash showed her (first lines of every "Sent to Sam", one per passage reached)

- **The bridge, a coin (P1b):** Hans logged: she saw her father young, on a bridge in the rain, with a falcon chick in his hat. She gave him a coin. It did not arrive. He looked up anyway. [SAM?]
- **The bridge, listened (P1c):** Hans logged: she saw her father young, on a bridge in the rain. She listened. She learned the turn in the middle of his slow song. [SAM?]
- **The river, seen (P2c):** Hans logged: she saw her mother and father meet, at a river, and her mother almost saw her. [SAM?]
- **The river, left them be (P2d):** Hans logged: she saw her mother and father meet, at a river. Her father fell in. She found out she has her mother's laugh. [SAM?]
- **The wood's edge, after him (P3b):** Hans logged: she saw her father turned away at the edge of the wood, a year later. She followed him. He sent the bird back to look. He did not know about her. [SAM?]
- **The wood's edge, the hooded one (P3c):** Hans logged: she saw her father turned away at the edge of the wood, a year later. She stood next to the one who did it. He sat down after. [SAM?]
- **The sill (S1):** Hans logged: the blue-legged bird used to come to her window at court when she was small. She fed it. It was her father's. [SAM?]
- **The letter (S2):** Hans logged: she watched Bluefoot arrive at the inn again, the morning the bird died.
- **The loop (L1):** Hans logged: for a moment the four notes went backwards. My records show them going forwards. I have checked both.
- **The street, sang with him (Q1c):** Hans logged: in a street that does not exist yet, children were singing her song with the words wrong. She sang the right ones next to a boy who was too slow to run.
- **The street, stayed back (Q1d):** Hans logged: in a street that does not exist yet, children were singing her song with the words wrong. She stayed back. She found ash in her pockets.
- **The stage, looked up (Q2c):** Hans logged: she saw herself older, singing to a full room, and called a girl up to play the E with her.
- **The stage, the chair (Q2d):** Hans logged: she saw herself older, singing to an empty chair. The girl at the back left.
- **First light, told her (Q3c):** Hans logged: she saw herself older, grey-handed, leaving someone small asleep in a cart. She woke them and told them why. [SAM?]
- **First light, left it (Q3d):** Hans logged: she saw herself older, grey-handed, leaving someone small asleep in a cart. She left the ukulele with them. [SAM?]
- **Went down in the fight (W3x):** Hans logged: in the fight the E stopped, and she heard nothing at all. Then her father pressed the string.

**Never sent:** what Matthew said to the hooded one or the hooded one to him, whose child is in the cart, how long anybody has, or what the older Katy was holding back.

## Whispers (the older Katy's voice, scattered by the game as the dread grows)

- Put it down.
- Nobody comes back for a song.
- Somebody has to hold it.
- One more time.
- That's not how it goes.
- A song and a bird.
- Don't stop. Don't stop.
- He can't hear you.
- Keep your thumb off the neck.
- Twenty years.
- Who taught you that?
- Put it down.

## Cutscene: string

- The cave, gone still. Ash hangs in the lamplight and doesn't come down.
- His grey fingers on the strings. A. D. F.
- They stop.
- Your hand reaches across him.
- Katy: E.
- The string shakes, and keeps shaking. Ash jumps off it.
- Blue legs, landing on the neck of the ukulele.
- Down. The lamp shrinks to a coin, then a star.
- @future: Put it down.
- Four Notes

## Cutscene: face

- A pale floor of ash, packed flat. The lamp's light reaches nothing.
- A woman's back, a lute case on it. Grey to the elbows.
- You put your hand on her shoulder.
- She turns round, slowly.
- It's you. The streak of grey. Your mother's mouth.
- @future: Put it down.
- @future: Stop. / Once more.
- She reaches for the ukulele. Gently, like taking a knife off a child.

## Cutscene: end 1

- Your fingers on the strings. You don't stop where you always stop.
- The mouths in the ash fall quiet, one at a time.
- She mouths the words with you, on her knees.
- @future: That's how it goes.
- She stands, shoulders the case, and walks off into the ash, toward a doorway of fire.
- Katy: E.

## Cutscene: end 2

- Your palm, flat on the string. It stops.
- She looks at her hands. The grey goes out of them, from the fingertips back.
- @future: Oh.
- She leaves the lute case lying in the ash and walks away from the fire.
- You sit down next to him. Shoulder to shoulder.

## Cutscene: end 3

- You hum. Just hum. And you wait.
- Nothing.
- A low hum from behind you, badly. Then another, with a beep in it. Then a third, quiet and exact.
- She laughs, and it's your mother's laugh.
- @future: I never asked.
- She walks off humming. Far ahead, by a doorway of fire, somebody picks it up.
- Katy: E.
