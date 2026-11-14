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

Your father is trying to play.

You laid the ukulele across his knees and he looked at it for a long while before he touched it. It's bronze, rubbed bright where your thumb goes. It was his before it was yours.

His left hand finds the neck. The fingers are grey to the second knuckle and don't bend all the way any more, but he gets them down on the strings.

A.

{sound: notes-four}

D.

F.

His hand stops there. His face says he knows exactly where the next note is. The fingers won't make the reach.

There's ash on the strings and on everything else down here. You've given up brushing it off.

You reach across him and play the E yourself. It's the fourth note, the one your mother sang on, and you've played it a thousand times.

{sound: string-e}

It doesn't stop ringing.

→ Continue (go to H2)

## H2. Ringing

You lay your palm on the string to damp it, and the E goes on. It buzzes against your hand.

{sound: drip}

The cave has gone still. The lamp on its flat stone has stopped flickering. Stig is half up off his stone with that towel in his fist. Saphira has a hand on her dagger. Hans has his head on one side, which he does when he's listening to his own chest. None of them moves.

Your father doesn't move either. He's still looking at the strings.

The ash in the air has stopped falling and hangs where it was.

Down at the far end of the cave, past the Heart, a woman is walking away from you with a long case on her back. You can't see her face and she doesn't look round. She takes a dozen steps and gets no further off.

~Put it down.~

→ Continue (go to H3)

## H3. Blue legs

A falcon lands on the neck of the ukulele, right beside your father's grey fingers.

She's small, the size of your two hands together, and made of ash down to the hooks of her claws. A good sneeze would have the lot off. Only her legs are kingfisher blue.

You've seen her once before. She was on a windowsill then, dying, with a letter tied to her leg.

{sound: wings}

She looks at you with one eye and then with the other.

Then she hops down onto your father's wrist. Under her feet his skin has gone brown and young, with a callus on the side of the thumb.

She gives you the eye again. You don't speak falcon, but that one means hurry up.

→ Put your hand on his wrist, next to her feet. (go to E0)

## E0. His

The cave goes dark, and you're standing in a great many other places at the same time. They're memories and none of them is yours.

They're his. Every one smells of him, of wet wool and the tin he keeps his spare strings in. You have wanted these for twenty-six years.

Three of them come up clear enough to step into. Bluefoot walks up your arm to your shoulder, weighing nothing at all, and waits for you to pick.

→ A bridge, and rain. (go to P1a)
→ A river in summer. (go to P2a)
→ The edge of a wood, a year later. (go to P3a)

*Hub: then go to S1*

## P1a. The bridge {past}

{sound: rain}

It's raining properly, the sort that gets inside your boots.

You're on a stone bridge over a brown river at dusk. The town at one end has too many chimneys to be an elf town. People are hurrying across with their collars up.

In the middle of the bridge a young man is playing a lute at them, and not one of them stops. He's nineteen or so. His wide hat has gone soft in the wet and the water runs off the brim in a string. He's playing well, far too well for a bridge in the rain. He knows it, and he's a bit cross about it.

The hat upside down at his feet for coins holds no coins. It holds a falcon chick, all fluff and beak, sitting in the dry as if she'd paid for the seat.

You know his hands, though you've never seen them. The thumb sits wrong on the neck, flat, where yours sat until your teacher at court took a ruler to it.

He finishes and nobody claps. He looks down at the hat.

"Well," he says to the chick. "You're no good. You're meant to be a coin."

The chick opens her beak at him. Her legs are blue.

[SAM?: Matthew busking young, and how he got Bluefoot]

→ Drop a coin in the hat. (go to P1b) -flicker
→ Stay where you are and just listen to him. (go to P1c) +dread

## P1b. A coin {past}

You have coins. A charlatan always has coins. You walk up through the rain and drop one into the hat beside the chick.

It never lands. Halfway down it stops being there.

He looks up all the same. His eyes go to the spot where you're standing and on past it. Rain runs off his hat.

"Huh," he says.

Then he grins at nobody and starts a new tune. It's a quick one, the drinking song about the miller's three wives, and he plays it badly on purpose. A woman going by with a basket snorts. He bows to her.

The chick climbs out of the hat and sits on his boot. On your shoulder, Bluefoot digs her claws in a little.

?flicker<=1: A long way behind all this, the woman with the case on her back has stopped walking. Then she walks on.

→ Back (go to E0)

## P1c. Listening {past}

You stand in the rain and listen. People walk straight through you and you let them.

Next he plays a slow one that you don't know. There's a turn in the middle you'd never have thought of, where the tune goes down just when you're sure it's going up.

You want to stop him and ask how he did that. You'd get about four lines into asking before he told you to shut up and listen. He has that sort of face.

Ash starts coming down with the rain and turns it grey. The song gets thin, with gaps in it where notes should be.

You hang on to the tune. By the time he finishes you have the turn in the middle, or you think you have.

^^You'll play it for him later, and he'll know it.^^

→ Back (go to E0)

## P2a. Foxgloves {past}

{sound: river}

It's summer. A shallow river runs through a big wood, brown in the pools and clear where it goes over stones. The bank is thick with foxgloves, purple ones and white ones, taller than a child. The air is loud with bees.

{sound: wind-trees}

You know this place without ever having been here. Your mother talked about it once, in the dark, when she thought you were asleep. The water's colder than you'd think, she said, even in summer.

She's sitting on a flat rock with her boots off and her feet in that water. She's younger than you are now, and you can't look straight at her for long. Her hair is pinned up any old how. Her shortbow lies next to her on the rock, strung.

On the far bank a young man with a lute is trying to cross without getting wet. He's on his third stepping stone and it's going badly.

"You could just walk," she calls. "It's not deep."

"I'm a musician," he says. "We don't walk through rivers. We go round them."

"There isn't a round."

"Then I'll stay here and play to you from a safe distance."

He sits down on his stone in the middle of the river, boots dry, lute on his knee.

A. D. F.

He stops and frowns. He hasn't found the fourth note yet.

Your mother leans back on her hands and sings it without a thought, one low E.

He stares at her as if she'd just fished him out of the river.

Bluefoot, still young and fluffy, sits on the lute case on the far bank and watches the pair of them.

[SAM?: the river in the Foxglove Woods where Matthew and Elodie met, and the four notes starting there]

→ Step out of the trees so they can see you. (go to P2c) +dread
→ Stay in the foxgloves and let it be theirs. (go to P2d) +flicker

## P2c. Seen {past}

You step out of the foxgloves onto the bank.

Your mother turns her head and looks right at you. Her shoulders come up. She can't quite see you, but she has always known when somebody was in the trees.

"Matthew," she says, very quietly. "There's somebody there."

He looks. He looks straight through you at the foxgloves behind, shrugs, and turns back to his lute.

She goes on looking. Her hand has found the bow by itself.

Then ash comes down over the river and lies grey on the water and on the flowers. She turns away from you and laughs at a thing he's just said. You didn't catch what.

→ Back (go to E0)

## P2d. Theirs {past}

You stay in the foxgloves, with bees going in and out of the flowers next to your head. Neither of them knows you're there, and that's how you want it.

He plays the four notes again and this time finds the E himself. She claps three times, slowly, to annoy him. He bows to her from his stone. The stone tips, and he goes into the river up to his waist with the lute held over his head.

She laughs so hard she has to lie down on the rock.

You laugh as well, before you can stop it, and the laugh that comes out is hers. People at court always told you that you had her eyes. Not one of them mentioned the laugh.

Bluefoot pecks your ear, gently, and you go.

→ Back (go to E0)

## P3a. The edge of the wood {past}

{sound: wind-trees}

It's autumn now. The same big trees have gone red and gold and the leaves are coming down by the handful. A narrow track runs in under them, where it's dark.

He's a year older. He's walking fast up the track with the lute case on his back and his hat in his hand, grinning to himself, and he's rehearsing under his breath. You catch some of it.

"Elodie. I came back. I know. I know, I said I'd write. Elodie, I came back."

Bluefoot rides on his shoulder, full grown and sleek, on her blue legs.

Somebody is standing where the track goes in under the trees, and he's in the way. He has his hood up and a bow across his back. You can't see his face. You can't hear a word he says either, with the wind in all those leaves.

You can see your father's face, so you watch that while the hooded one talks.

The grin goes first. For a bit there's a look you have no name for. Then his face empties and turns polite, and that one you do know. You wear it at court when they tell you the queen is busy.

He nods and says a few words. He puts his hat back on.

Then he turns round and walks back down the track. He passes close enough for you to touch him.

[SAM?: the year after, seen from far off; Thorn is never named or heard here]

→ Go after him. (go to P3b) +dread
→ Go up the track to the hooded one. (go to P3c) -flicker

## P3b. After him {past}

You follow him down the track and out of the trees, onto open heath where the wind has the grass lying flat.

He keeps up that fast walk for a long time. Then he stops dead and sits down on the heath with his back to the wood. He takes the lute out of its case and holds it without playing.

After a while he lifts Bluefoot off his shoulder and holds her up in front of his face. Out here you can hear him. He speaks to her low and steady.

"You go and look," he says. "Don't let them see you. Just look. Then come back and tell me."

Bluefoot looks at him with one eye and then the other.

"I'll be here," he says. "Or I'll be somewhere."

She goes up off his hand, fast, into the wind and back over the trees. He watches until he can't see her.

He has no idea about you. He's sending a bird to look at a woman, and it hasn't crossed his mind that there's a baby.

~Nobody comes back for a song.~

→ Back (go to E0)

## P3c. The hooded one {past}

You walk up the track and in under the trees, to the one with the bow.

He hasn't moved. He's watching your father go. You get close enough to study his hands, which are long in the finger and callused where a bowstring rubs. One thumb has a green stain down the side from working bark.

The hands are shaking. It's slight, and you'd never spot it from the track.

His face is back inside the hood and you don't go looking for it. You stand beside him and the two of you watch your father walk away.

He stays on his feet until your father is out of sight. Then he lets out a long breath, sits down against the nearest tree and puts his face in his hands.

?flicker<=1: You know who he is. You've been angry with him for weeks. It's harder to keep that up from here.

→ Back (go to E0)

## S1. The sill {past}

{sound: wings}

Bluefoot goes up off your shoulder and you go with her, without taking a step.

It's night. Wet slate roofs go down the hill in steps, a great many of them, and above them stands a palace with a lamp in every window. This is Valethorn. You'd know those roofs blind, having climbed every one of them before you were ten.

Bluefoot lands on the sill of a narrow attic window, up under the eaves of the servants' wing. There's a candle lit inside. It's your window.

Through the old glass, small and blurred, you can see a girl sitting up in a narrow bed. She's about seven and her red hair goes everywhere. She has a crust of bread in her fist that she's been saving.

She sees the bird and goes still, so as not to frighten it. Then she slides out of bed, pads over, lifts the latch an inch and puts the crust out on the sill.

Bluefoot looks at the bread and then at the girl, one eye at a time. She doesn't eat it. She looks for a long while, and then she goes up into the dark.

You'd forgotten the blue-legged bird. It came three summers running, so he was looking all that time. You told your mother about it, and she said that was nice. Then she went to the window and looked out over the roofs for a long time, and she didn't say another word.

[SAM?: Bluefoot visiting Katy at court; fits "after Doloris he only sent Bluefoot to check Katy was alive", but this is earlier]

→ Continue (go to S2)

## S2. The letter {past}

{sound: silence}

Then it's another window, years later, on a grey morning. This is the inn in Valarius and the room you've got there, the one with the crack in the ceiling.

Bluefoot hits the sill hard. She has used up everything she had on getting here.

You were in this room that morning. You've worked at forgetting it.

There's a letter on her leg. Her feathers are falling out. There's black ash worked into the down at her throat. Her blue legs have turned a dirty grey up to the knee.

Your hands take the letter. They did it that morning too.

^^It is your enemy who wears the crown, and she knows you are coming.^^

The ash on the paper eats the end of it, same as last time. The page goes grey and comes apart in your fingers.

Bluefoot lays her head down on the sill. She looks at you with one eye. She doesn't get to the other.

The ash Bluefoot is still on your shoulder, and she watches herself die.

{sound: drip}

Then she pushes her head against your cheek, once, so lightly you could have missed it. The window and the inn go grey and wash away.

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

He tries again. You lay the ukulele across his knees and he looks at it for a long while.

E.

{sound: notes-back}

F. D. A.

The notes are running backwards, and his fingers are coming up off the strings when they should be pressing down.

The lamp is on the wrong side of the cave. Stig sits back down on his stone, stands up, and sits down again. Hans is humming his beat back to front, and it sounds like one very long breath in.

You look at your hands. You haven't reached across to play the E yet. You're about to. Then you have, and the E is ringing and won't ever stop. Then you haven't again, and you're about to.

~Put it down. Put it down. Put it down.~

There are fingermarks in the ash on the ukulele, and they're smaller than his. Somebody has played this E before you, many times over.

The ring climbs until you can't hear anything else.

→ Let it carry you on. (go to F0)

## F0. Not yet

{sound: string-e}

The ring comes back down, but it has changed. It's thin and cold now, a note heard from the far side of a lake at night.

Bluefoot has gone from your shoulder. You look round for her and there's only air. She doesn't come out this far.

The ones out here are yours. None of them has happened, and they might never. They come up out of the ash one at a time, and each has the four notes in it somewhere.

Three of them come up clear enough to step into.

→ A street, and children singing. (go to Q1a)
→ A full room, and a little stage. (go to Q2a)
→ A cart, at first light. (go to Q3a)

*Hub: then go to W1*

## Q1a. The street {future}

{sound: street-song}

You're in a narrow cobbled street you don't know, with washing strung across between the windows. It's morning and somebody is frying onions.

Six or seven children are holding hands in a ring in the middle of the street, singing. It takes you two lines to place the tune.

It's yours. It's the song from the court square, the one you sang the day after your mother died, and everything since started with it. They have the tune nearly right and the words all wrong. Half of their version is about a goat.

They don't know anybody wrote it. To them it's just a song, same as the miller's three wives, and it has always been there.

An older girl leans out of a window and yells at them to shut up, people are sleeping. They sing louder.

Then a man in a uniform you don't recognise comes round the corner. The ring breaks and the children scatter in every direction. One small boy is too slow, and the man stops in front of him.

[SAM?: a maybe; no place named]

→ Go and stand next to the boy and sing it with him, the right words. (go to Q1c) +flicker
→ Stay back. It's not your street. They need to learn to run. (go to Q1d) +dread -flicker

## Q1c. The right words {future}

You go and stand next to the boy. He can't see you, and you sing anyway.

You sing the right words, every one of them, the lines about the queen's door and the lines about your mother's hands. Your voice is older here, lower and rougher, and it still carries.

The boy doesn't hear any of it. He does stop looking at his feet. He looks up at the man in the uniform and, very quietly, sings the next line. It's the goat line.

The man looks at him for a good while. He says a few words that you can't hear, and walks off. The boy runs.

You're left in the empty street with the smell of onions. Up in one of the windows, somebody starts to hum the tune.

→ Back (go to F0)

## Q1d. Not your street {future}

You stay put. You've stood at the edge of plenty of crowds with your hood up, counting the ways out, and you're good at it.

The man says a few words to the boy and the boy answers. Then the boy runs, and the man lets him. So that turned out all right.

You stand there a while longer. Your hands are cold. You put them in your pockets and find ash in both, and you can't think where you picked it up.

Up in a window somebody starts humming the song. They get halfway through and break off.

^^It's not your song any more.^^

→ Back (go to F0)

## Q2a. The stage {future}

{sound: tavern}

The room is full. It has low beams, a fire at one end and a good deal of smoke. Every table is taken, and the people standing at the back hold their cups up out of the crush.

The stage is two crates with a board across them. A woman is standing on it, tuning a ukulele.

It's you. You know from the back of the room, before you've seen her face, because she stands with one hip out and acts as though she doesn't care who's listening.

She's older, though not old. There's a grey streak at the front of her hair where the ash got in and stayed. She looks well, and she looks tired.

She plays the four notes. A, D, F, E.

The whole room goes quiet at once. Even the ones at the back stop drinking.

She looks out over them. Her eyes go to the front table, in the middle, where one chair is empty. It's a good chair, and somebody has set a cup down in front of it.

She looks at the chair for some time. Then she starts the song.

→ Look at who's at the back of the room. (go to Q2b)

## Q2b. The back of the room {future}

By the door at the back stands a girl of about fourteen with a cheap ukulele hung round her neck on a string. She's mouthing the words, all of them. Her left hand is finding the chords on her own strings, without a sound, one beat behind the stage.

You don't know her. She has a split lip and boots too big for her, and she keeps close to the door in case somebody tells her to get out.

The you on the stage hasn't noticed her. She's singing to the empty chair.

→ Make the you on the stage look up. (go to Q2c) +flicker
→ Leave it. Let her look at the chair. (go to Q2d) +dread -flicker

## Q2c. Look up {future}

You can't touch anything in here. You try it anyway. You put your hand on the shoulder of the you on the stage, and shove.

She looks up, all the way to the back of the room, and sees the girl with the ukulele. She stops in the middle of a line. The room waits.

"You," she says. "At the back, with the instrument. Come here."

The girl goes red to the ears. Every head in the place turns. She comes up between the tables one slow step at a time.

"Do you know the E?" you hear yourself say.

The girl nods.

"Play it, then. I'm tired of being the only one."

→ Back (go to F0)

## Q2d. The chair {future}

You leave her to it, and she sings the whole song to the empty chair.

It's good. You'd pay to hear it. She gets every hard place right, including a turn in the middle where the tune goes down just when you expect it to go up.

When she's done the room stamps and bangs on the tables. She doesn't look at any of them. She picks up the cup that was set in front of the empty chair, drinks it, and climbs down off the crates.

The girl with the ukulele has gone from the back of the room.

→ Back (go to F0)

## Q3a. First light {future}

{sound: cart}

A dirt track at dawn, with mist lying in the low fields. A cart with one horse is coming along it slowly.

You're the one driving, older, with a grey streak at the front of your hair. Your hands on the reins are grey to the second knuckle.

In the back, under a blanket, somebody small is asleep. A bit of hair sticks out at the top, and it's red.

[SAM?: a maybe; whose child is never said]

The cart stops at a gate. Beyond it is a farmhouse with its lamps lit, so someone is already up. You get down and stand at the back of the cart, and you look at the blanket for a long time.

Your lute case is on the seat, packed.

~Somebody has to hold it.~

→ Wake her up and tell her why. (go to Q3c) +flicker
→ Leave the ukulele under the blanket with her, and go. (go to Q3d) +dread -flicker

## Q3c. Tell her {future}

You put your grey hand on the blanket and say her name. You can't hear what name it is, because the mist swallows it.

She wakes up all at once, and cross about it. The first thing she looks at is your hands.

So you tell her. You say where you're going, and that it's on account of what's in your hands, and that you'll come back if you can. You say you don't know whether you can. You don't dress any of it up.

She hears you out and doesn't cry. She's furious. She punches you on the arm, hard, and through the grey you can't feel it.

"You could have just gone," she says. "You could have just left a note."

"I know."

"Why didn't you?"

You don't have an answer to that one that would fit in a cart.

→ Back (go to F0)

## Q3d. Under the blanket {future}

You take the bronze ukulele out of the case and tuck it in under the blanket beside her, where she'll find it when she wakes.

Then you climb back onto the seat, take the reins in your grey hands and go, before anyone comes out of the farmhouse.

The older you doesn't look back. You stand at the gate and watch the cart until the mist has it.

From under the blanket, very faintly, somebody half asleep plucks one string.

E.

~That's how it's done. That's how he did it.~

→ Back (go to F0)

## W1. The last of it

{sound: string-e}

The E is nearly gone. You feel it in your teeth more than you hear it.

The cave comes back wrong. Everything is pale. The floor is ash, trodden flat like snow on a path. The lamp is on its stone and its light doesn't land on anything.

Your father is sitting where he was, by his stone, with the ukulele across his knees. His hand is still on the neck and he's still looking at the strings. He doesn't move.

The ash around you is full of mouths. You can't see them. You can hear them under the ring, singing the lullaby, your song. They have every word wrong, and they drag it a beat behind where you'd be.

Between you and him stands the woman who has been walking away from you all night. She's close enough to touch now. Her back is to you, the case is on it, and her arms are grey to the elbows.

She stands with one hip out. You know that stance.

~Put it down.~

→ Turn her round. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

You put your hand on her shoulder and she turns round.

She's you, some years on. The grey streak is there at the front of her hair. Her skin has gone the same grey as your father's hand, from the fingertips to above the elbow, and there's ash in the creases round her eyes. She has your mother's mouth. You've never caught that in a mirror, and on her it's plain.

She looks past you first, at him, and her face crumples. You'd never let yours do that in front of people.

@future: "Put it down."

"Put what down?"

@future: "That." She nods at your hand. You're holding the ukulele, and you have no memory of lifting it off his knees. "You'll play it until it eats you. Same as him."

"He's alive because he played it."

@future: "He's alive. Look at him."

You'd rather not, and you do. He's grey to the elbow. He hasn't moved, and he's still looking at the strings.

@future: "I've played it every night for twenty years. Look at my hands."

"Then why are you here?"

She opens her mouth and two voices come out, and they give different answers.

@future: "To stop you."

@future: "To hear it once more."

She holds up her hands. The fingertips are grey and perfectly smooth. The strings have worn off the calluses, and then the lines under them.

@future: "I can't tell you if it works. Playing. Holding it back. I never got to see the end of it."

The mouths in the ash sing the next line, wrong.

@future: "Give it to me. I'll put it down for you. Then you can just go and sit with him."

She reaches for the ukulele. She means you no harm. She only wants it out of your hands, and she's gentle about it.

→ Keep hold of it. (go to @hush)

## W2x. The face, and the voices

{sound: heartbeat-two}

You put your hand on her shoulder and she turns round.

She's you, some years on. She has a grey streak in her hair and arms grey to the elbows, the same as his. She has your mother's mouth.

@future: "Put it down."

Now you can make out the mouths in the ash, and every one of them is singing in your voice.

?seen Q1d: The children in the street are in there, singing it wrong because nobody stood next to them.

?seen Q2d: The empty chair is in there, and the girl at the back who left.

?seen Q3d: The ukulele under the blanket is in there, and the cart going off into the mist.

?seen P1c: A young man on a bridge is in there, and you only ever listened to him.

?seen P2c: Your mother is in there, turning her head and not seeing you.

?dread>=4: All of them are yours.

@future: "See? It's all the same song. Put it down."

She reaches for it. The mouths come up out of the ash.

→ Keep hold of it. (go to @hush)

## W3. The E

{sound: heartbeat-one}

She goes down on her knees in the ash, and more ash sifts off her hands.

?flicker>=3: There's hardly any of her left. You can see the lamp through her.

?flicker<=1: She's solid and heavy. The ash is pressed flat under her knees.

The mouths have shut up. The E is still ringing, though only just.

She looks up at you.

@future: "Well. Go on, then. You've still got it."

Your father hasn't moved. His hand is on the neck of the ukulele, which you've put back on his knees, and he's looking at the strings.

You have the E for about one more breath. Whatever you spend it on, you won't get it back.

→ Play the song through. All of it, to the end. (go to End 1)
→ Put your palm flat on the string and stop it. Then just sit with him. (go to End 2)
→ Hum the next note, and wait for someone else to pick it up. (go to End 3)

## W3x. Quiet

The E stops.

It doesn't die away. It's cut off, and every other sound goes with it, the voices and the hiss of the lamp included. You have never in your life heard nothing. Musicians don't. There's always a gutter dripping or somebody breathing.

You're on your knees in the ash and you don't remember going down.

She's kneeling in front of you with her grey hand over your mouth. She isn't pressing. She takes it away.

@future: "That's the end of the song. That's all it is."

She sits back on her heels.

@future: "I'm sorry. I didn't want you to find out like that. Nobody told me either."

Then the E starts again. It's so faint that you might be making it up. It's coming from the ukulele on your father's knees, and his finger is on the string. He hasn't moved his hand. He has pressed down, and that's all.

@future: "Huh," she says.

You have the E for about one more breath.

→ Play the song through. All of it, to the end. (go to End 1)
→ Put your palm flat on the string and stop it. Then just sit with him. (go to End 2)
→ Hum the next note, and wait for someone else to pick it up. (go to End 3)

---

## End 1. The Whole Song

You play it, all of it. The four notes and the line after them, and then the turn in the middle where the tune goes down when you'd expect it to go up. You didn't know you had that part.

?seen P1c: You learned it on a bridge in the rain.

The mouths in the ash try to join in with their wrong words, and you play over the top of them. You've played over drunks, and over a queen's guard hammering on a door. Ash is no harder.

She listens on her knees, and her lips move with the words.

You get to the place where you always stop, and you keep going. There's more of it. There always was, and you never had anybody to play it to. You make it up as you go, and each note is the right one.

She smiles. You didn't know your face could do that.

@future: "That's it. That's how it goes."

Then she gets up, swings the lute case onto her back and walks off into the ash without looking round. You don't think she's headed anywhere bad. She has the walk of someone who's expected.

A long way off, where she's going, there's a doorway with fire in it. The fire doesn't move.

?seen P1b: On her way she passes a young man on a bridge, and drops a coin in his hat.

{sound: notes-four}

The cave's back. The E is an ordinary E again, and in a few breaths it dies away.

Your father looks up from the strings, at you.

"Where'd you get that turn in the middle?" he says.

"Somewhere," you say.

Your fingertips are cold. They'll warm up.

> **Echo: The Whole Song.** Before you roll a Charisma (Performance) check, or a saving throw to keep your concentration on a spell, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the ash showed her, see below] At the end: she played the whole song, past where it usually stops. Hans logged: the bard played a song that is longer than the one she normally plays. I have the normal one on file. I have filed the new part separately. Her father asked where she got it. She did not say. I also did not say.

## End 2. Just Sit

You lay your palm flat on the string.

It stops. You've stopped ten thousand strings like that.

The mouths in the ash go quiet.

She's still on her knees. She stares at your hand on the strings.

@future: "Oh," she says.

She looks down at her own hands. The grey is going out of them, slowly, from the fingertips back. What's left under it is a pair of singer's hands with calluses and a split thumbnail.

@future: "Well, I'll be."

She doesn't say thank you. You wouldn't have either. She gets up and walks off into the ash, and she leaves the lute case lying where it is.

A long way behind her there's a doorway with fire in it, and the fire doesn't move. She doesn't look at it once.

You don't play anything. You set the ukulele down on the floor, out of the way, and sit down in the ash next to him with your shoulder against his.

{sound: silence}

Then the pale floor is gone and you're back in the cave, sitting beside your father, playing nothing. You can't remember ever sitting next to somebody without being the music.

He looks at you, a little surprised. Then he leans your way, just enough that his shoulder rests on yours.

He doesn't say anything, and you don't either.

?seen S1: After a while he says, very quietly, "There was a bird." And you say, "I know. I fed it."

> **Echo: Just Listen.** Before you roll a Wisdom (Insight) check to understand what someone means, or what they aren't saying, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the ash showed her] At the end: she stopped the string and sat with him without playing. Hans logged: the bard sat down next to her father and did not play anything for some time. I have checked. Her hands were fine. She just did not play. This is new. I have made a new category.

## End 3. Everybody Knows It

You hum the next note, the one that comes after the E. You hum it low and leave the strings alone.

Then you wait, and waiting is the hard part. Musicians don't. You've spent your life filling every gap in every room before anybody else could.

Nobody answers. She watches you from her knees.

Then, behind you, somebody hums it back. It's badly done and pitched down in the cellar, so it's Stig, who can't sing to save his life.

Hans is next, with a beep in the middle of his. Then Saphira comes in, so quietly that you nearly miss her, and she has every note right. You had no idea she'd been listening.

The older you is crying. You've never watched yourself cry before, and it isn't pretty.

@future: "Twenty years," she says. "Nobody ever picked it up before."

Then she's laughing, with your mother's laugh. She gets up and walks off into the ash, humming the next line.

Far ahead of her there's a doorway full of fire that doesn't move. Somebody big is sitting beside it with a towel over one knee. He picks the tune up too, badly.

{sound: notes-four}

The cave's back. The E has stopped and nobody is humming anything. Stig is sitting on his stone with the towel. Saphira is looking at the wall.

Your father's head has come up, though. He looks round the cave at each of them, puzzled.

"Did somebody just...?" he says. Nobody owns up.

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
- @future: Nobody ever picked it up before.
- She walks off humming. Far ahead, by a doorway of fire, somebody picks it up.
- Katy: E.
